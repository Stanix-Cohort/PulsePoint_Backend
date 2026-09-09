const { body, validationResult } = require('express-validator');

const validateHospitalProfile = [
  body('hospitalName')
    .trim()
    .notEmpty()
    .withMessage('Hospital name is required'),
  body('phoneNumber')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required'),
  body('address')
    .trim()
    .notEmpty()
    .withMessage('Address is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateHospitalProfile }; 