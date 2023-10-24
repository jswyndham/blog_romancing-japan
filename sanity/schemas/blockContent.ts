import { defineType, defineArrayMember } from 'sanity';
export const blockContent = defineType({
	name: 'blockContent',
	type: 'array',
	title: 'Body',
	of: [
		defineArrayMember({
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'H5', value: 'h5' },
				{ title: 'H6', value: 'h6' },
				{ title: 'Quote', value: 'blockquote' },
			],
			// Only allow numbered lists
			lists: [
				{ title: 'Numbered', value: 'number' },
				{ title: 'Bullet', value: 'bullet' },
			],
			marks: {
				// Only allow these decorators
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
					{ title: 'Underline', value: 'underline' },
					{ title: 'Strike', value: 'strike-through' },
					{ title: 'Code', value: 'code' },
				],
				// Internal links
				annotations: [
					{
						name: 'internalLink',
						type: 'object',
						title: 'Internal link',
						fields: [
							{
								name: 'reference',
								type: 'reference',
								title: 'Reference',
								to: [
									{ type: 'post' },
									// other types you may want to link to
								],
							},
						],
					},
					// External links
					{
						name: 'link',
						type: 'object',
						title: 'External link',
						fields: [
							{
								name: 'href',
								type: 'url',
								title: 'URL',
							},
							{
								title: 'Open in new tab',
								name: 'blank',
								description:
									'Read https://css-tricks.com/use-target_blank/',
								type: 'boolean',
							},
						],
					},
				],
			},
		}),

		defineArrayMember({
			type: 'youtube',
		}),
	],
});
