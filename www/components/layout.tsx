import { Outlet } from "react-router"

import { Navbar } from "@/components/navbar"

export function DashboardLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
