webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/services/addNode/index.ts":
/*!***************************************!*\
  !*** ./src/services/addNode/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addNode; });\nfunction addNode(_ref) {\n  var nodeTree = _ref.nodeTree,\n      nodeToAdd = _ref.nodeToAdd,\n      path = _ref.path;\n\n  if (nodeTree.path === path && nodeTree.type === 'directory') {\n    var _nodeTree$childrens;\n\n    (_nodeTree$childrens = nodeTree.childrens) === null || _nodeTree$childrens === void 0 ? void 0 : _nodeTree$childrens.push(nodeToAdd);\n    return;\n  }\n\n  if (!nodeTree.childrens) {\n    return;\n  }\n\n  nodeTree.childrens.forEach(function (children) {\n    return addNode({\n      nodeTree: children,\n      nodeToAdd: nodeToAdd,\n      path: path\n    });\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYWRkTm9kZS9pbmRleC50cz9mZGJkIl0sIm5hbWVzIjpbImFkZE5vZGUiLCJub2RlVHJlZSIsIm5vZGVUb0FkZCIsInBhdGgiLCJ0eXBlIiwiY2hpbGRyZW5zIiwicHVzaCIsImZvckVhY2giLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6IkFBUUE7QUFBQTtBQUFlLFNBQVNBLE9BQVQsT0FJUTtBQUFBLE1BSHJCQyxRQUdxQixRQUhyQkEsUUFHcUI7QUFBQSxNQUZyQkMsU0FFcUIsUUFGckJBLFNBRXFCO0FBQUEsTUFEckJDLElBQ3FCLFFBRHJCQSxJQUNxQjs7QUFDckIsTUFBSUYsUUFBUSxDQUFDRSxJQUFULEtBQWtCQSxJQUFsQixJQUEwQkYsUUFBUSxDQUFDRyxJQUFULEtBQWtCLFdBQWhELEVBQTZEO0FBQUE7O0FBQzNELDJCQUFBSCxRQUFRLENBQUNJLFNBQVQsNEVBQW9CQyxJQUFwQixDQUF5QkosU0FBekI7QUFDQTtBQUNEOztBQUVELE1BQUksQ0FBQ0QsUUFBUSxDQUFDSSxTQUFkLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRURKLFVBQVEsQ0FBQ0ksU0FBVCxDQUFtQkUsT0FBbkIsQ0FBMkIsVUFBQ0MsUUFBRDtBQUFBLFdBQ3pCUixPQUFPLENBQUM7QUFBRUMsY0FBUSxFQUFFTyxRQUFaO0FBQXNCTixlQUFTLEVBQVRBLFNBQXRCO0FBQWlDQyxVQUFJLEVBQUpBO0FBQWpDLEtBQUQsQ0FEa0I7QUFBQSxHQUEzQjtBQUdEIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL2FkZE5vZGUvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICdpbnRlcmZhY2VzL05vZGUnXG5cbmludGVyZmFjZSBhZGROb2RlUHJvcHMge1xuICBub2RlVHJlZTogTm9kZVxuICBub2RlVG9BZGQ6IE5vZGVcbiAgcGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5vZGUoe1xuICBub2RlVHJlZSxcbiAgbm9kZVRvQWRkLFxuICBwYXRoXG59OiBhZGROb2RlUHJvcHMpOiB2b2lkIHtcbiAgaWYgKG5vZGVUcmVlLnBhdGggPT09IHBhdGggJiYgbm9kZVRyZWUudHlwZSA9PT0gJ2RpcmVjdG9yeScpIHtcbiAgICBub2RlVHJlZS5jaGlsZHJlbnM/LnB1c2gobm9kZVRvQWRkKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFub2RlVHJlZS5jaGlsZHJlbnMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG5vZGVUcmVlLmNoaWxkcmVucy5mb3JFYWNoKChjaGlsZHJlbikgPT5cbiAgICBhZGROb2RlKHsgbm9kZVRyZWU6IGNoaWxkcmVuLCBub2RlVG9BZGQsIHBhdGggfSlcbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/addNode/index.ts\n");

/***/ }),

