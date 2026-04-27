import { defineField, defineType } from "sanity";

export default defineType({
  name: "insight",
  title: "Insight",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      description: "Auto-generated from the title. Used in the URL.",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Consumer Goods", value: "Consumer Goods" },
          { title: "Life Sciences", value: "Life Sciences" },
          { title: "Strategy", value: "Strategy" },
          { title: "Trends", value: "Trends" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "teaser",
      title: "Teaser",
      type: "text",
      rows: 3,
      description: "One or two sentences shown in the insight card.",
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: "readTime",
      title: "Read time",
      type: "string",
      description: 'e.g. "5 min"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Featured insights appear in the top row.",
      initialValue: false,
    }),
    defineField({
      name: "contentType",
      title: "Content type",
      type: "string",
      description: "What happens when someone clicks Read more.",
      options: {
        list: [
          { title: "PDF — upload a document", value: "pdf" },
          { title: "External link — link to another URL", value: "link" },
        ],
        layout: "radio",
      },
      initialValue: "pdf",
    }),
    defineField({
      name: "pdf",
      title: "PDF file",
      type: "file",
      description: "Upload the PDF here. Only needed if Content type is PDF.",
      options: { accept: ".pdf" },
      hidden: ({ document }) => document?.contentType !== "pdf",
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      description: "Only needed if Content type is External link.",
      hidden: ({ document }) => document?.contentType !== "link",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tag",
      date: "publishedAt",
    },
    prepare({ title, subtitle, date }) {
      return {
        title,
        subtitle: `${subtitle ?? "—"} · ${date ?? "Unpublished"}`,
      };
    },
  },
  orderings: [
    {
      title: "Newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
