import Link from "next/link";
import React, { Suspense } from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="w-full h-48 bg-gray-500 flex justify-center items-center rounded-md mt-4">
        {children}
      </div>
    </div>
  );
}
