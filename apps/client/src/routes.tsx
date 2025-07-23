import { createBrowserRouter } from "react-router"

import App from "./components/app"
import Dashboard from "./components/dashboard"
import Transactions from "./components/transactions"
import SignIn from "./pages/signin"

import AuthLayout from "./components/auth-layout"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
