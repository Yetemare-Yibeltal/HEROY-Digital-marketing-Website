const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      index: true,
    },
    messages: [
      {
        role: {
          type: String,
          enum: ["user", "assistant"],
          required: true,
        },
        content: {
          type: String,
          required: true,
          maxlength: [2000, "Message cannot exceed 2000 characters"],
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    ipAddress: {
      type: String,
      default: "",
    },
    userAgent: {
      type: String,
      default: "",
    },
    totalMessages: {
      type: Number,
      default: 0,
    },
    lastActivity: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

chatMessageSchema.index({ lastActivity: -1 });
chatMessageSchema.index({ createdAt: -1 });

module.exports = mongoose.model("ChatMessage", chatMessageSchema);
