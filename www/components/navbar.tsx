import { Button } from "@/components/ui/button"
import { Link } from "react-router"

export function Navbar() {
  return (
    <nav className="container px-3 mx-auto max-w-7xl">
      <div className="w-full inline-flex py-3 items-center justify-between">
        <span>Monet</span>
        <div>
          <Link to={"/transactions"}>
            <Button variant="ghost">Transactions</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
