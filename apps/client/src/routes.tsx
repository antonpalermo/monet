import { createBrowserRouter } from "react-router"

import App from "./components/app"
import Transactions from "./components/transactions"
import SignIn from "./pages/signin"

import { AuthLayout } from "@/components/layouts/auth"
import { DashboardLayout } from "@/components/layouts/dashboard"

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
