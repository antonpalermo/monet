import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import { type Transaction } from "@/lib/schemas/transaction"

function parseTimestamp(timestamp: string) {
  const date = new Date(timestamp)

  const month = date.getUTCMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()

  let hours = date.getHours()
  const minutes = date.getMinutes()

  const currentHour = hours > 12 ? "PM" : "AM"
  hours = hours % 12
  hours = hours ? hours : 12

  const paddedMonth = `${month}`.padStart(2, "0")
  const paddedDay = `${day}`.padStart(2, "0")
  const paddedHours = `${hours}`.padStart(2, "0")
  const paddedMinutes = `${minutes}`.padStart(2, "0")

  return `${paddedMonth}-${paddedDay}-${year} ${paddedHours}:${paddedMinutes} ${currentHour}`
}

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
  }
]
