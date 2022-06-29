import React, { createContext, useLayoutEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { GlobalContext, GlobalProvider } from "../data/GlobalContext";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import { AnimatePresence } from "framer-motion";

import { gql } from "@apollo/client";
import { getGlobalData, getQuotes } from "../data/graphql-client";
import Contact from "../components/Contact";
import SideBar from "../components/SideBar";
import SplashScreen from "../components/SplashScreen";
import { motion } from "framer-motion";

const Home = ({ data, quotes }) => {
  const [isLoading, setIsLoading] = useState(true);

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-background_1 dark:bg-dark-background_1">
      <GlobalProvider value={{ data }}>
        <AnimatePresence exitBeforeEnter>
          {isLoading ? (
            <SplashScreen
              key="splash-container"
              setIsLoading={setIsLoading}
              randomQuote={randomQuote}
            />
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
    const globalData = await getGlobalData();
    const quotes = await getQuotes();
    return { props: { data: globalData, quotes: quotes } };
  } catch (error) {
    console.error(error);
    return { props: { data: "error" } };
  }
}

export default Home;
