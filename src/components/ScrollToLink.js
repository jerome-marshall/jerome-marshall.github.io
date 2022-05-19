import React from "react";
import { Link } from "react-scroll";

const ScrollToLink = ({ to, className, clickHandler, children }) => {
  return (
    <Link
      to={to}
      className={`${className}`}
      onClick={clickHandler}
      smooth={true}
      duration={1000}
    >
      {children}
    </Link>
  );
};

export default ScrollToLink;
