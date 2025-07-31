import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { RouterProvider } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "./index.css"
import routes from "./routes"

import { LedgerProvider } from "@/contexts/ledger"
import { SessionProvider } from "@/contexts/session"

const client = new QueryClient()

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <SessionProvider>
        <LedgerProvider>
          <RouterProvider router={routes} />
        </LedgerProvider>
      </SessionProvider>
    </QueryClientProvider>
  </StrictMode>
)
