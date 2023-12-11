import {
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
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
import { motion } from "framer-motion";
import clsx from "clsx";
import useDeviceMedia from "../hooks/useDeviceMedia";

const Home = ({
  data,
  quotes,
  jobs,
}: {
  data: GlobalDatum;
  quotes: Quote[];
  jobs: Job[];
}) => {
  const { isMobile } = useDeviceMedia();
  const [isLoading, setIsLoading] = useState(true);

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <div
      className="bg-background_1 dark:bg-dark-background_1"
      onMouseMove={handleMouseMove}
    >
      <Head>
        <title>{data.name}</title>
        <meta
          name="description"
          content={`${data.name}'s portfolio. Has all the info on ${data.name}'s career. This portfolio was made with Next js`}
        />
      </Head>

      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen
            key="splash-container"
            setIsLoading={setIsLoading}
            randomQuote={randomQuote}
          />
        )}
        <div className={clsx("w-full h-full", isLoading && "hidden")}>
          <motion.div
            className={clsx(
              "fixed h-full w-full transition-all duration-300",
              isMobile && "hidden",
            )}
            style={{
              background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--gradientColor) 10%, transparent 80%)`,
            }}
          />
          <Layout data={data} mousePosition={{ mouseX, mouseY }}>
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
        </div>
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
