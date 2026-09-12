const prisma = require("../config/prisma");

// Create or Update Hospital Profile
const upsertHospitalProfile = async (req, res, next) => {
  try {
    const userId = req.user.sub || req.user.id;
    const {
      hospitalName,
      licenseId,
      phoneNumber,
      state,
      address,
      logoUrl,
      contactName,
      contactPhone,
      contactRole,
    } = req.body;

    const hospitalData = {
      hospitalName,
      licenseId,
      phoneNumber,
      state,
      address,
      logoUrl,
      contactName,
      contactPhone,
      contactRole,
    };

    const hospital = await prisma.hospital.upsert({
      where: { userId },
      update: hospitalData,
      create: {
        userId,
        ...hospitalData,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Hospital profile saved successfully",
      data: hospital,
    });
  } catch (error) {
    next(error);
  }
};

const getHospitalProfile = async (req, res, next) => {
  try {
    const userId = req.user.sub || req.user.id;

    const hospital = await prisma.hospital.findUnique({
      where: { userId },
      include: { requests: true },
    });

    if (!hospital) {
      return res
        .status(404)
        .json({ success: false, message: "Hospital profile not found" });
    }

    return res.status(200).json({
      success: true,
      data: hospital,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  upsertHospitalProfile,
  getHospitalProfile,
};
