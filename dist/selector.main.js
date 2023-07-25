/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Card {\n  constructor(task, dueDate, details, project) {\n    this.task = task;\n    this.dueDate = dueDate;\n    this.details = details;\n    this.project = project;\n  }\n}\nfunction createPart(ele, myClass) {\n  const myEle = document.createElement(ele);\n  myEle.classList.add(myClass);\n  return myEle\n}\nfunction card(task, due, detail) {\n  // const cardEle = new Card(task, due, detail, project);\n  const cardEle = createPart('div', 'cardCont');\n  const taskEle = createPart('h1', 'cardTask');\n  taskEle.textContent = task;\n  const dueEle = createPart('p', 'cardDue');\n  dueEle.textContent = due;\n  const detailEle = createPart('p', 'cardDetail');\n  detailEle.textContent = detail;\n  cardEle.append(taskEle, dueEle, detailEle);\n  const cardID = task.replace(/\\s/g, \"\");\n  cardEle.id = cardID;\n  return cardEle;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);\n\n\n//# sourceURL=webpack://todo-list/./src/card.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n  addTask(task) {\n    this.tasks.push(task);\n  }\n  getTask() {\n    return this.tasks;\n  }\n  getName() {\n    return this.name;\n  }\n}\n\nfunction createProject(name) {\n  return new Project(name);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/selector.js":
/*!*************************!*\
  !*** ./src/selector.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ \"./src/card.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst formEle = document.querySelector(\"div[val]\");\nconst mainEle = document.querySelector(\".main\");\nconst noProj = document.querySelector(\"#none\");\nconst submitBut = document.querySelector(\"button[class='submitBut']\");\nconst projects = [(0,_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('none')];\n\ndocument.querySelector(\".createTask\").onclick = (event) => {\n  formEle.classList.toggle('hidden');\n  document.querySelector(\".main\").classList.toggle('blur');\n  event.stopPropagation();\n}\ndocument.querySelector(\".main\").onclick = () => {\n  if (mainEle.classList.contains(\"blur\")) {\n    formEle.classList.toggle('hidden');\n    document.querySelector(\".main\").classList.toggle('blur');\n  } else {\n    // pass\n  }\n};\n\nfunction checkProjects(arr, projName, task) {\n  if (projName == \"\") {\n    return true;\n  }\n  for (const i in arr) {\n    if (projects[i].name == 'p7' + projName) {\n      projects[i].addTask(task);\n      return true; // true means found project\n    } else {\n      continue;\n    }\n  }\n  const newProj = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p7' + projName);\n  newProj.addTask(task);\n  projects.push(newProj);\n  return false; // false means did not find project\n}\n\nsubmitBut.onclick = (event) => {\n  event.preventDefault;\n  formEle.classList.toggle('hidden');\n  document.querySelector(\".main\").classList.toggle('blur');\n\n  const taskEntry = formEle.querySelector(\"input[id='Task']\").value;\n  const dueEntry = formEle.querySelector(\"input[id='Due']\").value;\n  const projectEntry = formEle.querySelector(\"input[id='Project']\").value;\n  const detailEntry = formEle.querySelector(\"input[id='Details']\").value;\n\n  const cardEle = (0,_card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskEntry, dueEntry, detailEntry);\n\n  // Project Logic\n  if (!checkProjects(projects, projectEntry, taskEntry)) {\n    const newProjDiv = document.createElement('div');\n    const newProjTitle = document.createElement('h3');\n    newProjTitle.innerHTML = projectEntry;\n    newProjDiv.setAttribute('class', 'cardProject');\n    mainEle.appendChild(newProjTitle);\n    mainEle.appendChild(newProjDiv);\n    newProjDiv.id = 'p7' + projectEntry;\n    newProjDiv.appendChild(cardEle);\n  } else {\n    const existingProj = mainEle.querySelectorAll(\"div[class='cardProject']\");\n    if (projectEntry == \"\") {\n      noProj.appendChild(cardEle);\n    }\n    for (const i in existingProj) {\n      console.log(existingProj[i]);\n      if (existingProj[i].id == 'p7' + projectEntry) {\n        existingProj[i].appendChild(cardEle);\n        break;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/selector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/selector.js");
/******/ 	
/******/ })()
;