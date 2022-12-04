import { AnimatePresence } from "framer-motion";
import { Suspense, useState } from "react";
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
import dynamic from "next/dynamic";

const Home = ({
  data,
  quotes,
  jobs,
}: {
  data: GlobalDatum;
  quotes: Quote[];
  jobs: Job[];
}) => {
  const [isLoading, setIsLoading] = useState(false);

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const DynamicHero = dynamic(() => import("../components/Hero"), {
    suspense: true,
  });
  const DynamicAbout = dynamic(() => import("../components/About"), {
    suspense: true,
  });
  const DynamicExperience = dynamic(() => import("../components/Experience"), {
    suspense: true,
  });
  const DynamicProjects = dynamic(() => import("../components/Projects"), {
    suspense: true,
  });
  const DynamicContact = dynamic(() => import("../components/Contact"), {
    suspense: true,
  });

  return (
    <div className="bg-background_1 dark:bg-dark-background_1">
      <Head>
        <title>{data.name}</title>
        <meta
          name="description"
          content={`${data.name}'s portfolio. Has all the info on ${data.name}'s career. This portfolio was made with Next js`}
        />
      </Head>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen
            key="splash-container"
            setIsLoading={setIsLoading}
            randomQuote={randomQuote}
          />
        ) : (
          <Suspense>
            <Layout data={data}>
              <DynamicHero
                name={data.name}
                shortIntro={data.shortIntroduction}
                introduction={data.introduction}
              />
              <DynamicAbout
                aboutMe={data.about}
                skillsData={data.skillsHighlight}
              />
              <DynamicExperience jobs={jobs} />
              <DynamicProjects projectsData={data.projectsHighlight} />
              <DynamicContact content={data.contactText} />
              <SideBar socials={data.socials} />
            </Layout>
          </Suspense>
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
