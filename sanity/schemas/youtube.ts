// import React from "react";
import { defineType, defineField } from "sanity";
// import { YouTubePreview } from "../../app/components/YouTubePreview";

export default defineType({
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "URL",
    }),
  ],
});
