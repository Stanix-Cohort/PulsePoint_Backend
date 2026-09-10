const express = require('express');
const donorController = require('../controllers/donorController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/me', auth, role('DONOR'), donorController.getDonorProfile);
router.patch('/me', auth, role('DONOR'), donorController.updateDonorProfile);

module.exports = router;