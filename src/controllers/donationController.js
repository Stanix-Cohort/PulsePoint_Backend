// src/controllers/donationController.js
const { recordDonationOutcome} = require('../services/donationService');
const { validationResult } = require('express-validator');

const completeDonation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const userId = req.user.id;
    const { requestId, responseId } = req.params;
    const { units, donationOutcome } = req.body;

    const donation = await recordDonationOutcome(userId, requestId, responseId, units, donationOutcome);

    return res.status(201).json({
      success: true,
      message: 'Donation confirmed and recorded successfully.',
      data: donation,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({ success: false, message: error.message });
    }
    next(error);
  }
};

module.exports = {
  completeDonation,
};