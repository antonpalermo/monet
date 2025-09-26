import { createBrowserRouter } from "react-router"

import { HomePage } from "@/components/home-page"

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> }
])
