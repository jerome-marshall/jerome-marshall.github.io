import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import ReactMarkdown from "react-markdown";
import SkillLink from "./SkillLink";

const About = () => {
  const { data } = useContext(GlobalContext);
  const aboutData = data.pageContent.find(
    (content) => content.__component === "page-content.about-page-content"
  );

  return (
    <div className="container h-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <h3 className="self-center">
          {aboutData.pageTitle}
        </h3>
        <div className="mt-7 flex w-full flex-col">
          <ReactMarkdown className="text-primary">
            {aboutData.description}
          </ReactMarkdown>
          <ul className="mt-4 columns-2">
            {aboutData.skillset.map((skill) => (
              <li className="py-1" key={skill.name}>
                <SkillLink skill={skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
