#!/usr/bin/env bun
import * as fs from "node:fs";
import path from "node:path";
import { globby } from "globby";
import OpenAI from "openai";

import { posts } from "./utils";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is required");

const openAI = new OpenAI({ apiKey: OPENAI_API_KEY });

const main = async () => {
  const all_posts = await globby(["*.mdx", "*/index.mdx"], { cwd: posts });

  const tasks = all_posts.map(async (file) => {
    const content = fs.readFileSync(path.resolve(posts, file)).toString();
    if (!content.includes("{{summary}}")) return;

    const client = await openAI.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        { role: "system", content: "Create a summary of this post" },
        { role: "user", content },
      ],
    });

    const summary = client.choices[0].message.content;

    const new_content = content.replace('"{{summary}}"', JSON.stringify(summary));
    fs.writeFileSync(path.resolve(posts, file), new_content);
  });

  await Promise.all(tasks);
};

main().then();
