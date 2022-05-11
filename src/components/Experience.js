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

  const pannelRef = useRef(null);

  const [openedDisclosure, setOpenedDisclosure] = useState(0);
  const toggleDisclosure = (index) => {
    console.log(
      "🚀 ~ file: Experience.js ~ line 17 ~ Experience ~ pannelRef",
      pannelRef.current?.clientHeight
    );
    setOpenedDisclosure(index);
  };

  return (
    <div className="container">
      <div className="flex h-full flex-col items-center py-20">
        <h3 className="">{expData.pageTitle}</h3>
        <div className="mt-12 flex w-full flex-col overflow-auto rounded-xl border-2 border-background_3 dark:border-dark-background_3">
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
