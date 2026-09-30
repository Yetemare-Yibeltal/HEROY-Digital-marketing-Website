const express = require("express");
const router = express.Router();
const {
  subscribe,
  unsubscribe,
  getSubscribers,
} = require("../controllers/newsletterController");
const { newsletterLimiter } = require("../middleware/rateLimiter");
const validateRequest = require("../middleware/validateRequest");
const adminAuth = require("../middleware/adminAuth");
const { body } = require("express-validator");

const emailValidationRule = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
];

router.post(
  "/",
  newsletterLimiter,
  emailValidationRule,
  validateRequest,
  subscribe,
);

router.post(
  "/unsubscribe",
  newsletterLimiter,
  emailValidationRule,
  validateRequest,
  unsubscribe,
);

router.get("/", adminAuth, getSubscribers);

module.exports = router;
