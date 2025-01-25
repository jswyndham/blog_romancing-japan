'use client';

import { useState } from 'react';

export const TableOfContents = ({ outline }) => {
	const [expanded, setExpanded] = useState(false); // State to track if TOC is expanded
	const maxVisibleItems = 3; // Number of headings to show before collapsing

	// Function to toggle visibility
	const toggleExpand = () => setExpanded(!expanded);

	// Determine the items to display
	const visibleOutline = expanded
		? outline
		: outline.slice(0, maxVisibleItems);

	return (
		<div className="w-fit pt-6 mb-8 mx-2 bg-gray-200 rounded-xl border border-gray-300 drop-shadow-xl shadow-xl shadow-slate-300">
			<p className="font-bold text-xl text-info underline underline-offset-4 pb-2 pl-12">
				Table of contents:
			</p>
			<ol className="ml-10 lg:ml-20 px-4">
				{visibleOutline.map((heading) => (
					<li
						key={heading._key}
						className="list-disc py-2 font-serif"
					>
						<a
							href={`#${heading.prefix}-${heading._key}`}
							className="text-md lg:text-lg text-red-800 hover:text-red-700 font-bold"
						>
							{heading.children[0].text}
						</a>
						{heading.subheadings &&
							heading.subheadings.length > 0 && (
								<ul className="ml-5 font-sans text-red-600">
									{heading.subheadings.map((subheading) => (
										<li
											key={subheading._key}
											className="list-disc py-1"
										>
											<a
												href={`#${subheading.prefix}-${subheading._key}`}
												className="text-md lg:text-lg text-slate-600 font-bold hover:text-slate-500"
											>
												{subheading.children[0].text}
											</a>
										</li>
									))}
								</ul>
							)}
					</li>
				))}
			</ol>
			<div className="w-full mt-6 flex items-center justify-center align-middle  rounded-b-xl">
				{outline.length > maxVisibleItems && (
					<button
						onClick={toggleExpand}
						className="w-full py-3 text-center text-white font-bold bg-blue-600 hover:text-red-700 hover:bg-white rounded-b-xl"
					>
						{expanded ? (
							<>
								Show less <span className="ml-2">▲</span>
							</>
						) : (
							<>
								Show more <span className="ml-2">▼</span>
							</>
						)}
					</button>
				)}
			</div>
		</div>
	);
};
