import { createClient } from 'next-sanity';

// Create a Sanity client
const client = createClient({
	projectId: 'x0c10dda',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-04-25',
	token: process.env.SANITY_AUTH_TOKEN,
});

// Define the type for a post document
interface Post {
	_id: string;
}

async function initializeViews(): Promise<void> {
	try {
		// Fetch all posts without a `views` field
		const posts: Post[] = await client.fetch(
			`*[_type == "post" && !defined(views)]{_id}`
		);

		if (posts.length === 0) {
			console.log(
				'No posts to update. All posts already have the `views` field.'
			);
			return;
		}

		// Create a transaction to set `views` to 0 for all posts
		const transaction = client.transaction();
		posts.forEach((post: Post) => {
			transaction.patch(post._id, { set: { views: 0 } });
		});

		// Commit the transaction
		await transaction.commit();
		console.log(
			`Successfully initialized 'views' for ${posts.length} posts.`
		);
	} catch (error: unknown) {
		// Type guard for error handling
		if (error instanceof Error) {
			console.error('Error initializing views:', error.message);
		} else {
			console.error('Unknown error occurred:', error);
		}
	}
}

initializeViews();
