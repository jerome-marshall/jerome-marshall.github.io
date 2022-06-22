import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaTimes as IconClose } from "react-icons/fa";
import ScrollToLink from "./ScrollToLink";
import { motion } from "framer-motion";

const MobileMenuModal = (props) => {
  const modalVarient = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Transition show={props.isModalOpen}>
      <Dialog
        // variants={modalVarient}
        // initial="hidden"
        // animate="visible"
        // open={props.isModalOpen}
        onClose={(closeModal) => {}}
        className="relative z-50 transition-all"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="left-full"
          enterTo="left-0"
          leave="ease-in duration-200"
          leaveFrom="left-0"
          leaveTo="left-full"
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
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default MobileMenuModal;
