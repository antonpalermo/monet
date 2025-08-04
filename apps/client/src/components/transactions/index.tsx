import { CreateTransactionDialog } from "@/components/transactions/create-dialog"

export function Transactions() {
  return (
    <div className="w-full space-y-5">
      <div className="w-full inline-flex justify-between items-center">
        <h2 className="text-xl font-bold">Transactions</h2>
        <CreateTransactionDialog />
      </div>
    </div>
  )
}
