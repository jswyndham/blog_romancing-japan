import { defineField, defineType } from 'sanity';

export const affiliateLinkMobileSchema = defineType({
	name: 'affiliateLinkMobile',
	title: 'Affiliate Link Mobile',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'altText',
			title: 'Alt Text',
			type: 'string',
		}),
		defineField({
			name: 'link',
			title: 'Affiliate Link',
			type: 'url',
		}),
	],
});
