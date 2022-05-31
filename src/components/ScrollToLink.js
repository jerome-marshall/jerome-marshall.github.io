import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const ScrollToLink = ({ to, className, clickHandler, children, variants }) => {
  return (
    <motion.div className={`${className}`} variants={variants}>
      <Link
        to={to}
        className="transition-all duration-300"
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
