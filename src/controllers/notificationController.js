const notificationService = require("../services/notificationService");

// ============================================================

// Get notifications belonging to the authenticated user
// ============================================================

const getNotifications = async (req, res, next) => {
  try {
    const notifications = await notificationService.getUserNotifications(
      req.user.id,
    );

    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
    });
  } catch (error) {
    next(error);
  }
};

// ============================================================
// Mark one notification as read
// ============================================================

const markNotificationAsRead = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const {notificationId} = req.params;
    const notification = await notificationService.markNotificationAsRead(
      notificationId,
      userId,
    );

    res.status(200).json({
      success: true,
      message: "Notification marked as read.",
      data: notification,
    });
  } catch (error) {
    next(error);
  }
};

// ============================================================

// Mark all notifications belonging to the authenticated user
// as read
// ============================================================

const markAllNotificationsAsRead = async (req, res, next) => {
  try {
    const result = await notificationService.markAllNotificationsAsRead(
      req.user.id,
    );

    res.status(200).json({
      success: true,
      message: "All notifications marked as read.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
};
