import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { VendorAnalysisCard } from "@/components/vendor-analysis-card"
import { MetricsCards } from "@/components/metrics-cards"
import { QuickStatsWidget } from "@/components/quick-stats-widget"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "240px",
          "--header-height": "64px",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-6 py-6">
              <MetricsCards />
              <div className="grid gap-6 px-4 lg:px-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <VendorAnalysisCard />
                </div>
                <div className="lg:col-span-1">
                  <QuickStatsWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
