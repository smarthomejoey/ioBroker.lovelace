"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_components_ha-code-editor_ts"],{

/***/ "./src/common/dom/stop_propagation.ts":
/*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stopPropagation: () => (/* binding */ stopPropagation)\n/* harmony export */ });\nconst stopPropagation = ev => ev.stopPropagation();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2RvbS9zdG9wX3Byb3BhZ2F0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL2NvbW1vbi9kb20vc3RvcF9wcm9wYWdhdGlvbi50cz84NzJhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdG9wUHJvcGFnYXRpb24gPSAoZXYpID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/dom/stop_propagation.ts\n");

/***/ }),

/***/ "./src/components/ha-code-editor.ts":
/*!******************************************!*\
  !*** ./src/components/ha-code-editor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HaCodeEditor: () => (/* binding */ HaCodeEditor)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! memoize-one */ \"./node_modules/memoize-one/dist/memoize-one.esm.js\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/dom/stop_propagation */ \"./src/common/dom/stop_propagation.ts\");\n/* harmony import */ var _resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/codemirror.ondemand */ \"./src/resources/codemirror.ondemand.ts\");\n/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-icon */ \"./src/components/ha-icon.ts\");\n\n\n\n\n\n\n\n\n\n\nconst saveKeyBinding = {\n  key: \"Mod-s\",\n  run: view => {\n    (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__.fireEvent)(view.dom, \"editor-save\");\n    return true;\n  }\n};\nconst renderIcon = completion => {\n  const icon = document.createElement(\"ha-icon\");\n  icon.icon = completion.label;\n  return icon;\n};\nlet HaCodeEditor = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.customElement)(\"ha-code-editor\")], function (_initialize, _ReactiveElement) {\n  class HaCodeEditor extends _ReactiveElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HaCodeEditor,\n    d: [{\n      kind: \"field\",\n      key: \"codemirror\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)()],\n      key: \"mode\",\n      value() {\n        return \"yaml\";\n      }\n    }, {\n      kind: \"field\",\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean\n      })],\n      key: \"autofocus\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean\n      })],\n      key: \"readOnly\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean,\n        attribute: \"autocomplete-entities\"\n      })],\n      key: \"autocompleteEntities\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean,\n        attribute: \"autocomplete-icons\"\n      })],\n      key: \"autocompleteIcons\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)()],\n      key: \"error\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_value\",\n      value() {\n        return \"\";\n      }\n    }, {\n      kind: \"field\",\n      key: \"_loadedCodeMirror\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_iconList\",\n      value: void 0\n    }, {\n      kind: \"set\",\n      key: \"value\",\n      value: function value(_value) {\n        this._value = _value;\n      }\n    }, {\n      kind: \"get\",\n      key: \"value\",\n      value: function value() {\n        return this.codemirror ? this.codemirror.state.doc.toString() : this._value;\n      }\n    }, {\n      kind: \"get\",\n      key: \"hasComments\",\n      value: function hasComments() {\n        if (!this.codemirror || !this._loadedCodeMirror) {\n          return false;\n        }\n        const className = this._loadedCodeMirror.highlightingFor(this.codemirror.state, [this._loadedCodeMirror.tags.comment]);\n        return !!this.shadowRoot.querySelector(`span.${className}`);\n      }\n    }, {\n      kind: \"method\",\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaCodeEditor.prototype), \"connectedCallback\", this).call(this);\n        this.addEventListener(\"keydown\", _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_6__.stopPropagation);\n        if (!this.codemirror) {\n          return;\n        }\n        if (this.autofocus !== false) {\n          this.codemirror.focus();\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"disconnectedCallback\",\n      value: function disconnectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaCodeEditor.prototype), \"disconnectedCallback\", this).call(this);\n        this.removeEventListener(\"keydown\", _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_6__.stopPropagation);\n      }\n    }, {\n      kind: \"method\",\n      key: \"update\",\n      value: function update(changedProps) {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaCodeEditor.prototype), \"update\", this).call(this, changedProps);\n        if (!this.codemirror) {\n          return;\n        }\n        if (changedProps.has(\"mode\")) {\n          this.codemirror.dispatch({\n            effects: this._loadedCodeMirror.langCompartment.reconfigure(this._mode)\n          });\n        }\n        if (changedProps.has(\"readOnly\")) {\n          this.codemirror.dispatch({\n            effects: this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))\n          });\n        }\n        if (changedProps.has(\"_value\") && this._value !== this.value) {\n          this.codemirror.dispatch({\n            changes: {\n              from: 0,\n              to: this.codemirror.state.doc.length,\n              insert: this._value\n            }\n          });\n        }\n        if (changedProps.has(\"error\")) {\n          this.classList.toggle(\"error-state\", this.error);\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"firstUpdated\",\n      value: function firstUpdated(changedProps) {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaCodeEditor.prototype), \"firstUpdated\", this).call(this, changedProps);\n        this._load();\n      }\n    }, {\n      kind: \"get\",\n      key: \"_mode\",\n      value: function _mode() {\n        return this._loadedCodeMirror.langs[this.mode];\n      }\n    }, {\n      kind: \"method\",\n      key: \"_load\",\n      value: async function _load() {\n        this._loadedCodeMirror = await (0,_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_7__.loadCodeMirror)();\n        const extensions = [this._loadedCodeMirror.lineNumbers(), this._loadedCodeMirror.EditorState.allowMultipleSelections.of(true), this._loadedCodeMirror.history(), this._loadedCodeMirror.highlightSelectionMatches(), this._loadedCodeMirror.highlightActiveLine(), this._loadedCodeMirror.drawSelection(), this._loadedCodeMirror.rectangularSelection(), this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap, ...this._loadedCodeMirror.searchKeymap, ...this._loadedCodeMirror.historyKeymap, ...this._loadedCodeMirror.tabKeyBindings, saveKeyBinding]), this._loadedCodeMirror.langCompartment.of(this._mode), this._loadedCodeMirror.haTheme, this._loadedCodeMirror.haSyntaxHighlighting, this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)), this._loadedCodeMirror.EditorView.updateListener.of(update => this._onUpdate(update))];\n        if (!this.readOnly) {\n          const completionSources = [];\n          if (this.autocompleteEntities && this.hass) {\n            completionSources.push(this._entityCompletions.bind(this));\n          }\n          if (this.autocompleteIcons) {\n            completionSources.push(this._mdiCompletions.bind(this));\n          }\n          if (completionSources.length > 0) {\n            extensions.push(this._loadedCodeMirror.autocompletion({\n              override: completionSources,\n              maxRenderedOptions: 10\n            }));\n          }\n        }\n        this.codemirror = new this._loadedCodeMirror.EditorView({\n          state: this._loadedCodeMirror.EditorState.create({\n            doc: this._value,\n            extensions\n          }),\n          root: this.shadowRoot,\n          parent: this.shadowRoot\n        });\n      }\n    }, {\n      kind: \"field\",\n      key: \"_getStates\",\n      value() {\n        return (0,memoize_one__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(states => {\n          if (!states) {\n            return [];\n          }\n          const options = Object.keys(states).map(key => ({\n            type: \"variable\",\n            label: key,\n            detail: states[key].attributes.friendly_name,\n            info: `State: ${states[key].state}`\n          }));\n          return options;\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"_entityCompletions\",\n      value: function _entityCompletions(context) {\n        const entityWord = context.matchBefore(/[a-z_]{3,}\\.\\w*/);\n        if (!entityWord || entityWord.from === entityWord.to && !context.explicit) {\n          return null;\n        }\n        const states = this._getStates(this.hass.states);\n        if (!states || !states.length) {\n          return null;\n        }\n        return {\n          from: Number(entityWord.from),\n          options: states,\n          validFor: /^[a-z_]{3,}\\.\\w*$/\n        };\n      }\n    }, {\n      kind: \"field\",\n      key: \"_getIconItems\",\n      value() {\n        return async () => {\n          if (!this._iconList) {\n            let iconList;\n            if (false) {} else {\n              iconList = (await __webpack_require__.e(/*! import() */ \"build_mdi_iconList_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../build/mdi/iconList.json */ \"./build/mdi/iconList.json\", 19))).default;\n            }\n            this._iconList = iconList.map(icon => ({\n              type: \"variable\",\n              label: `mdi:${icon.name}`,\n              detail: icon.keywords.join(\", \"),\n              info: renderIcon\n            }));\n          }\n          return this._iconList;\n        };\n      }\n    }, {\n      kind: \"method\",\n      key: \"_mdiCompletions\",\n      value: async function _mdiCompletions(context) {\n        const match = context.matchBefore(/mdi:\\S*/);\n        if (!match || match.from === match.to && !context.explicit) {\n          return null;\n        }\n        const iconItems = await this._getIconItems();\n        return {\n          from: Number(match.from),\n          options: iconItems,\n          validFor: /^mdi:\\S*$/\n        };\n      }\n    }, {\n      kind: \"method\",\n      key: \"_onUpdate\",\n      value: function _onUpdate(update) {\n        if (!update.docChanged) {\n          return;\n        }\n        const newValue = this.value;\n        if (newValue === this._value) {\n          return;\n        }\n        this._value = newValue;\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__.fireEvent)(this, \"value-changed\", {\n          value: this._value\n        });\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return lit__WEBPACK_IMPORTED_MODULE_3__.css`\n      :host(.error-state) .cm-gutters {\n        border-color: var(--error-state-color, red);\n      }\n    `;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_3__.ReactiveElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBbVFBO0FBQUE7QUFBQTtBQW5RQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cz9kNzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgQ29tcGxldGlvbixcbiAgQ29tcGxldGlvbkNvbnRleHQsXG4gIENvbXBsZXRpb25SZXN1bHQsXG4gIENvbXBsZXRpb25Tb3VyY2UsXG59IGZyb20gXCJAY29kZW1pcnJvci9hdXRvY29tcGxldGVcIjtcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uIH0gZnJvbSBcIkBjb2RlbWlycm9yL3N0YXRlXCI7XG5pbXBvcnQgdHlwZSB7IEVkaXRvclZpZXcsIEtleUJpbmRpbmcsIFZpZXdVcGRhdGUgfSBmcm9tIFwiQGNvZGVtaXJyb3Ivdmlld1wiO1xuaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY3NzLCBDU1NSZXN1bHRHcm91cCwgUHJvcGVydHlWYWx1ZXMsIFJlYWN0aXZlRWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBzdG9wUHJvcGFnYXRpb24gfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9zdG9wX3Byb3BhZ2F0aW9uXCI7XG5pbXBvcnQgeyBsb2FkQ29kZU1pcnJvciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9oYS1pY29uXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiZWRpdG9yLXNhdmVcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbmNvbnN0IHNhdmVLZXlCaW5kaW5nOiBLZXlCaW5kaW5nID0ge1xuICBrZXk6IFwiTW9kLXNcIixcbiAgcnVuOiAodmlldzogRWRpdG9yVmlldykgPT4ge1xuICAgIGZpcmVFdmVudCh2aWV3LmRvbSwgXCJlZGl0b3Itc2F2ZVwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn07XG5cbmNvbnN0IHJlbmRlckljb24gPSAoY29tcGxldGlvbjogQ29tcGxldGlvbikgPT4ge1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhhLWljb25cIik7XG4gIGljb24uaWNvbiA9IGNvbXBsZXRpb24ubGFiZWw7XG4gIHJldHVybiBpY29uO1xufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb2RlLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEhhQ29kZUVkaXRvciBleHRlbmRzIFJlYWN0aXZlRWxlbWVudCB7XG4gIHB1YmxpYyBjb2RlbWlycm9yPzogRWRpdG9yVmlldztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbW9kZSA9IFwieWFtbFwiO1xuXG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBhdXRvZm9jdXMgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogXCJhdXRvY29tcGxldGUtZW50aXRpZXNcIiB9KVxuICBwdWJsaWMgYXV0b2NvbXBsZXRlRW50aXRpZXMgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwiYXV0b2NvbXBsZXRlLWljb25zXCIgfSlcbiAgcHVibGljIGF1dG9jb21wbGV0ZUljb25zID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGVycm9yID0gZmFsc2U7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBfdmFsdWUgPSBcIlwiO1xuXG4gIHByaXZhdGUgX2xvYWRlZENvZGVNaXJyb3I/OiB0eXBlb2YgaW1wb3J0KFwiLi4vcmVzb3VyY2VzL2NvZGVtaXJyb3JcIik7XG5cbiAgcHJpdmF0ZSBfaWNvbkxpc3Q/OiBDb21wbGV0aW9uW107XG5cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlbWlycm9yID8gdGhpcy5jb2RlbWlycm9yLnN0YXRlLmRvYy50b1N0cmluZygpIDogdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc0NvbW1lbnRzKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5jb2RlbWlycm9yIHx8ICF0aGlzLl9sb2FkZWRDb2RlTWlycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuaGlnaGxpZ2h0aW5nRm9yKFxuICAgICAgdGhpcy5jb2RlbWlycm9yLnN0YXRlLFxuICAgICAgW3RoaXMuX2xvYWRlZENvZGVNaXJyb3IudGFncy5jb21tZW50XVxuICAgICk7XG4gICAgcmV0dXJuICEhdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKGBzcGFuLiR7Y2xhc3NOYW1lfWApO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBzdG9wUHJvcGFnYXRpb24pO1xuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgc3RvcFByb3BhZ2F0aW9uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIm1vZGVcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5kaXNwYXRjaCh7XG4gICAgICAgIGVmZmVjdHM6IHRoaXMuX2xvYWRlZENvZGVNaXJyb3IhLmxhbmdDb21wYXJ0bWVudCEucmVjb25maWd1cmUoXG4gICAgICAgICAgdGhpcy5fbW9kZVxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwicmVhZE9ubHlcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5kaXNwYXRjaCh7XG4gICAgICAgIGVmZmVjdHM6IHRoaXMuX2xvYWRlZENvZGVNaXJyb3IhLnJlYWRvbmx5Q29tcGFydG1lbnQhLnJlY29uZmlndXJlKFxuICAgICAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IhLkVkaXRvclZpZXchLmVkaXRhYmxlLm9mKCF0aGlzLnJlYWRPbmx5KVxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX3ZhbHVlXCIpICYmIHRoaXMuX3ZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IuZGlzcGF0Y2goe1xuICAgICAgICBjaGFuZ2VzOiB7XG4gICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICB0bzogdGhpcy5jb2RlbWlycm9yLnN0YXRlLmRvYy5sZW5ndGgsXG4gICAgICAgICAgaW5zZXJ0OiB0aGlzLl92YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImVycm9yXCIpKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJlcnJvci1zdGF0ZVwiLCB0aGlzLmVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9sb2FkKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVkQ29kZU1pcnJvciEubGFuZ3NbdGhpcy5tb2RlXTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvciA9IGF3YWl0IGxvYWRDb2RlTWlycm9yKCk7XG4gICAgY29uc3QgZXh0ZW5zaW9uczogRXh0ZW5zaW9uW10gPSBbXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLmxpbmVOdW1iZXJzKCksXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLkVkaXRvclN0YXRlLmFsbG93TXVsdGlwbGVTZWxlY3Rpb25zLm9mKHRydWUpLFxuICAgICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5oaXN0b3J5KCksXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLmhpZ2hsaWdodFNlbGVjdGlvbk1hdGNoZXMoKSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuaGlnaGxpZ2h0QWN0aXZlTGluZSgpLFxuICAgICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5kcmF3U2VsZWN0aW9uKCksXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLnJlY3Rhbmd1bGFyU2VsZWN0aW9uKCksXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLmtleW1hcC5vZihbXG4gICAgICAgIC4uLnRoaXMuX2xvYWRlZENvZGVNaXJyb3IuZGVmYXVsdEtleW1hcCxcbiAgICAgICAgLi4udGhpcy5fbG9hZGVkQ29kZU1pcnJvci5zZWFyY2hLZXltYXAsXG4gICAgICAgIC4uLnRoaXMuX2xvYWRlZENvZGVNaXJyb3IuaGlzdG9yeUtleW1hcCxcbiAgICAgICAgLi4udGhpcy5fbG9hZGVkQ29kZU1pcnJvci50YWJLZXlCaW5kaW5ncyxcbiAgICAgICAgc2F2ZUtleUJpbmRpbmcsXG4gICAgICBdIGFzIEtleUJpbmRpbmdbXSksXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLmxhbmdDb21wYXJ0bWVudC5vZih0aGlzLl9tb2RlKSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuaGFUaGVtZSxcbiAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuaGFTeW50YXhIaWdobGlnaHRpbmcsXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLnJlYWRvbmx5Q29tcGFydG1lbnQub2YoXG4gICAgICAgIHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuRWRpdG9yVmlldy5lZGl0YWJsZS5vZighdGhpcy5yZWFkT25seSlcbiAgICAgICksXG4gICAgICB0aGlzLl9sb2FkZWRDb2RlTWlycm9yLkVkaXRvclZpZXcudXBkYXRlTGlzdGVuZXIub2YoKHVwZGF0ZSkgPT5cbiAgICAgICAgdGhpcy5fb25VcGRhdGUodXBkYXRlKVxuICAgICAgKSxcbiAgICBdO1xuXG4gICAgaWYgKCF0aGlzLnJlYWRPbmx5KSB7XG4gICAgICBjb25zdCBjb21wbGV0aW9uU291cmNlczogQ29tcGxldGlvblNvdXJjZVtdID0gW107XG4gICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVFbnRpdGllcyAmJiB0aGlzLmhhc3MpIHtcbiAgICAgICAgY29tcGxldGlvblNvdXJjZXMucHVzaCh0aGlzLl9lbnRpdHlDb21wbGV0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZUljb25zKSB7XG4gICAgICAgIGNvbXBsZXRpb25Tb3VyY2VzLnB1c2godGhpcy5fbWRpQ29tcGxldGlvbnMuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgICBpZiAoY29tcGxldGlvblNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBleHRlbnNpb25zLnB1c2goXG4gICAgICAgICAgdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5hdXRvY29tcGxldGlvbih7XG4gICAgICAgICAgICBvdmVycmlkZTogY29tcGxldGlvblNvdXJjZXMsXG4gICAgICAgICAgICBtYXhSZW5kZXJlZE9wdGlvbnM6IDEwLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb2RlbWlycm9yID0gbmV3IHRoaXMuX2xvYWRlZENvZGVNaXJyb3IuRWRpdG9yVmlldyh7XG4gICAgICBzdGF0ZTogdGhpcy5fbG9hZGVkQ29kZU1pcnJvci5FZGl0b3JTdGF0ZS5jcmVhdGUoe1xuICAgICAgICBkb2M6IHRoaXMuX3ZhbHVlLFxuICAgICAgICBleHRlbnNpb25zLFxuICAgICAgfSksXG4gICAgICByb290OiB0aGlzLnNoYWRvd1Jvb3QhLFxuICAgICAgcGFyZW50OiB0aGlzLnNoYWRvd1Jvb3QhLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3RhdGVzID0gbWVtb2l6ZU9uZSgoc3RhdGVzOiBIYXNzRW50aXRpZXMpOiBDb21wbGV0aW9uW10gPT4ge1xuICAgIGlmICghc3RhdGVzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3Qua2V5cyhzdGF0ZXMpLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgdHlwZTogXCJ2YXJpYWJsZVwiLFxuICAgICAgbGFiZWw6IGtleSxcbiAgICAgIGRldGFpbDogc3RhdGVzW2tleV0uYXR0cmlidXRlcy5mcmllbmRseV9uYW1lLFxuICAgICAgaW5mbzogYFN0YXRlOiAke3N0YXRlc1trZXldLnN0YXRlfWAsXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH0pO1xuXG4gIHByaXZhdGUgX2VudGl0eUNvbXBsZXRpb25zKFxuICAgIGNvbnRleHQ6IENvbXBsZXRpb25Db250ZXh0XG4gICk6IENvbXBsZXRpb25SZXN1bHQgfCBudWxsIHwgUHJvbWlzZTxDb21wbGV0aW9uUmVzdWx0IHwgbnVsbD4ge1xuICAgIGNvbnN0IGVudGl0eVdvcmQgPSBjb250ZXh0Lm1hdGNoQmVmb3JlKC9bYS16X117Myx9XFwuXFx3Ki8pO1xuXG4gICAgaWYgKFxuICAgICAgIWVudGl0eVdvcmQgfHxcbiAgICAgIChlbnRpdHlXb3JkLmZyb20gPT09IGVudGl0eVdvcmQudG8gJiYgIWNvbnRleHQuZXhwbGljaXQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLl9nZXRTdGF0ZXModGhpcy5oYXNzIS5zdGF0ZXMpO1xuXG4gICAgaWYgKCFzdGF0ZXMgfHwgIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBmcm9tOiBOdW1iZXIoZW50aXR5V29yZC5mcm9tKSxcbiAgICAgIG9wdGlvbnM6IHN0YXRlcyxcbiAgICAgIHZhbGlkRm9yOiAvXlthLXpfXXszLH1cXC5cXHcqJC8sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEljb25JdGVtcyA9IGFzeW5jICgpOiBQcm9taXNlPENvbXBsZXRpb25bXT4gPT4ge1xuICAgIGlmICghdGhpcy5faWNvbkxpc3QpIHtcbiAgICAgIGxldCBpY29uTGlzdDoge1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIGtleXdvcmRzOiBzdHJpbmdbXTtcbiAgICAgIH1bXTtcbiAgICAgIGlmIChfX1NVUEVSVklTT1JfXykge1xuICAgICAgICBpY29uTGlzdCA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWNvbkxpc3QgPSAoYXdhaXQgaW1wb3J0KFwiLi4vLi4vYnVpbGQvbWRpL2ljb25MaXN0Lmpzb25cIikpLmRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2ljb25MaXN0ID0gaWNvbkxpc3QubWFwKChpY29uKSA9PiAoe1xuICAgICAgICB0eXBlOiBcInZhcmlhYmxlXCIsXG4gICAgICAgIGxhYmVsOiBgbWRpOiR7aWNvbi5uYW1lfWAsXG4gICAgICAgIGRldGFpbDogaWNvbi5rZXl3b3Jkcy5qb2luKFwiLCBcIiksXG4gICAgICAgIGluZm86IHJlbmRlckljb24sXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2ljb25MaXN0O1xuICB9O1xuXG4gIHByaXZhdGUgYXN5bmMgX21kaUNvbXBsZXRpb25zKFxuICAgIGNvbnRleHQ6IENvbXBsZXRpb25Db250ZXh0XG4gICk6IFByb21pc2U8Q29tcGxldGlvblJlc3VsdCB8IG51bGw+IHtcbiAgICBjb25zdCBtYXRjaCA9IGNvbnRleHQubWF0Y2hCZWZvcmUoL21kaTpcXFMqLyk7XG5cbiAgICBpZiAoIW1hdGNoIHx8IChtYXRjaC5mcm9tID09PSBtYXRjaC50byAmJiAhY29udGV4dC5leHBsaWNpdCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGljb25JdGVtcyA9IGF3YWl0IHRoaXMuX2dldEljb25JdGVtcygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZyb206IE51bWJlcihtYXRjaC5mcm9tKSxcbiAgICAgIG9wdGlvbnM6IGljb25JdGVtcyxcbiAgICAgIHZhbGlkRm9yOiAvXm1kaTpcXFMqJC8sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX29uVXBkYXRlKHVwZGF0ZTogVmlld1VwZGF0ZSk6IHZvaWQge1xuICAgIGlmICghdXBkYXRlLmRvY0NoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IHRoaXMuX3ZhbHVlIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0R3JvdXAge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCguZXJyb3Itc3RhdGUpIC5jbS1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvci1zdGF0ZS1jb2xvciwgcmVkKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb2RlLWVkaXRvclwiOiBIYUNvZGVFZGl0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ha-code-editor.ts\n");

