import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { Metadata } from 'next';

import { AboutUs } from '@/typings';
import { getAboutPage } from '@/sanity/sanity-utils';
import SignupCardLong from '../components/SignupCardLong';
import PortableTextComp from '../components/PortableTextComponents';

// Generate Metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'About Us - Romancing Japan',
		description:
			'Learn about Romancing Japan, our journey, and our commitment to sharing authentic Japanese experiences through travel, culture, and lifestyle.',
		openGraph: {
			title: 'About Us - Romancing Japan',
			description:
				'Discover our story and what drives Romancing Japan to showcase the beauty of Japan.',
			url: 'https://www.romancing-japan.com/about',
			type: 'website',
			images: [
				{
					url: 'https://www.romancing-japan.com/static/og-image.jpg',
					width: 1200,
					height: 630,
					alt: 'About Us - Romancing Japan',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@RomancingJapan',
			title: 'About Us - Romancing Japan',
			description:
				'Discover our story and what drives Romancing Japan to showcase the beauty of Japan.',
			images: [
				{
					url: 'https://www.romancing-japan.com/static/og-image.jpg',
					width: 1200,
					height: 630,
					alt: 'About Us - Romancing Japan',
				},
			],
		},
	};
}

export default async function AboutUsPage() {
	// Fetch the data for About Us dynamically
	const aboutUsData: AboutUs = await getAboutPage();

	const component = PortableTextComp();

	return (
		<section className="mx-auto pb-20 w-full flex flex-col items-center justify-center text-center">
			{/* Page Banner */}
			<article className="w-full bg-slate-700 py-4 flex items-center justify-center text-white text-3xl font-bold">
				<h1 className="flex flex-row">
					<span className="hidden lg:flex mr-2">
						Romancing Japan |{' '}
					</span>

					<span className="text-white lg:text-red-500">About Us</span>
				</h1>
			</article>

			{/* Part One */}
			<article className="flex flex-col items-center mt-12 justify-center px-3 w-[90%] md:w-[95%] xl:max-w-7xl">
				<div className="flex flex-col items-center justify-center md:grid md:grid-flow-col md:gap-8 md:grid-cols-2">
					{/* Text Section */}
					<div className="flex-1 text-gray-800 mb-6 leading-8 text-md md:text-lg lg:text-xl text-left xl:text-justify">
						<PortableText
							value={aboutUsData.content}
							onMissingComponent={false}
							components={component}
						/>
					</div>

					{/* Image Section */}

					<div className="flex-1">
						<Image
							src={aboutUsData.image.url}
							alt={aboutUsData.image.altText || 'About Us Image'}
							width={1369}
							height={2000}
							className="rounded-sm"
						/>
						<figcaption className="text-center italic mt-2 text-sm text-gray-600">
							{aboutUsData.image.caption}
						</figcaption>
					</div>
				</div>
			</article>

			{/* SUBSCRIPTION CARD */}
			<article className="w-full my-12 flex items-center justify-center">
				<SignupCardLong />
			</article>

			{/* PART TWO */}
			<article className="flex flex-col items-center mt-12 justify-center px-3 w-[90%] md:w-[95%] xl:max-w-7xl">
				<div className="flex flex-col items-center justify-center md:grid md:grid-flow-col md:gap-8 md:grid-cols-2">
					{/* Text Section */}
					<div className="flex-1 text-gray-800 mb-6 leading-8 text-md md:text-lg lg:text-xl text-left xl:text-justify">
						<figure className="max-w-md mx-auto">
							<Image
								src={aboutUsData.image2.url}
								alt={
									aboutUsData.image2.altText ||
									'About Us Image'
								}
								width={1369}
								height={2000}
								className="object-cover rounded-sm"
								priority={true}
							/>
							<figcaption className="text-center italic mt-2 text-sm text-gray-600">
								{aboutUsData.image2.caption}
							</figcaption>
						</figure>
					</div>

					<div className="flex-1 text-gray-800 xl:-mt-44 2xl:-mt-64 mb-6 leading-8 text-md md:text-lg lg:text-xl text-left xl:text-justify">
						<PortableText
							value={aboutUsData.content2}
							onMissingComponent={false}
							components={component}
						/>
					</div>
				</div>
			</article>

			{/* PART THREE CONTENT */}
			<article className="flex flex-col items-center justify-center px-3 w-[90%] md:w-[95%] xl:max-w-7xl">
				<article className="flex flex-col-reverse md:grid md:grid-flow-col md:gap-8 md:grid-cols-3">
					<div className="py-2 mt-3 md:col-span-2 leading-8 text-md md:text-lg lg:text-xl text-left xl:text-justify">
						<PortableText
							value={aboutUsData.content3}
							onMissingComponent={false}
							components={component}
						/>
					</div>

					<figure className="flex flex-col items-center justify-center mx-2 md:mx-0 my-4 md:mt-6 md:col-span-1">
						<Image
							src={aboutUsData.image3.url}
							alt={aboutUsData.image3.altText || 'About Us Image'}
							width={1369}
							height={2000}
							className="object-cover mx-14 shadow-xl shadow-slate-500"
							loading="lazy"
						/>
						<figcaption className="text-center italic mt-2 text-sm text-gray-600">
							{aboutUsData.image3.caption}
						</figcaption>
					</figure>
				</article>
			</article>

			{/* PART FOUR CONTENT */}
			<article className="flex flex-col items-center justify-center px-6 md:w-[95%] xl:max-w-5xl mt-8 md:mt-20">
				<div className="flex flex-col leading-8 text-md md:text-lg lg:text-xl text-left xl:text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
					<PortableText
						value={aboutUsData.content4}
						onMissingComponent={false}
						components={component}
					/>
				</div>
			</article>
		</section>
	);
}