/***/ "./src/services/removeNode/index.ts":
/*!******************************************!*\
  !*** ./src/services/removeNode/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return removeNode; });\nfunction removeNode(_ref) {\n  var nodeTree = _ref.nodeTree,\n      path = _ref.path;\n\n  if (nodeTree.path === path) {\n    return true;\n  }\n\n  if (!nodeTree.childrens) {\n    return false;\n  }\n\n  var nodeToRemoveIndex = nodeTree.childrens.findIndex(function (children) {\n    return removeNode({\n      nodeTree: children,\n      path: path\n    }) === true;\n  });\n\n  if (nodeToRemoveIndex >= 0) {\n    nodeTree.childrens.splice(nodeToRemoveIndex, 1);\n  }\n\n  return false;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVtb3ZlTm9kZS9pbmRleC50cz9iNTQ5Il0sIm5hbWVzIjpbInJlbW92ZU5vZGUiLCJub2RlVHJlZSIsInBhdGgiLCJjaGlsZHJlbnMiLCJub2RlVG9SZW1vdmVJbmRleCIsImZpbmRJbmRleCIsImNoaWxkcmVuIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFPQTtBQUFBO0FBQWUsU0FBU0EsVUFBVCxPQUErRDtBQUFBLE1BQXpDQyxRQUF5QyxRQUF6Q0EsUUFBeUM7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCOztBQUM1RSxNQUFJRCxRQUFRLENBQUNDLElBQVQsS0FBa0JBLElBQXRCLEVBQTRCO0FBQzFCLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUksQ0FBQ0QsUUFBUSxDQUFDRSxTQUFkLEVBQXlCO0FBQ3ZCLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQU1DLGlCQUFpQixHQUFHSCxRQUFRLENBQUNFLFNBQVQsQ0FBbUJFLFNBQW5CLENBQ3hCLFVBQUNDLFFBQUQ7QUFBQSxXQUFjTixVQUFVLENBQUM7QUFBRUMsY0FBUSxFQUFFSyxRQUFaO0FBQXNCSixVQUFJLEVBQUpBO0FBQXRCLEtBQUQsQ0FBVixLQUE2QyxJQUEzRDtBQUFBLEdBRHdCLENBQTFCOztBQUlBLE1BQUlFLGlCQUFpQixJQUFJLENBQXpCLEVBQTRCO0FBQzFCSCxZQUFRLENBQUNFLFNBQVQsQ0FBbUJJLE1BQW5CLENBQTBCSCxpQkFBMUIsRUFBNkMsQ0FBN0M7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9yZW1vdmVOb2RlL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnaW50ZXJmYWNlcy9Ob2RlJ1xuXG5pbnRlcmZhY2UgYWRkTm9kZVByb3BzIHtcbiAgbm9kZVRyZWU6IE5vZGVcbiAgcGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZU5vZGUoeyBub2RlVHJlZSwgcGF0aCB9OiBhZGROb2RlUHJvcHMpOiBib29sZWFuIHtcbiAgaWYgKG5vZGVUcmVlLnBhdGggPT09IHBhdGgpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKCFub2RlVHJlZS5jaGlsZHJlbnMpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IG5vZGVUb1JlbW92ZUluZGV4ID0gbm9kZVRyZWUuY2hpbGRyZW5zLmZpbmRJbmRleChcbiAgICAoY2hpbGRyZW4pID0+IHJlbW92ZU5vZGUoeyBub2RlVHJlZTogY2hpbGRyZW4sIHBhdGggfSkgPT09IHRydWVcbiAgKVxuXG4gIGlmIChub2RlVG9SZW1vdmVJbmRleCA+PSAwKSB7XG4gICAgbm9kZVRyZWUuY2hpbGRyZW5zLnNwbGljZShub2RlVG9SZW1vdmVJbmRleCwgMSlcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/removeNode/index.ts\n");

/***/ }),

