import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'userEmail',
	title: 'User Email',
	type: 'document',
	fields: [
		defineField({
			name: 'firstName',
			title: 'First Name',
			type: 'string',
		}),
		defineField({
			name: 'lastName',
			title: 'Last Name',
			type: 'string',
		}),
    defineField({
		  name: 'email',
			title: 'Email Address',
			type: 'string',
    }),
	],
});
