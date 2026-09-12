const prisma = require("../config/prisma");

const createBloodRequest = async ({ userId, data }) => {
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
const existingRequest = await prisma.bloodRequest.findFirst({
    where: {
      hospitalId: hospital.id,
      bloodType: data.bloodType,
      status: {in: ["OPEN", "PARTIALLY_FULFILLED"]}, 
    },
  });

  if (existingRequest) {
    const error = new Error("You already have an open request for this blood type.");
    error.statusCode = 400;
    throw error;
  }
  const bloodRequest = await prisma.bloodRequest.create({
    data: {
      hospitalId: hospital.id,
      bloodType: data.bloodType,
      units: data.units,
      urgencyLevel: data.urgencyLevel,
      notes: data.notes || null,
      status: "OPEN",
    },
  });

  return {bloodRequest: {
    // id: bloodRequest.id,
    // hospitalId: bloodRequest.hospitalId,
    bloodType: bloodRequest.bloodType,
    units: bloodRequest.units,
    urgencyLevel: bloodRequest.urgencyLevel,
    notes: bloodRequest.notes,
    status: bloodRequest.status,
  }, hospital: {
      hospitalName: hospital.hospitalName,
        phoneNumber: hospital.phoneNumber,
          address: hospital.address,
            state: hospital.state,
  }
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
          units: true,
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

  if (requestData.bloodType !== undefined) updateData.bloodType = requestData.bloodType;
  if (requestData.units !== undefined) updateData.units = requestData.units;
  if (requestData.urgencyLevel !== undefined) updateData.urgencyLevel = requestData.urgencyLevel;
    if (requestData.notes !== undefined) updateData.notes = requestData.notes;
    if (requestData.status !== undefined) {
      updateData.status = requestData.status;
    }

if (Object.keys(updateData).length === 0) {
  const error = new Error("No valid fields provided for update.");
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
  updateBloodRequest
};
