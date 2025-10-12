import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem
} from "@/components/ui/pagination"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export type TablePaginationProps = {
  pageCount: number
  nextPage: () => void
  canGetNextPage: () => boolean
  previousPage: () => void
  canGetPreviousPage: () => boolean
}

export function TablePagination({
  nextPage,
  previousPage,
  canGetNextPage,
  canGetPreviousPage,
}: TablePaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={!canGetNextPage()}
          >
            <ChevronLeftIcon />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="outline"
            size="icon"
            onClick={previousPage}
            disabled={!canGetPreviousPage()}
          >
            <ChevronRightIcon />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
