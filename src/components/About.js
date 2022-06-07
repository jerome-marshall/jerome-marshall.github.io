import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../data/GlobalContext";
import ReactMarkdown from "react-markdown";
import SkillLink from "./SkillLink";
import Image from "next/image";
import myImg from "../assets/me.jpg";
import { motion } from "framer-motion";

const About = () => {
  const { data } = useContext(GlobalContext);
  const aboutData = data.pageContent.find(
    (content) => content.__typename === "ComponentPageContentAboutPageContent"
  );

  const containerVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
  };

  const itemVariant = (index) => {
    return {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
      hover: {
        scale: 1.1,
      },
    };
  };

  const imgVariant = {
    hidden: {
      scale: 0.7,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="container py-20" id="about">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex h-full flex-col items-center justify-center"
      >
        <h3 className="self-center md:self-start">{aboutData.pageTitle}</h3>
        <div className="flex items-center md:gap-8 lg:gap-10 xl:gap-12">
          <div className="mt-7 flex w-full flex-col md:basis-2/3">
            <ReactMarkdown className="">{aboutData.description}</ReactMarkdown>

            <ul className="mt-4 grid grid-cols-2 sm:mr-auto sm:gap-x-32">
              {aboutData.skillset.map((skill, i) => (
                <motion.li
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true }}
                  variants={itemVariant(i)}
                  className="z-10 py-1"
                  key={skill.name}
                >
                  <SkillLink skill={skill} />
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            className="z-10"
            variants={imgVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative z-10 hidden h-[270px] w-[270px] shrink-0 overflow-hidden rounded-[50%] transition-all duration-500 hover:rounded-3xl md:block lg:hover:!scale-110">
              <div className="absolute z-10 h-full w-full bg-background_1/30 transition-all duration-500 hover:bg-background_1/0 dark:bg-dark-background_1/30 dark:hover:bg-dark-background_1/0"></div>
              <Image
                src={myImg}
                alt={`Picture of ${data.name}`}
                className="aspect-ratio-1/1"
                // layout="fixed"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
