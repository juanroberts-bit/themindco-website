import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "themindco",
  title: "TheMindCo Studio",

  projectId: "znohg64j",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Insights")
              .child(S.documentTypeList("insight").title("Insights")),
            S.listItem()
              .title("Events")
              .child(S.documentTypeList("event").title("Events")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
