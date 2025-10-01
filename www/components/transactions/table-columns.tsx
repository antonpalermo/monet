import type { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

import { parseTimestamp } from "@/components/transactions/parse-timestamp"
import { type Transaction } from "@/lib/schemas/transaction"
import { ColumnHeader } from "../column-header"
import { CellActions } from "../transactions/cell-actions"

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
    header: ({ column }) => <ColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <div>{row.getValue("name")}</div>
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <ColumnHeader column={column} title="Amount" />,
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
    header: ({ column }) => (
      <ColumnHeader column={column} title="Date Created" />
    ),
    cell: ({ row }) => <div>{parseTimestamp(row.getValue("dateCreated"))}</div>,
    enableSorting: false
  },
  {
    id: "action",
    cell: () => <CellActions />,
    enableHiding: false
  }
]
