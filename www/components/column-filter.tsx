import { Input } from "@/components/ui/input"
import type { Transaction } from "@/lib/schemas/transaction"
import type { Table } from "@tanstack/react-table"

export type ColumnFilterProps = {
  column: string
  table: Table<Transaction>
}

export function ColumnFilter({ column, table }: ColumnFilterProps) {
  return (
    <Input
      className="max-w-md"
      placeholder={`Search ${column}`}
      value={(table.getColumn(column)?.getFilterValue() as string) ?? ""}
      onChange={e =>
        table.getColumn(column)?.setFilterValue(e.currentTarget.value)
      }
    />
  )
}
