import { MDXComponents } from "mdx/types";
import { ComponentProps, FC } from "react";
import Link from "next/link";
import style from "./mdx-style.module.css";
import IntrinsicElements = React.JSX.IntrinsicElements;

type ElementFC<T extends keyof IntrinsicElements> = FC<ComponentProps<T>>;

const headingStyle =
  "relative before:absolute before:-left-8 before:opacity-30 hover:before:content-['#'] pt-5";

const h1: ElementFC<"h1"> = ({ children, id, ...props }) => (
  <h1 {...props} className={`text-3xl font-bold ${headingStyle}`}>
    <Link href={`#${id}`}>{children}</Link>
  </h1>
);
const h2: ElementFC<"h2"> = ({ children, ...props }) => (
  <h2 {...props} className={`text-2xl font-bold ${headingStyle}`}>
    <Link href={`#${children}`}>{children}</Link>
  </h2>
);
const h3: ElementFC<"h3"> = ({ children, ...props }) => (
  <h3 {...props} className={`text-xl font-bold ${headingStyle}`}>
    <Link href={`#${children}`}>{children}</Link>
  </h3>
);
const h4: ElementFC<"h4"> = ({ children, ...props }) => (
  <h4 {...props} className={`text-lg font-bold ${headingStyle}`}>
    <Link href={`#${children}`}>{children}</Link>
  </h4>
);
const p: ElementFC<"p"> = ({ children, ...props }) => (
  <p {...props} className="leading-7">
    {children}
  </p>
);

const a: ElementFC<"a"> = ({ children, href, ...props }) => (
  <a {...props} href={href} className="text-primary underline">
    {children}
  </a>
);

const blockquote: ElementFC<"blockquote"> = ({ children, ...props }) => (
  <blockquote
    {...props}
    className="border-l-4 border-primary bg-primary/20 px-5 py-4 font-medium text-primary-content"
  >
    {children}
  </blockquote>
);

const code: ElementFC<"code"> = ({ children, ...props }) => (
  <code {...props} className={`px-6 py-4 ${style.code}`}>
    {children}
  </code>
);

const pre: ElementFC<"pre"> = ({ children, ...props }) => (
  <pre {...props} className="rounded-2xl">
    {children}
  </pre>
);

const ol: ElementFC<"ol"> = ({ children, ...props }) => (
  <ol
    {...props}
    className="list-inside list-decimal [&_ol]:list-upper-alpha [&_ol_ol]:list-lower-alpha [&_ol_ol_ol]:list-upper-roman [&_ol_ol_ol_ol]:list-lower-roman"
  >
    {children}
  </ol>
);

const ul: ElementFC<"ul"> = ({ children, ...props }) => (
  <ul {...props} className="list-inside list-disc">
    {children}
  </ul>
);

const li: ElementFC<"li"> = ({ children, ...props }) => (
  <li {...props} className="leading-7 [&_li]:ml-5">
    {children}
  </li>
);

const MdxStyle = {
  h1,
  h2,
  h3,
  h4,
  p,
  a,
  blockquote,
  code,
  pre,
  ol,
  ul,
  li,
} as MDXComponents;

export default MdxStyle;
