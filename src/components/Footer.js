import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import { getIcon } from "../utils/utils";
import { SiNextdotjs as IconNextJs } from "react-icons/si";
import { motion } from "framer-motion";
import { ThemeContext, themeChangeTransition } from "../data/ThemeContext";

const Footer = () => {
  const { isThemeChanging } = useContext(ThemeContext);

  const { data } = useContext(GlobalContext);

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

  const CreditSectionIcons = data.socials.map((social, index) => {
    const Icon = getIcon(social.name);

    return (
      <a
        key={social.displayName + "creditSection"}
        className="social-card"
        href={social.url}
        target={social.name !== "phone" ? "_blank" : ""}
        rel="noreferrer"
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
            Designed by {data.name}
          </p>
          <p
            className={`mt-1 flex items-center gap-2 text-sm text-text_500 descendant:duration-1000 descendant-svg:h-5 descendant-svg:w-5 descendant-svg:text-secondary descendant-svg:transition-all dark:text-dark-text_500 dark:descendant-svg:text-dark-secondary ${
              isThemeChanging && themeChangeTransition
            }`}
          >
            Built with{" "}
            <a
              className={`z-10 ${isThemeChanging && themeChangeTransition}`}
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              <IconNextJs />
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
