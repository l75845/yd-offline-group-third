/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkyd_react_generator"] = self["webpackChunkyd_react_generator"] || []).push([["AboutUs"],{

/***/ "./src/web/pages/AboutUs/components/bmap/index.tsx":
/*!*********************************************************!*\
  !*** ./src/web/pages/AboutUs/components/bmap/index.tsx ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar BJmap = () => {\n  var Mp = ak => {\n    return new Promise(function (resolve, reject) {\n      var script = document.createElement('script');\n      script.type = 'text/javascript';\n      script.src = \"http://api.map.baidu.com/api?v=2.0&ak=\".concat(ak, \"&callback=init\");\n      document.head.appendChild(script);\n\n      window.init = () => {\n        resolve(window.BMapGL);\n      };\n    });\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    Mp(\"PAZGg1jfimrTHCIAsoQc9zfsRbh\").then(BMapGL => {\n      var temp; // let map = new BMapGL.Map('allmap');\n      // map.centerAndZoom(new BMapGL.Point(116.320569, 40.072627), 19);         // 创建Map实例\n\n      var map = new temp.Map('allmap');\n      map.centerAndZoom(new temp.Point(116.320569, 40.072627), 19); // 创建Map实例\n\n      map.enableScrollWheelZoom(true);\n      map.setHeading(64.5);\n      map.setTilt(73); //启用滚轮放大缩小\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      padding: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"allmap\",\n    style: {\n      width: 1024,\n      height: 600\n    }\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BJmap);\n\n//# sourceURL=webpack://yd-react-generator/./src/web/pages/AboutUs/components/bmap/index.tsx?");

/***/ }),

