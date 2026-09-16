const prisma = require("../config/prisma");

const createNotification = async ({
  type,
  donorId = null,
  hospitalId = null,
  title,
  message,
  requestId = null,
}) => {
  // A notification should have exactly one recipient.
  if (!donorId && !hospitalId) {
    const error = new Error("A notification recipient is required.");
    error.statusCode = 400;
    throw error;
  }

  if (donorId && hospitalId) {
    const error = new Error(
      "A notification cannot target both a donor and a hospital.",
    );
    error.statusCode = 400;
    throw error;
  }

  return prisma.notification.create({
    data: {
      type,
      donorId,
      hospitalId,
      title,
      message,
      requestId,
    },
  });
};

const createDonorNotification = (data) =>
  createNotification({
    ...data,
    donorId: data.donorId,
  });

const createHospitalNotification = (data) =>
  createNotification({
    ...data,
    hospitalId: data.hospitalId,
  });

module.exports = {
  createNotification,
  createDonorNotification,
  createHospitalNotification,
};
