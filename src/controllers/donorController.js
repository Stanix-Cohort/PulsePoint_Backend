const donorService = require('../services/donorService');

const getDonorProfile = async (req, res, next) => {
    try {
        const userId = req.user.sub || req.user.id;
        const donor = await donorService.getDonorByUserId(userId);
        if (!donor) {
            return res.status(404).json({ success: false, message: 'Donor profile not found' });
        }
        return res.status(200).json({
            success: true,
            data: donor,
        });
    } catch (error) {
        next(error);
    }
};

//====================================================

const updateDonorProfile = async (req, res, next) => {
    try {
        const userId = req.user.sub || req.user.id;        
        const donorData = req.body;
        const updatedDonor = await donorService.updateDonorProfile(userId, donorData);
        return res.status(200).json({
            success: true,
            message: 'Donor profile updated successfully',
            data: updatedDonor,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getDonorProfile, updateDonorProfile };