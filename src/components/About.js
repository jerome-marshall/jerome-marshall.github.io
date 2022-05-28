import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContext";
import ReactMarkdown from "react-markdown";
import SkillLink from "./SkillLink";
import Image from "next/image";
import myImg from "../assets/me.jpg";

const About = () => {
  const { data } = useContext(GlobalContext);
  const aboutData = data.pageContent.find(
    (content) => content.__typename === "ComponentPageContentAboutPageContent"
  );

  return (
    <div className="container h-screen" id="about">
      <div className="flex h-full flex-col items-center justify-center">
        <h3 className="self-center md:self-start">{aboutData.pageTitle}</h3>
        <div className="flex items-center gap-12">
          <div className="mt-7 flex w-full flex-col md:basis-2/3">
            <ReactMarkdown className="">{aboutData.description}</ReactMarkdown>

            <ul className="mt-4 columns-2 sm:mr-auto sm:gap-32">
              {aboutData.skillset.map((skill) => (
                <li className="py-1" key={skill.name}>
                  <SkillLink skill={skill} />
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden h-[270px] w-[270px] shrink-0 overflow-hidden rounded-full hover:rounded-3xl md:block lg:hover:scale-110">
            <div className="absolute z-10 h-full w-full bg-background_1/30 hover:bg-background_1/0 dark:bg-dark-background_1/30 dark:hover:bg-dark-background_1/0"></div>
            <Image
              src={myImg}
              alt={`Picture of ${data.name}`}
              className="aspect-ratio-1/1 "
              // layout="fixed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
