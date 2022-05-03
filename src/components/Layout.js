import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-background_1 px-6 dark:bg-dark-background_1">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
