// import { useEffect, useState } from 'react';
// import { getPostsArchive } from '@/sanity/sanity-utils';
// import { urlFor } from '@/lib/urlFor';

// interface PortableTextBlock {
// 	_key: string;
// 	_type: string;
// 	style?: string;
// 	children: PortableTextSpan[];
// 	markDefs: any[];
// }

// interface PortableTextSpan {
// 	_key: string;
// 	_type: string;
// 	marks: string[];
// 	text: string;
// }

// interface PostType {
// 	_id: string;
// 	name: string;
// 	slug: string;
// 	imageUrl: string;
// 	summaryShort: PortableTextBlock[];
// }

// export const usePosts = () => {
// 	const [posts, setPosts] = useState<PostType[]>([]);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const fetchedPosts = await getPostsArchive();
// 			const postsWithResolvedUrls = await Promise.all(
// 				fetchedPosts.map(async (post) => ({
// 					_id: post._id,
// 					name: post.name,
// 					slug: post.slug.current, // Ensure this aligns with your data structure
// 					imageUrl: (await urlFor(post.image)).url(),
// 					summaryShort: post.summaryShort, // Ensure this data is structured as expected
// 				}))
// 			);
// 			setPosts(postsWithResolvedUrls);
// 		};

// 		fetchData();
// 	}, []);

// 	return posts;
// };
