import { defineType, defineField } from 'sanity';
import { PlayIcon } from '@sanity/icons';

const youtube = defineType({
	name: 'youtube',
	type: 'object',
	title: 'YouTube Embed',
	icon: PlayIcon,
	fields: [
		defineField({
			name: 'url',
			type: 'url',
			title: 'YouTube video URL',
			description: 'Enter URL of the YouTube video',
		}),
	],
	preview: {
		select: {
			url: 'url',
		},
		prepare({ url }) {
			return {
				title: 'YouTube Video',
				subtitle: url,
				// Custom component rendering can be defined here, if necessary
			};
		},
	},
});

export default youtube;
