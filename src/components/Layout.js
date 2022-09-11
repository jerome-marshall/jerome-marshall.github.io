import { useTheme } from "next-themes";
import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import { themeChangeTransition, ThemeProvider } from "../data/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [localIsDark, setLocalIsDark, removelocalIsDark] = useLocalStorage(
    "isDark",
    true
  );
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(localIsDark);
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  const handleThemeChange = () => {
    setIsThemeChanging(true);
    setTheme(isDark ? "light" : "dark");
    setIsDark(!isDark);
    setLocalIsDark(!localIsDark);

    setTimeout(() => {
      setIsThemeChanging(false);
      console.log("theme changed");
    }, 2000);
  };

  return (
    <ThemeProvider value={{ isThemeChanging }}>
      <div
        className={`bg-background_1 dark:bg-dark-background_1 ${
          isThemeChanging && themeChangeTransition
        }`}
      >
        <Header isDark={isDark} handleThemeChange={handleThemeChange} />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
