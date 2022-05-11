import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../data/GlobalContext";

const Projects = () => {
  const { data } = useContext(GlobalContext);
  const projectsData = data.pageContent.find(
    (content) => content.__component === "page-content.projects-page-content"
  );
  console.log(
    "🚀 ~ file: Projects.js ~ line 9 ~ Projects ~ projectsData",
    projectsData
  );

  return (
    <div className="container h-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold">Projects</h1>
      </div>
    </div>
  );
};

export default Projects;
