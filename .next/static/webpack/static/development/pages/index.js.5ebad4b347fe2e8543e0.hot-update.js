webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Header/MobileHeader.js":
/*!***********************************************!*\
  !*** ./src/components/Header/MobileHeader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/czuniga/Desktop/new_project/my-app/src/components/Header/MobileHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Mobile() {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    onClick: handleShow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Launch demo modal"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    show: show,
    onHide: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Header, {
    closeButton: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Modal heading")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Woohoo, you're reading this text in a modal!"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "secondary",
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Save Changes"))));
}

;

const MobileHeader = props => {
  const {
    0: show,
    1: toggleShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return props.loggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(MyVerticallyCenteredModal, {
    show: show,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-3592596624" + " " + "mobile-header-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => toggleShow(!show),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Show Menu")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3592596624",
    __self: undefined
  }, ".mobile-header-container.jsx-3592596624{display:none;width:100%;height:100%;}@media (max-width:720px){.mobile-header-container.jsx-3592596624{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jenVuaWdhL0Rlc2t0b3AvbmV3X3Byb2plY3QvbXktYXBwL3NyYy9jb21wb25lbnRzL0hlYWRlci9Nb2JpbGVIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUd3QixBQU1FLGFBTEosV0FDQyxZQUNkLHNDQUlFIiwiZmlsZSI6Ii9Vc2Vycy9jenVuaWdhL0Rlc2t0b3AvbmV3X3Byb2plY3QvbXktYXBwL3NyYy9jb21wb25lbnRzL0hlYWRlci9Nb2JpbGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBNb2JpbGUoKSB7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3coZmFsc2UpO1xuICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2hvd30+XG4gICAgICAgIExhdW5jaCBkZW1vIG1vZGFsXG4gICAgICA8L0J1dHRvbj5cblxuICAgICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgIDxNb2RhbC5UaXRsZT5Nb2RhbCBoZWFkaW5nPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5Pldvb2hvbywgeW91J3JlIHJlYWRpbmcgdGhpcyB0ZXh0IGluIGEgbW9kYWwhPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBNb2JpbGVIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Nob3csIHRvZ2dsZVNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gcHJvcHMubG9nZ2VkSW4gPyAoXG4gICAgPD5cbiAgICAgIDxNeVZlcnRpY2FsbHlDZW50ZXJlZE1vZGFsIHNob3c9e3Nob3d9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlU2hvdyghc2hvdyl9PlNob3cgTWVudTwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tb2JpbGUtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgLm1vYmlsZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaXRlbVwiPkxvZ28gYXNzPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/czuniga/Desktop/new_project/my-app/src/components/Header/MobileHeader.js */")) : __jsx("div", {
    className: "header flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "header-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "Logo ass"));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileHeader);

/***/ })

})
//# sourceMappingURL=index.js.5ebad4b347fe2e8543e0.hot-update.js.map