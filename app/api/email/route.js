import { Resend } from "resend";

import WelcomeEmail from ".../email/welcome";

const resend = new Resend(process.env.EMAIL_KEY);

export default async function POST() {
  const body = await req.json();

  resend.sendEmail({
    from: process.env.USER,
    to: "user@gmail.com",
    subject: "Welcome to Romancing Japan!",
    react: WelcomeEmail(),
  });
}
