import type { ColumnDef } from "@tanstack/react-table"
import {
  ArrowUpDown,
  EllipsisVerticalIcon,
  PencilIcon,
  Trash2Icon
} from "lucide-react"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import { parseTimestamp } from "@/components/transactions/parse-timestamp"
import { type Transaction } from "@/lib/schemas/transaction"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"

export const columns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={val => table.toggleAllPageRowsSelected(!!val)}
        aria-label="Select all tranasction"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={val => row.toggleSelected(!!val)}
        aria-label="Select current row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      const formattedAmount = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP"
      }).format(amount)

      return <div>{formattedAmount}</div>
    }
  },
  {
    accessorKey: "dateCreated",
    header: "Date Created",
    cell: ({ row }) => <div>{parseTimestamp(row.getValue("dateCreated"))}</div>
  },
  {
    id: "action",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <EllipsisVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Trash2Icon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableHiding: false
  }
]
