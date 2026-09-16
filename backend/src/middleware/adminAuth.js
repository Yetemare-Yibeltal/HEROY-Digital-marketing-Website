// ⚠️ SECURITY FIX (Sep 2026): Before this file existed, the following routes
// had NO authentication at all and were open to anyone on the internet:
//   GET   /api/contact              — lists every customer lead (name, email,
//                                      phone, message, IP address)
//   PATCH /api/contact/:id/status   — lets anyone tamper with lead status
//   GET   /api/chat/history/:id     — reads a visitor's AI chat transcript
//
// This middleware adds a minimal shared-secret check so those routes are no
// longer wide open. It is intentionally simple — a single static key compared
// with a timing-safe check — NOT a full auth system. Before real admin users
// (multiple staff, audit logs, revocable access) are needed, replace this
// with proper JWT or session-based authentication.
//
// Setup required: add ADMIN_API_KEY=<a long random string> to your .env file
// (never commit it), then send it as a header on admin requests:
//   Authorization: Bearer <ADMIN_API_KEY>

const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");

const adminAuth = (req, res, next) => {
  const adminKey = process.env.ADMIN_API_KEY;

  if (!adminKey) {
    // Fail closed: if the server isn't configured with a key, refuse access
    // rather than silently allowing every request through.
    console.error(
      "ADMIN_API_KEY is not set — admin routes are locked until it is configured.",
    );
    return next(
      new ErrorResponse("Admin access is not configured on this server", 503),
    );
  }

  const header = req.headers.authorization || "";
  const provided = header.startsWith("Bearer ") ? header.slice(7) : "";

  const providedBuf = Buffer.from(provided);
  const expectedBuf = Buffer.from(adminKey);

  const isValid =
    providedBuf.length === expectedBuf.length &&
    crypto.timingSafeEqual(providedBuf, expectedBuf);

  if (!isValid) {
    return next(new ErrorResponse("Unauthorized", 401));
  }

  next();
};

module.exports = adminAuth;
