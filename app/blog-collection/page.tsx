import React from 'react';
import ArticleCollectionCard from '../components/ArticleCollectionCard';

export const metadata = {
	title: 'Article Collection',
	description:
		'A collection of all articles published by Romancing Japan. These articles cover a broad range of topics related to lifestyle, culture, and travel within Japan.',
	alternates: {
		canonical: `https://www.romancing-japan.com/blog-collection/`,
	},
	openGraph: {
		title: 'Article Collection',
		description:
			'A collection of all articles published by Romancing Japan. These articles cover a broad range of topics related to lifestyle, culture, and travel within Japan.',
		type: 'website',
		siteName: 'Romancing Japan',
	},
};

export default function page() {
	return (
		<>
			<section className="flex justify-center px-8 py-4">
				{/* Banner */}
				<div className="absolute top-32 w-full font-roboto-condensed text-white bg-slate-700 p-4 -ml-5 flex justify-center text-3xl font-bold">
					<h1>Article Collection</h1>
				</div>
				<article className="mt-24 md:w-[95%] xl:w-[70%] md:grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8">
					{/* CARD */}

					<ArticleCollectionCard />
				</article>
			</section>
		</>
	);
}
