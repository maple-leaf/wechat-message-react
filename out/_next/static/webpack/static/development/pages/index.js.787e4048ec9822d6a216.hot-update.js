webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/wechat-panel.tsx":
/*!*************************************!*\
  !*** ./components/wechat-panel.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _wechat_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wechat-message */ "./components/wechat-message.tsx");
/* harmony import */ var _wechat_message_bridge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wechat-message-bridge */ "./components/wechat-message-bridge.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button */ "./components/button.tsx");





var _jsxFileName = "/Users/tangjinfeng/projects/wx-messager/components/wechat-panel.tsx";






var messages = [{
  id: 1,
  content: "test1",
  role: _wechat_message__WEBPACK_IMPORTED_MODULE_7__["Role"].sender,
  type: "normal",
  author: {
    name: '枫叶'
  }
}, {
  id: 2,
  content: "google.com",
  role: _wechat_message__WEBPACK_IMPORTED_MODULE_7__["Role"].sender,
  type: "normal",
  status: _wechat_message__WEBPACK_IMPORTED_MODULE_7__["MessageStatus"].loading,
  author: {
    name: '枫叶',
    hasNewVideo: true
  }
}, {
  id: 3,
  title: "NO TITLE",
  desc: "test",
  url: 'http://example.com',
  thumbnail: "//cdn.devdocs.io/assets/sprites/docs@2x-cdcc6bcba322c1a0ccc60722f8ad8e37ea4fc4a4c2701736d9f283ac876d89b1.png",
  role: _wechat_message__WEBPACK_IMPORTED_MODULE_7__["Role"].recevier,
  type: "link",
  status: _wechat_message__WEBPACK_IMPORTED_MODULE_7__["MessageStatus"].failed,
  author: {
    name: '叶枫'
  }
}, {
  id: 4,
  title: "Upvote Me",
  desc: "This behaviour is only supported within the context of Styled Components",
  upvote: 0,
  downvote: 0,
  role: _wechat_message__WEBPACK_IMPORTED_MODULE_7__["Role"].recevier,
  type: "vote",
  author: {
    name: '叶枫'
  }
}];

var PanelTitle = function PanelTitle(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, props.title);
};

var StyledPanelTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(PanelTitle).withConfig({
  displayName: "wechat-panel__StyledPanelTitle",
  componentId: "sc-12k2fee-0"
})(["font-size:14px;color:#000;background-color:#e5eaea;text-align:center;flex:0 0 40px;line-height:40px;margin:0;"]);

var panelContent = function panelContent(_ref) {
  var className = _ref.className,
      messages = _ref.messages;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: className,
    id: "panelContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, messages.map(function (message) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wechat_message_bridge__WEBPACK_IMPORTED_MODULE_8__["default"], {
      message: message,
      key: message.id.toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    });
  }));
};

var StyledPanelContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(panelContent).withConfig({
  displayName: "wechat-panel__StyledPanelContent",
  componentId: "sc-12k2fee-1"
})(["font-size:14px;color:#000;background-color:#ededed;flex:1;padding-top:10px;position:relative;overflow:auto;"]);

var panelFooter = function panelFooter(_ref2) {
  var className = _ref2.className,
      _onClick = _ref2.onClick;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: function onClick() {
      return _onClick({
        type: 'addMessage',
        data: {
          content: '生日快乐',
          type: 'normal'
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "\u751F\u65E5\u5FEB\u4E50"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: function onClick() {
      return _onClick({
        type: 'addMessage',
        data: {
          title: 'Learn React',
          desc: 'how to use react?',
          type: 'link',
          url: 'example.com'
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "\u94FE\u63A5\u4FE1\u606F"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: function onClick() {
      return _onClick({
        type: 'addMessage',
        data: {
          type: 'image',
          thumbnail: "//cdn.devdocs.io/assets/sprites/docs@2x-cdcc6bcba322c1a0ccc60722f8ad8e37ea4fc4a4c2701736d9f283ac876d89b1.png",
          image: "//cdn.devdocs.io/assets/sprites/docs@2x-cdcc6bcba322c1a0ccc60722f8ad8e37ea4fc4a4c2701736d9f283ac876d89b1.png"
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "\u56FE\u7247\u4FE1\u606F"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: function onClick() {
      return _onClick({
        type: 'addMessage',
        data: {
          type: 'envelope',
          role: _wechat_message__WEBPACK_IMPORTED_MODULE_7__["Role"].system,
          takeBy: '枫叶',
          envelopeId: 123
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\u7EA2\u5305\u88AB\u62A2\u4FE1\u606F"));
};

var StyledPanelFooter = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(panelFooter).withConfig({
  displayName: "wechat-panel__StyledPanelFooter",
  componentId: "sc-12k2fee-2"
})(["background-color:#f6f6f6;display:flex;align-items:center;flex:0 0 80px;padding:8px;box-sizing:border-box;button{padding:8px;}"]);

var WeChatPanel = function WeChatPanel(_ref3) {
  var className = _ref3.className;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(messages),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      _messages = _useState2[0],
      setMessages = _useState2[1];

  var lazyAddMessages = function () {
    var lastTimeStamp = 0;
    var timer;
    var addedMessages = [];
    return function (message) {
      var timeStamp = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3___default()();

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default.a) {
        addedMessages = addedMessages.concat(message);
      } else {
        addedMessages.push(message);
      }

      lastTimeStamp = timeStamp;
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (timeStamp === lastTimeStamp) {
          setMessages([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_messages.map(function (m) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, m, {
              status: m.status ? m.status : _wechat_message__WEBPACK_IMPORTED_MODULE_7__["MessageStatus"].read
            });
          })), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(addedMessages)));
        }
      }, 300);
    };
  }();

  var onFooterClick = function onFooterClick(_ref4) {
    var type = _ref4.type,
        data = _ref4.data;

    switch (type) {
      case 'addMessage':
        lazyAddMessages(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          id: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3___default()()
        }, data, {
          role: data.role ? data.role : Math.random() > 0.5 ? _wechat_message__WEBPACK_IMPORTED_MODULE_7__["Role"].sender : _wechat_message__WEBPACK_IMPORTED_MODULE_7__["Role"].recevier,
          author: {
            name: '枫叶'
          }
        }));
        break;

      default:
        break;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledPanelTitle, {
    title: "\u67AB\u53F6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledPanelContent, {
    messages: _messages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledPanelFooter, {
    onClick: onFooterClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }));
};

var StyledWeChatPanel = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(WeChatPanel).withConfig({
  displayName: "wechat-panel__StyledWeChatPanel",
  componentId: "sc-12k2fee-3"
})(["display:flex;flex-direction:column;"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledWeChatPanel);

/***/ })

})
//# sourceMappingURL=index.js.787e4048ec9822d6a216.hot-update.js.map