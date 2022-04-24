import React, { useState } from "react"
import DayNightToggle from "react-day-and-night-toggle"
import { FaBars } from "react-icons/fa"
import { useTheme } from "next-themes"


const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(true)

  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark")
    setIsDark(!isDark)
  }

  return (
    <nav className="flex w-full h-20 items-center">
      <div className="text-primary dark:text-dark-primary text-xl font-bold">JM</div>
      <div className="flex ml-auto items-center">
        <div className="">
          <DayNightToggle onChange={handleThemeChange} checked={isDark} size={30} />
        </div>
        <div className="ml-6 text-2xl">
          <FaBars />
        </div>
      </div>
    </nav>
  )
}

export default Header
