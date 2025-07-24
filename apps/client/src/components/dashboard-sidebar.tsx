import { LedgerSwitch } from "@/components/ledger-switch"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { Nav } from "@/components/nav"
import { BadgeDollarSign, LayoutDashboard } from "lucide-react"

export default function DashboardSidebar() {
  const data = {
    mainNav: [
      {
        label: "Dashboard",
        url: "/",
        icon: LayoutDashboard
      },
      {
        label: "Transactions",
        url: "/transactions",
        icon: BadgeDollarSign
      }
    ]
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <LedgerSwitch />
        <Nav items={data.mainNav} />
      </SidebarHeader>
      <SidebarContent></SidebarContent>
    </Sidebar>
  )
}
