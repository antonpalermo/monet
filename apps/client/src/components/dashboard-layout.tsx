import { Navigate, Outlet } from "react-router"

import Header from "@/components/header"
import useSession from "@/hooks/useSession"

export default function DashboardLayout() {
  const { isAuthenticated, isLoading } = useSession()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!isAuthenticated) {
    return <Navigate to={"/auth/signin"} replace />
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
