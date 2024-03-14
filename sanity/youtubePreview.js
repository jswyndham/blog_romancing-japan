'use client';

import React from 'react';
import { Flex, Text } from '@sanity/ui';
import ReactPlayer from 'react-player';

export const YouTubePreview = ({ value }) => {
	return (
		<Flex direction="column" align="center" justify="center">
			{value && value.url ? (
				<ReactPlayer url={value.url} width="100%" />
			) : (
				<Text>Add a YouTube URL</Text>
			)}
		</Flex>
	);
};
