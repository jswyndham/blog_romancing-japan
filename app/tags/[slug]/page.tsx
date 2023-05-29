import React from 'react';
import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';
import Image from 'next/image';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import TextComponent from '@/app/components/TextComponent';
import { PortableText } from '@portabletext/react';

type Props = {
	params: { slug: string };
};

export default async function tagPage({ params: { slug } }: Props) {
	const query = groq`*[_type == "tag" && slug.current == $slug][0]
  {..., 
  "slug":slug.current, 
  "post":*[_type=="post" && references(^._id)]{_id, name, "slug": slug.current, "image": image.asset->url, summary, summaryShort}}`;

	const tag = await createClient(clientConfig).fetch(query, { slug });

	const components = TextComponent();

	return (
		<main className='px-8 py-4'>
			<div className='w-screen -ml-8 p-2 font-roboto-condensed text-white bg-slate-700 text-2xl text-center'>
				<h1>Tag: {tag.title}</h1>
			</div>
			<div key={tag._id} className='md:grid md:grid-cols-3 md:gap-4 md:py-8'>
				{tag.post.map(async (post: any) => (
					<Link key={post._id} href={`/posts/${post.slug}`}>
						<div
							key={tag._id}
							className='card w-full my-5 bg-base-200 shadow-xl'
						>
							<figure className='h-44 border-b-2 border-red-500'>
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
				))}
			</div>
		</main>
	);
}
