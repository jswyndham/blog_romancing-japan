import Image from 'next/image';
import { getLatestPostMini } from '@/sanity/sanity-utils';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import { Post } from '@/typings';

// Helper function to fetch the image URLs
async function fetchImageUrls(posts: Post[]): Promise<Post[]> {
	return await Promise.all(
		posts.map(async (post) => ({
			...post,
			imageUrl: (await urlFor(post.image)).url() || '', // Await the urlFor function properly
		}))
	);
}

export default async function BlogSmallCard() {
	// Await the result of getLatestPostMini to ensure we have the posts array
	const posts = await getLatestPostMini();
	const postsWithImageUrls = await fetchImageUrls(posts);

	return (
		<>
			{postsWithImageUrls.map((post) => (
				<Link key={post._id} href={`/posts/${post.slug}/`}>
					<div className="card rounded-none w-fit h-fit mx-2 my-1 hover:shadow-lg hover:shadow-slate-200 hover:drop-shadow hover:bg-base-100 hover:transition-all duration-300 group">
						<figure className="">
							{post.imageUrl && ( // Conditional rendering to ensure imageUrl is not undefined
								<Image
									src={post.imageUrl}
									alt={post.caption || 'Romancing Japan'}
									title={post.caption || 'Romancing Japan'}
									width={700}
									height={650}
									loading="lazy"
									className="top-0 group-hover:scale-105 transition-transform duration-700"
								/>
							)}
						</figure>
						<div className="card-body px-4 my-3 h-52">
							<div className="flex items-center max-h-28 min-h-16 pl-2 py-2 border-l-2 border-red-600 xl:h-28">
								<h2 className="font-roboto_condensed text-red-900 text-2xl font-bold">
									{post.name}
								</h2>
							</div>
						</div>
					</div>
					<div className="divider mb-1"></div>
				</Link>
			))}
		</>
	);
}
