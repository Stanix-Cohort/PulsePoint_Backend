const bcrypt = require("bcryptjs");
const prisma = require("../config/prisma");
const { generateToken } = require("../config/jwt");
const { th } = require("zod/locales");

//======================================================================

const registerDonor = async (userData) => {
  const {
    email,
    passwordHash,
    fullName,
    bloodType,
    dateOfBirth,
    gender,
    phoneNumber,
    address,
    state,
  } = userData;

  const normalizeEmail = email.toLowerCase().trim();

  const existingUser = await prisma.user.findUnique({
    where: { email: normalizeEmail },
  });
  if (existingUser) {
    const error = new Error(
      "Cannot create account with this email. Please use a different email.",
    );
    error.statusCode = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(passwordHash, 10);
  const user = await prisma.$transaction(async (tx) => {
    const donorUser = await tx.user.create({
      data: {
        email: normalizeEmail,
        passwordHash: hashedPassword,
        role: "DONOR",
      },
    });
  
    await tx.donor.create({
      data: {
        userId: donorUser.id,
        fullName,
        bloodType,
        dateOfBirth: new Date(dateOfBirth),
        gender,
        phoneNumber,
        address,
        state,
      },
    });
    return donorUser;
  });

  const token = generateToken({ sub: user.id, role: user.role });
  return {
    user: { userid: user.id, email: user.email, role: user.role },
    token,
  };
};

//======================================================================

const registerHospital = async (userData) => {
  const {
    email,
    passwordHash,
    hospitalName,
    phoneNumber,
    address,
    state,
    licenseId,
    contactName,
    contactPhone,
    contactRole,
  } = userData;
  const normalizeEmail = email.toLowerCase().trim();
  const normalizeLicenseId = licenseId.trim();

  const existingUser = await prisma.user.findUnique({
    where: { email: normalizeEmail },
  });
  if (existingUser) {
    const error = new Error(
      "Cannot create account with this email. Please use a different email.",
    );
    error.statusCode = 400;
    throw error;
  }
  const existingLicenseId = await prisma.hospital.findUnique({
    where: { licenseId: normalizeLicenseId },
  });
  if (existingLicenseId) {
    const error = new Error("Cannot create account with this licenseId.");
    error.statusCode = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(passwordHash, 10);
  const user = await prisma.$transaction(async (tx) => {
    const hospitalUser = await tx.user.create({
      data: {
        role: "HOSPITAL",
        email: normalizeEmail,
        passwordHash: hashedPassword,
      },
    });
    await tx.hospital.create({
      data: {
        userId: hospitalUser.id,
        hospitalName,
        phoneNumber,
        address,
        state,
        licenseId,
        contactName,
        contactPhone,
        contactRole,
      },
    });
    return hospitalUser;
  });
  const token = generateToken({ sub: user.id, role: user.role });
  return {
    user: { userid: user.id, email: user.email, role: user.role },
    token,
  };
};

//======================================================================

const login = async (email, passwordHash) => {
  const normalizeEmail = email.toLowerCase().trim();
  const user = await prisma.user.findUnique({
    where: { email: normalizeEmail },
  });
  if (!user) {
    const error = new Error("Invalid email or password");
    error.statusCode = 404;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(passwordHash, user.passwordHash);
  if (!isPasswordValid) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }
  const token = generateToken({ sub: user.id, role: user.role });
  return {
    user: { userid: user.id, email: user.email, role: user.role },
    token,
  };
};

//=======================================================================

module.exports = {
  registerDonor,
  registerHospital,
  login,
};
