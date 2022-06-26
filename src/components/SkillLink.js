import React, { useContext } from "react";
import { ThemeContext, hoverAnimation } from "../data/ThemeContext";
import { motion } from "framer-motion";

const SkillLink = ({ skill, className }) => {
  const { isThemeChanging } = useContext(ThemeContext);

  return (
    <motion.a
      className={`inline-block whitespace-nowrap text-sm transition-all duration-300 ease-linear hover:text-primary dark:hover:text-dark-secondary ${className}`}
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={hoverAnimation}
    >
      {skill.name}
    </motion.a>
  );
};

export default SkillLink;
