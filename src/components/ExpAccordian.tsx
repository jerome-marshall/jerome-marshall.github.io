import { Disclosure, Transition } from "@headlessui/react";
import React, { FC, ReactElement, Ref, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { themeChangeTransition, ThemeContext } from "../data/ThemeContext";
import { Job } from "../types/types";
import parse from "html-react-parser";

interface IExpAccordianProps {
  job: Job;
  length: number;
  pannelRef: React.MutableRefObject<null>;
  openedDisclosure: number;
  toggleDisclosure: (index: number) => void;
  index: number;
}

const ExpAccordian: FC<IExpAccordianProps> = ({
  index,
  job,
  toggleDisclosure,
  openedDisclosure,
}) => {
  const { isThemeChanging } = useContext(ThemeContext);

  return (
    <Disclosure
      as={"div"}
      className="bg-background_3 dark:bg-dark-background_3"
      defaultOpen={index === 0}
    >
      {({ open }) => {
        return (
          <>
            <Disclosure.Button
              key={job.name + "_tab"}
              className={`w-full px-4 py-3 text-base transition-all duration-500 ${
                open
                  ? " text-text-700 bg-background_3 text-lg font-bold dark:bg-dark-background_3 dark:text-dark-text_700"
                  : " bg-background_2 text-text_500 dark:bg-dark-background_2 dark:text-dark-text_500"
              } ${isThemeChanging && themeChangeTransition}`}
              onClick={() => toggleDisclosure(index)}
            >
              {job.name}
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
                key={job.name + "_panel"}
                className={` bg-background_2 px-4 py-5 dark:bg-dark-background_2 ${
                  open && index != length - 1
                    ? "border-b-2 border-background_3 dark:border-dark-background_3"
                    : ""
                } ${isThemeChanging && themeChangeTransition}`}
              >
                {({ close }) => {
                  openedDisclosure !== index && close();
                  return (
                    <div>
                      <p className="">
                        <span
                          className={`text-xl text-text_900 dark:text-dark-text_900 ${
                            isThemeChanging && themeChangeTransition
                          }`}
                        >
                          {job.designation}
                        </span>
                        <span className="">{" @ "}</span>
                        <span
                          className={`text-xl text-primary dark:text-dark-primary ${
                            isThemeChanging && themeChangeTransition
                          }`}
                        >
                          {job.name}
                        </span>
                      </p>
                      <p
                        className={`mt-1 mb-6 text-sm text-text_500 dark:text-dark-text_500 ${
                          isThemeChanging && themeChangeTransition
                        }`}
                      >
                        {job.joiningDate}
                      </p>
                      <div
                        className={`descendant-li:text-text_700 descendant-li:dark:text-dark-text_700 ${
                          isThemeChanging && themeChangeTransition
                        }`}
                      >
                        {parse(job.workDescription)}
                      </div>
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
