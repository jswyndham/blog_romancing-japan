import { defineField, defineType } from 'sanity'
import YouTubePreview from '@/app/components/YoutubePreview'

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'YouTube video title'
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'YouTube video URL'
    })
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url'
    }
  },
  components: {
    preview: <YouTubePreview />
  }
})