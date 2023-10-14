import type { PreviewProps } from "sanity";
import { Flex, Text } from "@sanity/ui";
import YouTubePlayer from "react-player/youtube";
import getYouTubeID from "get-youtube-id";

interface PreviewYouTubeProps extends PreviewProps {
  selection?: {
    url: string;
  };
}

export function YouTubePreview(props: PreviewYouTubeProps) {
  const { selection } = props;
  const url = selection?.url;
  return (
    <Flex padding={4} justify={"center"}>
      {url ? (
        <YouTubePlayer
          url={url}
          height="40vh"
          width="80vh"
          controls={true}
          className="bg-dark overflow-hidden"
        />
      ) : (
        <Text>Add a YouTube URL</Text>
      )}
    </Flex>
  );
}
