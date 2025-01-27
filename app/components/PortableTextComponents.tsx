import { urlFor } from '@/lib/urlFor';
import Image from 'next/image';
import Link from 'next/link';
import { YouTubeEmbed } from '../components/YouTubeEmbed';
import TableComponent from '../components/TableComponent'; // Ensure correct path
import CodeBlock from './CodeBlock';
import AffiliateWidget from './AffiliateWidget';

interface YouTubeValue {
	url: string;
}

const PortableTextComp = () => {
	return {
		types: {
			image: ({ value }: any) => {
				const imageUrl = urlFor(value);
				return (
					<figure className="flex flex-col my-6">
						<Image
							src={imageUrl}
							alt={value.caption || 'Romancing Japan'}
							title={value.caption || 'Romancing Japan'}
							width={900}
							height={700}
							loading="lazy"
						/>
						<figcaption className="italic text-sm xl:text-base text-left mt-2">
							{value.caption}
						</figcaption>
					</figure>
				);
			},
			youTube: ({ value }: { value: YouTubeValue }) => {
				return <YouTubeEmbed url={value.url} />;
			},
			table: ({ value }: any) => {
				return <TableComponent value={value} />;
			},
			myCodeField: ({
				value,
			}: {
				value: { code: string; language: string };
			}) => {
				const language = value.language || 'javascript'; // Default to JavaScript
				return <CodeBlock code={value.code} language={language} />;
			},
			affiliateWidget: ({ value }: any) => {
				return (
					<AffiliateWidget
						scriptSrc={value.scriptSrc}
						defaultDirection={value.defaultDirection}
						locale={value.locale}
					/>
				);
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
				<h1 className="text-4xl py-7 font-bold font-heading">
					{children}
				</h1>
			),
			h2: ({ children, node, prefix }: any) => (
				<div className="w-full border-red-300 border-b-2 mb-4">
					<h2
						id={`${prefix}-${node._key}`}
						className="text-xl lg:text-3xl pt-3 pb-2 text-red-800 font-bold"
					>
						{children}
					</h2>
				</div>
			),
			h3: ({ children, node, prefix }: any) => (
				<div className="w-full mb-4 py-1 bg-gradient-to-r from-red-200 via-red-800 to-red-200 rounded-lg shadow-lg shadow-slate-300">
					<div className="bg-white py-1">
						<h3
							id={`${prefix}-${node._key}`}
							className="text-md leading-6 md:text-lg text-slate-600 font-semibold xl:font-bold ml-4 font-sans"
						>
							{children}
						</h3>
					</div>
				</div>
			),
			h4: ({ children }: any) => (
				<h4 className="text-xl text-red-600 pt-3 pb-2 ml-3 font-bold border-b-red-500">
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

			// Custom "Tip" Block
			tip: ({ children }: any) => (
				<div className="p-6 mx-4 md:mx-10 my-12 bg-green-100 border-l-8 border-green-700 shadow-md shadow-slate-400">
					<p className="font-bold text-xl -mb-6">Local Insight:</p>{' '}
					{children}
				</div>
			),

			// Custom "Highlighted Quote" Block
			highlight: ({ children }: any) => (
				<blockquote className="p-4 my-4 bg-green-100 border-l-4 border-green-500 italic">
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
};

export default PortableTextComp;
