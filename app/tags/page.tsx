import { getTags } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/urlFor';
import Head from 'next/head';

export const metadata = {
	title: 'Romancing Japan Article Tags',
	description:
		'This page is a collection of all article tags that identified the main themes related to articles published by Romancing Japan.',
	alternates: {
		canonical: `https://www.romancing-japan.com/tags/`,
	},
	openGraph: {
		title: 'Romancing Japan Article Tags',
		description:
			'This page is a collection of all article tags that identified the main themes related to articles published by Romancing Japan.',
		type: 'website',
		siteName: 'Romancing Japan',
		images: { url: `/opengraph-image.jpg`, width: 600, height: 400 },
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://twitter.com/RomancingJapan',
		title: 'Romancing Japan - Travel, Lifestyle, Culture',
		description:
			'This page is a collection of all article tags that identified the main themes related to articles published by Romancing Japan.',
		creator: '@RomancingJapan',
		images: { url: `opengraph-image.jpg`, width: 600, height: 400 },
	},
};

export default async function TagList() {
	const tags = await getTags();

	const tagsListJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Article Tags of Romancing Japan',
		description:
			'This page is a collection of all article tags that identify the main themes related to articles published by Romancing Japan.',
		url: 'https://www.romancing-japan.com/tags/',
	};

	return (
		<>
			<Head>
				<script type="application/ld+json">
					{JSON.stringify(tagsListJsonLd)}
				</script>

				<meta
					name="google-adsense-account"
					content="ca-pub-1847015508086202"
				/>

				{/* Google Ads Sense */}
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1847015508086202"
					crossorigin="anonymous"
				></script>
			</Head>
			<section className="z-0 flex flex-col items-center justify-center overflow-hidden">
				{/* Top Image */}
				<figure className="mt-16 lg:mt-8 xl:mt-0">
					<Image
						src="/tags/opengraph-image.jpg"
						width={3840}
						height={1368}
						alt="Osaka Umeda Traffic"
						priority={true}
					/>
				</figure>
				<article className="absolute top-24 w-screen bg-slate-700 p-4 flex justify-center text-white text-3xl font-bold">
					<h1 className="m-1">List of Article</h1>
					<h2 className="m-1">Tags</h2>
				</article>
				<article className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 -mt-3 xl:-mt-6">
					<>
						{tags.map(async (tag: any) => (
							<Link key={tag._id} href={`/tags/${tag.slug}`}>
								<div className="w-80 group relative items-center justify-center overflow-hidden rounded-lg shadow-xl shadow-slate-600 mb-4 border-2 border-red-800 md:mb-8 hover:border-0">
									<figure className="h-56 w-80">
										<Image
											src={urlFor(tag.image)}
											width={220}
											height={220}
											alt={tag.image}
											priority={true}
											className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700"
										/>
									</figure>
									<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
									<div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
										<h2 className="font-krona_one text-2xl text-white mb-5">
											{tag.title}
										</h2>
										<p className="mb-2 text-xl italic text-white drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
											{tag.description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</>
				</article>
			</section>
		</>
	);
}
