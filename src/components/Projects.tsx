import { FC, useContext } from "react";
import { motion } from "framer-motion";
import { themeChangeTransition, ThemeContext } from "../data/ThemeContext";
import { ProjectRelationResponseCollection } from "../types/types";
import ProjectCard from "./ProjectCard";

interface IProjectsProps {
  projectsData: ProjectRelationResponseCollection;
}
const Projects: FC<IProjectsProps> = ({ projectsData }) => {
  const projects = projectsData.data.map((project) => project.attributes);

  const { isThemeChanging } = useContext(ThemeContext);

  const containerVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        // delay: 1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <div className="container pt-20" id="projects">
      <motion.div
        className={`flex h-full w-full flex-col items-center justify-center ${
          isThemeChanging && themeChangeTransition
        }`}
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3
          className={`text-center text-3xl md:text-4xl ${
            isThemeChanging && themeChangeTransition
          }`}
        >
          {"Some things I've built"}
        </h3>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              key={project.name + index}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
