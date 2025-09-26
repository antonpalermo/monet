import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

import "@/globals.css"
import { router } from "@/routes"

const queryClient = new QueryClient()

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
