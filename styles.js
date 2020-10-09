(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.header {\n  background: #0e73ce;\n}\n.header h1 {\n  color: #fff;\n  font-size: 1.75rem;\n  font-weight: 300;\n}\n.header > div {\n  display: flex;\n  align-items: center;\n  width: 95%;\n  max-width: 80rem;\n  margin: auto;\n  height: 3rem;\n  padding: 0 1rem;\n}\n.main {\n  height: calc(100vh - 3rem);\n  background: #9c9c9c;\n  overflow: auto;\n}\n.container {\n  width: 95%;\n  max-width: 80rem;\n  margin: auto;\n  background: #fff;\n  height: 100%;\n  padding: 1rem;\n  overflow: auto;\n}\n.table-search {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n}\n.table-search input {\n  width: 20rem;\n  border-radius: 2rem;\n}\n.table tr {\n  font-size: 0.8rem;\n}\n.table tr td a {\n  padding: 0;\n}\n.table .actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0;\n}\n.table .actions a {\n  padding: 0;\n}\n.table .actions > * {\n  margin-right: 0.5rem;\n}\n/**\n * Hierarchy styles ==================================================\n */\n.tree ul {\n  padding-top: 20px;\n  position: relative;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n.tree li {\n  float: left;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: 20px 5px 0 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n.tree li::before, .tree li::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 50%;\n  border-top: 1px solid red;\n  width: 50%;\n  height: 20px;\n}\n.tree li::after {\n  right: auto;\n  left: 50%;\n  border-left: 1px solid red;\n}\n.tree li:only-child::after, .tree li:only-child::before {\n  display: none;\n}\n.tree li:only-child {\n  padding-top: 0;\n}\n.tree li:first-child::before, .tree li:last-child::after {\n  border: 0 none;\n}\n.tree li:last-child::before {\n  border-right: 1px solid red;\n  border-radius: 0 5px 0 0;\n  -webkit-border-radius: 0 5px 0 0;\n  -moz-border-radius: 0 5px 0 0;\n}\n.tree li:first-child::after {\n  border-radius: 5px 0 0 0;\n  -webkit-border-radius: 5px 0 0 0;\n  -moz-border-radius: 5px 0 0 0;\n}\n.tree ul ul::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border-left: 1px solid red;\n  width: 0;\n  height: 20px;\n}\n.tree li a {\n  border: 1px solid #ccc;\n  padding: 5px 10px;\n  text-decoration: none;\n  color: #666;\n  font-family: arial, verdana, tahoma;\n  font-size: 11px;\n  display: inline-block;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n/**\n * [END] Hierarchy styles ==================================================\n */\n.tree li a {\n  position: relative;\n  min-width: 8rem;\n  height: 2.25rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: #204873;\n  border: none;\n  color: white;\n  font-size: 0.8rem;\n}\n.tree li a .node-menu {\n  position: absolute;\n  right: -2.2rem;\n  top: 2px;\n  display: none;\n  z-index: 1;\n  padding-left: 0.6rem;\n  z-index: 3;\n}\n.tree li a .node-menu button {\n  padding: 0 !important;\n  height: 2rem;\n  width: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tree li a:hover .node-menu,\n.tree li a:focus .node-menu {\n  display: block;\n}\n.tree li a:hover .node-menu .dropdown-menu {\n  margin: 0;\n}\n.scale85 .tree {\n  transform: scale(0.85);\n}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,8EAAA;AAEA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;AAAJ;AAOA;EACC,mBAAA;AAJD;AAKC;EACC,WAAA;EACA,kBAAA;EACA,gBAAA;AAHF;AAMC;EACC,aAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;AAJF;AAQA;EACI,0BAAA;EACH,mBAAA;EACA,cAAA;AALD;AAQA;EACI,UAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACH,aAAA;EACA,cAAA;AALD;AAQA;EACC,aAAA;EACG,mBAAA;EACH,8BAAA;EACA,iBAAA;AALD;AAOC;EACC,YAAA;EACA,mBAAA;AALF;AAUC;EACC,iBAAA;AAPF;AAUG;EACC,UAAA;AARJ;AAYC;EACC,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,UAAA;AAVF;AAYE;EACC,UAAA;AAVH;AAaE;EACC,oBAAA;AAXH;AAkBA;;EAAA;AAGA;EACC,iBAAA;EAAmB,kBAAA;EAEnB,oBAAA;EACA,4BAAA;EACA,yBAAA;AAfD;AAkBA;EACC,WAAA;EAAa,kBAAA;EACb,qBAAA;EACA,kBAAA;EACA,uBAAA;EAEA,oBAAA;EACA,4BAAA;EACA,yBAAA;AAfD;AAkBA;EACC,WAAA;EACA,kBAAA;EAAoB,MAAA;EAAQ,UAAA;EAC5B,yBAAA;EACA,UAAA;EAAY,YAAA;AAZb;AAcA;EACC,WAAA;EAAa,SAAA;EACb,0BAAA;AAVD;AAaA;EACC,aAAA;AAVD;AAaA;EAAqB,cAAA;AATrB;AAWA;EACC,cAAA;AARD;AAUA;EACC,2BAAA;EACA,wBAAA;EACA,gCAAA;EACA,6BAAA;AAPD;AASA;EACC,wBAAA;EACA,gCAAA;EACA,6BAAA;AAND;AASA;EACC,WAAA;EACA,kBAAA;EAAoB,MAAA;EAAQ,SAAA;EAC5B,0BAAA;EACA,QAAA;EAAU,YAAA;AAHX;AAMA;EACC,sBAAA;EACA,iBAAA;EACA,qBAAA;EACA,WAAA;EACA,mCAAA;EACA,eAAA;EACA,qBAAA;EAEA,kBAAA;EACA,0BAAA;EACA,uBAAA;EAEA,oBAAA;EACA,4BAAA;EACA,yBAAA;AALD;AAOA;;EAAA;AAIA;EACC,kBAAA;EACG,eAAA;EACA,eAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACH,iBAAA;AALD;AAwBA;EACC,kBAAA;EACA,cAAA;EACA,QAAA;EACA,aAAA;EACA,UAAA;EACA,oBAAA;EACA,UAAA;AArBD;AAuBC;EACC,qBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AArBF;AAwBA;;EAEC,cAAA;AArBD;AAuBA;EACC,SAAA;AApBD;AAuBA;EACC,sBAAA;AApBD","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n\r\n*{\r\n    padding:0;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n}\r\n\r\nhtml{\r\n    // font-size: 62.5%;\r\n}\r\n\r\n.header{\r\n\tbackground:#0e73ce;\r\n\th1{\r\n\t\tcolor:#fff;\r\n\t\tfont-size: 1.75rem;\r\n\t\tfont-weight: 300;\r\n\t}\r\n\r\n\t> div{\r\n\t\tdisplay:flex;\r\n\t\talign-items:center; \r\n\t\twidth: 95%;\r\n\t\tmax-width: 80rem;\r\n\t\tmargin:auto;\r\n\t\theight:3rem;\r\n\t\tpadding:0 1rem;\r\n\t}\r\n}\r\n\r\n.main{\r\n    height: calc(100vh - 3rem);\r\n\tbackground:#9c9c9c;\r\n\toverflow: auto;\r\n}\r\n\r\n.container{\r\n    width:95%;\r\n    max-width: 80rem;\r\n    margin:auto;\r\n    background:#fff;\r\n    height:100%;\r\n\tpadding:1rem;\r\n\toverflow: auto;\r\n}\r\n\r\n.table-search{\r\n\tdisplay: flex;\r\n    align-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding:.5rem 0;\r\n\t\r\n\tinput{\r\n\t\twidth: 20rem;\r\n\t\tborder-radius: 2rem;\r\n\t}\r\n}\r\n\r\n.table{\r\n\ttr{\r\n\t\tfont-size: .8rem;\r\n\r\n\t\ttd{\r\n\t\t\ta{\r\n\t\t\t\tpadding:0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.actions{\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: flex-end;\r\n\t\tpadding: 0;\r\n\r\n\t\ta{\r\n\t\t\tpadding:0;\r\n\t\t}\r\n\r\n\t\t> *{\r\n\t\t\tmargin-right:.5rem;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\r\n\r\n/**\r\n * Hierarchy styles ==================================================\r\n */\r\n.tree ul {\r\n\tpadding-top: 20px; position: relative;\r\n\t\r\n\ttransition: all 0.5s;\r\n\t-webkit-transition: all 0.5s;\r\n\t-moz-transition: all 0.5s;\r\n}\r\n\r\n.tree li {\r\n\tfloat: left; text-align: center;\r\n\tlist-style-type: none;\r\n\tposition: relative;\r\n\tpadding: 20px 5px 0 5px;\r\n\t\r\n\ttransition: all 0.5s;\r\n\t-webkit-transition: all 0.5s;\r\n\t-moz-transition: all 0.5s;\r\n}\r\n\r\n.tree li::before, .tree li::after{\r\n\tcontent: '';\r\n\tposition: absolute; top: 0; right: 50%;\r\n\tborder-top: 1px solid red;\r\n\twidth: 50%; height: 20px;\r\n}\r\n.tree li::after{\r\n\tright: auto; left: 50%;\r\n\tborder-left: 1px solid red;\r\n}\r\n\r\n.tree li:only-child::after, .tree li:only-child::before {\r\n\tdisplay: none;\r\n}\r\n\r\n.tree li:only-child{ padding-top: 0;}\r\n\r\n.tree li:first-child::before, .tree li:last-child::after{\r\n\tborder: 0 none;\r\n}\r\n.tree li:last-child::before{\r\n\tborder-right: 1px solid red;\r\n\tborder-radius: 0 5px 0 0;\r\n\t-webkit-border-radius: 0 5px 0 0;\r\n\t-moz-border-radius: 0 5px 0 0;\r\n}\r\n.tree li:first-child::after{\r\n\tborder-radius: 5px 0 0 0;\r\n\t-webkit-border-radius: 5px 0 0 0;\r\n\t-moz-border-radius: 5px 0 0 0;\r\n}\r\n\r\n.tree ul ul::before{\r\n\tcontent: '';\r\n\tposition: absolute; top: 0; left: 50%;\r\n\tborder-left: 1px solid red;\r\n\twidth: 0; height: 20px;\r\n}\r\n\r\n.tree li a{\r\n\tborder: 1px solid #ccc;\r\n\tpadding: 5px 10px;\r\n\ttext-decoration: none;\r\n\tcolor: #666;\r\n\tfont-family: arial, verdana, tahoma;\r\n\tfont-size: 11px;\r\n\tdisplay: inline-block;\r\n\t\r\n\tborder-radius: 5px;\r\n\t-webkit-border-radius: 5px;\r\n\t-moz-border-radius: 5px;\r\n\t\r\n\ttransition: all 0.5s;\r\n\t-webkit-transition: all 0.5s;\r\n\t-moz-transition: all 0.5s;\r\n}\r\n/**\r\n * [END] Hierarchy styles ==================================================\r\n */\r\n\r\n.tree li a {\r\n\tposition: relative;\r\n    min-width: 8rem;\r\n    height: 2.25rem;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #204873;\r\n    border: none;\r\n    color: white;\r\n\tfont-size: 0.8rem;\r\n\t\r\n\t// &:hover{\r\n\t// \t&:before {\r\n\t// \t\tcontent: \"\";\r\n\t// \t\tposition: absolute;\r\n\t// \t\ttop: 0;\r\n\t// \t\tleft: 0;\r\n\t// \t\twidth: 300%;\r\n\t// \t\theight: 300%;\r\n\t// \t\tbackground: transparent;\r\n\t// \t\tright: 0;\r\n\t// \t\tbottom: 0;\r\n\t// \t\tmargin: auto !important;\r\n\t// \t\tz-index: 2;\r\n\t// \t}\r\n\t// }\r\n\t\r\n}\r\n.tree li a .node-menu {\r\n\tposition: absolute;\r\n\tright: -2.2rem;\r\n\ttop: 2px;\r\n\tdisplay: none;\r\n\tz-index: 1;\r\n\tpadding-left: 0.6rem;\r\n\tz-index: 3;\r\n\r\n\tbutton{\r\n\t\tpadding: 0 !important;\r\n\t\theight: 2rem;\r\n\t\twidth: 2rem;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\t\r\n\t}\r\n}\r\n.tree li a:hover .node-menu,\r\n.tree li a:focus .node-menu {\r\n\tdisplay: block;\r\n}\r\n.tree li a:hover .node-menu .dropdown-menu {\r\n\tmargin: 0;\r\n}\r\n\r\n.scale85 .tree{\r\n\ttransform:scale(0.85);\r\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\81254807\Desktop\UAM\project\UAM-ui\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map