import { useEffect, useState } from "react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50
                 rounded-full p-3
                 backdrop-blur-md
                 bg-white/70 dark:bg-white/10
                 border border-white/40 dark:border-white/20
                 shadow-lg
                 transition hover:scale-110"
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
