"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_profile_ha-long-lived-access-token-dialog_ts"],{

/***/ "./src/components/ha-dialog.ts":
/*!*************************************!*\
  !*** ./src/components/ha-dialog.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HaDialog: function() { return /* binding */ HaDialog; },\n/* harmony export */   createCloseHeading: function() { return /* binding */ createCloseHeading; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _material_mwc_dialog_mwc_dialog_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/mwc-dialog/mwc-dialog-base */ \"./node_modules/@material/mwc-dialog/mwc-dialog-base.js\");\n/* harmony import */ var _material_mwc_dialog_mwc_dialog_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material/mwc-dialog/mwc-dialog.css */ \"./node_modules/@material/mwc-dialog/mwc-dialog.css.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _dialogs_make_dialog_manager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialogs/make-dialog-manager */ \"./src/dialogs/make-dialog-manager.ts\");\n/* harmony import */ var _ha_icon_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ha-icon-button */ \"./src/components/ha-icon-button.ts\");\n\n\n\n\n\n\n\n\n\nvar _templateObject, _templateObject2, _templateObject3;\n\n\nvar mdiClose = \"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\";\n\n\n\n\nvar SUPPRESS_DEFAULT_PRESS_SELECTOR = [\"button\", \"ha-list-item\"];\nvar createCloseHeading = function createCloseHeading(hass, title) {\n  return (0,lit__WEBPACK_IMPORTED_MODULE_11__.html)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__[\"default\"])([\"\\n  <div class=\\\"header_title\\\">\", \"</div>\\n  <ha-icon-button\\n    .label=\", \"\\n    .path=\", \"\\n    dialogAction=\\\"close\\\"\\n    class=\\\"header_button\\\"\\n  ></ha-icon-button>\\n\"])), title, hass.localize(\"ui.dialogs.generic.close\"), mdiClose);\n};\nvar HaDialog = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_12__.customElement)(\"ha-dialog\")], function (_initialize, _DialogBase) {\n  var HaDialog = /*#__PURE__*/function (_DialogBase2) {\n    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HaDialog, _DialogBase2);\n    var _super = (0,_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(HaDialog);\n    function HaDialog() {\n      var _this;\n      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, HaDialog);\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      _this = _super.call.apply(_super, [this].concat(args));\n      _initialize((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n      return _this;\n    }\n    return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(HaDialog);\n  }(_DialogBase);\n  return {\n    F: HaDialog,\n    d: [{\n      kind: \"field\",\n      key: _dialogs_make_dialog_manager__WEBPACK_IMPORTED_MODULE_13__.FOCUS_TARGET,\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"scrollToPos\",\n      value: function scrollToPos(x, y) {\n        var _this$contentElement;\n        (_this$contentElement = this.contentElement) === null || _this$contentElement === void 0 ? void 0 : _this$contentElement.scrollTo(x, y);\n      }\n    }, {\n      kind: \"method\",\n      key: \"renderHeading\",\n      value: function renderHeading() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_11__.html)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__[\"default\"])([\"<slot name=\\\"heading\\\"> \", \" </slot>\"])), (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(HaDialog.prototype), \"renderHeading\", this).call(this));\n      }\n    }, {\n      kind: \"method\",\n      key: \"firstUpdated\",\n      value: function firstUpdated() {\n        var _this$contentElement2;\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(HaDialog.prototype), \"firstUpdated\", this).call(this);\n        this.suppressDefaultPressSelector = [this.suppressDefaultPressSelector, SUPPRESS_DEFAULT_PRESS_SELECTOR].join(\", \");\n        this._updateScrolledAttribute();\n        (_this$contentElement2 = this.contentElement) === null || _this$contentElement2 === void 0 ? void 0 : _this$contentElement2.addEventListener(\"scroll\", this._onScroll, {\n          passive: true\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"disconnectedCallback\",\n      value: function disconnectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(HaDialog.prototype), \"disconnectedCallback\", this).call(this);\n        this.contentElement.removeEventListener(\"scroll\", this._onScroll);\n      }\n    }, {\n      kind: \"field\",\n      key: \"_onScroll\",\n      value: function value() {\n        var _this2 = this;\n        return function () {\n          _this2._updateScrolledAttribute();\n        };\n      }\n    }, {\n      kind: \"method\",\n      key: \"_updateScrolledAttribute\",\n      value: function _updateScrolledAttribute() {\n        if (!this.contentElement) return;\n        this.toggleAttribute(\"scrolled\", this.contentElement.scrollTop !== 0);\n      }\n    }, {\n      kind: \"field\",\n      static: true,\n      key: \"styles\",\n      value: function value() {\n        return [_material_mwc_dialog_mwc_dialog_css__WEBPACK_IMPORTED_MODULE_10__.styles, (0,lit__WEBPACK_IMPORTED_MODULE_11__.css)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__[\"default\"])([\"\\n      :host([scrolled]) ::slotted(ha-dialog-header) {\\n        border-bottom: 1px solid\\n          var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));\\n      }\\n      .mdc-dialog {\\n        --mdc-dialog-scroll-divider-color: var(\\n          --dialog-scroll-divider-color,\\n          var(--divider-color)\\n        );\\n        z-index: var(--dialog-z-index, 8);\\n        -webkit-backdrop-filter: var(--dialog-backdrop-filter, none);\\n        backdrop-filter: var(--dialog-backdrop-filter, none);\\n        --mdc-dialog-box-shadow: var(--dialog-box-shadow, none);\\n        --mdc-typography-headline6-font-weight: 400;\\n        --mdc-typography-headline6-font-size: 1.574rem;\\n      }\\n      .mdc-dialog__actions {\\n        justify-content: var(--justify-action-buttons, flex-end);\\n        padding-bottom: max(env(safe-area-inset-bottom), 24px);\\n      }\\n      .mdc-dialog__actions span:nth-child(1) {\\n        flex: var(--secondary-action-button-flex, unset);\\n      }\\n      .mdc-dialog__actions span:nth-child(2) {\\n        flex: var(--primary-action-button-flex, unset);\\n      }\\n      .mdc-dialog__container {\\n        align-items: var(--vertical-align-dialog, center);\\n      }\\n      .mdc-dialog__title {\\n        padding: 24px 24px 0 24px;\\n      }\\n      .mdc-dialog__actions {\\n        padding: 12px 24px 12px 24px;\\n      }\\n      .mdc-dialog__title::before {\\n        display: block;\\n        height: 0px;\\n      }\\n      .mdc-dialog .mdc-dialog__content {\\n        position: var(--dialog-content-position, relative);\\n        padding: var(--dialog-content-padding, 24px);\\n      }\\n      :host([hideactions]) .mdc-dialog .mdc-dialog__content {\\n        padding-bottom: max(\\n          var(--dialog-content-padding, 24px),\\n          env(safe-area-inset-bottom)\\n        );\\n      }\\n      .mdc-dialog .mdc-dialog__surface {\\n        position: var(--dialog-surface-position, relative);\\n        top: var(--dialog-surface-top);\\n        margin-top: var(--dialog-surface-margin-top);\\n        min-height: var(--mdc-dialog-min-height, auto);\\n        border-radius: var(--ha-dialog-border-radius, 28px);\\n      }\\n      :host([flexContent]) .mdc-dialog .mdc-dialog__content {\\n        display: flex;\\n        flex-direction: column;\\n      }\\n      .header_title {\\n        margin-right: 32px;\\n        margin-inline-end: 32px;\\n        margin-inline-start: initial;\\n        direction: var(--direction);\\n      }\\n      .header_button {\\n        position: absolute;\\n        right: 16px;\\n        top: 14px;\\n        text-decoration: none;\\n        color: inherit;\\n        inset-inline-start: initial;\\n        inset-inline-end: 16px;\\n        direction: var(--direction);\\n      }\\n      .dialog-actions {\\n        inset-inline-start: initial !important;\\n        inset-inline-end: 0px !important;\\n        direction: var(--direction);\\n      }\\n    \"])))];\n      }\n    }]\n  };\n}, _material_mwc_dialog_mwc_dialog_base__WEBPACK_IMPORTED_MODULE_9__.DialogBase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oYS1kaWFsb2cudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFLQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUZBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9oYS1kaWFsb2cudHM/Yzg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaWFsb2dCYXNlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtZGlhbG9nL213Yy1kaWFsb2ctYmFzZVwiO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtZGlhbG9nL213Yy1kaWFsb2cuY3NzXCI7XG5pbXBvcnQgeyBtZGlDbG9zZSB9IGZyb20gXCJAbWRpL2pzXCI7XG5pbXBvcnQgeyBjc3MsIGh0bWwsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgRk9DVVNfVEFSR0VUIH0gZnJvbSBcIi4uL2RpYWxvZ3MvbWFrZS1kaWFsb2ctbWFuYWdlclwiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuL2hhLWljb24tYnV0dG9uXCI7XG5cbmNvbnN0IFNVUFBSRVNTX0RFRkFVTFRfUFJFU1NfU0VMRUNUT1IgPSBbXCJidXR0b25cIiwgXCJoYS1saXN0LWl0ZW1cIl07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDbG9zZUhlYWRpbmcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlc3VsdFxuKSA9PiBodG1sYFxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyX3RpdGxlXCI+JHt0aXRsZX08L2Rpdj5cbiAgPGhhLWljb24tYnV0dG9uXG4gICAgLmxhYmVsPSR7aGFzcy5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuZ2VuZXJpYy5jbG9zZVwiKX1cbiAgICAucGF0aD0ke21kaUNsb3NlfVxuICAgIGRpYWxvZ0FjdGlvbj1cImNsb3NlXCJcbiAgICBjbGFzcz1cImhlYWRlcl9idXR0b25cIlxuICA+PC9oYS1pY29uLWJ1dHRvbj5cbmA7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGlhbG9nXCIpXG5leHBvcnQgY2xhc3MgSGFEaWFsb2cgZXh0ZW5kcyBEaWFsb2dCYXNlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFtGT0NVU19UQVJHRVRdO1xuXG4gIHB1YmxpYyBzY3JvbGxUb1Bvcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMuY29udGVudEVsZW1lbnQ/LnNjcm9sbFRvKHgsIHkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckhlYWRpbmcoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNsb3QgbmFtZT1cImhlYWRpbmdcIj4gJHtzdXBlci5yZW5kZXJIZWFkaW5nKCl9IDwvc2xvdD5gO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLnN1cHByZXNzRGVmYXVsdFByZXNzU2VsZWN0b3IgPSBbXG4gICAgICB0aGlzLnN1cHByZXNzRGVmYXVsdFByZXNzU2VsZWN0b3IsXG4gICAgICBTVVBQUkVTU19ERUZBVUxUX1BSRVNTX1NFTEVDVE9SLFxuICAgIF0uam9pbihcIiwgXCIpO1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVkQXR0cmlidXRlKCk7XG4gICAgdGhpcy5jb250ZW50RWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLl9vblNjcm9sbCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5jb250ZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX29uU2Nyb2xsKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU2Nyb2xsID0gKCkgPT4ge1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVkQXR0cmlidXRlKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU2Nyb2xsZWRBdHRyaWJ1dGUoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRlbnRFbGVtZW50KSByZXR1cm47XG4gICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoXCJzY3JvbGxlZFwiLCB0aGlzLmNvbnRlbnRFbGVtZW50LnNjcm9sbFRvcCAhPT0gMCk7XG4gIH1cblxuICBzdGF0aWMgb3ZlcnJpZGUgc3R5bGVzID0gW1xuICAgIHN0eWxlcyxcbiAgICBjc3NgXG4gICAgICA6aG9zdChbc2Nyb2xsZWRdKSA6OnNsb3R0ZWQoaGEtZGlhbG9nLWhlYWRlcikge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWRcbiAgICAgICAgICB2YXIoLS1tZGMtZGlhbG9nLXNjcm9sbC1kaXZpZGVyLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuMTIpKTtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGlhbG9nIHtcbiAgICAgICAgLS1tZGMtZGlhbG9nLXNjcm9sbC1kaXZpZGVyLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1kaWFsb2ctc2Nyb2xsLWRpdmlkZXItY29sb3IsXG4gICAgICAgICAgdmFyKC0tZGl2aWRlci1jb2xvcilcbiAgICAgICAgKTtcbiAgICAgICAgei1pbmRleDogdmFyKC0tZGlhbG9nLXotaW5kZXgsIDgpO1xuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogdmFyKC0tZGlhbG9nLWJhY2tkcm9wLWZpbHRlciwgbm9uZSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tZGlhbG9nLWJhY2tkcm9wLWZpbHRlciwgbm9uZSk7XG4gICAgICAgIC0tbWRjLWRpYWxvZy1ib3gtc2hhZG93OiB2YXIoLS1kaWFsb2ctYm94LXNoYWRvdywgbm9uZSk7XG4gICAgICAgIC0tbWRjLXR5cG9ncmFwaHktaGVhZGxpbmU2LWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIC0tbWRjLXR5cG9ncmFwaHktaGVhZGxpbmU2LWZvbnQtc2l6ZTogMS41NzRyZW07XG4gICAgICB9XG4gICAgICAubWRjLWRpYWxvZ19fYWN0aW9ucyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogdmFyKC0tanVzdGlmeS1hY3Rpb24tYnV0dG9ucywgZmxleC1lbmQpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogbWF4KGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSwgMjRweCk7XG4gICAgICB9XG4gICAgICAubWRjLWRpYWxvZ19fYWN0aW9ucyBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGZsZXg6IHZhcigtLXNlY29uZGFyeS1hY3Rpb24tYnV0dG9uLWZsZXgsIHVuc2V0KTtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGlhbG9nX19hY3Rpb25zIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZmxleDogdmFyKC0tcHJpbWFyeS1hY3Rpb24tYnV0dG9uLWZsZXgsIHVuc2V0KTtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGlhbG9nX19jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogdmFyKC0tdmVydGljYWwtYWxpZ24tZGlhbG9nLCBjZW50ZXIpO1xuICAgICAgfVxuICAgICAgLm1kYy1kaWFsb2dfX3RpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMjRweCAyNHB4IDAgMjRweDtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGlhbG9nX19hY3Rpb25zIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4IDEycHggMjRweDtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGlhbG9nX190aXRsZTo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgfVxuICAgICAgLm1kYy1kaWFsb2cgLm1kYy1kaWFsb2dfX2NvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogdmFyKC0tZGlhbG9nLWNvbnRlbnQtcG9zaXRpb24sIHJlbGF0aXZlKTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tZGlhbG9nLWNvbnRlbnQtcGFkZGluZywgMjRweCk7XG4gICAgICB9XG4gICAgICA6aG9zdChbaGlkZWFjdGlvbnNdKSAubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBtYXgoXG4gICAgICAgICAgdmFyKC0tZGlhbG9nLWNvbnRlbnQtcGFkZGluZywgMjRweCksXG4gICAgICAgICAgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fc3VyZmFjZSB7XG4gICAgICAgIHBvc2l0aW9uOiB2YXIoLS1kaWFsb2ctc3VyZmFjZS1wb3NpdGlvbiwgcmVsYXRpdmUpO1xuICAgICAgICB0b3A6IHZhcigtLWRpYWxvZy1zdXJmYWNlLXRvcCk7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWRpYWxvZy1zdXJmYWNlLW1hcmdpbi10b3ApO1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1tZGMtZGlhbG9nLW1pbi1oZWlnaHQsIGF1dG8pO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYS1kaWFsb2ctYm9yZGVyLXJhZGl1cywgMjhweCk7XG4gICAgICB9XG4gICAgICA6aG9zdChbZmxleENvbnRlbnRdKSAubWRjLWRpYWxvZyAubWRjLWRpYWxvZ19fY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgICAuaGVhZGVyX3RpdGxlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogaW5pdGlhbDtcbiAgICAgICAgZGlyZWN0aW9uOiB2YXIoLS1kaXJlY3Rpb24pO1xuICAgICAgfVxuICAgICAgLmhlYWRlcl9idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGluc2V0LWlubGluZS1zdGFydDogaW5pdGlhbDtcbiAgICAgICAgaW5zZXQtaW5saW5lLWVuZDogMTZweDtcbiAgICAgICAgZGlyZWN0aW9uOiB2YXIoLS1kaXJlY3Rpb24pO1xuICAgICAgfVxuICAgICAgLmRpYWxvZy1hY3Rpb25zIHtcbiAgICAgICAgaW5zZXQtaW5saW5lLXN0YXJ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgICAgIGluc2V0LWlubGluZS1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBkaXJlY3Rpb246IHZhcigtLWRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgYCxcbiAgXTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWRpYWxvZ1wiOiBIYURpYWxvZztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ha-dialog.ts\n");

