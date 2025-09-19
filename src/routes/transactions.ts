import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { Hono } from "hono"
import { transactions } from "../database/schemas/transactions"
import { HTTPException } from "hono/http-exception"

const route = new Hono<{ Bindings: CloudflareBindings }>()

route.post("/create", async c => {
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
      JSON.stringify({ data: result[0], msg: "successfully created" }),
      { status: 201 }
    )
  } catch (error) {
    throw new HTTPException(500, {
      message: "unable to create new transaction",
      cause: error
    })
  }
})

export default route
