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

  return bloodRequest;
};

module.exports = {
  createBloodRequest,
};
