import { useTheme } from "next-themes";
import { FC, ReactNode, useState } from "react";
import { useLocalStorage } from "react-use";
import { themeChangeTransition, ThemeProvider } from "../data/ThemeContext";
import { GlobalDatum } from "../types/types";
import Footer from "./Footer";
import Header from "./Header";
import { MotionValue } from "framer-motion";

const Layout: FC<{
  children: ReactNode;
  data: GlobalDatum;
  mousePosition: { mouseX: MotionValue<number>; mouseY: MotionValue<number> };
}> = ({ children, data, mousePosition }) => {
  const [localIsDark, setLocalIsDark, removelocalIsDark] = useLocalStorage(
    "isDark",
    true,
  );
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(localIsDark as boolean);
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
        <Footer socials={data.socials} name={data.name} />
      </div>
    </ThemeProvider>
  );
};

export default Layout;