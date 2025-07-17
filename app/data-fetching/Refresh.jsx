'use client';

import { useRouter } from 'next/navigation';

export default function Refresh() {
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };
  return (
    <button
      className="p-3 bg-slate-600 text-gray-200 rounded cursor-pointer"
      onClick={handleRefresh}
    >
      Refresh
    </button>
  );
}
