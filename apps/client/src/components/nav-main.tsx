import type { LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { Link } from "react-router"

export type Item = {
  label: string
  url: string
  icon: LucideIcon
}

export type NavMainProps = {
  items: Item[]
}

export function NavMain({ items }: NavMainProps) {
  const navItems = items.map(item => (
    <SidebarMenuItem key={item.label}>
      <SidebarMenuButton asChild>
        <Link to={item.url}>
          <item.icon />
          {item.label}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ))

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>{navItems}</SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
