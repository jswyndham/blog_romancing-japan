import Image from 'next/image';

export default function AkariAndJamesProfile() {
	return (
		<div className="flex flex-col items-end justify-end px-4 2xl:items-center 2xl:justify-center">
			<div className="relative">
				<figure className="absolute w-80 xl:w-64 m-auto -left-3 -mt-16 rounded-xl">
					<Image
						src="/images/akari-james.jpg"
						alt="Romancing Japan - James & Akari profile"
						width={640}
						height={428}
						className="px-4"
						loading="lazy"
					/>
				</figure>
				<div className="bg-slate-300 w-52 px-3 2xl:px-4 pt-20 pb-4 mx-2 text-justify font-playfair_display whitespace-pre-line">
					<div className="flex justify-center my-2">
						<p className="mb-2 font-caveat text-2xl 2xl:text-3xl">
							James and Akari Saunders-Wyndham
						</p>
					</div>
					<div>
						<p className="text-lg text-left font-sans">
							Hi everyone! I&apos;m James and this is my amazing
							wife, Akari. We live in Kyoto, Japan, where we raise
							two beautiful children. Akari is a native to Kyoto
							and has lived here her whole life. I, on the other
							hand, am from Melbourne, Australia. I started coming
							to Japan as a teenager and have over 30 years of
							experience with Japanese culture. We&apos;ve made
							Kyoto our home and together we&apos;ve built the
							Romancing Japan site so we can share our passion for
							Japanese culture, lifestyle, and travel.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
