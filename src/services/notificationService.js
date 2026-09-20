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

const getUserNotifications = async (userId) => {
  if (!userId) {
    const error = new Error("User ID is required.");
    error.statusCode = 400;
    throw error;
  }

  // Fetch user role and profile IDs
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      role: true,
      donor: { select: { id: true } },
      hospital: { select: { id: true } },
    },
  });

  if (!user) {
    const error = new Error("User not found.");
    error.statusCode = 404;
    throw error;
  }

  if (!user.role) {
    const error = new Error("User role not available.");
    error.statusCode = 400;
    throw error;
  }

  // Resolve target filter and profile 
  let targetField = null;
  let profileId = null;

  if (user.role === "DONOR") {
    profileId = user.donor?.id;
    targetField = "donorId";
  } else if (user.role === "HOSPITAL") {
    profileId = user.hospital?.id;
    targetField = "hospitalId";
  } else {
    const error = new Error(`Unsupported user role: ${user.role}`);
    error.statusCode = 400;
    throw error;
  }

  // Guard against missing profile records
  if (!profileId) {
    const error = new Error(`${user.role.toLowerCase()} profile not found.`);
    error.statusCode = 404;
    throw error;
  }

  //  Fetch notifications
  const notifications = await prisma.notification.findMany({
    where: {
      [targetField]: profileId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return notifications;
};

module.exports = {
  getUserNotifications,
  createNotification,
  createDonorNotification,
  createHospitalNotification,
};
