import { ChevronsUpDown, Plus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import {
  useSidebar,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { LedgerCreateDialog } from "@/components/ledger/create-dialog"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

export type LedgerSwitchProps = {
  ledgers: {
    id: string
    name: string
    owner: string
    dateCreated: Date
    dateUpdated: Date
  }[]
}

export function LedgerSwitch({ ledgers }: LedgerSwitchProps) {
  const { isMobile } = useSidebar()

  const ledgerList = ledgers.map(ledger => (
    <DropdownMenuItem key={ledger.id} className="gap-2 p-2">
      <div className="flex size-6 items-center justify-center rounded-md border">
        {/* <team.logo className="size-3.5 shrink-0" /> */}
      </div>
      {ledger.name}
    </DropdownMenuItem>
  ))

  return (
    <SidebarMenuItem>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              Personal
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Ledgers
            </DropdownMenuLabel>
            {ledgerList}
            <DropdownMenuSeparator />
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Plus className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">
                  New Ledger
                </div>
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <LedgerCreateDialog />
      </Dialog>
    </SidebarMenuItem>
  )
}
