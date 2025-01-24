declare module 'refractor/lang/javascript' {
	import { RefractorSyntax } from 'refractor/core';
	const syntax: RefractorSyntax;
	export default syntax;
}

declare module 'refractor/lang/html' {
	import { RefractorSyntax } from 'refractor/core';
	const syntax: RefractorSyntax;
	export default syntax;
}

declare module 'refractor/lang/css' {
	import { RefractorSyntax } from 'refractor/core';
	const syntax: RefractorSyntax;
	export default syntax;
}

declare module 'refractor';
declare module 'refractor/lang/javascript';
declare module 'refractor/lang/html';
declare module 'refractor/lang/css';

// Add more languages as needed, e.g., python, rust, etc.
