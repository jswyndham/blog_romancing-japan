interface YouTubeEmbedProps {
	url: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url }) => {
	let videoId: string | null;

	if (url.includes('youtu.be')) {
		videoId = url.split('/').pop()?.split('?')[0] || null;
	} else {
		videoId = new URL(url).searchParams.get('v');
	}

	const embedUrl = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="flex justify-center video-container">
			<iframe
				width="560"
				height="315"
				src={embedUrl}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</div>
	);
};
