const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    date: {
      type: String,
      required: [true, "Preferred date is required"],
      trim: true,
    },
    time: {
      type: String,
      required: [true, "Preferred time is required"],
      trim: true,
    },
    platform: {
      type: String,
      trim: true,
      default: "Google Meet",
    },
    topic: {
      type: String,
      trim: true,
      default: "Not specified",
    },
    notes: {
      type: String,
      trim: true,
      default: "",
      maxlength: [1000, "Notes cannot exceed 1000 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
    ipAddress: {
      type: String,
      default: "",
    },
    userAgent: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

consultationSchema.index({ email: 1, createdAt: -1 });
consultationSchema.index({ status: 1 });

module.exports = mongoose.model("Consultation", consultationSchema);
