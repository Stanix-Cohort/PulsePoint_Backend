const requestService = require("../services/bloodRequestService");
const {
  findEligibleDonors,
  findMatchingRequests,
} = require("../services/matchingService");

const createBloodRequest = async (req, res, next) => {
  try {
    const bloodRequest = await requestService.createBloodRequest({
      userId: req.user.id,
      data: req.body,
    });

    res.status(201).json({
      success: true,
      message: "Blood request created successfully",
      data: bloodRequest,
    });
  } catch (error) {
    next(error);
  }
};

//===========================================================

const getMatchingDonors = async (req, res, next) => {
  try {
    const { requestId } = req.params;

    const matchedDonors = await findEligibleDonors(requestId);

    return res.status(200).json({
      success: true,
      count: matchedDonors.length,
      data: matchedDonors,
    });
  } catch (error) {
    // if (error.message === "Blood request not found") {
    //   return res.status(404).json({ success: false, message: error.message });
    // }

    // return res.status(500).json({
    //   success: false,
    //   message: "An error occurred while fetching matching donors.",
      // });
      next(error);
  }
};

//===========================================================

const getDonorMatches = async (req, res, next) => {
  try {
    const userId = req.user.id 

    const requests = await findMatchingRequests(userId);

    return res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    // if (error.message === "Donor profile not found") {
    //   return res.status(404).json({ success: false, message: error.message });
    // }

    // return res.status(500).json({
    //   success: false,
    //   message: "Failed to fetch matching requests.",
      // });
        next(error);
  }
};

module.exports = { createBloodRequest, getMatchingDonors, getDonorMatches };
