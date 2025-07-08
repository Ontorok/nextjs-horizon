import React from "react";
import data from "../../../data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  //const slugs = data.blogs.map((b) => ({ slug: b.id.toString() })); // without catch-all segments
  const slugs = data.blogs.map((blog) => [blog.id]); // with catch-all segments
  return slugs;
}

export default function BlogPage({ params: { slug } }) {
  const blog = data.blogs.find((b) => b.id == slug[0]);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex">
      <h3 className="flex-5">{blog.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
    </div>
  );
}
