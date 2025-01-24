import { defineField, defineType } from 'sanity';

export const affiliateWidget = defineType({
	name: 'affiliateWidget',
	title: 'Affiliate Widget',
	type: 'object',
	fields: [
		defineField({
			name: 'scriptSrc',
			title: 'Script Source URL',
			type: 'url',
			description: 'The URL for the affiliate widget script',
		}),
		defineField({
			name: 'defaultDirection',
			title: 'Default Direction',
			type: 'string',
			description:
				'For example, a default travel destination like "Tokyo"',
		}),
		defineField({
			name: 'locale',
			title: 'Locale',
			type: 'string',
			description: 'Language or region settings (e.g., "en")',
		}),
	],
});
