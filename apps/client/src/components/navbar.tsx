import { Link } from "react-router"
import { Button } from "./ui/button"

type Route = {
  href: string
  label: string
}

export default function Navbar() {
  const routes: Route[] = [
    {
      href: "/",
      label: "Dashboard"
    },
    {
      href: "/transactions",
      label: "Transactions"
    }
  ]

  return (
    <nav>
      {routes.map(route => (
        <Link key={route.label} to={route.href}>
          <Button variant="ghost">{route.label}</Button>
        </Link>
      ))}
    </nav>
  )
}
