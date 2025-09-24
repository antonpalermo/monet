import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

import "@/globals.css"

import { App } from "@/components/app"

const queryClient = new QueryClient()

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)
