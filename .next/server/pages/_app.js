"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gc": () => (/* binding */ getCssText),
/* harmony export */   "zY": () => (/* binding */ globalCss),
/* harmony export */   "zo": () => (/* binding */ styled)
/* harmony export */ });
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_react__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const { styled , getCssText , globalCss  } = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_0__.createStitches)({
    theme: {
        fonts: {
            system: "Arial Black"
        },
        colors: {
            hiContrast: "hsl(206,10%,5%)",
            loContrast: "white"
        },
        fontSizes: {
            1: "13px",
            2: "15px",
            3: "17px"
        }
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(638);
/* harmony import */ var _src_contexts_loguin_contextLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_global_styles__WEBPACK_IMPORTED_MODULE_1__]);
_global_styles__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const GlobalRemoveCss = (0,_global_styles__WEBPACK_IMPORTED_MODULE_1__/* .globalCss */ .zY)({
    "*": {
        margin: "0",
        padding: "0"
    }
});
const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_contexts_loguin_contextLogin__WEBPACK_IMPORTED_MODULE_2__/* .LoginProvider */ .m, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            className: GlobalRemoveCss(),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ LoginContext),
/* harmony export */   "m": () => (/* binding */ LoginProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LoginContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const LoginProvider = ({ children  })=>{
    const { 0: userIsLogeed , 1: setUserISLogeed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginContext.Provider, {
        value: {
            userIsLogeed,
            setUserISLogeed
        },
        children: children
    });
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = import("@stitches/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(847));
module.exports = __webpack_exports__;

})();