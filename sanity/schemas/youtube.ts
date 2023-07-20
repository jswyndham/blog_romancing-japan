const YouTubePreview = () => (
  <iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/FccyOPY_XUg" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  />
  );

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