import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { Metadata } from 'next';

import { AboutUs } from '@/typings';
import { getAboutPage } from '@/sanity/sanity-utils';

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

	return (
		<section className="container mx-auto px-4 py-10">
			{/* Page Title */}
			<h1 className="text-4xl font-bold mb-8 text-center">
				{aboutUsData.title}
			</h1>

			{/* Dynamic Content Layout */}
			<div className="flex flex-col gap-16">
				{aboutUsData.content.map((block, index) => (
					<div
						key={block._key}
						className={`flex flex-col md:flex-row items-center ${
							index % 2 === 0 ? 'md:flex-row-reverse' : ''
						} gap-10`}
					>
						{/* Text Section */}
						<div className="flex-1 prose lg:prose-lg text-gray-800">
							<PortableText value={[block]} />
						</div>

						{/* Image Section */}
						{aboutUsData.images[index] && (
							<div className="flex-1">
								<Image
									src={aboutUsData.images[index].url}
									alt={
										aboutUsData.images[index].altText ||
										'About Us Image'
									}
									width={600}
									height={400}
									className="rounded-lg shadow-lg"
								/>
								<figcaption className="text-center italic mt-2 text-sm text-gray-600">
									{aboutUsData.images[index].caption}
								</figcaption>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
