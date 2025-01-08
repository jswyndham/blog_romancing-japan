import { createClient, groq } from 'next-sanity';
import React from 'react';
import { Post } from '@/typings';
import { readClient } from '@/sanity/config/client-config';
import PortableTextComp from './PortableTextComponents';
import SignupCardShort from '@/app/components/SignupCardShort';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/urlFor';

type Props = {
	params: { slug?: string };
};

// FETCH SANITY DATA AND POST ARTICLES
export default async function SideBioSubscriptionLatestArt({
	params: { slug },
}: Props) {
	const query = groq`*[_type=="post" && slug.current == $slug][0]
    {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  image{...},
  "caption": image.caption,
  url,
  content[]{
    ...,
    image[] => {
      ...,
      caption, 
      asset->
    }
  },
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->{title, "slug": slug.current,},
  tag[]->{title, "slug": slug.current,},
  }`;

	const post: Post = await createClient(readClient).fetch(query, {
		slug,
	});

	// RICH TEXT EDITOR
	const components = PortableTextComp();

	return (
		<>
			{/* AUTHOR BIO */}
			<article key={post._id} className="mt-20 xl:mt-52">
				<div className="flex flex-col justify-center">
					{post.author.map(async (author) => (
						<div key={author._id} className="relative mb-3 w-full">
							<figure className="absolute w-80 xl:w-64 mx-auto top-10 xl:top-4 left-12 right-0 xl:left-0 rounded-xl">
								<Image
									src={urlFor(author.image)}
									alt={post.name}
									width={256}
									height={180}
									className="px-3 pb-3"
									loading="lazy"
								/>
							</figure>
							<div className="bg-slate-200 px-4 pt-16 pb-6 mt-36 mx-2 text-justify font-playfair_display whitespace-pre-line">
								<div className="flex justify-center my-2">
									<h3 className="mb-2 font-caveat text-3xl text-center xl:text-2xl">
										{author.name}
									</h3>
								</div>
								<div className="font-sans">
									<PortableText
										value={author.biography}
										onMissingComponent={false}
										components={components}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</article>

			{/* SUBSCRIBE CARD @ XL */}
			{/* <div className="hidden w-full xl:flex items-center justify-start">
				<SignupCardShort />
			</div> */}
		</>
	);
}
