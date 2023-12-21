/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import clsx from "clsx";
import { type ClassValue } from "clsx";
import { type IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import {
  FiGithub as IconGitHub,
  FiLinkedin as IconLinkedIn,
  FiMail as IconMail,
  FiPhone as IconPhone,
  FiSquare,
} from "react-icons/fi";
import { BsStackOverflow as IconStackoverflow } from "react-icons/bs";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIcon = (iconName: string): IconType => {
  let Icon = FiSquare;

  switch (iconName) {
    case "GitHub":
      Icon = IconGitHub;
      break;
    case "LinkedIn":
      Icon = IconLinkedIn;
      break;
    case "Stack Overflow":
      Icon = IconStackoverflow;
      break;
    case "+91 9159115328":
      Icon = IconPhone;
      break;
    case "jeromemarshall0@gmail.com":
      Icon = IconMail;
      break;
    default:
      Icon = FiSquare;
      break;
  }

  return Icon as IconType;
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
