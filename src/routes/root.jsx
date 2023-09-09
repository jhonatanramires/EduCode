import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Root () {
  return (
    <main className="'dark text-foreground bg-background'" >
      <header>
        <NavBar />
      </header>
      <section className="bg-[url('/circuit-board.svg')] bg-repeat flex flex-wrap min-h-[calc(100vh-64px)]">
        <Outlet />
      </section>
    </main>
  )
}