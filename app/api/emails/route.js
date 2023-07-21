import { Resend } from "resend";
import { NextResponse, } from "next/server";
import Welcome from "../../emails/welcome";

const resend = new Resend(process.env.EMAIL_KEY);


export async function POST(req) {

  const {firstName, email} = await req.json();

  await resend.sendEmail({
    from: "contact@romancing-japan.com",
    to: email,
    subject: `Welcome, ${firstName}, to Romancing Japan`,
    react: Welcome(),
  });

  return NextResponse.json({
    status:'Ok'
  })
}
