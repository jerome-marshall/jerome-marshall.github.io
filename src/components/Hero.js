import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Button from "./Button";
import { Link } from "react-scroll";
import ScrollToLink from "./ScrollToLink";

const Hero = () => {
  const { data } = useContext(GlobalContext);
  const heroData = data.pageContent.find(
    (content) => content.__typename === "ComponentPageContentHeroPageContent"
  );

  return (
    <div className="container h-screen">
      <div className="flex h-full w-full flex-col items-center justify-center ">
        <div className="flex w-full flex-col">
          <p className="text-sm text-secondary dark:text-dark-secondary">
            {heroData.pageTitle}
          </p>
          <h1 className="text-clamp-lg font-bold text-text_900 dark:text-dark-text_900">
            {data.name}.
          </h1>
          <h3 className=" text-clamp-md text-text_700 dark:text-dark-text_700">
            {heroData.shortDescription}
          </h3>
          <p className="mt-5 max-w-[600px] text-text_500  dark:text-dark-text_500  md:text-lg">
            {heroData.description}
          </p>
        </div>
        <ScrollToLink to="contact" className="btn mt-12 sm:self-start">
          Get in Touch
        </ScrollToLink>
      </div>
    </div>
  );
};

export default Hero;
