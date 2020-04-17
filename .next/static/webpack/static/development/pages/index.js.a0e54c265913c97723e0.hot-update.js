webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Header/MobileHeader.js":
/*!***********************************************!*\
  !*** ./src/components/Header/MobileHeader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");

var _jsxFileName = "/Users/czuniga/Desktop/new_project/my-app/src/components/Header/MobileHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const MyVerticallyCenteredModal = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    onHide: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    id: "contained-modal-title-vcenter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Modal heading")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Centered Modal"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: props.onHide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Close")));
};

const MobileHeader = props => {
  const {
    0: show,
    1: toggleShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  return props.loggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(MyVerticallyCenteredModal, {
    show: show,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-3592596624" + " " + "mobile-header-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: () => toggleShow(!show),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Show Menu")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3592596624",
    __self: undefined
  }, ".mobile-header-container.jsx-3592596624{display:none;width:100%;height:100%;}@media (max-width:720px){.mobile-header-container.jsx-3592596624{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jenVuaWdhL0Rlc2t0b3AvbmV3X3Byb2plY3QvbXktYXBwL3NyYy9jb21wb25lbnRzL0hlYWRlci9Nb2JpbGVIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNrQixBQUd3QixBQU1FLGFBTEosV0FDQyxZQUNkLHNDQUlFIiwiZmlsZSI6Ii9Vc2Vycy9jenVuaWdhL0Rlc2t0b3AvbmV3X3Byb2plY3QvbXktYXBwL3NyYy9jb21wb25lbnRzL0hlYWRlci9Nb2JpbGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBNeVZlcnRpY2FsbHlDZW50ZXJlZE1vZGFsID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBzaXplPVwibGdcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuICAgICAgY2VudGVyZWRcbiAgICAgIG9uSGlkZT17aGFuZGxlQ2xvc2V9XG4gICAgPlxuICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cbiAgICAgICAgICBNb2RhbCBoZWFkaW5nXG4gICAgICAgIDwvTW9kYWwuVGl0bGU+XG4gICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICA8aDQ+Q2VudGVyZWQgTW9kYWw8L2g0PlxuICAgICAgICA8cD5cbiAgICAgICAgICBDcmFzIG1hdHRpcyBjb25zZWN0ZXR1ciBwdXJ1cyBzaXQgYW1ldCBmZXJtZW50dW0uIENyYXMganVzdG8gb2RpbyxcbiAgICAgICAgICBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0IHF1YW0uIE1vcmJpIGxlbyByaXN1cywgcG9ydGEgYWNcbiAgICAgICAgICBjb25zZWN0ZXR1ciBhYywgdmVzdGlidWx1bSBhdCBlcm9zLlxuICAgICAgICA8L3A+XG4gICAgICA8L01vZGFsLkJvZHk+XG4gICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5jb25zdCBNb2JpbGVIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Nob3csIHRvZ2dsZVNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gcHJvcHMubG9nZ2VkSW4gPyAoXG4gICAgPD5cbiAgICAgIDxNeVZlcnRpY2FsbHlDZW50ZXJlZE1vZGFsIHNob3c9e3Nob3d9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlU2hvdyghc2hvdyl9PlNob3cgTWVudTwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tb2JpbGUtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgLm1vYmlsZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaXRlbVwiPkxvZ28gYXNzPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/czuniga/Desktop/new_project/my-app/src/components/Header/MobileHeader.js */")) : __jsx("div", {
    className: "header flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "header-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Logo ass"));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileHeader);

/***/ })

})
//# sourceMappingURL=index.js.a0e54c265913c97723e0.hot-update.js.map