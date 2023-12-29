"use client";

import { motion } from "framer-motion";
import parse from "html-react-parser";
import { type FC, useContext } from "react";
import { Link } from "react-scroll";
import {
  hoverAnimation,
  themeChangeTransition,
  ThemeContext,
} from "~/contexts/ThemeContext";
import { type IThemeContext } from "../types/types";
import { type Datum } from "~/payload/payload-types";
import lexicalToHTML from "~/lib/lexicalToHTML";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical";

type Props = {
  data: Datum;
};

const Hero = ({ data }: Props) => {
  const { isThemeChanging } = useContext<IThemeContext>(ThemeContext);

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
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={textVariant}
          className="text-clamp-lg font-bold text-text_900 dark:text-dark-text_900"
        >
          {data.fullName}.
        </motion.h1>
        <motion.h3
          variants={textVariant}
          className="text-clamp-md text-text_700 dark:text-dark-text_700"
        >
          {data.shortIntroduction}
        </motion.h3>
        {!!data.introduction_html && (
          <motion.div
            variants={textVariant}
            className="z-10 mt-5 max-w-[600px] child-p:text-text_500  md:child-p:text-lg  dark:child-p:text-dark-text_500"
          >
            {parse(data.introduction_html)}
          </motion.div>
        )}

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
