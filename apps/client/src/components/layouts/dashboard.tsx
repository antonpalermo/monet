import { Navigate, Outlet } from "react-router"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { useSession } from "@/hooks/use-session"
import { SidePanel } from "@/components/side-panel"

export function DashboardLayout() {
  const { isAuthenticated, isLoading } = useSession()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!isAuthenticated) {
    return <Navigate to={"/auth/signin"} replace />
  }

  return (
    <SidebarProvider>
      <SidePanel />
      <main className="px-5">
        <div className="py-5 space-y-5">
          <SidebarTrigger />
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}
