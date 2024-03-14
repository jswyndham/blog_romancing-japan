import { defineType, defineArrayMember } from 'sanity';

const blockContent = defineType({
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

export default blockContent;
