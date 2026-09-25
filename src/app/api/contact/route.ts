import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const projectTypes: Record<string, string> = {
  "simple-site": "A simple site",
  "custom-app": "A custom app",
  "not-sure": "Not sure yet",
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const { name, email, message, projectType, website } = body ?? {};

  // Honeypot: real visitors never see this field, so anything in it is a bot.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (
    name.length > 200 ||
    email.length > 200 ||
    message.length > 10000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const project = projectTypes[projectType] ?? "Not specified";

  try {
    await transporter.sendMail({
      from: `"Tywyn Websites" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO ?? process.env.GMAIL_USER,
      replyTo: { name: name.trim(), address: email.trim() },
      subject: `Website enquiry from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nProject: ${project}\n\n${message.trim()}`,
    });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json({ error: "Could not send message" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
