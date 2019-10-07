webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/image-message.tsx":
/*!**************************************!*\
  !*** ./components/image-message.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/tangjinfeng/projects/wx-messager/components/image-message.tsx";



var StyledImageMessageThumb = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "image-message__StyledImageMessageThumb",
  componentId: "n70ly8-0"
})(["max-width:60px;"]);
var StyledImageMessageViewer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs(function (props) {
  return {
    style: {
      left: "".concat(props.left, "px"),
      right: "".concat(props.right, "px")
    }
  };
}).withConfig({
  displayName: "image-message__StyledImageMessageViewer",
  componentId: "n70ly8-1"
})(["position:fixed;top:40px;bottom:80px;pointer-events:none;"]);

var ImageMessage = function ImageMessage(_ref) {
  var message = _ref.message;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var rect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var container = document.body.querySelector('#panelContent');
    return container.getBoundingClientRect();
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledImageMessageThumb, {
    src: message.thumbnail,
    onClick: function onClick() {
      return setVisible(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), visible ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledImageMessageViewer, {
    left: rect.left,
    right: rect.right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageMessage);

/***/ })

})
//# sourceMappingURL=index.js.d569e4cab4765ce1125e.hot-update.js.map