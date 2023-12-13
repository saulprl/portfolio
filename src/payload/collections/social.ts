import { CollectionConfig } from "payload/types";
import { z } from "zod";

export const socialSchema = z.object({
  id: z.string(),
  socialNetwork: z.string(),
  url: z.string(),
});
export type Social = z.infer<typeof socialSchema>;

export const SocialCollection: CollectionConfig = {
  slug: "social",
  admin: {
    useAsTitle: "socialNetwork",
  },
  fields: [
    {
      name: "socialNetwork",
      type: "text",
      required: true,
      label: "Social Network",
    },
    {
      name: "url",
      type: "text",
      required: true,
      label: "URL",
    },
  ],
};
