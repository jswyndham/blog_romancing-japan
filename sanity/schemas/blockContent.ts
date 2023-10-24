import { defineType, defineArrayMember } from 'sanity';
export const blockContent = defineType({
	name: 'blockContent',
	type: 'array',
	title: 'Body',
	of: [
		defineArrayMember({
			type: 'block',
		}),

		defineArrayMember({
			type: 'youtube',
		}),
	],
});
