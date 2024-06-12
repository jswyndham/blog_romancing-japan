import { createClient, groq } from 'next-sanity';
import Image from 'next/image';
import Head from 'next/head';
import { Post } from '../../../typings';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/urlFor';
import { readClient } from '@/sanity/config/client-config';
import { Metadata } from 'next';
import PortableTextComp from '@/app/components/PortableTextComponents';
import { TableOfContents } from '@/app/components/TableOfContents';
import SideBioSubscriptionLatestArt from '@/app/components/SideBioSubscriptionLatestArt';
import { createArticle } from '@/sanity/sanity-utils';
import dynamic from 'next/dynamic';
import CategoriesAndTags from '@/app/components/CategoriesAndTags';
import RedBarDecoration from '@/app/components/RedBarDecoration';
import {
	filter,
	findHeadings,
	get,
	getObjectPath,
	parseOutline,
} from '../../utils/outlineUtils';
import AddComment from '@/app/components/AddComment';
import AllComments from '@/app/components/AllComments';
import { addTrailingSlash } from '@/app/utils/urlUtils';

const SignupCardLong = dynamic(
	() => import('@/app/components/SignupCardLong'),
	{
		ssr: false,
	}
);

type PageProps = {
	params: { slug: string };
	searchParams?: { [key: string]: string | string[] | undefined };
};

// ******** Page Metadata *****************
export async function generateMetadata({
	params: { slug },
}: PageProps): Promise<Metadata> {
	const query = groq`*[_type=="post" && slug.current == $slug][0] {
			...,
			_id,
			_createdAt,
			name,
			pageName,
			"slug": slug.current,
			"image": image.asset->url,
			url,
			content[]{
					...,
					_type == "image" => {
							...,
							asset->
					}
			},
			author[]->,
			category[]->{title, "slug": slug.current,},
			tag[]->{title, "slug": slug.current,},
			summary,
			summaryShort,
			description,
			"comments": *[_type == "comment" && post._ref == ^._id]
	}`;

	const post: Post = await createClient(readClient).fetch(query, { slug });

	return {
		title: post.pageName,
		description: post.description,
		alternates: {
			canonical: `https://www.romancing-japan.com/posts/${post.slug}/`,
		},
		openGraph: {
			title: post.pageName,
			description: post.description,
			type: 'article',
			images: { url: post.image, width: 600, height: 400 },
			siteName: 'Romancing Japan',
			url: `https://www.romancing-japan.com/posts/${post.slug}/`,
		},
		twitter: {
			card: 'summary_large_image',
			site: 'https://twitter.com/RomancingJapan',
			title: post.pageName,
			description: post.description,
			creator: '@RomancingJapan',
			images: { url: post.image, width: 600, height: 400 },
		},
	};
}

export const revalidate = 10; // Time interval

export default async function postArticle({
	params: { slug },
	searchParams,
}: PageProps) {
	const commentsOrder = Array.isArray(searchParams?.commentsOrder)
		? searchParams.commentsOrder[0]
		: searchParams?.commentsOrder || 'desc';
	const post = await createArticle({
		params: { slug },
		commentsOrder,
	});

	if (!post) {
		return <div>Post not found</div>;
	}

	const postUrl = addTrailingSlash(`/posts/${post.slug}`);

	const components = PortableTextComp();
	const outline = parseOutline(post.content);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.pageName,
		image: (await urlFor(post.image)).url(),
		author: post.author.map((author: any) => ({
			'@type': 'Person',
			name: author.name,
		})),
		datePublished: post._createdAt,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': postUrl,
		},
	};

	return (
		<>
			<Head>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={postUrl} key="canonical" />
			</Head>
			<section
				key={post._id}
				className="flex flex-col justify-center items-center w-full"
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<article className="relative w-full">
					{/* IMAGE */}
					<figure className="relative flex justify-center h-full overflow-hidden">
						<Image
							src={(await urlFor(post.image)).url()}
							alt={post.name || 'Romancing Japan'}
							title={post.caption || 'Romancing Japan'}
							width={1440}
							height={1080}
							className="w-full 2xl:w-4/5 3xl:w-4/6 maxw-2xl h-full object-cover object-center shadow-lg shadow-slate-500"
							priority={true}
						/>
					</figure>
					<figcaption className="absolute w-fit right-6 2xl:right-44 3xl:right-1/4 bg-black bg-opacity-20 italic text-white text-right m-2 p-1 top-0 text-sm lg:text-lg rounded-md">
						{post.caption}
					</figcaption>

					{/* The title div */}
					<div className="absolute w-full md:w-5/6 max-w-6xl h-80 md:h-96 xl:h-80 left-0 md:left-10 2xl:left-44 3xl:left-1/4 smx:-bottom-56 md:-bottom-3656 xl:bottom-2 bg-black bg-opacity-80 xl:bg-opacity-50 md:rounded-md">
						<div>
							{/* TITLE */}
							<h1 className="absolute mt-2 ml-5 p-2 text-4xl md:text-6xl 2xl:text-7xl font-heading font-bold text-white">
								{post.name}
							</h1>
						</div>

						<div>
							{/* AUTHOR */}
							{post.author.map((author, index) => (
								<div key={`${post._id}-author-${index}`}>
									<p className="absolute flex items-end align-bottom ml-6 2xl:ml-8 mb-1 text-yellow-400 text-lg md:text-2xl bottom-24 smx:bottom-20 smx:pb-2 md:pb-4">
										{author.name}
									</p>
								</div>
							))}
							{/* CATEGORIES & TAGS */}
							<div className="absolute bottom-0 m-2">
								<CategoriesAndTags
									params={{
										slug: slug,
									}}
								/>
							</div>
						</div>
					</div>
				</article>

				<article className="mt-40 w-full md:w-[80%] 3xl:w-[60%] flex flex-col xl:flex-row justify-center">
					<div className="flex flex-col items-center w-full">
						<div className="flex justify-center mt-44 smx:mt-24 md:mt-16 xl:-mt-32">
							<TableOfContents outline={outline} />
						</div>

						{/* ARTICLE BODY */}
						<div className="container mx-auto">
							<div className="flex flex-col justify-center items-center whitespace-pre-line md:flex-row">
								<div className="w-11/12 px-1 py-4 mt-2 font-heading text-left text-xl md:text-2xl whitespace-pre-line leading-9 md:leading-10">
									<PortableText
										value={post.content}
										onMissingComponent={false}
										components={components}
									/>
								</div>
							</div>
						</div>
						<div className="w-full">
							<AddComment postId={post?._id} />
							<AllComments
								comments={post?.comments || []}
								slug={post.slug.toString()}
								commentsOrder={commentsOrder}
							/>
						</div>

						{/* SUBSCRIBE CARD @ SM - LG */}
						<div className="w-screen flex mx-auto items-center justify-center xl:hidden">
							<SignupCardLong />
						</div>

						{/* BOTTOM BORDER */}
						<RedBarDecoration />
					</div>

					{/* SIDE / BOTTOM SECTION */}
					<div className="flex flex-col xl:max-w-xs md:w-[80%] mx-3 -mt-40 items-start justify-start xl:sticky xl:top-0">
						<SideBioSubscriptionLatestArt
							params={{
								slug: slug,
							}}
						/>
					</div>
				</article>
			</section>
		</>
	);
}
