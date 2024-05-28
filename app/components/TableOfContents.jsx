export const TableOfContents = ({ outline }) => (
	<div className="w-fit py-6 pr-3 mb-8 mx-2 bg-gray-200 rounded-xl border border-gray-400 drop-shadow-xl shadow-xl shadow-slate-300">
		<p className="font-bold text-xl text-info underline underline-offset-4 pb-2 pl-12">
			Table of contents:
		</p>
		<ol className="ml-10 lg:ml-20">
			{outline.map((heading) => (
				<li key={heading._key} className="list-disc py-2 font-serif">
					<a
						href={'#' + heading._key}
						className="text-md lg:text-lg text-red-800 hover:text-red-700 font-bold"
					>
						{heading.children[0].text}
					</a>
					{heading.subheadings && heading.subheadings.length > 0 && (
						<ul className="ml-5 font-sans text-red-600">
							{heading.subheadings.map((subheading) => (
								<li
									key={subheading._key}
									className="list-disc py-1"
								>
									<a
										href={'#' + subheading._key}
										className="text-md lg:text-lg text-slate-600 font-bold hover:text-slate-400"
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
	</div>
);
