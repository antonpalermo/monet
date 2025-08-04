import { PlusIcon } from "lucide-react"
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CreateTransactionForm } from "@/components/transactions/create-form"

export function CreateTransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          New transaction
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Transaction</DialogTitle>
          <DialogDescription>Creates a new transaction entry</DialogDescription>
        </DialogHeader>
        <CreateTransactionForm />
      </DialogContent>
    </Dialog>
  )
}
