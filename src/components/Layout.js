import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeContext, ThemeProvider } from "../data/ThemeContext";
import { useTheme } from "next-themes";

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  const handleThemeChange = () => {
    setIsThemeChanging(true);
    setTheme(isDark ? "light" : "dark");
    setIsDark(!isDark);

    setTimeout(() => {
      setIsThemeChanging(false);
      console.log("theme changed");
    }, 2000);
  };

  return (
    <ThemeProvider value={{ isThemeChanging }}>
      <div className="bg-background_1 dark:bg-dark-background_1">
        <Header isDark={isDark} handleThemeChange={handleThemeChange} />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
