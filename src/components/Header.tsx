"use client";

import { type MotionValue, motion, useMotionTemplate } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import React, { type FC, useContext, useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import { animateScroll as scroll, Link } from "react-scroll";
import ScrollToLink from "./ScrollToLink";
import clsx from "clsx";
import useDeviceMedia from "~/hooks/useDeviceMedia";
import {
  ThemeContext,
  hoverAnimation,
  themeChangeTransition,
} from "~/contexts/ThemeContext";
import { useWindowSize } from "~/hooks/window-size";
import MobileMenuModal from "./MobileMenuModal";

interface IHeaderProps {
  isDark: boolean;
  handleThemeChange: () => void;
  mousePosition: { mouseX: MotionValue<number>; mouseY: MotionValue<number> };
}

const Header: FC<IHeaderProps> = ({
  isDark,
  handleThemeChange,
  mousePosition,
}) => {
  const { isMobile } = useDeviceMedia();
  const { isThemeChanging } = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const windowSize = useWindowSize();

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
      className={` fixed inset-0 z-50 h-fit w-full border-b-2 border-background_2 bg-background_1 dark:border-dark-background_2 dark:bg-dark-background_1 ${
        isThemeChanging && themeChangeTransition
      }`}
      variants={navContainerVarient}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={clsx(
          "absolute inset-0 -z-10 h-full w-full transition-all duration-300",
          isMobile && "hidden",
        )}
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mousePosition.mouseX}px ${mousePosition.mouseY}px, var(--gradientColor) 40%, transparent 100%)`,
        }}
      />
      <div className="wrapper flex h-20 items-center justify-between">
        <motion.div variants={navItemVarient} whileHover={hoverAnimation}>
          <Link
            className={`cursor-pointer text-2xl font-bold text-primary dark:text-dark-primary ${
              isThemeChanging && themeChangeTransition
            }`}
            to="/"
            onClick={() => {
              if (isModalOpen) closeModal();
              scroll.scrollToTop();
            }}
          >
            JM
          </Link>
        </motion.div>

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
          <motion.div variants={navItemVarient} whileHover={hoverAnimation}>
            <a
              className={`transition-all duration-300 ${
                isThemeChanging && themeChangeTransition
              }`}
              href="https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                // event({
                //   action: "click",
                //   category: " link click",
                //   label: "resume link clicked",
                //   value: "resume_clicked",
                // });
              }}
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        <div className="theme-toggle ml-auto md:ml-0">
          <DayNightToggle
            onChange={handleThemeChange}
            checked={isDark}
            size={windowSize.width > 768 ? 28 : 26}
          />
        </div>
        <div className="ml-4 text-2xl md:hidden">
          <Hamburger
            toggled={isModalOpen}
            toggle={isModalOpen ? closeModal : openModal}
            rounded
            size={30}
            duration={0.5}
            distance="md"
            // easing="linear"
          />
        </div>

        <MobileMenuModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </motion.nav>
  );
};

export default Header;
