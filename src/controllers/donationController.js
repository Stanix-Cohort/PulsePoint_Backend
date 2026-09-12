// src/controllers/donationController.js
const { confirmDonationCompletion } = require('../services/donationService');
const { validationResult } = require('express-validator');

const completeDonation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const userId = req.user.sub || req.user.id;
    const { requestId, responseId } = req.params;
    const { units } = req.body;

    const donation = await confirmDonationCompletion(userId, requestId, responseId, units);

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