'use client';

import { Flex, Text } from '@sanity/ui';
import YouTubePlayer from 'react-player/youtube';

export function YouTubePreview(props) {
	// 'props' contains a property 'url' which is a string URL
	const { url } = props;

	return (
		<Flex padding={3} align="center" justify="center">
			{typeof url === 'string' ? (
				<YouTubePlayer url={url} />
			) : (
				<Text>Add a YouTube URL</Text>
			)}
		</Flex>
	);
}
