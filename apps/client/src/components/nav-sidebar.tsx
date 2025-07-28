import { useEffect, useState } from "react"

import { LedgerSwitch } from "@/components/ledger/switch"
import {
  Sidebar,
  SidebarMenu,
  SidebarHeader,
  SidebarContent
} from "@/components/ui/sidebar"

export function NavSidebar() {
  const [ledgers, setLedgers] = useState([])

  async function getLedgers() {
    try {
      const request = await fetch("/api/ledger")
      setLedgers(await request.json())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLedgers()
  }, [])

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <LedgerSwitch ledgers={ledgers} />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent />
    </Sidebar>
  )
}
