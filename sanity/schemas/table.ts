import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Table Chart",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Table Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      // Include the table as a field
      // Giving it a semantic title
      name: "sizeChart",
      title: "Size Chart",
      type: "table",
    }),
  ],
});
