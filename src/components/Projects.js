import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Slider from "react-slick";

import { FiGithub as IconGitHub } from "react-icons/fi";
import { FiExternalLink as IconExternal } from "react-icons/fi";
import { FiFolder as IconFolder } from "react-icons/fi";
import SkillLink from "./SkillLink";

const Projects = () => {
  const { data } = useContext(GlobalContext);
  const projectsData = data.pageContent.find(
    (content) =>
      content.__typename === "ComponentPageContentProjectsPageContent"
  );
  console.log(
    "🚀 ~ file: Projects.js ~ line 9 ~ Projects ~ projectsData",
    projectsData
  );

  const projects = projectsData.projects;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div className="container h-screen">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h3 className="">{projectsData.pageTitle}</h3>
        <div className="w-full">
          <div className="flex w-full flex-col px-5 py-7 dark:bg-dark-background_2 ">
            <div className="flex items-center justify-between child-svg:h-9 child-svg:w-9 dark:text-dark-text_700">
              <IconFolder />
              <div className="flex gap-4 child-svg:h-6 child-svg:w-6">
                <IconGitHub />
                <IconExternal />
              </div>
            </div>
            <div className="my-7 flex flex-col">
              <h5 className="text-xl font-bold">{projects[0].name}</h5>
              <p className="mt-3 dark:text-dark-text_500">
                {projects[0].description}
              </p>
            </div>
            <div className="flex gap-4 overflow-auto first:ml-auto">
              {projects[0].techStack.map((skill) => (
                <div className="inline before:content-['']" key={skill.name}>
                  <SkillLink
                    skill={skill}
                    className=" text-xs dark:text-dark-primary"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
