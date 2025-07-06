import Link from "next/link";
import React from "react";

export default function AllTeamPage() {
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[500px] flex items-center gap-4 justify-center">
      <span>Temas</span>
      <Link href={`/parallel`} className="text-blue-400">
        Back
      </Link>
    </div>
  );
}
