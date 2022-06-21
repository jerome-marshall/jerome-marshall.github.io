import React, { useContext } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ThemeContext, themeChangeTransition } from "../data/ThemeContext";

const ScrollToLink = ({ to, className, clickHandler, children, variants }) => {
  const { isThemeChanging } = useContext(ThemeContext);

  return (
    <motion.div className={`${className ? className : ""}`} variants={variants}>
      <Link
        to={to}
        className={`transition-all duration-300 ease-linear ${
          isThemeChanging && themeChangeTransition
        }`}
        onClick={clickHandler}
        smooth={true}
        duration={1000}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default ScrollToLink;
