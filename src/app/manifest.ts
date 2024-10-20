import config from "@data/config";

import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: config.metadata.title.default,
  short_name: config.metadata.title.default,
  description: config.metadata.description,
  start_url: "/",
  display: "standalone",
  icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
});

export default manifest;
