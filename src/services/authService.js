const bcrypt = require("bcryptjs");
const prisma = require("../config/prisma");
const { generateToken } = require("../config/jwt");
const { th } = require("zod/locales");

const registerDonor = async (userData) => {
  const {
    email,
    passwordHash,
    fullName,
    bloodType,
    dateOfBirth,
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
try {
    const user = await prisma.user.create({
      data: {
        email: normalizeEmail,
        passwordHash: hashedPassword,
        role: "DONOR",
      },
    });
    await prisma.donor.create({
      data: {
        userId: user.id,
        fullName,
        bloodType,
        dateOfBirth: new Date(dateOfBirth),
        phoneNumber,
        address,
        state,
      },
    });
    const token = generateToken({ sub: user.id, role: user.role });
    return {
      user: { userid: user.id, email: user.email, role: user.role },
      token,
    };
} catch (error) {
  throw error;
}
};

//====================================================

const registerHospital = async (userData) => {
  const { email, passwordHash, hospitalName, phoneNumber, address, state, licenseId, contactName, contactPhone, contactRole } =
    userData;
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
  const user = await prisma.user.create({
    data: {
      email: normalizeEmail,
      role: "HOSPITAL",
      passwordHash: hashedPassword,
    },
  });
  await prisma.hospital.create({
    data: {
      userId: user.id,
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
  const token = generateToken({ sub: user.id, role: user.role });

  return {
    user: { userid: user.id, email: user.email, role: user.role },
    token,
  };
};


//====================================================

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

module.exports = {
  registerDonor,
  registerHospital,
  login,
};

