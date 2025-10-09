import type { FC } from "react"

import { Button } from "../ui/button"
import { TableRow, TableCell } from "../ui/table"

import { columns } from "./columns"

export const UnavailableRecord: FC = () => {
  return (
    <TableRow>
      <TableCell colSpan={columns.length} className="text-center">
        No data available
        <Button>New Transaction</Button>
      </TableCell>
    </TableRow>
  )
}
