webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/shared/Node/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/shared/Node/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minimatch */ \"./node_modules/minimatch/minimatch.js\");\n/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minimatch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/shared/Node/styles.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/raphaeloliveira/raphael/glob-pattern-tester/src/components/shared/Node/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar icons = {\n  directory: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__[\"BsFolder\"],\n  file: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__[\"BsFileEarmark\"]\n};\n\nvar NodeComponent = function NodeComponent(_ref) {\n  var node = _ref.node,\n      globPattern = _ref.globPattern,\n      _ref$depth = _ref.depth,\n      depth = _ref$depth === void 0 ? 0 : _ref$depth;\n  var fileMatchWithGlobPattern = node.type === 'file' && minimatch__WEBPACK_IMPORTED_MODULE_1___default()(node.path, globPattern, {\n    dot: true\n  });\n  var Icon = icons[node.type];\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"NodeItem\"], {\n    matchGlob: fileMatchWithGlobPattern,\n    depth: depth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(Icon, {\n    color: fileMatchWithGlobPattern ? '#82D11D' : '#fff',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: node.name,\n    disabled: node.type === 'directory',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  })), node.childrens && node.childrens.map(function (children) {\n    return __jsx(NodeComponent, {\n      key: children.name,\n      node: children,\n      globPattern: globPattern,\n      depth: depth + 1,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    });\n  }));\n};\n\n_c = NodeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NodeComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"NodeComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvTm9kZS9pbmRleC50c3g/YzA0YSJdLCJuYW1lcyI6WyJpY29ucyIsImRpcmVjdG9yeSIsIkJzRm9sZGVyIiwiZmlsZSIsIkJzRmlsZUVhcm1hcmsiLCJOb2RlQ29tcG9uZW50Iiwibm9kZSIsImdsb2JQYXR0ZXJuIiwiZGVwdGgiLCJmaWxlTWF0Y2hXaXRoR2xvYlBhdHRlcm4iLCJ0eXBlIiwibWluaW1hdGNoIiwicGF0aCIsImRvdCIsIkljb24iLCJuYW1lIiwiY2hpbGRyZW5zIiwibWFwIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFVQSxJQUFNQSxLQUFLLEdBQUc7QUFDWkMsV0FBUyxFQUFFQyx1REFEQztBQUVaQyxNQUFJLEVBQUVDLDREQUFhQTtBQUZQLENBQWQ7O0FBS0EsSUFBTUMsYUFBMkMsR0FBRyxTQUE5Q0EsYUFBOEMsT0FJOUM7QUFBQSxNQUhKQyxJQUdJLFFBSEpBLElBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSx3QkFESkMsS0FDSTtBQUFBLE1BREpBLEtBQ0ksMkJBREksQ0FDSjtBQUNKLE1BQU1DLHdCQUF3QixHQUM1QkgsSUFBSSxDQUFDSSxJQUFMLEtBQWMsTUFBZCxJQUNBQyxnREFBUyxDQUFDTCxJQUFJLENBQUNNLElBQU4sRUFBWUwsV0FBWixFQUF5QjtBQUNoQ00sT0FBRyxFQUFFO0FBRDJCLEdBQXpCLENBRlg7QUFNQSxNQUFNQyxJQUFJLEdBQUdkLEtBQUssQ0FBQ00sSUFBSSxDQUFDSSxJQUFOLENBQWxCO0FBRUEsU0FDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVksYUFBUyxFQUFFRCx3QkFBdkI7QUFBaUQsU0FBSyxFQUFFRCxLQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQU0sU0FBSyxFQUFFQyx3QkFBd0IsR0FBRyxTQUFILEdBQWUsTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFNBQUssRUFBRUgsSUFBSSxDQUFDUyxJQUZkO0FBR0UsWUFBUSxFQUFFVCxJQUFJLENBQUNJLElBQUwsS0FBYyxXQUgxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVNHSixJQUFJLENBQUNVLFNBQUwsSUFDQ1YsSUFBSSxDQUFDVSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsUUFBRDtBQUFBLFdBQ2pCLE1BQUMsYUFBRDtBQUNFLFNBQUcsRUFBRUEsUUFBUSxDQUFDSCxJQURoQjtBQUVFLFVBQUksRUFBRUcsUUFGUjtBQUdFLGlCQUFXLEVBQUVYLFdBSGY7QUFJRSxXQUFLLEVBQUVDLEtBQUssR0FBRyxDQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGlCO0FBQUEsR0FBbkIsQ0FWSixDQURGO0FBcUJELENBbENEOztLQUFNSCxhO0FBbUNTQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Ob2RlL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtaW5pbWF0Y2ggZnJvbSAnbWluaW1hdGNoJ1xuaW1wb3J0IHsgQnNGaWxlRWFybWFyaywgQnNGb2xkZXIgfSBmcm9tICdyZWFjdC1pY29ucy9icydcblxuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcydcblxuaW1wb3J0IE5vZGUgZnJvbSAnaW50ZXJmYWNlcy9Ob2RlJ1xuXG5pbnRlcmZhY2UgTm9kZUNvbXBvbmVudFByb3BzIHtcbiAgbm9kZTogTm9kZVxuICBnbG9iUGF0dGVybjogc3RyaW5nXG4gIGRlcHRoPzogbnVtYmVyXG59XG5cbmNvbnN0IGljb25zID0ge1xuICBkaXJlY3Rvcnk6IEJzRm9sZGVyLFxuICBmaWxlOiBCc0ZpbGVFYXJtYXJrXG59XG5cbmNvbnN0IE5vZGVDb21wb25lbnQ6IFJlYWN0LkZDPE5vZGVDb21wb25lbnRQcm9wcz4gPSAoe1xuICBub2RlLFxuICBnbG9iUGF0dGVybixcbiAgZGVwdGggPSAwXG59KSA9PiB7XG4gIGNvbnN0IGZpbGVNYXRjaFdpdGhHbG9iUGF0dGVybiA9XG4gICAgbm9kZS50eXBlID09PSAnZmlsZScgJiZcbiAgICBtaW5pbWF0Y2gobm9kZS5wYXRoLCBnbG9iUGF0dGVybiwge1xuICAgICAgZG90OiB0cnVlXG4gICAgfSlcblxuICBjb25zdCBJY29uID0gaWNvbnNbbm9kZS50eXBlXVxuXG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyPlxuICAgICAgPFMuTm9kZUl0ZW0gbWF0Y2hHbG9iPXtmaWxlTWF0Y2hXaXRoR2xvYlBhdHRlcm59IGRlcHRoPXtkZXB0aH0+XG4gICAgICAgIDxJY29uIGNvbG9yPXtmaWxlTWF0Y2hXaXRoR2xvYlBhdHRlcm4gPyAnIzgyRDExRCcgOiAnI2ZmZid9IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17bm9kZS5uYW1lfVxuICAgICAgICAgIGRpc2FibGVkPXtub2RlLnR5cGUgPT09ICdkaXJlY3RvcnknfVxuICAgICAgICAvPlxuICAgICAgPC9TLk5vZGVJdGVtPlxuICAgICAge25vZGUuY2hpbGRyZW5zICYmXG4gICAgICAgIG5vZGUuY2hpbGRyZW5zLm1hcCgoY2hpbGRyZW4pID0+IChcbiAgICAgICAgICA8Tm9kZUNvbXBvbmVudFxuICAgICAgICAgICAga2V5PXtjaGlsZHJlbi5uYW1lfVxuICAgICAgICAgICAgbm9kZT17Y2hpbGRyZW59XG4gICAgICAgICAgICBnbG9iUGF0dGVybj17Z2xvYlBhdHRlcm59XG4gICAgICAgICAgICBkZXB0aD17ZGVwdGggKyAxfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgIDwvUy5Db250YWluZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE5vZGVDb21wb25lbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/shared/Node/index.tsx\n");

/***/ })

})