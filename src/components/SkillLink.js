import React from "react";

const SkillLink = ({ skill, className }) => {
  return (
    <a
      className={`whitespace-nowrap text-sm ${className}`}
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {skill.name}
    </a>
  );
};

export default SkillLink;
