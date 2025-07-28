import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription
} from "@/components/ui/dialog"
import { LedgerCreateForm } from "@/components/ledger/create-form"

export function LedgerCreateDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New ledger</DialogTitle>
        <DialogDescription>Create new blank ledger</DialogDescription>
      </DialogHeader>
      <LedgerCreateForm />
    </DialogContent>
  )
}
