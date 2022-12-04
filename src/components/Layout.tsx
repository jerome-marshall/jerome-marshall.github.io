import { useTheme } from "next-themes";
import { FC, ReactNode, useState } from "react";
import { useLocalStorage } from "react-use";
import { themeChangeTransition, ThemeProvider } from "../data/ThemeContext";
import { GlobalDatum } from "../types/types";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<{ children: ReactNode; data: GlobalDatum }> = ({
  children,
  data,
}) => {
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
        <Footer socials={data.socials} name={data.name} />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
