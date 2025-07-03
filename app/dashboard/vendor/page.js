import Vendors from "@/components/Vendors";
import React, { Suspense } from "react";

const fetchVendors = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return "Downloaded vendors dependencies";
};

export const metadata = {
  title: "vendors",
};

export default async function VendorPage() {
  const vendorsDependencies = await fetchVendors();

  return (
    <div>
      <div>Vendor page</div>
      <div>{vendorsDependencies}</div>
      <Suspense fallback={<h1>Loading vendors....</h1>}>
        <Vendors />
      </Suspense>
    </div>
  );
}
