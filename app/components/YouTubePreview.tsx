import type { PreviewProps } from "sanity";
import { Flex, Text } from "@sanity/ui";
import YouTubePlayer from "react-player/youtube";

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
      <YouTubePlayer url={url} />
    </Flex>
  );
}
