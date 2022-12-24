import { motion } from "framer-motion";
import { FC } from "react";
import { event } from "../libs/gtag";
import { ComponentComponentSocial } from "../types/types";
import { getIcon } from "../utils/utils";

const SideBar: FC<{ socials: ComponentComponentSocial[] }> = ({ socials }) => {
  const iconsLocation = [
    ["GitHub", "LinkedIn", "Stack Overflow"], // left icons
    ["+91 9159115328", "jeromemarshall0@gmail.com"], // right icons
  ];

  const iconCardWidths: Record<string, string> = {
    GitHub: "hover:w-[107px]",
    LinkedIn: "hover:w-[117px]",
    "Stack Overflow": "hover:w-[158px]",
    "+91 9159115328": "hover:w-[164px]",
    "jeromemarshall0@gmail.com": "hover:w-[253px]",
  };

  const sideContainerVariant = (isLeft: boolean) => {
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

  const iconVariant = (isLeft?: boolean) => {
    return {
      hidden: {
        x: isLeft ? -100 : 100,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      },
    };
  };

  // const [windowWidth] = useWindowSize();
  // let adjustment = (windowWidth - 1500 + 10) / 2;
  // if (adjustment < 20) {
  //   adjustment = 20;
  // }

  const GetIconCard: FC<{
    social: ComponentComponentSocial;
    left?: boolean;
    right?: boolean;
  }> = ({ social, left, right }) => {
    const Icon = getIcon(social.name);

    return (
      <motion.div variants={iconVariant(left)}>
        <a
          key={social.name + "creditSection"}
          className={`social-card group flex w-[48px] items-center gap-3 ${
            iconCardWidths[social.name]
          } ${right ? "flex-row-reverse" : ""}`}
          href={social.url}
          target={social.name !== "phone" ? "_blank" : ""}
          rel="noreferrer"
          onClick={() => {
            event({
              action: "click",
              category: " link click",
              label: social.name + " link clicked",
              value: social.name + "_clicked",
            });
          }}
        >
          <Icon />
          <span className=" whitespace-nowrap text-sm text-text_900 opacity-0 transition-all duration-500 group-hover:opacity-100 dark:text-dark-text_900">
            {social.name}
          </span>
        </a>
      </motion.div>
    );
  };

  const LeftSection = socials
    .filter((social) => iconsLocation[0].includes(social.name))
    .map((social) => (
      <GetIconCard key={social.name + "left"} social={social} left />
    ));

  const RightSection = socials
    .filter((social) => iconsLocation[1].includes(social.name))
    .map((social) => (
      <GetIconCard key={social.name + "right"} social={social} right />
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
