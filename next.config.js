const { withPayload } = require("@payloadcms/next-payload");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
};

module.exports = withPayload(nextConfig, {
  configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),
  cssPath: path.resolve(__dirname, "./src/payload/payload.css"),
  payloadPath: path.resolve(__dirname, "./src/payload/payload-client.ts"),
});
