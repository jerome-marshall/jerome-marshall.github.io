import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Button from "./Button";

const Hero = () => {
  const { data } = useContext(GlobalContext);
  const heroData = data.pageContent.find(
    (content) => content.__component === "page-content.hero-page-content"
  );
  console.log("🚀 ~ file: Hero.js ~ line 6 ~ Hero ~ data", heroData);

  return (
    <div className="-mt-20 h-screen pt-20">
      <div className="flex h-full w-full flex-col items-center justify-center ">
        <div className="flex flex-col">
          <p className="text-secondary dark:text-dark-secondary text-base">{heroData.pageTitle}</p>
          <h1 className="text-text_900 dark:text-dark-text_900 text-[38px] font-bold">{data.name}.</h1>
          <h3 className="text-text_700 dark:text-dark-text_700 text-[28px] font-bold">{heroData.shortDescription}</h3>
          <p className="text-text_500 dark:text-dark-text_500 text-base mt-5">{heroData.description}</p>
        </div>
        <div className="mt-12"><Button>Get in Touch</Button></div>
      </div>
    </div>
  );
};

export default Hero;
