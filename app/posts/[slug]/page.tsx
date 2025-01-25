import { createClient, groq } from 'next-sanity';
import Image from 'next/image';
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
import LatestArticlesMini from '@/app/components/LatestArticlesMini';
import CategoriesAndTags from '@/app/components/CategoriesAndTags';
import RedBarDecoration from '@/app/components/RedBarDecoration';
import AdSenseUnit from '@/app/components/AdSenseUnit';
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
import FaqSchema from '@/app/components/FaqSchema';
import AffiliateBannerSidebar from '@/app/components/AffiliateBannerSidebar';
import AffiliateMiddleBanner from '@/app/components/AffiliateBannerMiddle';
import AffiliateBannersMobile from '@/app/components/AffiliateBannerMobile';
import PopularArticlesMobile from '@/app/components/PopularArticlesMobile';

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
		content2[]{
			...,
			_type == "image" => {
				...,
				asset->
			}
		},
		faqs[]->{
			_id,
			question,
			answer
		},
		affiliateBanners[]->{
			_id,
			title,
			description,
			"imageUrl": imageUrl,
			altText,
			link,
			trackingPixel
		},
		affiliateMiddleBanners[]->{
			_id,
			title,
			description,
			"imageUrl": imageUrl,
			altText,
			link,
			trackingPixel
		},
		 affiliateMobileBanners[]->{
  _id,
  title,
  description,
  "imageUrl": imageUrl,
  altText,
  link,
	trackingPixel
},
		"author": author[0]->,
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
			images: { url: urlFor(post.image), width: 600, height: 400 },
			siteName: 'Romancing Japan',
			url: `https://www.romancing-japan.com/posts/${post.slug}/`,
		},
		twitter: {
			card: 'summary_large_image',
			site: 'https://twitter.com/RomancingJapan',
			title: post.pageName,
			description: post.description,
			creator: '@RomancingJapan',
			images: { url: urlFor(post.image), width: 600, height: 400 },
		},
		robots: {
			index: true,
			follow: true,
		},
		other: {
			'google-adsense-account': 'ca-pub-1847015508086202',
		},
	};
}

export const revalidate = 0; // Time interval

