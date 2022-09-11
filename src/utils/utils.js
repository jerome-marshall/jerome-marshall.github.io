import { BsStackOverflow as IconStackoverflow } from "react-icons/bs";
import {
  FiGithub as IconGitHub,
  FiLinkedin as IconLinkedIn,
  FiMail as IconMail,
  FiPhone as IconPhone,
} from "react-icons/fi";

export const getIcon = (iconName) => {
  const Icon =
    iconName === "github"
      ? IconGitHub
      : iconName === "linkedin"
      ? IconLinkedIn
      : iconName === "stackoverflow"
      ? IconStackoverflow
      : iconName === "phone"
      ? IconPhone
      : iconName === "email"
      ? IconMail
      : null;

  return Icon;
};
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const imgLoader = ({ src, width, height, quality }) => {
  const imgURL = `https://images.weserv.nl/?url=${src}&h=${height}&w=${width}`;
  return imgURL;
};
