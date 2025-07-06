import Analytics from "@/_components/Analytics";
import Teams from "@/_components/Teams";
import React from "react";

export default function ParallelLayout({ children, analytics, team }) {
  return (
    <>
      {children}
      <div className="grid grid-cols-2 gap-2 p-8">
        {analytics}
        {team}
      </div>
    </>
  );
}
