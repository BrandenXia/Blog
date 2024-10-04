import path from "node:path";

const root = path.resolve(__dirname, "..");
const posts = path.resolve(root, "data", "posts");

export { root, posts };
