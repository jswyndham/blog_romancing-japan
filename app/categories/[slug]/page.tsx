'use server';

import { createClient, groq } from 'next-sanity';
import { readClient } from '@/sanity/config/client-config';
import Image from 'next/image';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next/types';
import { Category } from '@/typings';
import PortableTextComp from '@/app/components/PortableTextComponents';
import Head from 'next/head';

type Props = {
	params: { slug: string };
};

// GROQ QUERY WITH METADATA
export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
	const query = groq`*[_type == "category" && slug.current == $slug][0]
  {...,
  "slug":slug.current,
  "post":*[_type=="post" && references(^._id)]{_id, name, "slug": slug.current, "image": image.asset->url, summary, summaryShort, description}}`;

	const category: Category = await createClient(readClient).fetch(query, {
		slug,
	});

	return {
		title: `Romancing Japan | ${category.title}`,
		description: category.description,
		alternates: {
			canonical: `/categories/${category.slug}/`,
		},
		openGraph: {
			title: `Romancing Japan | ${category.title}`,
			description: category.description,
			type: 'article',
			siteName: 'Romancing Japan',
		},
		twitter: {
			card: 'summary_large_image',
			title: `Romancing Japan | ${category.title}`,
			description: category.description,
			creator: '@RomancingJapan',
		},
	};
}

// ARTICLE DISPLAY BY CATEGORY
export default async function categoryPage({ params: { slug } }: Props) {
	const query = groq`*[_type == "category" && slug.current == $slug][0]
  {..., 
  "slug":slug.current,
  "post":*[_type=="post" && references(^._id)]{_id, name, "slug": slug.current, "image": image.asset->url, summary, summaryShort, description}}`;

	const category = await createClient(readClient).fetch(query, { slug });

	// RICH TEXT EDITOR
	const components = PortableTextComp();

	return (
		<>
			<Head>
				<meta
					name="google-adsense-account"
					content="ca-pub-1847015508086202"
				/>
				{/* Google Ads Sense */}
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1847015508086202"
					crossOrigin="anonymous"
				></script>
			</Head>
			<section className="flex justify-center h-fit px-8 py-4">
				{/* Banner */}
				<div className="absolute top-32 w-full font-roboto-condensed text-white bg-slate-700 p-4 -ml-5 flex flex-row justify-center text-3xl font-bold">
					<h1 className="flex flex-row">
						<span className="hidden lg:flex mr-2">
							Romancing Japan |{' '}
						</span>
						Category:{' '}
						<span className="italic text-red-500">
							{category.title}
						</span>
					</h1>
				</div>

				{/* CARD */}
				<article>
					<div key={category._id} className="flex justify-center">
						<div className="mt-24 mb-4 pb-2 md:w-[95%] xl:w-[70%] md:grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8">
							{category.post.map(async (post: any) => (
								<Link
									key={post._id}
									href={`/posts/${post.slug}/`}
								>
									<div
										key={category._id}
										className="card rounded-none w-fit h-fit md:h-full mx-2 mt-6 mb-8 hover:shadow-lg hover:shadow-slate-200 hover:drop-shadow  hover:bg-base-100 hover:transition-all duration-300 group"
									>
										{/* Card Image */}
										<figure className="h-40 3xl:h-56 border-b-2 border-red-500">
											<Image
												src={urlFor(post.image)}
												width={700}
												height={650}
												alt={post.image}
												loading="lazy"
												className="top-0 group-hover:scale-105 transition-transform duration-700"
											/>
										</figure>

										{/* Card Title & Summary */}
										<div className="card-body p-4 rounded-2xl">
											<div className="flex items-center h-24 pl-2 py-2 mt-1 mb-2 border-l-2 border-red-600 xl:h-28">
												<h2 className="font-roboto_condensed text-red-900 text-2xl font-bold justify-left">
													{post.name}
												</h2>
											</div>
											<div className="h-44 md:h-52 lg:h-48 2xl:h-64 3xl:h-44 m-1 text-lg text-left px-2">
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
					</div>
				</article>
			</section>
		</>
	);
}
