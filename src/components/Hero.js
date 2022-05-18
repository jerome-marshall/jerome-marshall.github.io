import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Button from "./Button";

const Hero = () => {
  const { data } = useContext(GlobalContext);
  const heroData = data.pageContent.find(
    (content) => content.__typename === "ComponentPageContentHeroPageContent"
  );

  return (
    <div className="container h-screen">
      <div className="flex h-full w-full flex-col items-center justify-center ">
        <div className="flex flex-col">
          <p className="text-secondary dark:text-dark-secondary">
            {heroData.pageTitle}
          </p>
          <h1 className="text-[38px] font-bold text-text_900 dark:text-dark-text_900">
            {data.name}.
          </h1>
          <h3 className="text-text_700 dark:text-dark-text_700">
            {heroData.shortDescription}
          </h3>
          <p className="mt-5 text-text_500 dark:text-dark-text_500">
            {heroData.description}
          </p>
        </div>
        <Button className="mt-12">Get in Touch</Button>
      </div>
    </div>
  );
};

export default Hero;
