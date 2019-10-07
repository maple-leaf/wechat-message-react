webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/wechat-message.tsx":
/*!***************************************!*\
  !*** ./components/wechat-message.tsx ***!
  \***************************************/
/*! exports provided: Role, MessageStatus, MessageBlock, MessageItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStatus", function() { return MessageStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBlock", function() { return MessageBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItem", function() { return StyledMessageItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading */ "./components/loading.tsx");


var _jsxFileName = "/Users/tangjinfeng/projects/wx-messager/components/wechat-message.tsx";





var isLink = function isLink(str) {
  return str ? /^(https?:)?(\/\/)?\w+\.\w+$/.test(str) : false;
};

var Role;

(function (Role) {
  Role[Role["sender"] = 0] = "sender";
  Role[Role["recevier"] = 1] = "recevier";
  Role[Role["system"] = 2] = "system";
})(Role || (Role = {}));

var MessageStatus;

(function (MessageStatus) {
  MessageStatus[MessageStatus["loading"] = 0] = "loading";
  MessageStatus[MessageStatus["sent"] = 1] = "sent";
  MessageStatus[MessageStatus["failed"] = 2] = "failed";
})(MessageStatus || (MessageStatus = {}));

var MessageBlock = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "wechat-message__MessageBlock",
  componentId: "o2y52m-0"
})(["display:flex;justify-content:", ";align-items:flex-start;color:#000;font-size:14px;margin:0 10px;"], function (props) {
  return props.role === Role.sender ? "flex-end" : "flex-start";
});

var MessageItem = function MessageItem(_ref) {
  var className = _ref.className,
      message = _ref.message,
      render = _ref.render,
      onClick = _ref.onClick;

  var renderFn = render || function () {
    return message.content;
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: className,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, renderFn(message));
};

var StyledMessageItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(MessageItem).withConfig({
  displayName: "wechat-message__StyledMessageItem",
  componentId: "o2y52m-1"
})(["border-radius:4px;background-color:", ";padding:10px;max-width:80%;color:", ";order:1;position:relative;&:before{content:\"\";border-width:6px;border-style:solid;border-color:transparent;position:absolute;top:10px;", ";}"], function (props) {
  return props.message.role === Role.sender ? "#95ec69" : "#fff";
}, function (props) {
  return isLink(props.message.content) ? "#2782d7" : "#000";
}, function (props) {
  return props.message.role === Role.sender ? {
    'border-left-color': '#95ec69',
    right: '-12px'
  } : {
    'border-right-color': '#fff',
    left: '-12px'
  };
});

var MessagePrefix = function MessagePrefix(_ref2) {
  var className = _ref2.className,
      message = _ref2.message,
      onFailedClick = _ref2.onFailedClick;

  if (message.status === MessageStatus.loading) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    });
  } else if (message.status === MessageStatus.failed) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: className,
      onClick: onFailedClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "!");
  }

  return null;
};

var failedMark = {
  background: '#b52f4c',
  'font-size': '12px',
  width: '18px',
  height: '18px',
  color: '#fff',
  'text-align': 'center',
  'line-height': '18px',
  'border-radius': '50%',
  cursor: 'pointer'
};
var StyledMessagePrefix = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(MessagePrefix).withConfig({
  displayName: "wechat-message__StyledMessagePrefix",
  componentId: "o2y52m-2"
})(["order:", ";margin:0 8px;", ""], function (props) {
  return props.message.role === Role.sender ? 0 : 2;
}, function (props) {
  return props.message.status === MessageStatus.failed ? failedMark : {
    width: '24px',
    height: '24px'
  };
});

var MessagePostfix = function MessagePostfix(_ref3) {
  var className = _ref3.className,
      message = _ref3.message;
  var author = message.author;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, author.thumbnail ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: author.thumbnail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }) : author.name.substring(0, 1));
};

var StyledMessagePostfix = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(MessagePostfix).withConfig({
  displayName: "wechat-message__StyledMessagePostfix",
  componentId: "o2y52m-3"
})(["font-size:24px;color:#000;display:block;height:48px;line-height:48px;text-align:center;flex:0 0 48px;border-radius:4px;background-color:#fff;text-decoration:none;", ";img{max-width:100%;max-height:100%;}"], function (props) {
  return props.message.role === Role.sender ? {
    'margin-left': '12px',
    order: 2
  } : {
    'margin-right': '12px',
    order: 0
  };
});
var AlignCenter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "wechat-message__AlignCenter",
  componentId: "o2y52m-4"
})(["display:flex;align-items:center;order:1;"]);

var WeChatMessage = function WeChatMessage(_ref4) {
  var className = _ref4.className,
      message = _ref4.message,
      render = _ref4.render,
      onClick = _ref4.onClick,
      messagePrefix = _ref4.messagePrefix,
      messagePostfix = _ref4.messagePostfix;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(message),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      _message = _useState2[0],
      setMessage = _useState2[1];

  var defaultPostfix = function defaultPostfix(message) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledMessagePostfix, {
      message: message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    });
  };

  console.log(messagePostfix);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MessageBlock, {
    role: message.role,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AlignCenter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, messagePrefix ? messagePrefix(message) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledMessagePrefix, {
    message: _message,
    onFailedClick: function onFailedClick() {
      return setMessage(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _message, {
        status: MessageStatus.loading
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledMessageItem, {
    message: message,
    render: render,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  })), messagePostfix ? messagePostfix(message, defaultPostfix) : defaultPostfix(message));
};


/* harmony default export */ __webpack_exports__["default"] = (WeChatMessage);

/***/ })

})
//# sourceMappingURL=index.js.d9de90d586002494b38e.hot-update.js.map