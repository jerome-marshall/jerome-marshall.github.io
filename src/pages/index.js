import React, { createContext } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { GlobalContext, GlobalProvider } from "../data/GlobalContext";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

import { gql } from "@apollo/client";
import { getData } from "../data/graphql-client";
import Contact from "../components/Contact";
import SideBar from "../components/SideBar";

const Home = ({ data }) => {
  console.log("🚀 ~ file: index.js ~ line 15 ~ Home ~ data", data);
  return (
    <div className="">
      <GlobalProvider value={{ data }}>
        <SideBar />
        <Layout>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </Layout>
      </GlobalProvider>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const data = await getData();
    // const response = await axios.get(
    //   "https://portfolio-strapi3-api.herokuapp.com/global-data"
    // );
    return { props: { data: data } };
  } catch (error) {
    console.error(error);
    return { props: { data: "error" } };
  }
}

export default Home;