/***/ "./src/web/pages/AboutUs/index.tsx":
/*!*****************************************!*\
  !*** ./src/web/pages/AboutUs/index.tsx ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/web/pages/AboutUs/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_bmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bmap */ \"./src/web/pages/AboutUs/components/bmap/index.tsx\");\n\n\n // 定义interface\n\n// 头部 标题\nvar Header = props => {\n  var {\n    value\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"about-title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"decor\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"typing\"\n  }, value));\n}; // 联系我们的内容\n\n\nvar ContactUs = () => {\n  var list = ['📱 电话：18510143909', '🎭 微信：yidengxuetang', '🐧QQ群：566025158', '📬 地址：北京市昌平区金域国际中心B座602'];\n\n  var imgAddress = __webpack_require__(/*! ../../assets/images/aboutus/address.png */ \"./src/web/assets/images/aboutus/address.png\");\n\n  var imgEmail = __webpack_require__(/*! ../../assets/images/aboutus/email.png */ \"./src/web/assets/images/aboutus/email.png\");\n\n  var imgCooperation = __webpack_require__(/*! ../../assets/images/aboutus/cooperation.png */ \"./src/web/assets/images/aboutus/cooperation.png\");\n\n  var imgPhone = __webpack_require__(/*! ../../assets/images/aboutus/phone.png */ \"./src/web/assets/images/aboutus/phone.png\");\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"contactUs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"contactUs-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: imgAddress,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"content-title\"\n  }, \"\\u4EAC\\u57CE\\u4E00\\u706F\\u603B\\u90E8\\u5730\\u5740\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"content-desc\"\n  }, \"\\u5317\\u4EAC\\u5E02\\u660C\\u5E73\\u533A\\u91D1\\u57DF\\u56FD\\u9645\\u4E2D\\u5FC3B\\u5EA7602\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"contactUs-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: imgEmail,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"content-title\"\n  }, \"\\u8BFE\\u7A0B\\u54A8\\u8BE2\\u548C\\u670D\\u52A1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"content-desc\"\n  }, \"\\uD83C\\uDFAD \\u5FAE\\u4FE1\\uFF1Ayidengxuetang\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), \"\\uD83D\\uDC27 QQ\\u7FA4\\uFF1A566025158\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"contactUs-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: imgCooperation,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"content-title\"\n  }, \"\\u5546\\u52A1\\u5408\\u4F5C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"content-desc\"\n  }, \"\\uD83C\\uDFAD \\u5FAE\\u4FE1\\uFF1Ayidengxuetang\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), \"\\uD83D\\uDC27 QQ\\u7FA4\\uFF1A566025158\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"contactUs-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: imgPhone,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"content-title\"\n  }, \"\\u70ED\\u7EBF\\u7535\\u8BDD\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"content-desc\"\n  }, \"\\uD83D\\uDCF1 \\u7535\\u8BDD\\uFF1A18510143909\")));\n}; // 关于我们\n\n\nvar AboutUs = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"p-Wrap\"\n  }, \"  2016\\u5E74\\u6625\\u5929\\u5FD7\\u4F73\\u8001\\u5E08\\u521B\\u529E\\u4EAC\\u7A0B\\u4E00\\u706F(\\u5317\\u4EAC\\u4E00\\u706F\\u6559\\u80B2\\u79D1\\u6280\\u6709\\u9650\\u516C\\u53F8)\\uFF0C\\u5FD7\\u4F73\\u8001\\u5E08\\u66FE\\u4EFB\\u804C\\u767E\\u5EA6LBS\\u641C\\u7D22\\u7814\\u53D1\\u90E8\\uFF0C\\u8D1F\\u8D23\\u767E\\u5EA6\\u5730\\u56FEH5\\u6027\\u80FD\\u65B9\\u5411\\uFF0C\\u540E\\u8FDB\\u5165\\u817E\\u8BAFMIG\\u8D1F\\u8D23\\u817E\\u8BAF\\u5730\\u56FEH5\\u7248\\u672C\\u67B6\\u6784\\u642D\\u5EFA\\u3002\\u4EAC\\u7A0B\\u4E00\\u706F\\u7531\\u5FD7\\u4F73\\u3001\\u738B\\u5B81\\u8001\\u5E08\\u4E3A\\u4E3B\\u8BB2\\u8001\\u5E08\\uFF0C\\u4EE5\\u53CA\\u6EF4\\u6EF4\\u8D44\\u6DF1\\u524D\\u7AEF\\u5DE5\\u7A0B\\u5E08\\u3001Icharts\\u6846\\u67B6\\u4F5C\\u8005\\u3001\\u963F\\u91CC\\u5DF4\\u5DF4\\u524D\\u7AEF\\u5F00\\u53D1\\u4E13\\u5BB6\\u3001\\u8611\\u83C7\\u8857\\u8D44\\u6DF1\\u524D\\u7AEF\\u5DE5\\u7A0B\\u5E08\\u7B49\\u7B49\\u4F5C\\u4E3A\\u6211\\u4EEC\\u7684\\u7279\\u9080\\u8BB2\\u5E08\\u56E2\\u3002\\u6210\\u7ACB\\u4EE5\\u6765\\u6211\\u4EEC\\u8F93\\u9001\\u4E86\\u5927\\u91CF\\u7684\\u540C\\u5B66\\u8FDB\\u5165YY\\u3001\\u963F\\u91CC\\u3001\\u4ECA\\u65E5\\u5934\\u6761\\u3001\\u7F8E\\u56E2\\u7B49\\u7B49\\u4E00\\u7EBF\\u4F01\\u4E1A\\u3002\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"p-Wrap\"\n  }, \"  \\u4EAC\\u7A0B\\u4E00\\u706F\\u7ED9\\u5927\\u5BB6\\u63D0\\u4F9B\\u4E00\\u4E2A\\u9AD8\\u7AEF\\u8FDB\\u9636\\u548C\\u89E6\\u78B0\\u540D\\u4F01\\u7684\\u5708\\u5B50\\uFF0C\\u6211\\u4EEC\\u7EF4\\u6301\\u8FD9\\u6837\\u7684\\u56E2\\u961F\\u53EA\\u6709\\u4E00\\u4E2A\\u76EE\\u7684\\uFF1A\\u8BA9\\u540C\\u5B66\\u4EEC\\u5FEB\\u901F\\u638C\\u63E1\\u6700\\u524D\\u6CBF\\u7684\\u9AD8\\u7AEF\\u6280\\u672F\\uFF01\\u7F16\\u7A0B\\u8DEF\\u6F2B\\u6F2B\\uFF0C\\u6211\\u4EEC\\u629B\\u5F03\\u4E86\\u9AD8\\u85AA\\u7A33\\u5B9A\\u7684\\u5DE5\\u4F5C\\uFF0C\\u53EA\\u60F3\\u8BA9\\u6709\\u68A6\\u7684\\u4F60\\u4EEC\\u8D70\\u8FDB\\u540D\\u4F01\\uFF0C\\u771F\\u6B63\\u4F53\\u4F1A\\u5230\\u5927\\u516C\\u53F8\\u7F16\\u7A0B\\u7684\\u4E50\\u8DA3\\u3002\\u4E5F\\u5E0C\\u671B\\u548C\\u4F60\\u4E00\\u8D77\\u8D70\\u8FDB\\u5C71\\u533A\\u5C3D\\u6211\\u4EEC\\u5FAE\\u8584\\u4E4B\\u529B\\u53BB\\u770B\\u671B\\u54EA\\u91CC\\u7684\\u5B69\\u5B50\\u4EEC~\"));\n}; //公司发展\n\n\nvar CompanyDevelopment = () => {\n  var img2 = __webpack_require__(/*! ../../assets/images/aboutus/2017.png */ \"./src/web/assets/images/aboutus/2017.png\");\n\n  var img1 = __webpack_require__(/*! ../../assets/images/aboutus/2016.png */ \"./src/web/assets/images/aboutus/2016.png\");\n\n  var img3 = __webpack_require__(/*! ../../assets/images/aboutus/sanjiao.png */ \"./src/web/assets/images/aboutus/sanjiao.png\");\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"history\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"history-left\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"history-auto-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: img1,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"2016\\u5E743\\u6708\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u5317\\u4EAC\\u4E00\\u706F\\u6559\\u80B2\\u79D1\\u6280\\u6709\\u9650\\u516C\\u53F8\\\"\\u6210\\u7ACB\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"2016\\u5E746\\u6708\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u83B7\\u6E05\\u534E\\u5927\\u5B66\\u7ECF\\u7BA1\\u5B66\\u9662\\u5929\\u4F7F\\u8F6E\\u6295\\u8D44\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"2016\\u5E749\\u6708\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u9488\\u5BF9\\u7CBE\\u82F1\\u73ED\\u95EF\\u5173\\u5F0F\\u5B66\\u4E60\\u7CFB\\u7EDF\\u4E0A\\u7EBF\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"2016\\u5E7412\\u6708\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u817E\\u8BAF\\u7CBE\\u54C1\\u8BFE\\\"2016\\u4F18\\u8D28\\u6559\\u80B2\\u673A\\u6784\\\"\\u5956\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"history-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"icon-2017\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: img3,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"line\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"icon-2016\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: img3,\n    alt: \"\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"history-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"history-auto-list right-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: img2,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"2017\\u5E747\\u6708\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u4EAC\\u7A0B\\u4E00\\u706F\\u4E0E\\u817E\\u8BAF\\u8BFE\\u5802\\u8054\\u5408\\u8FD0\\u8425\")))));\n};\n\nvar main = () => {\n  var list = ['联系我们 Contactus', '关于我们 About us', '公司发展 Company development', '公司地址 Company address'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"aboutUs-layout\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header, {\n    value: list[1]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AboutUs, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header, {\n    value: list[2]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CompanyDevelopment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header, {\n    value: list[3]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_bmap__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header, {\n    value: list[0]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContactUs, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack://yd-react-generator/./src/web/pages/AboutUs/index.tsx?");

/***/ }),

/***/ "./src/web/pages/AboutUs/index.css":
/*!*****************************************!*\
  !*** ./src/web/pages/AboutUs/index.css ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://yd-react-generator/./src/web/pages/AboutUs/index.css?");

/***/ }),

