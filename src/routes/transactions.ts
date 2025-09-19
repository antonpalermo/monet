import { Hono } from "hono"

const route = new Hono<{ Bindings: CloudflareBindings }>()

route.post("/create", c => {
  return c.text("ok")
})

export default route
