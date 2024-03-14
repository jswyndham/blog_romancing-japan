export const TableOfContents = ({ outline }) => (
	<ol className="ml-10 lg:ml-20">
		<p className="font-bold text-xl text-info underline underline-offset-4 pb-2">
			Table of contents:
		</p>
		{outline.map((heading) => (
			<li key={heading._key} className="list-disc py-1">
				<a
					href={'#' + heading._key}
					className="text-md lg:text-lg text-red-700 font-bold hover:text-primary"
				>
					{heading.children[0].text}
				</a>
			</li>
		))}
	</ol>
);
