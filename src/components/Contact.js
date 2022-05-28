import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Button from "./Button";

const Contact = () => {
  const { data } = useContext(GlobalContext);
  const contactData = data.pageContent.find(
    (content) => content.__typename === "ComponentPageContentContactPageCotent"
  );

  return (
    <div
      className="container flex h-screen items-center justify-center"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center px-5 text-center">
        <h6 className="text-sm text-secondary dark:text-dark-secondary lg:text-base">
          {contactData.pageTitleIntro}
        </h6>
        <h3 className="md:text-4xl lg:my-3 lg:text-[50px]">
          {contactData.pageTitle}
        </h3>
        <p className="mt-4 mb-6 max-w-xl lg:text-lg">
          {contactData.description}
        </p>
        <a href="mailto:jeromemarshall0@gmail.com" className="btn mt-4">
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default Contact;
