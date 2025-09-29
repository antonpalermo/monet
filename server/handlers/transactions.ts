import { Context } from "hono"
import { HTTPException } from "hono/http-exception"

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import { transactions } from "../database/schemas/transactions"
import { sql } from "drizzle-orm"

export async function getTransactions(
  c: Context<{ Bindings: CloudflareBindings }>
) {
  const pgsql = neon(c.env.DATABASE_URL)
  const db = drizzle({ client: pgsql })

  try {
    const count = await db.$count(transactions)
    const result = await db.execute(sql`
      SELECT "id", "name", "amount", "dateCreated", "dateUpdated" FROM (
        SELECT ROW_NUMBER() OVER (ORDER BY "dateCreated" DESC) rn, *
      FROM transactions
    ) tmp
    WHERE rn BETWEEN 1 AND 40
    ORDER BY "dateCreated" DESC`)

    return c.json({
      count,
      data: result.rows,
      message: "all transactions successfully fetched"
    })
  } catch (error) {
    throw new HTTPException(500, {
      message: "unable to create new transaction",
      cause: error
    })
  }
}

export async function createTransaction(
  c: Context<{ Bindings: CloudflareBindings }>
) {
  // TODO: validate the request body
  const body = await c.req.json()

  const pgsql = neon(c.env.DATABASE_URL)
  const db = drizzle({ client: pgsql })

  try {
    const result = await db
      .insert(transactions)
      .values({
        name: body.name,
        amount: body.amount
      })
      .returning()

    return new Response(
      JSON.stringify({
        data: result[0],
        msg: "transaction successfully created"
      }),
      { status: 201 }
    )
  } catch (error) {
    throw new HTTPException(500, {
      message: "unable to create new transaction",
      cause: error
    })
  }
}
