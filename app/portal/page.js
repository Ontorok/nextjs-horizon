import Link from "next/link";
import React from "react";

export default function PortalPage() {
  return (
    <div className="flex gap-4">
      <Link href={`/login`} className="text-blue-400">
        Go to Login
      </Link>
      <Link href={`/portal/customer`} className="text-blue-400">
        Go to Customer
      </Link>
    </div>
  );
}
