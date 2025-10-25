"use client";

import * as React from "react"
import {
  IconBook,
  IconStar,
  IconCreditCard,
  IconDashboard,
  IconChartLine,
  IconClock,
  IconCash,
  IconDiscount,
  IconFileText,
  IconReceipt,
  IconBuildingBank,
  IconBox,
  IconShoppingCart,
  IconPencil,
  IconReportMoney,
  IconSettings,
  IconChevronDown,
  IconInnerShadowTop,
} from "@tabler/icons-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
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
    name: "John Smith",
    email: "admin",
    avatar: "/avatars/john-smith.jpg",
  },
  navMain: [
    {
      title: "ERP Financial",
      url: "#",
      icon: IconBook,
    },
    {
      title: "Favorites",
      url: "#",
      icon: IconStar,
    },
    {
      title: "Accounts Payable",
      icon: IconCreditCard,
      isCollapsible: true,
      items: [
        {
          title: "AP Dashboard",
          url: "#",
          icon: IconDashboard,
        },
        {
          title: "Vendor Performance",
          url: "#",
          icon: IconChartLine,
        },
        {
          title: "Payment Aging B...",
          url: "#",
          icon: IconClock,
        },
        {
          title: "Cash Flow Impact...",
          url: "#",
          icon: IconCash,
        },
        {
          title: "Early Discount Op...",
          url: "#",
          icon: IconDiscount,
        },
        {
          title: "Transaction Report",
          url: "#",
          icon: IconFileText,
        },
      ],
    },
    {
      title: "Accounts Receivable",
      icon: IconReceipt,
      isCollapsible: true,
      items: [],
    },
    {
      title: "Banking & Cash",
      icon: IconBuildingBank,
      isCollapsible: true,
      items: [],
    },
    {
      title: "Inventory Management",
      icon: IconBox,
      isCollapsible: true,
      items: [],
    },
    {
      title: "Purchase Orders",
      icon: IconShoppingCart,
      isCollapsible: true,
      items: [],
    },
    {
      title: "Order Entry",
      icon: IconPencil,
      isCollapsible: true,
      items: [],
    },
    {
      title: "Financial Reporting",
      icon: IconReportMoney,
      isCollapsible: true,
      items: [],
    },
    {
      title: "System Administration",
      icon: IconSettings,
      isCollapsible: true,
      items: [],
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
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">ERP Financial</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
