import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		// Parse the incoming request body
		const body = await req.json();

		// Log the request body for debugging
		console.log('Received data:', body);

		// Configure nodemailer transporter
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true, // Use SSL
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});

		// Create the email options
		const mail = {
			from: body.email,
			to: process.env.USER, // Replace with your receiving email address
			replyTo: body.email,
			subject: `Message from Romancing Japan - ${body.subject}`,
			text: `${body.message} sent from ${body.firstName} ${body.lastName}`,
			html: `
        <div>
          <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Subject:</strong> ${body.subject}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        </div>
      `,
		};

		// Send the email
		const info = await transporter.sendMail(mail);

		// Log email sending details for debugging
		console.log('Email sent: ', info.messageId);

		// Return success response with status 200
		return NextResponse.json(
			{ message: 'Email sent successfully!' },
			{ status: 200 }
		);
	} catch (error) {
		// Log the error for debugging
		console.error('Error sending email:', error);

		// Return error response with status 500
		return NextResponse.json(
			{ message: 'Could not send email.', error: error.message },
			{ status: 500 }
		);
	}
}
