import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../data/GlobalContext";
import { Tab, Disclosure, Transition } from "@headlessui/react";
import ReactMarkdown from "react-markdown";
import ExpAccordian from "./ExpAccordian";
import { classNames } from "../utils/utils";

const Experience = () => {
  const { data } = useContext(GlobalContext);
  const expData = data.pageContent.find(
    (content) =>
      content.__typename === "ComponentPageContentExperiencePageContent"
  );
  console.log(
    "🚀 ~ file: Experience.js ~ line 13 ~ Experience ~ expData",
    expData
  );

  const pannelRef = useRef(null);

  const [openedDisclosure, setOpenedDisclosure] = useState(0);
  const toggleDisclosure = (index) => {
    setOpenedDisclosure(index);
  };

  return (
    <div className="container max-w-[800px]" id="experience">
      <div className="flex h-full w-full flex-col items-center py-20">
        <h3 className="md:self-start">{expData.pageTitle}</h3>
        <div className="mt-12">
          <Tab.Group vertical as="div" className="hidden  md:flex">
            <Tab.List className="flex flex-col">
              {expData.jobs.map((job, i) => (
                <Tab
                  key={job.companyName + "Tab"}
                  className={({ selected }) =>
                    classNames(
                      "mr-8 whitespace-nowrap border-l-[3px] p-3 text-left text-sm hover:bg-background_3 hover:text-accent_hover dark:hover:bg-dark-background_3 dark:hover:text-dark-accent_hover",
                      selected
                        ? "border-secondary text-secondary dark:border-dark-secondary  dark:text-dark-secondary"
                        : "border-accent_border text-text_500 dark:border-dark-accent_border dark:text-dark-text_500"
                    )
                  }
                >
                  {job.companyName}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {expData.jobs.map((job, i) => (
                <Tab.Panel key={job.companyName + "Panel"}>
                  <h4 className="text-xl">
                    <span className="font-bold text-text_900 dark:text-dark-text_900">
                      {job.designation}
                    </span>{" "}
                    <span className="text-secondary dark:text-dark-secondary">
                      @
                    </span>{" "}
                    <a
                      className="font-bold text-primary dark:text-dark-primary"
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {job.companyName}
                    </a>
                  </h4>
                  <p className="mt-1 text-sm text-text_500 dark:text-dark-text_500">
                    {job.range}
                  </p>
                  <ReactMarkdown className="mt-6 text-text_700 descendant-li:mb-2 descendant-li:leading-loose dark:text-dark-text_700">
                    {job.workDescription}
                  </ReactMarkdown>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <div className="flex w-full flex-col overflow-hidden rounded-xl border-2 border-background_3 dark:border-dark-background_3 md:hidden">
            {expData.jobs.map((job, i) => {
              return (
                <ExpAccordian
                  key={job.companyName}
                  length={expData.jobs.length}
                  pannelRef={pannelRef}
                  openedDisclosure={openedDisclosure}
                  toggleDisclosure={toggleDisclosure}
                  job={job}
                  i={i}
                ></ExpAccordian>
              );
            })}
          </div>
        </div>
        {/* accordian */}
      </div>
    </div>
  );
};

export default Experience;
