const Consultation = require("../models/Consultation");
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const { sendConsultationNotification } = require("../utils/sendEmail");

exports.submitConsultation = asyncHandler(async (req, res, next) => {
  const { name, email, date, time, platform, topic, notes } = req.body;

  if (!name || !email) {
    return next(new ErrorResponse("Name and email are required", 400));
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return next(new ErrorResponse("Please provide a valid email address", 400));
  }

  const consultation = await Consultation.create({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    date: date?.trim() || "",
    time: time?.trim() || "",
    platform: platform?.trim() || "Google Meet",
    topic: topic?.trim() || "Not specified",
    notes: notes?.trim() || "",
    ipAddress: req.ip || req.connection.remoteAddress || "",
    userAgent: req.headers["user-agent"] || "",
  });

  try {
    await sendConsultationNotification({
      name: consultation.name,
      email: consultation.email,
      date: consultation.date,
      time: consultation.time,
      platform: consultation.platform,
      topic: consultation.topic,
      notes: consultation.notes,
    });
  } catch (emailError) {
    console.error("Consultation email sending failed:", emailError.message);
  }

  res.status(201).json({
    success: true,
    message:
      "Your consultation request has been received. We will confirm your slot within 2 hours via email.",
    data: {
      id: consultation._id,
      name: consultation.name,
      email: consultation.email,
      submittedAt: consultation.createdAt,
    },
  });
});

exports.getConsultations = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  const status = req.query.status;

  const filter = status ? { status } : {};

  const [consultations, total] = await Promise.all([
    Consultation.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Consultation.countDocuments(filter),
  ]);

  res.status(200).json({
    success: true,
    count: consultations.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: consultations,
  });
});

exports.updateConsultationStatus = asyncHandler(async (req, res, next) => {
  const { status } = req.body;
  const validStatuses = ["pending", "confirmed", "completed", "cancelled"];

  if (!validStatuses.includes(status)) {
    return next(new ErrorResponse("Invalid status value", 400));
  }

  const consultation = await Consultation.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true },
  );

  if (!consultation) {
    return next(new ErrorResponse("Consultation not found", 404));
  }

  res.status(200).json({
    success: true,
    data: consultation,
  });
});
