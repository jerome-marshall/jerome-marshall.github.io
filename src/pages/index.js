import React, { createContext } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { GlobalContext, GlobalProvider } from "../data/GlobalContext";
import Hero from "../components/Hero";

const Home = ({ data }) => {
  console.log("🚀 ~ file: index.js ~ line 8 ~ Home ~ data", data);

  return (
    <div className="">
      <GlobalProvider value={{ data }}>
        <Layout>
          <Hero />
        </Layout>
      </GlobalProvider>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "https://portfolio-strapi3-api.herokuapp.com/global-data"
    );
    return { props: { data: response.data } };
  } catch (error) {
    console.error(error);
    return { props: { data: "error" } };
  }
}

export default Home;
