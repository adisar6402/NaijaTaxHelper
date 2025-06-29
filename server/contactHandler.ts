// server/contactHandler.ts

import type { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const contactHandler = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  // Validate incoming request
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const toEmail = process.env.TO_EMAIL;

    if (!toEmail) {
      console.error("❌ Missing TO_EMAIL in .env");
      return res.status(500).json({ message: "Server email misconfiguration" });
    }

    console.log("📨 Sending to:", toEmail);

    // 📥 Message to Admin
    await transporter.sendMail({
      from: `"NaijaTaxHelper Contact" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: `📬 New Contact Message from ${name}`,
      html: `
        <h2>New Message from NaijaTaxHelper</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // ✅ Auto-reply to user
    await transporter.sendMail({
      from: `"NaijaTaxHelper Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to <strong>NaijaTaxHelper</strong>.</p>
        <p>We’ve received your message and will get back to you shortly.</p>
        <hr />
        <p><em>Your message:</em></p>
        <blockquote>${message.replace(/\n/g, "<br>")}</blockquote>
        <br>
        <p>Warm regards,</p>
        <p><strong>NaijaTaxHelper Team</strong></p>
      `,
    });

    console.log(`📩 Auto-reply sent to ${email}`);
    return res.status(200).json({ message: "✅ Message sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return res.status(500).json({ message: "❌ Failed to send message. Try again later." });
  }
};
