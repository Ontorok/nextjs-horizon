import Link from "next/link";
import React, { Suspense } from "react";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>
        <ul className="flex gap-5">
          <Link href={`/dashboard/employee`}>Employee</Link>
          <Link href={`/dashboard/customer`}>Customer</Link>
          <Link href={`/dashboard/vendor`}>Vendor</Link>
        </ul>
      </nav>
      <div className="w-full h-48 bg-gray-500 flex justify-center items-center rounded-md mt-4">
        {children}
      </div>
    </div>
  );
}
