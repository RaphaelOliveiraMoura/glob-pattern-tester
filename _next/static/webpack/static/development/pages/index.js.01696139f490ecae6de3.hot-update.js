webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/store/nodeStructure.tsx":
/*!*************************************!*\
  !*** ./src/store/nodeStructure.tsx ***!
  \*************************************/
/*! exports provided: NodeStructure, NodeStructureProvider, useNodeStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeStructure\", function() { return NodeStructure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeStructureProvider\", function() { return NodeStructureProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useNodeStructure\", function() { return useNodeStructure; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mock_rootFolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mock/rootFolder */ \"./src/mock/rootFolder.ts\");\n/* harmony import */ var services_addNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/addNode */ \"./src/services/addNode/index.ts\");\n/* harmony import */ var services_removeNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/removeNode */ \"./src/services/removeNode/index.ts\");\n/* harmony import */ var services_renameNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/renameNode */ \"./src/services/renameNode/index.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/raphaeloliveira/raphael/glob-pattern-tester/src/store/nodeStructure.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar NodeStructure = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});\nvar NodeStructureProvider = function NodeStructureProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(mock_rootFolder__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      root = _React$useState2[0],\n      setRoot = _React$useState2[1];\n\n  var addNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (name, path, type) {\n    var nodeToAdd = {\n      name: name,\n      path: \"\".concat(path, \"/\").concat(name),\n      type: type,\n      childrens: []\n    };\n\n    var draft = _objectSpread({}, root);\n\n    Object(services_addNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n      nodeTree: root,\n      nodeToAdd: nodeToAdd,\n      path: path\n    });\n    setRoot(draft);\n  }, [root]);\n  var removeNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (path) {\n    var draft = _objectSpread({}, root);\n\n    Object(services_removeNode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n      nodeTree: root,\n      path: path\n    });\n    setRoot(draft);\n  }, [root]);\n  var renameNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (path, newName) {\n    var draft = _objectSpread({}, root);\n\n    Object(services_renameNode__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n      nodeTree: root,\n      path: path,\n      nameToUpdate: newName\n    });\n    setRoot(draft);\n  }, [root]);\n  return __jsx(NodeStructure.Provider, {\n    value: {\n      root: root,\n      addNode: addNode,\n      removeNode: removeNode,\n      renameNode: renameNode\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(NodeStructureProvider, \"iSi7DOYYocVpXFGqMlbxDBXJj8g=\");\n\n_c = NodeStructureProvider;\nvar useNodeStructure = function useNodeStructure() {\n  _s2();\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(NodeStructure);\n};\n\n_s2(useNodeStructure, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"NodeStructureProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbm9kZVN0cnVjdHVyZS50c3g/M2Q4NSJdLCJuYW1lcyI6WyJOb2RlU3RydWN0dXJlIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTm9kZVN0cnVjdHVyZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImluaXRpYWxEYXRhUm9vdEZvbGRlciIsInJvb3QiLCJzZXRSb290IiwiYWRkTm9kZSIsInVzZUNhbGxiYWNrIiwibmFtZSIsInBhdGgiLCJ0eXBlIiwibm9kZVRvQWRkIiwiY2hpbGRyZW5zIiwiZHJhZnQiLCJhZGROb2RlVXRpbCIsIm5vZGVUcmVlIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVVdGlsIiwicmVuYW1lTm9kZSIsIm5ld05hbWUiLCJyZW5hbWVOb2RlVXRpbCIsIm5hbWVUb1VwZGF0ZSIsInVzZU5vZGVTdHJ1Y3R1cmUiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFTTyxJQUFNQSxhQUFhLEdBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FDM0IsRUFEMkIsQ0FBdEI7QUFJQSxJQUFNQyxxQkFBK0IsR0FBRyxTQUFsQ0EscUJBQWtDLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLHdCQUN2Q0gsNENBQUssQ0FBQ0ksUUFBTixDQUFxQkMsdURBQXJCLENBRHVDO0FBQUE7QUFBQSxNQUN4REMsSUFEd0Q7QUFBQSxNQUNsREMsT0FEa0Q7O0FBRy9ELE1BQU1DLE9BQU8sR0FBR1IsNENBQUssQ0FBQ1MsV0FBTixDQUNkLFVBQUNDLElBQUQsRUFBZUMsSUFBZixFQUE2QkMsSUFBN0IsRUFBNEQ7QUFDMUQsUUFBTUMsU0FBZSxHQUFHO0FBQ3RCSCxVQUFJLEVBQUpBLElBRHNCO0FBRXRCQyxVQUFJLFlBQUtBLElBQUwsY0FBYUQsSUFBYixDQUZrQjtBQUd0QkUsVUFBSSxFQUFKQSxJQUhzQjtBQUl0QkUsZUFBUyxFQUFFO0FBSlcsS0FBeEI7O0FBTUEsUUFBTUMsS0FBSyxxQkFBUVQsSUFBUixDQUFYOztBQUVBVSxvRUFBVyxDQUFDO0FBQUVDLGNBQVEsRUFBRVgsSUFBWjtBQUFrQk8sZUFBUyxFQUFUQSxTQUFsQjtBQUE2QkYsVUFBSSxFQUFKQTtBQUE3QixLQUFELENBQVg7QUFFQUosV0FBTyxDQUFDUSxLQUFELENBQVA7QUFDRCxHQWJhLEVBY2QsQ0FBQ1QsSUFBRCxDQWRjLENBQWhCO0FBaUJBLE1BQU1ZLFVBQVUsR0FBR2xCLDRDQUFLLENBQUNTLFdBQU4sQ0FDakIsVUFBQ0UsSUFBRCxFQUFrQjtBQUNoQixRQUFNSSxLQUFLLHFCQUFRVCxJQUFSLENBQVg7O0FBQ0FhLHVFQUFjLENBQUM7QUFBRUYsY0FBUSxFQUFFWCxJQUFaO0FBQWtCSyxVQUFJLEVBQUpBO0FBQWxCLEtBQUQsQ0FBZDtBQUNBSixXQUFPLENBQUNRLEtBQUQsQ0FBUDtBQUNELEdBTGdCLEVBTWpCLENBQUNULElBQUQsQ0FOaUIsQ0FBbkI7QUFTQSxNQUFNYyxVQUFVLEdBQUdwQiw0Q0FBSyxDQUFDUyxXQUFOLENBQ2pCLFVBQUNFLElBQUQsRUFBZVUsT0FBZixFQUFtQztBQUNqQyxRQUFNTixLQUFLLHFCQUFRVCxJQUFSLENBQVg7O0FBQ0FnQix1RUFBYyxDQUFDO0FBQUVMLGNBQVEsRUFBRVgsSUFBWjtBQUFrQkssVUFBSSxFQUFKQSxJQUFsQjtBQUF3Qlksa0JBQVksRUFBRUY7QUFBdEMsS0FBRCxDQUFkO0FBQ0FkLFdBQU8sQ0FBQ1EsS0FBRCxDQUFQO0FBQ0QsR0FMZ0IsRUFNakIsQ0FBQ1QsSUFBRCxDQU5pQixDQUFuQjtBQVNBLFNBQ0UsTUFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRUEsVUFBSSxFQUFKQSxJQUFGO0FBQVFFLGFBQU8sRUFBUEEsT0FBUjtBQUFpQlUsZ0JBQVUsRUFBVkEsVUFBakI7QUFBNkJFLGdCQUFVLEVBQVZBO0FBQTdCLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pCLFFBREgsQ0FERjtBQUtELENBM0NNOztHQUFNRCxxQjs7S0FBQUEscUI7QUE2Q04sSUFBTXNCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQTs7QUFBQSxTQUM5QnhCLDRDQUFLLENBQUN5QixVQUFOLENBQWlCMUIsYUFBakIsQ0FEOEI7QUFBQSxDQUF6Qjs7SUFBTXlCLGdCIiwiZmlsZSI6Ii4vc3JjL3N0b3JlL25vZGVTdHJ1Y3R1cmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTm9kZSBmcm9tICdpbnRlcmZhY2VzL05vZGUnXG5cbmltcG9ydCBpbml0aWFsRGF0YVJvb3RGb2xkZXIgZnJvbSAnbW9jay9yb290Rm9sZGVyJ1xuXG5pbXBvcnQgYWRkTm9kZVV0aWwgZnJvbSAnc2VydmljZXMvYWRkTm9kZSdcbmltcG9ydCByZW1vdmVOb2RlVXRpbCBmcm9tICdzZXJ2aWNlcy9yZW1vdmVOb2RlJ1xuaW1wb3J0IHJlbmFtZU5vZGVVdGlsIGZyb20gJ3NlcnZpY2VzL3JlbmFtZU5vZGUnXG5cbmludGVyZmFjZSBOb2RlU3RydWN0dXJlUHJvcHMge1xuICByb290OiBOb2RlXG4gIGFkZE5vZGU6IChub2RlOiBOb2RlLCBwYXRoOiBzdHJpbmcpID0+IHZvaWRcbiAgcmVtb3ZlTm9kZTogKHBhdGg6IHN0cmluZykgPT4gdm9pZFxuICByZW5hbWVOb2RlOiAocGF0aDogc3RyaW5nLCBuZXdOYW1lOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IE5vZGVTdHJ1Y3R1cmUgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE5vZGVTdHJ1Y3R1cmVQcm9wcz4oXG4gIHt9IGFzIE5vZGVTdHJ1Y3R1cmVQcm9wc1xuKVxuXG5leHBvcnQgY29uc3QgTm9kZVN0cnVjdHVyZVByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3Jvb3QsIHNldFJvb3RdID0gUmVhY3QudXNlU3RhdGU8Tm9kZT4oaW5pdGlhbERhdGFSb290Rm9sZGVyKVxuXG4gIGNvbnN0IGFkZE5vZGUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAobmFtZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHR5cGU6ICdkaXJlY3RvcnknIHwgJ2ZpbGUnKSA9PiB7XG4gICAgICBjb25zdCBub2RlVG9BZGQ6IE5vZGUgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHBhdGg6IGAke3BhdGh9LyR7bmFtZX1gLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjaGlsZHJlbnM6IFtdXG4gICAgICB9XG4gICAgICBjb25zdCBkcmFmdCA9IHsgLi4ucm9vdCB9XG5cbiAgICAgIGFkZE5vZGVVdGlsKHsgbm9kZVRyZWU6IHJvb3QsIG5vZGVUb0FkZCwgcGF0aCB9KVxuXG4gICAgICBzZXRSb290KGRyYWZ0KVxuICAgIH0sXG4gICAgW3Jvb3RdXG4gIClcblxuICBjb25zdCByZW1vdmVOb2RlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZHJhZnQgPSB7IC4uLnJvb3QgfVxuICAgICAgcmVtb3ZlTm9kZVV0aWwoeyBub2RlVHJlZTogcm9vdCwgcGF0aCB9KVxuICAgICAgc2V0Um9vdChkcmFmdClcbiAgICB9LFxuICAgIFtyb290XVxuICApXG5cbiAgY29uc3QgcmVuYW1lTm9kZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChwYXRoOiBzdHJpbmcsIG5ld05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZHJhZnQgPSB7IC4uLnJvb3QgfVxuICAgICAgcmVuYW1lTm9kZVV0aWwoeyBub2RlVHJlZTogcm9vdCwgcGF0aCwgbmFtZVRvVXBkYXRlOiBuZXdOYW1lIH0pXG4gICAgICBzZXRSb290KGRyYWZ0KVxuICAgIH0sXG4gICAgW3Jvb3RdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxOb2RlU3RydWN0dXJlLlByb3ZpZGVyIHZhbHVlPXt7IHJvb3QsIGFkZE5vZGUsIHJlbW92ZU5vZGUsIHJlbmFtZU5vZGUgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Ob2RlU3RydWN0dXJlLlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VOb2RlU3RydWN0dXJlID0gKCk6IE5vZGVTdHJ1Y3R1cmVQcm9wcyA9PlxuICBSZWFjdC51c2VDb250ZXh0KE5vZGVTdHJ1Y3R1cmUpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/nodeStructure.tsx\n");

/***/ })

})