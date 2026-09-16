const notificationService = require("../services/notificationService");

// ============================================================
// GET /api/notifications
// Get notifications belonging to the authenticated user
// ============================================================

const getNotifications = async (req, res, next) => {
  try {
    const notifications = await notificationService.getUserNotifications(
      req.user.id,
    );

    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    next(error);
  }
};

// ============================================================
// PATCH /api/notifications/:id/read
// Mark one notification as read
// ============================================================

const markNotificationAsRead = async (req, res, next) => {
  try {
    const notification = await notificationService.markAsRead({
      userId: req.user.id,
      notificationId: req.params.id,
    });

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
// PATCH /api/notifications/read-all
// Mark all notifications belonging to the authenticated user
// as read
// ============================================================

const markAllNotificationsAsRead = async (req, res, next) => {
  try {
    const result = await notificationService.markAllAsRead(req.user.id);

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
