const donorConpatibility = {
  A_POSITIVE: ["A_POSITIVE", "A_NEGATIVE", "O_POSITIVE", "O_NEGATIVE"],
  A_NEGATIVE: ["A_NEGATIVE", "O_NEGATIVE"],
  B_POSITIVE: ["B_POSITIVE", "B_NEGATIVE", "O_POSITIVE", "O_NEGATIVE"],
  B_NEGATIVE: ["B_NEGATIVE", "O_NEGATIVE"],
  AB_POSITIVE: [
    "A_POSITIVE",
    "A_NEGATIVE",
    "B_POSITIVE",
    "B_NEGATIVE",
    "AB_POSITIVE",
    "AB_NEGATIVE",
    "O_POSITIVE",
    "O_NEGATIVE",
  ],
  AB_NEGATIVE: ["A_NEGATIVE", "B_NEGATIVE", "AB_NEGATIVE", "O_NEGATIVE"],
  O_POSITIVE: ["O_POSITIVE", "O_NEGATIVE"],
  O_NEGATIVE: ["O_NEGATIVE"],
};

const getCompatibleDonors = (requestedBloodType) => {
  return donorConpatibility[requestedBloodType] || [];
}

//==========================================================

const recipientConpatibility = {
  O_NEGATIVE: [
    "A_POSITIVE",
    "A_NEGATIVE",
    "B_POSITIVE",
    "B_NEGATIVE",
    "AB_POSITIVE",
    "AB_NEGATIVE",
    "O_POSITIVE",
    "O_NEGATIVE",
    ], 
    
  O_POSITIVE: ["A_POSITIVE", "B_POSITIVE", "AB_POSITIVE", "O_POSITIVE"],
  A_NEGATIVE: ["A_POSITIVE", "A_NEGATIVE", "AB_POSITIVE", "AB_NEGATIVE"],
  A_POSITIVE: ["A_POSITIVE", "AB_POSITIVE"],
  B_NEGATIVE: ["B_POSITIVE", "B_NEGATIVE", "AB_POSITIVE", "AB_NEGATIVE"],
  B_POSITIVE: ["B_POSITIVE", "AB_POSITIVE"],
  AB_NEGATIVE: ["AB_POSITIVE", "AB_NEGATIVE"],
  AB_POSITIVE: ["AB_POSITIVE"], 
};

const getCompatibleRecipients = (donorBloodType) => {
  return recipientConpatibility[donorBloodType] || [];
}

module.exports = {
    getCompatibleDonors,
    getCompatibleRecipients
};