/***/ }),

/***/ "./src/resources/codemirror.ondemand.ts":
/*!**********************************************!*\
  !*** ./src/resources/codemirror.ondemand.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCodeMirror: () => (/* binding */ loadCodeMirror)\n/* harmony export */ });\nlet loaded;\nconst loadCodeMirror = async () => {\n  if (!loaded) {\n    loaded = Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_codemirror_commands_dist_index_js\"), __webpack_require__.e(\"vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_legacy-mod-06fffb\"), __webpack_require__.e(\"src_resources_codemirror_ts\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./codemirror */ \"./src/resources/codemirror.ts\"));\n  }\n  return loaded;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmQudHM/OGRkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbG9hZGVkOiBQcm9taXNlPHR5cGVvZiBpbXBvcnQoXCIuL2NvZGVtaXJyb3JcIik+O1xuXG5leHBvcnQgY29uc3QgbG9hZENvZGVNaXJyb3IgPSBhc3luYyAoKTogUHJvbWlzZTxcbiAgdHlwZW9mIGltcG9ydChcIi4vY29kZW1pcnJvclwiKVxuPiA9PiB7XG4gIGlmICghbG9hZGVkKSB7XG4gICAgbG9hZGVkID0gaW1wb3J0KFwiLi9jb2RlbWlycm9yXCIpO1xuICB9XG4gIHJldHVybiBsb2FkZWQ7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/resources/codemirror.ondemand.ts\n");

/***/ })

}]);