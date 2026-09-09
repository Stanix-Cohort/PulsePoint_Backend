const express = require("express");

const auth = require("../middleware/authMiddleware");
const { validateDonorRegistration, validateHospitalRegistration } = require("../validators/authValidator");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register/donor", validateDonorRegistration, authController.registerDonor);

router.post("/register/hospital", validateHospitalRegistration, authController.registerHospital);

router.post("/login", authController.login);

module.exports = router;