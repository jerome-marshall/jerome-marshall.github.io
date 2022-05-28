import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import { getIcon } from "../utils/utils";

const SideBar = () => {
  const { data } = useContext(GlobalContext);

  const iconsLocation = [
    ["github", "linkedin", "stackoverflow"], // left icons
    ["phone", "email"], // right icons
  ];

  const GetIconCard = ({ social, left, right }) => {
    const Icon = getIcon(social.name);

    return (
      <a
        key={social.displayName + "creditSection"}
        className={`social-card group flex items-center gap-3 ${
          right && "flex-row-reverse"
        }`}
        href={social.url}
        target={social.name !== "phone" ? "_blank" : ""}
        rel="noreferrer"
      >
        <Icon />
        <span className="hidden text-sm text-text_900 group-hover:inline dark:text-dark-text_900">
          {social.displayName}
        </span>
      </a>
    );
  };

  const LeftSection = data.socials
    .filter((social) => iconsLocation[0].includes(social.name))
    .map((social, index) => (
      <GetIconCard key={social.displayName + "left"} social={social} left />
    ));

  const RightSection = data.socials
    .filter((social) => iconsLocation[1].includes(social.name))
    .map((social) => (
      <GetIconCard key={social.displayName + "right"} social={social} right />
    ));

  return (
    <div className="wrapper fixed bottom-0 right-0 left-0 hidden w-screen items-end justify-between xl:flex">
      {iconsLocation.map((_, index) => {
        const isLeft = index === 0;

        return (
          <div
            key={index}
            className={`flex flex-col items-start gap-5 ${
              !isLeft && "items-end"
            }`}
          >
            {isLeft ? LeftSection : RightSection}
            <p
              className={`h-[150px] border-r-2 border-accent_border dark:border-dark-accent_border ${
                isLeft ? "ml-[22px]" : "mr-[22px]"
              }`}
            ></p>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
