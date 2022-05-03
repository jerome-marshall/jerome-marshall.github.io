import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";

const Hero = () => {
  const { data } = useContext(GlobalContext);
  const heroData = data.pageContent.find(
    (content) => content.__component === "page-content.hero-page-content"
  );
  console.log("🚀 ~ file: Hero.js ~ line 6 ~ Hero ~ data", heroData);

  return (
    <div className="-mt-20 h-screen pt-20">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex flex-col">
          <p className="">{heroData.pageTitle}</p>
          <h1 className="">{data.name}</h1>
          <h3 className="">{heroData.shortDescription}</h3>
          <p className="">{heroData.description}</p>
        </div>
        <button className="btn">Say Hello</button>
      </div>
    </div>
  );
};

export default Hero;
