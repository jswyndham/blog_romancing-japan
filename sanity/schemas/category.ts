import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Category Title',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
			validation: Rule => Rule.required()
		}),
		defineField({
			name: 'description',
			title: 'Category Description',
			type: 'text',
			validation: Rule => Rule.required()
		}),
	],
});
