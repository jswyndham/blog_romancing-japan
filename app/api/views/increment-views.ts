// pages/api/increment-views.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'next-sanity';

const client = createClient({
	projectId: 'x0c10dda',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-04-25',
	token: process.env.SANITY_AUTH_TOKEN,
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { slug } = req.body;

		if (!slug) {
			return res.status(400).json({ error: 'Slug is required.' });
		}

		try {
			// Increment the view count
			const data = await client
				.patch(slug) // Use slug as the identifier
				.setIfMissing({ views: 0 })
				.inc({ views: 1 })
				.commit();

			res.status(200).json({ message: 'View count updated.', data });
		} catch (error) {
			res.status(500).json({ error: 'Failed to update view count.' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
