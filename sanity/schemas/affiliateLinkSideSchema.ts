import { defineField, defineType } from 'sanity';

export const affiliateLinkSideSchema = defineType({
	name: 'affiliateLink',
	title: 'Affiliate Link Desktop Side',
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
			title: 'Image (GIF)',
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
