import React from 'react';
import { PortableText } from '@portabletext/react';
import ReactPlayer from 'react-player';

const serializers = {
	types: {
		youtube: ({ value }: any) => {
			const { url } = value;
			return <ReactPlayer url={url} />;
		},
	},
};

export default function CustomPortableText({ blocks }: any) {
	return <PortableText value={blocks} components={serializers} />;
}
