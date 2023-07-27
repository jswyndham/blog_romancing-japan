<<<<<<< HEAD:sanity/schemas/youtube.ts
import getYouTubeID from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Preview = (props) => {
  const { url, renderDefault } = props;
  if (!url) {
    return <div>Missing YouTube URL</div>;
  }
  const id = getYouTubeId(url);
  return (
    <div>
      // 👇 Renders the default preview UI
      {renderDefault({ ...props, title: "YouTube Embed" })}
      // 👇 Renders the video preview below
      <LiteYouTubeEmbed id={id} />
    </div>
  );
=======
import React from "react";
import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'



const YouTubePreview = ({value}) => {
  const id = getYouTubeId(value.url)
  const url = `https://www.youtube.com/embed/${id}`;
  if(!id) {return <div>Missing YouTube URL</div>}

  return (
  <iframe 
  title="YouTube Preview"
  width="560" 
  height="315" 
  src={value.url}
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  />
  )
>>>>>>> 4aead2c688d47236fe222c720cecd0e5d5a9f99e:sanity/schemas/youtube.js
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
