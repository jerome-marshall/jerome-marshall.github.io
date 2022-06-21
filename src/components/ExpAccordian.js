import React, { useRef, useState, useContext } from "react";
import { Tab, Disclosure, Transition } from "@headlessui/react";
import ReactMarkdown from "react-markdown";
import { ThemeContext, themeChangeTransition } from "../data/ThemeContext";

const ExpAccordian = (props) => {
  const { isThemeChanging } = useContext(ThemeContext);

  return (
    <Disclosure
      className="bg-background_3 dark:bg-dark-background_3"
      defaultOpen={props.i === 0}
    >
      {({ open }) => {
        return (
          <>
            <Disclosure.Button
              key={props.job.companyName + "_tab"}
              className={`w-full px-4 py-3 text-base transition-all duration-500 ${
                open
                  ? " text-text-700 bg-background_3 text-lg font-bold dark:bg-dark-background_3 dark:text-dark-text_700"
                  : " bg-background_2 text-text_500 dark:bg-dark-background_2 dark:text-dark-text_500"
              } ${isThemeChanging && themeChangeTransition}`}
              onClick={() => props.toggleDisclosure(props.i)}
            >
              {props.job.companyName}
            </Disclosure.Button>

            <Transition
              className={"overflow-hidden"}
              enter="transition-[max-height] duration-500 linear"
              enterFrom=" max-h-0"
              enterTo={" max-h-[700px]"}
              leave="transition-[max-height] duration-500 linear"
              leaveFrom=" max-h-[700px]"
              leaveTo=" max-h-0"
            >
              <Disclosure.Panel
                key={props.job.companyName + "_panel"}
                className={` bg-background_2 px-4 py-5 dark:bg-dark-background_2 ${
                  open && props.i != props.length - 1
                    ? "border-b-2 border-background_3 dark:border-dark-background_3"
                    : ""
                } ${isThemeChanging && themeChangeTransition}`}
              >
                {({ close }) => {
                  props.openedDisclosure !== props.i && close();
                  return (
                    <div>
                      <p className="">
                        <span
                          className={`text-xl text-text_900 dark:text-dark-text_900 ${
                            isThemeChanging && themeChangeTransition
                          }`}
                        >
                          {props.job.designation}
                        </span>
                        <span className="">{" @ "}</span>
                        <span
                          className={`text-xl text-primary dark:text-dark-primary ${
                            isThemeChanging && themeChangeTransition
                          }`}
                        >
                          {props.job.companyName}
                        </span>
                      </p>
                      <p
                        className={`mt-1 mb-6 text-sm text-text_500 dark:text-dark-text_500 ${
                          isThemeChanging && themeChangeTransition
                        }`}
                      >
                        {props.job.range}
                      </p>
                      <ReactMarkdown
                        className={`descendant-li:text-text_700 descendant-li:dark:text-dark-text_700 ${
                          isThemeChanging && themeChangeTransition
                        }`}
                      >
                        {props.job.workDescription}
                      </ReactMarkdown>
                    </div>
                  );
                }}
              </Disclosure.Panel>
            </Transition>
          </>
        );
      }}
    </Disclosure>
  );
};

export default ExpAccordian;
