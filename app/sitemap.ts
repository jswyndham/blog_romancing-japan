import { getCategories, getPostsArchive, getTags } from "@/sanity/sanity-utils";

export default async function sitemap() {
  const baseUrl = "https://www.romancing-japan.com/";

  // Get all posts from sanity-utils
  const posts = await getPostsArchive();
  const postsUrls =
    posts?.map((post) => {
      return {
        url: `${baseUrl}/posts/${post.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // Get all categories from sanity-utils
  const categories = await getCategories();
  const categoryUrls =
    categories?.map((categories) => {
      return {
        url: `${baseUrl}/categories/${categories.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  const tags = await getTags();
  const tagUrls =
    tags?.map((tags) => {
      return { url: `${baseUrl}/tags/${tags.slug}`, lastModified: new Date() };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postsUrls,
    ...categoryUrls,
    ...tagUrls,
  ];
}
