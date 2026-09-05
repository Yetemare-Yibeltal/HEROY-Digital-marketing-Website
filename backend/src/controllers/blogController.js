const BlogPost = require("../models/BlogPost");
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

// ── Public endpoints ────────────────────────────────────────────────

exports.getPublishedPosts = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  const category = req.query.category;

  const filter = { status: "published" };
  if (category && category !== "All") {
    filter.category = category;
  }

  const [posts, total] = await Promise.all([
    BlogPost.find(filter)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-__v"),
    BlogPost.countDocuments(filter),
  ]);

  res.status(200).json({
    success: true,
    count: posts.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: posts,
  });
});

exports.getPublishedPostBySlug = asyncHandler(async (req, res, next) => {
  const post = await BlogPost.findOne({
    slug: req.params.slug,
    status: "published",
  }).select("-__v");

  if (!post) {
    return next(new ErrorResponse("Post not found", 404));
  }

  res.status(200).json({
    success: true,
    data: post,
  });
});

// ── Admin endpoints (all protected by adminAuth at the route level) ──

exports.getAllPostsAdmin = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  const status = req.query.status;

  const filter = status ? { status } : {};

  const [posts, total] = await Promise.all([
    BlogPost.find(filter).sort({ updatedAt: -1 }).skip(skip).limit(limit),
    BlogPost.countDocuments(filter),
  ]);

  res.status(200).json({
    success: true,
    count: posts.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: posts,
  });
});

exports.getPostByIdAdmin = asyncHandler(async (req, res, next) => {
  const post = await BlogPost.findById(req.params.id);

  if (!post) {
    return next(new ErrorResponse("Post not found", 404));
  }

  res.status(200).json({
    success: true,
    data: post,
  });
});

exports.createPost = asyncHandler(async (req, res, next) => {
  const {
    title,
    slug,
    excerpt,
    category,
    tags,
    author,
    authorRole,
    gradient,
    glow,
    sections,
    status,
  } = req.body;

  if (!title || !slug || !excerpt || !category || !sections) {
    return next(
      new ErrorResponse(
        "Title, slug, excerpt, category, and sections are required",
        400,
      ),
    );
  }

  const existing = await BlogPost.findOne({ slug: slug.trim().toLowerCase() });
  if (existing) {
    return next(new ErrorResponse("A post with this slug already exists", 400));
  }

  const post = await BlogPost.create({
    title: title.trim(),
    slug: slug.trim().toLowerCase(),
    excerpt: excerpt.trim(),
    category: category.trim(),
    tags: Array.isArray(tags) ? tags.slice(0, 10) : [],
    author: author?.trim() || "HEROY Team",
    authorRole: authorRole?.trim() || "",
    gradient: gradient?.trim() || "from-violet-600/50 to-cyan-600/40",
    glow: glow?.trim() || "rgba(124,92,255,0.3)",
    sections,
    status: status === "published" ? "published" : "draft",
  });

  res.status(201).json({
    success: true,
    data: post,
  });
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  const post = await BlogPost.findById(req.params.id);

  if (!post) {
    return next(new ErrorResponse("Post not found", 404));
  }

  const {
    title,
    slug,
    excerpt,
    category,
    tags,
    author,
    authorRole,
    gradient,
    glow,
    sections,
    status,
  } = req.body;

  if (slug && slug.trim().toLowerCase() !== post.slug) {
    const existing = await BlogPost.findOne({
      slug: slug.trim().toLowerCase(),
      _id: { $ne: post._id },
    });
    if (existing) {
      return next(
        new ErrorResponse("A post with this slug already exists", 400),
      );
    }
    post.slug = slug.trim().toLowerCase();
  }

  if (title !== undefined) post.title = title.trim();
  if (excerpt !== undefined) post.excerpt = excerpt.trim();
  if (category !== undefined) post.category = category.trim();
  if (tags !== undefined)
    post.tags = Array.isArray(tags) ? tags.slice(0, 10) : post.tags;
  if (author !== undefined) post.author = author.trim();
  if (authorRole !== undefined) post.authorRole = authorRole.trim();
  if (gradient !== undefined) post.gradient = gradient.trim();
  if (glow !== undefined) post.glow = glow.trim();
  if (sections !== undefined) post.sections = sections;
  if (status !== undefined)
    post.status = status === "published" ? "published" : "draft";

  await post.save();

  res.status(200).json({
    success: true,
    data: post,
  });
});

exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await BlogPost.findByIdAndDelete(req.params.id);

  if (!post) {
    return next(new ErrorResponse("Post not found", 404));
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});
