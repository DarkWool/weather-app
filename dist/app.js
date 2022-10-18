/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;500;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n:root {\n    --darkColor: rgb(13, 16, 22);\n}\n\nhtml {\n    font-size: 10px;\n    height: 100%;\n}\n\nbody {\n    line-height: 1.2;\n}\n\nbody, button, input, select, textarea {\n    font-family: Roboto, sans-serif;\n    font-size: 1.6rem;\n    color: black;\n    text-rendering: optimizeLegibility;\n}\n\ninput, textarea {\n    appearance: none;\n    width: 100%;\n    border-radius: 4px;\n    border: 1px solid hsl(216, 14%, 75%);\n    border: 0;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n\n\n\n/* ----- Curr weather ----- */\n.weather {\n    padding: 40px 0 80px;\n    color: white;\n    /* background-image: url(\"./images/cloudy.jpg\"); */\n    background-position: center center;\n    background-size: cover;\n    background-color: hsla(0, 0%, 0%, 0.5);\n    background-blend-mode: darken;\n}\n\n.weather_searchbar {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 5px 10px;\n    border-radius: 4px;\n    background-color: aliceblue;\n}\n\n.weather_searchbar:focus-within {\n    outline: 2px solid hsl(211, 100%, 59%);\n}\n\n.weather_search-input {\n    background: transparent;\n}\n\n.weather_search-input:focus {\n    border: none;\n    outline: none;\n}\n\n.searchbar-icon {\n    left: 5px;\n}\n\n.weather_info {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    margin-top: 80px;\n}\n\n.weather_temp {\n    font-size: 6.4rem;\n    line-height: 1;\n}\n\n.weather_city {\n    font-size: 3rem;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.weather_sun-extras {\n    display: flex;\n    align-items: center;\n    gap: 50px;\n}\n\n.weather_sun-item {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.weather_extras {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 60px;\n}\n\n.weather_extra-block {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    grid-template-rows: repeat(2, auto);\n    align-items: center;\n    column-gap: 10px;\n}\n\n.weather_extra-block > .icon-container {\n    grid-row: span 2;\n}\n\n.weather_extra-val {\n    font-size: 2rem;\n}\n\n.weather_extra-title {\n    font-weight: 600;\n}\n\n\n\n\n/* ----- Hourly forecast ----- */\n.hourly-fc {\n    padding: 50px 0;\n    background-color: var(--darkColor);\n    color: white;\n    fill: white;\n}\n\n.hourly_items {\n    display: flex;\n    column-gap: 60px;\n    margin-top: 40px;\n    padding-bottom: 10px;\n    overflow-x: auto;\n}\n\n.hourly_item {\n    display: flex;\n    flex-direction: column;\n    row-gap: 5px;\n}\n\n.hourly_temp {\n    font-size: 2.4rem;\n}\n\n.hourly_time {\n    font-weight: 600;\n}\n\n\n\n\n/* ----- Utilities ----- */\n.section-subtitle {\n    font-size: 2.4rem;\n    font-weight: bold;\n    line-height: 1;\n    text-align: center;\n}\n\n.icon-container > svg {\n    display: block;\n}\n\n.content-margin {\n    margin: 0 auto;\n    max-width: 1100px;\n}\n\n.txt-center {\n    text-align: center;\n}\n\n.fw-600 {\n    font-weight: 600;\n}\n\n.span-2-col {\n    grid-column: span 2;\n}\n\n.dark-bg {\n    background-color: var(--darkColor);\n    color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;IAC/B,iBAAiB;IACjB,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,oCAAoC;IACpC,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,SAAS;AACb;;;;;AAKA,6BAA6B;AAC7B;IACI,oBAAoB;IACpB,YAAY;IACZ,kDAAkD;IAClD,kCAAkC;IAClC,sBAAsB;IACtB,sCAAsC;IACtC,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;;;;AAKA,gCAAgC;AAChC;IACI,eAAe;IACf,kCAAkC;IAClC,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;;;;AAKA,0BAA0B;AAC1B;IACI,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;500;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n:root {\n    --darkColor: rgb(13, 16, 22);\n}\n\nhtml {\n    font-size: 10px;\n    height: 100%;\n}\n\nbody {\n    line-height: 1.2;\n}\n\nbody, button, input, select, textarea {\n    font-family: Roboto, sans-serif;\n    font-size: 1.6rem;\n    color: black;\n    text-rendering: optimizeLegibility;\n}\n\ninput, textarea {\n    appearance: none;\n    width: 100%;\n    border-radius: 4px;\n    border: 1px solid hsl(216, 14%, 75%);\n    border: 0;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n\n\n\n/* ----- Curr weather ----- */\n.weather {\n    padding: 40px 0 80px;\n    color: white;\n    /* background-image: url(\"./images/cloudy.jpg\"); */\n    background-position: center center;\n    background-size: cover;\n    background-color: hsla(0, 0%, 0%, 0.5);\n    background-blend-mode: darken;\n}\n\n.weather_searchbar {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 5px 10px;\n    border-radius: 4px;\n    background-color: aliceblue;\n}\n\n.weather_searchbar:focus-within {\n    outline: 2px solid hsl(211, 100%, 59%);\n}\n\n.weather_search-input {\n    background: transparent;\n}\n\n.weather_search-input:focus {\n    border: none;\n    outline: none;\n}\n\n.searchbar-icon {\n    left: 5px;\n}\n\n.weather_info {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    margin-top: 80px;\n}\n\n.weather_temp {\n    font-size: 6.4rem;\n    line-height: 1;\n}\n\n.weather_city {\n    font-size: 3rem;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.weather_sun-extras {\n    display: flex;\n    align-items: center;\n    gap: 50px;\n}\n\n.weather_sun-item {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.weather_extras {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 60px;\n}\n\n.weather_extra-block {\n    display: grid;\n    grid-template-columns: repeat(2, auto);\n    grid-template-rows: repeat(2, auto);\n    align-items: center;\n    column-gap: 10px;\n}\n\n.weather_extra-block > .icon-container {\n    grid-row: span 2;\n}\n\n.weather_extra-val {\n    font-size: 2rem;\n}\n\n.weather_extra-title {\n    font-weight: 600;\n}\n\n\n\n\n/* ----- Hourly forecast ----- */\n.hourly-fc {\n    padding: 50px 0;\n    background-color: var(--darkColor);\n    color: white;\n    fill: white;\n}\n\n.hourly_items {\n    display: flex;\n    column-gap: 60px;\n    margin-top: 40px;\n    padding-bottom: 10px;\n    overflow-x: auto;\n}\n\n.hourly_item {\n    display: flex;\n    flex-direction: column;\n    row-gap: 5px;\n}\n\n.hourly_temp {\n    font-size: 2.4rem;\n}\n\n.hourly_time {\n    font-weight: 600;\n}\n\n\n\n\n/* ----- Utilities ----- */\n.section-subtitle {\n    font-size: 2.4rem;\n    font-weight: bold;\n    line-height: 1;\n    text-align: center;\n}\n\n.icon-container > svg {\n    display: block;\n}\n\n.content-margin {\n    margin: 0 auto;\n    max-width: 1100px;\n}\n\n.txt-center {\n    text-align: center;\n}\n\n.fw-600 {\n    font-weight: 600;\n}\n\n.span-2-col {\n    grid-column: span 2;\n}\n\n.dark-bg {\n    background-color: var(--darkColor);\n    color: white;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateWeatherData": () => (/* binding */ updateWeatherData)
/* harmony export */ });
/* harmony import */ var _weather_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api.js */ "./src/modules/weather-api.js");


// Dom cache
const searchForm = document.getElementsByName("searchWeather")[0];
const currTemp = document.getElementsByClassName("weather_temp")[0];
const currTempDesc = document.getElementsByClassName("weather_temp-desc")[0];
const currCity = document.getElementsByClassName("weather_city")[0];
const sunrise = document.getElementById("sunriseValue");
const sunset = document.getElementById("sunsetValue");
const weatherExtras = document.getElementsByClassName("weather_extra-val");
const hourlyForecastContainer = document.getElementsByClassName("hourly_items")[0];


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchValue = e.target.elements["weatherLocation"].value;
    (0,_weather_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(searchValue);
});


function updateWeatherData(data) {
    currTemp.textContent = data.current.temp;
    currTempDesc.textContent = data.current.tempDesc;
    currCity.textContent = data.current.location;
    sunrise.textContent = data.current.sunrise;
    sunset.textContent = data.current.sunset;

    weatherExtras[0].textContent = data.current.feelsLike;
    weatherExtras[1].textContent = data.current.humidity;
    weatherExtras[2].textContent = data.current.pressure;
    weatherExtras[3].textContent = data.current.windSpeed;
    weatherExtras[4].textContent = data.current.visibility;
    weatherExtras[5].textContent = data.current.uvi;

    const fragment = document.createDocumentFragment();
    for (const item of data.hourly) {
        fragment.append(createHourlyForecastItems(item));
    }

    hourlyForecastContainer.innerHTML = "";
    hourlyForecastContainer.append(fragment);
}

function createHourlyForecastItems(data) {
    const container = document.createElement("li");
    const iconContainer = document.createElement("span");
    const temp = iconContainer.cloneNode();
    const hour = iconContainer.cloneNode();
    
    container.classList.add("hourly_item");
    iconContainer.classList.add("icon-container");
    temp.classList.add("hourly_temp");
    hour.classList.add("hourly_time");
    
    temp.textContent = data.temp;
    hour.textContent = data.hour;
    iconContainer.innerHTML = `<svg width="36" height="36" viewBox="0 0 24 24">
    <path d="M9.417 0h6.958l-3.375 8h7l-13 16 4.375-11h-7.375z" /></svg>`;
    
    container.append(iconContainer, temp, hour);

    if (data.pop >= 20) {
        const pop = document.createElement("span");
        pop.textContent = data.pop + "%";
        temp.after(pop);
    }

    return container;
}




/***/ }),

/***/ "./src/modules/weather-api.js":
/*!************************************!*\
  !*** ./src/modules/weather-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData)
/* harmony export */ });
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/modules/ui.js");


