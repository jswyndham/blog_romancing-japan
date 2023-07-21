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
};

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube URL',
    }
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: YouTubePreview
  }
}