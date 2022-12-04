import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment, useContext } from "react";
import { themeChangeTransition, ThemeContext } from "../data/ThemeContext";
import ScrollToLink from "./ScrollToLink";

const MobileMenuModal: FC<{ isModalOpen: boolean; closeModal: () => void }> = (
  props
) => {
  const { isThemeChanging } = useContext(ThemeContext);

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
          enter="ease-out duration-500"
          enterFrom="opacity-50 bottom-full"
          enterTo="opacity-100 bottom-0"
          leave="ease-in duration-300"
          leaveFrom="opacity-100 bottom-0"
          leaveTo="opacity-50 bottom-full"
        >
          <div
            className={`bg fixed inset-0 top-20 overflow-y-auto bg-background_1 dark:bg-dark-background_1 ${
              isThemeChanging && themeChangeTransition
            }`}
          >
            <div className="relative flex h-full items-center justify-center p-4 text-center">
              {/* <div
                className="absolute top-0 right-0 m-6 text-2xl"
                onClick={props.closeModal}
              >
                <IconClose />
              </div> */}

              <Dialog.Panel className="relative bottom-20 mx-auto">
                <div className="flex flex-col gap-7 child-a:text-2xl child-a:text-text_900 child-a:transition-all child-a:duration-1000 child-a:ease-linear dark:child-a:text-dark-text_900">
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
                    className={`btn btn-secondary border-secondary bg-secondary px-12 text-text_hover dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-text_hover ${
                      isThemeChanging && themeChangeTransition
                    }`}
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
