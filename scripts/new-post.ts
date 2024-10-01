#!/usr/bin/env bun
import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "node:path";

import { confirm, intro, isCancel, log, outro, text } from "@clack/prompts";

import { root } from "./utils";

const posts = path.resolve(root, "data", "posts");
const template = path.resolve(root, "templates", "template.mdx");

const checkCancel = (value: unknown | symbol): value is symbol => {
  if (isCancel(value) || value === undefined) {
    log.error("Operation cancelled");
    return true;
  }
  return false;
};

const getDateStr = () => {
  let date = new Date();
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  return date.toISOString().split("T")[0];
};

const main = async () => {
  intro(`Creating new post...`);
  log.info(`Posts directory: ${posts}`);

  const title = await text({
    message: "What is the title of the post?",
  });
  if (checkCancel(title)) process.exit(0);

  const category = await text({ message: "Post category?" });
  if (checkCancel(category)) process.exit(0);

  const raw_tags = await text({ message: "Post tags? (comma separated)" });
  if (checkCancel(raw_tags)) process.exit(0);
  const tags = raw_tags.split(",").map((tag) => tag.trim());

  const date = getDateStr();
  log.info(`Date: ${date}`);

  const useFolder = await confirm({
    message: "Use separate folder for post?",
    initialValue: false,
  });
  if (checkCancel(useFolder)) process.exit(0);

  const filename = `${title.toLowerCase().replaceAll(" ", "-")}.mdx`;
  const filepath = path.resolve(posts, filename);

  const confirmed = await confirm({
    message: `Going to create post at: ${posts}, continue?`,
  });
  if (checkCancel(confirmed) || !confirmed) process.exit(0);

  const templateContent = readFileSync(template).toString();
  const content = templateContent
    .replaceAll("{{title}}", title)
    .replaceAll("{{date}}", date)
    .replaceAll("{{category}}", category)
    .replaceAll('"{{tags}}"', JSON.stringify(tags));

  if (existsSync(filepath)) {
    log.error(`Post already exists: ${filepath}`);
    process.exit(1);
  }

  outro(`Post created: ${filepath}`);
  writeFileSync(filepath, content);
};

main().then();
