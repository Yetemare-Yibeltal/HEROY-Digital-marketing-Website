const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, "Section heading cannot exceed 200 characters"],
    },
    body: {
      type: String,
      required: true,
      trim: true,
      maxlength: [5000, "Section body cannot exceed 5000 characters"],
    },
  },
  { _id: false },
);

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Slug can only contain lowercase letters, numbers, and hyphens",
      ],
      maxlength: [150, "Slug cannot exceed 150 characters"],
    },
    excerpt: {
      type: String,
      required: [true, "Excerpt is required"],
      trim: true,
      maxlength: [300, "Excerpt cannot exceed 300 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      maxlength: [50, "Category cannot exceed 50 characters"],
    },
    tags: {
      type: [String],
      default: [],
      validate: {
        validator: (arr) => arr.length <= 10,
        message: "A post cannot have more than 10 tags",
      },
    },
    author: {
      type: String,
      trim: true,
      default: "HEROY Team",
      maxlength: [100, "Author cannot exceed 100 characters"],
    },
    authorRole: {
      type: String,
      trim: true,
      default: "",
      maxlength: [100, "Author role cannot exceed 100 characters"],
    },
    gradient: {
      type: String,
      trim: true,
      default: "from-violet-600/50 to-cyan-600/40",
    },
    glow: {
      type: String,
      trim: true,
      default: "rgba(124,92,255,0.3)",
    },
    sections: {
      type: [sectionSchema],
      validate: {
        validator: (arr) => arr.length >= 1 && arr.length <= 20,
        message: "A post must have between 1 and 20 sections",
      },
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

blogPostSchema.index({ status: 1, publishedAt: -1 });
blogPostSchema.index({ category: 1 });

// Auto-compute readTime from total word count across all sections
// (roughly 200 words per minute), and stamp publishedAt the first time
// a post transitions into "published" status.
blogPostSchema.pre("save", function (next) {
  if (
    this.isModified("status") &&
    this.status === "published" &&
    !this.publishedAt
  ) {
    this.publishedAt = new Date();
  }
  next();
});

blogPostSchema.virtual("readTime").get(function () {
  const totalWords = this.sections.reduce((sum, s) => {
    return sum + s.body.trim().split(/\s+/).filter(Boolean).length;
  }, 0);
  const minutes = Math.max(1, Math.round(totalWords / 200));
  return `${minutes} min read`;
});

blogPostSchema.set("toJSON", { virtuals: true });
blogPostSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("BlogPost", blogPostSchema);
