import { motion } from "framer-motion";
import { FC, useContext } from "react";
import { SiNextdotjs as IconNextJs } from "react-icons/si";
import {
  hoverAnimation,
  themeChangeTransition,
  ThemeContext,
} from "../data/ThemeContext";
import { event } from "../libs/gtag";
import { ComponentComponentSocial } from "../types/types";
import { getIcon } from "../utils/utils";

interface IFOoterProps {
  socials: ComponentComponentSocial[];
  name: string;
}

const Footer: FC<IFOoterProps> = ({ socials, name }) => {
  const { isThemeChanging } = useContext(ThemeContext);

  const containerVariant = {
    hidden: {
      opacity: 0,
      // y: 100,
    },
    visible: {
      opacity: 1,
      // y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        // delay: 0.2 + index * 0.2,
        when: "",
      },
    },
  };

  const CreditSectionIcons = socials.map((social) => {
    const Icon = getIcon(social.name);

    return (
      <a
        key={social.name + "creditSection"}
        className="social-card"
        href={social.url}
        target={social.name !== "phone" ? "_blank" : ""}
        rel="noreferrer"
        onClick={() => {
          event({
            action: "click",
            category: " link click",
            label: social.name + " link clicked",
            value: social.name + "_footer_clicked",
          });
        }}
      >
        <Icon />
      </a>
    );
  });

  return (
    <div className="container mx-auto -mt-[140px] flex h-[140px] justify-center">
      <motion.div
        className="mb-4 flex h-full flex-col items-center justify-end"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex gap-4 xl:hidden">{CreditSectionIcons}</div>
        <div className="my-4 flex flex-col items-center">
          <p
            className={`text-sm text-text_500 dark:text-dark-text_500 ${
              isThemeChanging && themeChangeTransition
            }`}
          >
            Designed by {name}
          </p>
          <p
            className={`mt-1 flex items-center gap-2 text-sm text-text_500 descendant:duration-1000 descendant-svg:h-5 descendant-svg:w-5 descendant-svg:text-secondary descendant-svg:transition-all dark:text-dark-text_500 dark:descendant-svg:text-dark-secondary ${
              isThemeChanging && themeChangeTransition
            }`}
          >
            Built with{" "}
            <motion.a
              className={`z-10 inline-block ${
                isThemeChanging && themeChangeTransition
              }`}
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              whileHover={hoverAnimation}
            >
              <IconNextJs />
            </motion.a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
