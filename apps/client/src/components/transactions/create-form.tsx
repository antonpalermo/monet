import type z from "zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TRANSACTION_FORM_SCHEMA } from "@/contexts/transaction-context"
import { DialogFooter, DialogClose } from "@/components/ui/dialog"

export function CreateTransactionForm() {
  const form = useForm<z.infer<typeof TRANSACTION_FORM_SCHEMA>>({
    defaultValues: {
      name: ""
    }
  })

  async function handleSubmit(data: z.infer<typeof TRANSACTION_FORM_SCHEMA>) {
    console.log(data)
  }

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
                  <Input placeholder="Apples" {...field} />
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
