const express = require("express");
const router = express.Router();
const {
  getPublishedPosts,
  getPublishedPostBySlug,
  getAllPostsAdmin,
  getPostByIdAdmin,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/blogController");
const adminAuth = require("../middleware/adminAuth");
const validateRequest = require("../middleware/validateRequest");
const { body } = require("express-validator");

const sectionValidator = body("sections")
  .isArray({ min: 1, max: 20 })
  .withMessage("A post must have between 1 and 20 sections")
  .custom((sections) => {
    for (const s of sections) {
      if (!s.heading || typeof s.heading !== "string" || !s.heading.trim()) {
        throw new Error("Every section needs a heading");
      }
      if (!s.body || typeof s.body !== "string" || !s.body.trim()) {
        throw new Error("Every section needs body text");
      }
    }
    return true;
  });

const postValidationRules = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 200 })
    .withMessage("Title cannot exceed 200 characters"),

  body("slug")
    .trim()
    .notEmpty()
    .withMessage("Slug is required")
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .withMessage(
      "Slug can only contain lowercase letters, numbers, and hyphens",
    ),

  body("excerpt")
    .trim()
    .notEmpty()
    .withMessage("Excerpt is required")
    .isLength({ max: 300 })
    .withMessage("Excerpt cannot exceed 300 characters"),

  body("category").trim().notEmpty().withMessage("Category is required"),

  sectionValidator,

  body("status")
    .optional()
    .isIn(["draft", "published"])
    .withMessage("Status must be draft or published"),

  body("tags").optional().isArray({ max: 10 }).withMessage("Maximum 10 tags"),
];

// ── Admin ──────────────────────────────────────────────────────────
// These MUST be registered before the public "/:slug" route below —
// Express matches routes in registration order, and "/:slug" would
// otherwise greedily match "/admin/all" as slug="admin" and swallow
// every admin GET request before it ever reaches these handlers.
router.get("/admin/all", adminAuth, getAllPostsAdmin);
router.get("/admin/:id", adminAuth, getPostByIdAdmin);
router.post(
  "/admin",
  adminAuth,
  postValidationRules,
  validateRequest,
  createPost,
);
router.put(
  "/admin/:id",
  adminAuth,
  postValidationRules,
  validateRequest,
  updatePost,
);
router.delete("/admin/:id", adminAuth, deletePost);

// ── Public ─────────────────────────────────────────────────────────
router.get("/", getPublishedPosts);
router.get("/:slug", getPublishedPostBySlug);

module.exports = router;
