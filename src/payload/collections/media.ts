import { CollectionConfig } from "payload/types";
import { z } from "zod";

export const mediaSchema = z.object({
  id: z.string(),
  title: z.string(),
  filename: z.string(),
  mimeType: z.string(),
  filesize: z.number(),
  width: z.number(),
  height: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  url: z.string(),
});
export type Media = z.infer<typeof mediaSchema>;

export const MediaCollection: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "title",
  },
  upload: {
    staticURL: "/cms/media",
    staticDir: "../../public/cms/media",
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
  ],
};
