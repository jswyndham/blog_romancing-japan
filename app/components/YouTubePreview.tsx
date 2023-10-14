import type { PreviewProps } from "sanity";
import { Flex, Text } from "@sanity/ui";
import YouTubePlayer from "react-player/youtube";
import getYouTubeID from "get-youtube-id";

export const YouTubePreview = ({ value }: any) => {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing YouTube URL</div>;
  }
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

// interface PreviewYouTubeProps extends PreviewProps {
//   selection?: {
//     url: string;
//   };
// }

// export function YouTubePreview(props: PreviewYouTubeProps) {
//   const { selection } = props;
//   const url = selection?.url;
//   return (
//     <Flex padding={4} justify={"center"}>
//       {url ? (
//         <YouTubePlayer
//           url={url}
//           height="40vh"
//           width="80vh"
//           controls={true}
//           className="bg-dark overflow-hidden"
//         />
//       ) : (
//         <Text>Add a YouTube URL</Text>
//       )}
//     </Flex>
//   );
// }
