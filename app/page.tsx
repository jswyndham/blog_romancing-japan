import AkariAndJamesProfileLg from './components/AkariAndJamesProfileLg';
import ArticleCardOne from './components/ArticleCardOne';
import ArticleCardThree from './components/ArticleCardThree';
import ArticleCardTwo from './components/ArticleCardTwo';
import BlogSmallCard from './components/BlogSmallCard';
import Image from 'next/image';
import AkariAndJamesProfileSm from './components/AkariAndJamesProfileSm';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Head from 'next/head';

// Dynamic components imported
const SignupCard = dynamic(() => import('./components/SignupCard'), {
	ssr: false,
});
const SignupCardLong = dynamic(
	() => import('@/app/components/SignupCardLong'),
	{
		ssr: false,
	}
);

export const metadata: Metadata = {
	title: 'Romancing Japan - Travel, Lifestyle, Culture',
	description:
		'Informative articles about Japanese travel, lifestyle, and culture. For people to learn more about travel in Japan or tips on living in Japan.',
	alternates: {
		canonical: `https://www.romancing-japan.com/`,
	},
	openGraph: {
		title: 'Romancing Japan - Travel, Lifestyle, Culture',
		description:
			'Informative articles about Japanese travel, lifestyle, and culture. For people to learn more about travel in Japan or tips on living in Japan.',
		type: 'website',
		siteName: 'Romancing Japan',
		url: 'https://www.romancing-japan.com/',
		images: { url: `opengraph-image.jpg`, width: 600, height: 400 },
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://twitter.com/RomancingJapan',
		title: 'Romancing Japan - Travel, Lifestyle, Culture',
		description:
			'Informative Articles about Japanese travel, lifestyle, and culture. For those who wish to learn more about Japan and its culture.',
		creator: '@RomancingJapan',
		images: { url: `opengraph-image.jpg`, width: 600, height: 400 },
	},
};

export default async function Home() {
	const homePageJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Romancing Japan',
		url: 'https://www.romancing-japan.com/',
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://www.romancing-japan.com/search?query={search_term_string}',
			'query-input': 'required name=search_term_string',
		},
		description:
			'Informative Articles about Japanese travel, lifestyle, and culture. For those who wish to learn more about Japan and its culture.',
		publisher: {
			'@type': 'Organization',
			name: 'Romancing Japan',
			logo: {
				'@type': 'ImageObject',
				url: 'https://www.romancing-japan.com/logo.png',
			},
		},
	};

	// JSON-LD stringified
	const jsonLdString = JSON.stringify(homePageJsonLd);

	return (
		<article className="flex flex-col items-center justify-center overflow-hidden">
			<>
				<Head>
					<title>Romancing Japan - Travel, Lifestyle, Culture</title>
					<meta
						name="description"
						content="Informative Articles about Japanese travel, lifestyle, and culture. For those who wish to learn more about Japan and its culture."
					/>

					{/* FaceBook verification */}
					<meta
						name="facebook-domain-verification"
						content="j3hoqq9m2dclmb7l7yvtcu08ptvlsn"
					/>

					{/* Google Ad Sense */}
					<meta
						name="google-adsense-account"
						content="ca-pub-1847015508086202"
					/>

					<link
						rel="canonical"
						href="https://www.romancing-japan.com/"
					/>

					{/* AdSense script */}
					<script
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1847015508086202"
						crossOrigin="anonymous"
					></script>

					{/* Ad blocking recovery script */}
					{/* <script async src="https://fundingchoicesmessages.google.com/i/pub-1847015508086202?ers=1" nonce="5IbBrxSgQg_4lIm8beuMHw"></script><script nonce="5IbBrxSgQg_4lIm8beuMHw">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script> */}
				</Head>
			</>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: jsonLdString }}
			/>

			{/* Homepage pic */}
			<figure>
				<Image
					src="/opengraph-image.jpg"
					width={3840}
					height={1368}
					alt="Mt.Fuji Black and White"
					priority={true}
				/>
			</figure>

			<div className="h-full w-full aspect-auto flex flex-col justify-center align-middle drop-shadow-2xl md:w-[80%] lg:w-[97%] xl:max-w-screen-xl">
				{/* Latest banner */}
				<div className="absolute top-2 w-full bg-slate-700 p-4 flex justify-center text-white text-3xl font-bold">
					<h1 className="flex flex-row">
						<span className="hidden lg:flex mr-2">
							Romancing Japan |{' '}
						</span>
						Latest Articles
					</h1>
				</div>

				{/* Article post components */}

				<div className="mt-20 flex flex-col items-center justify-center">
					<div className="h-full w-full aspect-auto md:grid md:grid-rows-5 md:grid-cols-3 md:gap-8 md:mb-8 md:mt-4 lg:grid-rows-3 lg:grid-cols-4">
						{/* ARTICLE ONE */}
						<div className="w-full h-full aspect-auto my-3 md:-mt-1 md:mx-0 md:row-span-1 md:col-span-6 lg:row-span-1 lg:col-span-3 lg:mt-0">
							<ArticleCardOne />
						</div>

						<div className="hidden lg:flex lg:mt-4 lg:row-span-2 lg:col-span-1">
							<SignupCard />
						</div>

						<div className="w-screen my-6 flex items-center justify-center md:h-56 md:col-span-3 md:-ml-20 smd:-ml-24 md:mx-4 md:-mt-1 lg:hidden">
							<SignupCardLong />
						</div>

						{/* JAMES & AKARI PROFILE @ LG */}
						<div className="hidden h-full w-full aspect-square lg:flex lg:items-center lg:h-[80%] lg:mt-28 xl:mt-12 xl:h-[90%] xl:border-l-4 xl:border-r-4 border-white lg:row-span-2 lg:col-span-1 lg:pt-5">
							<AkariAndJamesProfileLg />
						</div>

						{/* ARTICLE TWO */}
						<div className="md:-mt-64 smd:-mt-60 md:row-span-1 md:col-span-6 lg:mt-0 lg:row-span-1 lg:col-span-2">
							<ArticleCardTwo />
						</div>

						{/* ARTICLE THREE */}
						<div className="md:row-span-1 md:col-span-6 xl:h-[80%] lg:row-span-1 lg:col-span-3 lg:-mt-2 2xl:mt-0">
							<ArticleCardThree />
						</div>

						{/* JAMES & AKARI PROFILE @ SM */}
						<div className="md:-mt-12 md:mb-2 lg:hidden border-white md:row-span-1 md:col-span-6 lg:-mt-2">
							<AkariAndJamesProfileSm />
						</div>
					</div>
				</div>

				{/* DIVIDE */}
				<div className="divider md:-mt-16 lg:-mt-16 2xl:-mt-24"></div>

				<div className="flex flex-col space-y-6 mx-4 mb-6 md:mx-0 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 2xl:grid-cols-3">
					<BlogSmallCard />
				</div>
			</div>
		</article>
	);
}
