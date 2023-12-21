"use client";

import { type MotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import { type FC, type ReactNode, useState } from "react";
import { useLocalStorage } from "react-use";
import { ThemeProvider, themeChangeTransition } from "~/contexts/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<{
  children: ReactNode;
  mousePosition: { mouseX: MotionValue<number>; mouseY: MotionValue<number> };
}> = ({ children, mousePosition }) => {
  const [localIsDark, setLocalIsDark, removelocalIsDark] = useLocalStorage(
    "isDark",
    true,
  );
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(localIsDark!);
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  const handleThemeChange = () => {
    setIsThemeChanging(true);
    setTheme(isDark ? "light" : "dark");
    setIsDark(!isDark);
    setLocalIsDark(!localIsDark);

    setTimeout(() => {
      setIsThemeChanging(false);
    }, 2000);
  };

  return (
    <ThemeProvider value={{ isThemeChanging }}>
      <div
        className={`bg-background_1 dark:bg-dark-background_1 ${
          isThemeChanging && themeChangeTransition
        }`}
      >
        <Header
          isDark={isDark}
          handleThemeChange={handleThemeChange}
          mousePosition={mousePosition}
        />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
