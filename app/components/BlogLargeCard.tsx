import Image from 'next/image';
import { getPostsArchive } from '@/sanity/sanity-utils';
import { urlFor } from '@/lib/urlFor';

export default async function BlogLargeCard() {
	const posts = await getPostsArchive();

	return posts.map(async (post) => {
		return (
			<div
				key={post._id}
				className='card lg:card-side m-4 bg-base-100 shadow-xl'
			>
				<figure className='fit'>
					<Image
						src={(await urlFor(post.image)).url()}
						width={700}
						height={600}
						alt={post.image}
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{post.name}</h2>
					<p className='text-justify'>{post.excerpt}</p>
					<div className='card-actions flex justify-between'>
						{post.author.map((author) => (
							<div className='p-2'>
								<h5>Written by </h5>
								<p>{author.name}</p>
							</div>
						))}
						<button className='btn btn-xs btn-outline btn-success'>
							Read More
						</button>
					</div>
				</div>
			</div>
		);
	});
}
