import Head from 'next/head';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import Image from 'next/image';

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
			<section className="relative z-0 flex flex-col items-center justify-center w-full bg-kiyomizudearPath bg-cover bg-center py-10">
				<div className="absolute inset-0 z-0 bg-gray-100 opacity-80"></div>
				<div className="z-20 w-full max-w-5xl px-4 md:px-8">
					<div className="mt-5 border-y-2 border-red-600 p-2">
						<h1 className="flex text-center md:p-2 text-4xl md:text-5xl font-ubuntu font-bold text-black">
							Book a Kyoto Walking Tour with Romancing Japan
						</h1>
					</div>

					<div className="flex flex-col md:flex-row items-center bg-white bg-opacity-80 p-4 my-10 md:my-15 shadow-xl shadow-slate-500">
						<div className="border-2 border-secondary drop-shadow-lg shadow-md shadow-slate-500">
							<Image
								src="/images/james-profile.jpg"
								width={250}
								height={500}
								alt="James Saunders-Wyndham"
								className="w-48 h-60 md:w-96 md:h-60 object-cover"
								loading="lazy"
							/>
						</div>
						<div className="flex flex-col">
							<div className="my-5 md:my-5 md:mx-10">
								<div className="mb-8">
									<h2 className="mb-2 text-3xl md:text-3xl font-extrabold font-montserrat text-primary">
										Take a Tour with a Trusted Kyoto Local
									</h2>
									<div className="bg-slate-700 rounded-md drop-shadow-md shadow-md shadow-slate-400">
										<h3 className="my-3 py-1 px-3 text-xl md:text-2xl font-bold text-white">
											Join James, a long-time resident of
											Kyoto
										</h3>
									</div>
								</div>

								<div className="border-l-2 border-secondary pl-6">
									<p className="text-lg md:text-xl lg:text-2xl text-left text-black font-roboto_condensed">
										I'm the founder and content creator of
										Romancing Japan. I've lived in Kyoto for
										over 20 years and I want to share that
										people who come to visit this wonderful
										city.
									</p>
								</div>
								<div>
									<p className="mt-4 text-lg md:text-xl lg:text-2xl text-left text-slate-700 font-ubuntu">
										Come and join me for an unforgettable
										guided tour around the historic and
										scenic locations of Kyoto.
									</p>
								</div>
							</div>
							<div className="flex justify-end m-7">
								<p className="text-xl text-orange-600 font-bold">
									Book your tour with James, now!
								</p>
							</div>
						</div>
					</div>

					<div className="bg-slate-600 bg-opacity-10 p-3 shadow-xl shadow-slate-500">
						<div className="grid grid-rows-1 smx:grid-cols-2 md:grid-cols-3 gap-6">
							<Image
								src="/images/kenninji.jpg"
								width={2480}
								height={1654}
								alt="Kenninji Temple in Kyoto"
								className="border-2 border-black"
								loading="lazy"
							/>
							<Image
								src="/images/kiyomizu-temple.jpg"
								width={2000}
								height={1333}
								alt="Kiyomizu Temple in Kyoto"
								className="border-2 border-black"
								loading="lazy"
							/>
							<Image
								src="/images/fushimi-innari-taisha-gates-1.jpg"
								width={2000}
								height={1333}
								alt="Fushimi Inari Taisha Shrine in Kyoto"
								className="border-2 border-black"
								loading="lazy"
							/>
						</div>
						<div className="flex flex-col md:flex-row items-center px-2 mt-5 bg-blue-700 bg-opacity-50">
							<div className="my-4 p-2">
								<h2 className="text-4xl font-bold text-white">
									Tour Description
								</h2>
							</div>
							<div className="border-l-2 border-white pl-6 m-8">
								<p className="text-lg font-semibold">
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Accusantium expedita,
									labore recusandae nam explicabo tempore
									dolor ut. Porro excepturi rem qui, maxime
									distinctio, inventore nisi voluptatibus
									facere nesciunt dicta quaerat.
								</p>
							</div>
						</div>
					</div>

					<div className="relative bg-white shadow-lg rounded-md p-6 my-20">
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
