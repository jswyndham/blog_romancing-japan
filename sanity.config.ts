import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
//import schemas from "./sanity/schemas";
import { deskStructure } from "./deskStructure";
import { visionTool } from "@sanity/vision";
const schemas = (await import("./sanity/schemas")).default;

// This configures the sanity studio, where the model object is stored.
const config = defineConfig({
  projectId: "x0c10dda",
  dataset: "production",
  title: "Blog_Japan",
  apiVersion: "2023-04-25",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: { types: schemas },
});

export default config;
