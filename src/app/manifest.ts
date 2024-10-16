import { MetadataRoute } from "next";

import config from "@data/config";

const manifest = (): MetadataRoute.Manifest => ({
  name: config.metadata.title.default,
  short_name: config.metadata.title.default,
  description: config.metadata.description,
  start_url: "/",
  display: "standalone",
  icons: [{ src: "/icon", sizes: "any", type: "image/png" }],
});

export default manifest;
