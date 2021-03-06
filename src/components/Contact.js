import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Button from "./Button";
import { motion } from "framer-motion";
import {
  ThemeContext,
  themeChangeTransition,
  hoverAnimation,
} from "../data/ThemeContext";

const Contact = () => {
  const { isThemeChanging } = useContext(ThemeContext);

  const { data } = useContext(GlobalContext);
  const contactData = data.pageContent.find(
    (content) => content.__typename === "ComponentPageContentContactPageCotent"
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
        // delay: 0.2 + index * 0.2,
        when: "beforeChildren",
      },
    },
  };

  return (
    <div
      className={"container flex h-screen items-center justify-center"}
      id="contact"
    >
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center px-5 text-center"
      >
        <h6
          className={`text-sm text-secondary dark:text-dark-secondary lg:text-base ${
            isThemeChanging && themeChangeTransition
          }`}
        >
          {contactData.pageTitleIntro}
        </h6>
        <h3
          className={`md:text-4xl lg:my-3 lg:text-[50px] ${
            isThemeChanging && themeChangeTransition
          }`}
        >
          {contactData.pageTitle}
        </h3>
        <p
          className={`mt-4 mb-6 max-w-xl lg:text-lg ${
            isThemeChanging && themeChangeTransition
          }`}
        >
          {contactData.description}
        </p>
        <motion.a
          href="mailto:jeromemarshall0@gmail.com"
          className={`btn mt-4 inline-block ${
            isThemeChanging && themeChangeTransition
          }`}
          whileHover={hoverAnimation}
        >
          Say Hello
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
