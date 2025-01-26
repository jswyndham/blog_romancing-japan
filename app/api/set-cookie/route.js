import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET() {
	const oneMonthInSeconds = 30 * 24 * 60 * 60;

	const cookie = serialize('myCookie', 'cookieValue', {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'none',
		path: '/',
		maxAge: oneMonthInSeconds,
	});

	// Create response
	const response = NextResponse.json({
		message: 'Cookie set for one month!',
	});

	// Add CORS headers for cross-origin compatibility
	response.headers.set(
		'Access-Control-Allow-Origin',
		'https://www.romancing-japan.com'
	);
	response.headers.set('Access-Control-Allow-Credentials', 'true');

	// Append cookie to response headers
	response.headers.append('Set-Cookie', cookie);

	return response;
}
