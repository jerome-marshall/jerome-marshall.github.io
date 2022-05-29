import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import { getIcon } from "../utils/utils";
import { motion } from "framer-motion";

const SideBar = () => {
  const { data } = useContext(GlobalContext);

  const iconsLocation = [
    ["github", "linkedin", "stackoverflow"], // left icons
    ["phone", "email"], // right icons
  ];

  const sideContainerVariant = (isLeft) => {
    return {
      hidden: {
        // x: isLeft ? -100 : 100,
        opacity: 0,
      },
      visible: {
        // x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          // delay: 2,
          // when: "beforeChildren",
          ease: "easeInOut",
          staggerChildren: 0.1,
          delayChildren: 1,
          staggerDirection: -1,
        },
      },
    };
  };

  const iconVariant = (isLeft) => {
    return {
      hidden: {
        x: isLeft ? -100 : 100,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    };
  };

  const GetIconCard = ({ social, left, right }) => {
    const Icon = getIcon(social.name);

    return (
      <motion.a
        variants={iconVariant(left)}
        key={social.displayName + "creditSection"}
        className={`social-card group flex items-center gap-3 ${
          right && "flex-row-reverse"
        }`}
        href={social.url}
        target={social.name !== "phone" ? "_blank" : ""}
        rel="noreferrer"
      >
        <Icon />
        <span className="hidden text-sm text-text_900 group-hover:inline dark:text-dark-text_900">
          {social.displayName}
        </span>
      </motion.a>
    );
  };

  const LeftSection = data.socials
    .filter((social) => iconsLocation[0].includes(social.name))
    .map((social, index) => (
      <GetIconCard key={social.displayName + "left"} social={social} left />
    ));

  const RightSection = data.socials
    .filter((social) => iconsLocation[1].includes(social.name))
    .map((social) => (
      <GetIconCard key={social.displayName + "right"} social={social} right />
    ));

  return (
    <div className="wrapper fixed bottom-0 right-0 left-0 z-0 hidden w-screen items-end justify-between xl:flex">
      {iconsLocation.map((_, index) => {
        const isLeft = index === 0;

        return (
          <motion.div
            variants={sideContainerVariant(isLeft)}
            initial="hidden"
            animate="visible"
            key={index}
            className={`flex flex-col items-start gap-5 ${
              !isLeft && "items-end"
            }`}
          >
            {isLeft ? LeftSection : RightSection}
            <motion.p
              variants={iconVariant(isLeft)}
              className={`h-[150px] border-r-2 border-accent_border dark:border-dark-accent_border ${
                isLeft ? "ml-[22px]" : "mr-[22px]"
              }`}
            ></motion.p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SideBar;
