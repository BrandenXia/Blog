import type { Config as TailWindConfig } from "tailwindcss";
import type { Config as DaisyUIConfig } from "daisyui";
import daisyui from "daisyui";
import { light } from "./themes";
import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";

const config: TailWindConfig = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./data/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui, iconsPlugin({ collections: getIconCollections(["ph"]) })],
  daisyui: {
    logs: false,
    themes: [{ light }],
  } satisfies DaisyUIConfig,
};

export default config;
