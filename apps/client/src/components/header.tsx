import Navbar from "./navbar"

export default function Header() {
  return (
    <header className="py-5">
      <div className="px-5 w-full inline-flex justify-between items-center">
        <h1>Monet</h1>
        <Navbar />
      </div>
    </header>
  )
}
