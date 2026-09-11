const { z } = require("zod");

const validateBloodRequest = z.object({
  bloodType: z.enum([
    "A_POSITIVE",
    "A_NEGATIVE",
    "B_POSITIVE",
    "B_NEGATIVE",
    "AB_POSITIVE",
    "AB_NEGATIVE",
    "O_POSITIVE",
    "O_NEGATIVE",
  ]),

  units: z.coerce
    .number({
      message: "Units must be a number",
    })
    .int("Units must be a whole number")
    .positive("Units must be greater than 0"),

  urgencyLevel: z.enum(["CRITICAL", "URGENT", "ROUTINE"]),

  notes: z
    .string()
    .trim()
    .max(500, "Notes cannot exceed 500 characters")
    .optional(),
});

const validate = (req, res, next) => {
  const result = validateBloodRequest.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.issues });
  }
  next();
};

module.exports = {
  validate,
};
