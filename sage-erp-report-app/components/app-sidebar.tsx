"use client";

import { Sidebar } from "@/components/ui/sidebar";
import { Book } from "lucide-react";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";

export function AppSidebar() {
  return (
    <Sidebar>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <Book className="h-8 w-8" />
          <div>
            <p className="text-lg font-semibold">ERP Financial</p>
            <p className="text-sm text-muted-foreground">Accounting System</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <NavMain />
        <NavSecondary />
      </div>
    </Sidebar>
  );
}
