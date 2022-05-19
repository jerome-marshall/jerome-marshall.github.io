import React from "react";
import { Dialog } from "@headlessui/react";
import { FaTimes as IconClose } from "react-icons/fa";
import ScrollToLink from "./ScrollToLink";

const MobileMenuModal = (props) => {
  return (
    <Dialog
      as="div"
      open={props.isModalOpen}
      onClose={(closeModal) => {}}
      className="relative z-10"
    >
      <div className="bg fixed inset-0 overflow-y-auto bg-background_2 dark:bg-dark-background_2">
        <div className="relative flex min-h-full items-center justify-center p-4 text-center">
          <div
            className="absolute top-0 right-0 m-6 text-2xl"
            onClick={props.closeModal}
          >
            <IconClose />
          </div>
          <Dialog.Panel className="mx-auto">
            <div className="flex flex-col gap-7 child-a:text-2xl child-a:text-text_900 dark:child-a:text-dark-text_900">
              <ScrollToLink to="about" clickHandler={props.closeModal}>
                About
              </ScrollToLink>
              <ScrollToLink to="experience" clickHandler={props.closeModal}>
                Experience
              </ScrollToLink>
              <ScrollToLink to="projects" clickHandler={props.closeModal}>
                Projects
              </ScrollToLink>
              <ScrollToLink to="contact" clickHandler={props.closeModal}>
                Contact
              </ScrollToLink>
            </div>
            <div className="mt-32">
              <a
                href="https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view"
                target="_blank"
                className="btn btn-secondary border-secondary bg-secondary px-12 text-text_hover dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-text_hover"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default MobileMenuModal;
