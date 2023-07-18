import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  // This requests the json body
  const body = await req.json();

  const transporter = await nodemailer.createTransport({
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
      `,
  };

  try {
    transporter.sendMail(mail);
    console.log("Message sent");
    return NextResponse.json({ data: body.data }, { message: "Success!" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Could not send email." });
  }
}
