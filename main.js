/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui.scss ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".library .statistic {\n  background-color: rgb(255, 255, 255);\n  padding: 10px;\n  border: solid black 1px;\n  text-align: right;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  border-radius: 10px;\n  z-index: 1;\n}\n\n.library .cardsView {\n  display: flex;\n  flex-wrap: wrap;\n}\n.library .cardsView .card {\n  width: 300px;\n  border: 1px solid black;\n  background: linear-gradient(180deg, rgba(173, 192, 255, 0.63) 0%, rgb(255, 255, 255) 100%);\n  border-radius: 10px;\n  margin: 15px;\n  padding: 20px;\n}\n\n.library .dialog {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.library .dialog::backdrop {\n  background-color: #000;\n  opacity: 70%;\n}\n.library .addBookForm {\n  margin: 10px;\n  padding: 50px 20px;\n  background-color: #fff;\n  width: 400px;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n}\n\n.library .addBookBtn {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 0;\n  background-color: #000;\n  color: #fff;\n  animation: pulseBtn 3s infinite;\n  position: fixed;\n  bottom: 65px;\n  right: 60px;\n  margin-left: -50%;\n  transform: translate(50%, 50%);\n  z-index: 9;\n}\n@keyframes pulseBtn {\n  0% {\n    width: 100px;\n    height: 100px;\n  }\n  50% {\n    width: 110px;\n    height: 110px;\n  }\n  100% {\n    width: 100px;\n    height: 100px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/ui.scss"],"names":[],"mappings":"AAEE;EACE,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,iBAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AADJ;;AAOE;EAEE,aAAA;EACA,eAAA;AALJ;AAOI;EACE,YAAA;EACA,uBAAA;EACA,0FAAA;EAKA,mBAAA;EACA,YAAA;EACA,aAAA;AATN;;AAgBE;EAEE,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;AAdJ;AAgBI;EACE,sBAAA;EACA,YAAA;AAdN;AAkBE;EACE,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EAEA,aAAA;EACA,sBAAA;AAjBJ;;AAuBE;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,sBAAA;EACA,WAAA;EACA,+BAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,8BAAA;EACA,UAAA;AApBJ;AAuBE;EACE;IACE,YAAA;IACA,aAAA;EArBJ;EAuBE;IACE,YAAA;IACA,aAAA;EArBJ;EAuBE;IACE,YAAA;IACA,aAAA;EArBJ;AACF","sourcesContent":[".library {\n  // statistic section\n  .statistic {\n    background-color: rgb(255, 255, 255);\n    padding: 10px;\n    border: solid black 1px;\n    text-align: right;\n    position: fixed;\n    top: 10px;\n    right: 10px;\n    border-radius: 10px;\n    z-index: 1;\n  }\n}\n\n.library {\n  // viewModel section\n  .cardsView {\n    // cards section\n    display: flex;\n    flex-wrap: wrap;\n\n    .card {\n      width: 300px;\n      border: 1px solid black;\n      background: linear-gradient(\n        180deg,\n        rgba(173, 192, 255, 0.63) 0%,\n        rgba(255, 255, 255, 1) 100%\n      );\n      border-radius: 10px;\n      margin: 15px;\n      padding: 20px;\n    }\n  }\n}\n\n.library {\n  // addBookForm\n  .dialog {\n    // z-index: 1;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n\n    &::backdrop {\n      background-color: #000;\n      opacity: 70%;\n    }\n  }\n\n  .addBookForm {\n    margin: 10px;\n    padding: 50px 20px;\n    background-color: #fff;\n    width: 400px;\n    height: 200px;\n\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.library {\n  // addBookBtn section\n  .addBookBtn {\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    border: 0;\n    background-color: #000;\n    color: #fff;\n    animation: pulseBtn 3s infinite;\n    position: fixed;\n    bottom: 65px;\n    right: 60px;\n    margin-left: -50%;\n    transform: translate(50%, 50%);\n    z-index: 9;\n  }\n\n  @keyframes pulseBtn {\n    0% {\n      width: 100px;\n      height: 100px;\n    }\n    50% {\n      width: 110px;\n      height: 110px;\n    }\n    100% {\n      width: 100px;\n      height: 100px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/ui.scss":
/*!*********************!*\
  !*** ./src/ui.scss ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./ui.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/EventCreator.js":
/*!*****************************!*\
  !*** ./src/EventCreator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class EventCreator {
  constructor(orders) {
    this.orders = orders;
  }

  append(node) {
    const targetValue = this.orders.target;
    const target = document.querySelector(targetValue);
    target.append(node);
  }

  after(node) {
    const targetValue = this.orders.target;
    const target = document.querySelector(targetValue);
    return target.after(node);
  }

  prepend(node) {
    const targetValue = this.orders.target;
    const target = document.querySelector(targetValue);
    return target.prepend(node);
  }

  static replace(trigger) {
    const elementValue = trigger;
    if (document.querySelector(elementValue)) {
      const element = document.querySelector(elementValue);
      element.remove();
    }
  }

  event() {
    const element = document.querySelector(this.orders.element);

    const action = () => {
      const triggerBefore = this.orders.replaceBeforeEvent;
      if (triggerBefore) this.constructor.replace(triggerBefore);

      const { inject } = this.orders;
      const { ui } = this.orders;
      if (ui) this[inject](ui());

      const { nextAction } = this.orders;
      if (nextAction) this.orders.nextAction();

      const triggerAfter = this.orders.replaceAfterEvent;
      if (triggerAfter) this.constructor.replace(triggerAfter);
    };

    const add = () => {
      const { type } = this.orders;
      const { eventOptions } = this.orders;
      element.addEventListener(type, action, eventOptions);
    };
    return { add };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCreator);


/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/data.json");


class Model {
  constructor(book) {
    this.book = book;
  }

  add() {}

  plugBook(arr, count) {
    const bookData = _data_json__WEBPACK_IMPORTED_MODULE_0__.exampleBook;
    for (let i = 0; i < count; i++) {
      arr.push(bookData);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);


/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/data.json");
/* harmony import */ var _ui_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.scss */ "./src/ui.scss");


