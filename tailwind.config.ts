import type { Config as TailWindConfig } from "tailwindcss";
import type { Config as DaisyUIConfig } from "daisyui";
import daisyui from "daisyui";
import { light } from "./themes";
import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";

const config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./data/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [daisyui, iconsPlugin({ collections: getIconCollections(["ph"]) })],
  daisyui: {
    logs: false,
    themes: [{ light }],
  } satisfies DaisyUIConfig,
} satisfies TailWindConfig;

export default config;
