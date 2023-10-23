import { defineField, defineType } from 'sanity';
import { YouTubePreview } from '../../app/components/YoutubePreview';

export const youtube = defineType({
	name: 'youtube',
	title: 'Youtube',
	type: 'object',
	fields: [
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
		}),
	],
	preview: {
		select: {
			url: 'url',
		},
	},
	components: {
		preview: YouTubePreview,
	},
});
