webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/system-message.tsx":
/*!***************************************!*\
  !*** ./components/system-message.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/tangjinfeng/projects/wx-messager/components/system-message.tsx";


var StyledEnvelopeMessage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "system-message__StyledEnvelopeMessage",
  componentId: "ek29yn-0"
})(["font-size:12px;color:#000;background:rgba(255,255,255,0.5);height:30px;display:flex;align-items:center;padding:0 12px;"]);
var StyledEnvelopeLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "system-message__StyledEnvelopeLink",
  componentId: "ek29yn-1"
})(["color:#FF9800;margin-left:2px;"]); // 红包被领通知

var RedEnvelope = function RedEnvelope(_ref) {
  var takeBy = _ref.takeBy,
      envelopeId = _ref.envelopeId;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledEnvelopeMessage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\uD83E\uDDE7 ", takeBy, " \u9886\u53D6\u4E86\u4F60\u7684 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledEnvelopeLink, {
    href: '#' + envelopeId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

var SystemMessage = function SystemMessage(_ref2) {
  var message = _ref2.message;

  switch (message.type) {
    case 'envelope':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RedEnvelope, {
        message: message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      });

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SystemMessage);

/***/ })

})
//# sourceMappingURL=index.js.46b2c50f9a07fbb00ea1.hot-update.js.map