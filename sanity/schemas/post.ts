import { defineField, defineType } from 'sanity';

const post = defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),

		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'name' },
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
			fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
		}),

		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
		}),

		defineField({
			name: 'content',
			title: 'Article Body',
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
				// {
				//   name: "break",
				//   title: "Break",
				//   type: "hardBreak",
				// },
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
					],
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
		}),

		defineField({
			name: 'description',
			title: 'Description (copy short summary for SEO)',
			type: 'string',
		}),

		defineField({
			name: 'author',
			title: 'Author',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'author' } }],
		}),
	],
});

export default post;
