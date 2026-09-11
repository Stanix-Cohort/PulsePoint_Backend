// src/services/matchingService.js

const prisma = require("../config/prisma");
const { getCompatibleDonors, getCompatibleRecipients } = require("../utils/bloodCompatibility");



const findEligibleDonors = async (requestId) => {
  // 1. Fetch the blood request details
  const request = await prisma.bloodRequest.findUnique({
    where: { id: requestId },
  });
console.log("Blood Request ID", request);
  if (!request) {
    const error = new Error("Blood request not found.");
    error.statusCode = 404;
    throw error;
  }

  // 2. Get compatible donor blood types for this recipient
  const compatibleTypes = getCompatibleDonors(request.bloodType);

  if (compatibleTypes.length === 0) {
    const error = new Error("No compatible donor blood types found for this request.");
    error.statusCode = 400;
    throw error;
  }

  // 3. Query database for matching, available donors
  const eligibleDonors = await prisma.donor.findMany({
    where: {
      isAvailable: true, // Filter 1: Availability
      bloodType: { in: compatibleTypes }, // Filter 2: Compatible Blood Types
    },
    select: {
      id: true,
      userId: true,
      fullName: true,
      bloodType: true,
      phoneNumber: true,
      state: true,
    },
  });

  return eligibleDonors;
};

//=======================================================

const findMatchingRequests = async (userId) => {
  // 1. Fetch the donor profile to get their blood type & availability status
  const donor = await prisma.donor.findUnique({
    where: { userId },
  });

  if (!donor) {
      const error = new Error("Donor profile not found.");
      error.statusCode = 404;
      throw error;
  }

  if (!donor.isAvailable) {
   const error = new Error("You are currently marked as being unavailable to donate. Please update your availability status to find matching requests.");
   error.statusCode = 400;
   throw error;
  }

  // 2. Determine all recipient blood types this donor can give to
    const validRecipient = getCompatibleRecipients(donor.bloodType);
    
    if (validRecipient.length === 0) {
        const error = new Error("No compatible recipient blood types found for your blood type.");
        error.statusCode = 400;
        throw error;
    }

  // 3. Find active blood requests matching those compatible recipient blood types
  const matchingRequests = await prisma.bloodRequest.findMany({
    where: {
      bloodType: { in: validRecipient },
      status: { in: ["OPEN", "PARTIALLY_FULFILLED"] }, // Only consider active requests
    },
    orderBy: {
      createdAt: "desc", // Show newest requests first
    },
  });

  return matchingRequests;
};

module.exports = { findEligibleDonors, findMatchingRequests };
