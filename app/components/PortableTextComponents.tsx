import { urlFor } from '@/lib/urlFor';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';

const YouTubePreviewDynamic = dynamic(
	() =>
		import('../../sanity/youtubePreview').then((mod) => mod.YouTubePreview),
	{ ssr: false }
);

function PortableTextComp() {
	return {
		types: {
			image: async ({ value }: any) => {
				return (
					<figure className="flex flex-col my-6">
						<Image
							src={(await urlFor(value))
								.fit('max')
								.auto('format')
								.url()}
							alt={value.caption || 'Romancing Japan'}
							title={value.caption || 'Romancing Japan'}
							width={900}
							height={700}
							loading="lazy"
						/>
						<figcaption className="italic text-base text-left mt-2">
							{value.caption}
						</figcaption>
					</figure>
				);
			},
			youtube: ({ value }: any) => {
				if (!value || !value.url) {
					console.error('Missing URL for YouTube video');
					return null;
				}

				return <YouTubePreviewDynamic url={value.url} />;
			},
		},

		list: {
			bullet: ({ children }: any) => (
				<ul className="list-disc ml-8 py-5 space-y-5">{children}</ul>
			),
			number: ({ children }: any) => (
				<ol className="list-decimal mt-lg ml-4 py-6 space-y-5">
					{children}
				</ol>
			),
		},
		block: {
			h1: ({ children }: any) => (
				<h1 className="text-4xl py-7 font-bold">{children}</h1>
			),
			h2: ({ children, node }: any) => (
				<h2
					id={node._key}
					className="text-2xl xl:text-3xl pt-3 pb-2 text-red-800 font-bold"
				>
					{children}
				</h2>
			),
			h3: ({ children, node }: any) => (
				<div className="w-full mb-2 mt-3 py-1 bg-gradient-to-r from-red-200 via-red-800 to-red-200 rounded-lg">
					<div className="bg-white p-1">
						<h3
							id={node._key}
							className="text-xl text-slate-600 font-bold ml-4 font-sans"
						>
							{children}
						</h3>
					</div>
				</div>
			),
			h4: ({ children }: any) => (
				<h4 className="text-xl pt-3 pb-2 ml-3 font-bold border-b-red-500">
					{children}
				</h4>
			),
			h5: ({ children }: any) => (
				<h5 className="text-lg pt-5 pb-2 font-extrabold">{children}</h5>
			),

			blockquote: ({ children }: any) => (
				<blockquote className="border-l-[#CA3433] border-l-4 pl-5 py-5 my-5">
					{children}
				</blockquote>
			),
		},

		marks: {
			em: ({ children }: any) => (
				<em className="text-gray-600 font-semibold">{children}</em>
			),
			link: ({ value, children }: any) => {
				const target = (value?.href || '').startsWith('http')
					? '_blank'
					: undefined;

				return (
					<Link
						href={value?.href}
						target={target}
						rel={'_blank'}
						className="text-blue-800 hover:underline mx-1 underline underline-offset-4"
					>
						{children}
					</Link>
				);
			},
		},
	};
}

export default PortableTextComp;
