webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/shared/Node/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/shared/Node/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minimatch */ \"./node_modules/minimatch/minimatch.js\");\n/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minimatch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/shared/Node/styles.ts\");\n/* harmony import */ var store_nodeStructure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/nodeStructure */ \"./src/store/nodeStructure.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/home/raphaeloliveira/raphael/glob-pattern-tester/src/components/shared/Node/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar icons = {\n  directory: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__[\"BsFolder\"],\n  file: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__[\"BsFileEarmark\"]\n};\n\nvar NodeComponent = function NodeComponent(_ref) {\n  _s();\n\n  var node = _ref.node,\n      globPattern = _ref.globPattern,\n      _ref$depth = _ref.depth,\n      depth = _ref$depth === void 0 ? 0 : _ref$depth;\n  var inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);\n  var fileMatchWithGlobPattern = node.type === 'file' && minimatch__WEBPACK_IMPORTED_MODULE_1___default()(node.path, globPattern, {\n    dot: true\n  });\n  var Icon = icons[node.type];\n\n  var _useNodeStructure = Object(store_nodeStructure__WEBPACK_IMPORTED_MODULE_4__[\"useNodeStructure\"])(),\n      renameNode = _useNodeStructure.renameNode;\n\n  var handleBlur = function handleBlur() {\n    if (inputRef.current) {\n      console.log(inputRef.current);\n      renameNode(node.path, inputRef.current.nodeValue || '');\n    }\n  };\n\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"NodeItem\"], {\n    matchGlob: fileMatchWithGlobPattern,\n    depth: depth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(Icon, {\n    color: fileMatchWithGlobPattern ? '#82D11D' : '#fff',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    ref: inputRef,\n    role: \"input\",\n    contentEditable: node.type === 'file',\n    autoCorrect: \"off\",\n    spellCheck: \"false\",\n    onBlur: handleBlur,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, node.name)), node.childrens && node.childrens.map(function (children) {\n    return __jsx(NodeComponent, {\n      key: children.name,\n      node: children,\n      globPattern: globPattern,\n      depth: depth + 1,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }\n    });\n  }));\n};\n\n_s(NodeComponent, \"KzPUFhwDfmDfoXEig5gWZxTBN8I=\", false, function () {\n  return [store_nodeStructure__WEBPACK_IMPORTED_MODULE_4__[\"useNodeStructure\"]];\n});\n\n_c = NodeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NodeComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"NodeComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvTm9kZS9pbmRleC50c3g/YzA0YSJdLCJuYW1lcyI6WyJpY29ucyIsImRpcmVjdG9yeSIsIkJzRm9sZGVyIiwiZmlsZSIsIkJzRmlsZUVhcm1hcmsiLCJOb2RlQ29tcG9uZW50Iiwibm9kZSIsImdsb2JQYXR0ZXJuIiwiZGVwdGgiLCJpbnB1dFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiZmlsZU1hdGNoV2l0aEdsb2JQYXR0ZXJuIiwidHlwZSIsIm1pbmltYXRjaCIsInBhdGgiLCJkb3QiLCJJY29uIiwidXNlTm9kZVN0cnVjdHVyZSIsInJlbmFtZU5vZGUiLCJoYW5kbGVCbHVyIiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJub2RlVmFsdWUiLCJuYW1lIiwiY2hpbGRyZW5zIiwibWFwIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBUUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1pDLFdBQVMsRUFBRUMsdURBREM7QUFFWkMsTUFBSSxFQUFFQyw0REFBYUE7QUFGUCxDQUFkOztBQUtBLElBQU1DLGFBQTJDLEdBQUcsU0FBOUNBLGFBQThDLE9BSTlDO0FBQUE7O0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsV0FFSSxRQUZKQSxXQUVJO0FBQUEsd0JBREpDLEtBQ0k7QUFBQSxNQURKQSxLQUNJLDJCQURJLENBQ0o7QUFDSixNQUFNQyxRQUFRLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBOEIsSUFBOUIsQ0FBakI7QUFFQSxNQUFNQyx3QkFBd0IsR0FDNUJOLElBQUksQ0FBQ08sSUFBTCxLQUFjLE1BQWQsSUFDQUMsZ0RBQVMsQ0FBQ1IsSUFBSSxDQUFDUyxJQUFOLEVBQVlSLFdBQVosRUFBeUI7QUFDaENTLE9BQUcsRUFBRTtBQUQyQixHQUF6QixDQUZYO0FBTUEsTUFBTUMsSUFBSSxHQUFHakIsS0FBSyxDQUFDTSxJQUFJLENBQUNPLElBQU4sQ0FBbEI7O0FBVEksMEJBV21CSyw0RUFBZ0IsRUFYbkM7QUFBQSxNQVdJQyxVQVhKLHFCQVdJQSxVQVhKOztBQWFKLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSVgsUUFBUSxDQUFDWSxPQUFiLEVBQXNCO0FBQ3BCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWWQsUUFBUSxDQUFDWSxPQUFyQjtBQUVBRixnQkFBVSxDQUFDYixJQUFJLENBQUNTLElBQU4sRUFBWU4sUUFBUSxDQUFDWSxPQUFULENBQWlCRyxTQUFqQixJQUE4QixFQUExQyxDQUFWO0FBQ0Q7QUFDRixHQU5EOztBQVFBLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFZLGFBQVMsRUFBRVosd0JBQXZCO0FBQWlELFNBQUssRUFBRUosS0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFNLFNBQUssRUFBRUksd0JBQXdCLEdBQUcsU0FBSCxHQUFlLE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0UsT0FBRyxFQUFFSCxRQURQO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxtQkFBZSxFQUFFSCxJQUFJLENBQUNPLElBQUwsS0FBYyxNQUhqQztBQUlFLGVBQVcsRUFBQyxLQUpkO0FBS0UsY0FBVSxFQUFDLE9BTGI7QUFNRSxVQUFNLEVBQUVPLFVBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHZCxJQUFJLENBQUNtQixJQVJSLENBRkYsQ0FERixFQWNHbkIsSUFBSSxDQUFDb0IsU0FBTCxJQUNDcEIsSUFBSSxDQUFDb0IsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUNDLFFBQUQ7QUFBQSxXQUNqQixNQUFDLGFBQUQ7QUFDRSxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0gsSUFEaEI7QUFFRSxVQUFJLEVBQUVHLFFBRlI7QUFHRSxpQkFBVyxFQUFFckIsV0FIZjtBQUlFLFdBQUssRUFBRUMsS0FBSyxHQUFHLENBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEaUI7QUFBQSxHQUFuQixDQWZKLENBREY7QUEwQkQsQ0FuREQ7O0dBQU1ILGE7VUFlbUJhLG9FOzs7S0FmbkJiLGE7QUFvRFNBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL05vZGUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1pbmltYXRjaCBmcm9tICdtaW5pbWF0Y2gnXG5pbXBvcnQgeyBCc0ZpbGVFYXJtYXJrLCBCc0ZvbGRlciB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuXG5pbXBvcnQgTm9kZSBmcm9tICdpbnRlcmZhY2VzL05vZGUnXG5cbmltcG9ydCB7IHVzZU5vZGVTdHJ1Y3R1cmUgfSBmcm9tICdzdG9yZS9ub2RlU3RydWN0dXJlJ1xuXG5pbnRlcmZhY2UgTm9kZUNvbXBvbmVudFByb3BzIHtcbiAgbm9kZTogTm9kZVxuICBnbG9iUGF0dGVybjogc3RyaW5nXG4gIGRlcHRoPzogbnVtYmVyXG59XG5cbmNvbnN0IGljb25zID0ge1xuICBkaXJlY3Rvcnk6IEJzRm9sZGVyLFxuICBmaWxlOiBCc0ZpbGVFYXJtYXJrXG59XG5cbmNvbnN0IE5vZGVDb21wb25lbnQ6IFJlYWN0LkZDPE5vZGVDb21wb25lbnRQcm9wcz4gPSAoe1xuICBub2RlLFxuICBnbG9iUGF0dGVybixcbiAgZGVwdGggPSAwXG59KSA9PiB7XG4gIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4obnVsbClcblxuICBjb25zdCBmaWxlTWF0Y2hXaXRoR2xvYlBhdHRlcm4gPVxuICAgIG5vZGUudHlwZSA9PT0gJ2ZpbGUnICYmXG4gICAgbWluaW1hdGNoKG5vZGUucGF0aCwgZ2xvYlBhdHRlcm4sIHtcbiAgICAgIGRvdDogdHJ1ZVxuICAgIH0pXG5cbiAgY29uc3QgSWNvbiA9IGljb25zW25vZGUudHlwZV1cblxuICBjb25zdCB7IHJlbmFtZU5vZGUgfSA9IHVzZU5vZGVTdHJ1Y3R1cmUoKVxuXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0UmVmLmN1cnJlbnQpXG5cbiAgICAgIHJlbmFtZU5vZGUobm9kZS5wYXRoLCBpbnB1dFJlZi5jdXJyZW50Lm5vZGVWYWx1ZSB8fCAnJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgIDxTLk5vZGVJdGVtIG1hdGNoR2xvYj17ZmlsZU1hdGNoV2l0aEdsb2JQYXR0ZXJufSBkZXB0aD17ZGVwdGh9PlxuICAgICAgICA8SWNvbiBjb2xvcj17ZmlsZU1hdGNoV2l0aEdsb2JQYXR0ZXJuID8gJyM4MkQxMUQnIDogJyNmZmYnfSAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgcm9sZT1cImlucHV0XCJcbiAgICAgICAgICBjb250ZW50RWRpdGFibGU9e25vZGUudHlwZSA9PT0gJ2ZpbGUnfVxuICAgICAgICAgIGF1dG9Db3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgPlxuICAgICAgICAgIHtub2RlLm5hbWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvUy5Ob2RlSXRlbT5cbiAgICAgIHtub2RlLmNoaWxkcmVucyAmJlxuICAgICAgICBub2RlLmNoaWxkcmVucy5tYXAoKGNoaWxkcmVuKSA9PiAoXG4gICAgICAgICAgPE5vZGVDb21wb25lbnRcbiAgICAgICAgICAgIGtleT17Y2hpbGRyZW4ubmFtZX1cbiAgICAgICAgICAgIG5vZGU9e2NoaWxkcmVufVxuICAgICAgICAgICAgZ2xvYlBhdHRlcm49e2dsb2JQYXR0ZXJufVxuICAgICAgICAgICAgZGVwdGg9e2RlcHRoICsgMX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICA8L1MuQ29udGFpbmVyPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBOb2RlQ29tcG9uZW50XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/shared/Node/index.tsx\n");

/***/ })

})