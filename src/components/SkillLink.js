import React from "react";

const SkillLink = ({ skill }) => {
  return (
    <a
      className="text-base text-text_900 dark:text-dark-text_900"
      href={skill.url}
    >
      {skill.name}
    </a>
  );
};

export default SkillLink;
