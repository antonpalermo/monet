import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"

import "./index.css"
import routes from "./routes"
import { SessionProvider } from "./contexts/session"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <SessionProvider>
      <RouterProvider router={routes} />
    </SessionProvider>
  </StrictMode>
)