/***/ "./src/web/assets/images/aboutus/2016.png":
/*!************************************************!*\
  !*** ./src/web/assets/images/aboutus/2016.png ***!
  \************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2016.png\";\n\n//# sourceURL=webpack://yd-react-generator/./src/web/assets/images/aboutus/2016.png?");

/***/ }),

/***/ "./src/web/assets/images/aboutus/2017.png":
/*!************************************************!*\
  !*** ./src/web/assets/images/aboutus/2017.png ***!
  \************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2017.png\";\n\n//# sourceURL=webpack://yd-react-generator/./src/web/assets/images/aboutus/2017.png?");

/***/ }),

/***/ "./src/web/assets/images/aboutus/address.png":
/*!***************************************************!*\
  !*** ./src/web/assets/images/aboutus/address.png ***!
  \***************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack://yd-react-generator/./src/web/assets/images/aboutus/address.png?");

/***/ }),

/***/ "./src/web/assets/images/aboutus/cooperation.png":
/*!*******************************************************!*\
  !*** ./src/web/assets/images/aboutus/cooperation.png ***!
  \*******************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAB1FBMVEUAAAAA//8AAP8A//8Af/8Aqv8Af/8Atv8AttsAv/8AquMAs/8AougAv/8AquoAtv8Aqu4Ar+8ApfAArvIAs/IAtv8AqvMArfYAsvYAtfcAre8Ar/cAtPcAr/AArPIAsPMAsvMAr/QAsvUAr/AAsvYArfEAs/YArvIArvIAsfMAsfMAsPQAsfQArvQArvAAsPEAsfUArfIArvIAr/IArvMAsPMAr/MAr/QAsPQAsfQAsPEAr/IAr/UAr/IAsPIArvIAr/IAsPMAsfUAsfMAr/MAr/MAr/EArvIArvIAr/QArvIAsPIAsPMAr/MAr/EAr/MAr/EAr/MAr/EAsPMArvIAr/IAsPIAr/IAsPMAr/MAr/MAsPMArvIAr/IAsPIAsPIAr/MAsPMAr/MAr/EAr/IAsPQAr/IAr/IAr/IAr/IAsPIAr/EAr/IAr/MAsPMAr/MAr/IAsPMAsPIAr/IAsPMAsPIAr/IAr/IAsPIAr/IAsPMAr/EAsPMAr/MAr/IArvIAr/IAr/IAr/IAr/IAr/IAsPMAr/EArvIAr/IAr/IAr/IAsPMAr/IAr/IAr/IAr/EAr/EAsPMAr/MAr/MAr/MAsPMAr/IAr/MAr/IAsPMAr/IAr/KBTsGSAAAAm3RSTlMAAQECAgMEBwcICQoLDAwODxARExQVFRweHx8gIiMoKiswMjM4ODk5PD5BREVFRUdLTk9QUlRWWVpcXmBjY2RlZmdoaGltcHJ1dnh6e319f3+AgoSFhoeNkZKTmJiZmqGmqKiorLKys7W2t7u/wMLCwsTExcfHyMnLzM7Oz9LZ2tvd3t/g4eLn6uzt7u7v8PHy9/j5+vv8/f3+/tSmwykAAAFtSURBVHjaY2AYkYBRPTizsbO7PitAiRRt4v5ts+Gg1oyJgHJNZ2dnQwYGRoO0qbNRQJ4UijoufUVUjbGzZ8/OYWBImo0Beh1Y4KoUInpmz7bEopFnFkTxtPKYQN/IgikQXp2bNEiJmG3RTBA3BYtGEbDCGldRiKCw3wSotR1VFa1QQ2cn4tJojSQsk4/pdpwa9VCixrmdPI0MDFyOBTMgOialW4WRoJGBgUFQ29Hb00GDj4HBizSNCDCqcVTjqEY6a+Q3jy5u7mgsibeRJElj6gR48TI924SJeI2ooEyFTI2zZ0QIwRSx6BQS0NiZ4O3iHlkJLYJ7I7V4GRi41UJawNxkLBqZQYXotAwjNoigbNRkmL39fTNgzFBslY5uU0OQBJKwfCm6y2elC2DTiAFYPbqQtXWGyzEwEKWRgYHbKXciRNfEDAt2DGncGhkYGDhVje3sTZU5sMnh1YgPjGoc1UieRp/q6uo4hlGACgCxT61Juv1FrgAAAABJRU5ErkJggg==\";\n\n//# sourceURL=webpack://yd-react-generator/./src/web/assets/images/aboutus/cooperation.png?");

/***/ }),

