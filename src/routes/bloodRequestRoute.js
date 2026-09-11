const express = require("express");
const { validate } = require("../validators/bloodRequestValidator");
const {
  createBloodRequest,
  getDonorMatches,
  getMatchingDonors,
} = require("../controllers/bloodRequestController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

// POST hospital blood requests
router.post("/", auth, role("HOSPITAL"), validate, createBloodRequest);

// GET request match for donors
router.get("/", auth, role("DONOR"), getDonorMatches);

// GET donor matches for a specific blood request
router.get("/:requestId/matches", auth, role("HOSPITAL"), getMatchingDonors);

module.exports = router;
