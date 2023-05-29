import { getTags } from '@/sanity/sanity-utils';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/urlFor';

export default async function TagList() {
	const tags = await getTags();

	return (
		<>
			<div className='z-0 flex flex-col min-h-screen items-center justify-center overflow-hidden m-4 p-2 md:mx-4 md:px-2'>
				<div className='w-screen bg-slate-700 p-4 mt-8 mb-12 md:mb-24 flex justify-center text-white text-3xl font-bold md:absolute md:top-28'>
					List of tags
				</div>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:mt-28 xl:-mt-24'>
					<>
						{tags.map(async (tag: any) => (
							<Link href={`/categories/${tag.slug}`}>
								<div
									key={tag._id}
									className='w-80 group relative items-center justify-center overflow-hidden rounded-lg shadow-xl shadow-slate-600 mb-4 md:mb-8'
								>
									<figure className='h-56 w-80'>
										<Image
											src={(await urlFor(tag.image)).url()}
											width={220}
											height={220}
											alt={tag.image}
											priority
											className='w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-700'
										/>
									</figure>
									<div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
									<div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700'>
										<h1 className='font-krona_one text-2xl text-white mb-5'>
											{tag.title}
										</h1>
										<p className='mb-2 text-xl italic text-white drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 '>
											{tag.description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</>
				</div>
				<div></div>
			</div>
		</>
	);
}

