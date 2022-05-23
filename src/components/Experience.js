import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../data/GlobalContext";
import { Tab, Disclosure, Transition } from "@headlessui/react";
import ReactMarkdown from "react-markdown";
import ExpAccordian from "./ExpAccordian";

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
    <div className="container" id="experience">
      <div className="flex h-full flex-col items-center py-20">
        <h3 className="">{expData.pageTitle}</h3>
        <div className="mt-12">
          <Tab.Group vertical as="div" className="flex">
            <Tab.List className="flex flex-col">
              {expData.jobs.map((job, i) => (
                <Tab key={job.companyName + "Tab"}>{job.companyName}</Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {expData.jobs.map((job, i) => (
                <Tab.Panel key={job.companyName + "Panel"}>
                  <h4 className="">
                    {job.designation} <span className="">@</span>{" "}
                    <span className="">{job.companyName}</span>
                  </h4>
                  <p className="">{job.range}</p>
                  <ReactMarkdown>{job.workDescription}</ReactMarkdown>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* accordian */}
        <div className="mt-12 flex w-full flex-col overflow-hidden rounded-xl border-2 border-background_3 dark:border-dark-background_3 md:hidden">
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
    </div>
  );
};

export default Experience;
