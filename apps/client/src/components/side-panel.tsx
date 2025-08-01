import { LayoutDashboard, BookText } from "lucide-react"

import {
  Sidebar,
  SidebarMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from "@/components/ui/sidebar"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { LedgerSwitch } from "@/components/ledger/switch"

export function SidePanel() {
  const sidePanelData = {
    // main nav
    main: [
      {
        label: "Dashboard",
        url: "/",
        icon: LayoutDashboard
      },
      {
        label: "Transactions",
        url: "/transactions",
        icon: BookText
      }
    ]
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <LedgerSwitch />
        </SidebarMenu>
      </SidebarHeader>
      <NavMain items={sidePanelData.main} />
      <SidebarContent />
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