/***/ "./src/services/renameNode/index.ts":
/*!******************************************!*\
  !*** ./src/services/renameNode/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renameNode; });\nfunction splitAndReverseString(array) {\n  return array.split('/').reverse().join('/');\n}\n\nfunction renameNode(_ref) {\n  var nodeTree = _ref.nodeTree,\n      path = _ref.path,\n      nameToUpdate = _ref.nameToUpdate;\n\n  if (nodeTree.path === path) {\n    var nameRegex = new RegExp(nodeTree.name, 'gi');\n    nodeTree.path = splitAndReverseString(splitAndReverseString(nodeTree.path).replace(nameRegex, nameToUpdate));\n    nodeTree.name = nameToUpdate;\n    return;\n  }\n\n  if (!nodeTree.childrens) {\n    return;\n  }\n\n  nodeTree.childrens.forEach(function (children) {\n    return renameNode({\n      nodeTree: children,\n      path: path,\n      nameToUpdate: nameToUpdate\n    });\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVuYW1lTm9kZS9pbmRleC50cz9jNGIzIl0sIm5hbWVzIjpbInNwbGl0QW5kUmV2ZXJzZVN0cmluZyIsImFycmF5Iiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsInJlbmFtZU5vZGUiLCJub2RlVHJlZSIsInBhdGgiLCJuYW1lVG9VcGRhdGUiLCJuYW1lUmVnZXgiLCJSZWdFeHAiLCJuYW1lIiwicmVwbGFjZSIsImNoaWxkcmVucyIsImZvckVhY2giLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6IkFBUUE7QUFBQTtBQUFBLFNBQVNBLHFCQUFULENBQStCQyxLQUEvQixFQUFzRDtBQUNwRCxTQUFPQSxLQUFLLENBQUNDLEtBQU4sQ0FBWSxHQUFaLEVBQWlCQyxPQUFqQixHQUEyQkMsSUFBM0IsQ0FBZ0MsR0FBaEMsQ0FBUDtBQUNEOztBQUVjLFNBQVNDLFVBQVQsT0FJUTtBQUFBLE1BSHJCQyxRQUdxQixRQUhyQkEsUUFHcUI7QUFBQSxNQUZyQkMsSUFFcUIsUUFGckJBLElBRXFCO0FBQUEsTUFEckJDLFlBQ3FCLFFBRHJCQSxZQUNxQjs7QUFDckIsTUFBSUYsUUFBUSxDQUFDQyxJQUFULEtBQWtCQSxJQUF0QixFQUE0QjtBQUMxQixRQUFNRSxTQUFTLEdBQUcsSUFBSUMsTUFBSixDQUFXSixRQUFRLENBQUNLLElBQXBCLEVBQTBCLElBQTFCLENBQWxCO0FBRUFMLFlBQVEsQ0FBQ0MsSUFBVCxHQUFnQlAscUJBQXFCLENBQ25DQSxxQkFBcUIsQ0FBQ00sUUFBUSxDQUFDQyxJQUFWLENBQXJCLENBQXFDSyxPQUFyQyxDQUE2Q0gsU0FBN0MsRUFBd0RELFlBQXhELENBRG1DLENBQXJDO0FBSUFGLFlBQVEsQ0FBQ0ssSUFBVCxHQUFnQkgsWUFBaEI7QUFDQTtBQUNEOztBQUVELE1BQUksQ0FBQ0YsUUFBUSxDQUFDTyxTQUFkLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRURQLFVBQVEsQ0FBQ08sU0FBVCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsUUFBRDtBQUFBLFdBQ3pCVixVQUFVLENBQUM7QUFBRUMsY0FBUSxFQUFFUyxRQUFaO0FBQXNCUixVQUFJLEVBQUpBLElBQXRCO0FBQTRCQyxrQkFBWSxFQUFaQTtBQUE1QixLQUFELENBRGU7QUFBQSxHQUEzQjtBQUdEIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL3JlbmFtZU5vZGUvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICdpbnRlcmZhY2VzL05vZGUnXG5cbmludGVyZmFjZSBhZGROb2RlUHJvcHMge1xuICBub2RlVHJlZTogTm9kZVxuICBwYXRoOiBzdHJpbmdcbiAgbmFtZVRvVXBkYXRlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gc3BsaXRBbmRSZXZlcnNlU3RyaW5nKGFycmF5OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYXJyYXkuc3BsaXQoJy8nKS5yZXZlcnNlKCkuam9pbignLycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmFtZU5vZGUoe1xuICBub2RlVHJlZSxcbiAgcGF0aCxcbiAgbmFtZVRvVXBkYXRlXG59OiBhZGROb2RlUHJvcHMpOiB2b2lkIHtcbiAgaWYgKG5vZGVUcmVlLnBhdGggPT09IHBhdGgpIHtcbiAgICBjb25zdCBuYW1lUmVnZXggPSBuZXcgUmVnRXhwKG5vZGVUcmVlLm5hbWUsICdnaScpXG5cbiAgICBub2RlVHJlZS5wYXRoID0gc3BsaXRBbmRSZXZlcnNlU3RyaW5nKFxuICAgICAgc3BsaXRBbmRSZXZlcnNlU3RyaW5nKG5vZGVUcmVlLnBhdGgpLnJlcGxhY2UobmFtZVJlZ2V4LCBuYW1lVG9VcGRhdGUpXG4gICAgKVxuXG4gICAgbm9kZVRyZWUubmFtZSA9IG5hbWVUb1VwZGF0ZVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFub2RlVHJlZS5jaGlsZHJlbnMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG5vZGVUcmVlLmNoaWxkcmVucy5mb3JFYWNoKChjaGlsZHJlbikgPT5cbiAgICByZW5hbWVOb2RlKHsgbm9kZVRyZWU6IGNoaWxkcmVuLCBwYXRoLCBuYW1lVG9VcGRhdGUgfSlcbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/renameNode/index.ts\n");

/***/ }),

