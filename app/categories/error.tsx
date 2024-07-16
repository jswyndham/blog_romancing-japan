'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const error = () => {
	return (
		<section className="h-full flex justify-center align-middle bg-black">
			{/* background image */}
			<figure className="h-screen ">
				<Image
					src="/images/not-found.jpg"
					width={1024}
					height={1024}
					alt="404 not found"
					priority={true}
					className="w-full h-full object-cover"
				/>
			</figure>

			{/* 404 TEXT */}
			<div className="absolute">
				<div className="text-center my-8 mx-3">
					<h2 className="font-krona_one text-5xl font-bold text-red-800 underline underline-offset-4">
						Error 404
					</h2>
				</div>
				<div className="h-screen flex flex-col justify-center -mt-32">
					<div className="w-72 md:w-96 ml-5 text-center font-bold">
						<h3 className="m-3 text-2xl md:text-3xl text-red-600">
							There was a problem...
						</h3>
						<p className="text-xl md:text-2xl">
							We could not find the page you were looking for.
						</p>
					</div>
					<div className="m-5 text-2xl md:text-3xl flex flex-col justify-center text-center align-middle">
						<p>Click here to go back to</p>
						<p className="ml-2 font-krona_one text-red-900 hover:text-blue-900">
							<Link href="/">Romancing Japan</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default dynamic(() => Promise.resolve(error), { ssr: false });
