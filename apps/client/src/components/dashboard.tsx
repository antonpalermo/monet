import { Outlet } from "react-router"
import Header from "./header"

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
