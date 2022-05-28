import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import { FaBars } from "react-icons/fa";
import { useTheme } from "next-themes";
import Button from "./Button";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollToLink from "./ScrollToLink";
import MobileMenuModal from "./MobileMenuModal";

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
    <nav className="wrapper fixed inset-0 z-50 flex h-20 w-full items-center justify-between border-b-2 border-background_2 bg-background_1 dark:border-dark-background_2 dark:bg-dark-background_1">
      <Link
        className="cursor-pointer text-[22px] font-bold text-primary dark:text-dark-primary"
        to="/"
        onClick={() => scroll.scrollToTop()}
      >
        JM
      </Link>
      <div className="child-a:header-link hidden gap-12 lg:flex">
        <ScrollToLink to="about">About</ScrollToLink>
        <ScrollToLink to="experience">Experience</ScrollToLink>
        <ScrollToLink to="projects">Projects</ScrollToLink>
        <ScrollToLink to="contact">Contact</ScrollToLink>
        <a
          href="https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="flex items-center">
        <div className="theme-toggle">
          <DayNightToggle
            onChange={handleThemeChange}
            checked={isDark}
            size={28}
          />
        </div>
        <div className="ml-6 text-2xl lg:hidden" onClick={openModal}>
          <FaBars />
        </div>
      </div>
      <MobileMenuModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </nav>
  );
};

export default Header;
