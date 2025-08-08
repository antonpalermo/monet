import { createBrowserRouter } from "react-router"

import { Transactions } from "@/components/transactions"

import { AuthLayout } from "@/components/auth"
import { DashboardLayout } from "@/components/layouts/dashboard"

import App from "./components/app"
import { SignIn } from "@/components/auth/sign-in"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <App /> },
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
