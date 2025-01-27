import { defineField, defineType } from 'sanity';

export const aboutUsSchema = defineType({
	name: 'aboutUs',
	title: 'About Us',
	type: 'document',
	fields: [
		defineField({
			name: 'content',
			title: 'Article Body (press shift + enter buttons for new paragraph, press ctrl + enter buttons for full edit view)',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					// Only allow these block styles
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'H4', value: 'h4' },
						{ title: 'H5', value: 'h5' },
						{ title: 'H6', value: 'h6' },
						{ title: 'Quote', value: 'blockquote' },
						{ title: 'Tip', value: 'tip' }, // Custom tip style
						{ title: 'Highlight', value: 'highlight' }, // Custom highlight style
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
											{
												type: 'reference',
												to: { type: 'post' },
											},
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
				},

				{
					title: 'Image',
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alternative text',
						},
						{
							name: 'caption',
							type: 'string',
							title: 'Caption',
							description: `Text that's displayed with the image`,
							options: {
								isHighlighted: true,
							},
						},
					],
				},
				{ type: 'table' },
				{
					title: 'YouTube Embed',
					type: 'youTube',
				},
			],

			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					description: `Text that's displayed with the image`,
				},
			],
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'content2',
			title: 'Second Article Body',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					// Only allow these block styles
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'H4', value: 'h4' },
						{ title: 'H5', value: 'h5' },
						{ title: 'H6', value: 'h6' },
						{ title: 'Quote', value: 'blockquote' },
						{ title: 'Tip', value: 'tip' }, // Custom tip style
						{ title: 'Highlight', value: 'highlight' }, // Custom highlight style
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
											{
												type: 'reference',
												to: { type: 'post' },
											},
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
				},

				{
					name: 'excerpt',
					title: 'Excerpt',
					type: 'object',
					fields: [
						{
							name: 'content',
							title: 'Article Body',
							type: 'array',
							of: [{ type: 'block' }],
						},
					],
				},

				{
					title: 'Image',
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alternative text',
						},
						{
							name: 'caption',
							type: 'string',
							title: 'Caption',
							description: `Text that's displayed with the image`,
							options: {
								isHighlighted: true,
							},
						},
					],
				},
				{ type: 'table' },
				{
					title: 'YouTube Embed',
					type: 'youTube',
				},
			],
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'image2',
			title: 'Image 2',
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					description: `Text that's displayed with the image`,
				},
			],
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'content3',
			title: 'Third Article Body',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					// Only allow these block styles
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'H4', value: 'h4' },
						{ title: 'H5', value: 'h5' },
						{ title: 'H6', value: 'h6' },
						{ title: 'Quote', value: 'blockquote' },
						{ title: 'Tip', value: 'tip' }, // Custom tip style
						{ title: 'Highlight', value: 'highlight' }, // Custom highlight style
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
											{
												type: 'reference',
												to: { type: 'post' },
											},
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
				},

				{
					name: 'excerpt',
					title: 'Excerpt',
					type: 'object',
					fields: [
						{
							name: 'content',
							title: 'Article Body',
							type: 'array',
							of: [{ type: 'block' }],
						},
					],
				},

				{
					title: 'Image',
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alternative text',
						},
						{
							name: 'caption',
							type: 'string',
							title: 'Caption',
							description: `Text that's displayed with the image`,
							options: {
								isHighlighted: true,
							},
						},
					],
				},
				{ type: 'table' },
				{
					title: 'YouTube Embed',
					type: 'youTube',
				},
			],
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'image3',
			title: 'Image 3',
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					description: `Text that's displayed with the image`,
				},
			],
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'content4',
			title: 'Third Article Body',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					// Only allow these block styles
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'H4', value: 'h4' },
						{ title: 'H5', value: 'h5' },
						{ title: 'H6', value: 'h6' },
						{ title: 'Quote', value: 'blockquote' },
						{ title: 'Tip', value: 'tip' }, // Custom tip style
						{ title: 'Highlight', value: 'highlight' }, // Custom highlight style
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
											{
												type: 'reference',
												to: { type: 'post' },
											},
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
				},

				{
					name: 'excerpt',
					title: 'Excerpt',
					type: 'object',
					fields: [
						{
							name: 'content',
							title: 'Article Body',
							type: 'array',
							of: [{ type: 'block' }],
						},
					],
				},

				{
					title: 'Image',
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alternative text',
						},
						{
							name: 'caption',
							type: 'string',
							title: 'Caption',
							description: `Text that's displayed with the image`,
							options: {
								isHighlighted: true,
							},
						},
					],
				},
				{ type: 'table' },
				{
					title: 'YouTube Embed',
					type: 'youTube',
				},
			],
			validation: (Rule) => Rule.required(),
		}),
	],
});
