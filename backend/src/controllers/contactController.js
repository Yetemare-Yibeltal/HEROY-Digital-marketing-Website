const Contact = require("../models/Contact");
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const { sendContactNotification } = require("../utils/sendEmail");

exports.submitContact = asyncHandler(async (req, res, next) => {
  const { name, email, phone, company, service, budget, message } = req.body;

  if (!name || !email || !message) {
    return next(
      new ErrorResponse("Name, email, and message are required", 400),
    );
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return next(new ErrorResponse("Please provide a valid email address", 400));
  }

  if (message.length < 10) {
    return next(
      new ErrorResponse("Message must be at least 10 characters", 400),
    );
  }

  const contact = await Contact.create({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || "",
    company: company?.trim() || "",
    service: service || "Not specified",
    budget: budget || "Not specified",
    message: message.trim(),
    ipAddress: req.ip || req.connection.remoteAddress || "",
    userAgent: req.headers["user-agent"] || "",
  });

  try {
    await sendContactNotification({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      company: contact.company,
      service: contact.service,
      budget: contact.budget,
      message: contact.message,
      ipAddress: contact.ipAddress,
    });
  } catch (emailError) {
    console.error("Email sending failed:", emailError.message);
  }

  res.status(201).json({
    success: true,
    message:
      "Your message has been received. We will get back to you within 24 hours.",
    data: {
      id: contact._id,
      name: contact.name,
      email: contact.email,
      submittedAt: contact.createdAt,
    },
  });
});

exports.getContacts = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  const status = req.query.status;

  const filter = status ? { status } : {};

  const [contacts, total] = await Promise.all([
    Contact.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Contact.countDocuments(filter),
  ]);

  res.status(200).json({
    success: true,
    count: contacts.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: contacts,
  });
});

exports.updateContactStatus = asyncHandler(async (req, res, next) => {
  const { status } = req.body;
  const validStatuses = ["new", "read", "replied", "archived"];

  if (!validStatuses.includes(status)) {
    return next(new ErrorResponse("Invalid status value", 400));
  }

  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true },
  );

  if (!contact) {
    return next(new ErrorResponse("Contact not found", 404));
  }

  res.status(200).json({
    success: true,
    data: contact,
  });
});
