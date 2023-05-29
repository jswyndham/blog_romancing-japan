import Image from 'next/image';
import { getPostsSmallCard } from '@/sanity/sanity-utils';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

const components = {
	list: {
		bullet: ({ children }: any) => (
			<ul className='list-disc ml-8 py-5 space-y-5'>{children}</ul>
		),
		number: ({ children }: any) => (
			<ol className='list-decimal mt-lg ml-4 py-6 space-y-5'>{children}</ol>
		),
	},
	block: {
		h1: ({ children }: any) => (
			<h1 className='text-5xl py-7 font-bold'>{children}</h1>
		),
		h2: ({ children }: any) => (
			<h2 className='text-2xl py-4 font-bold'>{children}</h2>
		),
		h3: ({ children }: any) => (
			<h3 className='text-3xl py-7 font-bold'>{children}</h3>
		),
		h4: ({ children }: any) => (
			<h4 className='text-2xl pt-7 pb-3 font-bold'>{children}</h4>
		),
		h5: ({ children }: any) => (
			<h4 className='text-xl pt-7 pb-3 font-extrabold'>{children}</h4>
		),

		blockquote: ({ children }: any) => (
			<blockquote className='border-l-[#CA3433] border-l-4 pl-5 py-5 my-5'>
				{children}
			</blockquote>
		),
	},

	marks: {
		em: ({ children }: any) => (
			<em className='text-gray-600 font-semibold'>{children}</em>
		),
	},
};

export default async function BlogSmallCard() {
	const posts = await getPostsSmallCard();

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
