import React, { useContext, useState } from "react";
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

  const [openedDisclosure, setOpenedDisclosure] = useState(0);

  return (
    <div className="container h-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <h3 className="">{expData.pageTitle}</h3>
        <div className="flex min-h-[600px] flex-col">
          {expData.jobs.map((job, i) => {
            return (
              <Disclosure key={job.companyName} defaultOpen={i === 0}>
                <Disclosure.Button
                  key={job.companyName + "_tab"}
                  className="px-4 py-3 dark:text-dark-primary"
                  onClick={() => setOpenedDisclosure(i)}
                >
                  {job.companyName}
                </Disclosure.Button>
                <Disclosure.Panel key={job.companyName + "_panel"}>
                  {({ close }) => {
                    openedDisclosure !== i && close();
                    return (
                      <div>
                        <p className="">
                          <span className="">{job.designation}</span>
                          <span className="">{" @ "}</span>
                          <span className="">{job.companyName}</span>
                        </p>
                        <p className="">{job.range}</p>
                        <ReactMarkdown className="">
                          {job.workDescription}
                        </ReactMarkdown>
                      </div>
                    );
                  }}
                </Disclosure.Panel>
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
