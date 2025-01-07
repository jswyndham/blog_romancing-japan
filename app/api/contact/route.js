import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const { firstName, lastName, email, subject, message } =
			await req.json();

		// OAuth2 Credentials
		const oAuth2Client = new google.auth.OAuth2( // Use google.auth.OAuth2 here
			process.env.GOOGLE_CLIENT_ID,
			process.env.GOOGLE_CLIENT_SECRET,
			process.env.GOOGLE_REDIRECT_URI
		);

		// Set refresh token
		oAuth2Client.setCredentials({
			refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
		});

		// Get Access Token
		const accessToken = await oAuth2Client.getAccessToken();

		// Setup Nodemailer
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: process.env.GMAIL_USER,
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
				accessToken: accessToken.token,
			},
			tls: {
				rejectUnauthorized: false, // Disable SSL verification
			},
		});

		// Email content
		const mailOptions = {
			from: email,
			to: process.env.GMAIL_USER,
			subject: `${email} , SUBJECT: ${subject}`,
			text: `Message from ${firstName} ${lastName}: ${message}`,
		};

		// Send email
		const result = await transporter.sendMail(mailOptions);
		console.log('Email sent:', result);

		return NextResponse.json({
			success: true,
			message: 'Email sent successfully!',
		});
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
}
