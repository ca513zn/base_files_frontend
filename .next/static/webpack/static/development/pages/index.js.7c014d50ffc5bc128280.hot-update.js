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




function Example() {
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
  }, ".mobile-header-container.jsx-3592596624{display:none;width:100%;height:100%;}@media (max-width:720px){.mobile-header-container.jsx-3592596624{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jenVuaWdhL0Rlc2t0b3AvbmV3X3Byb2plY3QvbXktYXBwL3NyYy9jb21wb25lbnRzL0hlYWRlci9Nb2JpbGVIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUd3QixBQU1FLGFBTEosV0FDQyxZQUNkLHNDQUlFIiwiZmlsZSI6Ii9Vc2Vycy9jenVuaWdhL0Rlc2t0b3AvbmV3X3Byb2plY3QvbXktYXBwL3NyYy9jb21wb25lbnRzL0hlYWRlci9Nb2JpbGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBFeGFtcGxlKCkge1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNob3d9PlxuICAgICAgICBMYXVuY2ggZGVtbyBtb2RhbFxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIDxNb2RhbCBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICA8TW9kYWwuVGl0bGU+TW9kYWwgaGVhZGluZzwvTW9kYWwuVGl0bGU+XG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keT5Xb29ob28sIHlvdSdyZSByZWFkaW5nIHRoaXMgdGV4dCBpbiBhIG1vZGFsITwvTW9kYWwuQm9keT5cbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTW9iaWxlSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzaG93LCB0b2dnbGVTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIHByb3BzLmxvZ2dlZEluID8gKFxuICAgIDw+XG4gICAgICA8TXlWZXJ0aWNhbGx5Q2VudGVyZWRNb2RhbCBzaG93PXtzaG93fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVNob3coIXNob3cpfT5TaG93IE1lbnU8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubW9iaWxlLWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgIC5tb2JpbGUtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWl0ZW1cIj5Mb2dvIGFzczwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/czuniga/Desktop/new_project/my-app/src/components/Header/MobileHeader.js */")) : __jsx("div", {
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
//# sourceMappingURL=index.js.7c014d50ffc5bc128280.hot-update.js.map