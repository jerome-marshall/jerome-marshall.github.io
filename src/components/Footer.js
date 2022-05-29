import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import { getIcon } from "../utils/utils";
import { SiNextdotjs as IconNextJs } from "react-icons/si";

const Footer = () => {
  const { data } = useContext(GlobalContext);

  const CreditSectionIcons = data.socials.map((social, index) => {
    const Icon = getIcon(social.name);

    return (
      <a
        key={social.displayName + "creditSection"}
        className="social-card"
        href={social.url}
        target={social.name !== "phone" ? "_blank" : ""}
        rel="noreferrer"
      >
        <Icon />
      </a>
    );
  });

  return (
    <div className="container mx-auto -mt-[140px] flex h-[140px] justify-center">
      <div className="mb-4 flex h-full flex-col items-center justify-end">
        <div className="flex gap-4 xl:hidden">{CreditSectionIcons}</div>
        <div className="my-4 flex flex-col items-center">
          <p className=" text-sm text-text_500 dark:text-dark-text_500">
            Designed by {data.name}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-text_500 descendant-svg:h-5 descendant-svg:w-5 descendant-svg:text-secondary dark:text-dark-text_500 dark:descendant-svg:text-dark-secondary">
            Built with{" "}
            <a
              className="z-10"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              <IconNextJs />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
