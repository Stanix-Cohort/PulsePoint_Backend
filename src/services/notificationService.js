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

//===============================================================================

const createDonorNotification = (data) =>
  createNotification({
    ...data,
    donorId: data.donorId,
  });

  //===============================================================================

const createHospitalNotification = (data) =>
  createNotification({
    ...data,
    hospitalId: data.hospitalId,
  });

  //===============================================================================

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
      isRead: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return notifications;
};

//===============================================================================

const markNotificationAsRead = async (notificationId, userId) => {
  if (!notificationId || !userId) {
    const error = new Error("Notification ID and User ID are required.");
    error.statusCode = 400;
    throw error;
  }

  // Fetch user to get their donor or hospital profile ID
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

  const profileId = user.role === "DONOR" ? user.donor?.id : user.hospital?.id;
  const targetField = user.role === "DONOR" ? "donorId" : "hospitalId";

  if (!profileId) {
    const error = new Error("User profile not found.");
    error.statusCode = 404;
    throw error;
  }

  // Find notification and ensure ownership
  const notification = await prisma.notification.findFirst({
    where: {
      id: notificationId,
      [targetField]: profileId,
    },
  });

  if (!notification) {
    const error = new Error("Notification not found or access denied.");
    error.statusCode = 404;
    throw error;
  }

  // Update status to read
  const updatedNotification = await prisma.notification.update({
    where: { id: notificationId },
    data: { isRead: true }, 
  });

  return updatedNotification;
};

//===============================================================================

const markAllNotificationsAsRead = async (userId) => {
  if (!userId) {
    const error = new Error("User ID is required.");
    error.statusCode = 400;
    throw error;
  }

  // 1. Resolve user profile ID
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

  const profileId = user.role === "DONOR" ? user.donor?.id : user.hospital?.id;
  const targetField = user.role === "DONOR" ? "donorId" : "hospitalId";

  if (!profileId) {
    const error = new Error("User profile not found.");
    error.statusCode = 404;
    throw error;
  }

  // 2. Bulk update all unread notifications for this profile
  const result = await prisma.notification.updateMany({
    where: {
      [targetField]: profileId,
      isRead: false, // target only unread notifications to save database index work
    },
    data: {
      isRead: true, // or status: "READ"
    },
  });

  return {
    message: "All notifications marked as read.",
    updatedCount: result.count,
  };
};

module.exports = {
  getUserNotifications,
  createNotification,
  createDonorNotification,
  createHospitalNotification,
};
