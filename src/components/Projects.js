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

  const projects = projectsData.projects;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div className="container pt-40" id="projects">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h3 className="text-4xl">{projectsData.pageTitle}</h3>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={project.name + index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
