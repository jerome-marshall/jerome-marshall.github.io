"use client";

import { motion, type Variants } from "framer-motion";
import { type FC, type ReactNode, useContext } from "react";
import { Link } from "react-scroll";
import {
  hoverAnimation,
  themeChangeTransition,
  ThemeContext,
} from "~/contexts/ThemeContext";

interface IScrollToLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
  variants?: Variants;
  clickHandler?: () => void;
}

const ScrollToLink: FC<IScrollToLinkProps> = ({
  to,
  className,
  clickHandler,
  children,
  variants,
}) => {
  const { isThemeChanging } = useContext(ThemeContext);

  return (
    <motion.div
      className={`${className ? className : ""}`}
      variants={variants}
      whileHover={hoverAnimation}
    >
      <Link
        to={to}
        className={`transition-all duration-300 ease-linear ${
          isThemeChanging && themeChangeTransition
        }`}
        onClick={() => {
          if (clickHandler) clickHandler();
          // event({
          //   action: "click",
          //   category: "menu link click",
          //   label: to + " menu clicked",
          //   value: to + "_clicked",
          // });
        }}
        smooth={true}
        duration={1000}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default ScrollToLink;
