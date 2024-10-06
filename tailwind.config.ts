import daisyui from "daisyui";

import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";

import { dark, light } from "./themes";

import type { Config as DaisyUIConfig } from "daisyui";
import type { Config as TailWindConfig } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "./data/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      listStyleType: {
        "upper-alpha": "upper-alpha",
        "lower-alpha": "lower-alpha",
        "upper-roman": "upper-roman",
        "lower-roman": "lower-roman",
      },
    },
  },
  plugins: [daisyui, iconsPlugin({ collections: getIconCollections(["ph"]) })],
  daisyui: {
    base: false,
    themes: [{ light, dark }],
    logs: false,
  } satisfies DaisyUIConfig,
} satisfies TailWindConfig;

export default config;
