import { getCategories, getPostsArchive, getTags } from '@/sanity/sanity-utils';

// Revalidation interval for the sitemap
export const revalidate = 50; // Revalidate every minute

// Utility function to add trailing slashes to URLs
export const addTrailingSlash = (url: string): string => {
	return url.endsWith('/') ? url : `${url}/`;
};

export default async function sitemap() {
	const baseUrl = 'https://www.romancing-japan.com/';

	try {
		// Get all posts from sanity-utils
		const posts = await getPostsArchive();

		const postsUrls =
			posts
				?.map((post) => {
					if (!post.slug) {
						console.warn(`Post missing slug: ${post._id}`); // Warn about missing slugs
						return null;
					}
					return {
						url: addTrailingSlash(`${baseUrl}posts/${post.slug}`),
						lastModified: new Date().toISOString(),
					};
				})
				.filter(Boolean) ?? [];

		// Get all categories from sanity-utils
		const categories = await getCategories();
		console.log('Fetched categories:', categories); // Debug output
		const categoryUrls =
			categories?.map((category) => {
				return {
					url: addTrailingSlash(
						`${baseUrl}categories/${category.slug}`
					),
					lastModified: new Date().toISOString(),
				};
			}) ?? [];

		// Get all tags from sanity-utils
		const tags = await getTags();
		console.log('Fetched tags:', tags); // Debug output
		const tagUrls =
			tags?.map((tag) => {
				return {
					url: addTrailingSlash(`${baseUrl}tags/${tag.slug}`),
					lastModified: new Date().toISOString(),
				};
			}) ?? [];

		// Static pages
		const staticPages = [
			{
				url: addTrailingSlash(baseUrl), // Home page
				lastModified: new Date().toISOString(),
			},
			{
				url: addTrailingSlash(`${baseUrl}contact`), // Contact page
				lastModified: new Date().toISOString(),
			},
			{
				url: addTrailingSlash(`${baseUrl}about`), // About Us page
				lastModified: new Date().toISOString(),
			},
			{
				url: addTrailingSlash(`${baseUrl}privacyPolicy`), // Privacy Policy page
				lastModified: new Date().toISOString(),
			},
		];

		const sitemap = [
			...staticPages,
			...postsUrls,
			...categoryUrls,
			...tagUrls,
		];

		return sitemap;
	} catch (error) {
		console.error('Error generating sitemap:', error);
		return [];
	}
}
