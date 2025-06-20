import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "posts");

export async function getPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const file = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data } = matter(file);
    return { slug, title: data.title as string };
  });
}

export async function getPost(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);
  const processedContent = await remark().use(html).process(content);
  return {
    title: data.title as string,
    contentHtml: processedContent.toString(),
  };
}
