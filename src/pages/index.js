import React from "react"
import { useTheme } from "next-themes"
import Layout from "../components/Layout"

const Home = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="">
      <Layout>
        <h1>Hello Next.js</h1>
      </Layout>

      {/* <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 w-12 order-2 md:order-3 h-screen"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >Toggle</button> */}
    </div>
  )
}

export default Home