/***/ }),

/***/ "./src/panels/profile/ha-long-lived-access-token-dialog.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/profile/ha-long-lived-access-token-dialog.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HaLongLivedAccessTokenDialog: function() { return /* binding */ HaLongLivedAccessTokenDialog; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/mwc-button */ \"./node_modules/@material/mwc-button/mwc-button.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _components_ha_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ha-dialog */ \"./src/components/ha-dialog.ts\");\n/* harmony import */ var _components_ha_textfield__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ha-textfield */ \"./src/components/ha-textfield.ts\");\n/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../resources/styles */ \"./src/resources/styles.ts\");\n\n\n\n\n\n\n\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\n\n\n\n\n\n\n\nvar QR_LOGO_URL = \"/static/icons/favicon-192x192.png\";\nvar HaLongLivedAccessTokenDialog = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_11__.customElement)(\"ha-long-lived-access-token-dialog\")], function (_initialize, _LitElement) {\n  var HaLongLivedAccessTokenDialog = /*#__PURE__*/function (_LitElement2) {\n    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(HaLongLivedAccessTokenDialog, _LitElement2);\n    var _super = (0,_babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(HaLongLivedAccessTokenDialog);\n    function HaLongLivedAccessTokenDialog() {\n      var _this;\n      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, HaLongLivedAccessTokenDialog);\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      _this = _super.call.apply(_super, [this].concat(args));\n      _initialize((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this));\n      return _this;\n    }\n    return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(HaLongLivedAccessTokenDialog);\n  }(_LitElement);\n  return {\n    F: HaLongLivedAccessTokenDialog,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_11__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_11__.state)()],\n      key: \"_params\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_11__.state)()],\n      key: \"_qrCode\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"showDialog\",\n      value: function showDialog(params) {\n        this._params = params;\n      }\n    }, {\n      kind: \"method\",\n      key: \"closeDialog\",\n      value: function closeDialog() {\n        this._params = undefined;\n        this._qrCode = undefined;\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__.fireEvent)(this, \"dialog-closed\", {\n          dialog: this.localName\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this._params || !this._params.token) {\n          return lit__WEBPACK_IMPORTED_MODULE_10__.nothing;\n        }\n        return (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n      <ha-dialog\\n        open\\n        hideActions\\n        .heading=\", \"\\n        @closed=\", \"\\n      >\\n        <div>\\n          <ha-textfield\\n            dialogInitialFocus\\n            .value=\", \"\\n            .label=\", \"\\n            type=\\\"text\\\"\\n            readOnly\\n          ></ha-textfield>\\n          <div id=\\\"qr\\\">\\n            \", \"\\n          </div>\\n        </div>\\n      </ha-dialog>\\n    \"])), (0,_components_ha_dialog__WEBPACK_IMPORTED_MODULE_13__.createCloseHeading)(this.hass, this._params.name), this.closeDialog, this._params.token, this.hass.localize(\"ui.panel.profile.long_lived_access_tokens.prompt_copy_token\"), this._qrCode ? this._qrCode : (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n                  <mwc-button @click=\", \">\\n                    Generate QR code\\n                  </mwc-button>\\n                \"])), this._generateQR));\n      }\n    }, {\n      kind: \"method\",\n      key: \"_generateQR\",\n      value: function () {\n        var _generateQR2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mark(function _callee() {\n          var qrcode, canvas, context, imageObj;\n          return (0,_babel_runtime_helpers_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().wrap(function _callee$(_context) {\n            while (1) switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return __webpack_require__.e(/*! import() */ \"vendors-node_modules_qrcode_lib_browser_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! qrcode */ \"./node_modules/qrcode/lib/browser.js\", 19));\n              case 2:\n                qrcode = _context.sent;\n                _context.next = 5;\n                return qrcode.toCanvas(this._params.token, {\n                  width: 180,\n                  errorCorrectionLevel: \"Q\"\n                });\n              case 5:\n                canvas = _context.sent;\n                context = canvas.getContext(\"2d\");\n                imageObj = new Image();\n                imageObj.src = QR_LOGO_URL;\n                _context.next = 11;\n                return new Promise(function (resolve) {\n                  imageObj.onload = resolve;\n                });\n              case 11:\n                context === null || context === void 0 ? void 0 : context.drawImage(imageObj, canvas.width / 3, canvas.height / 3, canvas.width / 3, canvas.height / 3);\n                this._qrCode = (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"<img\\n        alt=\", \"\\n        src=\", \"\\n      ></img>\"])), this.hass.localize(\"ui.panel.profile.long_lived_access_tokens.qr_code_image\", \"name\", this._params.name), canvas.toDataURL());\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }, _callee, this);\n        }));\n        function _generateQR() {\n          return _generateQR2.apply(this, arguments);\n        }\n        return _generateQR;\n      }()\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return [_resources_styles__WEBPACK_IMPORTED_MODULE_15__.haStyleDialog, (0,lit__WEBPACK_IMPORTED_MODULE_10__.css)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n        #qr {\\n          text-align: center;\\n        }\\n        ha-textfield {\\n          display: block;\\n        }\\n      \"])))];\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_10__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW4tZGlhbG9nLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBNkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQVFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVdBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW4tZGlhbG9nLnRzP2M1YzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0R3JvdXAsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBub3RoaW5nLFxufSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNsb3NlSGVhZGluZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hhLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0ZmllbGRcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb25nTGl2ZWRBY2Nlc3NUb2tlbkRpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW4tZGlhbG9nXCI7XG5cbmNvbnN0IFFSX0xPR09fVVJMID0gXCIvc3RhdGljL2ljb25zL2Zhdmljb24tMTkyeDE5Mi5wbmdcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1sb25nLWxpdmVkLWFjY2Vzcy10b2tlbi1kaWFsb2dcIilcbmV4cG9ydCBjbGFzcyBIYUxvbmdMaXZlZEFjY2Vzc1Rva2VuRGlhbG9nIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX3BhcmFtcz86IExvbmdMaXZlZEFjY2Vzc1Rva2VuRGlhbG9nUGFyYW1zO1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX3FyQ29kZT86IFRlbXBsYXRlUmVzdWx0O1xuXG4gIHB1YmxpYyBzaG93RGlhbG9nKHBhcmFtczogTG9uZ0xpdmVkQWNjZXNzVG9rZW5EaWFsb2dQYXJhbXMpOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3FyQ29kZSA9IHVuZGVmaW5lZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJkaWFsb2ctY2xvc2VkXCIsIHsgZGlhbG9nOiB0aGlzLmxvY2FsTmFtZSB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMgfHwgIXRoaXMuX3BhcmFtcy50b2tlbikge1xuICAgICAgcmV0dXJuIG5vdGhpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtZGlhbG9nXG4gICAgICAgIG9wZW5cbiAgICAgICAgaGlkZUFjdGlvbnNcbiAgICAgICAgLmhlYWRpbmc9JHtjcmVhdGVDbG9zZUhlYWRpbmcodGhpcy5oYXNzLCB0aGlzLl9wYXJhbXMubmFtZSl9XG4gICAgICAgIEBjbG9zZWQ9JHt0aGlzLmNsb3NlRGlhbG9nfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoYS10ZXh0ZmllbGRcbiAgICAgICAgICAgIGRpYWxvZ0luaXRpYWxGb2N1c1xuICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fcGFyYW1zLnRva2VufVxuICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLnByb21wdF9jb3B5X3Rva2VuXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgID48L2hhLXRleHRmaWVsZD5cbiAgICAgICAgICA8ZGl2IGlkPVwicXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5fcXJDb2RlXG4gICAgICAgICAgICAgID8gdGhpcy5fcXJDb2RlXG4gICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2dlbmVyYXRlUVJ9PlxuICAgICAgICAgICAgICAgICAgICBHZW5lcmF0ZSBRUiBjb2RlXG4gICAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2VuZXJhdGVRUigpIHtcbiAgICBjb25zdCBxcmNvZGUgPSBhd2FpdCBpbXBvcnQoXCJxcmNvZGVcIik7XG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgcXJjb2RlLnRvQ2FudmFzKHRoaXMuX3BhcmFtcyEudG9rZW4sIHtcbiAgICAgIHdpZHRoOiAxODAsXG4gICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbDogXCJRXCIsXG4gICAgfSk7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjb25zdCBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlT2JqLnNyYyA9IFFSX0xPR09fVVJMO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpbWFnZU9iai5vbmxvYWQgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGNvbnRleHQ/LmRyYXdJbWFnZShcbiAgICAgIGltYWdlT2JqLFxuICAgICAgY2FudmFzLndpZHRoIC8gMyxcbiAgICAgIGNhbnZhcy5oZWlnaHQgLyAzLFxuICAgICAgY2FudmFzLndpZHRoIC8gMyxcbiAgICAgIGNhbnZhcy5oZWlnaHQgLyAzXG4gICAgKTtcblxuICAgIHRoaXMuX3FyQ29kZSA9IGh0bWxgPGltZ1xuICAgICAgICBhbHQ9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5xcl9jb2RlX2ltYWdlXCIsXG4gICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgdGhpcy5fcGFyYW1zIS5uYW1lXG4gICAgICAgICl9XG4gICAgICAgIHNyYz0ke2NhbnZhcy50b0RhdGFVUkwoKX1cbiAgICAgID48L2ltZz5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0R3JvdXAge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICAjcXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoYS10ZXh0ZmllbGQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWxvbmctbGl2ZWQtYWNjZXNzLXRva2VuLWRpYWxvZ1wiOiBIYUxvbmdMaXZlZEFjY2Vzc1Rva2VuRGlhbG9nO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/panels/profile/ha-long-lived-access-token-dialog.ts\n");

/***/ })

}]);