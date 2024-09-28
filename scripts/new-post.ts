#!/usr/bin/env bun

import path from "node:path";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { root } from "./utils";
import { confirm, intro, isCancel, log, outro, text } from "@clack/prompts";

const posts = path.resolve(root, "data", "posts");
const template = path.resolve(root, "templates", "template.mdx");

const checkCancel = (value: unknown | symbol): value is symbol => {
  if (isCancel(value)) {
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
    .replaceAll("{{date}}", date);

  if (existsSync(filepath)) {
    log.error(`Post already exists: ${filepath}`);
    process.exit(1);
  }

  outro(`Post created: ${filepath}`);
  writeFileSync(filepath, content);
};

main().then();
