import React, { useContext } from "react";
import { ThemeContext, themeChangeTransition } from "../data/ThemeContext";

const SkillLink = ({ skill, className }) => {
  const { isThemeChanging } = useContext(ThemeContext);

  return (
    <a
      className={`whitespace-nowrap text-sm transition-all duration-300 ease-linear hover:text-primary dark:hover:text-dark-secondary ${className}`}
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {skill.name}
    </a>
  );
};

export default SkillLink;
