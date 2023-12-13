import path from "path";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { MediaCollection } from "./collections/media";
import { PageCollection } from "./collections/page";
import { SocialCollection } from "./collections/social";

export default buildConfig({
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string,
  }),
  editor: slateEditor({}),
  admin: {
    bundler: webpackBundler(),
  },
  collections: [
    // Your collections here
    MediaCollection,
    PageCollection,
    SocialCollection,
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
