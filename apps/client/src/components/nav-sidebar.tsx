import { useEffect, useState } from "react"
import { BadgeDollarSign, LayoutDashboard } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { LedgerSwitch } from "@/components/ledger-switch"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"

export function NavSidebar() {
  const [ledgers, setLedgers] = useState([])

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
        <LedgerSwitch ledgers={ledgers} />
        <NavMain items={data.mainNav} />
      </SidebarHeader>
      <SidebarContent />
    </Sidebar>
  )
}
