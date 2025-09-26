import { z } from "zod"

export const transcationSchema = z.object({
  name: z.string().min(3).max(150),
  amount: z.number()
})

export type Transaction = z.infer<typeof transcationSchema> & {
  id: string
  dateCreated: string | null
  dateUpdated: string | null
}
