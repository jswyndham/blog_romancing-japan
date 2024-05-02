import Image from 'next/image';
import { getLatestPostOne } from '@/sanity/sanity-utils';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import PortableTextComp from './PortableTextComponents';

export default async function ArticleCardOne() {
	const post = await getLatestPostOne();
	const components = PortableTextComp();
	return (
		<Link key={post._id} href={`/posts/${post.slug}/`}>
			{/* Card with responsive sizes */}
			<div className="flex flex-col card rounded-none h-fit w-fit mx-2 my-1 hover:shadow-lg md:hover:shadow-xl md:hover:shadow-slate-700 hover:drop-shadow hover:bg-gray-50 hover:transition-all duration-300 md:h-[100%] md:w-[100%] md:rounded-md md:bg-gray-200 md:flex-row md:my-4 md:mx-0 lg:card-side 2xl:h-full group">
				{/* Title only visible in mobile/small window */}
				<div className="h-9/12 ml-2 my-4 border-l-4 border-red-700 md:hidden">
					<h2 className="font-heading text-4xl p-3 text-black font-bold md:hidden">
						{post.name}
					</h2>
				</div>

				{/* Display image */}
				<figure>
					<Image
						src={(await urlFor(post.image)).url()}
						width={900}
						height={700}
						alt={post.name || 'Romancing Japan'}
						title={post.caption || 'Romancing Japan'}
						className="w-full h-full md:rounded-md"
						loading="lazy"
					/>
				</figure>

				{/* Layer between image and text */}
				<div className="md:absolute md:inset-0 md:bg-gradient-to-r md:from-transparent md:via-transparent md:via-15% smd:via-30% md:to-base-200 md:to-60% xl:to-60% md:rounded-md"></div>

				{/* Title and article summary */}
				<div className="card-body md:w-[52%] lg:w-[50%] xl:w-[43%] md:absolute md:flex md:flex-col md:justify-between md:p-4 md:right-0 text-center transition-all">
					{/* TITLE @ MD */}
					<div>
						<h2 className="hidden md:block pb-1 text-3xl font-playfair_display top-0 md:mt-1 lg:mt-2 lg:text-4xl 2xl:mt-4 2xl:pr-1 text-right text-red-800">
							{post.name}
						</h2>
					</div>

					{/* Text summary field */}
					<div className="text-left text-xl md:text-right md:bottom-0 md:mt-4 md:text-lg lg:mt-8 lg:text-xl 2xl:mb-2">
						<PortableText
							value={post.summary}
							onMissingComponent={false}
							components={components}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
}
