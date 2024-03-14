import { Flex, Text } from '@sanity/ui';
import YouTubePlayer from 'react-player/youtube';

export const YouTubePreview = ({ url }) => {
	if (!url) {
		return <Text>No YouTube URL provided</Text>;
	}

	if (!YouTubePlayer.canPlay(url)) {
		return <Text>Invalid YouTube URL</Text>;
	}

	return (
		<Flex padding={3} align="center" justify="center">
			<YouTubePlayer url={url} />
		</Flex>
	);
};
