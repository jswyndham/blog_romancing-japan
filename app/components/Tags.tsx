import { getTags } from '@/sanity/sanity-utils';
import Link from 'next/link';

export const metadata = {
	title: 'Romancing Japan Article Tags',
	description:
		'This page is a collection of all article tags that identified the main themes related to articles published by Romancing Japan.',
	alternates: {
		canonical: `https://www.romancing-japan.com/tags/`,
	},
	openGraph: {
		title: 'Romancing Japan Article Tags',
		description:
			'This page is a collection of all article tags that identified the main themes related to articles published by Romancing Japan.',
		type: 'website',
		siteName: 'Romancing Japan',
	},
};

export default async function Tags() {
	const tags = await getTags();

	// return post.map(async (post) => {
	return (
		<div className="dropdown dropdown-end mt-6">
			<label tabIndex={0} className="m-1">
				Tags
			</label>
			<nav>
				<ul
					tabIndex={0}
					className="dropdown-content bg-red-700 text-white menu p-2 shadow rounded-box w-52"
				>
					{tags.map((tag: any) => (
						<li key={tag._id}>
							<Link href={`/tags/${tag.slug}`}>{tag.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
