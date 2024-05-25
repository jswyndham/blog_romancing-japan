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
const SignupCardLong = dynamic(
	() => import('@/app/components/SignupCardLong'),
	{
		ssr: false,
	}
);

type Props = {
	params: { slug: string };
};

interface PortableTextBlock {
	_key: string;
	_type: string;
	style?: string;
	children?: PortableTextBlock[];
}

interface HeadingNode extends PortableTextBlock {
	subheadings: HeadingNode[];
}

const filter = (
	ast: PortableTextBlock[],
	match: (node: PortableTextBlock) => boolean
): PortableTextBlock[] =>
	ast.reduce((acc: PortableTextBlock[], node: PortableTextBlock) => {
		if (match(node)) acc.push(node);
		if (node.children) acc.push(...filter(node.children, match));
		return acc;
	}, []);

const findHeadings = (ast: PortableTextBlock[]): HeadingNode[] =>
	filter(ast, (node: PortableTextBlock) => node.style === 'h2').map(
		(node) => ({
			...node,
			subheadings: [],
		})
	);

const get = (object: any, path: (string | number)[]): any =>
	path.reduce((prev: any, curr: string | number) => prev[curr], object);

const getObjectPath = (path: number[]): (string | number)[] =>
	path.length === 0
		? path
		: ['subheadings', ...path.flatMap((p) => ['subheadings', p])];

const parseOutline = (ast: PortableTextBlock[]): HeadingNode[] => {
	const outline = { subheadings: [] as HeadingNode[] };
	const headings: HeadingNode[] = findHeadings(ast);
	const path: number[] = [];
	let lastLevel = 0;

	headings.forEach((heading) => {
		const level = Number(heading.style?.slice(1));
		if (level < lastLevel)
			for (let i = lastLevel; i >= level; i--) path.pop();
		else if (level === lastLevel) path.pop();

		const prop = get(outline, getObjectPath(path)) as HeadingNode;
		prop.subheadings.push(heading);
		path.push(prop.subheadings.length - 1);
		lastLevel = level;
	});

	return outline.subheadings;
};

export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
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

export const revalidate = 60; // Time interval

export default async function postArticle({ params: { slug } }: Props) {
	const post = await createArticle({ params: { slug } });
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
			'@id': `https://www.romancing-japan.com/posts/${post.slug}/`,
		},
	};

	return (
		<>
			<Head>
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href={`https://www.romancing-japan.com/posts/${post.slug}/`}
					key="canonical"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>
			<section
				key={post._id}
				className="flex flex-col items-center justify-center w-fit  xl:items-start xl:flex-row overflow-hidden"
			>
				<article className="w-fit md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] 3xl:w-[40%] flex flex-col justify-center">
					{/* TOP BOARDER */}
					<div className="flex flex-col items-center justify-center">
						<div className="container ">
							<RedBarDecoration />

							{/* CATEGORIES & TAGS */}
							<CategoriesAndTags
								params={{
									slug: slug,
								}}
							/>

							{/* TITLE */}
							<div className="flex flex-col">
								<h1 className="mt-2 text-3xl md:text-5xl ml-5 p-1 font-heading font-bold">
									{post.name}
								</h1>

								{/* AUTHOR */}
								{post.author.map((author, index) => (
									<div key={`${post._id}-author-${index}`}>
										<p className="ml-8 mt-3 pb-1 text-primary text-lg font-bold">
											{author.name}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* IMAGE */}
					<div>
						<figure className="flex flex-col justify-center my-6">
							<Image
								src={(await urlFor(post.image)).url()}
								alt={post.name || 'Romancing Japan'}
								title={post.caption || 'Romancing Japan'}
								width={900}
								height={900}
								className="w-full shadow-lg shadow-slate-500"
								priority={true}
							/>

							<figcaption className="italic text-base text-left m-3">
								{post.caption}
							</figcaption>
						</figure>
					</div>

					<div>
						<TableOfContents outline={outline} />
					</div>

					{/* ARTICLE BODY */}
					<div className="container">
						<div className="flex flex-col justify-center whitespace-pre-line md:flex-row">
							<div className="lg:w-11/12 px-4 py-4 my-2 font-heading text-left text-xl md:text-2xl whitespace-pre-line leading-9 md:leading-10">
								<PortableText
									value={post.content}
									onMissingComponent={false}
									components={components}
								/>
							</div>
						</div>
					</div>

					{/* SUBSCRIBE CARD @ SM - LG */}
					<div className="w-screen flex items-center justify-start xl:hidden">
						<SignupCardLong />
					</div>

					{/* BOTTOM BORDER */}
					<RedBarDecoration />
				</article>

				{/* SIDE / BOTTOM SECTION */}

				<article className="flex flex-col xl:max-w-xs md:w-[80%] mt-4 items-start justify-start">
					<SideBioSubscriptionLatestArt
						params={{
							slug: slug,
						}}
					/>
				</article>
			</section>
		</>
	);
}
