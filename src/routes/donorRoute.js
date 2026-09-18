const express = require('express');
const donorController = require('../controllers/donorController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/profile', auth, role('DONOR'), donorController.getDonorProfile);
router.patch('/profile', auth, role('DONOR'), donorController.updateDonorProfile);

module.exports = router;