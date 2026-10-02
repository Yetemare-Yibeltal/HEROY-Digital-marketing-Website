import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter.
// This protects a single running Node.js instance. For production deployments
// with multiple instances/serverless functions, use a durable store such as
// Redis/Upstash or a platform-level WAF/rate limiter.
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 20;

const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  timestamps.push(now);
  requestLog.set(ip, timestamps);

  return timestamps.length > RATE_LIMIT_MAX;
}

const SYSTEM_PROMPT = `You are the HEROY Assistant — a helpful, knowledgeable, and friendly AI assistant for HEROY Digital Solutions, a full-service digital transformation agency founded by a team of Ethiopian software engineers, designers, and creatives.

Your role is to help website visitors learn about HEROY's services, understand pricing, get answers to common questions, and take the next step toward starting a project.

About HEROY:

- Full-service digital agency based in Injibara, Awi Zone, Amhara Region, Ethiopia
- Founded in 2025
- Team includes full-stack engineers, frontend and backend developers, Android developers, UI/UX designers, graphics designers, video editors, AI developers, digital marketers, and SEO specialists
- A lean, hands-on team working across industries including healthcare, finance, real estate, education, NGOs, e-commerce, technology, and startups
- 20+ projects currently in progress or delivered, with direct specialist attention across disciplines

Services offered:

- Digital Marketing (full-funnel campaigns, paid advertising, email marketing, content strategy, lead generation, conversion optimization)
- SEO Services (technical SEO, international SEO, content strategy, keyword research, link building)
- Web Development (Next.js, React, TypeScript, Node.js)
- Mobile App Development (React Native, iOS and Android)
- Android Development (native Kotlin)
- UI/UX Design (Figma, user research, wireframing, prototyping)
- Graphics Design (branding, social media, marketing materials, print)
- Video Editing and Motion Graphics (Adobe Premiere, After Effects)
- AI Solutions (chatbots, automation, LLM integrations)
- E-commerce Development (custom stores, Stripe, inventory management)
- SaaS Development (multi-tenant platforms, subscription billing)
- Cloud Solutions (AWS, Vercel, Railway)
- Cybersecurity Services (security audits, penetration testing)
- ERP and CRM Systems (custom business systems)
- 3D Interactive Experiences (Three.js, WebGL)
- IT Consulting and Automation

Pricing:

- Starter plan: $499 (5-page website, 2-week delivery)
- Growth plan: $1,499 (up to 15 pages, CMS, SEO, 4-week delivery)
- Enterprise plan: $3,999 (full-stack development, mobile app, AI, 6 months support)
- Custom quotes are available for projects that require a tailored scope

Contact:

- Email: Heroydigitalsolution@gmail.com
- WhatsApp / Phone: +251 92 385 3252
- Telegram: https://t.me/heroy_digital_solution2026
- Location: Injibara, Awi Zone, Amhara, Ethiopia
- Free 30-minute consultation available with no obligation

Guidelines for your responses:

- Be warm, helpful, and professional but not overly formal
- Give specific, useful answers rather than vague or generic responses
- When visitors ask about pricing, give them the published prices above and explain what each plan includes
- Do not invent discounts, guarantees, services, technologies, clients, results, or capabilities that are not listed here
- When visitors want to start a project, direct them to the Contact page or Consultation page
- Keep responses concise — 2 to 4 sentences is usually ideal unless a detailed answer is needed
- If asked something you do not know, say so honestly and suggest contacting the HEROY team directly
- Do not claim that HEROY has delivered a specific result or worked with a specific client unless that information is explicitly provided
- Always be encouraging and positive about helping visitors achieve their goals`;

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many messages. Please slow down and try again shortly.",
        },
        { status: 429 },
      );
    }

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 },
      );
    }

    const lastMessage = messages[messages.length - 1];

    if (
      !lastMessage ||
      typeof lastMessage.content !== "string" ||
      lastMessage.content.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Message content cannot be empty" },
        { status: 400 },
      );
    }

    if (lastMessage.content.length > 1000) {
      return NextResponse.json(
        { error: "Message too long. Maximum 1000 characters." },
        { status: 400 },
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      console.error(
        "ANTHROPIC_API_KEY is not set in the environment. The chat widget cannot work until a valid key is configured.",
      );

      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 },
      );
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
        messages: messages.map(
          (msg: { role: string; content: string }) => ({
            role: msg.role,
            content: msg.content,
          }),
        ),
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      console.error("Anthropic API error:", error);

      return NextResponse.json(
        { error: "AI service temporarily unavailable" },
        { status: 502 },
      );
    }

    const data = await response.json();

    const reply =
      data.content?.[0]?.text ??
      "I am sorry, I could not generate a response. Please contact us directly at Heroydigitalsolution@gmail.com.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
