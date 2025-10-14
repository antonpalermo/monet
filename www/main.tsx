import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

import "@/globals.css"
import "@fontsource-variable/inter"

import { router } from "@/routes"
import { TransactionProvider } from "@/components/providers/transaction"

const queryClient = new QueryClient()

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TransactionProvider>
        <RouterProvider router={router} />
      </TransactionProvider>
    </QueryClientProvider>
  </StrictMode>
)
