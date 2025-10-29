import { ProductType } from "../types/product";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const productsDirectory = join(process.cwd(), "_products");

export function getProductSlugs() {
  return fs.readdirSync(productsDirectory);
}

export function getProductBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(productsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as ProductType;
}

export function getAllProducts(): ProductType[] {
  const slugs = getProductSlugs();
  const pages = slugs
    .map((slug) => getProductBySlug(slug))
  return pages;
}
