"use client"

import { usePathname } from "next/navigation"
import { Sidebar, SidebarProvider } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { DashboardProvider, useDashboard } from "@/components/dashboard/dashboard-provider"

function ShellFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isPortfolio = pathname === "/portfolio"
  const { handleNotificationsClick, handleSearch, searchResponse, searchStatus, searchError } = useDashboard()

  return (
    <div className="flex min-h-screen bg-[#08080f]">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        {!isPortfolio && (
          <TopNavbar
            onNotificationsClick={handleNotificationsClick}
            onSearch={handleSearch}
            searchResponse={searchResponse}
            searchStatus={searchStatus}
            searchError={searchError}
          />
        )}
        <main className={isPortfolio ? "h-screen overflow-y-auto" : "flex-1 overflow-y-auto p-5 md:p-6"}>
          <div
            key={pathname}
            className={isPortfolio ? "h-full" : "dashboard-page mx-auto max-w-[1600px]"}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardProvider>
        <ShellFrame>{children}</ShellFrame>
      </DashboardProvider>
    </SidebarProvider>
  )
}
