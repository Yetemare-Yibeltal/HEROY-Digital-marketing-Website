const express = require("express");
const router = express.Router();
const {
  submitContact,
  getContacts,
  updateContactStatus,
} = require("../controllers/contactController");
const { contactLimiter } = require("../middleware/rateLimiter");
const validateRequest = require("../middleware/validateRequest");
const adminAuth = require("../middleware/adminAuth");
const { body } = require("express-validator");

const contactValidationRules = [
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

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 10, max: 2000 })
    .withMessage("Message must be between 10 and 2000 characters"),

  body("phone")
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage("Phone number too long"),

  body("company")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Company name too long"),

  body("service")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Service name too long"),

  body("budget")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Budget value too long"),
];

router.post(
  "/",
  contactLimiter,
  contactValidationRules,
  validateRequest,
  submitContact,
);

router.get("/", adminAuth, getContacts);

router.patch("/:id/status", adminAuth, updateContactStatus);

module.exports = router;
