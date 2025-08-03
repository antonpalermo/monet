import { Button } from "@/components/ui/button"

export function Transactions() {
  return (
    <div className="w-full space-y-5">
      <div className="w-full inline-flex justify-between items-center">
        <h2 className="text-xl font-bold">Transactions</h2>
        <Button>New transaction</Button>
      </div>
    </div>
  )
}
