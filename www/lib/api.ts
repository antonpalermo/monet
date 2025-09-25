import { hc } from "hono/client"
import { type BackendTypes } from "@server/index"

const client = hc<BackendTypes>('/')

export const api = client.api
