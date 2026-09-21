const prisma = require("../config/prisma");
const { getCompatibleDonors } = require("../utils/bloodCompatibility");
const { createHospitalNotification } = require("./notificationService");

// Donor accepts, decline or withdraw from a matched request
const processDonorResponse = async (userId, requestId, status) => {
  // 1. Validate the requested response status.
  if (!["ACCEPTED", "DECLINED", "WITHDRAWN"].includes(status)) {
    const error = new Error("Invalid response status.");
    error.statusCode = 400;
    throw error;
  }

  //  Find the donor profile belonging to the authenticated user.
  const donor = await prisma.donor.findUnique({
    where: { userId },
  });

  if (!donor) {
    const error = new Error("Donor profile not found.");
    error.statusCode = 404;
    throw error;
  }

  //  Find the blood request from id taken from the already fetched matching request
  const bloodRequest = await prisma.bloodRequest.findUnique({
    where: { id: requestId },
  });

  if (!bloodRequest) {
    const error = new Error("Blood request not found.");
    error.statusCode = 404;
    throw error;
  }

  //  Donors cannot respond to requests that are already closed.
  if (
    bloodRequest.status === "COMPLETED" ||
    bloodRequest.status === "CANCELLED"
  ) {
    const error = new Error("This blood request is no longer available.");
    error.statusCode = 400;
    throw error;
  }

  // Check blood-type compatibility.
  const compatibleDonors = getCompatibleDonors(bloodRequest.bloodType);

  if (!compatibleDonors.includes(donor.bloodType)) {
    const error = new Error("You are not a compatible donor for this request.");
    error.statusCode = 400;
    throw error;
  }

  // Process the response inside a transaction. This protects the unique (requestId, donorId) constraint and keeps the response state change atomic.
  const response = await prisma.$transaction(async (tx) => {
    const existingResponse = await tx.requestResponse.findUnique({
      where: {
        requestId_donorId: {
          requestId,
          donorId: donor.id,
        },
      },
    });

    //  If the donor is trying to submit the exact same status, there is nothing to change.
    if (existingResponse?.status === status) {
      return existingResponse;
    }

    //  Once a donation outcome has been recorded for a response, the donor should not be able to change that response afterward.
    // Example:
    // ACCEPTED → hospital records DONATED, the donor should no longer be able to WITHDRAW it.

    if (existingResponse) {
      const existingDonation = await tx.donation.findUnique({
        where: {
          responseId: existingResponse.id,
        },
      });

      if (existingDonation) {
        const error = new Error(
          "This donor response already has a recorded donation outcome and can no longer be changed.",
        );
        error.statusCode = 400;
        throw error;
      }
    }

    // Create the response if it does not exist, or update the existing response.
    if (!existingResponse) {
      return tx.requestResponse.create({
        data: {
          requestId,
          donorId: donor.id,
          status,
        },
      });
    }

    return tx.requestResponse.update({
      where: {
        id: existingResponse.id,
      },
      data: {
        status,
      },
    });
  });

  // Notify the hospital when the response actually changes.
  if (response.status !== "WITHDRAWN" || status === "WITHDRAWN") {
    let title;
    let message;
    let type;

    switch (status) {
      case "ACCEPTED":
        title = "Donor Accepted Request";
        type = "RESPONSE_ACCEPTED";
        message = `${donor.fullName} (${donor.bloodType}) accepted your request for ${bloodRequest.bloodType} blood.`;
        break;

      // case "DECLINED":
      //   title = "Donor Declined Request";
      //   message = `A matched donor declined your request for ${bloodRequest.bloodType} blood.`;
      //   break;

      case "WITHDRAWN":
        title = "Donor Withdrew Acceptance";
        type = "RESPONSE_WITHDRAWN";
        message = `${donor.fullName} withdrew their response for request ID: ${bloodRequest.id}.`;
        break;
    }

    if (title && message) {
      await createHospitalNotification({
        hospitalId: bloodRequest.hospitalId,
        title,
        message,
        type,
        requestId: bloodRequest.id,
      });
    }
  }

  return response;
};

//===================================================================================

const fetchAcceptedDonors = async (userId, requestId) => {
  // Fetch hospital and verify ownership of the blood request in a single query
  const bloodRequest = await prisma.bloodRequest.findFirst({
    where: {
      id: requestId,
      hospital: { userId },
    },
  });

  if (!bloodRequest) {
    const error = new Error("Blood request not found or unauthorized access.");
    error.statusCode = 404;
    throw error;
  }

  // 2. Fetch accepted responses with clean donor payload structure
  const responses = await prisma.requestResponse.findMany({
    where: {
      requestId,
      status: "ACCEPTED",
    },
    select: {
      id: true,
      status: true,
      createdAt: true,
      donor: {
        select: {
          id: true,
          fullName: true,
          bloodType: true,
          phoneNumber: true,
          dateOfBirth:true
        },
      },
      donation: {
        select: {
          id: true,
          units: true,
          donationOutcome: true,
          outcomeRecordedAt: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return responses;
};

//================================================

// const fetchDonorResponses = async (userId) => {};

module.exports = {
  processDonorResponse,
  fetchAcceptedDonors,
};
