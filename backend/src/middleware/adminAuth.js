const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");

/**
 * Constant-time string comparison. A plain `===`/`!==` comparison on
 * secrets is vulnerable to timing attacks: JavaScript string equality
 * short-circuits at the first differing character, so an attacker who
 * can measure response time with enough samples can recover the admin
 * key one character at a time. crypto.timingSafeEqual always takes the
 * same time regardless of where the mismatch occurs.
 */
function safeCompare(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);

  // timingSafeEqual throws if the buffers aren't the same length, so we
  // guard that first. This does leak length via timing, but that's an
  // accepted, much lower-value signal than leaking the key contents.
  if (bufA.length !== bufB.length) {
    return false;
  }

  return crypto.timingSafeEqual(bufA, bufB);
}

const adminAuth = (req, res, next) => {
  const providedKey = req.headers["x-admin-key"];
  const expectedKey = process.env.ADMIN_API_KEY;

  if (!expectedKey) {
    return next(new ErrorResponse("Admin access is not configured", 500));
  }

  if (!providedKey || typeof providedKey !== "string" || !safeCompare(providedKey, expectedKey)) {
    return next(new ErrorResponse("Unauthorized", 401));
  }

  next();
};

module.exports = adminAuth;