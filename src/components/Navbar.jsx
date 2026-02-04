import { useContext } from "react"
import { themeContext } from "../context/themeContext"

export default function Navbar() {

  const { dark , toggleTheme } = useContext(themeContext)

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="glass max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

        <h1 className="text-lg font-semibold">
          Pranay Kandikonda
        </h1>

        <div className="flex items-center gap-6 text-sm">

          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#skills" className="hover:opacity-70">Skills</a>
          <a href="#projects" className="hover:opacity-70">Projects</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>

          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600"
          >
            {dark ? "Light" : "Dark"}
          </button>

        </div>
      </div>
    </nav>
  )
}

