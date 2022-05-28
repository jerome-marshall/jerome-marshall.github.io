import {
  FiGithub as IconGitHub,
  FiLinkedin as IconLinkedIn,
  FiPhone as IconPhone,
  FiMail as IconMail,
} from "react-icons/fi";
import { BsStackOverflow as IconStackoverflow } from "react-icons/bs";

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
