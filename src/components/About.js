import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";

const About = () => {
  const { data } = useContext(GlobalContext);
  const aboutData = data.pageContent.find(
    (content) => content.__component === "page-content.about-page-content"
  );
  console.log("🚀 ~ file: About.js ~ line 9 ~ About ~ aboutData", aboutData);

  return <div className="h-screen">About</div>;
};

export default About;
