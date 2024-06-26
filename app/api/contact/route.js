import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  // This requests the json body
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mail = {
    from: body.email,
    to: process.env.USER,
    replyTo: body.email,
    subject: `Message from Romancing Japan, subject: ${body.subject}, from: ${body.firstName} ${body.lastName}`,
    text: `${body.message} sent from ${body.email}`,
    html: `
    <div>
      <p>Name:</p> 
      <p>${body.firstName} ${body.lastName}</p>
      <br />
      <p>Address:</p> 
      <p>${body.email}</p>
      <br />
      <p>Subject:</p> 
      <p>${body.subject}</p>
      <br />
      <p>Message:</p> 
      <p>${body.message}</p>
      </div>
      `,
  };

  try {
    await transporter.sendMail(mail);
    return NextResponse.json({ data: body.data }, { message: "Success!" });
  } catch (err) {
    return NextResponse.json({ message: "Could not send email." });
  }
}
