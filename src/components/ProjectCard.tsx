"use client";

import { motion } from "framer-motion";
import React, { type FC, useContext } from "react";
import {
  FiExternalLink as IconExternal,
  FiFolder as IconFolder,
  FiGithub as IconGitHub,
} from "react-icons/fi";
import SkillLink from "./SkillLink";
import { ThemeContext, themeChangeTransition } from "~/contexts/ThemeContext";
import { type Project } from "~/types/types";

interface IProjectCardProps {
  project: Project;
  index: number;
}
const ProjectCard: FC<IProjectCardProps> = ({ project, index }) => {
  const { isThemeChanging } = useContext(ThemeContext);

  const containerVariant = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2 + index * 0.2,
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      className="z-10"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div
        className={`group z-10 flex h-full flex-col bg-background_2 px-5 py-7 transition-all duration-300 hover:-translate-y-2 dark:bg-dark-background_2 ${
          isThemeChanging && themeChangeTransition
        }`}
      >
        <div
          className={`flex items-center justify-between text-text_700 child-svg:h-9 child-svg:w-9 dark:text-dark-text_700 ${
            isThemeChanging && themeChangeTransition
          }`}
        >
          <IconFolder />
          <div className=" z-10 flex gap-4 descendant-svg:h-6 descendant-svg:w-6 descendant-svg:cursor-pointer descendant-svg:transition-all descendant-svg:duration-300">
            {project.githubURL && (
              <a href={project.githubURL} target="_blank" rel="noreferrer">
                <IconGitHub
                  className={`hover:text-text_900 dark:hover:text-dark-text_900 ${
                    isThemeChanging && themeChangeTransition
                  }`}
                />
              </a>
            )}
            {project.externalURL && (
              <a href={project.externalURL} target="_blank" rel="noreferrer">
                <IconExternal
                  className={`hover:text-text_900 dark:hover:text-dark-text_900 ${
                    isThemeChanging && themeChangeTransition
                  }`}
                />
              </a>
            )}
          </div>
        </div>
        <div className="my-7 flex flex-col">
          <h5
            className={`text-xl font-bold text-text_900 transition-all duration-300 group-hover:text-primary  dark:text-dark-text_900 dark:group-hover:text-dark-primary ${
              isThemeChanging && themeChangeTransition
            }`}
          >
            {project.name}
          </h5>
          <p
            className={`mt-3 text-text_500 lg:text-sm dark:text-dark-text_500 ${
              isThemeChanging && themeChangeTransition
            }`}
          >
            {project.shortDescription}
          </p>
        </div>
        <div className="show-scrollbar -mb-3 mt-auto flex w-full gap-4 overflow-auto pb-3">
          {project.techStack.data.map((skill) => (
            <div
              className="inline before:content-[''] first:ml-auto"
              key={skill.attributes.name}
              id={skill.attributes.name}
            >
              <SkillLink
                skill={skill.attributes}
                id={skill.attributes.name}
                className={`text-xs text-text_700 transition-all duration-300 group-hover:text-secondary  dark:text-dark-text_700 dark:group-hover:text-dark-secondary ${
                  isThemeChanging && themeChangeTransition
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
