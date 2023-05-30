import Image from 'next/image';
import { getLatestPost } from '@/sanity/sanity-utils';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import TextComponent from './TextComponent';

export default async function BlogMediumCard() {
	const posts = await getLatestPost();

	const components = TextComponent();

	return posts.map(async (post: any) => {
		return (
			<Link key={post._id} href={`/posts/${post.slug}`}>
				<div className='flex flex-col my-5 bg-base-300 shadow-lg shadow-slate-400 rounded-lg md:bg-base-100 lg:card-side md:card md:w-96 hover:shadow-xl hover:shadow-slate-500 hover:transition-all duration-300'>
					<div className='h-9/12 ml-4 my-4 border-l-4 border-red-700 '>
						<h1 className='font-playfair_display text-3xl p-3 text-red-900 font-bold md:hidden'>
							{post.name}
						</h1>
					</div>
					<figure>
						<Image
							src={(await urlFor(post.image)).url()}
							width={900}
							height={700}
							alt={post.image}
							className='md:rounded-t-md'
							priority
						/>
					</figure>

					<div className='card-body '>
						<div>
							<h1 className='hidden text-2xl font-playfair_display'>
								{post.name}
							</h1>
						</div>
						<div className='text-justify'>
							<PortableText
								value={post.summary}
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
