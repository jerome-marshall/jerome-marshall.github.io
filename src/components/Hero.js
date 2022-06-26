import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Button from "./Button";
import { Link } from "react-scroll";
import ScrollToLink from "./ScrollToLink";
import { motion } from "framer-motion";
import {
  ThemeContext,
  themeChangeTransition,
  hoverAnimation,
} from "../data/ThemeContext";

const Hero = () => {
  const { isThemeChanging } = useContext(ThemeContext);
  const { data } = useContext(GlobalContext);
  const heroData = data.pageContent.find(
    (content) => content.__typename === "ComponentPageContentHeroPageContent"
  );

  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // duration: 1,
        ease: "easeInOut",
        delay: 1,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const textVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const titleVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="container h-screen">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex h-full w-full flex-col items-start justify-center "
      >
        <motion.p
          variants={textVariant}
          className="text-sm text-secondary dark:text-dark-secondary"
        >
          {heroData.pageTitle}
        </motion.p>
        <motion.h1
          variants={textVariant}
          className="text-clamp-lg font-bold text-text_900 dark:text-dark-text_900"
        >
          {data.name}.
        </motion.h1>
        <motion.h3
          variants={textVariant}
          className="text-clamp-md text-text_700 dark:text-dark-text_700"
        >
          {heroData.shortDescription}
        </motion.h3>
        <motion.p
          variants={textVariant}
          className="mt-5 max-w-[600px] text-text_500  dark:text-dark-text_500  md:text-lg"
        >
          {heroData.description}
        </motion.p>
        <motion.div className="z-10 cursor-pointer" variants={textVariant}>
          <motion.div
            className={`btn mt-12 self-center sm:self-start ${
              isThemeChanging && themeChangeTransition
            }`}
            whileHover={hoverAnimation}
          >
            <Link to="contact" smooth={true} duration={1000}>
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
