import { getCategories } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/urlFor';

export const metadata = {
	title: 'Romancing Japan Article Categories',
	description:
		'This page is a collection of all article categories that identified the main themes related to articles published by Romancing Japan.',
	alternates: {
		canonical: `https://www.romancing-japan.com/categories/`,
	},
	openGraph: {
		title: 'Romancing Japan Article Categories',
		description:
			'This page is a collection of all article categories that identified the main themes related to articles published by Romancing Japan.',
		type: 'website',
		siteName: 'Romancing Japan',
	},
};

export default async function CategoryList() {
	const categories = await getCategories();

	return (
		<>
			<section className="z-0 flex flex-col items-center justify-center overflow-hidden">
				{/* TOP IMAGE */}
				<figure className="mt-16 lg:mt-8 xl:mt-0">
					<Image
						src="/categories/opengraph-image.jpg"
						width={3840}
						height={1368}
						alt="Mt.Fuji Black and White"
						priority={true}
					/>
				</figure>

				{/* Page Banner */}
				<div className="absolute top-24 left-0 w-full bg-slate-700 p-4 flex justify-center text-white text-2xl md:text-3xl font-bold">
					<h1 className="m-1">List of Article</h1>
					<h2 className="m-1">Categories</h2>
				</div>

				{/* Grid */}
				<article className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 -mt-3 xl:-mt-6">
					<>
						{categories.map(async (category: any) => (
							<Link
								key={category._id}
								href={`/categories/${category.slug}`}
							>
								{/* Category Cards (array) */}
								<div className="w-80 group relative items-center justify-center overflow-hidden rounded-lg shadow-xl shadow-slate-600 mb-4 border-2 border-red-800 md:mb-8 hover:border-0 hover:transition-all duration-300">
									<figure className="h-56 w-80">
										<Image
											src={urlFor(category.image)}
											width={220}
											height={220}
											alt={category.image}
											priority={true}
											className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700"
										/>
									</figure>

									{/* Gradient Layer */}
									<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

									{/* Title & Description */}
									<div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
										<h2 className="font-krona_one text-2xl text-white mb-5">
											{category.title}
										</h2>
										<p className="mb-2 text-xl italic text-white drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
											{category.description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</>
				</article>
			</section>
		</>
	);
}
