import { createClient } from 'next-sanity';
import { NextResponse } from 'next/server';
import { writeClient } from '@/sanity/config/client-config'; // Adjust the import path according to your project structure

const client = createClient(writeClient);

export async function POST(req: Request) {
	const data = await req.json();
	const { name, email, comment, postId } = data;
	if (!name || !comment || !postId) {
		return NextResponse.json(
			{ message: 'All fields are required.' },
			{ status: 400 }
		);
	}

	try {
		const newComment = await client.create({
			_type: 'comment',
			name,
			email: email || '', // Email is optional
			comment,
			post: {
				_type: 'reference',
				_ref: postId,
			},
		});
		return NextResponse.json({
			message: 'Comment added successfully',
			comment: newComment,
		});
	} catch (error: any) {
		return NextResponse.json(
			{
				message: 'Failed to create a comment',
				error,
			},
			{ status: 500 }
		);
	}
}
