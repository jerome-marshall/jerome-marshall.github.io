import React, { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { GlobalContext, GlobalProvider } from "../data/GlobalContext";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import { AnimatePresence } from "framer-motion";

import { gql } from "@apollo/client";
import { getData } from "../data/graphql-client";
import Contact from "../components/Contact";
import SideBar from "../components/SideBar";
import SplashScreen from "../components/SplashScreen";
import { motion } from "framer-motion";

const Home = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
    }, 7000);
  }, []);

  return (
    <div className="bg-dark-background_1">
      <GlobalProvider value={{ data }}>
        <AnimatePresence exitBeforeEnter>
          {isLoading ? (
            <SplashScreen key="splash-container" setIsLoading={setIsLoading} />
          ) : (
            <>
              <Layout>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <SideBar />
              </Layout>
            </>
          )}
        </AnimatePresence>
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
