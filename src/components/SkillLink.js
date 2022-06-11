import React from "react";

const SkillLink = ({ skill, className }) => {
  return (
    <a
      className={`whitespace-nowrap text-sm transition-all duration-300 hover:text-primary dark:hover:text-dark-secondary ${className}`}
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {skill.name}
    </a>
  );
};

export default SkillLink;
