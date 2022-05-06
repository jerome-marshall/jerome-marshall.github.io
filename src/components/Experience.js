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
    <div className="container h-[900px]">
      <div className="flex h-full flex-col items-center py-20">
        <h3 className="">{expData.pageTitle}</h3>
        <div className="mt-12 flex w-full flex-col overflow-hidden rounded-xl border-2 border-dark-background_3">
          {expData.jobs.map((job, i) => {
            return (
              <Disclosure key={job.companyName} defaultOpen={i === 0}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      key={job.companyName + "_tab"}
                      className={`w-full px-4 py-3  ${
                        open
                          ? " bg-dark-background_3 dark:text-dark-primary"
                          : " bg-dark-background_2 dark:text-dark-text_500"
                      } `}
                      onClick={() => setOpenedDisclosure(i)}
                    >
                      {job.companyName}
                    </Disclosure.Button>
                    <Disclosure.Panel
                      key={job.companyName + "_panel"}
                      className={`px-4 py-5 dark:bg-dark-background_2 ${
                        open && i != expData.jobs.length - 1
                          ? " border-b-2 border-dark-background_3"
                          : ""
                      }`}
                    >
                      {({ close }) => {
                        openedDisclosure !== i && close();
                        return (
                          <div>
                            <p className="">
                              <span className="text-xl dark:text-dark-text_900">
                                {job.designation}
                              </span>
                              <span className="">{" @ "}</span>
                              <span className="text-xl dark:text-dark-primary">
                                {job.companyName}
                              </span>
                            </p>
                            <p className="mt-1 mb-6 text-sm dark:text-dark-text_500">
                              {job.range}
                            </p>
                            <ReactMarkdown className="dark:text-dark-text_700">
                              {job.workDescription}
                            </ReactMarkdown>
                          </div>
                        );
                      }}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
