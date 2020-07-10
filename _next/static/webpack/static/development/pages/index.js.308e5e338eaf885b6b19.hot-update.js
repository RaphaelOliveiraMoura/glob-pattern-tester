webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/shared/Node/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/shared/Node/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minimatch */ \"./node_modules/minimatch/minimatch.js\");\n/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minimatch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/shared/Node/styles.ts\");\n/* harmony import */ var store_nodeStructure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/nodeStructure */ \"./src/store/nodeStructure.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/home/raphaeloliveira/raphael/glob-pattern-tester/src/components/shared/Node/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar icons = {\n  directory: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__[\"BsFolder\"],\n  file: react_icons_bs__WEBPACK_IMPORTED_MODULE_2__[\"BsFileEarmark\"]\n};\n\nvar NodeComponent = function NodeComponent(_ref) {\n  _s();\n\n  var node = _ref.node,\n      globPattern = _ref.globPattern,\n      _ref$depth = _ref.depth,\n      depth = _ref$depth === void 0 ? 0 : _ref$depth;\n  var fileMatchWithGlobPattern = node.type === 'file' && minimatch__WEBPACK_IMPORTED_MODULE_1___default()(node.path, globPattern, {\n    dot: true\n  });\n  var Icon = icons[node.type];\n\n  var _useNodeStructure = Object(store_nodeStructure__WEBPACK_IMPORTED_MODULE_4__[\"useNodeStructure\"])(),\n      renameNode = _useNodeStructure.renameNode;\n\n  var onChangeFileName = function onChangeFileName(path, value) {\n    renameNode(path, value);\n  };\n\n  var Childrens = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function () {\n    return node.childrens && node.childrens.map(function (children) {\n      return __jsx(NodeComponent, {\n        key: children.name,\n        node: children,\n        globPattern: globPattern,\n        depth: depth + 1,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }\n      });\n    });\n  }, []);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"NodeItem\"], {\n    matchGlob: fileMatchWithGlobPattern,\n    depth: depth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(Icon, {\n    color: fileMatchWithGlobPattern ? '#82D11D' : '#fff',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: node.name,\n    onChange: function onChange(e) {\n      return onChangeFileName(node.path, e.target.value);\n    },\n    disabled: node.type === 'directory',\n    autoComplete: \"off\",\n    autoCorrect: \"off\",\n    spellCheck: \"false\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  })), __jsx(Childrens, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(NodeComponent, \"4JdO+D+ExC77XqaE0Elhrzcv3r0=\", false, function () {\n  return [store_nodeStructure__WEBPACK_IMPORTED_MODULE_4__[\"useNodeStructure\"]];\n});\n\n_c = NodeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NodeComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"NodeComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvTm9kZS9pbmRleC50c3g/YzA0YSJdLCJuYW1lcyI6WyJpY29ucyIsImRpcmVjdG9yeSIsIkJzRm9sZGVyIiwiZmlsZSIsIkJzRmlsZUVhcm1hcmsiLCJOb2RlQ29tcG9uZW50Iiwibm9kZSIsImdsb2JQYXR0ZXJuIiwiZGVwdGgiLCJmaWxlTWF0Y2hXaXRoR2xvYlBhdHRlcm4iLCJ0eXBlIiwibWluaW1hdGNoIiwicGF0aCIsImRvdCIsIkljb24iLCJ1c2VOb2RlU3RydWN0dXJlIiwicmVuYW1lTm9kZSIsIm9uQ2hhbmdlRmlsZU5hbWUiLCJ2YWx1ZSIsIkNoaWxkcmVucyIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJjaGlsZHJlbnMiLCJtYXAiLCJjaGlsZHJlbiIsIm5hbWUiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQVFBLElBQU1BLEtBQUssR0FBRztBQUNaQyxXQUFTLEVBQUVDLHVEQURDO0FBRVpDLE1BQUksRUFBRUMsNERBQWFBO0FBRlAsQ0FBZDs7QUFLQSxJQUFNQyxhQUEyQyxHQUFHLFNBQTlDQSxhQUE4QyxPQUk5QztBQUFBOztBQUFBLE1BSEpDLElBR0ksUUFISkEsSUFHSTtBQUFBLE1BRkpDLFdBRUksUUFGSkEsV0FFSTtBQUFBLHdCQURKQyxLQUNJO0FBQUEsTUFESkEsS0FDSSwyQkFESSxDQUNKO0FBQ0osTUFBTUMsd0JBQXdCLEdBQzVCSCxJQUFJLENBQUNJLElBQUwsS0FBYyxNQUFkLElBQ0FDLGdEQUFTLENBQUNMLElBQUksQ0FBQ00sSUFBTixFQUFZTCxXQUFaLEVBQXlCO0FBQ2hDTSxPQUFHLEVBQUU7QUFEMkIsR0FBekIsQ0FGWDtBQU1BLE1BQU1DLElBQUksR0FBR2QsS0FBSyxDQUFDTSxJQUFJLENBQUNJLElBQU4sQ0FBbEI7O0FBUEksMEJBU21CSyw0RUFBZ0IsRUFUbkM7QUFBQSxNQVNJQyxVQVRKLHFCQVNJQSxVQVRKOztBQVdKLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0wsSUFBRCxFQUFlTSxLQUFmLEVBQWlDO0FBQ3hERixjQUFVLENBQUNKLElBQUQsRUFBT00sS0FBUCxDQUFWO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxTQUFTLEdBQUdDLDRDQUFLLENBQUNDLFdBQU4sQ0FBa0IsWUFBTTtBQUN4QyxXQUNFZixJQUFJLENBQUNnQixTQUFMLElBQ0FoQixJQUFJLENBQUNnQixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsUUFBRDtBQUFBLGFBQ2pCLE1BQUMsYUFBRDtBQUNFLFdBQUcsRUFBRUEsUUFBUSxDQUFDQyxJQURoQjtBQUVFLFlBQUksRUFBRUQsUUFGUjtBQUdFLG1CQUFXLEVBQUVqQixXQUhmO0FBSUUsYUFBSyxFQUFFQyxLQUFLLEdBQUcsQ0FKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURpQjtBQUFBLEtBQW5CLENBRkY7QUFXRCxHQVppQixFQVlmLEVBWmUsQ0FBbEI7QUFjQSxTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBWSxhQUFTLEVBQUVDLHdCQUF2QjtBQUFpRCxTQUFLLEVBQUVELEtBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBTSxTQUFLLEVBQUVDLHdCQUF3QixHQUFHLFNBQUgsR0FBZSxNQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsU0FBSyxFQUFFSCxJQUFJLENBQUNtQixJQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsYUFBT1QsZ0JBQWdCLENBQUNYLElBQUksQ0FBQ00sSUFBTixFQUFZYyxDQUFDLENBQUNDLE1BQUYsQ0FBU1QsS0FBckIsQ0FBdkI7QUFBQSxLQUhaO0FBSUUsWUFBUSxFQUFFWixJQUFJLENBQUNJLElBQUwsS0FBYyxXQUoxQjtBQUtFLGdCQUFZLEVBQUMsS0FMZjtBQU1FLGVBQVcsRUFBQyxLQU5kO0FBT0UsY0FBVSxFQUFDLE9BUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFhRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBREY7QUFpQkQsQ0FsREQ7O0dBQU1MLGE7VUFhbUJVLG9FOzs7S0FibkJWLGE7QUFtRFNBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL05vZGUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1pbmltYXRjaCBmcm9tICdtaW5pbWF0Y2gnXG5pbXBvcnQgeyBCc0ZpbGVFYXJtYXJrLCBCc0ZvbGRlciB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJ1xuXG5pbXBvcnQgTm9kZSBmcm9tICdpbnRlcmZhY2VzL05vZGUnXG5cbmltcG9ydCB7IHVzZU5vZGVTdHJ1Y3R1cmUgfSBmcm9tICdzdG9yZS9ub2RlU3RydWN0dXJlJ1xuXG5pbnRlcmZhY2UgTm9kZUNvbXBvbmVudFByb3BzIHtcbiAgbm9kZTogTm9kZVxuICBnbG9iUGF0dGVybjogc3RyaW5nXG4gIGRlcHRoPzogbnVtYmVyXG59XG5cbmNvbnN0IGljb25zID0ge1xuICBkaXJlY3Rvcnk6IEJzRm9sZGVyLFxuICBmaWxlOiBCc0ZpbGVFYXJtYXJrXG59XG5cbmNvbnN0IE5vZGVDb21wb25lbnQ6IFJlYWN0LkZDPE5vZGVDb21wb25lbnRQcm9wcz4gPSAoe1xuICBub2RlLFxuICBnbG9iUGF0dGVybixcbiAgZGVwdGggPSAwXG59KSA9PiB7XG4gIGNvbnN0IGZpbGVNYXRjaFdpdGhHbG9iUGF0dGVybiA9XG4gICAgbm9kZS50eXBlID09PSAnZmlsZScgJiZcbiAgICBtaW5pbWF0Y2gobm9kZS5wYXRoLCBnbG9iUGF0dGVybiwge1xuICAgICAgZG90OiB0cnVlXG4gICAgfSlcblxuICBjb25zdCBJY29uID0gaWNvbnNbbm9kZS50eXBlXVxuXG4gIGNvbnN0IHsgcmVuYW1lTm9kZSB9ID0gdXNlTm9kZVN0cnVjdHVyZSgpXG5cbiAgY29uc3Qgb25DaGFuZ2VGaWxlTmFtZSA9IChwYXRoOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICByZW5hbWVOb2RlKHBhdGgsIHZhbHVlKVxuICB9XG5cbiAgY29uc3QgQ2hpbGRyZW5zID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBub2RlLmNoaWxkcmVucyAmJlxuICAgICAgbm9kZS5jaGlsZHJlbnMubWFwKChjaGlsZHJlbikgPT4gKFxuICAgICAgICA8Tm9kZUNvbXBvbmVudFxuICAgICAgICAgIGtleT17Y2hpbGRyZW4ubmFtZX1cbiAgICAgICAgICBub2RlPXtjaGlsZHJlbn1cbiAgICAgICAgICBnbG9iUGF0dGVybj17Z2xvYlBhdHRlcm59XG4gICAgICAgICAgZGVwdGg9e2RlcHRoICsgMX1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gICAgKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgIDxTLk5vZGVJdGVtIG1hdGNoR2xvYj17ZmlsZU1hdGNoV2l0aEdsb2JQYXR0ZXJufSBkZXB0aD17ZGVwdGh9PlxuICAgICAgICA8SWNvbiBjb2xvcj17ZmlsZU1hdGNoV2l0aEdsb2JQYXR0ZXJuID8gJyM4MkQxMUQnIDogJyNmZmYnfSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e25vZGUubmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlRmlsZU5hbWUobm9kZS5wYXRoLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e25vZGUudHlwZSA9PT0gJ2RpcmVjdG9yeSd9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvUy5Ob2RlSXRlbT5cbiAgICAgIDxDaGlsZHJlbnMgLz5cbiAgICA8L1MuQ29udGFpbmVyPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBOb2RlQ29tcG9uZW50XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/shared/Node/index.tsx\n");

/***/ })

})