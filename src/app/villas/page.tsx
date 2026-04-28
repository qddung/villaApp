"use client";

import { Suspense } from "react";
import VillasContent from "./VillasContent";

export default function VillasPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center pt-24">
          <div className="text-gray-400">Đang tải...</div>
        </div>
      }
    >
      <VillasContent />
    </Suspense>
  );
}
