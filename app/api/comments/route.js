import { comments } from "@/db";
import { headers } from "next/headers";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const q = searchParams.get("q");
  if (q) {
    const filteredComments = comments.filter(
      (c) =>
        c.name.toLowerCase().includes(q.toLowerCase()) ||
        c.email.toLowerCase().includes(q.toLowerCase()) ||
        c.body.toLowerCase().includes(q.toLowerCase())
    );
    return Response.json(filteredComments);
  }

  return Response.json(comments);
}

export async function POST(request) {
  const comment = await request.json();
  const nextComment = {
    ...comment,
    id: comments.length + 1,
  };
  comments.push(comment);
  return Response.json(nextComment, {
    headers: {
      "Content-Type": "application/text",
      ...request.headers,
    },
    status: 201,
  });
}
