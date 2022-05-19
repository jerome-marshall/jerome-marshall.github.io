import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import { FaBars } from "react-icons/fa";
import { FaTimes as IconClose } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

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
    <nav className="fixed inset-0 z-10 flex h-20 w-full items-center border-b-2 border-background_2 bg-background_1 px-5 dark:border-dark-background_2 dark:bg-dark-background_1">
      <div className="text-[22px] font-bold text-primary dark:text-dark-primary">
        JM
      </div>
      <div className="ml-auto flex items-center">
        <div className="theme-toggle">
          <DayNightToggle
            onChange={handleThemeChange}
            checked={isDark}
            size={28}
          />
        </div>
        <div className="ml-6 text-2xl" onClick={openModal}>
          <FaBars />
        </div>
      </div>
      <Dialog
        as="div"
        open={isModalOpen}
        onClose={(closeModal) => {}}
        className="relative z-10"
      >
        <div className="bg fixed inset-0 overflow-y-auto bg-background_2 dark:bg-dark-background_2">
          <div className="relative flex min-h-full items-center justify-center p-4 text-center">
            <div
              className="absolute top-0 right-0 m-6 text-2xl"
              onClick={closeModal}
            >
              <IconClose />
            </div>
            <Dialog.Panel className="mx-auto">
              <div className="flex flex-col gap-7 child-p:text-2xl child-p:text-text_900 dark:child-p:text-dark-text_900">
                <p className="">About</p>
                <p className="">Experience</p>
                <p className="">Projects</p>
                <p className="">Contact</p>
              </div>
              <Button className="mt-32 border-secondary bg-secondary px-12 text-text_hover dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-text_hover">
                Resume
              </Button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </nav>
  );
};

export default Header;
