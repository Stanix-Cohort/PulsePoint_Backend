const { types } = require("pg");
const prisma = require("../config/prisma");
const { getCompatibleDonors } = require("../utils/bloodCompatibility");
const { createDonorNotification } = require("./notificationService");

const createBloodRequest = async ({ userId, data }) => {
  // 1. Fetch hospital profile
  const hospital = await prisma.hospital.findUnique({
    where: { userId },
  });

  if (!hospital) {
    const error = new Error("Hospital profile not found.");
    error.statusCode = 404;
    throw error;
  }

  // 2. Prevent duplicate open requests for the same blood type
  const existingRequest = await prisma.bloodRequest.findFirst({
    where: {
      hospitalId: hospital.id,
      bloodType: data.bloodType,
      status: { in: ["OPEN", "PARTIALLY_FULFILLED"] },
    },
  });

  if (existingRequest) {
    const error = new Error(
      "You already have an open request for this blood type.",
    );
    error.statusCode = 400;
    throw error;
  }

  // 3. Create the blood request
  const bloodRequest = await prisma.bloodRequest.create({
    data: {
      hospitalId: hospital.id,
      bloodType: data.bloodType,
      unitsRequired: data.unitsRequired,
      urgencyLevel: data.urgencyLevel,
      notes: data.notes || null,
      status: "OPEN",
    },
  });
  console.log("Blood request notification successful");

  // 4. Notify all compatible and available donors
  try {
    // Get array of compatible blood types
    const compatibleBloodTypes = await getCompatibleDonors(data.bloodType);

    // Query active donors with compatible blood types in the same location (optional filter)
    const matchedDonors = await prisma.donor.findMany({
      where: {
        bloodType: { in: compatibleBloodTypes },
        isAvailable: true,
      },
      select: { id: true, fullName: true },
    });

    if (matchedDonors.length > 0) {
      const notifTitle = `${data.bloodType} Blood Needed. Status: ${data.urgencyLevel}`;
      const notifMessage = `${hospital.hospitalName} in ${hospital.state} requires ${data.unitsRequired} unit(s) of ${data.bloodType} blood.`;

      // Dispatch notifications in parallel without blocking DB response
      Promise.all(
        matchedDonors.map((donor) =>
          createDonorNotification({
            donorId: donor.id,
            title: notifTitle,
            message: notifMessage,
            requestId: bloodRequest.id,
            type: "NEW_BLOOD_REQUEST",
          }).catch((err) =>
            console.error(`Failed to notify donor ${donor.id}:`, err),
          ),
        ),
      );
      console.log("Notification sent", matchedDonors);
    } else {
      console.log("No match notified");
    }
  } catch (notifErr) {
    console.error("Error broadcasting donor notifications:", notifErr);
  }

  // 5. Return response payload
  return {
    bloodRequest: {
      id: bloodRequest.id,
      bloodType: bloodRequest.bloodType,
      units: bloodRequest.units,
      urgencyLevel: bloodRequest.urgencyLevel,
      notes: bloodRequest.notes,
      status: bloodRequest.status,
    },
    hospital: {
      hospitalName: hospital.hospitalName,
      phoneNumber: hospital.phoneNumber,
      address: hospital.address,
      state: hospital.state,
    },
  };
};

//===========================================================

const getAllBloodRequests = async (userId) => {
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

  const bloodRequests = await prisma.bloodRequest.findMany({
    where: {
      hospitalId: hospital.id,
    },

    select: {
      id: true,
      bloodType: true,
      unitsRequired: true,
      urgencyLevel: true,
      notes: true,
      status: true,
      createdAt: true,
    },
  });

  return bloodRequests;
};

//===========================================================

const updateBloodRequest = async (requestId, requestData) => {
  const updateData = {};

  if (requestData.bloodType !== undefined)
    updateData.bloodType = requestData.bloodType;
  if (requestData.units !== undefined) updateData.units = requestData.units;
  if (requestData.urgencyLevel !== undefined)
    updateData.urgencyLevel = requestData.urgencyLevel;
  if (requestData.notes !== undefined) updateData.notes = requestData.notes;
  if (requestData.status !== undefined) {
    updateData.status = requestData.status;
  }

  if (Object.keys(updateData).length === 0) {
    const error = new Error("No valid fields provided for update.");
    error.statusCode = 400;
    throw error;
  }

  const existingRequestStatus = await prisma.bloodRequest.findFirst({
    where: {
      id: requestId,
    },
  });
  if (existingRequestStatus.status === requestData.status) {
    const error = new Error(
      `The blood request status is already existing as ${updateData.status}`,
    );
    error.statusCode = 400;
    throw error;
  }

  const bloodRequest = await prisma.bloodRequest.update({
    where: {
      id: requestId,
    },
    data: updateData,
  });

  return bloodRequest;
};

module.exports = {
  createBloodRequest,
  getAllBloodRequests,
  updateBloodRequest,
};
