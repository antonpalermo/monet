import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DialogFooter, DialogClose } from "@/components/ui/dialog"

import useLedger from "@/hooks/use-ledger"
import { LEDGER_FORM_SCHEMA } from "@/contexts/ledger-context"

export function LedgerCreateForm() {
  const { handleSubmit } = useLedger()

  const form = useForm<z.infer<typeof LEDGER_FORM_SCHEMA>>({
    defaultValues: {
      name: ""
    },
    resolver: zodResolver(LEDGER_FORM_SCHEMA)
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid gap-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Personal Ledger" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </div>
      </form>
    </Form>
  )
}
