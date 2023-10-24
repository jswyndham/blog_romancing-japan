import { createClient, groq } from 'next-sanity';
import Image from 'next/image';
import { Post } from '../../../typings';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/urlFor';
import { readClient } from '@/sanity/config/client-config';
import { Metadata } from 'next';
import PortableTextComp from '@/app/components/PortableTextComponents';
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

// DYNAMIC METADATA TAGS
export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
	const query = groq`*[_type=="post" && slug.current == $slug][0]
    {
  ...,
  _id,
  _createdAt,
  name,
  pageName,
  "slug": slug.current,
  "image":image.asset->url, 
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

	const post: Post = await createClient(readClient).fetch(query, {
		slug,
	});

	// RETURN METADATA
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
			title: post.pageName,
			description: post.description,
			creator: '@RomancingJapan',
			images: { url: post.image, width: 600, height: 400 },
		},
	};
}

export const revalidate = 60; //Time interval

// ARTICLE LAYOUT
export default async function postArticle({ params: { slug } }: Props) {
	// FETCH SANITY UTILITIES
	const post = await createArticle({ params: { slug } });

	// RICH TEXT EDITOR
	const components = PortableTextComp();

	return (
		<main
			key={post._id}
			className="flex flex-col items-center justify-center w-fit  xl:items-start xl:flex-row overflow-hidden"
		>
			<section className="w-fit md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] 3xl:w-[40%] flex flex-col justify-center">
				{/* TOP BOARDER */}
				<article className="flex flex-col items-center justify-center">
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
							{post.author.map((author) => (
								<div key={post._id}>
									<p className="ml-8 mt-3 pb-1 text-primary text-lg font-bold">
										{author.name}
									</p>
								</div>
							))}
						</div>
					</div>
				</article>

				{/* IMAGE */}
				<article>
					<figure className="flex flex-col justify-center my-6">
						<Image
							src={(await urlFor(post.image)).url()}
							alt={post.name}
							width={900}
							height={900}
							className="w-full  shadow-lg shadow-slate-500"
							priority={true}
						/>

						<figcaption className="italic text-base text-left m-3">
							{post.caption}
						</figcaption>
					</figure>
				</article>

				{/* ARTICLE BODY */}
				<article className="container">
					<div className="flex flex-col justify-center whitespace-pre-line md:flex-row">
						<div className="lg:w-11/12 px-4 py-4 my-2 font-heading text-left text-xl 2xl:text-2xl whitespace-pre-line leading-9">
							<PortableText
								value={post.content}
								onMissingComponent={false}
								components={components}
							/>
						</div>
					</div>
				</article>

				{/* SUBSCRIBE CARD @ SM - LG */}
				<article className="w-screen flex items-center justify-start xl:hidden">
					<SignupCardLong />
				</article>

				{/* BOTTOM BORDER */}
				<RedBarDecoration />
			</section>

			{/* SIDE / BOTTOM SECTION */}

			<section className="flex flex-col xl:max-w-xs md:w-[80%] mt-4 items-start justify-start">
				<SideBioSubscriptionLatestArt
					params={{
						slug: slug,
					}}
				/>
			</section>
		</main>
	);
}
