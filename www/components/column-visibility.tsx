import { ChevronDown } from "lucide-react"
import type { Column } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"
import type { Transaction } from "@/lib/schemas/transaction"

export type ColumnVisibilityProps = {
  column: Column<Transaction, unknown>[] | undefined
}

export function ColumnVisibility({ column }: ColumnVisibilityProps) {
  const content = column?.map(col => (
    <DropdownMenuCheckboxItem
      key={col.id}
      className="capitalize"
      checked={col.getIsVisible()}
      onChange={e => col.toggleVisibility(!!e)}
    >
      {col.id}
    </DropdownMenuCheckboxItem>
  ))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Columns <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{content}</DropdownMenuContent>
    </DropdownMenu>
  )
}
