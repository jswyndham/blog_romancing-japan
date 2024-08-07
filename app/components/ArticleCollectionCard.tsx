'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getPostsArchive } from '@/sanity/sanity-utils';
import { urlFor } from '@/lib/urlFor';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import PortableTextComp from './PortableTextComponents';
import { Post } from '@/typings';

const ArticleCollectionCard = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				let posts = await getPostsArchive();
				posts = posts.map((post) => ({
					...post,
					imageUrl: urlFor(post.image),
				}));
				setPosts(posts);
			} catch (error) {
				console.error('Failed to fetch posts:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	// RICH TEXT EDITOR
	const components = PortableTextComp();

	return (
		<>
			{posts.map((post) => (
				<article key={post._id} className="flex justify-center">
					<div>
						<Link href={`/posts/${post.slug}/`}>
							<div className="card rounded-none w-fit h-10/12 my-6 hover:shadow-lg hover:shadow-slate-200 hover:drop-shadow hover:bg-base-100 hover:transition-all duration-300 group">
								{/* Card Image */}
								<figure className="h-40 3xl:h-56 border-b-2 border-red-500">
									<Image
										src={
											post.imageUrl ||
											'/default-image.jpg'
										}
										width={700}
										height={650}
										alt={post.name || 'Romancing Japan'}
										title={
											post.caption || 'Romancing Japan'
										}
										loading="lazy"
										className="top-0 group-hover:scale-105 transition-transform duration-700"
									/>
								</figure>

								{/* Card Title & Summary */}
								<div className="card-body p-4 rounded-2xl">
									<div className="flex items-center h-24 xl:h-28 pl-2 py-2 mt-1 mb-2 border-l-2 border-red-600">
										<h2 className="font-roboto_condensed text-red-900 text-2xl font-bold justify-left">
											{post.name}
										</h2>
									</div>
									<div className="h-44 md:h-52 lg:h-48 2xl:h-64 3xl:h-44 m-1 text-lg text-left md:pb-6">
										<PortableText
											value={post.summaryShort}
											onMissingComponent={false}
											components={components}
										/>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</article>
			))}
		</>
	);
};

export default ArticleCollectionCard;
