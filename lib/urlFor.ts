import { readClient } from '@/sanity/config/client-config';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(readClient);

export function urlFor(source: any) {
	return builder.image(source).url();
}
