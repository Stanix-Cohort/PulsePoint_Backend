const { verifyToken } = require("../config/jwt");
// const prisma = require("../config/prisma");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Authorization header is missing or invalid.",
    });
  }

  const token = authHeader.substring(7); // Remove "Bearer " prefix
  try {
    const decoded = verifyToken(token);

    req.user = {
      id: decoded.sub,
      role: decoded.role,
    };

    next();
    
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

module.exports = auth;
