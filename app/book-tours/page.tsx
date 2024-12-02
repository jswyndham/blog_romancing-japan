import Head from 'next/head';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const SignupCardLong = dynamic(
	() => import('@/app/components/SignupCardLong'),
	{
		ssr: false,
	}
);

// ******** Page Metadata *****************
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Book a Walking Tour with Romancing Japan',
		description:
			'Easily book a guided walking tour around Kyoto with Romancing Japan.',
		alternates: {
			canonical: 'https://www.romancing-japan.com/book-tours/',
		},
		openGraph: {
			title: 'Book a Walking Tour with Romancing Japan',
			description:
				'Easily book a guided walking tour around Kyoto with Romancing Japan.',
			type: 'website',
			siteName: 'Romancing Japan',
			url: 'https://www.romancing-japan.com/book-tours/',
		},
		twitter: {
			card: 'summary_large_image',
			site: 'https://twitter.com/RomancingJapan',
			title: 'Book a Walking Tour with Romancing Japan',
			description:
				'Easily book a guided walking tour around Kyoto with Romancing Japan.',
			creator: '@RomancingJapan',
		},
	};
}

export default function BookTourPage() {
	return (
		<>
			<Head>
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://www.romancing-japan.com/book-tours/"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Script src="/iframe-resize.js" strategy="lazyOnload" />
			<section className="flex flex-col items-center justify-center w-full bg-gray-100 py-10">
				<div className="w-full max-w-5xl px-4 md:px-8">
					<h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
						Book a Walking Tour
					</h1>
					<p className="text-lg md:text-xl text-center mb-12">
						Join James Saunders-Wyndham, the founder of Romancing
						Japan, for an unforgettable guided tour around the
						historic and scenic locations of Kyoto. Book your slot
						now!
					</p>
					<div className="relative bg-white shadow-lg rounded-md p-6">
						{/* Embed the Appointy Widget */}
						<iframe
							id="appointy-iframe"
							className="iframe-widget"
							src="https://booking.appointy.com/kyotojim?isgadget=1&autoheight=1"
							title="Appointy Booking Widget"
						></iframe>
					</div>
				</div>
				<div className="mt-10">
					<SignupCardLong />
				</div>
			</section>
		</>
	);
}
