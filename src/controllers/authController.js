const { ne } = require("zod/locales");
const authService = require("../services/authService");


const registerDonor = async (req, res, next) => {
    try {
        const userData = req.body;
        const response = await authService.registerDonor(userData);
        return res.status(201).json({
            success: true,
            message: "Donor registration done successfully.",
            data: response,
        });
    } catch (error) {
        next(error);
    }
};

//====================================================

const registerHospital = async (req, res, next) => {
    try {
        const userData = req.body;
        const response = await authService.registerHospital(userData);
        return res.status(201).json({
            success: true,
            message: "Hospital registeration successful.",
            data: response,
        });
    } catch (error) {
        next(error);
    }
};

//====================================================

const login = async (req, res, next) => {
    try {
        const { email, passwordHash } = req.body;
        const response = await authService.login(email, passwordHash);
        return res.status(200).json({
            success: true,
            message: "Login successful.",
            data: response,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { registerDonor, registerHospital, login };