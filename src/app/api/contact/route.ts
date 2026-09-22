import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body ?? {};

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

  // Delivery is not wired up yet — plug in an email service (e.g. Resend,
  // or SMTP via Nodemailer) here before this goes live.
  console.log("Contact form submission:", body);

  return NextResponse.json({ ok: true });
}
