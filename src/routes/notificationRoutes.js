const express = require("express");

const {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} = require("../controllers/notificationController");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Get notifications belonging to the authenticated user
router.get("/", auth, getNotifications);

// Mark one notification as read
router.patch("/:id/read", auth, markNotificationAsRead);

// Mark all notifications belonging to the authenticated user as read
router.patch("/read-all", auth, markAllNotificationsAsRead);

module.exports = router;
