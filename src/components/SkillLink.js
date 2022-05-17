import React from "react";

const SkillLink = ({ skill, className }) => {
  console.log(
    "🚀 ~ file: SkillLink.js ~ line 4 ~ SkillLink ~ className",
    className
  );
  return (
    <a
      className={`text-base text-text_900 dark:text-dark-text_900 ${className}`}
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {skill.name}
    </a>
  );
};

export default SkillLink;
