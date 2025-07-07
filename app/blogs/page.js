import React from "react";
import data from "../../data";
import Link from "next/link";
import { slugify } from "@/_utils/common-utils";

export default function BlogsPage() {
  return (
    <div>
      {data.blogs.map((blog) => {
        const authorName = slugify(blog.author.name);
        return (
          <div key={blog.id}>
            <h3>
              <Link href={`/blogs/${blog.id}/${authorName}`}>{blog.title}</Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
