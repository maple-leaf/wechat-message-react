webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/avatar-with-video-mark.tsx":
/*!***********************************************!*\
  !*** ./components/avatar-with-video-mark.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tangjinfeng/projects/wx-messager/components/avatar-with-video-mark.tsx";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message,
      defaultRender = _ref.defaultRender;
  console.log(defaultRender, message);
  var Component = defaultRender();
  console.log(Component);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "xxx"));
});

/***/ }),

/***/ "./components/wechat-message-bridge.tsx":
/*!**********************************************!*\
  !*** ./components/wechat-message-bridge.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _wechat_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wechat-message */ "./components/wechat-message.tsx");
/* harmony import */ var _link_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link-message */ "./components/link-message.tsx");
/* harmony import */ var _vote_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vote-message */ "./components/vote-message.tsx");
/* harmony import */ var _emoji_rain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emoji-rain */ "./components/emoji-rain.ts");
/* harmony import */ var _avatar_with_video_mark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar-with-video-mark */ "./components/avatar-with-video-mark.tsx");
var _jsxFileName = "/Users/tangjinfeng/projects/wx-messager/components/wechat-message-bridge.tsx";








var MessageBridge = function MessageBridge(_ref) {
  var className = _ref.className,
      message = _ref.message;
  var renderFn;
  var onClick;

  switch (message.type) {
    case 'link':
      renderFn = function renderFn() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_link_message__WEBPACK_IMPORTED_MODULE_3__["default"], {
          message: message,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        });
      };

      onClick = function onClick() {
        return alert(message.url);
      };

      break;

    case 'vote':
      renderFn = function renderFn() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vote_message__WEBPACK_IMPORTED_MODULE_4__["default"], {
          message: message,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        });
      };

      break;

    default:
      break;
  }

  var emojiRainRender = Object(_emoji_rain__WEBPACK_IMPORTED_MODULE_5__["default"])(message.content);

  var defaultRender = function defaultRender() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wechat_message__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: className,
      onClick: onClick,
      message: message,
      render: renderFn,
      messagePostfix: _avatar_with_video_mark__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  };

  return emojiRainRender ? emojiRainRender(defaultRender) : defaultRender();
};

var StyledMessageBridge = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MessageBridge).withConfig({
  displayName: "wechat-message-bridge__StyledMessageBridge",
  componentId: "sc-8efve2-0"
})(["margin-bottom:14px;min-width:", ";"], function (props) {
  return props.message.type === 'normal' ? '80px' : '120px';
});
/* harmony default export */ __webpack_exports__["default"] = (StyledMessageBridge);

/***/ })

})
//# sourceMappingURL=index.js.c6ed4d593a9c203e1995.hot-update.js.map