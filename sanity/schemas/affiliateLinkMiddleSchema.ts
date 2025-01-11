import { defineField, defineType } from 'sanity';

export const affiliateLinkMiddleSchema = defineType({
	name: 'affiliateLinkMiddle',
	title: 'Affiliate Link Middle',
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
			name: 'imageUrl',
			title: 'Image URL',
			type: 'url',
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
		defineField({
			name: 'trackingPixel',
			title: 'Tracking Pixel URL',
			type: 'url',
			description:
				'Optional: URL for the hidden tracking pixel if provided by the affiliate',
			options: {
				isOptional: true,
			},
		}),
	],
});
