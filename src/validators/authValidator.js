const { date } = require("zod");

const validateDonorRegistration = (req, res, next) => {
    const { email, passwordHash, fullName, bloodType, dateOfBirth } = req.body;   

    if (!email) {
        return res.status(400).json({ success: false, message: "Email is required." });
    }
    if (!passwordHash) {
        return res.status(400).json({ success: false, message: "Password is required." });
    }
    if (!fullName) {
        return res.status(400).json({ success: false, message: "Full name is required." });
    }
    if (!bloodType) {
        return res.status(400).json({ success: false, message: "Blood type is required." });
    }
    if (!dateOfBirth) {
        return res.status(400).json({ success: false, message: "Date of birth is required." });
    }
    if (typeof dateOfBirth !== "string"  || isNaN(new Date(dateOfBirth))) {
        return res
          .status(400)
          .json({
            success: false,
            message:
              "Date of birth must be a valid date in the format YYYY-MM-DD or YYYY/MM/DD ",
          });
    }
    next();
};
  
const validateHospitalRegistration = (req, res, next) => {
    const { email, passwordHash, hospitalName, phoneNumber, address } = req.body;
    if (!email) {
        return res.status(400).json({ success: false, message: "Email is required." });
    }
    if (!passwordHash) {
        return res.status(400).json({ success: false, message: "Password is required." });
    }
    if (!hospitalName) {
        return res.status(400).json({ success: false, message: "Hospital name is required." });
    }
    if (!phoneNumber) {
        return res.status(400).json({ success: false, message: "Phone number is required." });
    }
    if (!address) {
        return res.status(400).json({ success: false, message: "Address is required." });
    }
    next();
};

module.exports = { validateDonorRegistration, validateHospitalRegistration };