/***/ "./src/web/assets/images/aboutus/email.png":
/*!*************************************************!*\
  !*** ./src/web/assets/images/aboutus/email.png ***!
  \*************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAABm1BMVEUAAAAA//8AAP8Af/8Aqv8Amf8Atv8An98Aqv8As+YAuf8AougAv/8Aqv8AquoAqu4Ar/8AuP8AtvMAqvMArvMArfUAsesAsPYAqu4AtfcAre8AqvAAtPcArPAAr/AArPIAtPMAsPQAr/QAsfUArfAArfEAsPYAsPEArfEArvIAsPIAsfcArfMAsvMArvMAsPQAr/QAr/UArfEAsPIArvIAsPIAsfMArvMAr/MAsfMAsvQAsPEAsfQAsfQAsPQAsPIAr/IAsPQArvIAr/IAsfIAsfQAsPIAr/MArvEAr/MAr/EArvEAsPIAsPQAr/EArvIArvIAr/IAr/IAr/MAr/MAr/MAr/IAr/MAr/MAsPMAsPIAsPQAr/MAr/MAsPMAsPMAr/IAr/IAr/IAr/IAr/IAr/IAr/MAr/MAsPMAr/IAr/IAsPIAr/IArvIAr/IAr/MAr/IAsPIArvIAr/IAsPIAr/IAr/IAsPIAsPIAr/IAsPMAr/MAr/IAsPMArvIAsPMAr/IAr/IAr/IAr/IAr/MAr/IAr/IAr/IAr/IQTr92AAAAiHRSTlMAAQECAwUHCAkKCwsMDAwPEBIVFRYZGh0eHx8hIiIjKCwtMDEyNTc3ODk9Pj5CQkRGSUtNT1FSUlNYWVpbX2FhY3Fyc3V5en2BgoKEiouTm6Gio6mqrKytr7Gxsrm8vsTFyMnKy8zP0NHV1tvb3d/j4+fn6Ovr7/H09PX29vf3+Pj5+vv8/P3+/9t+dQAAAYtJREFUeNrt1ldTwkAQB/BFELEr9t57wd4b2BV7b4giig0VewFFhezHdu7QQCBOLj75kP9Lspv9zSSXZBIAJUr+nga755U1b3sFvGv8RDlZ5+G+LIdWHj7Jch/tPHxHxJFmyWxQd2cAAayVWkDNLHVnRSE9PwNM3qbOkhraRB7qKzTirvCEurloEIVNL+jIF3N1N2TGZwpr89CCiLf1kW7IS0buW+A3uEb2vANhh9Uz9DSdxaSIN+SIwDwnHTGrQ13iFm3u6kmRcoreVpHFSbfSoc2koMt10NaCllaDiLgjAkG7SMeOsn+O1VyT2j/6XRoR0S4GAcbIXcWr6kDV5ybVYydIQ+h4ILWnFwBU0xzZvywDFgjlF6TBTapiV+l52zKADULmAQUrdrpZ0gErBN0y/xJxE1HADkE1xQXcc7fwYZCCAD0e0nVVgVwIlS7EwyyQDyFtfDguomligKIxKlCBQthfwhSzAPrkfR+D8FgenOdhmyznLg1ectc5M/PZhMsYk8AYrfKP9h/zBRTnrGj0k6HcAAAAAElFTkSuQmCC\";\n\n//# sourceURL=webpack://yd-react-generator/./src/web/assets/images/aboutus/email.png?");

/***/ }),

