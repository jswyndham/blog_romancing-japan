import { defineField, defineType, defineArrayMember } from 'sanity';

const post = defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Article Title',
			type: 'string',
		}),

		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'name' },
		}),

		defineField({
			name: 'pageName',
			title: 'Page Title (max 60 characters)',
			type: 'string',
		}),

		defineField({
			name: 'category',
			title: 'Category List',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
		}),

		defineField({
			title: 'Tag List',
			name: 'tag',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'tag' } }],
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
			name: 'affiliateMobileBanners',
			title: 'Affiliate Mobile Banner',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'affiliateLinkMobile' }], // References the affiliateLink schema
				},
			],
		}),

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
				{
					type: 'code',
					name: 'myCodeField',
					title: 'Code with all options',
					options: {
						language: 'javascript',
						languageAlternatives: [
							{ title: 'Javascript', value: 'javascript' },
							{ title: 'HTML', value: 'html' },
							{ title: 'CSS', value: 'css' },
						],
						withFilename: true,
					},
				},
				{ type: 'affiliateWidget' },
			],

			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'affiliateMiddleBanners',
			title: 'Affiliate Middle Banner',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'affiliateLinkMiddle' }], // References the affiliateLink schema
				},
			],
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
				{
					type: 'code',
					name: 'myCodeField',
					title: 'Code with all options',
					options: {
						language: 'javascript',
						languageAlternatives: [
							{ title: 'Javascript', value: 'javascript' },
							{ title: 'HTML', value: 'html' },
							{ title: 'CSS', value: 'css' },
						],
						withFilename: true,
					},
					validation: (Rule) =>
						Rule.custom((value: any) => {
							if (!value.language) {
								return 'Language is required.';
							}
							return true;
						}),
				},
			],
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'faqs',
			title: 'FAQs',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'faqs' }] }],
		}),

		defineField({
			name: 'affiliateBanners',
			title: 'Affiliate Banners',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'affiliateLink' }], // References the affiliateLink schema
				},
			],
		}),

		defineField({
			name: 'summary',
			title: 'Summary of Article (approx. 50 words)',
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
					},
				},
			],
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'summaryShort',
			title: 'Short Summary (approx. 25 words)',
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
					},
				},
			],
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'description',
			title: 'Description (min 25 char - max 155 char)',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: 'author',
			title: 'Author',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'author' } }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'views',
			title: 'Views',
			type: 'number',
			description: 'The number of times this post has been viewed.',
			validation: (Rule) => Rule.min(0),
		}),
	],
});

export default post;
