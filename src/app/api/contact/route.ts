import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const projectTypes: Record<string, string> = {
  "starter-site": "A starter site",
  "custom-app": "A custom app",
  "not-sure": "Not sure yet",
};

const smtpPort = Number(process.env.SMTP_PORT ?? 465);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const rateLimit = { max: 5, windowMs: 60 * 60 * 1000 };
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  for (const [key, times] of recentSubmissions) {
    const recent = times.filter((time) => now - time < rateLimit.windowMs);
    if (recent.length) recentSubmissions.set(key, recent);
    else recentSubmissions.delete(key);
  }
  const times = recentSubmissions.get(ip) ?? [];
  if (times.length >= rateLimit.max) return true;
  recentSubmissions.set(ip, [...times, now]);
  return false;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const { name, email, message, projectType, website, elapsedMs } = body ?? {};

  // Bots fill the hidden honeypot field, or submit faster than a person could
  // type. Pretend it worked so they don't adapt.
  if (website || typeof elapsedMs !== "number" || elapsedMs < 3000) {
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

  // nginx sets X-Real-IP; without it, all visitors share one bucket.
  const ip = request.headers.get("x-real-ip") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages" }, { status: 429 });
  }

  const project = projectTypes[projectType] ?? "Not specified";

  try {
    await transporter.sendMail({
      from: `"Tywyn Websites" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? process.env.SMTP_USER,
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
