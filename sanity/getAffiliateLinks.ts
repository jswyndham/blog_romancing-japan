import { createClient } from 'next-sanity';
import { readClient } from '@/sanity/config/client-config';
import { AffiliateBanners } from '@/typings';

// Create a Sanity client
export const client = createClient(readClient);

// Fetch affiliate links
export async function getAffiliateLinks(): Promise<AffiliateBanners[]> {
	const query = `*[_type == "AffiliateBanners"]{
    title,
    "imageUrl": image.asset->url,
    altText,
    link
  }`;
	const data = await client.fetch<AffiliateBanners[]>(query);
	return data;
}
