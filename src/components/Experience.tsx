"use client";

import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import parse from "html-react-parser";
import { type FC, useContext, useRef, useState } from "react";
import {
  ThemeContext,
  hoverAnimation,
  themeChangeTransition,
} from "~/contexts/ThemeContext";
import { jobs } from "~/data";
import { calculateRange } from "~/lib/utils";
import ExpAccordian from "./ExpAccordian";

const Experience: FC = () => {
  const { isThemeChanging } = useContext(ThemeContext);

  const pannelRef = useRef(null);

  const [openedDisclosure, setOpenedDisclosure] = useState(0);
  const toggleDisclosure = (index: number) => {
    setOpenedDisclosure(index);
  };

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
        // delay: 1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariant = (index: number) => {
    return {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1 + index * 0.1,
          duration: 0.5,
          ease: "easeInOut",
        },
      },
      hover: {
        scale: 1.1,
      },
    };
  };

  return (
    <div className="container max-w-[800px] py-20" id="experience">
      <motion.div
        className="flex h-full w-full flex-col items-center py-20"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3
          className={`md:self-start ${
            isThemeChanging && themeChangeTransition
          }`}
        >
          Where I&apos;ve worked
        </h3>
        <div className="mt-12 w-full">
          <Tab.Group vertical as="div" className="hidden md:flex">
            <Tab.List className="flex flex-col">
              {jobs.map((job, i) => (
                <motion.div
                  className="z-10 mr-8"
                  key={job.name + "Tab"}
                  variants={itemVariant(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Tab
                    key={job.name + "Tab"}
                    className={({ selected }) =>
                      clsx(
                        "z-10 w-full whitespace-nowrap border-l-[3px] p-3 text-left text-sm transition-all duration-500 hover:bg-background_3 hover:text-accent_hover dark:hover:bg-dark-background_3 dark:hover:text-dark-accent_hover",
                        selected
                          ? "border-secondary text-secondary dark:border-dark-secondary  dark:text-dark-secondary"
                          : "border-accent_border text-text_500 dark:border-dark-accent_border dark:text-dark-text_500",
                      )
                    }
                  >
                    {job.name}
                  </Tab>
                </motion.div>
              ))}
            </Tab.List>

            <Tab.Panels className="z-10">
              <AnimatePresence>
                {jobs.map((job, i) => (
                  <Tab.Panel
                    as={motion.div}
                    className="z-10"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    key={job.name + "Panel12"}
                  >
                    <h4 className="z-10 text-xl">
                      <span
                        className={`font-bold text-text_900 dark:text-dark-text_900 ${
                          isThemeChanging && themeChangeTransition
                        }`}
                      >
                        {job.designation}
                      </span>{" "}
                      <span
                        className={`text-secondary dark:text-dark-secondary ${
                          isThemeChanging && themeChangeTransition
                        }`}
                      >
                        @
                      </span>{" "}
                      <motion.a
                        className={`z-10 inline-block font-bold text-primary dark:text-dark-primary ${
                          isThemeChanging && themeChangeTransition
                        }`}
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={hoverAnimation}
                      >
                        {job.name}
                      </motion.a>
                    </h4>
                    <p
                      className={`mt-1 text-sm text-text_500 dark:text-dark-text_500 ${
                        isThemeChanging && themeChangeTransition
                      }`}
                    >
                      {calculateRange({
                        startDate: job.joiningDate,
                        endDate: job.leavingDate,
                        present: job.present,
                      })}
                    </p>
                    <div
                      className={`mt-6 text-text_700 descendant-li:mb-2 descendant-li:leading-loose dark:text-dark-text_700 ${
                        isThemeChanging && themeChangeTransition
                      }`}
                    >
                      {parse(job.workDescription)}
                    </div>
                  </Tab.Panel>
                ))}
              </AnimatePresence>
            </Tab.Panels>
          </Tab.Group>
          <div className="flex w-full flex-col overflow-hidden rounded-xl border-2 border-background_3 md:hidden dark:border-dark-background_3">
            {jobs.map((job, i) => {
              return (
                <ExpAccordian
                  key={job.name}
                  length={jobs.length}
                  pannelRef={pannelRef}
                  openedDisclosure={openedDisclosure}
                  toggleDisclosure={toggleDisclosure}
                  job={job}
                  index={i}
                />
              );
            })}
          </div>
        </div>
        {/* accordian */}
      </motion.div>
    </div>
  );
};

export default Experience;
