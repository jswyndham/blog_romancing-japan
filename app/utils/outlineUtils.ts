interface PortableTextBlock {
	_key: string;
	_type: string;
	style?: string;
	children?: PortableTextBlock[];
}

interface HeadingNode extends PortableTextBlock {
	subheadings: HeadingNode[];
}

// The filter function traverses the PortableText AST (abstract syntax tree) and returns an array of nodes that match the specified condition.
export const filter = (
	ast: PortableTextBlock[], // The AST to traverse.
	match: (node: PortableTextBlock) => boolean // The condition to match nodes.
): PortableTextBlock[] =>
	ast.reduce((acc: PortableTextBlock[], node: PortableTextBlock) => {
		// If the node matches the condition, add it to the accumulator.
		if (match(node)) acc.push(node);
		// If the node has children, recursively filter the children and add the results to the accumulator.
		if (node.children) acc.push(...filter(node.children, match));
		return acc;
	}, []);

// The findHeadings function identifies nodes styled as 'h2' or 'h3' and structures them as HeadingNode objects with an empty subheadings array.
export const findHeadings = (ast: PortableTextBlock[]): HeadingNode[] =>
	filter(
		ast,
		(node: PortableTextBlock) => node.style === 'h2' || node.style === 'h3'
	).map((node) => ({
		...node,
		subheadings: [], // Initialize subheadings as an empty array.
	}));

// The get function retrieves a value from a nested object using a path array.
export const get = (object: any, path: (string | number)[]): any =>
	path.reduce(
		(prev: any, curr: string | number) => (prev ? prev[curr] : undefined),
		object
	);

// The getObjectPath function generates a path array for accessing subheadings within the outline.
export const getObjectPath = (path: number[]): (string | number)[] => {
	return path.reduce<(string | number)[]>((acc, p) => {
		acc.push('subheadings', p);
		return acc;
	}, []);
};

// The parseOutline function constructs an outline of headings and subheadings from the AST.
export const parseOutline = (ast: PortableTextBlock[]): HeadingNode[] => {
	const outline = { subheadings: [] as HeadingNode[] }; // Initialize the outline with an empty subheadings array.
	const headings: HeadingNode[] = findHeadings(ast); // Find all h2 and h3 headings.
	const path: number[] = []; // Track the current path in the outline.
	let lastLevel = 0; // Track the last heading level processed.

	headings.forEach((heading) => {
		const level = Number(heading.style?.slice(1)); // Get the heading level (2 or 3).
		if (level < lastLevel) {
			// If the current level is less than the last level, pop from the path.
			for (let i = lastLevel; i >= level; i--) path.pop();
		} else if (level === lastLevel) {
			path.pop(); // If the current level is the same as the last level, pop once.
		}

		const propPath = getObjectPath(path);
		const prop = get(outline, propPath) as HeadingNode;

		if (prop) {
			prop.subheadings.push(heading); // Add the heading to the subheadings array.
			path.push(prop.subheadings.length - 1); // Update the path with the index of the newly added heading.
		} else {
			console.error('Path not found:', propPath);
		}
		lastLevel = level; // Update the last level processed.
	});

	return outline.subheadings; // Return the constructed outline.
};
