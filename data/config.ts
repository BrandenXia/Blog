import { Config } from "@/config";

const layout: Config["layout"] = {
  headerHeight: 72,
};
const avatar: Config["avatar"] = {
  source: "github",
  userId: 63844776,
  alt: "BrandenXia",
};
const metadata: Config["metadata"] = {
  title: {
    template: "%s | BrandenXia's Blog",
    default: "BrandenXia's Blog",
  },
  description: "BrandenXia's Blog",
};

export { layout, avatar, metadata };