// TODO full refactor of the UI class.
class UI {
  constructor() {
    this.library = document.createElement(_data_json__WEBPACK_IMPORTED_MODULE_0__.library.tag);
    this.library.className = _data_json__WEBPACK_IMPORTED_MODULE_0__.library.className;
    this.library.id = _data_json__WEBPACK_IMPORTED_MODULE_0__.library.id;
    document.body.append(this.library);
  }

  static tag(props) {
    const tag = document.createElement(props.tag);
    if (props.className) tag.className = props.className;
    if (props.id) tag.id = props.id;
    if (props.textContent) tag.textContent = props.textContent;
    if (props.type) tag.type = props.type;
    if (props.htmlFor) tag.htmlFor = props.htmlFor;
    return tag;
  }

  static btnsDraw(key, value) {
    const { buttons } = _data_json__WEBPACK_IMPORTED_MODULE_0__.viewModels.common;
    const btns = Object.entries(buttons);
    switch (key) {
      case btns[0][0]: {
        const isReadBtn = this.tag(btns[0][1]);
        if (value.textContent === 'true') {
          isReadBtn.textContent = btns[0][1].text.true;
        }
        if (value.textContent === 'false') {
          isReadBtn.textContent = btns[0][1].text.false;
        }
        const element = value;
        element.innerHTML = '';
        element.append(isReadBtn);
        break;
      }
      case btns[1][0]: {
        const btnsData = Object.values(btns[1][1].text);
        btnsData.map((text) => {
          const actionBtn = this.tag(btns[1][1]);
          actionBtn.textContent = text;
          return value.append(actionBtn);
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  settings() {
    const wrapData = _data_json__WEBPACK_IMPORTED_MODULE_0__.settings.wrap;
    const wrap = this.constructor.tag(wrapData);

    const themeData = _data_json__WEBPACK_IMPORTED_MODULE_0__.settings.toggleTheme;

    const toggleTheme = this.constructor.tag(themeData);

    const viewToggles = () => {
      const viewData = _data_json__WEBPACK_IMPORTED_MODULE_0__.settings.toggleView.view;
      const viewValues = Object.values(viewData.individual);

      const wrapper = this.constructor.tag(viewData.wrap);

      viewValues.map((type) => {
        const viewType = this.constructor.tag(viewData.common);
        viewType.id = type.id;
        viewType.textContent = type.textContent;
        return wrapper.append(viewType);
      });
      return wrapper;
    };

    const toggleView = () => {
      const viewData = _data_json__WEBPACK_IMPORTED_MODULE_0__.settings.toggleView;
      const viewWrap = this.constructor.tag(viewData.wrap);

      const viewBtn = this.constructor.tag(viewData.toggle);
      viewWrap.append(viewBtn);
      return viewWrap;
    };

    const dropdown = viewToggles();

    wrap.append(toggleTheme);
    wrap.append(toggleView());

    return { wrap, dropdown };
  }

  statistic() {
    const wrapData = _data_json__WEBPACK_IMPORTED_MODULE_0__.statistic.wrap;
    const casing = this.constructor.tag(wrapData);

    const headerData = _data_json__WEBPACK_IMPORTED_MODULE_0__.statistic.header;
    const header = this.constructor.tag(headerData);

    const appendStatFields = () => {
      const { common } = _data_json__WEBPACK_IMPORTED_MODULE_0__.statistic.fields;
      const { individual } = _data_json__WEBPACK_IMPORTED_MODULE_0__.statistic.fields;

      const fieldsDescription = Object.values(individual);
      fieldsDescription.map((field) => {
        const wrap = this.constructor.tag(common.wrap);

        const title = this.constructor.tag(common.title);
        title.textContent = field.titleContent;

        const value = this.constructor.tag(common.value);
        value.id = field.valueId;

        wrap.append(title);
        wrap.append(value);
        return casing.append(wrap);
      });
    };

    casing.append(header);
    appendStatFields();
    return casing;
  }

  cardView(myLibrary) {
    const { cards } = _data_json__WEBPACK_IMPORTED_MODULE_0__.viewModels;

    const shellData = cards.shell;
    const shell = this.constructor.tag(shellData);

    myLibrary.map((book) => {
      const coverData = cards.cover;
      const cover = this.constructor.tag(coverData);

      const bookKeys = Object.keys(book);
      bookKeys.map((key) => {
        const stringData = cards.field;
        const string = this.constructor.tag(stringData);

        const titleData = cards.title;
        const title = this.constructor.tag(titleData);

        const headersData = _data_json__WEBPACK_IMPORTED_MODULE_0__.viewModels.common.headers;
        title.textContent = headersData[key];

        const valueData = cards.value;
        const value = this.constructor.tag(valueData);
        value.textContent = book[key];
        this.constructor.btnsDraw(key, value);

        string.append(title);
        string.append(value);
        return cover.append(string);
      });
      return shell.append(cover);
    });
    return shell;
  }

  tableView(myLibrary) {
    const tableData = _data_json__WEBPACK_IMPORTED_MODULE_0__.viewModels.table;

    const tableTagData = _data_json__WEBPACK_IMPORTED_MODULE_0__.viewModels.table.table;
    const table = this.constructor.tag(tableTagData);

    const trData = tableData.tr;

    const trTh = this.constructor.tag(trData);

    const bookKeys = Object.keys(myLibrary[0]);
    const headersData = _data_json__WEBPACK_IMPORTED_MODULE_0__.viewModels.common.headers;

    bookKeys.map((key) => {
      const thData = tableData.th;
      const th = document.createElement(thData.tag);
      th.className = thData.className;

      const header = headersData[key].slice(0, -2);
      th.textContent = header;

      return trTh.append(th);
    });

    table.append(trTh);

    myLibrary.map((book) => {
      const trTd = this.constructor.tag(trData);

      const bookHeaderKeys = Object.keys(book);
      bookHeaderKeys.map((key) => {
        const tdData = tableData.td;
        const td = this.constructor.tag(tdData);
        td.textContent = book[key];
        this.constructor.btnsDraw(key, td);

        return trTd.append(td);
      });
      return table.append(trTd);
    });

    return table;
  }

  addBookForm() {
    const addBookFormData = _data_json__WEBPACK_IMPORTED_MODULE_0__.addBookForm;

    const wrapData = addBookFormData.wrap;
    const wrap = this.constructor.tag(wrapData);
    wrap.className = wrapData.className;
    wrap.id = wrapData.id;

    const formData = addBookFormData.form;
    const form = this.constructor.tag(formData);

    const headerData = addBookFormData.title;
    const header = this.constructor.tag(headerData);

    const formFieldsData = addBookFormData.field;
    const fieldData = formFieldsData.wrap;
    const titleData = formFieldsData.title;
    const inputData = formFieldsData.input;
    const fieldsInputData = formFieldsData.inputData;

    const fieldsAdd = () => {
      const inputs = Object.entries(fieldsInputData);
      inputs.map((settings) => {
        const setInputs = { ...settings[1] };
        const setFields = { ...fieldData };
        const setTitles = { ...titleData };

        setFields.htmlFor = setInputs.id;
        const field = this.constructor.tag(setFields);

        setTitles.textContent = settings[1].textContent;
        const title = this.constructor.tag(setTitles);

        setInputs.tag = inputData.tag;
        delete setInputs.textContent;
        const input = this.constructor.tag(setInputs);

        field.append(title, input);
        return form.append(field);
      });
    };

    const btnsAdd = () => {
      const btnsData = addBookFormData.buttons;
      const btns = Object.entries(btnsData);
      btns.map((setting) => {
        const btn = this.constructor.tag(setting[1]);
        return form.append(btn);
      });
    };

    form.append(header);
    fieldsAdd();
    btnsAdd();
    wrap.append(form);
    return wrap;
  }

  addBookBtn() {
    const btnData = _data_json__WEBPACK_IMPORTED_MODULE_0__.addBookBtn;
    const btn = this.constructor.tag(btnData);
    return btn;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/UiCreator.js":
/*!**************************!*\
  !*** ./src/UiCreator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class UiCreator {
  constructor(element, ...rest) {
    this.element = document.querySelector(element);
    this.rest = [...rest];
  }

  render() {
    return this.rest.forEach((i) => {
      this.element.append(i);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UiCreator);


/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"library":{"tag":"div","className":"library","id":"library"},"settings":{"wrap":{"tag":"div","className":"settings"},"toggleTheme":{"tag":"button","className":"toggleTheme","id":"light","light":"Light Theme","textContent":"Dark Theme"},"toggleView":{"wrap":{"tag":"div","className":"dropdown"},"toggle":{"tag":"span","className":"toggleView","id":"toggleView","textContent":"Change Book View"},"view":{"wrap":{"tag":"div","className":"dropdown-content"},"common":{"tag":"button","className":"toggleView"},"individual":{"card":{"id":"toggleCard","textContent":"Card View"},"table":{"id":"toggleTable","textContent":"Table View"}}}}},"statistic":{"wrap":{"tag":"div","className":"statistic"},"header":{"tag":"h2","className":"header","textContent":"Statistics"},"fields":{"common":{"wrap":{"tag":"p","className":"field"},"title":{"tag":"span","className":"title"},"value":{"tag":"span","className":"value"}},"individual":{"books":{"titleContent":"Books in the library: ","valueId":"booksNum"},"read":{"titleContent":"Read books: ","valueId":"readNum"},"pages":{"titleContent":"Pages in total: ","valueId":"pagesNum"},"forgotten":{"titleContent":"Forgotten books: ","valueId":"forgotNum"}}}},"viewModels":{"common":{"headers":{"id":"Book id: ","author":"Author: ","title":"Book title: ","pages":"Number of pages: ","publish":"Publish date: ","start":"Start reading: ","finish":"Finish reading: ","isRead":"Is it read: ","created":"Created: ","actions":"Actions: "},"buttons":{"isRead":{"tag":"button","className":"isRead","text":{"true":"Yes.","false":"No."}},"actions":{"tag":"button","className":"actionBtn","text":{"edit":"Edit.","delete":"Delete."}}}},"cards":{"shell":{"tag":"div","className":"cardsView","id":"view"},"cover":{"tag":"div","className":"card"},"field":{"tag":"p","className":"bookField"},"title":{"tag":"span","className":"fieldTitle"},"value":{"tag":"span","className":"fieldValue"}},"table":{"table":{"tag":"table","className":"tableView","id":"view"},"tr":{"tag":"tr","className":"tableRow"},"th":{"tag":"th","className":"tableHeader"},"td":{"tag":"td","className":"tableData"}}},"addBookForm":{"wrap":{"tag":"dialog","className":"dialog","id":"form"},"form":{"tag":"form","className":"addBookForm"},"title":{"tag":"h2","className":"formHeader","textContent":"Please, add the Book."},"field":{"wrap":{"tag":"label","className":""},"title":{"tag":"span","className":""},"input":{"tag":"input"},"inputData":{"author":{"textContent":"Author: ","type":"text","className":"","id":"author"},"title":{"textContent":"Title: ","type":"text","className":"","id":"title"},"pages":{"textContent":"Number of pages: ","type":"number","className":"","id":"pageNum"},"publish":{"textContent":"Publish date: ","type":"date","className":"","id":"pubDate"},"start":{"textContent":"Start reading Date: ","type":"date","className":"","id":"startDate"},"finish":{"textContent":"Finish reading date: ","type":"date","className":"","id":"finishDate"},"isRead":{"textContent":"Is it read?","type":"checkbox","className":"","id":"isRead"}}},"buttons":{"save":{"tag":"button","textContent":"Save","id":"save","type":"submit","className":"formBtn save"},"close":{"tag":"button","textContent":"Close","id":"close","type":"button","className":"formBtn close"}}},"addBookBtn":{"tag":"button","className":"addBookBtn","id":"addBook","textContent":"Add Book"},"exampleBook":{"id":"mb-1","author":"Good guy","title":"Best Seller","pages":"823","publish":"2021-12-31","start":"2022-01-11","finish":"2022-02-28","isRead":false,"created":"2021-09-20 23:59:59","actions":null}}');

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model */ "./src/Model.js");
/* harmony import */ var _UiCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UiCreator */ "./src/UiCreator.js");
/* harmony import */ var _EventCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventCreator */ "./src/EventCreator.js");





const myLibrary = [];
const deletedBooks = [];

const ui = new _UI__WEBPACK_IMPORTED_MODULE_0__["default"]();
const shelve = new _Model__WEBPACK_IMPORTED_MODULE_1__["default"]();

shelve.plugBook(myLibrary, 9);

const mainPage = new _UiCreator__WEBPACK_IMPORTED_MODULE_2__["default"](
  '#library',
  ui.settings().wrap,
  ui.statistic(),
  ui.cardView(myLibrary),
  ui.addBookBtn(),
);

mainPage.render();

const bookBtn = new _EventCreator__WEBPACK_IMPORTED_MODULE_3__["default"]({
  element: '#addBook',
  target: '#addBook',
  inject: 'after',
  type: 'click',
  eventOptions: { once: true },
  replaceAfterEvent: '#addBook',
  ui() {
    return ui.addBookForm();
  },
  nextAction() {
    const dialog = document.querySelector('#form');
    dialog.showModal();
    formCloseBtn.event().add();
  },
});

const formCloseBtn = new _EventCreator__WEBPACK_IMPORTED_MODULE_3__["default"]({
  element: '#close',
  target: '#library',
  inject: 'append',
  type: 'click',
  replaceAfterEvent: '#form',
  eventOptions: { once: true },
  ui() {
    return ui.addBookBtn();
  },
  nextAction() {
    bookBtn.event().add();
  },
});

bookBtn.event().add();

const card = new _EventCreator__WEBPACK_IMPORTED_MODULE_3__["default"]({
  element: '#toggleCard',
  target: '.statistic',
  inject: 'after',
  type: 'click',
  replaceBeforeEvent: '#view',
  ui() {
    return ui.cardView(myLibrary);
  },
});

const table = new _EventCreator__WEBPACK_IMPORTED_MODULE_3__["default"]({
  element: '#toggleTable',
  target: '.statistic',
  inject: 'after',
  type: 'click',
  replaceBeforeEvent: '#view',
  ui() {
    return ui.tableView(myLibrary);
  },
});

const toggleViewFold = new _EventCreator__WEBPACK_IMPORTED_MODULE_3__["default"]({
  element: '.dropdown',
  replaceAfterEvent: '.dropdown-content',
  type: 'mouseleave',
  eventOptions: { once: true },
  nextAction() {
    toggleViewUnfold.event().add();
  },
});

const toggleViewUnfold = new _EventCreator__WEBPACK_IMPORTED_MODULE_3__["default"]({
  element: '#toggleView',
  target: '#toggleView',
  inject: 'after',
  type: 'mouseenter',
  eventOptions: { once: true },
  ui() {
    return ui.settings().dropdown;
  },
  nextAction() {
    toggleViewFold.event().add();
    table.event().add();
    card.event().add();
  },
});

toggleViewUnfold.event().add();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map