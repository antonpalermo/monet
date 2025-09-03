import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { App } from "./components/app"
import { TransactionProvider } from "./components/providers/transaction-provider"

import "./globals.css"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </StrictMode>
)
