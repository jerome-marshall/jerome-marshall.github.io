import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Slider from "react-slick";

import { FiGithub as IconGitHub } from "react-icons/fi";
import { FiExternalLink as IconExternal } from "react-icons/fi";
import { FiFolder as IconFolder } from "react-icons/fi";
import SkillLink from "./SkillLink";
import ProjectCard from "./ProjectCard";

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
    <div className="container py-40">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h3 className="">{projectsData.pageTitle}</h3>
        <div className="mt-12 grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={project.name + index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
