import Teams from "@/_components/Teams";
import { sleep } from "@/_utils/common-utils";
import Link from "next/link";
import React from "react";

export default async function TeamsSlotPage() {
  await sleep(3500);
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[500px] flex items-center gap-4 justify-center">
      <span>Temas</span>
      <Link href={`/parallel/all`} className="text-blue-400">
        All
      </Link>
    </div>
  );
}
