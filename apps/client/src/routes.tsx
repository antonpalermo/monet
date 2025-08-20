import { createBrowserRouter } from "react-router"

import { Transactions } from "@/components/transactions"

const routes = createBrowserRouter([{ path: "/", element: <Transactions /> }])

export default routes
