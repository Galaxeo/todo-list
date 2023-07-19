/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/selector.js":
/*!*************************!*\
  !*** ./src/selector.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const formEle = document.querySelector(\"div[val]\");\n  const mainEle = document.querySelector(\".main\");\n  document.querySelector(\".createTask\").onclick = (event) => {\n    formEle.classList.toggle('hidden');\n    document.querySelector(\".main\").classList.toggle('blur');\n    event.stopPropagation();\n  }\n  document.querySelector(\".main\").onclick = () => {\n    if (mainEle.classList.contains(\"blur\")) {\n      formEle.classList.toggle('hidden');\n      document.querySelector(\".main\").classList.toggle('blur');\n    } else {\n      // pass\n    }\n  }\n});\n\n\n//# sourceURL=webpack://todo-list/./src/selector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/selector.js"]();
/******/ 	
/******/ })()
;