import { defineField, defineType } from 'sanity';

export const faqs = defineType({
	name: 'faqs',
	title: 'FAQs',
	type: 'document',
	fields: [
		defineField({
			name: 'question',
			title: 'Question',
			type: 'string',
		}),
		defineField({
			name: 'answer',
			title: 'Answer',
			type: 'text',
		}),
	],
});