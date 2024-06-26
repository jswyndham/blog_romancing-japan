import { Post } from '@/typings';
import { ImageResponse } from 'next/og';
import { createClient, groq } from 'next-sanity';
import { readClient } from '@/sanity/config/client-config';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Romancing Japan';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/jpg';

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
	const query = groq`*[_type=="post" && slug.current == $slug][0]
    {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  },
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->{title, "slug": slug.current,},
  tag[]->{title, "slug": slug.current,},
  summary,
  summaryShort,
  description,
  }`;

	const slug = params.slug;

	const post: Post = await createClient(readClient).fetch(query, {
		slug,
	});
	// FETCH SANITY DATA AND POST ARTICLES

	return new ImageResponse(
		(
			<div
				key={post._id}
				tw="relative flex w-full h-full items-center justify-center"
			>
				{/* Background */}
				<figure tw="absolute flex inset-0">
					<img
						src={post.image}
						alt={post.name}
						height={630}
						width={1200}
						tw="flex flex-1"
					/>

					{/* Overlay */}
					<div tw="absolute flex inset-0 bg-black bg-opacity-25" />
				</figure>

				<div tw="w-9/12 flex flex-col text-neutral-50 text-4xl mx-4 mt-12">
					{/* Title */}
					<div tw="flex mt-82 mb-6 text-6xl font-bold text-center">
						{post.name}
					</div>

					<div tw="text-left text-red-600">
						www.romancing-japan.com
					</div>
				</div>
			</div>
		),
		size
	);
}
