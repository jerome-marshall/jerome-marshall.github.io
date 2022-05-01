import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import { FaBars } from "react-icons/fa";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  return (
    <nav className="flex h-20 w-full items-center">
      <div className="text-xl font-bold text-primary dark:text-dark-primary">
        JM
      </div>
      <div className="ml-auto flex items-center">
        <div className="">
          <DayNightToggle
            onChange={handleThemeChange}
            checked={isDark}
            size={30}
          />
        </div>
        <div className="ml-6 text-2xl">
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Header;
