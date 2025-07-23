import { Button } from "@/components/ui/button"
import { Link } from "react-router"

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <Link to={`${import.meta.env.VITE_BACKEND_URL}/api/auth/signin/google`}>
        <Button>Sign In with Google</Button>
      </Link>
    </div>
  )
}
