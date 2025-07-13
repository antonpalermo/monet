import { createBrowserRouter } from "react-router"

import App from "./components/app"
import Dashboard from "./components/dashboard"
import Transactions from "./components/transactions"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { index: true, element: <App /> },
      { path: "/transactions", element: <Transactions /> }
    ]
  }
])

export default routes
