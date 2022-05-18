import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-background_1 dark:bg-dark-background_1">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