/***/ "./src/web/assets/images/aboutus/phone.png":
/*!*************************************************!*\
  !*** ./src/web/assets/images/aboutus/phone.png ***!
  \*************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAGl0lEQVR42u1aaYwURRR+CKuIiIgXBg/wxESRkAgaIREPIIL4wxNRQlQEosZoIocS1hiQKArxiLKYiCCgjGy/6hkgcoRNuNSAJICChqgIcRFY2OlXPbPLtW2qBoSuqp7pnukhbNyX1K/pOt79vfcGoIVaqIWaD7FsH7Ddd4HR94B8NyDVAfJtgHwR2O5wWO5d0DwZs/itgHwFIHl5F+N7weJjALxWoc6t2lQByew1YNFdwKifFCA2dAUv5P6YmHsMGLkFmfMtnoBUbTvjeQvSFwPjUwBpAyA1BuzPAKN1wGgCpBpvLB9zdmYoIB2PxtzJ5aag0jtHOxNpTcSzjgMjG5jTJ17mkg3dAIl0M6Q/APkkwPQAsKgvMHcEMG4DUpPBZCf7ztzkVRQnrBOMovMpzD/YISbt8YWGB38ICe9c4/fI7wGk/ZqpJeq6KBqsMTw+Dcj3ARIPwehvYDs3lBotrwbkxxXmZhfWeuYOg1+94/smcegiQHcc2PxtsN1BYHsX+gXrXgEWDQHGZwGSE+Cj+yGZ6VU8g8hfUg6tg2Veh5B7Zyp7txf9DikMXgmMNxgYrZWKKI5Bmqdo7/PwUde9XXtMjde+xEh+CzC+w8DkJkh4rYswUfpFMYlJ4aXutQakY779Ft1UckxIOJ0A6Uc9LrivFmOiu32H2O5rofeK1IB01Ld/MXUP8NlewPiWE35bD0gbgTmfAWZ7B2jycrCcXQqTjjTlaBpUzcF5JfTe1OHumpSDHpBjLggs1EiUo0V39wFgvKk0LaKzQvHBNyMIZ4qSN3fmsZTaAinhgIRwugstKS2QMf6tIqFp4YOBBus+yHPPaLAKIqUDUF1/rX+fe7/+XUPXKEHmC8Vcqgpr3e2p+S7SYUimu+U36WwXqSV0egPylwFpp/Z4i1YbAlmd8t1zUYLMW3kv+O9xte0g6Q4DSwiEHzbAuumRA1zKayexp3pW0rkzr5UhvR+BQXeYsvlvs8ZUaObz2zVQ5VUUlRJEXYm0SznvEwVKVipWxiIA7Uwv5cFNgF5HBQx8Few3zsrooVtzk/HKuRv9DNIoRQCrwx8+7x8hwSO+A6ppqMLgHANzovqYCDVem5ITO7r3KRra5w9oznDl7g1R4dp6f7LnMxUJDtUYtHn/+NojzkAlDmSVWnWUIoBVEfGfo+Qz/rPvd6ElLZLxj+OrR9Pd/BUNX6sEmcnK3Quj1oP9dQ25PfxCoFnKJVlIuJ1jbJe8CMj3SP8TfSG/hSUVBUyNdnil10Y2kfwJf7pipjcD8mNKaphxRnpFar4UoKGISDZD8YO9sMw7T8mZixRNH9E0XR4GF592J4eU0jkIGcl6GvLbaAX89tC0iPRDcXVa1PKJf5TrydLdpUhqvdZ0UtOA6NXo8Go6NAtizoN6vsuMVbBhe0DnLw0c2M6TxWvIaw3VmSslgE/RpeVtBiP/SXn8IVl8+s15gF4Z8EawM4MjMWXLBL4UkLJa543xr6HaGVwGLboDDSY41/DdeIPPNgDLPBTCUvoAox0he6RrYmmDFEDvHrD0E4bcNd9QnR+T2DIYVIyQpVW0RvAhSPJ742OwOnsVoMO1fojahBVpRE3CpxZqQCCZGaL1cPzCyVcQkwYASut2Kwg+t7YB1nfUpkboLAp41EGwaJQEEhZdYiy5cuO5R+A7r5MMLjLY0LOyq627wI5YwP1pprrA8Oi1kNhzvhYwRPpQG0Sn1k5g7nJDG3CacWgjaM6fbQH5NwYtj40xwYqUQL8apL4Eary2BoE8mps9hPArIbyCM0WvIqdh374t8QacxenrJGwzVfGqucoUkr4ekC8vwOBR6efhIGS/0ppOoXJjfU+jZhjfGjj9ETUkMzSVcvs2h7/cawVMEXBZ8qOV7QuWyfwcB5A/btwjZoTMfUpvwztPRywE1iku8nx5UI4E2xTUwP0SEvyyAjXnRFm9Rw92m5W7RpYR2Yvqm7YHpgWbj5FpIS4SqQP5UaUYH1ReUC5afYzm5gkivwPSC4ET4sgMymHNSf9tlID8DFXaIwukhVpg9B4w97bS7nGekSNyAehjzYNhaKnbGVACgqYCeW+rnF2IkXUxfVRhDWqH4YxS7o8JG0KCZyGMPYDOKjkjtGgqMHcC2O7rUluJ/e3hrCUZLZ1VJfyFJIdW4vDfspKY9Obmh7uKYzRg8nvWkYiC4n9pjN4A5CtzwaIgg/Wy0dQsSQBooV2LHgakcbJDLjoGFlnSh8U/qVLNRXst1EIt9L+ifwGZsdclGCOZrAAAAABJRU5ErkJggg==\";\n\n//# sourceURL=webpack://yd-react-generator/./src/web/assets/images/aboutus/phone.png?");

/***/ }),

