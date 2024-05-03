import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import SignupCardLong from '../components/SignupCardLong';

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
	return (
		<>
			<section className="relative h-full flex flex-col items-center justify-center overflow-x-hidden">
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
					<div className="my-20 w-full flex flex-col items-center justify-center align-middle">
						{/* MAIN CONTENT */}
						<div className="md:my-12 mx-8 mt-12 text-center">
							<h2 className="flex flex-col text-2xl md:text-3xl lg:text-4xl font-extrabold font-catTags">
								<span className="text-4xl md:text-5xl -mt-4">
									Welcome to
								</span>
								<figure className="h-fit py-2">
									<Image
										src="/about/opengraph-image3.png"
										alt="logo"
										width={350}
										height={75}
										className="-mt-20 h-48"
										loading="lazy"
									/>
								</figure>
							</h2>
						</div>
						{/* Introduction */}
						<div className="-mt-12 flex flex-col items-center justify-center w-[90%] md:w-[95%] xl:max-w-5xl">
							<div className="grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
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
									<h2 className="text-center md:text-right pr-4 pb-6 text-xl lg:text-2xl font-extrabold font-roboto_condensed text-red-800">
										What is the Goal of Romancing Japan?
									</h2>
									<p className="text-lg px-2 md:text-xl lg:text-2xl font-heading text-justify">
										The goal of this website is to provide
										readers with insight and information
										about culture, lifestyle, and travel
										that will interest those who either wish
										to travel or simply want to learn more
										about the country. Japan&apos;s culture
										has piqued the interest and attention of
										people all over the world by
										distinguishing itself as a distinct
										cultural identity. Coming to Japan can
										provide many surprises as a unique
										culture, which can often result in
										culture shock. Gaining an understanding
										of life in Japan, whether you are
										preparing for travel or studying the
										language, is a positive move. This
										website should serve as a resource for
										all things Japanese, including travel,
										lifestyle, pop culture, and local
										experiences.
									</p>
								</div>
							</div>
						</div>

						{/* SUBSCRIPTION CARD */}
						<article className="w-screen my-12 flex items-center justify-center">
							<SignupCardLong />
						</article>

						{/* Introducing James */}
						<div className="flex flex-col items-center justify-center px-3 w-[90%] md:w-[95%] xl:max-w-5xl">
							<div className="grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
								<div className="pt-4 md:col-span-2">
									<h2 className="text-center md:text-left pr-4 pb-6 text-xl lg:text-2xl font-extrabold font-roboto_condensed text-red-800">
										Introducing the Creator of Romancing
										Japan
									</h2>
									<p>
										My name is James Saunders-Wyndham, and
										I'm an Australian living in Kyoto,
										Japan. I have been living in Japan
										almost half my life. I started out as a
										high school exchange student in Aichi
										Prefecture, and I grew up to live in
										Japan permanently. For a long time I had
										been toying with the idea of creating
										online content to inform others about
										the country I&apos;ve come to call home.
										In 2021 I began playing with the idea of
										learning to build websites. I learned to
										code and discovered I loved programming.
										Since I love living in Japan, I decided
										to merge my two interests, and thus
										Romancing Japan was born. This website
										has evolved into a passion project. I
										have poured a lot of effort and time
										into building this site. I hope that you
										enjoy our website and the articles we
										post about all things Japan.
									</p>
								</div>
								<div className="flex justify-center mx-2 my-4 md:my-6 md:col-span-1">
									<Image
										src="/about/opengraph-image.jpg"
										alt="James SW Profile Image - Romancing Japan"
										width={500}
										height={500}
										className="object-cover mx-14 shadow-xl shadow-slate-500"
										priority={true}
									/>
								</div>
							</div>
						</div>

						{/* PART THREE CONTENT */}
						<div className="flex flex-col items-center justify-center w-[90%] md:w-[95%] xl:max-w-5xl mt-8 md:mt-20">
							<div className="flex flex-col-reverse md:grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
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
									<h2 className="text-center md:text-right pr-4 pb-6 text-xl lg:text-2xl font-extrabold font-roboto_condensed text-red-800">
										Content You Can Expect From Romancing
										Japan
									</h2>
									<p className="text-lg px-2 md:text-xl lg:text-2xl font-heading text-justify">
										At Romancing Japan, we provide a curated
										selection of content designed to enhance
										your understanding and appreciation of
										Japan. We aim for 90% of all images are
										taken by us to provide the best original
										content. Dive into comprehensive guides
										on moving and living in Japan, which
										cover everything from visa processes to
										daily cultural nuances. Explore our
										travel sections that uncover both famed
										and hidden gems of Japan, offering
										unique insights for every adventurer.
										Additionally, our culture articles delve
										deep into traditional and modern
										Japanese lifestyles, exploring topics
										from the significance of manga to the
										complexities of social interactions
										through concepts like honne and tatemae.
										Each piece is crafted to enrich your
										knowledge and inspire your journey into
										Japan's heart.
									</p>
								</div>
							</div>
						</div>

						{/* PART THREE CONTENT */}
						<div className="flex flex-col items-center justify-center my-12 w-[90%] md:w-[95%] xl:max-w-5xl">
							<div className="mt-1 md:mt-4 mx-4">
								<h2 className="mb-8 text-xl text-center md:text-left lg:text-2xl font-extrabold font-roboto_condensed text-red-800">
									Join Our Journey
								</h2>
							</div>
							<div className="py-2">
								<p className="text-lg px-2 md:text-xl lg:text-2xl font-heading text-justify">
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
					</div>
				</article>
			</section>
		</>
	);
}
