import type { MDXComponents } from "mdx/types";

const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...components,
});

export { useMDXComponents };
