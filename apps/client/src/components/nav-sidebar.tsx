import {
  Sidebar,
  SidebarMenu,
  SidebarHeader,
  SidebarContent
} from "@/components/ui/sidebar"
import { LedgerSwitch } from "@/components/ledger/switch"

export function NavSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <LedgerSwitch />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent />
    </Sidebar>
  )
}
