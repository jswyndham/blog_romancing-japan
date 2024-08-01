import Image from 'next/image';
import { Metadata } from 'next';
import SignupCardLong from '../components/SignupCardLong';
import Head from 'next/head';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'About Us Page | Romancing Japan',
	description:
		'An explanation about how and why we decided to build this site and write about Japanese travel, lifestyle, and culture.',
	alternates: {
		canonical: `https://www.romancing-japan.com/about/`,
	},
	openGraph: {
		title: 'About Us Page | Romancing Japan',
		description:
			'An explanation about how and why we decided to build this site and write about Japanese travel, lifestyle, and culture.',
		type: 'website',
		siteName: 'Romancing Japan',
		url: 'https://www.romancing-japan.com/about/',
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

export default async function about() {
	const aboutPageJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		name: 'About Us | Romancing Japan',
		description:
			'An explanation about how and why we decided to build this site and write about Japanese travel, lifestyle, and culture.',
		url: 'https://www.romancing-japan.com/about/',
		publisher: {
			'@type': 'Organization',
			name: 'Romancing Japan',
			logo: {
				'@type': 'ImageObject',
				url: 'https://www.romancing-japan.com/logo.jpg',
			},
		},
		image: {
			'@type': 'ImageObject',
			url: 'https://www.romancing-japan.com/opengraph-image.jpg',
			width: 600,
			height: 400,
		},
	};
	return (
		<>
			<Head>
				<title>About Us Page | Romancing Japan</title>
				<meta
					name="description"
					content="An explanation about how and why we decided to build this site and write about Japanese travel, lifestyle, and culture."
				/>
				<link
					rel="canonical"
					href="https://www.romancing-japan.com/about/"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(aboutPageJsonLd),
					}}
				/>
			</Head>
			<section className="relative h-full flex flex-col items-center justify-center overflow-x-hidden">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(aboutPageJsonLd),
					}}
				/>
				{/* Page Banner */}
				<article className="absolute top-0 w-full bg-slate-700 py-4 flex justify-center text-white text-3xl font-bold">
					<h1 className="flex flex-row">
						<span className="hidden lg:flex mr-2">
							Romancing Japan |{' '}
						</span>

						<span className="text-white lg:text-red-500">
							About Us
						</span>
					</h1>
				</article>

				{/* ARTICLE */}
				<article className="">
					<article className="my-20 w-full flex flex-col items-center justify-center align-middle">
						{/* MAIN CONTENT */}

						{/* Introduction */}
						<article className="mt-12 flex flex-col items-center justify-center w-[90%] md:w-[95%] xl:max-w-7xl">
							<article className="grid font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
								<div className="flex justify-center mx-2 md:mx-0 my-2 md:mt-6 md:col-span-1">
									<Image
										src="/about/opengraph-image2.jpg"
										alt="Miyajima Japan"
										width={500}
										height={500}
										className="object-cover mx-14 shadow-xl shadow-slate-500"
										loading="lazy"
									/>
								</div>
								<div className="py-2 mt-3 md:col-span-2">
									<h2 className="text-center md:text-right pr-4 pb-6 text-3xl lg:text-4xl font-extrabold font-roboto_condensed text-red-800">
										What is the Goal of Romancing Japan?
									</h2>
									<p className="text-2xl px-2 font-heading text-justify pb-8">
										The goal of this website is to provide
										readers with insight and information
										about culture, lifestyle, and travel
										that will interest those who either wish
										to travel or simply want to learn more
										about the country.
									</p>
									<p className="text-2xl px-2 font-heading text-justify pb-8">
										Japan&apos;s culture has piqued the
										interest and attention of people all
										over the world by distinguishing itself
										as a distinct cultural identity. Coming
										to Japan can provide many surprises as a
										unique culture, which can often result
										in culture shock. Gaining an
										understanding of life in Japan, whether
										you are preparing for travel or studying
										the language, is a positive move.
									</p>
									<p className="text-2xl px-2 font-heading text-justify">
										This website should serve as a resource
										for all things Japanese, including
										travel, lifestyle, pop culture, and
										local experiences.
									</p>
								</div>
							</article>
						</article>

						{/* SUBSCRIPTION CARD */}
						<article className="w-full my-12 flex items-center justify-center">
							<SignupCardLong />
						</article>

						{/* Introducing James */}
						<article className="flex flex-col items-center justify-center px-3 w-[90%] md:w-[95%] xl:max-w-7xl">
							<article className="grid font-heading text-justify lg:grid-flow-col lg:gap-8 lg:grid-cols-6">
								<div className="pt-4 lg:col-span-3">
									<h2 className="text-center md:text-left pr-4 pb-6 text-3xl lg:text-4xl font-extrabold font-roboto_condensed text-red-800">
										Introducing the Creator of Romancing
										Japan
									</h2>
									<p className="text-2xl px-2 font-heading text-justify">
										I&apos;ve lived in Japan for over 30
										years and created Romancing Japan to
										share my experiences. Originally from
										Australia, I&apos;ve taught in Japanese
										schools for more than ten years. During
										that time I became interest in
										technology use in Japanese education,
										which inspired me to write an academic
										paper on the topic. During this time,
										I've seen firsthand how modern tools can
										enhance education and make learning more
										engaging for students.
									</p>
									<p className="text-2xl px-2 font-heading text-justify my-6">
										I&apos;m a full-stack web developer,
										which came from a deep interest in
										technology. Because of this interest, I
										have also done research on{' '}
										<Link
											href="https://www.castledown.com/articles/JALTCALL_17_3_427.pdf"
											className="text-blue-600 hover:text-blue-800"
										>
											how computer use is percieved in
											Japanese tertiary education
										</Link>
										. My work has been published in academic
										journals. I have two master&apos;s
										degrees from Macquarie University in
										Australia, one in Research and the other
										in Applied Linguistics and TESOL.
									</p>

									<p className="text-2xl px-2 font-heading text-justify pb-6">
										Through my travels and experiences, I
										share what life in Japan is really like,
										from understanding housing to finding
										hidden cultural spots in the Kansai
										area. Whether you're interested in
										exploring Japan's beautiful cities or
										learning more about daily life here, my
										goal is to provide helpful and accurate
										information so others can enjoy
										Japan&apos;s amazing culture and
										lifestyle. Join me on this journey and
										discover the wonders of Japan!
									</p>
									<p className="text-2xl px-2 font-heading text-justify">
										Connect with me on{' '}
										<Link
											href="https://www.linkedin.com/in/james-saunders-wyndham-b6015599/"
											className="text-blue-600 hover:text-blue-800"
										>
											LinkedIn
										</Link>
										, check out my projects on{' '}
										<Link
											href="https://github.com/jswyndham"
											className="text-blue-600 hover:text-blue-800"
										>
											GitHub
										</Link>
										, and join me on this journey to
										discover the wonders of Japan!
									</p>
								</div>
								<div className="w-full flex justify-center  items-center my-4 md:my-6 lg:col-span-3">
									<figure>
										<Image
											src="/about/opengraph-image.jpg"
											alt="James SW Profile Image - Romancing Japan"
											width={500}
											height={500}
											className="object-cover shadow-xl shadow-slate-500"
											priority={true}
										/>
									</figure>
								</div>
							</article>
						</article>

						{/* PART THREE CONTENT */}
						<article className="flex flex-col items-center justify-center w-[90%] md:w-[95%] xl:max-w-5xl mt-8 md:mt-20">
							<article className="flex flex-col-reverse md:grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
								<figure className="flex justify-center mx-2 md:mx-0 my-4 md:mt-6 md:col-span-1">
									<Image
										src="/about/opengraph-image4.jpg"
										alt="Miyajima Japan"
										width={500}
										height={500}
										className="object-cover mx-14 shadow-xl shadow-slate-500"
										loading="lazy"
									/>
								</figure>
								<div className="py-2 mt-3 md:col-span-2">
									<h2 className="text-center md:text-right pr-4 pb-6 text-3xl lg:text-4xl font-extrabold font-roboto_condensed text-red-800">
										Content You Can Expect From Romancing
										Japan
									</h2>
									<p className="px-2 text-2xl font-heading text-justify pb-6">
										At Romancing Japan, we provide a curated
										selection of content designed to enhance
										your understanding and appreciation of
										Japan.
									</p>
									<p className="text-2xl px-2 font-heading text-justify pb-6">
										We aim to provide 90% of all images
										taken by us to provide the best original
										content.{' '}
									</p>
									<p className="text-2xl px-2 font-heading text-justify pb-6">
										Check out our comprehensive guides on
										moving and living in Japan, which cover
										everything from visa processes to daily
										cultural nuances.
									</p>
									<p className="text-2xl px-2 font-heading text-justify pb-6">
										Explore our travel sections that uncover
										both famed and hidden gems of Japan,
										offering unique insights for every
										adventurer.{' '}
									</p>
									<p className="text-2xl px-2 font-heading text-justify pb-6">
										Additionally, our culture articles delve
										deep into traditional and modern
										Japanese lifestyles, exploring topics
										from the significance of manga to the
										complexities of social interactions
										through concepts like Japanese social
										harmony.
									</p>

									<p className="text-2xl px-2 font-heading text-justify">
										Each piece is written with the aim to
										enrich your knowledge and inspire your
										journey into Japan's heart.
									</p>
								</div>
							</article>
						</article>

						{/* PART THREE CONTENT */}
						<div className="flex flex-col items-center justify-center my-12 w-[90%] md:w-[95%] xl:max-w-5xl">
							<div className="mt-1 md:mt-4 mx-4">
								<h2 className="mb-8 text-3xl text-center md:text-left lg:text-4xl font-extrabold font-roboto_condensed text-red-800">
									Join Our Journey
								</h2>
							</div>
							<div className="py-2">
								<p className="text-2xl px-2 font-heading text-justify">
									Ready to explore the depths of Japan?
									Whether you're thinking about moving,
									planning your next trip, or simply
									passionate about Japanese culture, Romancing
									Japan is here for you. Sign up for our
									newsletter to receive the latest articles,
									insider tips, and community updates directly
									to your inbox. Connect with us on social
									media to become part of a vibrant community
									of Japan enthusiasts. Start your journey
									with Romancing Japan today—because
									understanding Japan begins here.
								</p>
							</div>
						</div>
					</article>
				</article>
			</section>
		</>
	);
}
