import { index, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { nanoid } from "../../helpers"

export const transactions = pgTable(
  "transactions",
  {
    id: text()
      .unique()
      .primaryKey()
      .$defaultFn(() => nanoid()),
    name: text().notNull(),
    amount: text().notNull(),
    dateCreated: timestamp().defaultNow(),
    dateUpdated: timestamp().$onUpdate(() => new Date())
  },
  table => [index("transaction_id_index").on(table.id)]
)