/***/ "./src/web/assets/images/aboutus/sanjiao.png":
/*!***************************************************!*\
  !*** ./src/web/assets/images/aboutus/sanjiao.png ***!
  \***************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAMAAAAFBf7qAAAAzFBMVEUAAAD///8A//9///+q//+ZzP+q1P+q4/+O4/+Z5v+i6P+q6v+x6/+d6/+f7/+c4/+i6P+f6v+d6/+e5f+h5f+n7/+f5/+g6f+f6v+f5v+i5v+h6f+l6v+h6v+j6/+g5v+k5/+j6v+j6/+m7P+k7P+j6v+k6v+h5/+j6/+k6P+h6P+j6P+h6P+h6f+k6v+h6v+h5/+i5/+h6P+i6P+j6P+i6P+i5v+j6f+i5/+j6v+g5/+h6P+i6v+i6P+j6/+j6P+h6P+k6P+i6P+i6P9cV1yXAAAARHRSTlMAAQECAwUGCQkKCwwNDRASFhgaHR4gICMlKCkuMDEyMzU9QEJDSElJS0xMTk9RVFRUVVdYWVpdXmBhYWJjY2RkZGVlZknrMU4AAAC3SURBVHjaddLZAoFAGAXgSYWs2YmQfd9DQnTe/51cWJop/7mc72bmzGGMycZwM2lrLJrsFgDgdtWwqDt8cjQkkUwEWZUEWoPPKM/RTSDcrcSPEM7FVCgC7DpJwFInCV6DJPg6SRjTdJVJgkaSp5A0o29YpOjZpN51qlBtTFNEh49WjKh3r1P/1QvW4wtwrnEDsHmZp/nZWFw3HXFtGecrh0J4o2X3Lf14dNm5gQN/UWV/IyWVP6cvx2aD0Fq+UDoAAAAASUVORK5CYII=\";\n\n//# sourceURL=webpack://yd-react-generator/./src/web/assets/images/aboutus/sanjiao.png?");

/***/ })

}]);