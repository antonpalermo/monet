import { createBrowserRouter } from "react-router"

import { AuthLayout } from "@/components/auth"
import { SignIn } from "@/components/auth/sign-in"

import { DashboardLayout, Main } from "@/components/dashboard"
import { Transactions } from "@/components/transactions"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "/transactions", element: <Transactions /> }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ path: "signin", element: <SignIn /> }]
  }
])

export default routes
