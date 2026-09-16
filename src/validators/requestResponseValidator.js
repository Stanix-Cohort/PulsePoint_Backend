const { body, param } = require("express-validator");

const validateResponseStatus = [
  param("requestId").isUUID().withMessage("Invalid request ID format"),
  body("status")
    .isIn(["ACCEPTED", "DECLINED", "WITHDRAWN"])
    .withMessage("Status must be either ACCEPTED, DECLINED, or WITHDRAWN"),
];

const validateRequestId = [
  param("requestId").isUUID().withMessage("Invalid request ID format"),
];

module.exports = {
  validateResponseStatus,
  validateRequestId,
};
