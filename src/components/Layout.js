import React from "react";
import { useTheme } from "next-themes";
import Header from "./Header";

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-screen bg-background_1 px-6 dark:bg-dark-background_1">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
