import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaQuoteLeft as IconQuote } from "react-icons/fa";
import { BsArrowRightCircle as IconGo } from "react-icons/bs";

const SplashScreen = ({ setIsLoading }) => {
  const [showContine, setShowContinue] = useState(false);
  const [startIconAniamation, setStartIconAniamation] = useState(false);

  const iconControls = useAnimation();

  setTimeout(() => {
    setShowContinue(true);
  }, 5000);

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
  const iconGoVarient = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    animation: {
      opacity: 1,
      x: 0,
      scale: 1.05,
      transition: {
        duration: 1,
        yoyo: Infinity,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 1,
        yoyo: Infinity,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
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
      layout
    >
      <motion.div className="container flex items-center">
        <motion.div
          variants={containerVarient}
          className="relative flex w-full flex-col items-center justify-center bg-dark-background_2 px-12 py-16"
          layout
        >
          <motion.div className="flex flex-col items-center text-center" layout>
            <div className="text-7xl text-dark-text_500">
              <IconQuote />
            </div>
            <p className="mt-8 text-4xl leading-normal dark:text-dark-text_700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quas odit est libero ipsam alias eius tempora, impedit aliquid ex
            </p>
            <motion.div
              className={` flex w-40 items-center justify-center ${
                showContine ? "mt-10 mb-10 h-24" : "mt-14 mb-8 h-2"
              } transition-all duration-1000`}
            >
              <AnimatePresence
                exitBeforeEnter
                onExitComplete={() => {
                  setTimeout(() => {
                    setStartIconAniamation(true);
                  }, 1000);
                }}
              >
                {showContine ? (
                  <motion.div
                    className="h-full w-full cursor-pointer text-dark-secondary hover:text-dark-primary child-svg:h-full child-svg:w-full child-svg:transition-all child-svg:duration-500 "
                    variants={iconGoVarient}
                    initial="hidden"
                    animate={!startIconAniamation ? "visible" : "animation"}
                    key="icon-go"
                    // whileHover="hover"
                    layout
                    onClick={() => setIsLoading(false)}
                  >
                    <IconGo />
                  </motion.div>
                ) : (
                  <motion.div
                    className="h-1 w-full overflow-hidden rounded-xl bg-dark-secondary"
                    key="divider"
                    exit={{
                      opacity: 0,
                      x: -40,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.div>

            <motion.p className="text-xl dark:text-dark-text_700" layout>
              Bat Man
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
