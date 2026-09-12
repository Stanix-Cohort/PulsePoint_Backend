// src/validators/responseValidator.js
const { body, param } = require('express-validator');

const validateResponseStatus = [
  param('requestId').isUUID().withMessage('Invalid request ID format'),
  body('status')
    .isIn(['ACCEPTED', 'DECLINED', 'WITHDRAWN'])
    .withMessage('Status must be either ACCEPTED, DECLINED, or WITHDRAWN'),
];

const validateRequestId = [
  param('requestId').isUUID().withMessage('Invalid request ID format'),
];

const validateCompletion = [
  param('requestId').isUUID().withMessage('Invalid request ID format'),
  param('responseId').isUUID().withMessage('Invalid response ID format'),
  body('units').isInt({ min: 1 }).withMessage('Units must be a positive integer'),
];

module.exports = {
  validateResponseStatus,
  validateRequestId,
  validateCompletion,
};