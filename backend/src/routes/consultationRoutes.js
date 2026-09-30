const express = require("express");
const router = express.Router();
const {
  submitConsultation,
  getConsultations,
  updateConsultationStatus,
} = require("../controllers/consultationController");
const { contactLimiter } = require("../middleware/rateLimiter");
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

  body("date").trim().notEmpty().withMessage("Preferred date is required"),

  body("time").trim().notEmpty().withMessage("Preferred time is required"),

  body("platform")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Platform name too long"),

  body("topic")
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage("Topic too long"),

  body("notes")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Notes cannot exceed 1000 characters"),
];

router.post(
  "/",
  contactLimiter,
  consultationValidationRules,
  validateRequest,
  submitConsultation,
);

router.get("/", adminAuth, getConsultations);

router.patch("/:id/status", adminAuth, updateConsultationStatus);

module.exports = router;
