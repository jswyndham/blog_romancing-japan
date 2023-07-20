const YouTubePreview = props => ({<pre>{JSON.stringify(props, null, 2)}</pre>})

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