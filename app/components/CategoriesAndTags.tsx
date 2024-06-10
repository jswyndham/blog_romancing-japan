import { createArticle } from '@/sanity/sanity-utils';
import Link from 'next/link';
import React from 'react';

type Props = {
	params: { slug: string };
};

async function CategoriesAndTags({ params: { slug } }: Props) {
	const post = await createArticle({ params: { slug } });

	return (
		<div className="w-full ml-4 flex flex-col gap-1 items-start justify-start">
			{/* Categories */}

			<div className="w-full flex flex-row justify-start items-center align-middle h-8 border-t-2 border-b-2 pt-1 xl:pt-0 border-white">
				{post.category.map((category) => (
					<div
						key={category._id}
						className="w-full mx-2 px-2 font-cardHeading text-red-500 text-sm md:text-md xl:text-lg tracking-widest"
					>
						<Link href={`/categories/${category.slug}`}>
							{category.title}
						</Link>
					</div>
				))}
			</div>

			{/* Tags */}
			<div className="w-full flex flex-col justify-start my-1">
				<div className="w-full flex flex-row justify-start align-middle h-8 border-t-2 border-b-2 border-white">
					{post.tag.map((tag) => (
						<div
							key={tag._id}
							className="w-full mx-2 pt-1 xl:pt-0 font-catTags text-blue-400 text-sm md:text-md xl:text-lg tracking-widest"
						>
							<Link href={`/tags/${tag.slug}`}>{tag.title}</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default CategoriesAndTags;
