import { createClient, groq } from 'next-sanity';
import React from 'react';
import { Post } from '@/typings';
import { readClient } from '@/sanity/config/client-config';
import PortableTextComp from './PortableTextComponents';
import LatestArticlesMini from '@/app/components/LatestArticlesMini';
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
			<div
				key={post._id}
				className="mt-4 xl:border-l-4 xl:border-r-4 border-white"
			>
				<div className="flex flex-col justify-center px-4">
					{post.author.map(async (author) => (
						<div key={author._id} className="relative  mb-3">
							<figure className="absolute w-80 xl:w-64 m-auto left-0 right-0 -mt-4 xl:mt-10 rounded-xl">
								<Image
									src={(await urlFor(author.image)).url()}
									alt={post.name}
									width={900}
									height={900}
									className="object-fill px-3 pb-3"
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
			</div>

			{/* SUBSCRIBE CARD @ XL */}
			<div className="hidden w-full xl:flex items-center justify-start">
				<SignupCardShort />
			</div>

			{/* SIDE MENU LATEST ARTICLES */}
			<div className="flex flex-col px-4 xl:border-l-4 xl:border-r-4 border-white">
				<div className="ml-6 xl:mt-4">
					<h3 className="text-4xl font-playfair_display font-bold">
						Latest Posts
					</h3>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:flex xl:flex-col my-4">
					{/* @ts-expect-error Server Component */}
					<LatestArticlesMini />
				</div>
			</div>
		</>
	);
}