const key = "e0a910cf9f2a35b506f136dacc4f145f";


async function fetchWeatherData(location) {
    // Get latitude, longitude for location
    const coords = await getCoordinates(location);
    
    // Get weather data
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts&units=metric&appid=${key}`);
    const data = await response.json();
    
    console.log(coords);
    console.log(data);
    
    const formattedData = formatWeatherData(data, coords.locationName);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.updateWeatherData)(formattedData);
}

async function getCoordinates(location) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key}`);
    const data = await response.json();
    console.log(data);

    return {
        locationName: `${data[0].name}, ${data[0].country}`,
        lat: data[0].lat,
        lon: data[0].lon,
    }
}

function formatWeatherData(data, location) {
    let sunrise = new Date(data.current.sunrise * 1000);
    let sunset = new Date(data.current.sunset * 1000);

    sunrise = `${sunrise.getHours()}:${sunrise.getMinutes()}`; 
    sunset = `${sunset.getHours()}:${sunset.getMinutes()}`; 

    const hourlyForecast = data.hourly.slice(1, 25);
    const newArr = [];
    hourlyForecast.forEach((el, index) => {
        let hour = new Date(el.dt * 1000);
        hour = `${hour.getHours()}:${hour.getMinutes()}`;

        newArr[index] = {
            hour,
            "temp": `${Math.round(el.temp)}°C`,
            "pop": Math.round(el.pop * 100),
        };
    });

    let tempDesc = data.current.weather[0].description[0].toUpperCase() + data.current.weather[0].description.slice(1);

    return {
        "current": {
            "temp": `${Math.round(data.current.temp)}°C`,
            tempDesc,
            "feelsLike": `${Math.round(data.current.feels_like)}°C`,
            "humidity": `${data.current.humidity} %`,
            "pressure": `${data.current.pressure} hpa`,
            "windSpeed": `${data.current["wind_speed"]}m/s`,
            "visibility": `${data.current.visibility / 1000}km`,
            "uvi": `${Math.round(data.current.uvi)}`,
            sunrise,
            sunset,
            location,
        },
        "hourly": newArr,
    }
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ "./src/modules/ui.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEUsMkJBQTJCLHVCQUF1QjtBQUNsRCwyQkFBMkIsdUJBQXVCO0FBQ2xELDRCQUE0QiwyQkFBMkI7QUFDdkQsNkJBQTZCLCtCQUErQjtBQUM1RCxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3RFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FbmNvZGUrU2Fuczp3Z2h0QDMwMDs1MDA7NzAwJmZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1kYXJrQ29sb3I6IHJnYigxMywgMTYsIDIyKTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuYm9keSwgYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMTYsIDE0JSwgNzUlKTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuXFxuXFxuLyogLS0tLS0gQ3VyciB3ZWF0aGVyIC0tLS0tICovXFxuLndlYXRoZXIge1xcbiAgICBwYWRkaW5nOiA0MHB4IDAgODBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2Nsb3VkeS5qcGdcXFwiKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNSk7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbn1cXG5cXG4ud2VhdGhlcl9zZWFyY2hiYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi53ZWF0aGVyX3NlYXJjaGJhcjpmb2N1cy13aXRoaW4ge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgaHNsKDIxMSwgMTAwJSwgNTklKTtcXG59XFxuXFxuLndlYXRoZXJfc2VhcmNoLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi53ZWF0aGVyX3NlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaGJhci1pY29uIHtcXG4gICAgbGVmdDogNXB4O1xcbn1cXG5cXG4ud2VhdGhlcl9pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG59XFxuXFxuLndlYXRoZXJfdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNi40cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLndlYXRoZXJfY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLndlYXRoZXJfc3VuLWV4dHJhcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLndlYXRoZXJfc3VuLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyX2V4dHJhcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLndlYXRoZXJfZXh0cmEtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxufVxcblxcbi53ZWF0aGVyX2V4dHJhLWJsb2NrID4gLmljb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcXG59XFxuXFxuLndlYXRoZXJfZXh0cmEtdmFsIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ud2VhdGhlcl9leHRyYS10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcblxcblxcblxcbi8qIC0tLS0tIEhvdXJseSBmb3JlY2FzdCAtLS0tLSAqL1xcbi5ob3VybHktZmMge1xcbiAgICBwYWRkaW5nOiA1MHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5ob3VybHlfaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA2MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxuLmhvdXJseV9pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4uaG91cmx5X3RlbXAge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG59XFxuXFxuLmhvdXJseV90aW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuXFxuXFxuXFxuLyogLS0tLS0gVXRpbGl0aWVzIC0tLS0tICovXFxuLnNlY3Rpb24tc3VidGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWNvbnRhaW5lciA+IHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGVudC1tYXJnaW4ge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XFxufVxcblxcbi50eHQtY2VudGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZnctNjAwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNwYW4tMi1jb2wge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4uZGFyay1iZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7Ozs7QUFLQSw2QkFBNkI7QUFDN0I7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtEQUFrRDtJQUNsRCxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0Qyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7OztBQUtBLGdDQUFnQztBQUNoQztJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7O0FBS0EsMEJBQTBCO0FBQzFCO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FbmNvZGUrU2Fuczp3Z2h0QDMwMDs1MDA7NzAwJmZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1kYXJrQ29sb3I6IHJnYigxMywgMTYsIDIyKTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuYm9keSwgYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMTYsIDE0JSwgNzUlKTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuXFxuXFxuLyogLS0tLS0gQ3VyciB3ZWF0aGVyIC0tLS0tICovXFxuLndlYXRoZXIge1xcbiAgICBwYWRkaW5nOiA0MHB4IDAgODBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2Nsb3VkeS5qcGdcXFwiKTsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMCUsIDAuNSk7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbn1cXG5cXG4ud2VhdGhlcl9zZWFyY2hiYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi53ZWF0aGVyX3NlYXJjaGJhcjpmb2N1cy13aXRoaW4ge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgaHNsKDIxMSwgMTAwJSwgNTklKTtcXG59XFxuXFxuLndlYXRoZXJfc2VhcmNoLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi53ZWF0aGVyX3NlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaGJhci1pY29uIHtcXG4gICAgbGVmdDogNXB4O1xcbn1cXG5cXG4ud2VhdGhlcl9pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG59XFxuXFxuLndlYXRoZXJfdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNi40cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLndlYXRoZXJfY2l0eSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLndlYXRoZXJfc3VuLWV4dHJhcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLndlYXRoZXJfc3VuLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyX2V4dHJhcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLndlYXRoZXJfZXh0cmEtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxufVxcblxcbi53ZWF0aGVyX2V4dHJhLWJsb2NrID4gLmljb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcXG59XFxuXFxuLndlYXRoZXJfZXh0cmEtdmFsIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ud2VhdGhlcl9leHRyYS10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcblxcblxcblxcbi8qIC0tLS0tIEhvdXJseSBmb3JlY2FzdCAtLS0tLSAqL1xcbi5ob3VybHktZmMge1xcbiAgICBwYWRkaW5nOiA1MHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5ob3VybHlfaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA2MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxuLmhvdXJseV9pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4uaG91cmx5X3RlbXAge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG59XFxuXFxuLmhvdXJseV90aW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuXFxuXFxuXFxuLyogLS0tLS0gVXRpbGl0aWVzIC0tLS0tICovXFxuLnNlY3Rpb24tc3VidGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWNvbnRhaW5lciA+IHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udGVudC1tYXJnaW4ge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XFxufVxcblxcbi50eHQtY2VudGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZnctNjAwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnNwYW4tMi1jb2wge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4uZGFyay1iZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmZXRjaFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vd2VhdGhlci1hcGkuanNcIjtcblxuLy8gRG9tIGNhY2hlXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJzZWFyY2hXZWF0aGVyXCIpWzBdO1xuY29uc3QgY3VyclRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2VhdGhlcl90ZW1wXCIpWzBdO1xuY29uc3QgY3VyclRlbXBEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndlYXRoZXJfdGVtcC1kZXNjXCIpWzBdO1xuY29uc3QgY3VyckNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2VhdGhlcl9jaXR5XCIpWzBdO1xuY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VucmlzZVZhbHVlXCIpO1xuY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5zZXRWYWx1ZVwiKTtcbmNvbnN0IHdlYXRoZXJFeHRyYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2VhdGhlcl9leHRyYS12YWxcIik7XG5jb25zdCBob3VybHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJob3VybHlfaXRlbXNcIilbMF07XG5cblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBlLnRhcmdldC5lbGVtZW50c1tcIndlYXRoZXJMb2NhdGlvblwiXS52YWx1ZTtcbiAgICBmZXRjaFdlYXRoZXJEYXRhKHNlYXJjaFZhbHVlKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJEYXRhKGRhdGEpIHtcbiAgICBjdXJyVGVtcC50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wO1xuICAgIGN1cnJUZW1wRGVzYy50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wRGVzYztcbiAgICBjdXJyQ2l0eS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5sb2NhdGlvbjtcbiAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnN1bnJpc2U7XG4gICAgc3Vuc2V0LnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnN1bnNldDtcblxuICAgIHdlYXRoZXJFeHRyYXNbMF0udGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuZmVlbHNMaWtlO1xuICAgIHdlYXRoZXJFeHRyYXNbMV0udGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgd2VhdGhlckV4dHJhc1syXS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZTtcbiAgICB3ZWF0aGVyRXh0cmFzWzNdLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LndpbmRTcGVlZDtcbiAgICB3ZWF0aGVyRXh0cmFzWzRdLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnZpc2liaWxpdHk7XG4gICAgd2VhdGhlckV4dHJhc1s1XS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC51dmk7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YS5ob3VybHkpIHtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kKGNyZWF0ZUhvdXJseUZvcmVjYXN0SXRlbXMoaXRlbSkpO1xuICAgIH1cblxuICAgIGhvdXJseUZvcmVjYXN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgaG91cmx5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kKGZyYWdtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cmx5Rm9yZWNhc3RJdGVtcyhkYXRhKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCB0ZW1wID0gaWNvbkNvbnRhaW5lci5jbG9uZU5vZGUoKTtcbiAgICBjb25zdCBob3VyID0gaWNvbkNvbnRhaW5lci5jbG9uZU5vZGUoKTtcbiAgICBcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvdXJseV9pdGVtXCIpO1xuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImljb24tY29udGFpbmVyXCIpO1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZChcImhvdXJseV90ZW1wXCIpO1xuICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJseV90aW1lXCIpO1xuICAgIFxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBkYXRhLnRlbXA7XG4gICAgaG91ci50ZXh0Q29udGVudCA9IGRhdGEuaG91cjtcbiAgICBpY29uQ29udGFpbmVyLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBkPVwiTTkuNDE3IDBoNi45NThsLTMuMzc1IDhoN2wtMTMgMTYgNC4zNzUtMTFoLTcuMzc1elwiIC8+PC9zdmc+YDtcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kKGljb25Db250YWluZXIsIHRlbXAsIGhvdXIpO1xuXG4gICAgaWYgKGRhdGEucG9wID49IDIwKSB7XG4gICAgICAgIGNvbnN0IHBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBwb3AudGV4dENvbnRlbnQgPSBkYXRhLnBvcCArIFwiJVwiO1xuICAgICAgICB0ZW1wLmFmdGVyKHBvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuXG5leHBvcnQge1xuICAgIHVwZGF0ZVdlYXRoZXJEYXRhLFxufSIsImltcG9ydCB7IHVwZGF0ZVdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vdWkuanNcIjtcblxuY29uc3Qga2V5ID0gXCJlMGE5MTBjZjlmMmEzNWI1MDZmMTM2ZGFjYzRmMTQ1ZlwiO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgICAvLyBHZXQgbGF0aXR1ZGUsIGxvbmdpdHVkZSBmb3IgbG9jYXRpb25cbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG4gICAgXG4gICAgLy8gR2V0IHdlYXRoZXIgZGF0YVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke2Nvb3Jkcy5sYXR9Jmxvbj0ke2Nvb3Jkcy5sb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJnVuaXRzPW1ldHJpYyZhcHBpZD0ke2tleX1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IGZvcm1hdFdlYXRoZXJEYXRhKGRhdGEsIGNvb3Jkcy5sb2NhdGlvbk5hbWUpO1xuICAgIHVwZGF0ZVdlYXRoZXJEYXRhKGZvcm1hdHRlZERhdGEpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mbGltaXQ9MSZhcHBpZD0ke2tleX1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYXRpb25OYW1lOiBgJHtkYXRhWzBdLm5hbWV9LCAke2RhdGFbMF0uY291bnRyeX1gLFxuICAgICAgICBsYXQ6IGRhdGFbMF0ubGF0LFxuICAgICAgICBsb246IGRhdGFbMF0ubG9uLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0V2VhdGhlckRhdGEoZGF0YSwgbG9jYXRpb24pIHtcbiAgICBsZXQgc3VucmlzZSA9IG5ldyBEYXRlKGRhdGEuY3VycmVudC5zdW5yaXNlICogMTAwMCk7XG4gICAgbGV0IHN1bnNldCA9IG5ldyBEYXRlKGRhdGEuY3VycmVudC5zdW5zZXQgKiAxMDAwKTtcblxuICAgIHN1bnJpc2UgPSBgJHtzdW5yaXNlLmdldEhvdXJzKCl9OiR7c3VucmlzZS5nZXRNaW51dGVzKCl9YDsgXG4gICAgc3Vuc2V0ID0gYCR7c3Vuc2V0LmdldEhvdXJzKCl9OiR7c3Vuc2V0LmdldE1pbnV0ZXMoKX1gOyBcblxuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZGF0YS5ob3VybHkuc2xpY2UoMSwgMjUpO1xuICAgIGNvbnN0IG5ld0FyciA9IFtdO1xuICAgIGhvdXJseUZvcmVjYXN0LmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgaG91ciA9IG5ldyBEYXRlKGVsLmR0ICogMTAwMCk7XG4gICAgICAgIGhvdXIgPSBgJHtob3VyLmdldEhvdXJzKCl9OiR7aG91ci5nZXRNaW51dGVzKCl9YDtcblxuICAgICAgICBuZXdBcnJbaW5kZXhdID0ge1xuICAgICAgICAgICAgaG91cixcbiAgICAgICAgICAgIFwidGVtcFwiOiBgJHtNYXRoLnJvdW5kKGVsLnRlbXApfcKwQ2AsXG4gICAgICAgICAgICBcInBvcFwiOiBNYXRoLnJvdW5kKGVsLnBvcCAqIDEwMCksXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsZXQgdGVtcERlc2MgPSBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvblswXS50b1VwcGVyQ2FzZSgpICsgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBcImN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJ0ZW1wXCI6IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXApfcKwQ2AsXG4gICAgICAgICAgICB0ZW1wRGVzYyxcbiAgICAgICAgICAgIFwiZmVlbHNMaWtlXCI6IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpfcKwQ2AsXG4gICAgICAgICAgICBcImh1bWlkaXR5XCI6IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0gJWAsXG4gICAgICAgICAgICBcInByZXNzdXJlXCI6IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZX0gaHBhYCxcbiAgICAgICAgICAgIFwid2luZFNwZWVkXCI6IGAke2RhdGEuY3VycmVudFtcIndpbmRfc3BlZWRcIl19bS9zYCxcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBgJHtkYXRhLmN1cnJlbnQudmlzaWJpbGl0eSAvIDEwMDB9a21gLFxuICAgICAgICAgICAgXCJ1dmlcIjogYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudXZpKX1gLFxuICAgICAgICAgICAgc3VucmlzZSxcbiAgICAgICAgICAgIHN1bnNldCxcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICB9LFxuICAgICAgICBcImhvdXJseVwiOiBuZXdBcnIsXG4gICAgfVxufVxuXG5cbmV4cG9ydCB7XG4gICAgZmV0Y2hXZWF0aGVyRGF0YSxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgdWkgZnJvbSBcIi4vbW9kdWxlcy91aS5qc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9