import React from "react";
import data from "../../../data";

export function generateStaticParams() {
  const slugs = data.map((b) => ({ slug: b.id.toString() }));
  return slugs;
}

export default function BlogPage({ params: { slug } }) {
  const blog = data.find((b) => b.id == slug);
  return (
    <div className="flex">
      <h3 className="flex-5">{blog.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
    </div>
  );
}
