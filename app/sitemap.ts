import { getCategories, getPostsArchive, getTags } from "@/sanity/sanity-utils";

export const revalidate = 50; // revalidate every minute

export default async function sitemap() {
  const baseUrl = "https://www.romancing-japan.com/";

  // ********** Get all posts from sanity-utils
  const posts = await getPostsArchive();
  const postsUrls =
    posts?.map((post) => {
      return {
        url: `${baseUrl}posts/${post.slug}/`,
        lastModified: new Date(),
      };
    }) ?? [];

  // ******** Get all categories from sanity-utils
  const categories = await getCategories();
  const categoryUrls =
    categories?.map((categories) => {
      return {
        url: `${baseUrl}categories/${categories.slug}/`,
        lastModified: new Date(),
      };
    }) ?? [];

  // ************ Get tags
  const tags = await getTags();
  const tagUrls =
    tags?.map((tags) => {
      return {
        url: `${baseUrl}tags/${tags.slug}/`,
        lastModified: new Date(),
      };
    }) ?? [];

  // ********** Static Pages
  const staticPages = [
    {
      url: `${baseUrl}`, // Home page
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}contact/`, // Contact page
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}about/`, // About Us page
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}privacyPolicy/`, // Privacy Policy page
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}favicon.ico`, // Favicon
      lastModified: new Date(),
    },
  ];

  return [...staticPages, ...postsUrls, ...categoryUrls, ...tagUrls];
}
