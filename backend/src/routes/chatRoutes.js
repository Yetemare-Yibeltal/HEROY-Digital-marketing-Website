const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getChatHistory,
} = require("../controllers/chatController");
const { chatLimiter } = require("../middleware/rateLimiter");
const validateRequest = require("../middleware/validateRequest");
const { body, param } = require("express-validator");

const messageValidationRules = [
  body("messages")
    .isArray({ min: 1 })
    .withMessage("Messages must be a non-empty array"),

  body("messages.*.role")
    .isIn(["user", "assistant"])
    .withMessage("Message role must be either user or assistant"),

  body("messages.*.content")
    .trim()
    .notEmpty()
    .withMessage("Message content cannot be empty")
    .isLength({ max: 1000 })
    .withMessage("Message content cannot exceed 1000 characters"),

  body("sessionId")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Session ID too long"),
];

const sessionValidationRules = [
  param("sessionId")
    .trim()
    .notEmpty()
    .withMessage("Session ID is required")
    .isLength({ max: 100 })
    .withMessage("Session ID too long"),
];

router.post(
  "/",
  chatLimiter,
  messageValidationRules,
  validateRequest,
  sendMessage,
);

router.get(
  "/history/:sessionId",
  sessionValidationRules,
  validateRequest,
  getChatHistory,
);

module.exports = router;
