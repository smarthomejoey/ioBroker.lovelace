"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_lovelace_cards_hui-vertical-stack-card_ts"],{

/***/ "./src/panels/lovelace/cards/hui-vertical-stack-card.ts":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-vertical-stack-card.ts ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/compute-card-size */ \"./src/panels/lovelace/common/compute-card-size.ts\");\n/* harmony import */ var _hui_stack_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hui-stack-card */ \"./src/panels/lovelace/cards/hui-stack-card.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hui_stack_card__WEBPACK_IMPORTED_MODULE_2__]);\n_hui_stack_card__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nclass HuiVerticalStackCard extends _hui_stack_card__WEBPACK_IMPORTED_MODULE_2__.HuiStackCard {\n  async getCardSize() {\n    if (!this._cards) {\n      return 0;\n    }\n    const promises = [];\n    for (const element of this._cards) {\n      promises.push((0,_common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__.computeCardSize)(element));\n    }\n    const results = await Promise.all(promises);\n    return results.reduce((partial_sum, a) => partial_sum + a, 0);\n  }\n  static get styles() {\n    return [super.sharedStyles, lit__WEBPACK_IMPORTED_MODULE_0__.css`\n        #root {\n          display: flex;\n          flex-direction: column;\n          height: 100%;\n        }\n        #root > * {\n          margin: var(\n            --vertical-stack-card-margin,\n            var(--stack-card-margin, 4px 0)\n          );\n        }\n        #root > *:first-child {\n          margin-top: 0;\n        }\n        #root > *:last-child {\n          margin-bottom: 0;\n        }\n      `];\n  }\n}\ncustomElements.define(\"hui-vertical-stack-card\", HuiVerticalStackCard);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS12ZXJ0aWNhbC1zdGFjay1jYXJkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS12ZXJ0aWNhbC1zdGFjay1jYXJkLnRzPzhjMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBDU1NSZXN1bHRHcm91cCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGNvbXB1dGVDYXJkU2l6ZSB9IGZyb20gXCIuLi9jb21tb24vY29tcHV0ZS1jYXJkLXNpemVcIjtcbmltcG9ydCB7IEh1aVN0YWNrQ2FyZCB9IGZyb20gXCIuL2h1aS1zdGFjay1jYXJkXCI7XG5cbmNsYXNzIEh1aVZlcnRpY2FsU3RhY2tDYXJkIGV4dGVuZHMgSHVpU3RhY2tDYXJkIHtcbiAgcHVibGljIGFzeW5jIGdldENhcmRTaXplKCkge1xuICAgIGlmICghdGhpcy5fY2FyZHMpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPG51bWJlcj4gfCBudW1iZXI+ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5fY2FyZHMpIHtcbiAgICAgIHByb21pc2VzLnB1c2goY29tcHV0ZUNhcmRTaXplKGVsZW1lbnQpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHMucmVkdWNlKChwYXJ0aWFsX3N1bSwgYSkgPT4gcGFydGlhbF9zdW0gKyBhLCAwKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEdyb3VwIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3VwZXIuc2hhcmVkU3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICAjcm9vdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAjcm9vdCA+ICoge1xuICAgICAgICAgIG1hcmdpbjogdmFyKFxuICAgICAgICAgICAgLS12ZXJ0aWNhbC1zdGFjay1jYXJkLW1hcmdpbixcbiAgICAgICAgICAgIHZhcigtLXN0YWNrLWNhcmQtbWFyZ2luLCA0cHggMClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgICNyb290ID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAjcm9vdCA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktdmVydGljYWwtc3RhY2stY2FyZFwiOiBIdWlWZXJ0aWNhbFN0YWNrQ2FyZDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJodWktdmVydGljYWwtc3RhY2stY2FyZFwiLCBIdWlWZXJ0aWNhbFN0YWNrQ2FyZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/panels/lovelace/cards/hui-vertical-stack-card.ts\n");

/***/ })

}]);