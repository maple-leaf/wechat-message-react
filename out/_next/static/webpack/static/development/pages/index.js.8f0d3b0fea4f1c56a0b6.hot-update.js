webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _image_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-message */ "./components/image-message.tsx");
/* harmony import */ var _system_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system-message */ "./components/system-message.tsx");
/* harmony import */ var _emoji_rain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emoji-rain */ "./components/emoji-rain.ts");
/* harmony import */ var _avatar_with_video_mark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./avatar-with-video-mark */ "./components/avatar-with-video-mark.tsx");
var _jsxFileName = "/Users/tangjinfeng/projects/wx-messager/components/wechat-message-bridge.tsx";









var SystemMessageBlock = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_wechat_message__WEBPACK_IMPORTED_MODULE_2__["MessageBlock"]).withConfig({
  displayName: "wechat-message-bridge__SystemMessageBlock",
  componentId: "sc-8efve2-0"
})(["justify-content:center;"]);

var MessageBridge = function MessageBridge(_ref) {
  var className = _ref.className,
      message = _ref.message;
  var renderFn;
  var onClick;

  if (message.role === _wechat_message__WEBPACK_IMPORTED_MODULE_2__["Role"].system) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SystemMessageBlock, {
      className: className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_system_message__WEBPACK_IMPORTED_MODULE_6__["default"], {
      message: message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  } else {
    switch (message.type) {
      case 'link':
        renderFn = function renderFn() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_link_message__WEBPACK_IMPORTED_MODULE_3__["default"], {
            message: message,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
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
              lineNumber: 34
            },
            __self: this
          });
        };

        break;

      case 'image':
        renderFn = function renderFn() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_message__WEBPACK_IMPORTED_MODULE_5__["default"], {
            message: message,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          });
        };

        break;

      default:
        break;
    }
  }

  var emojiRainRender = Object(_emoji_rain__WEBPACK_IMPORTED_MODULE_7__["default"])(message.content);

  var defaultRender = function defaultRender() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wechat_message__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: className,
      onClick: onClick,
      message: message,
      render: renderFn,
      messagePostfix: _avatar_with_video_mark__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
  };

  return emojiRainRender ? emojiRainRender(defaultRender) : defaultRender();
};

var StyledMessageBridge = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MessageBridge).withConfig({
  displayName: "wechat-message-bridge__StyledMessageBridge",
  componentId: "sc-8efve2-1"
})(["margin-bottom:14px;min-width:", ";"], function (props) {
  return props.message.type === 'normal' ? '80px' : '120px';
});
/* harmony default export */ __webpack_exports__["default"] = (StyledMessageBridge);

/***/ })

})
//# sourceMappingURL=index.js.8f0d3b0fea4f1c56a0b6.hot-update.js.map