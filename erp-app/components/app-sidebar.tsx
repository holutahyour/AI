"use client"

import * as React from "react"
import {
  Building2,
  CreditCard,
  FileText,
  Home,
  PieChart,
  Receipt,
  Settings,
  Users,
  BarChart3,
  TrendingUp,
  DollarSign,
  Calendar,
  Search,
  HelpCircle,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "John Doe",
    email: "john.doe@company.com",
    avatar: "/avatars/john-doe.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Home,
    },
    {
      title: "Accounts Payable",
      url: "#",
      icon: CreditCard,
      isActive: true,
    },
    {
      title: "Accounts Receivable",
      url: "#",
      icon: Receipt,
    },
    {
      title: "General Ledger",
      url: "#",
      icon: FileText,
    },
    {
      title: "Financial Reports",
      url: "#",
      icon: BarChart3,
    },
    {
      title: "Vendor Management",
      url: "#",
      icon: Building2,
    },
    {
      title: "Analytics",
      url: "#",
      icon: PieChart,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Help & Support",
      url: "#",
      icon: HelpCircle,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <Building2 className="size-5!" />
                <span className="text-base font-semibold">ERP Financial</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
