import { CollectionConfig } from "payload/types";
import { z } from "zod";
import { mediaSchema } from "./media";
import { socialSchema } from "./social";

export const socialArraySchema = z.array(
  z.object({ social: socialSchema, id: z.string() }),
);
export type SocialArray = z.infer<typeof socialArraySchema>;

export const pageSchema = z.object({
  id: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  metaKeywords: z.array(z.object({ keyword: z.string() })),
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  heroImage: mediaSchema,
  socials: socialArraySchema,
});
export type Page = z.infer<typeof pageSchema>;

export const PageCollection: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "metaTitle",
  },
  fields: [
    {
      name: "metaTitle",
      type: "text",
      required: true,
      label: "Meta Title",
    },
    {
      name: "metaDescription",
      type: "textarea",
      required: true,
      label: "Meta Description",
    },
    {
      name: "metaKeywords",
      type: "array",
      label: "Meta Keywords",
      fields: [
        {
          name: "keyword",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "heroTitle",
      type: "richText",
      required: true,
      label: "Hero Title",
    },
    {
      name: "heroSubtitle",
      type: "richText",
      required: true,
      label: "Hero Subtitle",
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Hero Image",
    },
    {
      name: "socials",
      type: "array",
      label: "Socials",
      fields: [
        {
          name: "social",
          type: "relationship",
          relationTo: "social",
          hasMany: false,
          required: true,
        },
      ],
    },
  ],
};
