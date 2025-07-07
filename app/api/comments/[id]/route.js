import { comments } from "@/db";
import { redirect } from "next/navigation";

export async function GET(_request, { params }) {
  console.log({ _request, params });
  const commentId = parseInt(params.id);
  const comment = comments.find((c) => c.id === commentId);
  if (!comment) {
    redirect("/api/comments");
  }
  return Response.json(comment);
}