export default async function postArticle({
	params: { slug },
	searchParams,
}: {
	params: { slug: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
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

	// Parse headings for both content sections with safeguards
	const outline1 = Array.isArray(post.content)
		? parseOutline(post.content).map((item) => ({
				...item,
				_key: `${item._key}`,
			}))
		: [];

	const outline2 = Array.isArray(post.content2)
		? parseOutline(post.content2).map((item) => ({
				...item,
				_key: `${item._key}`,
			}))
		: [];

	// Merge the outlines
	const combinedOutline = [...outline1, ...outline2];

	const component = PortableTextComp();

	// Rich Results Test
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.name,
		image: urlFor(post.image),
		author: post.author.map((author: any) => ({
			'@type': 'Person',
			name: author.name,
		})),
		datePublished: post._createdAt,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://www.romancing-japan.com${postUrl}`,
		},
		url: `https://www.romancing-japan.com${postUrl}`,
	};

	return (
		<>
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
							src={urlFor(post.image)}
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

					{/* The title section */}
					<div className="absolute w-full md:w-5/6 max-w-6xl h-80 md:h-96 left-0 md:left-10 2xl:left-44 3xl:left-80 4xl:left-96 5xl:left-1/4 smx:-bottom-48 xl:-bottom-44 bg-black bg-opacity-80 xl:bg-opacity-70 md:rounded-md">
						<div>
							{/* TITLE */}
							<h1 className="absolute mt-2 ml-5 p-2 text-3xl smx:text-4xl md:text-6xl 2xl:text-7xl font-heading font-bold text-white">
								{post.name}
							</h1>
						</div>

						<div>
							{/* AUTHOR */}
							{post.author.map((author: any, index: any) => (
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

				<article className="mt-40 w-full md:w-[95%] 2xl:w-[85%] 3xl:w-[60%] flex flex-col xl:flex-row justify-center">
					<div className="flex flex-col items-center w-full">
						<div className="flex justify-center xl:mt-14">
							<TableOfContents outline={combinedOutline} />
						</div>

						{/* Affiliate Banner for Mobile view */}
						<AffiliateBannersMobile
							affiliateMobileBanners={
								post.affiliateMobileBanners || []
							}
						/>

						{/* ARTICLE BODY 1 */}
						<div className="container mx-auto">
							<div className="flex flex-col justify-center items-center whitespace-pre-line md:flex-row">
								<div className="w-11/12 px-1 py-4 mt-2 font-sans text-left text-md md:text-lg whitespace-pre-line leading-9 md:leading-10">
									<PortableText
										value={post.content}
										onMissingComponent={false}
										components={component}
									/>
								</div>
							</div>
						</div>

						<AffiliateMiddleBanner
							affiliateMiddleBanners={
								post.affiliateMiddleBanners || []
							}
						/>

						<div className="flex flex-col md:flex-row text-center xl:hidden">
							<h3 className="pb-1 mr-4 text-xl md:text-3xl font-playfair_display font-bold">
								Popular Articles
							</h3>
							<Image
								src={'/images/logo-only-small.png'}
								alt={'Romancing Japan logo'}
								title={'Romancing Japan logo'}
								width={1600}
								height={321}
								priority={true}
								className="h-7 w-40 md:h-10 md:w-56 -ml-2 md:ml-0"
							/>
						</div>
						<div className="grid grid-cols-3 xl:hidden my-4">
							<PopularArticlesMobile />
						</div>

						{/* ARTICLE BODY 2 */}
						<div className="container mx-auto">
							<div className="flex flex-col justify-center items-center whitespace-pre-line md:flex-row">
								<div className="w-11/12 px-1 py-4 mt-2 font-sans text-left text-md md:text-lg whitespace-pre-line leading-9 md:leading-10">
									<PortableText
										value={post.content2}
										components={component}
									/>
								</div>
							</div>
						</div>

						{/* Affiliate Banner  */}
						<AffiliateMiddleBanner
							affiliateMiddleBanners={
								post.affiliateMiddleBanners || []
							}
						/>

						{/* AdSense Ad - Mid Article */}
						<AdSenseUnit
							adClient="ca-pub-1234567890"
							adSlot="1234567890"
						/>

						{/* FAQ SECTION */}
						<div>
							{/* Inject JSON-LD for FAQ Schema */}
							<FaqSchema faqs={post?.faqs || []} />

							<div className="mx-12 mt-6 mb-16">
								<h2 className="text-3xl xl:text-3xl pt-3 pb-2 text-red-800 font-bold">
									FAQs
								</h2>
								{post?.faqs && post.faqs.length > 0 ? (
									post.faqs.map((faq: any, index: any) => (
										<div
											key={faq._id}
											className="faq-item my-4"
										>
											<h3 className="text-lg xl:text-xl font-bold italic py-1">
												{faq.question}
											</h3>
											<p className="font-heading text-left text-md xl:text-lg whitespace-pre-line leading-9 md:leading-10">
												{faq.answer}
											</p>
										</div>
									))
								) : (
									<p>No FAQs available for this post.</p>
								)}
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
						<div className="w-screen flex items-center justify-center xl:hidden">
							<SignupCardLong />
						</div>

						{/* BOTTOM BORDER */}
						<RedBarDecoration />
					</div>

					{/* SIDE / BOTTOM SECTION */}
					<article className="flex flex-col w-full xl:w-96">
						<article className="flex flex-col xl:max-w-xs mx-3 -mt-40 items-start justify-start xl:sticky xl:top-0">
							<SideBioSubscriptionLatestArt
								params={{
									slug: slug,
								}}
							/>
						</article>
						<AffiliateBannerSidebar
							affiliateBanners={post.affiliateBanners || []}
						/>
						{/* Affiliate Banner for Mobile view */}
						<AffiliateBannersMobile
							affiliateMobileBanners={
								post.affiliateMobileBanners || []
							}
						/>
						{/* SIDE MENU LATEST ARTICLES */}
						<article className="flex flex-col px-4 xl:border-l-4 xl:border-r-4 border-white">
							<div className="flex flex-col text-center items-center ml-6 xl:mt-4">
								<h3 className="pb-1 text-3xl font-playfair_display font-bold">
									Popular Articles
								</h3>
								<Image
									src={'/images/logo-only-small.png'}
									alt={'Romancing Japan logo'}
									title={'Romancing Japan logo'}
									width={270}
									height={30}
									priority={true}
								/>
							</div>
							<div className="grid grid-cols-3 grid-row-1  gap-2 xl:flex xl:flex-col my-4">
								<LatestArticlesMini />
							</div>
							<AffiliateBannerSidebar
								affiliateBanners={post.affiliateBanners || []}
							/>
						</article>
					</article>
				</article>
			</section>
		</>
	);
}
