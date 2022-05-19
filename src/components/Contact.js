import React, { useContext, useState, useRef } from "react";
import { GlobalContext } from "../data/GlobalContext";
import Button from "./Button";

const Contact = () => {
  const { data } = useContext(GlobalContext);
  const contactData = data.pageContent.find(
    (content) => content.__typename === "ComponentPageContentContactPageCotent"
  );

  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center px-5 text-center">
        <h6 className="text-sm text-secondary dark:text-dark-secondary">
          {contactData.pageTitleIntro}
        </h6>
        <h3 className="">{contactData.pageTitle}</h3>
        <p className="my-6">{contactData.description}</p>
        <Button className="mt-4">Say Hello</Button>
      </div>
    </div>
  );
};

export default Contact;
