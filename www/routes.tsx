import { createBrowserRouter } from "react-router"

import { TransactionsPage } from "@/components/pages/transactions"
import { DashboardPage } from "@/components/pages/dashboard"

import { DashboardLayout } from "@/components/layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: "/transactions",
        element: <TransactionsPage />
      }
    ]
  }
])
