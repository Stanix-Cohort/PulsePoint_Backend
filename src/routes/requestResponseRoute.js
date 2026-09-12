// src/routes/responseRoute.js
const express = require('express');
const router = express.Router();
const {
  respondToBloodRequest,
  getAcceptedDonorsForRequest,
  completeDonation,
} = require('../controllers/responseController');
const {
  validateResponseStatus,
  validateRequestId,
  validateCompletion,
} = require('../validators/responseValidator');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

// Donor responds to a request (accept, decline, or withdraw via body status)
router.post(
  '/:requestId/respond',
  auth,
  role('DONOR'),
  validateResponseStatus,
  respondToBloodRequest
);

// Hospital fetches all donors who accepted their request
router.get(
  '/:requestId/responses',
  auth,
  role('HOSPITAL'),
  validateRequestId,
  getAcceptedDonorsForRequest
);

// Hospital confirms donation completion for a specific accepted response
router.patch(
  '/:requestId/responses/:responseId/complete',
  auth,
  role('HOSPITAL'),
  validateCompletion,
  completeDonation
);

module.exports = router;