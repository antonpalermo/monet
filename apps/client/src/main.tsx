import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { RouterProvider } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "./index.css"
import routes from "./routes"

const client = new QueryClient()

import { TransactionProvider } from "@/components/transactions/provider"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <TransactionProvider>
        <RouterProvider router={routes} />
      </TransactionProvider>
    </QueryClientProvider>
  </StrictMode>
)
