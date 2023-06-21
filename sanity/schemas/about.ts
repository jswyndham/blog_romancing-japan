import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "titleMain",
      title: "Main Title",
      type: "string",
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "array",
      of: [{ type: "reference", to: { type: "author" } }],
    }),

    defineField({
      name: "content",
      title: "Main Content",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          // Only allow these block styles
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
          // Only allow numbered lists
          lists: [
            { title: "Numbered", value: "number" },
            { title: "Bullet", value: "bullet" },
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
              { title: "Code", value: "code" },
            ],
          },
        },
      ],
    }),

    defineField({
      name: "subTitleOne",
      title: "Sub-Title One",
      type: "string",
    }),

    defineField({
      name: "subContentOne",
      title: "Sub-Content One",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          // Only allow these block styles
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
          // Only allow numbered lists
          lists: [
            { title: "Numbered", value: "number" },
            { title: "Bullet", value: "bullet" },
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
              { title: "Code", value: "code" },
            ],
          },
        },
      ],
    }),

    defineField({
      name: "subTitleTwo",
      title: "Sub-Title Two",
      type: "string",
    }),

    defineField({
      name: "subContentTwo",
      title: "Sub-Content Two",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          // Only allow these block styles
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
          // Only allow numbered lists
          lists: [
            { title: "Numbered", value: "number" },
            { title: "Bullet", value: "bullet" },
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
              { title: "Code", value: "code" },
            ],
          },
        },
      ],
    }),

    defineField({
      name: "subTitleThree",
      title: "Sub-Title Three",
      type: "string",
    }),

    defineField({
      name: "subContentThree",
      title: "Sub-Content Three",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          // Only allow these block styles
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
          // Only allow numbered lists
          lists: [
            { title: "Numbered", value: "number" },
            { title: "Bullet", value: "bullet" },
          ],
          marks: {
            // Only allow these decorators
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
              { title: "Code", value: "code" },
            ],
          },
        },
      ],
    }),

    defineField({
      name: "description",
      title: "Description (copy short summary for SEO)",
      type: "string",
    }),
  ],
});


