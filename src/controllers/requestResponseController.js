// src/controllers/responseController.js
const {
  processDonorResponse,
  fetchAcceptedDonors,
  confirmDonationCompletion,
} = require("../services/responseService");
const { validationResult } = require("express-validator");

const respondToBloodRequest = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const userId = req.user.sub || req.user.id;
    const { requestId } = req.params;
    const { status } = req.body;

    const response = await processDonorResponse(userId, requestId, status);

    return res.status(200).json({
      success: true,
      message: `Request response updated to ${status}`,
      data: response,
    });
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json({ success: false, message: error.message });
    }
    next(error);
  }
};

const getAcceptedDonorsForRequest = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const userId = req.user.sub || req.user.id;
    const { requestId } = req.params;

    const responses = await fetchAcceptedDonors(userId, requestId);

    return res.status(200).json({
      success: true,
      count: responses.length,
      data: responses,
    });
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json({ success: false, message: error.message });
    }
    next(error);
  }
};

const completeDonation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const userId = req.user.sub || req.user.id;
    const { requestId, responseId } = req.params;
    const { units } = req.body;

    const donation = await confirmDonationCompletion(
      userId,
      requestId,
      responseId,
      units,
    );

    return res.status(201).json({
      success: true,
      message: "Donation confirmed and recorded successfully.",
      data: donation,
    });
  } catch (error) {
    if (error.status) {
      return res
        .status(error.status)
        .json({ success: false, message: error.message });
    }
    next(error);
  }
};

module.exports = {
  respondToBloodRequest,
  getAcceptedDonorsForRequest,
  completeDonation,
};
  