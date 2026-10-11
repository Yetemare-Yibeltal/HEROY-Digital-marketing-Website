// Sends email via the Resend HTTPS API instead of Nodemailer/SMTP.
// Render's free tier blocks outbound SMTP ports (25, 465, 587), so SMTP
// based sending (Gmail, etc.) silently fails there. Resend sends over a
// normal HTTPS POST request, which isn't blocked, and has a generous
// permanent free tier (3,000 emails/month, 100/day).

const RESEND_API_URL = "https://api.resend.com/emails";

// Any text a visitor submits (name, message, notes, etc.) gets inserted
// into HTML emails below via template literals. Without escaping,
// someone could submit a message containing HTML or a <script> tag
// that would render in the admin's or client's email client. This
// escapes the five characters that matter for HTML injection.
const escapeHtml = (value) => {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

const sendViaResend = async ({ to, subject, html }) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set — emails cannot be sent until it is configured.",
    );
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.EMAIL_FROM ||
        "HEROY Digital Solutions <onboarding@resend.dev>",
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API error (${response.status}): ${errorText}`);
  }

  return response.json();
};

const sendContactNotification = async (contactData) => {
  const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #7c5cff, #22d3ee); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">HEROY Digital Solutions</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">New Contact Form Submission</p>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 35%;">Full Name</td>
              <td style="padding: 12px 0; color: #333;">${escapeHtml(contactData.name)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 12px 0; color: #333;">
                <a href="mailto:${escapeHtml(contactData.email)}" style="color: #7c5cff;">${escapeHtml(contactData.email)}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 12px 0; color: #333;">${escapeHtml(contactData.phone || "Not provided")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Company</td>
              <td style="padding: 12px 0; color: #333;">${escapeHtml(contactData.company || "Not provided")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Service Needed</td>
              <td style="padding: 12px 0; color: #333;">${escapeHtml(contactData.service || "Not specified")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Budget</td>
              <td style="padding: 12px 0; color: #333;">${escapeHtml(contactData.budget || "Not specified")}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #333; line-height: 1.6;">${escapeHtml(contactData.message)}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f0f0ff; border-radius: 6px; border-left: 4px solid #7c5cff;">
            <p style="margin: 0; color: #555; font-size: 14px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}<br/>
              <strong>IP Address:</strong> ${contactData.ipAddress || "Unknown"}
            </p>
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${escapeHtml(contactData.email)}" style="background: linear-gradient(135deg, #7c5cff, #22d3ee); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: bold; display: inline-block;">
              Reply to ${escapeHtml(contactData.name)}
            </a>
          </div>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
          HEROY Digital Solutions — Injibara, Ethiopia
        </p>
      </div>
  `;

  const clientHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #7c5cff, #22d3ee); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">HEROY Digital Solutions</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">We got your message</p>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #333; margin-top: 0;">Hi ${escapeHtml(contactData.name)},</h2>
          <p style="color: #555; line-height: 1.7;">
            Thank you for reaching out to HEROY. We have received your message and our team will review it shortly.
          </p>
          <p style="color: #555; line-height: 1.7;">
            You can expect to hear from us within <strong>24 hours</strong> on business days. In the meantime, feel free to browse our work at our website.
          </p>
          <div style="margin: 25px 0; padding: 20px; background: #f0f0ff; border-radius: 8px; border-left: 4px solid #7c5cff;">
            <p style="margin: 0; color: #555; font-size: 14px; font-weight: bold;">Your message summary:</p>
            <p style="margin: 8px 0 0 0; color: #333; font-size: 14px; line-height: 1.6;">
              <strong>Service:</strong> ${escapeHtml(contactData.service || "Not specified")}<br/>
              <strong>Budget:</strong> ${escapeHtml(contactData.budget || "Not specified")}
            </p>
          </div>
          <p style="color: #555; line-height: 1.7;">
            If you have any urgent questions, you can also reach us on WhatsApp at <strong>+251 92 385 3252</strong> or Telegram at <strong>@heroy_digital_solution2026</strong>.
          </p>
          <p style="color: #555; line-height: 1.7;">
            Best regards,<br/>
            <strong>The HEROY Team</strong>
          </p>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
          HEROY Digital Solutions — Injibara, Awi Zone, Amhara, Ethiopia<br/>
          Heroydigitalsolution@gmail.com
        </p>
      </div>
  `;

  await Promise.all([
    sendViaResend({
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission — ${escapeHtml(contactData.service || "General Inquiry")}`,
      html: adminHtml,
    }),
    sendViaResend({
      to: contactData.email,
      subject: "We received your message — HEROY Digital Solutions",
      html: clientHtml,
    }),
  ]);
};

const sendConsultationNotification = async (data) => {
  const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #7c5cff, #22d3ee); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0;">New Consultation Request</h1>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Name</td>
              <td style="padding: 10px 0;">${escapeHtml(data.name)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px 0;">${escapeHtml(data.email)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Preferred Date</td>
              <td style="padding: 10px 0;">${escapeHtml(data.date || "Not specified")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Preferred Time</td>
              <td style="padding: 10px 0;">${escapeHtml(data.time || "Not specified")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Platform</td>
              <td style="padding: 10px 0;">${escapeHtml(data.platform || "Google Meet")}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Topic</td>
              <td style="padding: 10px 0;">${escapeHtml(data.topic || "Not specified")}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Notes</td>
              <td style="padding: 10px 0;">${escapeHtml(data.notes || "None")}</td>
            </tr>
          </table>
        </div>
      </div>
  `;

  await sendViaResend({
    to: process.env.EMAIL_TO,
    subject: `New Consultation Request — ${escapeHtml(data.name)}`,
    html,
  });
};

const sendNewsletterConfirmation = async (email) => {
  const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #7c5cff, #22d3ee); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">HEROY Digital Solutions</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">You're on the list</p>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #555; line-height: 1.7;">
            Thanks for subscribing! We'll send occasional updates on new
            services, projects, and things we've learned building digital
            products — nothing more frequent than that.
          </p>
          <p style="color: #555; line-height: 1.7;">
            If you ever want to stop receiving these, just reply to any
            update email and we'll unsubscribe you right away.
          </p>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
          HEROY Digital Solutions — Injibara, Awi Zone, Amhara, Ethiopia<br/>
          Heroydigitalsolution@gmail.com
        </p>
      </div>
  `;

  await sendViaResend({
    to: email,
    subject: "You're subscribed to HEROY updates",
    html,
  });
};

module.exports = {
  sendContactNotification,
  sendConsultationNotification,
  sendNewsletterConfirmation,
};
