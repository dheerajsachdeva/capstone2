"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  border: 0;\\r\\n  font-family: Circular Std, sans-serif;\\r\\n  box-sizing: border-box;\\r\\n  color: #ebecf0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #1e2c36;\\r\\n}\\r\\n\\r\\n.main-header {\\r\\n  display: flex;\\r\\n  justify-content: left;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n  margin: 5% 3%;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  width: 7%;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n  background-color: rgba(255, 217, 0, 0.167);\\r\\n}\\r\\n\\r\\n.header-link {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.link {\\r\\n  width: auto;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.like-icon {\\r\\n  background-color: red;\\r\\n  border: 2px solid red;\\r\\n  width: 24px;\\r\\n  height: 24px;\\r\\n}\\r\\n\\r\\n.main-content {\\r\\n  margin: 5% 3% 5% 3%;\\r\\n  display: grid;\\r\\n\\r\\n  /* justify-content: center; */\\r\\n  align-items: center;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  gap: 25px 70px;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\n.content-img {\\r\\n  width: 70%;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.content-img:hover {\\r\\n  transition: 1s;\\r\\n  transform: scale(1.1, 1.1);\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\n.count-container {\\r\\n  display: flex;\\r\\n  margin-left: 16%;\\r\\n  gap: 5px;\\r\\n  align-self: flex-start;\\r\\n}\\r\\n\\r\\n.card-detail {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 68%;\\r\\n  margin: 2% 0;\\r\\n}\\r\\n\\r\\n.fa-heart:hover {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.popUp {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.popup-blur {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: 15;\\r\\n  padding: 1rem 1rem;\\r\\n  overflow-y: auto;\\r\\n  color: #fff;\\r\\n  opacity: 1;\\r\\n  background-color: rgba(0, 0, 0, 0.93);\\r\\n\\r\\n  /* animation: slideIN 0.6s linear both; */\\r\\n}\\r\\n\\r\\n.popup-countainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin: 0 5%;\\r\\n  gap: 15px;\\r\\n  background: #22323d;\\r\\n\\r\\n  /* height: 98vh; */\\r\\n}\\r\\n\\r\\n.img-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n.comment-img {\\r\\n  margin: 1% 0;\\r\\n  height: 300px;\\r\\n}\\r\\n\\r\\n.fa-close {\\r\\n  font-size: 30px;\\r\\n  align-self: flex-end;\\r\\n  margin: 5px 20px 0 0;\\r\\n}\\r\\n\\r\\n.detail {\\r\\n  margin: 2px 0;\\r\\n  gap: 2px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.summary {\\r\\n  padding: 0 3%;\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\n.comment-section {\\r\\n  display: flex;\\r\\n  width: 50%;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 5px;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n#submit {\\r\\n  width: 100%;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  color: #1e2c36;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  color: #1e2c36;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: 1px solid #000;\\r\\n  padding: 3% 5%;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: #1e2c36;\\r\\n  align-self: center;\\r\\n  padding: 2% 5%;\\r\\n\\r\\n  /* margin: 2% 0; */\\r\\n  width: 70%;\\r\\n  border: 1px solid #ebecf0;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  color: #1e2c36;\\r\\n  font-weight: 800;\\r\\n  background-color: #ebecf0;\\r\\n  border: 5px solid #525201;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _asset_movie_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/movie.jpg */ \"./src/asset/movie.jpg\");\n\r\n\r\n\r\n// eslint-disable-next-line\r\n\r\n\r\n\r\nconst logo = document.getElementById('logo');\r\nlogo.src = _asset_movie_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n// Creating a new Movie\r\n// eslint-disable-next-line\r\n\r\n\r\n\r\nconst getNumberOfLikes = (item) => {\r\n  if (document.querySelector(`.item[data-index=\"${item.item_id}\"]`)) {\r\n    const data = document.querySelector(\r\n      `.item[data-index=\"${item.item_id}\"] .counter`,\r\n    );\r\n    data.textContent = item.likes;\r\n  }\r\n};\r\n\r\nconst displayLikes = async (index) => {\r\n  // eslint-disable-next-line\r\n  await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.likes)(index);\r\n  // eslint-disable-next-line\r\n  const data = await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\r\n  // eslint-disable-next-line\r\n  const itemIndex = await data.forEach((item) => getNumberOfLikes(item));\r\n};\r\n\r\nconst displayShow = async () => {\r\n  const movieCount = document.getElementById('movies-count');\r\n  const display = await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.getUser)();\r\n  let innerHTML = '';\r\n  const items = display.slice(0, 6);\r\n  movieCount.textContent = items.length;\r\n  const container = document.querySelector('.main-content');\r\n  items.forEach((element, index) => {\r\n    const movies = document.createElement('div');\r\n    movies.className = 'item';\r\n    movies.setAttribute('data-index', index);\r\n    innerHTML = `\r\n    <img class = \"content-img\" src=\"${element.image.medium}\" alt=\"\">\r\n    <div class=\"card-detail\"><p class=\"card-name\">${element.name}</p>\r\n    <i id = \"${element.id}\" class='fa fa-heart'></i></div>\r\n    <div class=\"count-container\"><span class=\"counter\"></span>\r\n    <p>likes</p></div>\r\n    <button id = \"${element.id}\" type = \"submit\" class=\"commentBtn\">Comments</button>\r\n`;\r\n    movies.innerHTML = innerHTML;\r\n    container.appendChild(movies);\r\n    displayLikes(element.id);\r\n\r\n    const likeButton = document.querySelector(\r\n      `.item[data-index=\"${index}\"] .fa-heart`,\r\n    );\r\n\r\n    const commentButton = document.querySelector(`.item[data-index=\"${index}\"] .commentBtn`);\r\n    commentButton.addEventListener('click', async () => {\r\n      // eslint-disable-next-line\r\n      (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_2__.displayPopUp)(element, index);\r\n    });\r\n\r\n    likeButton.addEventListener('click', async () => {\r\n      // eslint-disable-next-line\r\n      await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.likes)(index);\r\n      // eslint-disable-next-line\r\n      const data = await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\r\n      const itemIndex = await data.filter((item) => item.item_id === index);\r\n\r\n      getNumberOfLikes(itemIndex[0]);\r\n    });\r\n  });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// const test =(async () => {\r\n//   console.log(await getLikes())\r\n// })()\r\n\r\ndisplayShow();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getUser\": () => (/* binding */ getUser),\n/* harmony export */   \"likes\": () => (/* binding */ likes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst involvementId = 'VdUaJZjJhUjlpm3843JM';\r\nconst likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`;\r\nconst commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;\r\n\r\nconst getUser = async () => {\r\n    const response = await fetch('https://api.tvmaze.com/shows');\r\n    const user = await response.json();\r\n    return user;\r\n  };\r\n\r\n  const likes = async (index) => {\r\n    const response = await fetch(likeUrl, {\r\n      method: 'POST',\r\n      headers: {\r\n        'content-Type': 'application/json; charset=UTF-8',\r\n      },\r\n      body: JSON.stringify({\r\n        item_id: index,\r\n      }),\r\n    });\r\n    return response;\r\n  };\r\n  \r\n  const getLikes = async () => {\r\n    const response = await fetch(likeUrl);\r\n    const likes = await response.json();\r\n    return likes;\r\n  };\r\n\r\n  // API for post Comment\r\n\r\nconst postComment = async (index, username, comment) => {\r\n    await fetch(commentUrl, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: index,\r\n        username,\r\n        comment,\r\n      }),\r\n      headers: { 'content-Type': 'application/json; charset=UTF-8' },\r\n    });\r\n  };\r\n\r\n  // API for get comment\r\n  const getComment = async (index) => {\r\n    const response = await fetch(`${commentUrl}?item_id=${index}`);\r\n    const user = await response.json();\r\n    return user;\r\n  };\r\n\r\n  \n\n//# sourceURL=webpack://todo-list/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPopUp\": () => (/* binding */ displayPopUp)\n/* harmony export */ });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/modules/API.js\");\n\r\n\r\nconst appendComment = (comment) => {\r\n    const commentList = document.createElement('li');\r\n    commentList.innerHTML = ` <span class =\"date\">${comment.creation_date} </span> <span class=\"name\">${comment.username} </span><span class=\"comment\">${comment.comment}</span>`;\r\n    return commentList;\r\n  };\r\n\r\nconst displayPopUp = async (element, index) => {\r\n    let innerHTML = '';\r\n    innerHTML += `<div id = \"${element.id}\" class=\"popup-blur\">\r\n      <div class=\"popup-countainer\">\r\n      <i class=\"fa fa-close\"></i>\r\n          <div class =\"img-container\"><img class=\"comment-img\" src=\"${element.image.original}\" alt=\"\">\r\n          </div>\r\n          <h2 class=\"title\">${element.name}</h2>\r\n          <div class=\"detail\">\r\n              <p class=\"langauge\">Language: ${element.language}</p>\r\n              <p class=\"runtime\">Runtime: ${element.runtime} mins</p>\r\n          </div>\r\n          <div class =\"summary\"> \r\n            <h4>Summry:</h4>\r\n            ${element.summary}\r\n          </div>\r\n          <div class=\"comment-section\">\r\n          <h3>Comments(<span id=\"comment-count\">0</span>)</h3>\r\n          <ul class=\"commentList\"></ul>\r\n          <h4>Add a comment</h4>\r\n          <form class=\"form\" action=\"submit\">\r\n              <input id = \"name\" type=\"text\" placeholder=\"Your name\">\r\n              <textarea name=\"comment-text\" id=\"text\" cols=\"20\" rows=\"5\" placeholder=\"Your insight\"></textarea>\r\n              <button id=\"submit\" type=\"submit\">Comment</button>\r\n          </form>\r\n          </div>\r\n  </div>`;\r\n    const popUp = document.querySelector('.popUp');\r\n    popUp.innerHTML = innerHTML;\r\n    popUp.style.display = 'block';\r\n    const close = document.querySelector('.fa-close');\r\n    close.addEventListener('click', () => {\r\n      popUp.style.display = 'none';\r\n    });\r\n  \r\n    const commentList = document.querySelector('.commentList');\r\n    // eslint-disable-next-line\r\n    const comments = await (0,_API__WEBPACK_IMPORTED_MODULE_0__.getComment)(index);\r\n  \r\n    if (comments.length !== 0) {\r\n      comments.forEach((comment) => {\r\n        commentList.appendChild(appendComment(comment));\r\n      });\r\n      document.querySelector('#comment-count').textContent = comments.length;\r\n    }\r\n  \r\n    const form = document.querySelector('.form');\r\n    form.addEventListener('submit', async (event) => {\r\n      event.preventDefault();\r\n      const nameInput = document.querySelector('#name');\r\n      const textInput = document.querySelector('#text');\r\n      if (nameInput !== '' && textInput !== '') {\r\n        // eslint-disable-next-line\r\n        await (0,_API__WEBPACK_IMPORTED_MODULE_0__.postComment)(index, nameInput.value, textInput.value);\r\n        const commentList = document.querySelector('.commentList');\r\n        commentList.innerHTML = '';\r\n        nameInput.value = '';\r\n        textInput.value = '';\r\n        // eslint-disable-next-line\r\n        const comments = await (0,_API__WEBPACK_IMPORTED_MODULE_0__.getComment)(index);\r\n        comments.forEach((comment) => {\r\n          commentList.appendChild(appendComment(comment));\r\n        });\r\n        document.querySelector('#comment-count').textContent = comments.length;\r\n      }\r\n    });\r\n  };\r\n\r\n  \n\n//# sourceURL=webpack://todo-list/./src/modules/comment.js?");

/***/ }),

/***/ "./src/asset/movie.jpg":
/*!*****************************!*\
  !*** ./src/asset/movie.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba920e1d195ed8c5f5f9.jpg\";\n\n//# sourceURL=webpack://todo-list/./src/asset/movie.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);