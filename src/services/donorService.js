const prisma = require("../config/prisma");

const getDonorByUserId = async (userId) => {
  return await prisma.donor.findUnique({
      where: { userId: userId },
      select: {
        fullName: true,
          bloodType: true,
          dateOfBirth: true,
            phoneNumber: true,
            address: true,
            state: true,
            isAvailable: true,
      },
  });
};

const updateDonorProfile = async (userId, donorData) => {

  const updateData = {};

  if (donorData.fullName !== undefined)
    updateData.fullName = donorData.fullName;
  if (donorData.bloodType !== undefined)
    updateData.bloodType = donorData.bloodType;
  if (donorData.phoneNumber !== undefined)
    updateData.phoneNumber = donorData.phoneNumber;
  if (donorData.address !== undefined) updateData.address = donorData.address;
  if (donorData.state !== undefined) updateData.state = donorData.state;
  if (donorData.isAvailable !== undefined)
    updateData.isAvailable = donorData.isAvailable;

  if (donorData.dateOfBirth !== undefined) {
    updateData.dateOfBirth = new Date(donorData.dateOfBirth);
  }

  // Prevent database query if no valid fields were sent
  if (Object.keys(updateData).length === 0) {
    const error = new Error("No valid fields provided for update.");
    error.statusCode = 400;
    throw error;
  }

  return await prisma.donor.update({
    where: { userId },
    data: updateData,
  });
};

module.exports = {
  getDonorByUserId,
  updateDonorProfile,
};
