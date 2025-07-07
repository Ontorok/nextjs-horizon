import Link from "next/link";
import React from "react";

export default function CustomerPortal() {
  return (
    <div>
      <Link href={`/login`}>Login</Link>
    </div>
  );
}
