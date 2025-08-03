import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription
} from "@/components/ui/dialog"
import { CreateTransactionForm } from "@/components/transactions/create-form"

export function CreateTransactionDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Transaction</DialogTitle>
        <DialogDescription>Creates a new transaction entry</DialogDescription>
      </DialogHeader>
      <CreateTransactionForm />
    </DialogContent>
  )
}
