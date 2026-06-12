"use client";

import { Suspense } from "react";
import RoleQuestionsContent from "@/components/role-questions";

export default function RoleQuestionsPage() {
  return (
    <Suspense
      fallback={
        <div className="text-sm text-muted-foreground">
          Loading questions...
        </div>
      }
    >
      <RoleQuestionsContent />
    </Suspense>
  );
}
