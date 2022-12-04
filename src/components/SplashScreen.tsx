import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { BsArrowRightCircle as IconGo } from "react-icons/bs";
import { FaQuoteLeft as IconQuote } from "react-icons/fa";
import { Quote } from "../types/types";

const SplashScreen: FC<{
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  randomQuote: Quote;
}> = ({ setIsLoading, randomQuote }) => {
  const [showContine, setShowContinue] = useState(false);
  const [startIconAniamation, setStartIconAniamation] = useState(false);

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
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
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
      className="flex h-screen w-screen items-center justify-center overflow-auto bg-background_2 dark:bg-dark-background_2"
      layout
    >
      <motion.div className="container flex items-center">
        <motion.div
          variants={containerVarient}
          className="relative flex w-full flex-col items-center justify-center bg-background_2  py-16 dark:bg-dark-background_2 lg:px-12"
          layout
        >
          <motion.div className="flex flex-col items-center text-center" layout>
            <div className="text-5xl text-text_500 dark:text-dark-text_500 md:text-6xl lg:text-7xl">
              <IconQuote />
            </div>
            <p className="mt-8 text-3xl leading-normal text-text_700 dark:text-dark-text_700 lg:text-5xl lg:leading-normal">
              {randomQuote.quote}
            </p>
            <motion.div
              className={` flex w-40 items-center justify-center ${
                showContine
                  ? "md:h-22 mt-10 mb-10 h-20 lg:h-24"
                  : "mt-10 mb-8 h-2 lg:mt-14"
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
                    className="h-full w-full cursor-pointer text-secondary hover:text-primary child-svg:h-full child-svg:w-full child-svg:transition-all child-svg:duration-500 dark:text-dark-secondary dark:hover:text-dark-primary "
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
                    className="h-1 w-full overflow-hidden rounded-xl bg-secondary dark:bg-dark-secondary"
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

            <motion.p
              className="text-lg text-text_700 dark:text-dark-text_700 lg:text-xl"
              layout
            >
              {randomQuote.author}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
