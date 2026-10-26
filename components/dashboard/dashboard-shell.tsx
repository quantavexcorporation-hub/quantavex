"use client"

import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Sidebar, SidebarProvider, useSidebarState } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { DashboardProvider, useDashboard } from "@/components/dashboard/dashboard-provider"

function PortfolioMobileBar() {
  const { setMobileOpen } = useSidebarState()
  return (
    <div className="sticky top-0 z-40 flex h-12 items-center gap-3 border-b border-white/10 bg-[#08080a]/95 px-3 backdrop-blur-md lg:hidden">
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <p className="text-sm font-medium text-white">Udit Gour</p>
    </div>
  )
}

function ShellFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isPortfolio = pathname === "/portfolio"
  const { handleNotificationsClick } = useDashboard()

  return (
    <div className="flex h-[100dvh] overflow-hidden bg-[#08080a]">
      <Sidebar />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        {isPortfolio ? (
          <PortfolioMobileBar />
        ) : (
          <TopNavbar
            onNotificationsClick={handleNotificationsClick}
          />
        )}
        <main
          className={
            isPortfolio
              ? "min-h-0 flex-1 overflow-y-auto overflow-x-hidden lg:h-auto"
              : "min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-5 md:p-6"
          }
        >
          <div
            key={pathname}
            className={isPortfolio ? "min-h-full" : "dashboard-page mx-auto w-full min-w-0 max-w-[1600px]"}
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
