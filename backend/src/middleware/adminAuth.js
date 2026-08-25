const ErrorResponse = require("../utils/errorResponse");

const adminAuth = (req, res, next) => {
  const providedKey = req.headers["x-admin-key"];
  const expectedKey = process.env.ADMIN_API_KEY;

  if (!expectedKey) {
    return next(new ErrorResponse("Admin access is not configured", 500));
  }

  if (!providedKey || providedKey !== expectedKey) {
    return next(new ErrorResponse("Unauthorized", 401));
  }

  next();
};

module.exports = adminAuth;
