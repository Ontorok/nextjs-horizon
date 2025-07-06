import Analytics from "@/_components/Analytics";
import { sleep } from "@/_utils/common-utils";
import React from "react";

export default async function AnalyticsSlotPage() {
  await sleep(5000);

  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[500px] flex items-center justify-center">
      Analytics Slot
    </div>
  );
}
