"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5156);
/* harmony import */ var _SkillLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3196);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, html_react_parser__WEBPACK_IMPORTED_MODULE_2__, _SkillLink__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, html_react_parser__WEBPACK_IMPORTED_MODULE_2__, _SkillLink__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const About = ({ aboutMe , skillsData  })=>{
    const skills = skillsData.data.map((skill)=>skill.attributes);
    const containerVariant = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
                when: "beforeChildren"
            }
        }
    };
    const itemVariant = (index)=>{
        return {
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeInOut"
                }
            },
            hover: {
                scale: 1.1
            }
        };
    };
    const imgVariant = {
        hidden: {
            scale: 0.7,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 1,
                ease: "easeInOut"
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container py-20",
        id: "about",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            variants: containerVariant,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true,
                amount: 0.3
            },
            className: "flex h-full flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "self-center md:self-start",
                    children: "About Me"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center md:gap-8 lg:gap-10 xl:gap-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "z-10 mt-7 flex w-full flex-col md:basis-2/3",
                            children: [
                                (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(aboutMe),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-6",
                                    children: "Here are a few technologies I've been working with recently:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "mt-4 grid grid-cols-2 sm:mr-auto sm:gap-x-32",
                                    children: skills.map((skill, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.li, {
                                            whileInView: "visible",
                                            initial: "hidden",
                                            viewport: {
                                                once: true
                                            },
                                            variants: itemVariant(i),
                                            className: "z-10 py-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SkillLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                skill: skill
                                            })
                                        }, skill.name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            className: "z-10",
                            variants: imgVariant,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative z-10 hidden h-[270px] w-[270px] shrink-0 overflow-hidden rounded-[50%] transition-all duration-500 hover:rounded-3xl md:block lg:hover:!scale-110",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute z-10 h-full w-full bg-background_1/30 transition-all duration-500 hover:bg-background_1/0 dark:bg-dark-background_1/30 dark:hover:bg-dark-background_1/0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: "https://live.staticflickr.com/65535/52176678364_3321678c1b_o.jpg",
                                        alt: `my picture`,
                                        className: "aspect-ratio-1/1",
                                        fill: true,
                                        loader: _utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .imgLoader */ .BC
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Contact = ({ content  })=>{
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .ThemeContext */ .Ni);
    const containerVariant = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
                // delay: 0.2 + index * 0.2,
                when: "beforeChildren"
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container flex h-screen items-center justify-center",
        id: "contact",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            variants: containerVariant,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true
            },
            className: "flex flex-col items-center justify-center px-5 text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                    className: `text-sm text-secondary dark:text-dark-secondary lg:text-base ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .themeChangeTransition */ .fe}`,
                    children: "What's Next?"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: `md:text-4xl lg:my-3 lg:text-[50px] ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .themeChangeTransition */ .fe}`,
                    children: "Get In Touch"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: `mt-4 mb-6 max-w-xl lg:text-lg ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .themeChangeTransition */ .fe}`,
                    children: content
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.a, {
                    href: "mailto:jeromemarshall0@gmail.com",
                    className: `btn mt-4 inline-block ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .themeChangeTransition */ .fe}`,
                    whileHover: _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .hoverAnimation */ .ht,
                    children: "Say Hello"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2099:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3571);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5156);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, html_react_parser__WEBPACK_IMPORTED_MODULE_2__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, html_react_parser__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ExpAccordian = ({ index , job , toggleDisclosure , openedDisclosure , length  })=>{
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .Ni);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
        as: "div",
        className: "bg-background_3 dark:bg-dark-background_3",
        defaultOpen: index === 0,
        children: ({ open  })=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Button, {
                        className: `w-full px-4 py-3 text-base transition-all duration-500 ${open ? " text-text-700 bg-background_3 text-lg font-bold dark:bg-dark-background_3 dark:text-dark-text_700" : " bg-background_2 text-text_500 dark:bg-dark-background_2 dark:text-dark-text_500"} ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                        onClick: ()=>toggleDisclosure(index),
                        children: job.name
                    }, job.name + "_tab"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                        className: "overflow-hidden",
                        enter: "transition-[max-height] duration-500 linear",
                        enterFrom: " max-h-0",
                        enterTo: " max-h-[700px]",
                        leave: "transition-[max-height] duration-500 linear",
                        leaveFrom: " max-h-[700px]",
                        leaveTo: " max-h-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure.Panel, {
                            className: ` bg-background_2 px-4 py-5 dark:bg-dark-background_2 ${open && index != length - 1 ? "border-b-2 border-background_3 dark:border-dark-background_3" : ""} ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                            children: ({ close  })=>{
                                openedDisclosure !== index && close();
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `text-xl text-text_900 dark:text-dark-text_900 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                                                    children: job.designation
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "",
                                                    children: " @ "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `text-xl text-primary dark:text-dark-primary ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                                                    children: job.name
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `mt-1 mb-6 text-sm text-text_500 dark:text-dark-text_500 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                                            children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .calculateRange */ .at)({
                                                startDate: job.joiningDate,
                                                endDate: job.leavingDate,
                                                present: job.present
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `descendant-li:text-text_700 descendant-li:dark:text-dark-text_700 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                                            children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(job.workDescription)
                                        })
                                    ]
                                });
                            }
                        }, job.name + "_panel")
                    })
                ]
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpAccordian);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3548:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3571);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5156);
/* harmony import */ var _ExpAccordian__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2099);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, html_react_parser__WEBPACK_IMPORTED_MODULE_4__, _ExpAccordian__WEBPACK_IMPORTED_MODULE_8__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, html_react_parser__WEBPACK_IMPORTED_MODULE_4__, _ExpAccordian__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Experience = ({ jobs  })=>{
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .ThemeContext */ .Ni);
    const pannelRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const [openedDisclosure, setOpenedDisclosure] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const toggleDisclosure = (index)=>{
        setOpenedDisclosure(index);
    };
    const containerVariant = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
                // delay: 1,
                when: "beforeChildren"
            }
        }
    };
    const itemVariant = (index)=>{
        return {
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.1 + index * 0.1,
                    duration: 0.5,
                    ease: "easeInOut"
                }
            },
            hover: {
                scale: 1.1
            }
        };
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container max-w-[800px] py-20",
        id: "experience",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            className: "flex h-full w-full flex-col items-center py-20",
            variants: containerVariant,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: `md:self-start ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .themeChangeTransition */ .fe}`,
                    children: "Where I've worked"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-12 w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Group, {
                            vertical: true,
                            as: "div",
                            className: "hidden md:flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.List, {
                                    className: "flex flex-col",
                                    children: jobs.map((job, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                            className: "z-10 mr-8",
                                            variants: itemVariant(i),
                                            initial: "hidden",
                                            whileInView: "visible",
                                            viewport: {
                                                once: true
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab, {
                                                className: ({ selected  })=>clsx__WEBPACK_IMPORTED_MODULE_2___default()("z-10 w-full whitespace-nowrap border-l-[3px] p-3 text-left text-sm transition-all duration-500 hover:bg-background_3 hover:text-accent_hover dark:hover:bg-dark-background_3 dark:hover:text-dark-accent_hover", selected ? "border-secondary text-secondary dark:border-dark-secondary  dark:text-dark-secondary" : "border-accent_border text-text_500 dark:border-dark-accent_border dark:text-dark-text_500"),
                                                children: job.name
                                            }, job.name + "Tab")
                                        }, job.name + "Tab"))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panels, {
                                    className: "z-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
                                        children: jobs.map((job, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panel, {
                                                as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div,
                                                className: "z-10",
                                                animate: {
                                                    opacity: 1
                                                },
                                                initial: {
                                                    opacity: 0
                                                },
                                                transition: {
                                                    duration: 0.3
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                        className: "z-10 text-xl",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: `font-bold text-text_900 dark:text-dark-text_900 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .themeChangeTransition */ .fe}`,
                                                                children: job.designation
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: `text-secondary dark:text-dark-secondary ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .themeChangeTransition */ .fe}`,
                                                                children: "@"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {
                                                                className: `z-10 inline-block font-bold text-primary dark:text-dark-primary ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .themeChangeTransition */ .fe}`,
                                                                href: job.url,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                whileHover: _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .hoverAnimation */ .ht,
                                                                children: job.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: `mt-1 text-sm text-text_500 dark:text-dark-text_500 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .themeChangeTransition */ .fe}`,
                                                        children: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .calculateRange */ .at)({
                                                            startDate: job.joiningDate,
                                                            endDate: job.leavingDate,
                                                            present: job.present
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `mt-6 text-text_700 descendant-li:mb-2 descendant-li:leading-loose dark:text-dark-text_700 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .themeChangeTransition */ .fe}`,
                                                        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])(job.workDescription)
                                                    })
                                                ]
                                            }, job.name + "Panel12"))
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex w-full flex-col overflow-hidden rounded-xl border-2 border-background_3 dark:border-dark-background_3 md:hidden",
                            children: jobs.map((job, i)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExpAccordian__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    length: jobs.length,
                                    pannelRef: pannelRef,
                                    openedDisclosure: openedDisclosure,
                                    toggleDisclosure: toggleDisclosure,
                                    job: job,
                                    index: i
                                }, job.name);
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3571);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5156);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Footer = ({ socials , name  })=>{
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .Ni);
    const containerVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            // y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
                // delay: 0.2 + index * 0.2,
                when: ""
            }
        }
    };
    const CreditSectionIcons = socials.map((social)=>{
        const Icon = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .getIcon */ .q7)(social.name);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "social-card",
            href: social.url,
            target: social.name !== "phone" ? "_blank" : "",
            rel: "noreferrer",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {})
        }, social.name + "creditSection");
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto -mt-[140px] flex h-[140px] justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            className: "mb-4 flex h-full flex-col items-center justify-end",
            variants: containerVariant,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex gap-4 xl:hidden",
                    children: CreditSectionIcons
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "my-4 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: `text-sm text-text_500 dark:text-dark-text_500 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                            children: [
                                "Designed by ",
                                name
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: `mt-1 flex items-center gap-2 text-sm text-text_500 descendant:duration-1000 descendant-svg:h-5 descendant-svg:w-5 descendant-svg:text-secondary descendant-svg:transition-all dark:text-dark-text_500 dark:descendant-svg:text-dark-secondary ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                            children: [
                                "Built with",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.a, {
                                    className: `z-10 inline-block ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                                    href: "https://nextjs.org/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    whileHover: _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .hoverAnimation */ .ht,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiNextdotjs, {})
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3623);
/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hamburger_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1103);
/* harmony import */ var react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3571);
/* harmony import */ var _hooks_window_size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7726);
/* harmony import */ var _MobileMenuModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4609);
/* harmony import */ var _ScrollToLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2195);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _MobileMenuModal__WEBPACK_IMPORTED_MODULE_8__, _ScrollToLink__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _MobileMenuModal__WEBPACK_IMPORTED_MODULE_8__, _ScrollToLink__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Header = ({ isDark , handleThemeChange  })=>{
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .ThemeContext */ .Ni);
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const openModal = ()=>{
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const windowSize = (0,_hooks_window_size__WEBPACK_IMPORTED_MODULE_7__/* .useWindowSize */ .i)();
    const navContainerVarient = {
        hidden: {
            y: -50
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const navItemVarient = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.nav, {
        className: `wrapper fixed inset-0 z-50 flex h-20 w-full items-center justify-between border-b-2 border-background_2 bg-background_1 dark:border-dark-background_2 dark:bg-dark-background_1 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .themeChangeTransition */ .fe}`,
        variants: navContainerVarient,
        initial: "hidden",
        animate: "visible",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                variants: navItemVarient,
                whileHover: _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .hoverAnimation */ .ht,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__.Link, {
                    className: `cursor-pointer text-2xl font-bold text-primary dark:text-dark-primary ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .themeChangeTransition */ .fe}`,
                    to: "/",
                    onClick: ()=>{
                        if (isModalOpen) closeModal();
                        react_scroll__WEBPACK_IMPORTED_MODULE_5__.animateScroll.scrollToTop();
                    },
                    children: "JM"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "descendant-a:header-link hidden gap-12 md:flex",
                variants: navContainerVarient,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScrollToLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        to: "about",
                        variants: navItemVarient,
                        children: "About"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScrollToLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        to: "experience",
                        variants: navItemVarient,
                        children: "Experience"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScrollToLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        to: "projects",
                        variants: navItemVarient,
                        children: "Projects"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScrollToLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        to: "contact",
                        variants: navItemVarient,
                        children: "Contact"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        variants: navItemVarient,
                        whileHover: _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .hoverAnimation */ .ht,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: `transition-all duration-300 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_6__/* .themeChangeTransition */ .fe}`,
                            href: "https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Resume"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "theme-toggle ml-auto md:ml-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_day_and_night_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                    onChange: handleThemeChange,
                    checked: isDark,
                    size: windowSize.width > 768 ? 28 : 26
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-4 text-2xl md:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(hamburger_react__WEBPACK_IMPORTED_MODULE_2__.Cross, {
                    toggled: isModalOpen,
                    toggle: isModalOpen ? closeModal : openModal,
                    rounded: true,
                    size: 30,
                    duration: 0.5,
                    distance: "md"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileMenuModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                isModalOpen: isModalOpen,
                closeModal: closeModal
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, html_react_parser__WEBPACK_IMPORTED_MODULE_2__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, html_react_parser__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Hero = ({ name , shortIntro , introduction  })=>{
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_5__/* .ThemeContext */ .Ni);
    const containerVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                // duration: 1,
                ease: "easeInOut",
                delay: 1,
                when: "beforeChildren",
                staggerChildren: 0.1,
                delayChildren: 0.4
            }
        }
    };
    const textVariant = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container h-screen",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            variants: containerVariant,
            initial: "hidden",
            animate: "visible",
            className: "flex h-full w-full flex-col items-start justify-center ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                    variants: textVariant,
                    className: "text-sm text-secondary dark:text-dark-secondary",
                    children: "Hi, my name is"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h1, {
                    variants: textVariant,
                    className: "text-clamp-lg font-bold text-text_900 dark:text-dark-text_900",
                    children: [
                        name,
                        "."
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h3, {
                    variants: textVariant,
                    className: "text-clamp-md text-text_700 dark:text-dark-text_700",
                    children: shortIntro
                }),
                introduction && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    variants: textVariant,
                    className: "z-10 mt-5 max-w-[600px] child-p:text-text_500 dark:child-p:text-dark-text_500 md:child-p:text-lg",
                    children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(introduction)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "z-10 cursor-pointer",
                    variants: textVariant,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        className: `btn mt-12 self-center sm:self-start ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_5__/* .themeChangeTransition */ .fe}`,
                        whileHover: _data_ThemeContext__WEBPACK_IMPORTED_MODULE_5__/* .hoverAnimation */ .ht,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_4__.Link, {
                            to: "contact",
                            smooth: true,
                            duration: 1000,
                            children: "Get in Touch"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3571);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(999);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6424);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_5__, _Header__WEBPACK_IMPORTED_MODULE_6__]);
([_Footer__WEBPACK_IMPORTED_MODULE_5__, _Header__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Layout = ({ children , data  })=>{
    const [localIsDark, setLocalIsDark, removelocalIsDark] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)("isDark", true);
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(localIsDark);
    const [isThemeChanging, setIsThemeChanging] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleThemeChange = ()=>{
        setIsThemeChanging(true);
        setTheme(isDark ? "light" : "dark");
        setIsDark(!isDark);
        setLocalIsDark(!localIsDark);
        setTimeout(()=>{
            setIsThemeChanging(false);
        }, 2000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .ThemeProvider */ .f6, {
        value: {
            isThemeChanging
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `bg-background_1 dark:bg-dark-background_1 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    isDark: isDark,
                    handleThemeChange: handleThemeChange
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    socials: data.socials,
                    name: data.name
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3571);
/* harmony import */ var _ScrollToLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2195);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _ScrollToLink__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _ScrollToLink__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const MobileMenuModal = (props)=>{
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .ThemeContext */ .Ni);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
        show: props.isModalOpen,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
            // variants={modalVarient}
            // initial="hidden"
            // animate="visible"
            // open={props.isModalOpen}
            onClose: (closeModal)=>{},
            className: "relative z-50 transition-all",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                enter: "ease-out duration-500",
                enterFrom: "opacity-50 bottom-full",
                enterTo: "opacity-100 bottom-0",
                leave: "ease-in duration-300",
                leaveFrom: "opacity-100 bottom-0",
                leaveTo: "opacity-50 bottom-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `bg fixed inset-0 top-20 overflow-y-auto bg-background_1 dark:bg-dark-background_1 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .themeChangeTransition */ .fe}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative flex h-full items-center justify-center p-4 text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Panel, {
                            className: "relative bottom-20 mx-auto",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-7 child-a:text-2xl child-a:text-text_900 child-a:transition-all child-a:duration-1000 child-a:ease-linear dark:child-a:text-dark-text_900",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScrollToLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            to: "about",
                                            clickHandler: props.closeModal,
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScrollToLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            to: "experience",
                                            clickHandler: props.closeModal,
                                            children: "Experience"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScrollToLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            to: "projects",
                                            clickHandler: props.closeModal,
                                            children: "Projects"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ScrollToLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            to: "contact",
                                            clickHandler: props.closeModal,
                                            children: "Contact"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-32",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://drive.google.com/file/d/1eh_IK2jKvSl-f7UvOLKPq-A6GfEOHd1I/view",
                                        target: "_blank",
                                        className: `btn btn-secondary border-secondary bg-secondary px-12 text-text_hover dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-text_hover ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .themeChangeTransition */ .fe}`,
                                        rel: "noreferrer",
                                        children: "Resume"
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenuModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3571);
/* harmony import */ var _SkillLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3196);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _SkillLink__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _SkillLink__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ProjectCard = ({ project , index  })=>{
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .Ni);
    const containerVariant = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2 + index * 0.2,
                when: "beforeChildren"
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        className: "z-10",
        variants: containerVariant,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `group z-10 flex h-full flex-col bg-background_2 px-5 py-7 transition-all duration-300 hover:-translate-y-2 dark:bg-dark-background_2 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `flex items-center justify-between text-text_700 child-svg:h-9 child-svg:w-9 dark:text-dark-text_700 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiFolder, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " z-10 flex gap-4 descendant-svg:h-6 descendant-svg:w-6 descendant-svg:cursor-pointer descendant-svg:transition-all descendant-svg:duration-300",
                            children: [
                                project.githubURL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: project.githubURL,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiGithub, {
                                        className: `hover:text-text_900 dark:hover:text-dark-text_900 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`
                                    })
                                }),
                                project.externalURL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: project.externalURL,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiExternalLink, {
                                        className: `hover:text-text_900 dark:hover:text-dark-text_900 ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "my-7 flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            className: `text-xl font-bold text-text_900 transition-all duration-300 group-hover:text-primary  dark:text-dark-text_900 dark:group-hover:text-dark-primary ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                            children: project.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `mt-3 text-text_500 dark:text-dark-text_500 lg:text-sm ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
                            children: project.shortDescription
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "show-scrollbar -mb-3 mt-auto flex w-full gap-4 overflow-auto pb-3",
                    children: project.techStack.data.map((skill)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "inline before:content-[''] first:ml-auto",
                            id: skill.attributes.name,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SkillLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                skill: skill.attributes,
                                id: skill.attributes.name,
                                className: `text-xs text-text_700 transition-all duration-300 group-hover:text-secondary  dark:text-dark-text_700 dark:group-hover:text-dark-secondary ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`
                            })
                        }, skill.attributes.name))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3571);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _ProjectCard__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _ProjectCard__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Projects = ({ projectsData  })=>{
    const projects = projectsData.data.map((project)=>project.attributes);
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .ThemeContext */ .Ni);
    const containerVariant = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
                // delay: 1,
                when: "beforeChildren"
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container pt-20",
        id: "projects",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `flex h-full w-full flex-col items-center justify-center ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .themeChangeTransition */ .fe}`,
            variants: containerVariant,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: `text-center text-3xl md:text-4xl ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* .themeChangeTransition */ .fe}`,
                    children: "Some things I've built"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5",
                    children: projects.map((project, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            project: project,
                            index: index
                        }, project.name + index))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2195:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ScrollToLink = ({ to , className , clickHandler , children , variants  })=>{
    const { isThemeChanging  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .ThemeContext */ .Ni);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        className: `${className ? className : ""}`,
        variants: variants,
        whileHover: _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .hoverAnimation */ .ht,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {
            to: to,
            className: `transition-all duration-300 ease-linear ${isThemeChanging && _data_ThemeContext__WEBPACK_IMPORTED_MODULE_4__/* .themeChangeTransition */ .fe}`,
            onClick: clickHandler,
            smooth: true,
            duration: 1000,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToLink);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5156);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SideBar = ({ socials  })=>{
    const iconsLocation = [
        [
            "GitHub",
            "LinkedIn",
            "Stack Overflow"
        ],
        [
            "+91 9159115328",
            "jeromemarshall0@gmail.com"
        ]
    ];
    const iconCardWidths = {
        GitHub: "hover:w-[107px]",
        LinkedIn: "hover:w-[117px]",
        "Stack Overflow": "hover:w-[158px]",
        "+91 9159115328": "hover:w-[164px]",
        "jeromemarshall0@gmail.com": "hover:w-[253px]"
    };
    const sideContainerVariant = (isLeft)=>{
        return {
            hidden: {
                // x: isLeft ? -100 : 100,
                opacity: 0
            },
            visible: {
                // x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    // delay: 2,
                    // when: "beforeChildren",
                    ease: "easeInOut",
                    staggerChildren: 0.1,
                    delayChildren: 1,
                    staggerDirection: -1
                }
            }
        };
    };
    const iconVariant = (isLeft)=>{
        return {
            hidden: {
                x: isLeft ? -100 : 100,
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }
        };
    };
    // const [windowWidth] = useWindowSize();
    // let adjustment = (windowWidth - 1500 + 10) / 2;
    // if (adjustment < 20) {
    //   adjustment = 20;
    // }
    const GetIconCard = ({ social , left , right  })=>{
        const Icon = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .getIcon */ .q7)(social.name);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            variants: iconVariant(left),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: `social-card group flex w-[48px] items-center gap-3 ${iconCardWidths[social.name]} ${right ? "flex-row-reverse" : ""}`,
                href: social.url,
                target: social.name !== "phone" ? "_blank" : "",
                rel: "noreferrer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: " whitespace-nowrap text-sm text-text_900 opacity-0 transition-all duration-500 group-hover:opacity-100 dark:text-dark-text_900",
                        children: social.name
                    })
                ]
            }, social.name + "creditSection")
        });
    };
    const LeftSection = socials.filter((social)=>iconsLocation[0].includes(social.name)).map((social)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GetIconCard, {
            social: social,
            left: true
        }, social.name + "left"));
    const RightSection = socials.filter((social)=>iconsLocation[1].includes(social.name)).map((social)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GetIconCard, {
            social: social,
            right: true
        }, social.name + "right"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "wrapper fixed bottom-0 right-0 left-0 z-0 hidden w-screen items-end justify-between xl:flex",
        children: iconsLocation.map((_, index)=>{
            const isLeft = index === 0;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                variants: sideContainerVariant(isLeft),
                initial: "hidden",
                animate: "visible",
                className: `flex flex-col items-start gap-5 ${!isLeft && "items-end"}`,
                children: [
                    isLeft ? LeftSection : RightSection,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                        variants: iconVariant(isLeft),
                        className: `h-[150px] border-r-2 border-accent_border dark:border-dark-accent_border ${isLeft ? "ml-[22px]" : "mr-[22px]"}`
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _data_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SkillLink = ({ skill , className , id  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.a, {
        className: `inline-block whitespace-nowrap text-sm transition-all duration-300 ease-linear hover:text-primary dark:hover:text-dark-secondary ${className}`,
        href: skill.url,
        target: "_blank",
        rel: "noopener noreferrer",
        whileHover: _data_ThemeContext__WEBPACK_IMPORTED_MODULE_2__/* .hoverAnimation */ .ht,
        id: id,
        children: skill.name
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillLink);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SplashScreen = ({ setIsLoading , randomQuote  })=>{
    const [showContine, setShowContinue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [startIconAniamation, setStartIconAniamation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    setTimeout(()=>{
        setShowContinue(true);
    }, 5000);
    const wrapperVariant = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.7,
                ease: "easeInOut",
                when: "afterChildren"
            }
        }
    };
    const containerVarient = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.7,
                ease: "easeInOut"
            }
        }
    };
    const iconGoVarient = {
        hidden: {
            opacity: 0,
            x: 40
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        animation: {
            opacity: 1,
            x: 0,
            scale: 1.05,
            transition: {
                duration: 1,
                yoyo: Infinity
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 1,
                yoyo: Infinity
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        variants: wrapperVariant,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        className: "flex h-screen w-screen items-center justify-center overflow-auto bg-background_2 dark:bg-dark-background_2",
        layout: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            className: "container flex items-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                variants: containerVarient,
                className: "relative flex w-full flex-col items-center justify-center bg-background_2 py-16 dark:bg-dark-background_2 lg:px-12",
                layout: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "flex flex-col items-center text-center",
                    layout: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-5xl text-text_500 dark:text-dark-text_500 md:text-6xl lg:text-7xl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaQuoteLeft, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-8 text-3xl leading-normal text-text_700 dark:text-dark-text_700 lg:text-5xl lg:leading-normal",
                            children: randomQuote.quote
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            className: ` flex w-40 items-center justify-center ${showContine ? "md:h-22 mt-10 mb-10 h-20 lg:h-24" : "mt-10 mb-8 h-2 lg:mt-14"} transition-all duration-1000`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                                exitBeforeEnter: true,
                                onExitComplete: ()=>{
                                    setTimeout(()=>{
                                        setStartIconAniamation(true);
                                    }, 1000);
                                },
                                children: showContine ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "h-full w-full cursor-pointer text-secondary hover:text-primary child-svg:h-full child-svg:w-full child-svg:transition-all child-svg:duration-500 dark:text-dark-secondary dark:hover:text-dark-primary ",
                                    variants: iconGoVarient,
                                    initial: "hidden",
                                    animate: !startIconAniamation ? "visible" : "animation",
                                    // whileHover="hover"
                                    layout: true,
                                    onClick: ()=>setIsLoading(false),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowRightCircle, {})
                                }, "icon-go") : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                    className: "h-1 w-full overflow-hidden rounded-xl bg-secondary dark:bg-dark-secondary",
                                    exit: {
                                        opacity: 0,
                                        x: -40,
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeInOut"
                                        }
                                    }
                                }, "divider")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                            className: "text-lg text-text_700 dark:text-dark-text_700 lg:text-xl",
                            layout: true,
                            children: randomQuote.author
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SplashScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ni": () => (/* binding */ ThemeContext),
/* harmony export */   "f6": () => (/* binding */ ThemeProvider),
/* harmony export */   "fe": () => (/* binding */ themeChangeTransition),
/* harmony export */   "ht": () => (/* binding */ hoverAnimation)
/* harmony export */ });
/* unused harmony export themeChangeDuration */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const hoverAnimation = {
    scale: 1.05,
    transition: {
        duration: 1,
        yoyo: Infinity
    }
};
const themeChangeTransition = "transition-all duration-1000 ease-linear";
const themeChangeDuration = 1;
const ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const ThemeProvider = ThemeContext.Provider;


/***/ }),

/***/ 7928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rC": () => (/* binding */ getGlobalData),
  "Ly": () => (/* binding */ getJobs),
  "QR": () => (/* binding */ getQuotes)
});

;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./src/data/graphql-client.ts


const client = new client_namespaceObject.ApolloClient({
    uri: process.env.STRAPI_GRAPHQL,
    cache: new client_namespaceObject.InMemoryCache()
});
const getGlobalData = async ()=>{
    const response = await client.query({
        query: client_namespaceObject.gql`
      query getData {
        globalDatum {
          data {
            attributes {
              name
              shortIntroduction
              introduction
              about
              skillsHighlight {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              contactText
              projectsHighlight {
                data {
                  attributes {
                    name
                    date
                    githubURL
                    externalURL
                    projectFor
                    personal
                    description
                    images {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    shortDescription
                    techStack {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              socials {
                id
                name
                url
              }
            }
          }
        }
      }
    `
    });
    return response.data.globalDatum.data.attributes;
};
const getJobs = async ()=>{
    const response = await client.query({
        query: client_namespaceObject.gql`
      query getJobs {
        jobs {
          data {
            attributes {
              designation
              joiningDate
              leavingDate
              url
              workDescription
              present
              rank
              name
            }
          }
        }
      }
    `
    });
    return response.data.jobs?.data.map((job)=>job.attributes);
};
const getQuotes = async ()=>{
    const response = await client.query({
        query: client_namespaceObject.gql`
      query Quotes {
        quotes {
          data {
            attributes {
              quote
              author
            }
          }
        }
      }
    `
    });
    return response.data.quotes?.data.map((quote)=>quote.attributes);
};


/***/ }),

/***/ 7726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: 0,
        height: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return ()=>window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}


/***/ }),

/***/ 847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2384);
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3548);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2262);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9971);
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(733);
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9707);
/* harmony import */ var _components_SplashScreen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4757);
/* harmony import */ var _data_graphql_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7928);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_About__WEBPACK_IMPORTED_MODULE_3__, _components_Experience__WEBPACK_IMPORTED_MODULE_4__, _components_Hero__WEBPACK_IMPORTED_MODULE_5__, _components_Layout__WEBPACK_IMPORTED_MODULE_6__, _components_Projects__WEBPACK_IMPORTED_MODULE_7__, _components_Contact__WEBPACK_IMPORTED_MODULE_9__, _components_SideBar__WEBPACK_IMPORTED_MODULE_10__, _components_SplashScreen__WEBPACK_IMPORTED_MODULE_11__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_About__WEBPACK_IMPORTED_MODULE_3__, _components_Experience__WEBPACK_IMPORTED_MODULE_4__, _components_Hero__WEBPACK_IMPORTED_MODULE_5__, _components_Layout__WEBPACK_IMPORTED_MODULE_6__, _components_Projects__WEBPACK_IMPORTED_MODULE_7__, _components_Contact__WEBPACK_IMPORTED_MODULE_9__, _components_SideBar__WEBPACK_IMPORTED_MODULE_10__, _components_SplashScreen__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Home = ({ data , quotes , jobs  })=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-background_1 dark:bg-dark-background_1",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: data.name
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                exitBeforeEnter: true,
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SplashScreen__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    setIsLoading: setIsLoading,
                    randomQuote: randomQuote
                }, "splash-container") : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    data: data,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            name: data.name,
                            shortIntro: data.shortIntroduction,
                            introduction: data.introduction
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            aboutMe: data.about,
                            skillsData: data.skillsHighlight
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Experience__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            jobs: jobs
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            projectsData: data.projectsHighlight
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            content: data.contactText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SideBar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            socials: data.socials
                        })
                    ]
                })
            })
        ]
    });
};
async function getStaticProps() {
    try {
        const globalData = await (0,_data_graphql_client__WEBPACK_IMPORTED_MODULE_12__/* .getGlobalData */ .rC)();
        const quotes = await (0,_data_graphql_client__WEBPACK_IMPORTED_MODULE_12__/* .getQuotes */ .QR)();
        const jobs = await (0,_data_graphql_client__WEBPACK_IMPORTED_MODULE_12__/* .getJobs */ .Ly)();
        return {
            props: {
                data: globalData,
                quotes,
                jobs
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                data: "error"
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "at": () => (/* binding */ calculateRange),
  "q7": () => (/* binding */ getIcon),
  "BC": () => (/* binding */ imgLoader)
});

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: external "date-fns/format"
const format_namespaceObject = require("date-fns/format");
var format_default = /*#__PURE__*/__webpack_require__.n(format_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/utils.ts



const getIcon = (iconName)=>{
    const Icon = iconName === "GitHub" ? fi_.FiGithub : iconName === "LinkedIn" ? fi_.FiLinkedin : iconName === "Stack Overflow" ? bs_.BsStackOverflow : iconName === "+91 9159115328" ? fi_.FiPhone : iconName === "jeromemarshall0@gmail.com" ? fi_.FiMail : fi_.FiSquare;
    return Icon;
};
const imgLoader = ({ src , width , height , quality  })=>{
    const imgURL = `https://images.weserv.nl/?url=${src}&h=${height}&w=${width}`;
    return imgURL;
};
const calculateRange = ({ startDate , endDate , present  })=>{
    let dateRange = "";
    const dateFormat = "MMMMMM yyyy";
    if (present) {
        dateRange = format_default()(new Date(startDate), dateFormat) + " - Present";
    } else if (endDate) {
        dateRange = format_default()(new Date(startDate), dateFormat) + " - " + format_default()(new Date(endDate), dateFormat);
    } else {
        dateRange = format_default()(new Date(startDate), dateFormat);
    }
    return dateRange;
};


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3623:
/***/ ((module) => {

module.exports = require("hamburger-react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1103:
/***/ ((module) => {

module.exports = require("react-day-and-night-toggle");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 764:
/***/ ((module) => {

module.exports = require("react-icons/si");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [993,366], () => (__webpack_exec__(847)));
module.exports = __webpack_exports__;

})();