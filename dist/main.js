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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _asset_movie_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/movie.jpg */ \"./src/asset/movie.jpg\");\n\n// eslint-disable-next-line\n\n\nconst logo = document.getElementById('logo');\nlogo.src = _asset_movie_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\n// Creating a new Movie\n// eslint-disable-next-line\n\nconst involvementId = 'VdUaJZjJhUjlpm3843JM';\nconst likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`;\nconst commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;\n// eslint-disable-next-line\nconst newShow = async () => {\n  const options = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  };\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', options);\n  const show = await response.json();\n  return show;\n};\n\nconst getUser = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const user = await response.json();\n  return user;\n};\n\nconst getNumberOfLikes = (item) => {\n  if (document.querySelector(`.item[data-index=\"${item.item_id}\"]`)) {\n    const data = document.querySelector(\n      `.item[data-index=\"${item.item_id}\"] .counter`,\n    );\n    data.textContent = item.likes;\n  }\n};\n\nconst displayLikes = async (index) => {\n  // eslint-disable-next-line\n  await likes(index);\n  // eslint-disable-next-line\n  const data = await getLikes();\n  // eslint-disable-next-line\n  const itemIndex = await data.forEach((item) => getNumberOfLikes(item));\n};\n\nconst displayShow = async () => {\n  const movieCount = document.getElementById('movies-count');\n  const display = await getUser();\n  let innerHTML = '';\n  const items = display.slice(0, 6);\n  movieCount.textContent = items.length;\n  const container = document.querySelector('.main-content');\n  items.forEach((element, index) => {\n    const movies = document.createElement('div');\n    movies.className = 'item';\n    movies.setAttribute('data-index', index);\n    innerHTML = `\n    <img class = \"content-img\" src=\"${element.image.medium}\" alt=\"\">\n    <div class=\"card-detail\"><p class=\"card-name\">${element.name}</p>\n    <i id = \"${element.id}\" class='fa fa-heart'></i></div>\n    <div class=\"count-container\"><span class=\"counter\"></span>\n    <p>likes</p></div>\n    <button id = \"${element.id}\" type = \"submit\" class=\"commentBtn\">Comments</button>\n`;\n    movies.innerHTML = innerHTML;\n    container.appendChild(movies);\n    displayLikes(element.id);\n\n    const likeButton = document.querySelector(\n      `.item[data-index=\"${index}\"] .fa-heart`,\n    );\n\n    const commentButton = document.querySelector(`.item[data-index=\"${index}\"] .commentBtn`);\n    commentButton.addEventListener('click', async () => {\n      // eslint-disable-next-line\n      displayPopUp(element, index);\n    });\n\n    likeButton.addEventListener('click', async () => {\n      // eslint-disable-next-line\n      await likes(index);\n      // eslint-disable-next-line\n      const data = await getLikes();\n      const itemIndex = await data.filter((item) => item.item_id === index);\n\n      getNumberOfLikes(itemIndex[0]);\n    });\n  });\n};\n\nconst appendComment = (comment) => {\n  const commentList = document.createElement('li');\n  commentList.innerHTML = ` <span class =\"date\">${comment.creation_date} </span> <span class=\"name\">${comment.username} </span><span class=\"comment\">${comment.comment}</span>`;\n  return commentList;\n};\n\nconst displayPopUp = async (element, index) => {\n  let innerHTML = '';\n  innerHTML += `<div id = \"${element.id}\" class=\"popup-blur\">\n    <div class=\"popup-countainer\">\n    <i class=\"fa fa-close\"></i>\n        <div class =\"img-container\"><img class=\"comment-img\" src=\"${element.image.original}\" alt=\"\">\n        </div>\n        <h2 class=\"title\">${element.name}</h2>\n        <div class=\"detail\">\n            <p class=\"langauge\">Language: ${element.language}</p>\n            <p class=\"runtime\">Runtime: ${element.runtime} mins</p>\n        </div>\n        <div class =\"summary\"> \n          <h4>Summry:</h4>\n          ${element.summary}\n        </div>\n        <div class=\"comment-section\">\n        <h3>Comments(<span id=\"comment-count\">0</span>)</h3>\n        <ul class=\"commentList\"></ul>\n        <h4>Add a comment</h4>\n        <form class=\"form\" action=\"submit\">\n            <input id = \"name\" type=\"text\" placeholder=\"Your name\">\n            <textarea name=\"comment-text\" id=\"text\" cols=\"20\" rows=\"5\" placeholder=\"Your insight\"></textarea>\n            <button id=\"submit\" type=\"submit\">Comment</button>\n        </form>\n        </div>\n</div>`;\n  const popUp = document.querySelector('.popUp');\n  popUp.innerHTML = innerHTML;\n  popUp.style.display = 'block';\n  const close = document.querySelector('.fa-close');\n  close.addEventListener('click', () => {\n    popUp.style.display = 'none';\n  });\n\n  const commentList = document.querySelector('.commentList');\n  // eslint-disable-next-line\n  const comments = await getComment(index);\n\n  if (comments.length !== 0) {\n    comments.forEach((comment) => {\n      commentList.appendChild(appendComment(comment));\n    });\n    document.querySelector('#comment-count').textContent = comments.length;\n  }\n\n  const form = document.querySelector('.form');\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const nameInput = document.querySelector('#name');\n    const textInput = document.querySelector('#text');\n    if (nameInput !== '' && textInput !== '') {\n      // eslint-disable-next-line\n      await postComment(index, nameInput.value, textInput.value);\n      const commentList = document.querySelector('.commentList');\n      commentList.innerHTML = '';\n      nameInput.value = '';\n      textInput.value = '';\n      // eslint-disable-next-line\n      const comments = await getComment(index);\n      comments.forEach((comment) => {\n        commentList.appendChild(appendComment(comment));\n      });\n      document.querySelector('#comment-count').textContent = comments.length;\n    }\n  });\n};\n\nconst likes = async (index) => {\n  const response = await fetch(likeUrl, {\n    method: 'POST',\n    headers: {\n      'content-Type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify({\n      item_id: index,\n    }),\n  });\n  return response;\n};\n\nconst getLikes = async () => {\n  const response = await fetch(likeUrl);\n  const likes = await response.json();\n  return likes;\n};\n\n// const test =(async () => {\n//   console.log(await getLikes())\n// })()\n\ndisplayShow();\n\n// API for post Comment\n\nconst postComment = async (index, username, comment) => {\n  await fetch(commentUrl, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: index,\n      username,\n      comment,\n    }),\n    headers: { 'content-Type': 'application/json; charset=UTF-8' },\n  });\n};\npostComment();\n// API for get comment\nconst getComment = async (index) => {\n  const response = await fetch(`${commentUrl}?item_id=${index}`);\n  const user = await response.json();\n  return user;\n};\ngetComment();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/asset/movie.jpg":
/*!*****************************!*\
  !*** ./src/asset/movie.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"958627edd2d504963e8f.jpg\";\n\n//# sourceURL=webpack://todo-list/./src/asset/movie.jpg?");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);