// src/routes/hospitalRoute.js
const express = require('express');
const router = express.Router();
const { upsertHospitalProfile, getHospitalProfile } = require('../controllers/hospitalController');
const { validateHospitalProfile } = require('../validators/hospitalValidator');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// All hospital profile routes require authentication and HOSPITAL role
router.use(authMiddleware, roleMiddleware('HOSPITAL'));

router.route('/profile')
  .get(getHospitalProfile)
  .post(validateHospitalProfile, upsertHospitalProfile);

module.exports = router;