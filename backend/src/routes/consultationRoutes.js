const express = require("express");
const router = express.Router();
const {
  submitConsultation,
  getConsultations,
  updateConsultationStatus,
} = require("../controllers/consultationController");
const { consultationLimiter } = require("../middleware/rateLimiter");
const validateRequest = require("../middleware/validateRequest");
const adminAuth = require("../middleware/adminAuth");
const { body } = require("express-validator");

const consultationValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("date")
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage("Date value too long"),

  body("time")
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage("Time value too long"),

  body("platform")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Platform value too long"),

  body("topic")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Topic too long"),

  body("notes")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Notes cannot exceed 1000 characters"),
];

router.post(
  "/",
  consultationLimiter,
  consultationValidationRules,
  validateRequest,
  submitConsultation,
);

router.get("/", adminAuth, getConsultations);

router.patch("/:id/status", adminAuth, updateConsultationStatus);

module.exports = router;
