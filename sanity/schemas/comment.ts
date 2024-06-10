import { defineType } from 'sanity';

export const comment = defineType({
	name: 'comment',
	title: 'Comment',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			readOnly: true,
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string',
			readOnly: true,
		},
		{
			name: 'comment',
			title: 'Comment',
			type: 'text',
			readOnly: true,
		},
		{
			name: 'post',
			title: 'Post',
			type: 'reference',
			to: [{ type: 'post' }],
		},
		{
			name: 'isPinned',
			title: 'Pinned',
			type: 'boolean',
			options: {
				layout: 'checkbox',
			},
		},
		{
			name: 'likes',
			title: 'Likes',
			type: 'number',
			initialValue: 0,
		},
		{
			name: 'dislikes',
			title: 'Dislikes',
			type: 'number',
			initialValue: 0,
		},
	],
});
