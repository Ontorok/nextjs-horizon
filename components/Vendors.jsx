import React from "react";

const fetchVendors = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  return "Here comes the vendors";
};

export default async function Vendors() {
  const vendors = await fetchVendors();
  return <div>{vendors}</div>;
}
