"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_lovelace_cards_hui-iframe-card_ts"],{

/***/ "./src/common/util/parse-aspect-ratio.ts":
/*!***********************************************!*\
  !*** ./src/common/util/parse-aspect-ratio.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ parseAspectRatio; }\n/* harmony export */ });\n// Handle 16x9, 16:9, 1.78x1, 1.78:1, 1.78\n// Ignore everything else\nvar parseOrThrow = function parseOrThrow(num) {\n  var parsed = parseFloat(num);\n  if (isNaN(parsed)) {\n    throw new Error(\"\".concat(num, \" is not a number\"));\n  }\n  return parsed;\n};\nfunction parseAspectRatio(input) {\n  if (!input) {\n    return null;\n  }\n  try {\n    if (input.endsWith(\"%\")) {\n      return {\n        w: 100,\n        h: parseOrThrow(input.substr(0, input.length - 1))\n      };\n    }\n    var arr = input.replace(\":\", \"x\").split(\"x\");\n    if (arr.length === 0) {\n      return null;\n    }\n    return arr.length === 1 ? {\n      w: parseOrThrow(arr[0]),\n      h: 1\n    } : {\n      w: parseOrThrow(arr[0]),\n      h: parseOrThrow(arr[1])\n    };\n  } catch (err) {\n    // Ignore the error\n  }\n  return null;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3V0aWwvcGFyc2UtYXNwZWN0LXJhdGlvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9jb21tb24vdXRpbC9wYXJzZS1hc3BlY3QtcmF0aW8udHM/MWIyYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIYW5kbGUgMTZ4OSwgMTY6OSwgMS43OHgxLCAxLjc4OjEsIDEuNzhcbi8vIElnbm9yZSBldmVyeXRoaW5nIGVsc2VcbmNvbnN0IHBhcnNlT3JUaHJvdyA9IChudW0pID0+IHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2VGbG9hdChudW0pO1xuICBpZiAoaXNOYU4ocGFyc2VkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtudW19IGlzIG5vdCBhIG51bWJlcmApO1xuICB9XG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUFzcGVjdFJhdGlvKGlucHV0OiBzdHJpbmcpIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKGlucHV0LmVuZHNXaXRoKFwiJVwiKSkge1xuICAgICAgcmV0dXJuIHsgdzogMTAwLCBoOiBwYXJzZU9yVGhyb3coaW5wdXQuc3Vic3RyKDAsIGlucHV0Lmxlbmd0aCAtIDEpKSB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFyciA9IGlucHV0LnJlcGxhY2UoXCI6XCIsIFwieFwiKS5zcGxpdChcInhcIik7XG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIubGVuZ3RoID09PSAxXG4gICAgICA/IHsgdzogcGFyc2VPclRocm93KGFyclswXSksIGg6IDEgfVxuICAgICAgOiB7IHc6IHBhcnNlT3JUaHJvdyhhcnJbMF0pLCBoOiBwYXJzZU9yVGhyb3coYXJyWzFdKSB9O1xuICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgIC8vIElnbm9yZSB0aGUgZXJyb3JcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/util/parse-aspect-ratio.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/cards/hui-iframe-card.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-iframe-card.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HuiIframeCard: function() { return /* binding */ HuiIframeCard; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var lit_directives_if_defined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit/directives/if-defined */ \"./node_modules/lit/directives/if-defined.js\");\n/* harmony import */ var lit_directives_style_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit/directives/style-map */ \"./node_modules/lit/directives/style-map.js\");\n/* harmony import */ var _common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/util/parse-aspect-ratio */ \"./src/common/util/parse-aspect-ratio.ts\");\n/* harmony import */ var _components_ha_alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/ha-alert */ \"./src/components/ha-alert.ts\");\n/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ha-card */ \"./src/components/ha-card.ts\");\n\n\n\n\n\n\n\n\n\nvar _templateObject, _templateObject2, _templateObject3;\n\n\n\n\n\n\n\nvar HuiIframeCard = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_10__.customElement)(\"hui-iframe-card\")], function (_initialize, _LitElement) {\n  var HuiIframeCard = /*#__PURE__*/function (_LitElement2) {\n    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(HuiIframeCard, _LitElement2);\n    var _super = (0,_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(HuiIframeCard);\n    function HuiIframeCard() {\n      var _this;\n      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, HuiIframeCard);\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      _this = _super.call.apply(_super, [this].concat(args));\n      _initialize((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this));\n      return _this;\n    }\n    return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HuiIframeCard);\n  }(_LitElement);\n  return {\n    F: HuiIframeCard,\n    d: [{\n      kind: \"method\",\n      static: true,\n      key: \"getConfigElement\",\n      value: function () {\n        var _getConfigElement = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().mark(function _callee() {\n          return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().wrap(function _callee$(_context) {\n            while (1) switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Promise.all(/*! import() */[__webpack_require__.e(\"src_components_ha-selector_ha-selector_ts\"), __webpack_require__.e(\"src_components_ha-form_ha-form_ts\"), __webpack_require__.e(\"src_common_array_ensure-array_ts-src_common_dom_dynamic-element-directive_ts-src_panels_lovel-9e24c3\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../editor/config-elements/hui-iframe-card-editor */ \"./src/panels/lovelace/editor/config-elements/hui-iframe-card-editor.ts\"));\n              case 2:\n                return _context.abrupt(\"return\", document.createElement(\"hui-iframe-card-editor\"));\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }, _callee);\n        }));\n        function getConfigElement() {\n          return _getConfigElement.apply(this, arguments);\n        }\n        return getConfigElement;\n      }()\n    }, {\n      kind: \"method\",\n      static: true,\n      key: \"getStubConfig\",\n      value: function getStubConfig() {\n        return {\n          type: \"iframe\",\n          url: \"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1\",\n          aspect_ratio: \"50%\"\n        };\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_10__.property)({\n        type: Boolean,\n        reflect: true\n      })],\n      key: \"isPanel\",\n      value: function value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_10__.property)()],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_10__.state)()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"getCardSize\",\n      value: function getCardSize() {\n        if (!this._config) {\n          return 5;\n        }\n        var aspectRatio = this._config.aspect_ratio ? Number(this._config.aspect_ratio.replace(\"%\", \"\")) : 50;\n        return 1 + aspectRatio / 25;\n      }\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        if (!config.url) {\n          throw new Error(\"URL required\");\n        }\n        this._config = config;\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this._config || !this.hass) {\n          return lit__WEBPACK_IMPORTED_MODULE_9__.nothing;\n        }\n        var padding = \"\";\n        if (!this.isPanel && this._config.aspect_ratio) {\n          var ratio = (0,_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(this._config.aspect_ratio);\n          if (ratio && ratio.w > 0 && ratio.h > 0) {\n            padding = \"\".concat((100 * ratio.h / ratio.w).toFixed(2), \"%\");\n          }\n        } else if (!this.isPanel) {\n          padding = \"50%\";\n        }\n        var target_protocol = new URL(this._config.url, location.toString()).protocol;\n        if (location.protocol === \"https:\" && target_protocol !== \"https:\") {\n          return (0,lit__WEBPACK_IMPORTED_MODULE_9__.html)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n        <ha-alert alert-type=\\\"error\\\">\\n          \", \"\\n        </ha-alert>\\n      \"])), this.hass.localize(\"ui.panel.lovelace.cards.iframe.error_secure_context\", {\n            target_protocol: target_protocol,\n            context_protocol: location.protocol\n          }));\n        }\n        var sandbox_user_params = \"\";\n        if (this._config.allow_open_top_navigation) {\n          sandbox_user_params += \"allow-top-navigation-by-user-activation\";\n        }\n        return (0,lit__WEBPACK_IMPORTED_MODULE_9__.html)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      <ha-card .header=\", \">\\n        <div\\n          id=\\\"root\\\"\\n          style=\", \"\\n        >\\n          <iframe\\n            title=\", \"\\n            src=\", \"\\n            sandbox=\\\"\", \" allow-forms allow-modals allow-popups allow-pointer-lock allow-same-origin allow-scripts\\\"\\n            allow=\\\"fullscreen\\\"\\n          ></iframe>\\n        </div>\\n      </ha-card>\\n    \"])), this._config.title, (0,lit_directives_style_map__WEBPACK_IMPORTED_MODULE_12__.styleMap)({\n          \"padding-top\": padding\n        }), (0,lit_directives_if_defined__WEBPACK_IMPORTED_MODULE_11__.ifDefined)(this._config.title), this._config.url, sandbox_user_params);\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_9__.css)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      :host([ispanel]) ha-card {\\n        width: 100%;\\n        height: 100%;\\n      }\\n\\n      ha-card {\\n        overflow: hidden;\\n      }\\n\\n      #root {\\n        width: 100%;\\n        position: relative;\\n      }\\n\\n      :host([ispanel]) #root {\\n        height: 100%;\\n      }\\n\\n      iframe {\\n        position: absolute;\\n        border: none;\\n        width: 100%;\\n        height: 100%;\\n        top: 0;\\n        left: 0;\\n      }\\n    \"])));\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_9__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1pZnJhbWUtY2FyZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQTRCQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jYXJkcy9odWktaWZyYW1lLWNhcmQudHM/YTk3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIENTU1Jlc3VsdEdyb3VwLCBodG1sLCBMaXRFbGVtZW50LCBub3RoaW5nIH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHN0YXRlIH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tIFwibGl0L2RpcmVjdGl2ZXMvaWYtZGVmaW5lZFwiO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tIFwibGl0L2RpcmVjdGl2ZXMvc3R5bGUtbWFwXCI7XG5pbXBvcnQgcGFyc2VBc3BlY3RSYXRpbyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvcGFyc2UtYXNwZWN0LXJhdGlvXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWFsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkLCBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IElmcmFtZUNhcmRDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1pZnJhbWUtY2FyZFwiKVxuZXhwb3J0IGNsYXNzIEh1aUlmcmFtZUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgTG92ZWxhY2VDYXJkIHtcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDb25maWdFbGVtZW50KCk6IFByb21pc2U8TG92ZWxhY2VDYXJkRWRpdG9yPiB7XG4gICAgYXdhaXQgaW1wb3J0KFwiLi4vZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktaWZyYW1lLWNhcmQtZWRpdG9yXCIpO1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHVpLWlmcmFtZS1jYXJkLWVkaXRvclwiKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3R1YkNvbmZpZygpOiBJZnJhbWVDYXJkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJpZnJhbWVcIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pb1wiLFxuICAgICAgYXNwZWN0X3JhdGlvOiBcIjUwJVwiLFxuICAgIH07XG4gIH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pXG4gIHB1YmxpYyBpc1BhbmVsID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBzdGF0ZSgpIHByb3RlY3RlZCBfY29uZmlnPzogSWZyYW1lQ2FyZENvbmZpZztcblxuICBwdWJsaWMgZ2V0Q2FyZFNpemUoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIDU7XG4gICAgfVxuICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gdGhpcy5fY29uZmlnLmFzcGVjdF9yYXRpb1xuICAgICAgPyBOdW1iZXIodGhpcy5fY29uZmlnLmFzcGVjdF9yYXRpby5yZXBsYWNlKFwiJVwiLCBcIlwiKSlcbiAgICAgIDogNTA7XG4gICAgcmV0dXJuIDEgKyBhc3BlY3RSYXRpbyAvIDI1O1xuICB9XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IElmcmFtZUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpZy51cmwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVSTCByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBub3RoaW5nO1xuICAgIH1cblxuICAgIGxldCBwYWRkaW5nID0gXCJcIjtcbiAgICBpZiAoIXRoaXMuaXNQYW5lbCAmJiB0aGlzLl9jb25maWcuYXNwZWN0X3JhdGlvKSB7XG4gICAgICBjb25zdCByYXRpbyA9IHBhcnNlQXNwZWN0UmF0aW8odGhpcy5fY29uZmlnLmFzcGVjdF9yYXRpbyk7XG4gICAgICBpZiAocmF0aW8gJiYgcmF0aW8udyA+IDAgJiYgcmF0aW8uaCA+IDApIHtcbiAgICAgICAgcGFkZGluZyA9IGAkeygoMTAwICogcmF0aW8uaCkgLyByYXRpby53KS50b0ZpeGVkKDIpfSVgO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNQYW5lbCkge1xuICAgICAgcGFkZGluZyA9IFwiNTAlXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0X3Byb3RvY29sID0gbmV3IFVSTCh0aGlzLl9jb25maWcudXJsLCBsb2NhdGlvbi50b1N0cmluZygpKVxuICAgICAgLnByb3RvY29sO1xuICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiAmJiB0YXJnZXRfcHJvdG9jb2wgIT09IFwiaHR0cHM6XCIpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGEtYWxlcnQgYWxlcnQtdHlwZT1cImVycm9yXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5jYXJkcy5pZnJhbWUuZXJyb3Jfc2VjdXJlX2NvbnRleHRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGFyZ2V0X3Byb3RvY29sLFxuICAgICAgICAgICAgICBjb250ZXh0X3Byb3RvY29sOiBsb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICA8L2hhLWFsZXJ0PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBsZXQgc2FuZGJveF91c2VyX3BhcmFtcyA9IFwiXCI7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbGxvd19vcGVuX3RvcF9uYXZpZ2F0aW9uKSB7XG4gICAgICBzYW5kYm94X3VzZXJfcGFyYW1zICs9IFwiYWxsb3ctdG9wLW5hdmlnYXRpb24tYnktdXNlci1hY3RpdmF0aW9uXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZCAuaGVhZGVyPSR7dGhpcy5fY29uZmlnLnRpdGxlfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwicm9vdFwiXG4gICAgICAgICAgc3R5bGU9JHtzdHlsZU1hcCh7XG4gICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IHBhZGRpbmcsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICB0aXRsZT0ke2lmRGVmaW5lZCh0aGlzLl9jb25maWcudGl0bGUpfVxuICAgICAgICAgICAgc3JjPSR7dGhpcy5fY29uZmlnLnVybH1cbiAgICAgICAgICAgIHNhbmRib3g9XCIke3NhbmRib3hfdXNlcl9wYXJhbXN9IGFsbG93LWZvcm1zIGFsbG93LW1vZGFscyBhbGxvdy1wb3B1cHMgYWxsb3ctcG9pbnRlci1sb2NrIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHNcIlxuICAgICAgICAgICAgYWxsb3c9XCJmdWxsc2NyZWVuXCJcbiAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRHcm91cCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0KFtpc3BhbmVsXSkgaGEtY2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAjcm9vdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpc3BhbmVsXSkgI3Jvb3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIGlmcmFtZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWlmcmFtZS1jYXJkXCI6IEh1aUlmcmFtZUNhcmQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/panels/lovelace/cards/hui-iframe-card.ts\n");

/***/ })

}]);