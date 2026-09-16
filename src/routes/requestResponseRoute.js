const express = require("express");
const router = express.Router();
const {
  respondToBloodRequest,
  getAcceptedDonorsForRequest,
} = require("../controllers/requestResponseController");
const {
  validateResponseStatus,
  validateRequestId,
} = require("../validators/requestResponseValidator");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// Donor responds to a request (accept, decline, or withdraw via body status)
router.post(
  "/:requestId/respond",
  auth,
  role("DONOR"),
  validateResponseStatus,
  respondToBloodRequest,
);

// Hospital fetches all donors who accepted their request
router.get(
  "/:requestId/responses",
  auth,
  role("HOSPITAL"),
  validateRequestId,
  getAcceptedDonorsForRequest,
);

module.exports = router;
