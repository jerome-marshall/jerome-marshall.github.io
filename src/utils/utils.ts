import { IconType } from "react-icons";
import { BsStackOverflow as IconStackoverflow } from "react-icons/bs";
import {
  FiGithub as IconGitHub,
  FiLinkedin as IconLinkedIn,
  FiMail as IconMail,
  FiPhone as IconPhone,
  FiSquare,
} from "react-icons/fi";
import format from "date-fns/format";

export const getIcon = (iconName: string): IconType => {
  const Icon =
    iconName === "GitHub"
      ? IconGitHub
      : iconName === "LinkedIn"
      ? IconLinkedIn
      : iconName === "Stack Overflow"
      ? IconStackoverflow
      : iconName === "+91 9159115328"
      ? IconPhone
      : iconName === "jeromemarshall0@gmail.com"
      ? IconMail
      : FiSquare;

  return Icon;
};

export const imgLoader = ({
  src,
  width,
  height,
  quality,
}: {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
}) => {
  const imgURL = `https://images.weserv.nl/?url=${src}&h=${height}&w=${width}`;
  return imgURL;
};

export const calculateRange = ({
  startDate,
  endDate,
  present,
}: {
  startDate: string;
  endDate?: string;
  present?: boolean;
}) => {
  let dateRange = "";
  const dateFormat = "MMMMMM yyyy";

  if (present) {
    dateRange = format(new Date(startDate), dateFormat) + " - Present";
  } else if (endDate) {
    dateRange =
      format(new Date(startDate), dateFormat) +
      " - " +
      format(new Date(endDate), dateFormat);
  } else {
    dateRange = format(new Date(startDate), dateFormat);
  }

  return dateRange;
};
