import Image from 'next/image';
import { getPostsSmallCard } from '@/sanity/sanity-utils';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import TextComponent from './TextComponent';

export default async function BlogSmallCard() {
	const posts = await getPostsSmallCard();

	const components = TextComponent();

	return posts.map(async (post) => {
		return (
			<Link key={post._id} href={`/posts/${post.slug}`}>
				<div className='card w-full my-3 bg-base-200 shadow-xl'>
					<figure className='h-44 border-b-2 border-red-500 '>
						<Image
							src={(await urlFor(post.image)).url()}
							width={700}
							height={650}
							alt={post.image}
							priority
						/>
					</figure>
					<div className='card-body p-4 rounded-2xl'>
						<div className='h-9/12 ml-1 px-5 py-3my-4 border-l-2 border-red-600'>
							<h2 className='font-roboto_condensed text-red-900 text-2xl font-bold'>
								{post.name}
							</h2>
						</div>
						<div className='px-3 text-md text-justify'>
							<PortableText
								value={post.summaryShort}
								onMissingComponent={false}
								components={components}
							/>
						</div>
					</div>
				</div>
			</Link>
		);
	});
}
