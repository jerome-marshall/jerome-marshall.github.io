import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Button from "./Button";

const Hero = () => {
  const { data } = useContext(GlobalContext);
  const heroData = data.pageContent.find(
    (content) => content.__component === "page-content.hero-page-content"
  );

  return (
    <div className="-mt-20 h-screen pt-20">
      <div className="flex h-full w-full flex-col items-center justify-center ">
        <div className="flex flex-col">
          <p className="text-base text-secondary dark:text-dark-secondary">
            {heroData.pageTitle}
          </p>
          <h1 className="text-[38px] font-bold text-text_900 dark:text-dark-text_900">
            {data.name}.
          </h1>
          <h3 className="text-[28px] font-bold text-text_700 dark:text-dark-text_700">
            {heroData.shortDescription}
          </h3>
          <p className="mt-5 text-base text-text_500 dark:text-dark-text_500">
            {heroData.description}
          </p>
        </div>
        <div className="mt-12">
          <Button>Get in Touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
