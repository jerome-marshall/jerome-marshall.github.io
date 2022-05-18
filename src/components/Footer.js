import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import {
  FiGithub as IconGitHub,
  FiLinkedin as IconLinkedIn,
  FiPhone as IconPhone,
  FiMail as IconMail,
} from "react-icons/fi";
import { BsStackOverflow as IconStackoverflow } from "react-icons/bs";
import { SiNextdotjs as IconNextJs } from "react-icons/si";

const Footer = () => {
  const { data } = useContext(GlobalContext);

  return (
    <div className="container w-full">
      <div className="mb-4 flex h-full flex-col items-center justify-center">
        <div className="flex gap-4">
          <a className="social-card">
            <IconGitHub />
          </a>
          <a className="social-card">
            <IconLinkedIn />
          </a>
          <a className="social-card">
            <IconStackoverflow />
          </a>
          <a className="social-card">
            <IconPhone />
          </a>
          <a className="social-card">
            <IconMail />
          </a>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <p className=" text-sm dark:text-dark-text_500">
            Designed by {data.name}
          </p>
          <p className="mt-1 flex items-center  gap-2 text-sm child-svg:h-5 child-svg:w-5 child-svg:text-dark-secondary dark:text-dark-text_500">
            Built with <IconNextJs />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
