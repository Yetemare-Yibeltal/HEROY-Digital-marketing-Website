const nodemailer = require("nodemailer");

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

const sendContactNotification = async (contactData) => {
  const transporter = createTransporter();

  const adminMailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission — ${contactData.service || "General Inquiry"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #7c5cff, #22d3ee); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">HEROY Agency</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">New Contact Form Submission</p>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 35%;">Full Name</td>
              <td style="padding: 12px 0; color: #333;">${contactData.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 12px 0; color: #333;">
                <a href="mailto:${contactData.email}" style="color: #7c5cff;">${contactData.email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 12px 0; color: #333;">${contactData.phone || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Company</td>
              <td style="padding: 12px 0; color: #333;">${contactData.company || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Service Needed</td>
              <td style="padding: 12px 0; color: #333;">${contactData.service || "Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555;">Budget</td>
              <td style="padding: 12px 0; color: #333;">${contactData.budget || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #333; line-height: 1.6;">${contactData.message}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f0f0ff; border-radius: 6px; border-left: 4px solid #7c5cff;">
            <p style="margin: 0; color: #555; font-size: 14px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}<br/>
              <strong>IP Address:</strong> ${contactData.ipAddress || "Unknown"}
            </p>
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${contactData.email}" style="background: linear-gradient(135deg, #7c5cff, #22d3ee); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: bold; display: inline-block;">
              Reply to ${contactData.name}
            </a>
          </div>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
          HEROY Digital Agency — Injibara, Ethiopia
        </p>
      </div>
    `,
  };

  const clientMailOptions = {
    from: process.env.EMAIL_FROM,
    to: contactData.email,
    subject: "We received your message — HEROY Digital Agency",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #7c5cff, #22d3ee); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">HEROY Agency</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">We got your message</p>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #333; margin-top: 0;">Hi ${contactData.name},</h2>
          <p style="color: #555; line-height: 1.7;">
            Thank you for reaching out to HEROY. We have received your message and our team will review it shortly.
          </p>
          <p style="color: #555; line-height: 1.7;">
            You can expect to hear from us within <strong>24 hours</strong> on business days. In the meantime, feel free to browse our work at our website.
          </p>
          <div style="margin: 25px 0; padding: 20px; background: #f0f0ff; border-radius: 8px; border-left: 4px solid #7c5cff;">
            <p style="margin: 0; color: #555; font-size: 14px; font-weight: bold;">Your message summary:</p>
            <p style="margin: 8px 0 0 0; color: #333; font-size: 14px; line-height: 1.6;">
              <strong>Service:</strong> ${contactData.service || "Not specified"}<br/>
              <strong>Budget:</strong> ${contactData.budget || "Not specified"}
            </p>
          </div>
          <p style="color: #555; line-height: 1.7;">
            If you have any urgent questions, you can also reach us on WhatsApp at <strong>+251 900 000 000</strong> or Telegram at <strong>@heroydev</strong>.
          </p>
          <p style="color: #555; line-height: 1.7;">
            Best regards,<br/>
            <strong>The HEROY Team</strong>
          </p>
        </div>
        <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
          HEROY Digital Agency — Injibara, Awi Zone, Amhara, Ethiopia<br/>
          hello@heroy.dev
        </p>
      </div>
    `,
  };

  await transporter.sendMail(adminMailOptions);
  await transporter.sendMail(clientMailOptions);
};

const sendConsultationNotification = async (data) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New Consultation Request — ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #7c5cff, #22d3ee); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0;">New Consultation Request</h1>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Name</td>
              <td style="padding: 10px 0;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px 0;">${data.email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Preferred Date</td>
              <td style="padding: 10px 0;">${data.date || "Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Preferred Time</td>
              <td style="padding: 10px 0;">${data.time || "Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Platform</td>
              <td style="padding: 10px 0;">${data.platform || "Google Meet"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Topic</td>
              <td style="padding: 10px 0;">${data.topic || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Notes</td>
              <td style="padding: 10px 0;">${data.notes || "None"}</td>
            </tr>
          </table>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendContactNotification, sendConsultationNotification };
