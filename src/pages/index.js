import React from "react"
import { useTheme } from "next-themes"

const Home = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex bg-slate-300 dark:bg-slate-900 w-full h-screen transition-all delay-500">
      Home
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 h-12 w-12 order-2 md:order-3"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >Toggle</button>
    </div>
  )
}

export default Home
