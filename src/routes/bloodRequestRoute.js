const express = require("express");
const { validate } = require("../validators/bloodRequestValidator");
const {
  createBloodRequest,
  getBloodRequests,
  updateBloodRequest,
  getDonorMatches,

  getMatchingDonors,
} = require("../controllers/bloodRequestController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

// POST hospital blood requests
router.post("/", auth, role("HOSPITAL"), validate, createBloodRequest);

// GET all blood requests
router.get("/", auth, role("HOSPITAL"), getBloodRequests);

// PATCH update blood request status
router.patch("/:requestId/update", auth, role("HOSPITAL"), updateBloodRequest);

// GET request match for donors
router.get("/mymatch", auth, role("DONOR"), getDonorMatches);

// GET donor matches for a specific blood request
// router.get("/:requestId/matches", auth, role("HOSPITAL"), getMatchingDonors);

module.exports = router;
