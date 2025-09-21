import { Context } from "hono"
import { HTTPException } from "hono/http-exception"

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import { transactions } from "../database/schemas/transactions"

export async function getTransactions(
  c: Context<{ Bindings: CloudflareBindings }>
) {
  const pgsql = neon(c.env.DATABASE_URL)
  const db = drizzle({ client: pgsql })

  try {
    const result = await db.select().from(transactions)

    return c.json({
      data: result,
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
