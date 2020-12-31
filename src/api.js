import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "src/mdx/posts")

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "")
  console.log(realSlug)
  console.log(realSlug)
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  console.log(slugs)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  return posts
}
