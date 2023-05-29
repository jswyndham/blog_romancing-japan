import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'tag',
	title: 'Tag',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Tag Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
		}),
		defineField({
			name: 'description',
			title: 'Tag Description',
			type: 'text',
		}),
	],
});
