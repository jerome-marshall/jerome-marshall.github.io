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
          <ul className="w-full">
            <li className="w-full">
              <div className="flex w-full flex-col dark:bg-dark-background_3">
                <div className="flex">
                  <IconFolder />
                  <div className="flex">
                    <IconGitHub />
                    <IconExternal />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h5 className="">{projects[0].name}</h5>
                  <p className="">{projects[0].description}</p>
                </div>
                <ul className="flex">
                  {projects[0].techStack.map((skill) => (
                    <li className="inline" key={skill.name}>
                      <SkillLink skill={skill} />
                    </li>
                  ))}
                  {projects[0].techStack.map((skill) => (
                    <li className="inline" key={skill.name}>
                      <SkillLink skill={skill} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
