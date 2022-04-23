import React from 'react'
import { useTheme } from "next-themes"

const Layout = ({children}) => {
    const { theme, setTheme } = useTheme()

  return (
    <div>{children}</div>
  )
}

export default Layout