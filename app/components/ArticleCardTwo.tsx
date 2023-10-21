import Image from 'next/image';
import { getLatestPostTwo } from '@/sanity/sanity-utils';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import PortableTextComp from './PortableTextComponents';

export default async function ArticleCardTwo() {
	const post = await getLatestPostTwo();
	const components = PortableTextComp();
	return (
		<Link key={post._id} href={`/posts/${post.slug}/`}>
			<div className="h-full w-full flex flex-col card rounded-none my-4 hover:shadow-lg md:hover:shadow-xl md:hover:shadow-slate-700  hover:drop-shadow  hover:bg-gray-50 hover:transition-all duration-300 group md:bg-gray-200 md:h-full md:w-full md:my-2 md:ml-0 md:mr-3 md:mb-3 md:card-side md:rounded-md">
				<div className="h-9/12 ml-4 my-4 border-l-4 border-red-700 md:hidden">
					<h2 className="font-heading text-3xl lg:text-4xl p-3 text-black font-bold">
						{post.name}
					</h2>
				</div>
				<figure>
					<Image
						src={(await urlFor(post.image)).url()}
						width={900}
						height={700}
						alt={post.image}
						className="w-full h-full md:rounded-md"
						loading="lazy"
					/>
				</figure>

				{/* Layer between image and text */}
				<div className="md:absolute md:inset-0 md:bg-gradient-to-b md:from-transparent md:via-transparent md:via-25% md:to-base-200 md:to-70% xl:to-80% md:rounded-md"></div>

				{/* Title and article summary */}
				<div className="card-body text-center md:w-full md:absolute md:flex md:p-4 md:bottom-0 md:text-left md:rounded-lg transition-all">
					<div>
						<h2 className="hidden text-4xl font-playfair_display md:flex text-red-900">
							{post.name}
						</h2>
					</div>
					<div className="text-left text-xl md:text-left md:rounded-b-md lg:hidden">
						<PortableText
							value={post.summary}
							onMissingComponent={false}
							components={components}
						/>
					</div>
					{/* SHORT SUMMARY @ 2XL */}
					<div className="hidden lg:text-left text-lg md:text-right lg:flex 2xl:mt-3 3xl:mt-1 3xl:text-lg">
						<PortableText
							value={post.summaryShort}
							onMissingComponent={false}
							components={components}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
}
