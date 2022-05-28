import React from "react";
import { FiGithub as IconGitHub } from "react-icons/fi";
import { FiExternalLink as IconExternal } from "react-icons/fi";
import { FiFolder as IconFolder } from "react-icons/fi";
import SkillLink from "./SkillLink";

const ProjectCard = ({ project }) => {
  return (
    <div className="group flex w-full flex-col bg-background_2 px-5 py-7 dark:bg-dark-background_2">
      <div className="flex items-center justify-between text-text_700 child-svg:h-9 child-svg:w-9 dark:text-dark-text_700">
        <IconFolder />
        <div className="flex gap-4 child-svg:h-6 child-svg:w-6">
          <IconGitHub />
          <IconExternal />
        </div>
      </div>
      <div className="my-7 flex flex-col">
        <h5 className="text-xl font-bold text-text_900 group-hover:text-dark-primary dark:text-dark-text_900">
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
              className=" text-xs text-text_700 group-hover:text-dark-secondary dark:text-dark-text_700"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
