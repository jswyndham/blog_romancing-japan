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
			name: 'content',
			title: 'Article Body (press shift + enter buttons for new paragraph, press ctrl + enter buttons for full edit view)',
			type: 'blockContent', // Update this line to use blockContent
			validation: (Rule) => Rule.required(),
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
	],
});

export default post;
