import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft as IconQuote } from "react-icons/fa";
import { BsArrowRightCircle as IconGo } from "react-icons/bs";

const SplashScreen = () => {
  const wrapperVariant = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        // staggerChildren: 0.1,
        // delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
  };
  const containerVarient = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        // staggerChildren: 0.1,
        // delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        // staggerChildren: 0.1,
        // delayChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex h-screen w-screen items-center justify-center bg-dark-background_2"
    >
      <motion.div className="container flex items-center">
        <motion.div
          variants={containerVarient}
          className="relative flex w-full flex-col items-center justify-center bg-dark-background_2 px-12 py-16"
        >
          <motion.div className="flex flex-col items-center ">
            <div className="text-7xl text-dark-text_500">
              <IconQuote />
            </div>
            <p className="mt-8 text-4xl leading-normal dark:text-dark-text_700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quas odit est libero ipsam alias eius tempora, impedit aliquid ex
            </p>
            <div className="mt-14 mb-8 h-1 w-40 overflow-hidden rounded-xl bg-dark-secondary" />
            <p className="text-xl dark:text-dark-text_700">Bat Man</p>
          </motion.div>
        </motion.div>
        <motion.div className="cursor-pointer text-7xl text-dark-secondary">
          <IconGo />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
