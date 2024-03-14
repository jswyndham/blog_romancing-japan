import React from 'react';
import { PortableText } from '@portabletext/react';
import ReactPlayer from 'react-player';
import { PortableTextTypeComponentProps } from '@portabletext/react';

const YouTubeSerializer: React.FC<
	PortableTextTypeComponentProps<{ url: string }>
> = ({ value }) => {
	return <ReactPlayer url={value.url} />;
};

const serializers = {
	types: {
		youtube: YouTubeSerializer,
	},
};

export default function Body({ blocks }: { blocks: any[] }) {
	return <PortableText value={blocks} components={serializers} />;
}
