import React from "react"
import { useTheme } from "next-themes"
import Layout from "../components/Layout"
import axios from "axios"

const Home = ({data}) => {
console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ data", data)
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

export async function getStaticProps() {
  try {
    const response = await axios.get('https://portfolio-strapi3-api.herokuapp.com/global-data');
    return { props: { data: response.data }}
  } catch (error) {
    console.error(error);
    return { props: { data: "error" }}
  }
}

export default Home
