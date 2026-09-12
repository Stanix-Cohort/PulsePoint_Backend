// src/routes/donationRoute.js
const express = require('express');
const router = express.Router();
const { completeDonation } = require('../controllers/donationController');
const { validateCompletion } = require('../validators/donationValidator');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

// Hospital confirms donation completion for a specific accepted response
router.patch(
  '/:requestId/responses/:responseId/complete',
  auth,
  role('HOSPITAL'),
  validateCompletion,
  completeDonation
);

module.exports = router;