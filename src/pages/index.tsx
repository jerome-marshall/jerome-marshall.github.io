import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

import Head from "next/head";
import Contact from "../components/Contact";
import SideBar from "../components/SideBar";
import SplashScreen from "../components/SplashScreen";
import { getGlobalData, getJobs, getQuotes } from "../data/graphql-client";
import { GlobalDatum, Job, Quote } from "../types/types";

const Home = ({
  data,
  quotes,
  jobs,
}: {
  data: GlobalDatum;
  quotes: Quote[];
  jobs: Job[];
}) => {
  const [isLoading, setIsLoading] = useState(true);

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-background_1 dark:bg-dark-background_1">
      <Head>
        <title>{data.name}</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        {isLoading ? (
          <SplashScreen
            key="splash-container"
            setIsLoading={setIsLoading}
            randomQuote={randomQuote}
          />
        ) : (
          <Layout data={data}>
            <Hero
              name={data.name}
              shortIntro={data.shortIntroduction}
              introduction={data.introduction}
            />
            <About aboutMe={data.about} skillsData={data.skillsHighlight} />
            <Experience jobs={jobs} />
            <Projects projectsData={data.projectsHighlight} />
            <Contact content={data.contactText} />
            <SideBar socials={data.socials} />
          </Layout>
        )}
      </AnimatePresence>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const globalData = await getGlobalData();
    const quotes = await getQuotes();
    const jobs = await getJobs();
    return { props: { data: globalData, quotes, jobs } };
  } catch (error) {
    console.error(error);
    return { props: { data: "error" } };
  }
}

export default Home;
