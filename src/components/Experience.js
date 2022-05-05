import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import { Tab, Disclosure } from "@headlessui/react";
import ReactMarkdown from "react-markdown";

const Experience = () => {
  const { data } = useContext(GlobalContext);
  const expData = data.pageContent.find(
    (content) => content.__component === "page-content.experience-page-content"
  );
  console.log(
    "🚀 ~ file: Experience.js ~ line 9 ~ Experience ~ expData",
    expData
  );

  return (
    <div className="container h-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <h3 className="">{expData.pageTitle}</h3>

        {expData.jobs.map((job) => (
          <Disclosure key={job.companyName}>
            <Disclosure.Button
              key={job.companyName + "_tab"}
              className="px-4 py-3 dark:text-dark-primary"
            >
              {job.companyName}
            </Disclosure.Button>
            <Disclosure.Panel key={job.companyName + "_panel"}>
              <p className="">
                <span className="">{job.designation}</span>
                <span className="">{" @ "}</span>
                <span className="">{job.companyName}</span>
              </p>
              <p className="">{job.range}</p>
              <ReactMarkdown className="">{job.workDescription}</ReactMarkdown>
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Experience;
