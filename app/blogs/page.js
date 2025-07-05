import React from "react";
import data from "../../data";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div>
      {data.map((blog) => (
        <div key={blog.id}>
          <h3>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}
