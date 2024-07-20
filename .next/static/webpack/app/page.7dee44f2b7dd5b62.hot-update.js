"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/home/Testimonials.tsx":
/*!***************************************!*\
  !*** ./src/app/home/Testimonials.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Testimonials: function() { return /* binding */ Testimonials; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var public_assets_heart_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/assets/heart.svg */ \"(app-pages-browser)/./public/assets/heart.svg\");\n/* harmony import */ var public_assets_testimonial_spiegel_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/assets/testimonial-spiegel.jpg */ \"(app-pages-browser)/./public/assets/testimonial-spiegel.jpg\");\n/* harmony import */ var public_assets_testimonial_santi_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/assets/testimonial-santi.jpg */ \"(app-pages-browser)/./public/assets/testimonial-santi.jpg\");\n/* harmony import */ var public_assets_testimonial_vivian_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/assets/testimonial-vivian.jpg */ \"(app-pages-browser)/./public/assets/testimonial-vivian.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var lib_hooks_useTailwindBreakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/hooks/useTailwindBreakpoints */ \"(app-pages-browser)/./src/app/lib/hooks/useTailwindBreakpoints.tsx\");\n/* __next_internal_client_entry_do_not_use__ Testimonials auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TESTIMONIALS = [\n    {\n        src: public_assets_testimonial_spiegel_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        quote: \"Students often make silly mistakes on their resume by using inconsistent bullet points or font sizes. Preamble Resume auto format feature is a great help to ensure consistent format.\",\n        name: \"Maqsad Saiful Islam\",\n        title: \"Software Developer\"\n    },\n    {\n        src: public_assets_testimonial_santi_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        quote: \"I used Preamble Resume during my last job search and was invited to interview at top tech companies such as Google and Amazon thanks to its slick yet professional resume design.\",\n        name: \" Ms Sahil Yadav\",\n        title: \"Software Engineer\"\n    },\n    {\n        src: public_assets_testimonial_vivian_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        quote: \"Creating a professional resume on Preamble Resume is so smooth and easy! It saves me so much time and headache to not deal with google doc template.\",\n        name: \"Sathwik Reddy Mrijuana\",\n        title: \"College Student\"\n    }\n];\nconst LG_TESTIMONIALS_CLASSNAMES = [\n    \"z-10\",\n    \"translate-x-44 translate-y-24 opacity-40\",\n    \"translate-x-32 -translate-y-28 opacity-40\"\n];\nconst SM_TESTIMONIALS_CLASSNAMES = [\n    \"z-10\",\n    \"opacity-0\",\n    \"opacity-0\"\n];\nconst ROTATION_INTERVAL_MS = 8 * 1000; // 8s\nconst Testimonials = (param)=>{\n    let { children } = param;\n    _s();\n    const [testimonialsClassNames, setTestimonialsClassNames] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(LG_TESTIMONIALS_CLASSNAMES);\n    const isHoveredOnTestimonial = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const intervalId = setInterval(()=>{\n            if (!isHoveredOnTestimonial.current) {\n                setTestimonialsClassNames((preClassNames)=>{\n                    return [\n                        preClassNames[1],\n                        preClassNames[2],\n                        preClassNames[0]\n                    ];\n                });\n            }\n        }, ROTATION_INTERVAL_MS);\n        return ()=>clearInterval(intervalId);\n    }, []);\n    const { isLg } = (0,lib_hooks_useTailwindBreakpoints__WEBPACK_IMPORTED_MODULE_7__.useTailwindBreakpoints)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setTestimonialsClassNames(isLg ? LG_TESTIMONIALS_CLASSNAMES : SM_TESTIMONIALS_CLASSNAMES);\n    }, [\n        isLg\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"mx-auto -mt-8 px-8 pb-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-8 text-center text-3xl font-bold\",\n                children: [\n                    \"People\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        src: public_assets_heart_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                        alt: \"love\",\n                        className: \"-mt-1 inline-block w-7\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    \"Preamble Resume\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto mt-10 h-[235px] max-w-lg lg:h-[400px] lg:pt-28\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative lg:ml-[-50px]\",\n                    children: TESTIMONIALS.map((param, idx)=>{\n                        let { src, quote, name, title } = param;\n                        const className = testimonialsClassNames[idx];\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-primary absolute max-w-lg rounded-[1.7rem] bg-opacity-30 shadow-md transition-all duration-1000 ease-linear \".concat(className),\n                            onMouseEnter: ()=>{\n                                if (className === \"z-10\") {\n                                    isHoveredOnTestimonial.current = true;\n                                }\n                            },\n                            onMouseLeave: ()=>{\n                                if (className === \"z-10\") {\n                                    isHoveredOnTestimonial.current = false;\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                className: \"m-1 flex gap-5 rounded-3xl bg-white p-5 text-gray-900 lg:p-7\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        className: \"hidden h-24 w-24 select-none rounded-full lg:block\",\n                                        src: src,\n                                        alt: \"profile\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"before:content-['“'] after:content-['”']\",\n                                                    children: quote\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                                                className: \"mt-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"hidden gap-2 lg:flex\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"font-semibold\",\n                                                                children: name\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                                lineNumber: 105,\n                                                                columnNumber: 25\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"select-none text-gray-700\",\n                                                                \"aria-hidden\": \"true\",\n                                                                children: \"•\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                                lineNumber: 106,\n                                                                columnNumber: 25\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"text-gray-600\",\n                                                                children: title\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                                lineNumber: 112,\n                                                                columnNumber: 25\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                        lineNumber: 104,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex gap-4 lg:hidden\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                                className: \" block h-12 w-12 select-none rounded-full\",\n                                                                src: src,\n                                                                alt: \"profile\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                                lineNumber: 115,\n                                                                columnNumber: 25\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"font-semibold\",\n                                                                        children: name\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                                        lineNumber: 121,\n                                                                        columnNumber: 27\n                                                                    }, undefined),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"text-gray-600\",\n                                                                        children: title\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                                        lineNumber: 122,\n                                                                        columnNumber: 27\n                                                                    }, undefined)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                                lineNumber: 120,\n                                                                columnNumber: 25\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                        lineNumber: 114,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, undefined)\n                        }, idx, false, {\n                            fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MONEER ASHRAF\\\\Desktop\\\\Preamble-Programmers_028\\\\src\\\\app\\\\home\\\\Testimonials.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Testimonials, \"y8DYNwQMAxnEqRW7Idacz0Ve6T8=\", false, function() {\n    return [\n        lib_hooks_useTailwindBreakpoints__WEBPACK_IMPORTED_MODULE_7__.useTailwindBreakpoints\n    ];\n});\n_c = Testimonials;\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9tZS9UZXN0aW1vbmlhbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUMyQjtBQUNKO0FBQ0U7QUFDYjtBQUM1QjtBQUMyQztBQUUxRSxNQUFNVSxlQUFlO0lBQ25CO1FBQ0VDLEtBQUtWLDZFQUFxQkE7UUFDMUJXLE9BQ0U7UUFDRkMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxLQUFLVCwyRUFBbUJBO1FBQ3hCVSxPQUNFO1FBQ0ZDLE1BQU07UUFDTkMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsS0FBS1IsNEVBQW9CQTtRQUN6QlMsT0FDRTtRQUNGQyxNQUFNO1FBQ05DLE9BQU87SUFDVDtDQUNEO0FBRUQsTUFBTUMsNkJBQTZCO0lBQ2pDO0lBQ0E7SUFDQTtDQUNEO0FBQ0QsTUFBTUMsNkJBQTZCO0lBQUM7SUFBUTtJQUFhO0NBQVk7QUFDckUsTUFBTUMsdUJBQXVCLElBQUksTUFBTSxLQUFLO0FBRXJDLE1BQU1DLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQWtDOztJQUN2RSxNQUFNLENBQUNDLHdCQUF3QkMsMEJBQTBCLEdBQUdkLCtDQUFRQSxDQUNsRVE7SUFFRixNQUFNTyx5QkFBeUJoQiw2Q0FBTUEsQ0FBQztJQUN0Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0IsYUFBYUMsWUFBWTtZQUM3QixJQUFJLENBQUNGLHVCQUF1QkcsT0FBTyxFQUFFO2dCQUNuQ0osMEJBQTBCLENBQUNLO29CQUN6QixPQUFPO3dCQUFDQSxhQUFhLENBQUMsRUFBRTt3QkFBRUEsYUFBYSxDQUFDLEVBQUU7d0JBQUVBLGFBQWEsQ0FBQyxFQUFFO3FCQUFDO2dCQUMvRDtZQUNGO1FBQ0YsR0FBR1Q7UUFDSCxPQUFPLElBQU1VLGNBQWNKO0lBQzdCLEdBQUcsRUFBRTtJQUVMLE1BQU0sRUFBRUssSUFBSSxFQUFFLEdBQUduQix3RkFBc0JBO0lBQ3ZDSixnREFBU0EsQ0FBQztRQUNSZ0IsMEJBQ0VPLE9BQU9iLDZCQUE2QkM7SUFFeEMsR0FBRztRQUFDWTtLQUFLO0lBRVQscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUFzQztvQkFDM0M7a0NBQ1AsOERBQUN0QixrREFBS0E7d0JBQUNHLEtBQUtYLCtEQUFRQTt3QkFBRWdDLEtBQUk7d0JBQU9GLFdBQVU7Ozs7OztvQkFBNEI7b0JBQUk7Ozs7Ozs7MEJBRzdFLDhEQUFDRztnQkFBSUgsV0FBVTswQkFDYiw0RUFBQ0c7b0JBQUlILFdBQVU7OEJBQ1pwQixhQUFhd0IsR0FBRyxDQUFDLFFBQThCQzs0QkFBN0IsRUFBRXhCLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRTt3QkFDNUMsTUFBTWdCLFlBQVlWLHNCQUFzQixDQUFDZSxJQUFJO3dCQUM3QyxxQkFDRSw4REFBQ0Y7NEJBRUNILFdBQVcsa0hBQTRILE9BQVZBOzRCQUM3SE0sY0FBYztnQ0FDWixJQUFJTixjQUFjLFFBQVE7b0NBQ3hCUix1QkFBdUJHLE9BQU8sR0FBRztnQ0FDbkM7NEJBQ0Y7NEJBQ0FZLGNBQWM7Z0NBQ1osSUFBSVAsY0FBYyxRQUFRO29DQUN4QlIsdUJBQXVCRyxPQUFPLEdBQUc7Z0NBQ25DOzRCQUNGO3NDQUVBLDRFQUFDYTtnQ0FBT1IsV0FBVTs7a0RBQ2hCLDhEQUFDdEIsa0RBQUtBO3dDQUNKc0IsV0FBVTt3Q0FDVm5CLEtBQUtBO3dDQUNMcUIsS0FBSTs7Ozs7O2tEQUVOLDhEQUFDQzs7MERBQ0MsOERBQUNNOzBEQUNDLDRFQUFDQztvREFBRVYsV0FBVTs4REFDVmxCOzs7Ozs7Ozs7OzswREFHTCw4REFBQzZCO2dEQUFXWCxXQUFVOztrRUFDcEIsOERBQUNHO3dEQUFJSCxXQUFVOzswRUFDYiw4REFBQ0c7Z0VBQUlILFdBQVU7MEVBQWlCakI7Ozs7OzswRUFDaEMsOERBQUNvQjtnRUFDQ0gsV0FBVTtnRUFDVlksZUFBWTswRUFDYjs7Ozs7OzBFQUdELDhEQUFDVDtnRUFBSUgsV0FBVTswRUFBaUJoQjs7Ozs7Ozs7Ozs7O2tFQUVsQyw4REFBQ21CO3dEQUFJSCxXQUFVOzswRUFDYiw4REFBQ3RCLGtEQUFLQTtnRUFDSnNCLFdBQVU7Z0VBQ1ZuQixLQUFLQTtnRUFDTHFCLEtBQUk7Ozs7OzswRUFFTiw4REFBQ0M7O2tGQUNDLDhEQUFDQTt3RUFBSUgsV0FBVTtrRkFBaUJqQjs7Ozs7O2tGQUNoQyw4REFBQ29CO3dFQUFJSCxXQUFVO2tGQUFpQmhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBNUNyQ3FCOzs7OztvQkFvRFg7Ozs7Ozs7Ozs7O1lBR0hoQjs7Ozs7OztBQUdQLEVBQUU7R0E5RldEOztRQWdCTVQsb0ZBQXNCQTs7O0tBaEI1QlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob21lL1Rlc3RpbW9uaWFscy50c3g/OWZhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IGhlYXJ0U3JjIGZyb20gXCJwdWJsaWMvYXNzZXRzL2hlYXJ0LnN2Z1wiO1xyXG5pbXBvcnQgdGVzdGltb25pYWxTcGllZ2VsU3JjIGZyb20gXCJwdWJsaWMvYXNzZXRzL3Rlc3RpbW9uaWFsLXNwaWVnZWwuanBnXCI7XHJcbmltcG9ydCB0ZXN0aW1vbmlhbFNhbnRpU3JjIGZyb20gXCJwdWJsaWMvYXNzZXRzL3Rlc3RpbW9uaWFsLXNhbnRpLmpwZ1wiO1xyXG5pbXBvcnQgdGVzdGltb25pYWxWaXZpYW5TcmMgZnJvbSBcInB1YmxpYy9hc3NldHMvdGVzdGltb25pYWwtdml2aWFuLmpwZ1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VUYWlsd2luZEJyZWFrcG9pbnRzIH0gZnJvbSBcImxpYi9ob29rcy91c2VUYWlsd2luZEJyZWFrcG9pbnRzXCI7XHJcblxyXG5jb25zdCBURVNUSU1PTklBTFMgPSBbXHJcbiAge1xyXG4gICAgc3JjOiB0ZXN0aW1vbmlhbFNwaWVnZWxTcmMsXHJcbiAgICBxdW90ZTpcclxuICAgICAgXCJTdHVkZW50cyBvZnRlbiBtYWtlIHNpbGx5IG1pc3Rha2VzIG9uIHRoZWlyIHJlc3VtZSBieSB1c2luZyBpbmNvbnNpc3RlbnQgYnVsbGV0IHBvaW50cyBvciBmb250IHNpemVzLiBQcmVhbWJsZSBSZXN1bWUgYXV0byBmb3JtYXQgZmVhdHVyZSBpcyBhIGdyZWF0IGhlbHAgdG8gZW5zdXJlIGNvbnNpc3RlbnQgZm9ybWF0LlwiLFxyXG4gICAgbmFtZTogXCJNYXFzYWQgU2FpZnVsIElzbGFtXCIsXHJcbiAgICB0aXRsZTogXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogdGVzdGltb25pYWxTYW50aVNyYyxcclxuICAgIHF1b3RlOlxyXG4gICAgICBcIkkgdXNlZCBQcmVhbWJsZSBSZXN1bWUgZHVyaW5nIG15IGxhc3Qgam9iIHNlYXJjaCBhbmQgd2FzIGludml0ZWQgdG8gaW50ZXJ2aWV3IGF0IHRvcCB0ZWNoIGNvbXBhbmllcyBzdWNoIGFzIEdvb2dsZSBhbmQgQW1hem9uIHRoYW5rcyB0byBpdHMgc2xpY2sgeWV0IHByb2Zlc3Npb25hbCByZXN1bWUgZGVzaWduLlwiLFxyXG4gICAgbmFtZTogXCIgTXMgU2FoaWwgWWFkYXZcIixcclxuICAgIHRpdGxlOiBcIlNvZnR3YXJlIEVuZ2luZWVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6IHRlc3RpbW9uaWFsVml2aWFuU3JjLFxyXG4gICAgcXVvdGU6XHJcbiAgICAgIFwiQ3JlYXRpbmcgYSBwcm9mZXNzaW9uYWwgcmVzdW1lIG9uIFByZWFtYmxlIFJlc3VtZSBpcyBzbyBzbW9vdGggYW5kIGVhc3khIEl0IHNhdmVzIG1lIHNvIG11Y2ggdGltZSBhbmQgaGVhZGFjaGUgdG8gbm90IGRlYWwgd2l0aCBnb29nbGUgZG9jIHRlbXBsYXRlLlwiLFxyXG4gICAgbmFtZTogXCJTYXRod2lrIFJlZGR5IE1yaWp1YW5hXCIsXHJcbiAgICB0aXRsZTogXCJDb2xsZWdlIFN0dWRlbnRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgTEdfVEVTVElNT05JQUxTX0NMQVNTTkFNRVMgPSBbXHJcbiAgXCJ6LTEwXCIsXHJcbiAgXCJ0cmFuc2xhdGUteC00NCB0cmFuc2xhdGUteS0yNCBvcGFjaXR5LTQwXCIsXHJcbiAgXCJ0cmFuc2xhdGUteC0zMiAtdHJhbnNsYXRlLXktMjggb3BhY2l0eS00MFwiLFxyXG5dO1xyXG5jb25zdCBTTV9URVNUSU1PTklBTFNfQ0xBU1NOQU1FUyA9IFtcInotMTBcIiwgXCJvcGFjaXR5LTBcIiwgXCJvcGFjaXR5LTBcIl07XHJcbmNvbnN0IFJPVEFUSU9OX0lOVEVSVkFMX01TID0gOCAqIDEwMDA7IC8vIDhzXHJcblxyXG5leHBvcnQgY29uc3QgVGVzdGltb25pYWxzID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Rlc3RpbW9uaWFsc0NsYXNzTmFtZXMsIHNldFRlc3RpbW9uaWFsc0NsYXNzTmFtZXNdID0gdXNlU3RhdGUoXHJcbiAgICBMR19URVNUSU1PTklBTFNfQ0xBU1NOQU1FU1xyXG4gICk7XHJcbiAgY29uc3QgaXNIb3ZlcmVkT25UZXN0aW1vbmlhbCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNIb3ZlcmVkT25UZXN0aW1vbmlhbC5jdXJyZW50KSB7XHJcbiAgICAgICAgc2V0VGVzdGltb25pYWxzQ2xhc3NOYW1lcygocHJlQ2xhc3NOYW1lcykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIFtwcmVDbGFzc05hbWVzWzFdLCBwcmVDbGFzc05hbWVzWzJdLCBwcmVDbGFzc05hbWVzWzBdXTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgUk9UQVRJT05fSU5URVJWQUxfTVMpO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB7IGlzTGcgfSA9IHVzZVRhaWx3aW5kQnJlYWtwb2ludHMoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGVzdGltb25pYWxzQ2xhc3NOYW1lcyhcclxuICAgICAgaXNMZyA/IExHX1RFU1RJTU9OSUFMU19DTEFTU05BTUVTIDogU01fVEVTVElNT05JQUxTX0NMQVNTTkFNRVNcclxuICAgICk7XHJcbiAgfSwgW2lzTGddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm14LWF1dG8gLW10LTggcHgtOCBwYi0yNFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItOCB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWJvbGRcIj5cclxuICAgICAgICBQZW9wbGV7XCIgXCJ9XHJcbiAgICAgICAgPEltYWdlIHNyYz17aGVhcnRTcmN9IGFsdD1cImxvdmVcIiBjbGFzc05hbWU9XCItbXQtMSBpbmxpbmUtYmxvY2sgdy03XCIgLz57XCIgXCJ9XHJcbiAgICAgICAgUHJlYW1ibGUgUmVzdW1lXHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0xMCBoLVsyMzVweF0gbWF4LXctbGcgbGc6aC1bNDAwcHhdIGxnOnB0LTI4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBsZzptbC1bLTUwcHhdXCI+XHJcbiAgICAgICAgICB7VEVTVElNT05JQUxTLm1hcCgoeyBzcmMsIHF1b3RlLCBuYW1lLCB0aXRsZSB9LCBpZHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGVzdGltb25pYWxzQ2xhc3NOYW1lc1tpZHhdO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctcHJpbWFyeSBhYnNvbHV0ZSBtYXgtdy1sZyByb3VuZGVkLVsxLjdyZW1dIGJnLW9wYWNpdHktMzAgc2hhZG93LW1kIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDAgZWFzZS1saW5lYXIgJHtjbGFzc05hbWV9YH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSBcInotMTBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzSG92ZXJlZE9uVGVzdGltb25pYWwuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gXCJ6LTEwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0hvdmVyZWRPblRlc3RpbW9uaWFsLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIm0tMSBmbGV4IGdhcC01IHJvdW5kZWQtM3hsIGJnLXdoaXRlIHAtNSB0ZXh0LWdyYXktOTAwIGxnOnAtN1wiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gaC0yNCB3LTI0IHNlbGVjdC1ub25lIHJvdW5kZWQtZnVsbCBsZzpibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJiZWZvcmU6Y29udGVudC1bJ+KAnCddIGFmdGVyOmNvbnRlbnQtWyfigJ0nXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVvdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGdhcC0yIGxnOmZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3Qtbm9uZSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg4oCiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBsZzpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJsb2NrIGgtMTIgdy0xMiBzZWxlY3Qtbm9uZSByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiaGVhcnRTcmMiLCJ0ZXN0aW1vbmlhbFNwaWVnZWxTcmMiLCJ0ZXN0aW1vbmlhbFNhbnRpU3JjIiwidGVzdGltb25pYWxWaXZpYW5TcmMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSW1hZ2UiLCJ1c2VUYWlsd2luZEJyZWFrcG9pbnRzIiwiVEVTVElNT05JQUxTIiwic3JjIiwicXVvdGUiLCJuYW1lIiwidGl0bGUiLCJMR19URVNUSU1PTklBTFNfQ0xBU1NOQU1FUyIsIlNNX1RFU1RJTU9OSUFMU19DTEFTU05BTUVTIiwiUk9UQVRJT05fSU5URVJWQUxfTVMiLCJUZXN0aW1vbmlhbHMiLCJjaGlsZHJlbiIsInRlc3RpbW9uaWFsc0NsYXNzTmFtZXMiLCJzZXRUZXN0aW1vbmlhbHNDbGFzc05hbWVzIiwiaXNIb3ZlcmVkT25UZXN0aW1vbmlhbCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJwcmVDbGFzc05hbWVzIiwiY2xlYXJJbnRlcnZhbCIsImlzTGciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJhbHQiLCJkaXYiLCJtYXAiLCJpZHgiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJmaWd1cmUiLCJibG9ja3F1b3RlIiwicCIsImZpZ2NhcHRpb24iLCJhcmlhLWhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/home/Testimonials.tsx\n"));

/***/ })

});