import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem
} from "@/components/ui/pagination"
import type { Updater } from "@tanstack/react-table"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export type TablePaginationProps = {
  pageCount: number
  currentPage: number
  nextPage: () => void
  canGetNextPage: () => boolean
  previousPage: () => void
  canGetPreviousPage: () => boolean
  setPageIndex: (i: Updater<number>) => void
}

export function TablePagination({
  pageCount,
  currentPage,
  nextPage,
  previousPage,
  canGetNextPage,
  canGetPreviousPage,
  setPageIndex
}: TablePaginationProps) {
  const getPageNumbers = () => {
    const pages: number[] = []
    const maxPageToDisplay = 5

    if (pageCount <= maxPageToDisplay) {
      // If total pages is less than or equal to 5, show all pages
      for (let i = 0; i < pageCount; i++) {
        pages.push(i)
      }
    } else {
      // Calculate the start page to keep current page centered
      let startPage = Math.max(
        0,
        currentPage - Math.floor(maxPageToDisplay / 2)
      )

      // Adjust if we're near the end
      if (startPage + maxPageToDisplay > pageCount) {
        startPage = pageCount - maxPageToDisplay
      }

      // Generate the page numbers
      for (let i = startPage; i < startPage + maxPageToDisplay; i++) {
        pages.push(i)
      }
    }

    return pages
  }

  const dynamicPageSelector = getPageNumbers().map(pageIndex => (
    <Button
      key={pageIndex}
      variant={currentPage === pageIndex ? "default" : "outline"}
      size="icon"
      onClick={() => setPageIndex(pageIndex)}
    >
      {pageIndex + 1}
    </Button>
  ))

  return (
    <Pagination className="justify-end">
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="outline"
            size="icon"
            onClick={previousPage}
            disabled={!canGetPreviousPage()}
          >
            <ChevronLeftIcon />
          </Button>
        </PaginationItem>
        <PaginationItem className="space-x-1">
          {dynamicPageSelector}
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={!canGetNextPage()}
          >
            <ChevronRightIcon />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
