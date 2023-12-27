"use client";

import { motion } from "framer-motion";
import { type FC, useContext } from "react";
import {
  ThemeContext,
  hoverAnimation,
  themeChangeTransition,
} from "~/contexts/ThemeContext";
import data from "~/data";

const Contact: FC = () => {
  const { isThemeChanging } = useContext(ThemeContext);

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
          className={`text-sm text-secondary lg:text-base dark:text-dark-secondary ${
            isThemeChanging && themeChangeTransition
          }`}
        >
          {"What's Next?"}
        </h6>
        <h3
          className={`md:text-4xl lg:my-3 lg:text-[50px] ${
            isThemeChanging && themeChangeTransition
          }`}
        >
          {"Get In Touch"}
        </h3>
        <p
          className={`mb-6 mt-4 max-w-xl lg:text-lg ${
            isThemeChanging && themeChangeTransition
          }`}
        >
          {data.contactText}
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
