import Image from 'next/image';
import { getMostPopularMobile } from '@/sanity/sanity-utils';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import { Post } from '@/typings';

// Helper function to fetch the image URLs
async function fetchImageUrls(posts: Post[]): Promise<Post[]> {
	return await Promise.all(
		posts.map(async (post) => ({
			...post,
			imageUrl: urlFor(post.image) || '', // Await the urlFor function properly
		}))
	);
}

export default async function PopularArticlesMobile() {
	// Await the result of getLatestPostMini to ensure we have the posts array
	const posts = await getMostPopularMobile();
	const postsWithImageUrls = await fetchImageUrls(posts);

	return (
		<>
			{postsWithImageUrls.map((post) => (
				<Link key={post._id} href={`/posts/${post.slug}/`}>
					<div className="card rounded-none w-fit h-fit mx-2">
						<figure className="h-16 md:h-28">
							{post.imageUrl && ( // Conditional rendering to ensure imageUrl is not undefined
								<Image
									src={post.imageUrl}
									alt={post.caption || 'Romancing Japan'}
									title={post.caption || 'Romancing Japan'}
									width={700}
									height={650}
									loading="lazy"
								/>
							)}
						</figure>
						<div className="card-body px-1 mb-2 h-20">
							<div className="flex items-center h-16 pl-2 border-l-2 border-red-600">
								<h2 className="font-roboto_condensed text-red-900 text-sm md:text-lg font-light">
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
