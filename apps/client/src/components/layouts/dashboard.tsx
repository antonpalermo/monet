import { Navigate, Outlet } from "react-router"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import useSession from "@/hooks/useSession"
import DashboardSidebar from "@/components/dashboard-sidebar"

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
      <DashboardSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
