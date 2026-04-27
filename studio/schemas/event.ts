import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "We're hosting", value: "hosting" },
          { title: "We're attending", value: "attending" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Milan, Italy"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date (display)",
      type: "string",
      description: 'How it appears on the site, e.g. "October 2026" or "15–17 October 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sortKey",
      title: "Sort key",
      type: "number",
      description: "Numeric date used for ordering — format YYYYMM (e.g. 202609 for September 2026).",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "External link",
      type: "url",
      description: "Optional — e.g. the conference website.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      type: "type",
      date: "date",
      location: "location",
    },
    prepare({ title, type, date, location }) {
      return {
        title,
        subtitle: `${type === "hosting" ? "Hosting" : "Attending"} · ${location} · ${date}`,
      };
    },
  },
  orderings: [
    {
      title: "Soonest first",
      name: "sortKeyAsc",
      by: [{ field: "sortKey", direction: "asc" }],
    },
  ],
});
