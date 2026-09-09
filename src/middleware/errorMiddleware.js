const error = (err, req, res, next) => {
  console.log("simple error", err.message);
  console.log("stack trace", err.stack);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Internal server error" : err.message,
  });
};

module.exports = error;
