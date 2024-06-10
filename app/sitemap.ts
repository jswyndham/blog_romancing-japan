import { getCategories, getPostsArchive, getTags } from '@/sanity/sanity-utils';

// Revalidation interval for the sitemap
export const revalidate = 50; // Revalidate every minute

// Utility function to add trailing slashes to URLs
export const addTrailingSlash = (url: string): string => {
	return url.endsWith('/') ? url : `${url}/`;
};

export default async function sitemap() {
	const baseUrl = 'https://www.romancing-japan.com/';

	// Get all posts from sanity-utils
	const posts = await getPostsArchive();
	const postsUrls =
		posts?.map((post) => {
			return {
				url: addTrailingSlash(`${baseUrl}posts/${post.slug}`),
				lastModified: new Date().toISOString(),
			};
		}) ?? [];

	// Get all categories from sanity-utils
	const categories = await getCategories();
	const categoryUrls =
		categories?.map((category) => {
			return {
				url: addTrailingSlash(`${baseUrl}categories/${category.slug}`),
				lastModified: new Date().toISOString(),
			};
		}) ?? [];

	// Get all tags from sanity-utils
	const tags = await getTags();
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
		{
			url: addTrailingSlash(`${baseUrl}favicon.ico`), // Favicon (trailing slash not necessary here)
			lastModified: new Date().toISOString(),
		},
	];

	return [...staticPages, ...postsUrls, ...categoryUrls, ...tagUrls];
}
