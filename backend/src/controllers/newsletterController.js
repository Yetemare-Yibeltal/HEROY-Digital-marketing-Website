const Subscriber = require("../models/Subscriber");
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const { sendNewsletterConfirmation } = require("../utils/sendEmail");

exports.subscribe = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new ErrorResponse("Email is required", 400));
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return next(new ErrorResponse("Please provide a valid email address", 400));
  }

  const normalizedEmail = email.trim().toLowerCase();

  const existing = await Subscriber.findOne({ email: normalizedEmail });

  if (existing) {
    if (existing.status === "subscribed") {
      // Already subscribed — respond the same way as a fresh signup so we
      // don't leak whether an email is already on the list.
      return res.status(200).json({
        success: true,
        message: "You're subscribed! Thanks for joining our newsletter.",
      });
    }

    existing.status = "subscribed";
    existing.unsubscribedAt = null;
    await existing.save();
  } else {
    await Subscriber.create({
      email: normalizedEmail,
      ipAddress: req.ip || req.connection?.remoteAddress || "",
    });
  }

  sendNewsletterConfirmation(normalizedEmail).catch((emailError) => {
    console.error("Newsletter confirmation email failed:", emailError.message);
  });

  res.status(201).json({
    success: true,
    message: "You're subscribed! Thanks for joining our newsletter.",
  });
});

exports.unsubscribe = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new ErrorResponse("Email is required", 400));
  }

  const normalizedEmail = email.trim().toLowerCase();

  const subscriber = await Subscriber.findOne({ email: normalizedEmail });

  if (subscriber) {
    subscriber.status = "unsubscribed";
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();
  }

  // Respond successfully either way — an unknown email shouldn't reveal
  // that it was never subscribed in the first place.
  res.status(200).json({
    success: true,
    message: "You have been unsubscribed.",
  });
});

exports.getSubscribers = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 50;
  const skip = (page - 1) * limit;
  const status = req.query.status;

  const filter = status ? { status: String(status) } : {};

  const [subscribers, total] = await Promise.all([
    Subscriber.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Subscriber.countDocuments(filter),
  ]);

  res.status(200).json({
    success: true,
    count: subscribers.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: subscribers,
  });
});
