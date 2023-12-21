import { motion } from "framer-motion";
import type { FC } from "react";
import { hoverAnimation } from "~/contexts/ThemeContext";
import { type Skill } from "~/types/types";

const SkillLink: FC<{
  skill: Skill;
  className?: string;
  id?: string;
}> = ({ skill, className, id }) => {
  return (
    <motion.a
      className={`inline-block whitespace-nowrap text-sm transition-all duration-300 ease-linear hover:text-primary dark:hover:text-dark-secondary ${className}`}
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={hoverAnimation}
      id={id}
    >
      {skill.name}
    </motion.a>
  );
};

export default SkillLink;
