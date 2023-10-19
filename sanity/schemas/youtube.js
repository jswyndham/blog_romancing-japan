import { defineField, defineType } from 'sanity'

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

export async function YouTubePreview () {
//   const {value } = ""
//   const id = getYouTubeId(url)
//   if (!url) {
//     return <div>Missing YouTube URL</div>
//   }
  

  return (
    <div>
    <LiteYouTubeEmbed
       id="tlUMWDHWEQ4?si=ijpnlZWaA0FDhxHq" // Default none, id of the video or playlist
       adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
       params="9 & 16" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
       playlist={false} // Use  true when your ID be from a playlist
       playlistCoverId="tlUMWDHWEQ4?si=ijpnlZWaA0FDhxHq" // The ids for playlists did not bring the cover in a pattern to render so you'll need pick up a video from the playlist (or in fact, whatever id) and use to render the cover. There's a programmatic way to get the cover from YouTube API v3 but the aim of this component is do not make any another call and reduce requests and bandwidth usage as much as possibe
       title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
       noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
    />
  </div>
  )
}

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
    preview: YouTubePreview
  }
})