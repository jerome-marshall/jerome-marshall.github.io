import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-background_1 dark:bg-dark-background_1">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
