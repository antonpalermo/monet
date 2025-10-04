import { index, numeric, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { nanoid } from "../../helpers"

export const transactions = pgTable(
  "transactions",
  {
    id: text()
      .unique()
      .primaryKey()
      .$defaultFn(() => nanoid()),
    name: text().notNull(),
    amount: numeric({ mode: "number", precision: 100, scale: 2 }).notNull(),
    dateCreated: timestamp().defaultNow().notNull(),
    dateUpdated: timestamp()
      .$onUpdate(() => new Date())
      .notNull()
  },
  table => [index("transaction_id_index").on(table.id)]
)
