import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import { FaBars } from "react-icons/fa";
import { useTheme } from "next-themes";
import Button from "./Button";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollToLink from "./ScrollToLink";
import MobileMenuModal from "./MobileMenuModal";
import { motion } from "framer-motion";

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

  const navContainerVarient = {
    hidden: {
      y: -50,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVarient = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      className="wrapper fixed inset-0 z-50 flex h-20 w-full items-center justify-between border-b-2 border-background_2 bg-background_1 dark:border-dark-background_2 dark:bg-dark-background_1"
      variants={navContainerVarient}
      initial="hidden"
      animate="visible"
    >
      <div variants={navItemVarient}>
        <Link
          className="cursor-pointer text-[22px] font-bold text-primary dark:text-dark-primary"
          to="/"
          onClick={() => scroll.scrollToTop()}
        >
          JM
        </Link>
      </div>

      <motion.div
        className="descendant-a:header-link hidden gap-12 md:flex"
        variants={navContainerVarient}
      >
        <ScrollToLink to="about" variants={navItemVarient}>
          About
        </ScrollToLink>
        <ScrollToLink to="experience" variants={navItemVarient}>
          Experience
        </ScrollToLink>
        <ScrollToLink to="projects" variants={navItemVarient}>
          Projects
        </ScrollToLink>
        <ScrollToLink to="contact" variants={navItemVarient}>
          Contact
        </ScrollToLink>
        <motion.a
          href="https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view"
          target="_blank"
          rel="noreferrer"
          variants={navItemVarient}
        >
          Resume
        </motion.a>
      </motion.div>

      <div className="theme-toggle ml-auto md:ml-0">
        <DayNightToggle
          onChange={handleThemeChange}
          checked={isDark}
          size={28}
        />
      </div>
      <div className="ml-6 text-2xl md:hidden" onClick={openModal}>
        <FaBars />
      </div>

      <MobileMenuModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </motion.nav>
  );
};

export default Header;
