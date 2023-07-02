"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_data_hassio_backup_ts"],{

/***/ "./src/data/hassio/backup.ts":
/*!***********************************!*\
  !*** ./src/data/hassio/backup.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHassioFullBackup: function() { return /* binding */ createHassioFullBackup; },\n/* harmony export */   createHassioPartialBackup: function() { return /* binding */ createHassioPartialBackup; },\n/* harmony export */   fetchHassioBackupInfo: function() { return /* binding */ fetchHassioBackupInfo; },\n/* harmony export */   fetchHassioBackups: function() { return /* binding */ fetchHassioBackups; },\n/* harmony export */   friendlyFolderName: function() { return /* binding */ friendlyFolderName; },\n/* harmony export */   reloadHassioBackups: function() { return /* binding */ reloadHassioBackups; },\n/* harmony export */   removeBackup: function() { return /* binding */ removeBackup; },\n/* harmony export */   uploadBackup: function() { return /* binding */ uploadBackup; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _common_config_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/config/version */ \"./src/common/config/version.ts\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ \"./src/data/hassio/common.ts\");\n\n\n\n\nvar friendlyFolderName = {\n  ssl: \"SSL\",\n  homeassistant: \"Configuration\",\n  \"addons/local\": \"Local add-ons\",\n  media: \"Media\",\n  share: \"Share\"\n};\nvar fetchHassioBackups = /*#__PURE__*/function () {\n  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee(hass) {\n    var data;\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          if (!(0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 2, 4)) {\n            _context.next = 5;\n            break;\n          }\n          _context.next = 3;\n          return hass.callWS({\n            type: \"supervisor/api\",\n            endpoint: \"/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\"),\n            method: \"get\"\n          });\n        case 3:\n          data = _context.sent;\n          return _context.abrupt(\"return\", data[(0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\"]);\n        case 5:\n          _context.t0 = _common__WEBPACK_IMPORTED_MODULE_3__.hassioApiResultExtractor;\n          _context.next = 8;\n          return hass.callApi(\"GET\", \"hassio/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\"));\n        case 8:\n          _context.t1 = _context.sent;\n          return _context.abrupt(\"return\", (0, _context.t0)(_context.t1).snapshots);\n        case 10:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function fetchHassioBackups(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar fetchHassioBackupInfo = /*#__PURE__*/function () {\n  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee2(hass, backup) {\n    var resp, data;\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          if (!hass) {\n            _context2.next = 8;\n            break;\n          }\n          if (!(0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 2, 4)) {\n            _context2.next = 3;\n            break;\n          }\n          return _context2.abrupt(\"return\", hass.callWS({\n            type: \"supervisor/api\",\n            endpoint: \"/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/\").concat(backup, \"/info\"),\n            method: \"get\"\n          }));\n        case 3:\n          _context2.t0 = _common__WEBPACK_IMPORTED_MODULE_3__.hassioApiResultExtractor;\n          _context2.next = 6;\n          return hass.callApi(\"GET\", \"hassio/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/\").concat(backup, \"/info\"));\n        case 6:\n          _context2.t1 = _context2.sent;\n          return _context2.abrupt(\"return\", (0, _context2.t0)(_context2.t1));\n        case 8:\n          _context2.next = 10;\n          return fetch(\"/api/hassio/backups/\".concat(backup, \"/info\"), {\n            method: \"GET\"\n          });\n        case 10:\n          resp = _context2.sent;\n          _context2.next = 13;\n          return resp.json();\n        case 13:\n          data = _context2.sent.data;\n          return _context2.abrupt(\"return\", data);\n        case 15:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return function fetchHassioBackupInfo(_x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar reloadHassioBackups = /*#__PURE__*/function () {\n  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee3(hass) {\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          if (!(0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 2, 4)) {\n            _context3.next = 4;\n            break;\n          }\n          _context3.next = 3;\n          return hass.callWS({\n            type: \"supervisor/api\",\n            endpoint: \"/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/reload\"),\n            method: \"post\"\n          });\n        case 3:\n          return _context3.abrupt(\"return\");\n        case 4:\n          _context3.next = 6;\n          return hass.callApi(\"POST\", \"hassio/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/reload\"));\n        case 6:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3);\n  }));\n  return function reloadHassioBackups(_x4) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar createHassioFullBackup = /*#__PURE__*/function () {\n  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee4(hass, data) {\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee4$(_context4) {\n      while (1) switch (_context4.prev = _context4.next) {\n        case 0:\n          if (!(0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 2, 4)) {\n            _context4.next = 4;\n            break;\n          }\n          _context4.next = 3;\n          return hass.callWS({\n            type: \"supervisor/api\",\n            endpoint: \"/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/new/full\"),\n            method: \"post\",\n            timeout: null,\n            data: data\n          });\n        case 3:\n          return _context4.abrupt(\"return\");\n        case 4:\n          _context4.next = 6;\n          return hass.callApi(\"POST\", \"hassio/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/new/full\"), data);\n        case 6:\n        case \"end\":\n          return _context4.stop();\n      }\n    }, _callee4);\n  }));\n  return function createHassioFullBackup(_x5, _x6) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar removeBackup = /*#__PURE__*/function () {\n  var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee5(hass, slug) {\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee5$(_context5) {\n      while (1) switch (_context5.prev = _context5.next) {\n        case 0:\n          if (!(0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 2, 4)) {\n            _context5.next = 4;\n            break;\n          }\n          _context5.next = 3;\n          return hass.callWS({\n            type: \"supervisor/api\",\n            endpoint: \"/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups/\".concat(slug) : \"snapshots/\".concat(slug, \"/remove\")),\n            method: (0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"delete\" : \"post\"\n          });\n        case 3:\n          return _context5.abrupt(\"return\");\n        case 4:\n          _context5.next = 6;\n          return hass.callApi(\"POST\", \"hassio/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/\").concat(slug, \"/remove\"));\n        case 6:\n        case \"end\":\n          return _context5.stop();\n      }\n    }, _callee5);\n  }));\n  return function removeBackup(_x7, _x8) {\n    return _ref5.apply(this, arguments);\n  };\n}();\nvar createHassioPartialBackup = /*#__PURE__*/function () {\n  var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee6(hass, data) {\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee6$(_context6) {\n      while (1) switch (_context6.prev = _context6.next) {\n        case 0:\n          if (!(0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 2, 4)) {\n            _context6.next = 4;\n            break;\n          }\n          _context6.next = 3;\n          return hass.callWS({\n            type: \"supervisor/api\",\n            endpoint: \"/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/new/partial\"),\n            method: \"post\",\n            timeout: null,\n            data: data\n          });\n        case 3:\n          return _context6.abrupt(\"return\");\n        case 4:\n          _context6.next = 6;\n          return hass.callApi(\"POST\", \"hassio/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/new/partial\"), data);\n        case 6:\n        case \"end\":\n          return _context6.stop();\n      }\n    }, _callee6);\n  }));\n  return function createHassioPartialBackup(_x9, _x10) {\n    return _ref6.apply(this, arguments);\n  };\n}();\nvar uploadBackup = /*#__PURE__*/function () {\n  var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee7(hass, file) {\n    var fd, resp;\n    return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee7$(_context7) {\n      while (1) switch (_context7.prev = _context7.next) {\n        case 0:\n          fd = new FormData();\n          fd.append(\"file\", file);\n          if (!hass) {\n            _context7.next = 8;\n            break;\n          }\n          _context7.next = 5;\n          return hass.fetchWithAuth(\"/api/hassio/\".concat((0,_common_config_version__WEBPACK_IMPORTED_MODULE_2__.atLeastVersion)(hass.config.version, 2021, 9) ? \"backups\" : \"snapshots\", \"/new/upload\"), {\n            method: \"POST\",\n            body: fd\n          });\n        case 5:\n          resp = _context7.sent;\n          _context7.next = 11;\n          break;\n        case 8:\n          _context7.next = 10;\n          return fetch(\"/api/hassio/backups/new/upload\", {\n            method: \"POST\",\n            body: fd\n          });\n        case 10:\n          resp = _context7.sent;\n        case 11:\n          if (!(resp.status === 413)) {\n            _context7.next = 15;\n            break;\n          }\n          throw new Error(\"Uploaded backup is too large\");\n        case 15:\n          if (!(resp.status !== 200)) {\n            _context7.next = 17;\n            break;\n          }\n          throw new Error(\"\".concat(resp.status, \" \").concat(resp.statusText));\n        case 17:\n          return _context7.abrupt(\"return\", resp.json());\n        case 18:\n        case \"end\":\n          return _context7.stop();\n      }\n    }, _callee7);\n  }));\n  return function uploadBackup(_x11, _x12) {\n    return _ref7.apply(this, arguments);\n  };\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9oYXNzaW8vYmFja3VwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMkNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFSQTtBQUVBO0FBU0E7QUFBQTtBQUdBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUE0QkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQStCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBb0JBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF2QkE7QUFBQTtBQUFBO0FBeUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW5CQTtBQUFBO0FBQUE7QUFxQkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXhCQTtBQUFBO0FBQUE7QUEwQkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQS9CQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9kYXRhL2hhc3Npby9iYWNrdXAudHM/NTVhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdExlYXN0VmVyc2lvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL3ZlcnNpb25cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGhhc3Npb0FwaVJlc3VsdEV4dHJhY3RvciwgSGFzc2lvUmVzcG9uc2UgfSBmcm9tIFwiLi9jb21tb25cIjtcblxuZXhwb3J0IGNvbnN0IGZyaWVuZGx5Rm9sZGVyTmFtZSA9IHtcbiAgc3NsOiBcIlNTTFwiLFxuICBob21lYXNzaXN0YW50OiBcIkNvbmZpZ3VyYXRpb25cIixcbiAgXCJhZGRvbnMvbG9jYWxcIjogXCJMb2NhbCBhZGQtb25zXCIsXG4gIG1lZGlhOiBcIk1lZGlhXCIsXG4gIHNoYXJlOiBcIlNoYXJlXCIsXG59O1xuXG5pbnRlcmZhY2UgQmFja3VwQ29udGVudCB7XG4gIGhvbWVhc3Npc3RhbnQ6IGJvb2xlYW47XG4gIGZvbGRlcnM6IHN0cmluZ1tdO1xuICBhZGRvbnM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhc3Npb0JhY2t1cCB7XG4gIHNsdWc6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgdHlwZTogXCJmdWxsXCIgfCBcInBhcnRpYWxcIjtcbiAgcHJvdGVjdGVkOiBib29sZWFuO1xuICBjb250ZW50OiBCYWNrdXBDb250ZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhc3Npb0JhY2t1cERldGFpbCBleHRlbmRzIEhhc3Npb0JhY2t1cCB7XG4gIHNpemU6IG51bWJlcjtcbiAgaG9tZWFzc2lzdGFudDogc3RyaW5nO1xuICBhZGRvbnM6IEFycmF5PHtcbiAgICBzbHVnOiBcIkFERE9OX1NMVUdcIjtcbiAgICBuYW1lOiBcIk5BTUVcIjtcbiAgICB2ZXJzaW9uOiBcIklOU1RBTExFRF9WRVJTSU9OXCI7XG4gICAgc2l6ZTogXCJTSVpFX0lOX01CXCI7XG4gIH0+O1xuICByZXBvc2l0b3JpZXM6IHN0cmluZ1tdO1xuICBmb2xkZXJzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIYXNzaW9GdWxsQmFja3VwQ3JlYXRlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgY29uZmlybV9wYXNzd29yZD86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSGFzc2lvUGFydGlhbEJhY2t1cENyZWF0ZVBhcmFtc1xuICBleHRlbmRzIEhhc3Npb0Z1bGxCYWNrdXBDcmVhdGVQYXJhbXMge1xuICBmb2xkZXJzPzogc3RyaW5nW107XG4gIGFkZG9ucz86IHN0cmluZ1tdO1xuICBob21lYXNzaXN0YW50PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoSGFzc2lvQmFja3VwcyA9IGFzeW5jIChcbiAgaGFzczogSG9tZUFzc2lzdGFudFxuKTogUHJvbWlzZTxIYXNzaW9CYWNrdXBbXT4gPT4ge1xuICBpZiAoYXRMZWFzdFZlcnNpb24oaGFzcy5jb25maWcudmVyc2lvbiwgMjAyMSwgMiwgNCkpIHtcbiAgICBjb25zdCBkYXRhOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBIYXNzaW9CYWNrdXBbXTtcbiAgICB9ID0gYXdhaXQgaGFzcy5jYWxsV1Moe1xuICAgICAgdHlwZTogXCJzdXBlcnZpc29yL2FwaVwiLFxuICAgICAgZW5kcG9pbnQ6IGAvJHtcbiAgICAgICAgYXRMZWFzdFZlcnNpb24oaGFzcy5jb25maWcudmVyc2lvbiwgMjAyMSwgOSkgPyBcImJhY2t1cHNcIiA6IFwic25hcHNob3RzXCJcbiAgICAgIH1gLFxuICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhW1xuICAgICAgYXRMZWFzdFZlcnNpb24oaGFzcy5jb25maWcudmVyc2lvbiwgMjAyMSwgOSkgPyBcImJhY2t1cHNcIiA6IFwic25hcHNob3RzXCJcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIGhhc3Npb0FwaVJlc3VsdEV4dHJhY3RvcihcbiAgICBhd2FpdCBoYXNzLmNhbGxBcGk8SGFzc2lvUmVzcG9uc2U8eyBzbmFwc2hvdHM6IEhhc3Npb0JhY2t1cFtdIH0+PihcbiAgICAgIFwiR0VUXCIsXG4gICAgICBgaGFzc2lvLyR7XG4gICAgICAgIGF0TGVhc3RWZXJzaW9uKGhhc3MuY29uZmlnLnZlcnNpb24sIDIwMjEsIDkpID8gXCJiYWNrdXBzXCIgOiBcInNuYXBzaG90c1wiXG4gICAgICB9YFxuICAgIClcbiAgKS5zbmFwc2hvdHM7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hIYXNzaW9CYWNrdXBJbmZvID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkLFxuICBiYWNrdXA6IHN0cmluZ1xuKTogUHJvbWlzZTxIYXNzaW9CYWNrdXBEZXRhaWw+ID0+IHtcbiAgaWYgKGhhc3MpIHtcbiAgICBpZiAoYXRMZWFzdFZlcnNpb24oaGFzcy5jb25maWcudmVyc2lvbiwgMjAyMSwgMiwgNCkpIHtcbiAgICAgIHJldHVybiBoYXNzLmNhbGxXUyh7XG4gICAgICAgIHR5cGU6IFwic3VwZXJ2aXNvci9hcGlcIixcbiAgICAgICAgZW5kcG9pbnQ6IGAvJHtcbiAgICAgICAgICBhdExlYXN0VmVyc2lvbihoYXNzLmNvbmZpZy52ZXJzaW9uLCAyMDIxLCA5KSA/IFwiYmFja3Vwc1wiIDogXCJzbmFwc2hvdHNcIlxuICAgICAgICB9LyR7YmFja3VwfS9pbmZvYCxcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNzaW9BcGlSZXN1bHRFeHRyYWN0b3IoXG4gICAgICBhd2FpdCBoYXNzLmNhbGxBcGk8SGFzc2lvUmVzcG9uc2U8SGFzc2lvQmFja3VwRGV0YWlsPj4oXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGBoYXNzaW8vJHtcbiAgICAgICAgICBhdExlYXN0VmVyc2lvbihoYXNzLmNvbmZpZy52ZXJzaW9uLCAyMDIxLCA5KSA/IFwiYmFja3Vwc1wiIDogXCJzbmFwc2hvdHNcIlxuICAgICAgICB9LyR7YmFja3VwfS9pbmZvYFxuICAgICAgKVxuICAgICk7XG4gIH1cbiAgLy8gV2hlbiBjYWxsZWQgZnJvbSBvbmJvYXJkaW5nIHdlIGRvbid0IGhhdmUgaGFzc1xuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYC9hcGkvaGFzc2lvL2JhY2t1cHMvJHtiYWNrdXB9L2luZm9gLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICB9KTtcbiAgY29uc3QgZGF0YSA9IChhd2FpdCByZXNwLmpzb24oKSkuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgcmVsb2FkSGFzc2lvQmFja3VwcyA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50KSA9PiB7XG4gIGlmIChhdExlYXN0VmVyc2lvbihoYXNzLmNvbmZpZy52ZXJzaW9uLCAyMDIxLCAyLCA0KSkge1xuICAgIGF3YWl0IGhhc3MuY2FsbFdTKHtcbiAgICAgIHR5cGU6IFwic3VwZXJ2aXNvci9hcGlcIixcbiAgICAgIGVuZHBvaW50OiBgLyR7XG4gICAgICAgIGF0TGVhc3RWZXJzaW9uKGhhc3MuY29uZmlnLnZlcnNpb24sIDIwMjEsIDkpID8gXCJiYWNrdXBzXCIgOiBcInNuYXBzaG90c1wiXG4gICAgICB9L3JlbG9hZGAsXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGF3YWl0IGhhc3MuY2FsbEFwaTxIYXNzaW9SZXNwb25zZTx2b2lkPj4oXG4gICAgXCJQT1NUXCIsXG4gICAgYGhhc3Npby8ke1xuICAgICAgYXRMZWFzdFZlcnNpb24oaGFzcy5jb25maWcudmVyc2lvbiwgMjAyMSwgOSkgPyBcImJhY2t1cHNcIiA6IFwic25hcHNob3RzXCJcbiAgICB9L3JlbG9hZGBcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIYXNzaW9GdWxsQmFja3VwID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBkYXRhOiBIYXNzaW9GdWxsQmFja3VwQ3JlYXRlUGFyYW1zXG4pID0+IHtcbiAgaWYgKGF0TGVhc3RWZXJzaW9uKGhhc3MuY29uZmlnLnZlcnNpb24sIDIwMjEsIDIsIDQpKSB7XG4gICAgYXdhaXQgaGFzcy5jYWxsV1Moe1xuICAgICAgdHlwZTogXCJzdXBlcnZpc29yL2FwaVwiLFxuICAgICAgZW5kcG9pbnQ6IGAvJHtcbiAgICAgICAgYXRMZWFzdFZlcnNpb24oaGFzcy5jb25maWcudmVyc2lvbiwgMjAyMSwgOSkgPyBcImJhY2t1cHNcIiA6IFwic25hcHNob3RzXCJcbiAgICAgIH0vbmV3L2Z1bGxgLFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBhd2FpdCBoYXNzLmNhbGxBcGk8SGFzc2lvUmVzcG9uc2U8dm9pZD4+KFxuICAgIFwiUE9TVFwiLFxuICAgIGBoYXNzaW8vJHtcbiAgICAgIGF0TGVhc3RWZXJzaW9uKGhhc3MuY29uZmlnLnZlcnNpb24sIDIwMjEsIDkpID8gXCJiYWNrdXBzXCIgOiBcInNuYXBzaG90c1wiXG4gICAgfS9uZXcvZnVsbGAsXG4gICAgZGF0YVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUJhY2t1cCA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50LCBzbHVnOiBzdHJpbmcpID0+IHtcbiAgaWYgKGF0TGVhc3RWZXJzaW9uKGhhc3MuY29uZmlnLnZlcnNpb24sIDIwMjEsIDIsIDQpKSB7XG4gICAgYXdhaXQgaGFzcy5jYWxsV1Moe1xuICAgICAgdHlwZTogXCJzdXBlcnZpc29yL2FwaVwiLFxuICAgICAgZW5kcG9pbnQ6IGAvJHtcbiAgICAgICAgYXRMZWFzdFZlcnNpb24oaGFzcy5jb25maWcudmVyc2lvbiwgMjAyMSwgOSlcbiAgICAgICAgICA/IGBiYWNrdXBzLyR7c2x1Z31gXG4gICAgICAgICAgOiBgc25hcHNob3RzLyR7c2x1Z30vcmVtb3ZlYFxuICAgICAgfWAsXG4gICAgICBtZXRob2Q6IGF0TGVhc3RWZXJzaW9uKGhhc3MuY29uZmlnLnZlcnNpb24sIDIwMjEsIDkpID8gXCJkZWxldGVcIiA6IFwicG9zdFwiLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBhd2FpdCBoYXNzLmNhbGxBcGk8SGFzc2lvUmVzcG9uc2U8dm9pZD4+KFxuICAgIFwiUE9TVFwiLFxuICAgIGBoYXNzaW8vJHtcbiAgICAgIGF0TGVhc3RWZXJzaW9uKGhhc3MuY29uZmlnLnZlcnNpb24sIDIwMjEsIDkpID8gXCJiYWNrdXBzXCIgOiBcInNuYXBzaG90c1wiXG4gICAgfS8ke3NsdWd9L3JlbW92ZWBcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIYXNzaW9QYXJ0aWFsQmFja3VwID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBkYXRhOiBIYXNzaW9QYXJ0aWFsQmFja3VwQ3JlYXRlUGFyYW1zXG4pID0+IHtcbiAgaWYgKGF0TGVhc3RWZXJzaW9uKGhhc3MuY29uZmlnLnZlcnNpb24sIDIwMjEsIDIsIDQpKSB7XG4gICAgYXdhaXQgaGFzcy5jYWxsV1Moe1xuICAgICAgdHlwZTogXCJzdXBlcnZpc29yL2FwaVwiLFxuICAgICAgZW5kcG9pbnQ6IGAvJHtcbiAgICAgICAgYXRMZWFzdFZlcnNpb24oaGFzcy5jb25maWcudmVyc2lvbiwgMjAyMSwgOSkgPyBcImJhY2t1cHNcIiA6IFwic25hcHNob3RzXCJcbiAgICAgIH0vbmV3L3BhcnRpYWxgLFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGF3YWl0IGhhc3MuY2FsbEFwaTxIYXNzaW9SZXNwb25zZTx2b2lkPj4oXG4gICAgXCJQT1NUXCIsXG4gICAgYGhhc3Npby8ke1xuICAgICAgYXRMZWFzdFZlcnNpb24oaGFzcy5jb25maWcudmVyc2lvbiwgMjAyMSwgOSkgPyBcImJhY2t1cHNcIiA6IFwic25hcHNob3RzXCJcbiAgICB9L25ldy9wYXJ0aWFsYCxcbiAgICBkYXRhXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBsb2FkQmFja3VwID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50IHwgdW5kZWZpbmVkLFxuICBmaWxlOiBGaWxlXG4pOiBQcm9taXNlPEhhc3Npb1Jlc3BvbnNlPEhhc3Npb0JhY2t1cD4+ID0+IHtcbiAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgbGV0IHJlc3A7XG4gIGZkLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gIGlmIChoYXNzKSB7XG4gICAgcmVzcCA9IGF3YWl0IGhhc3MuZmV0Y2hXaXRoQXV0aChcbiAgICAgIGAvYXBpL2hhc3Npby8ke1xuICAgICAgICBhdExlYXN0VmVyc2lvbihoYXNzLmNvbmZpZy52ZXJzaW9uLCAyMDIxLCA5KSA/IFwiYmFja3Vwc1wiIDogXCJzbmFwc2hvdHNcIlxuICAgICAgfS9uZXcvdXBsb2FkYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogZmQsXG4gICAgICB9XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBXaGVuIGNhbGxlZCBmcm9tIG9uYm9hcmRpbmcgd2UgZG9uJ3QgaGF2ZSBoYXNzXG4gICAgcmVzcCA9IGF3YWl0IGZldGNoKFwiL2FwaS9oYXNzaW8vYmFja3Vwcy9uZXcvdXBsb2FkXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBmZCxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNwLnN0YXR1cyA9PT0gNDEzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVXBsb2FkZWQgYmFja3VwIGlzIHRvbyBsYXJnZVwiKTtcbiAgfSBlbHNlIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3Auc3RhdHVzfSAke3Jlc3Auc3RhdHVzVGV4dH1gKTtcbiAgfVxuICByZXR1cm4gcmVzcC5qc29uKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/hassio/backup.ts\n");

/***/ })

}]);