// src/validators/donationValidator.js
const { body, param } = require('express-validator');

const validateCompletion = [
  param('requestId').isUUID().withMessage('Invalid request ID format'),
  param('responseId').isUUID().withMessage('Invalid response ID format'),
  body('units').isInt({ min: 1 }).withMessage('Units must be a positive integer'),
];

module.exports = {
  validateCompletion,
};