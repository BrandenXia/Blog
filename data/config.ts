import { Config } from "@/config";

const config: Config = {
  headerLinks: [{ Home: "/" }, { Blogs: "/blogs" }, { About: "/about" }],
  layout: {
    headerHeight: 72,
  },
  avatar: {
    source: "github",
    userId: 63844776,
    alt: "BrandenXia",
  },
  metadata: {
    title: {
      template: "%s | BrandenXia's Blog",
      default: "BrandenXia's Blog",
    },
    description: "BrandenXia's Blog",
  },
};

export default config;
