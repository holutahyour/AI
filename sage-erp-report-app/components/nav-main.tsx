"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Book,
  ChevronsUpDown,
  FileText,
  Home,
  Settings,
  Star,
  Wallet,
} from "lucide-react";

export function NavMain() {
  return (
    <>
      <a
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <Star className="h-5 w-5" />
        <span>Favorites</span>
      </a>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&[data-state=open]>svg]:rotate-180">
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              <span>Accounts Payable</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-8">
            <a
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-muted text-foreground"
            >
              AP Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Vendor Performance
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Payment Aging B...
            </a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <a
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <FileText className="h-5 w-5" />
        <span>Accounts Receivable</span>
      </a>
      <a
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <Home className="h-5 w-5" />
        <span>Banking & Cash</span>
      </a>
      <a
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <Settings className="h-5 w-5" />
        <span>System Administration</span>
      </a>
    </>
  );
}