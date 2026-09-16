const prisma = require('../config/prisma');

const recordDonationOutcome = async (
  userId,
  requestId,
  responseId,
  { units, donationOutcome },
) => {
  // Validate donation outcome.
  if (!["DONATED", "NO_SHOW"].includes(donationOutcome)) {
    const error = new Error(
      "Invalid donor status. Must be DONATED or NO_SHOW.",
    );
    error.statusCode = 400;
    throw error;
  }

  if (
    donationOutcome === "DONATED" &&
    (!Number.isInteger(units) || units <= 0)
  ) {
    const error = new Error(
      "Please specify valid units collected for a successful donation.",
    );
    error.statusCode = 400;
    throw error;
  }

  if (donationOutcome === "NO_SHOW" && units != null) {
    const error = new Error("A no-show donation cannot contain donated units.");
    error.statusCode = 400;
    throw error;
  }

  // Fetch blood request & verify hospital ownership

  const hospital = await prisma.hospital.findUnique({
    where: {
      userId,
    },
  });

  if (!hospital) {
    const error = new Error("Hospital profile not found.");
    error.statusCode = 404;
    throw error;
  }

  const bloodRequest = await prisma.bloodRequest.findFirst({
    where: {
      id: requestId,
      hospital: { userId },
    },
  });

  if (!bloodRequest) {
    const error = new Error("Unauthorized access or blood request not found.");
    error.statusCode = 404;
    throw error;
  }

  if (
    bloodRequest.status === "COMPLETED" ||
    bloodRequest.status === "CANCELLED"
  ) {
    const error = new Error("This blood request is no longer active.");
    error.statusCode = 400;
    throw error;
  }

  // Isolated transaction execution
  const donation = await prisma.$transaction(async (tx) => {
    // Verify donor accepted the request
    const response = await tx.requestResponse.findFirst({
      where: {
        id: responseId,
        requestId,
        status: "ACCEPTED",
      },
    });

    if (!response) {
      const error = new Error(
        "Accepted donor response not found for this request.",
      );
      error.statusCode = 400;
      throw error;
    }

    // Guard against recording multiple outcomes for the same response
    const existingDonation = await tx.donation.findUnique({
      where: { responseId },
    });

    if (existingDonation) {
      const error = new Error(
        "A donation outcome has already been logged for this donor.",
      );
      error.statusCode = 400;
      throw error;
    }

    // Create donation record with status & collected units
    const newDonation = await tx.donation.create({
      data: {
        requestId,
        donorId: response.donorId,
        responseId,
        units: donationOutcome === "DONATED" ? units : null,
        donationOutcome,
        confirmedById: userId,
      },
    });

    // If the donor actually donated, increase the request's fulfilled quantity.

    let updatedRequest = bloodRequest;

    if (donationOutcome === "DONATED") {
      const newUnitsFulfilled = bloodRequest.unitsFulfilled + units;

      // Determine the new request status.

      let newStatus = "PARTIALLY_FULFILLED";

      if (newUnitsFulfilled >= bloodRequest.unitsRequired) {
        newStatus = "COMPLETED";
      } else if (newUnitsFulfilled === 0) {
        newStatus = "OPEN";
      }

      updatedRequest = await tx.bloodRequest.update({
        where: {
          id: requestId,
        },

        data: {
          unitsFulfilled: newUnitsFulfilled,
          status: newStatus,
        },
      });
    }

    return {
      donation: newDonation,
      request: updatedRequest,
    };
  });

  // 4. Send tailored notification to the donor
  const message =
    donation.donationOutcome === "DONATED"
      ? `Your donation of ${donation.units} unit(s) has been recorded.`
      : `Your response for request ${requestId} was recorded as a no-show.`;

  await createDonorNotification({
    donorId: donation.donorId,
    title:
      donation.donationOutcome === "DONATED"
        ? "Donation Confirmed"
        : "Donation Marked as No-Show",
    message,
    requestId,
  }).catch(() => null);

  return donation;
};

module.exports = {
  recordDonationOutcome,
};