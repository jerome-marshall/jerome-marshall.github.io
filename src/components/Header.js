import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import { FaBars } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Dialog } from "@headlessui/react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  return (
    <nav className="flex h-20 w-full items-center border-b-2 border-background_2 dark:border-dark-background_2">
      <div className="text-[22px] font-bold text-primary dark:text-dark-primary">
        JM
      </div>
      <div className="ml-auto flex items-center">
        <div className="theme-toggle">
          <DayNightToggle
            onChange={handleThemeChange}
            checked={isDark}
            size={30}
          />
        </div>
        <div className="ml-6 text-2xl" onClick={openModal}>
          <FaBars />
        </div>
      </div>
      <Dialog
        as="div"
        open={isModalOpen}
        onClose={closeModal}
        className="relative z-10"
      >
        <div className="bg fixed inset-0 overflow-y-auto bg-background_2 dark:bg-dark-background_2">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="mx-auto">
              <p>testing</p>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </nav>
  );
};

export default Header;
