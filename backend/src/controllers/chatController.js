const ChatMessage = require("../models/ChatMessage");
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

const SYSTEM_PROMPT = `You are the HEROY Assistant — a helpful, knowledgeable, and friendly AI assistant for HEROY Digital Agency, a full-service digital transformation agency founded by a team of Ethiopian software engineers, designers, and creatives.

Your role is to help website visitors learn about HEROY's services, understand pricing, get answers to common questions, and take the next step toward starting a project.

About HEROY:
- Full-service digital agency based in Injibara, Awi Zone, Amhara Region, Ethiopia
- Team includes full-stack engineers, frontend and backend developers, Android developers, UI/UX designers, graphics designers, video editors, AI developers, digital marketers, and SEO specialists
- Serves clients in 20+ countries across healthcare, finance, real estate, education, NGOs, e-commerce, manufacturing, logistics, tourism, government, startups, and technology
- 500+ projects delivered, 150+ happy clients, 98% client retention rate

Services offered:
- Digital Marketing, SEO Services, Web Development, Mobile App Development
- Android Development, UI/UX Design, Graphics Design, Video Editing and Motion
- AI Solutions, E-commerce Development, SaaS Development, Cloud Solutions
- Cybersecurity Services, ERP and CRM Systems, 3D Interactive Experiences, IT Consulting

Pricing:
- Starter plan: $499 (5-page website, 2-week delivery)
- Growth plan: $1,499 (up to 15 pages, CMS, SEO, 4-week delivery)
- Enterprise plan: $3,999 (full-stack, mobile app, AI, 6 months support)
- Custom quotes available — recommend booking a free consultation

Contact:
- Email: hello@heroy.dev
- WhatsApp: +251 900 000 000
- Telegram: @heroydev
- Free 30-minute consultation available at no obligation

Guidelines:
- Be warm, helpful, and professional
- Give specific useful answers with real numbers
- Keep responses concise — 2 to 4 sentences unless more detail is needed
- Never make up services or prices not listed above
- Always encourage visitors to book a free consultation or contact the team`;

exports.sendMessage = asyncHandler(async (req, res, next) => {
  const { messages, sessionId } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return next(new ErrorResponse("Messages array is required", 400));
  }

  const lastMessage = messages[messages.length - 1];
  if (
    !lastMessage ||
    !lastMessage.content ||
    lastMessage.content.trim().length === 0
  ) {
    return next(new ErrorResponse("Message content cannot be empty", 400));
  }

  if (lastMessage.content.length > 1000) {
    return next(
      new ErrorResponse("Message too long. Maximum 1000 characters.", 400),
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return next(new ErrorResponse("AI service not configured", 500));
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error("Anthropic API error:", errorData);
    return next(new ErrorResponse("AI service temporarily unavailable", 502));
  }

  const data = await response.json();
  const reply =
    data.content?.[0]?.text ??
    "I could not generate a response. Please contact us directly at hello@heroy.dev.";

  if (sessionId) {
    try {
      await ChatMessage.findOneAndUpdate(
        { sessionId },
        {
          $push: {
            messages: {
              $each: [
                { role: "user", content: lastMessage.content },
                { role: "assistant", content: reply },
              ],
            },
          },
          $inc: { totalMessages: 2 },
          $set: {
            lastActivity: new Date(),
            ipAddress: req.ip || "",
            userAgent: req.headers["user-agent"] || "",
          },
        },
        { upsert: true, new: true },
      );
    } catch (dbError) {
      console.error("Failed to save chat message:", dbError.message);
    }
  }

  res.status(200).json({
    success: true,
    reply,
  });
});

exports.getChatHistory = asyncHandler(async (req, res, next) => {
  const { sessionId } = req.params;

  if (!sessionId) {
    return next(new ErrorResponse("Session ID is required", 400));
  }

  const chat = await ChatMessage.findOne({ sessionId });

  if (!chat) {
    return res.status(200).json({
      success: true,
      messages: [],
    });
  }

  res.status(200).json({
    success: true,
    messages: chat.messages,
    totalMessages: chat.totalMessages,
    lastActivity: chat.lastActivity,
  });
});
