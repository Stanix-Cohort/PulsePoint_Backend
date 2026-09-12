// src/services/donationService.js
const prisma = require('../config/prisma');

const confirmDonationCompletion = async (userId, requestId, responseId, units) => {
  const hospital = await prisma.hospital.findUnique({
    where: { userId },
  });

  if (!hospital) {
    throw { status: 404, message: 'Hospital profile not found.' };
  }

  const bloodRequest = await prisma.bloodRequest.findUnique({
    where: { id: requestId },
  });

  if (!bloodRequest || bloodRequest.hospitalId !== hospital.id) {
    throw { status: 403, message: 'Unauthorized or blood request not found.' };
  }

  const response = await prisma.requestResponse.findUnique({
    where: { id: responseId },
  });

  if (!response || response.requestId !== requestId || response.status !== 'ACCEPTED') {
    throw { status: 400, message: 'Invalid response or donor has not accepted this request.' };
  }

  const existingDonation = await prisma.donation.findUnique({
    where: { responseId },
  });

  if (existingDonation) {
    throw { status: 400, message: 'Donation has already been confirmed for this response.' };
  }

  const donation = await prisma.$transaction(async (tx) => {
    const newDonation = await tx.donation.create({
      data: {
        requestId,
        donorId: response.donorId,
        responseId,
        units,
        confirmedById: userId,
      },
    });

    await tx.bloodRequest.update({
      where: { id: requestId },
      data: { status: 'COMPLETED' },
    });

    return newDonation;
  });

  return donation;
};

module.exports = {
  confirmDonationCompletion,
};