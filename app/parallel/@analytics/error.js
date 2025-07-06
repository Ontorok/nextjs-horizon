"use client";
import React from "react";

export default function AnalyticsError({ error, reset }) {
  return (
    <div className="text-xl text-red-600 p-4 row-span-2 border border-gray-200 rounded h-[500px] flex items-center justify-center">
      {error.message}
    </div>
  );
}