/***/ "./src/store/nodeStructure.tsx":
/*!*************************************!*\
  !*** ./src/store/nodeStructure.tsx ***!
  \*************************************/
/*! exports provided: NodeStructure, NodeStructureProvider, useNodeStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeStructure\", function() { return NodeStructure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeStructureProvider\", function() { return NodeStructureProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useNodeStructure\", function() { return useNodeStructure; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mock_rootFolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mock/rootFolder */ \"./src/mock/rootFolder.ts\");\n/* harmony import */ var services_addNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/addNode */ \"./src/services/addNode/index.ts\");\n/* harmony import */ var services_removeNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/removeNode */ \"./src/services/removeNode/index.ts\");\n/* harmony import */ var services_renameNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/renameNode */ \"./src/services/renameNode/index.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/raphaeloliveira/raphael/glob-pattern-tester/src/store/nodeStructure.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar NodeStructure = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});\nvar NodeStructureProvider = function NodeStructureProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(mock_rootFolder__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      root = _React$useState2[0],\n      setRoot = _React$useState2[1];\n\n  var addNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (node, path) {\n    var draft = _objectSpread({}, root);\n\n    Object(services_addNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n      nodeTree: root,\n      nodeToAdd: node,\n      path: path\n    });\n    setRoot(draft);\n  }, [root]);\n  var removeNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (path) {\n    var draft = _objectSpread({}, root);\n\n    Object(services_removeNode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n      nodeTree: root,\n      path: path\n    });\n    setRoot(draft);\n  }, [root]);\n  var renameNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (path, newName) {\n    var draft = _objectSpread({}, root);\n\n    Object(services_renameNode__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n      nodeTree: root,\n      path: path,\n      nameToUpdate: newName\n    });\n    setRoot(draft);\n  }, [root]);\n  return __jsx(NodeStructure.Provider, {\n    value: {\n      root: root,\n      addNode: addNode,\n      removeNode: removeNode,\n      renameNode: renameNode\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(NodeStructureProvider, \"iSi7DOYYocVpXFGqMlbxDBXJj8g=\");\n\n_c = NodeStructureProvider;\nvar useNodeStructure = function useNodeStructure() {\n  _s2();\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(NodeStructure);\n};\n\n_s2(useNodeStructure, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"NodeStructureProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbm9kZVN0cnVjdHVyZS50c3g/M2Q4NSJdLCJuYW1lcyI6WyJOb2RlU3RydWN0dXJlIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTm9kZVN0cnVjdHVyZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImluaXRpYWxEYXRhUm9vdEZvbGRlciIsInJvb3QiLCJzZXRSb290IiwiYWRkTm9kZSIsInVzZUNhbGxiYWNrIiwibm9kZSIsInBhdGgiLCJkcmFmdCIsImFkZE5vZGVVdGlsIiwibm9kZVRyZWUiLCJub2RlVG9BZGQiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZVV0aWwiLCJyZW5hbWVOb2RlIiwibmV3TmFtZSIsInJlbmFtZU5vZGVVdGlsIiwibmFtZVRvVXBkYXRlIiwidXNlTm9kZVN0cnVjdHVyZSIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQVNPLElBQU1BLGFBQWEsR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUMzQixFQUQyQixDQUF0QjtBQUlBLElBQU1DLHFCQUErQixHQUFHLFNBQWxDQSxxQkFBa0MsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsd0JBQ3ZDSCw0Q0FBSyxDQUFDSSxRQUFOLENBQXFCQyx1REFBckIsQ0FEdUM7QUFBQTtBQUFBLE1BQ3hEQyxJQUR3RDtBQUFBLE1BQ2xEQyxPQURrRDs7QUFHL0QsTUFBTUMsT0FBTyxHQUFHUiw0Q0FBSyxDQUFDUyxXQUFOLENBQ2QsVUFBQ0MsSUFBRCxFQUFhQyxJQUFiLEVBQThCO0FBQzVCLFFBQU1DLEtBQUsscUJBQVFOLElBQVIsQ0FBWDs7QUFDQU8sb0VBQVcsQ0FBQztBQUFFQyxjQUFRLEVBQUVSLElBQVo7QUFBa0JTLGVBQVMsRUFBRUwsSUFBN0I7QUFBbUNDLFVBQUksRUFBSkE7QUFBbkMsS0FBRCxDQUFYO0FBQ0FKLFdBQU8sQ0FBQ0ssS0FBRCxDQUFQO0FBQ0QsR0FMYSxFQU1kLENBQUNOLElBQUQsQ0FOYyxDQUFoQjtBQVNBLE1BQU1VLFVBQVUsR0FBR2hCLDRDQUFLLENBQUNTLFdBQU4sQ0FDakIsVUFBQ0UsSUFBRCxFQUFrQjtBQUNoQixRQUFNQyxLQUFLLHFCQUFRTixJQUFSLENBQVg7O0FBQ0FXLHVFQUFjLENBQUM7QUFBRUgsY0FBUSxFQUFFUixJQUFaO0FBQWtCSyxVQUFJLEVBQUpBO0FBQWxCLEtBQUQsQ0FBZDtBQUNBSixXQUFPLENBQUNLLEtBQUQsQ0FBUDtBQUNELEdBTGdCLEVBTWpCLENBQUNOLElBQUQsQ0FOaUIsQ0FBbkI7QUFTQSxNQUFNWSxVQUFVLEdBQUdsQiw0Q0FBSyxDQUFDUyxXQUFOLENBQ2pCLFVBQUNFLElBQUQsRUFBZVEsT0FBZixFQUFtQztBQUNqQyxRQUFNUCxLQUFLLHFCQUFRTixJQUFSLENBQVg7O0FBQ0FjLHVFQUFjLENBQUM7QUFBRU4sY0FBUSxFQUFFUixJQUFaO0FBQWtCSyxVQUFJLEVBQUpBLElBQWxCO0FBQXdCVSxrQkFBWSxFQUFFRjtBQUF0QyxLQUFELENBQWQ7QUFDQVosV0FBTyxDQUFDSyxLQUFELENBQVA7QUFDRCxHQUxnQixFQU1qQixDQUFDTixJQUFELENBTmlCLENBQW5CO0FBU0EsU0FDRSxNQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFQSxVQUFJLEVBQUpBLElBQUY7QUFBUUUsYUFBTyxFQUFQQSxPQUFSO0FBQWlCUSxnQkFBVSxFQUFWQSxVQUFqQjtBQUE2QkUsZ0JBQVUsRUFBVkE7QUFBN0IsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixRQURILENBREY7QUFLRCxDQW5DTTs7R0FBTUQscUI7O0tBQUFBLHFCO0FBcUNOLElBQU1vQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUE7O0FBQUEsU0FDOUJ0Qiw0Q0FBSyxDQUFDdUIsVUFBTixDQUFpQnhCLGFBQWpCLENBRDhCO0FBQUEsQ0FBekI7O0lBQU11QixnQiIsImZpbGUiOiIuL3NyYy9zdG9yZS9ub2RlU3RydWN0dXJlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE5vZGUgZnJvbSAnaW50ZXJmYWNlcy9Ob2RlJ1xuXG5pbXBvcnQgaW5pdGlhbERhdGFSb290Rm9sZGVyIGZyb20gJ21vY2svcm9vdEZvbGRlcidcblxuaW1wb3J0IGFkZE5vZGVVdGlsIGZyb20gJ3NlcnZpY2VzL2FkZE5vZGUnXG5pbXBvcnQgcmVtb3ZlTm9kZVV0aWwgZnJvbSAnc2VydmljZXMvcmVtb3ZlTm9kZSdcbmltcG9ydCByZW5hbWVOb2RlVXRpbCBmcm9tICdzZXJ2aWNlcy9yZW5hbWVOb2RlJ1xuXG5pbnRlcmZhY2UgTm9kZVN0cnVjdHVyZVByb3BzIHtcbiAgcm9vdDogTm9kZVxuICBhZGROb2RlOiAobm9kZTogTm9kZSwgcGF0aDogc3RyaW5nKSA9PiB2b2lkXG4gIHJlbW92ZU5vZGU6IChwYXRoOiBzdHJpbmcpID0+IHZvaWRcbiAgcmVuYW1lTm9kZTogKHBhdGg6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBOb2RlU3RydWN0dXJlID0gUmVhY3QuY3JlYXRlQ29udGV4dDxOb2RlU3RydWN0dXJlUHJvcHM+KFxuICB7fSBhcyBOb2RlU3RydWN0dXJlUHJvcHNcbilcblxuZXhwb3J0IGNvbnN0IE5vZGVTdHJ1Y3R1cmVQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtyb290LCBzZXRSb290XSA9IFJlYWN0LnVzZVN0YXRlPE5vZGU+KGluaXRpYWxEYXRhUm9vdEZvbGRlcilcblxuICBjb25zdCBhZGROb2RlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKG5vZGU6IE5vZGUsIHBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZHJhZnQgPSB7IC4uLnJvb3QgfVxuICAgICAgYWRkTm9kZVV0aWwoeyBub2RlVHJlZTogcm9vdCwgbm9kZVRvQWRkOiBub2RlLCBwYXRoIH0pXG4gICAgICBzZXRSb290KGRyYWZ0KVxuICAgIH0sXG4gICAgW3Jvb3RdXG4gIClcblxuICBjb25zdCByZW1vdmVOb2RlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZHJhZnQgPSB7IC4uLnJvb3QgfVxuICAgICAgcmVtb3ZlTm9kZVV0aWwoeyBub2RlVHJlZTogcm9vdCwgcGF0aCB9KVxuICAgICAgc2V0Um9vdChkcmFmdClcbiAgICB9LFxuICAgIFtyb290XVxuICApXG5cbiAgY29uc3QgcmVuYW1lTm9kZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChwYXRoOiBzdHJpbmcsIG5ld05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZHJhZnQgPSB7IC4uLnJvb3QgfVxuICAgICAgcmVuYW1lTm9kZVV0aWwoeyBub2RlVHJlZTogcm9vdCwgcGF0aCwgbmFtZVRvVXBkYXRlOiBuZXdOYW1lIH0pXG4gICAgICBzZXRSb290KGRyYWZ0KVxuICAgIH0sXG4gICAgW3Jvb3RdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxOb2RlU3RydWN0dXJlLlByb3ZpZGVyIHZhbHVlPXt7IHJvb3QsIGFkZE5vZGUsIHJlbW92ZU5vZGUsIHJlbmFtZU5vZGUgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Ob2RlU3RydWN0dXJlLlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VOb2RlU3RydWN0dXJlID0gKCk6IE5vZGVTdHJ1Y3R1cmVQcm9wcyA9PlxuICBSZWFjdC51c2VDb250ZXh0KE5vZGVTdHJ1Y3R1cmUpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/nodeStructure.tsx\n");

/***/ }),

/***/ "./src/utils/addNode/index.ts":
false,

/***/ "./src/utils/removeNode/index.ts":
false,

/***/ "./src/utils/renameNode/index.ts":
false

})