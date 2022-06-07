import React from "react";
import { FiGithub as IconGitHub } from "react-icons/fi";
import { FiExternalLink as IconExternal } from "react-icons/fi";
import { FiFolder as IconFolder } from "react-icons/fi";
import SkillLink from "./SkillLink";

const ProjectCard = ({ project }) => {
  console.log(
    "🚀 ~ file: ProjectCard.js ~ line 8 ~ ProjectCard ~ project",
    project
  );
  return (
    <div className="group z-10 flex w-full flex-col bg-background_2 px-5 py-7 transition-all duration-300 hover:-translate-y-2 dark:bg-dark-background_2">
      <div className="flex items-center justify-between text-text_700 child-svg:h-9 child-svg:w-9 dark:text-dark-text_700">
        <IconFolder />
        <div className=" z-10 flex gap-4 descendant-svg:h-6 descendant-svg:w-6 descendant-svg:cursor-pointer descendant-svg:transition-all descendant-svg:duration-300">
          {project.githubURL && (
            <a href={project.githubURL} target="_blank" rel="noreferrer">
              <IconGitHub className="hover:text-text_900 dark:hover:text-dark-text_900" />
            </a>
          )}
          {project.externalURL && (
            <a href={project.externalURL} target="_blank" rel="noreferrer">
              <IconExternal className="hover:text-text_900 dark:hover:text-dark-text_900" />
            </a>
          )}
        </div>
      </div>
      <div className="my-7 flex flex-col">
        <h5 className="text-xl font-bold text-text_900 transition-all duration-300 group-hover:text-primary  dark:text-dark-text_900 dark:group-hover:text-dark-primary">
          {project.name}
        </h5>
        <p className="mt-3 text-text_500 dark:text-dark-text_500 lg:text-sm">
          {project.description}
        </p>
      </div>
      <div className="-mb-3 mt-auto flex w-full gap-4 overflow-auto pb-3">
        {project.techStack?.map((skill) => (
          <div
            className="inline before:content-[''] first:ml-auto"
            key={skill.name}
          >
            <SkillLink
              skill={skill}
              className=" text-xs text-text_700 transition-all duration-300 group-hover:text-primary  dark:text-dark-text_700 dark:group-hover:text-dark-primary"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
