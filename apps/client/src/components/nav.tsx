import type { LucideIcon } from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { Link } from "react-router"

type Item = {
  label: string
  url: string
  icon: LucideIcon
  isActive?: boolean
}

export type NavProps = {
  items: Item[]
}

export function Nav({ items }: NavProps) {
  return (
    <SidebarMenu>
      {items.map(item => (
        <SidebarMenuItem key={item.label}>
          <SidebarMenuButton asChild isActive={item.isActive}>
            <Link to={item.url}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
