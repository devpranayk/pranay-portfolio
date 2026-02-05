import { useContext, useEffect, useState } from "react"
import { themeContext } from "../context/themeContext"

const sections = ["intro", "about", "skills", "projects", "contact"]

export default function Navbar() {
  const { dark, toggleTheme } = useContext(themeContext)
  const [active, setActive] = useState("")

  useEffect(() => {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    if (entry.target.id === "intro") {
                      setActive("")
                    } else {
                      setActive(entry.target.id)
                    }
                  }
                })
              },
             {
                threshold: 0.3,
                rootMargin: "-120px 0px -40% 0px",
              }           
            )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="glass max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

        <h1 className="text-lg font-semibold">
          Pranay Kandikonda
        </h1>

        <div className="flex items-center gap-6 text-sm">

          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize transition
                ${
                  active === item
                    ? "text-accent font-medium"
                    : "hover:opacity-70"
                }`}
            >
              {item}
            </a>
          ))}

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
