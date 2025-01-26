import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET() {
	const oneMonthInSeconds = 30 * 24 * 60 * 60;

	const cookie = serialize('myCookie', 'cookieValue', {
		httpOnly: true, // Prevent client-side access to the cookie
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'None', // Required for cross-origin usage
		path: '/', // Cookie accessible across the entire site
		maxAge: oneMonthInSeconds,
		domain: '.romancing-japan.com', // Ensure the cookie works across subdomains
	});

	const response = NextResponse.json({
		message: 'Cookie set for one month!',
	});

	// Add CORS headers to handle cross-origin requests
	response.headers.set(
		'Access-Control-Allow-Origin',
		'https://www.romancing-japan.com'
	);
	response.headers.set('Access-Control-Allow-Credentials', 'true');
	response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	response.headers.set(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization'
	);

	// Append the cookie to the response headers
	response.headers.append('Set-Cookie', cookie);

	return response;
}
