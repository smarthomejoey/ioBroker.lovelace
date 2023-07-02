"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_components_ha-hls-player_ts"],{

/***/ "./src/components/ha-hls-player.ts":
/*!*****************************************!*\
  !*** ./src/components/ha-hls-player.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/util/render-status */ \"./src/common/util/render-status.ts\");\n/* harmony import */ var _ha_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-alert */ \"./src/components/ha-alert.ts\");\n\n\n\n\n\n\n\n\nlet HaHLSPlayer = (0,_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.customElement)(\"ha-hls-player\")], function (_initialize, _LitElement) {\n  class HaHLSPlayer extends _LitElement {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: HaHLSPlayer,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)()],\n      key: \"url\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)()],\n      key: \"posterUrl\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean,\n        attribute: \"controls\"\n      })],\n      key: \"controls\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean,\n        attribute: \"muted\"\n      })],\n      key: \"muted\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean,\n        attribute: \"autoplay\"\n      })],\n      key: \"autoPlay\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean,\n        attribute: \"playsinline\"\n      })],\n      key: \"playsInline\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.property)({\n        type: Boolean,\n        attribute: \"allow-exoplayer\"\n      })],\n      key: \"allowExoPlayer\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.query)(\"video\")],\n      key: \"_videoEl\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_error\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_4__.state)()],\n      key: \"_errorIsFatal\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      key: \"_hlsPolyfillInstance\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_exoPlayer\",\n      value() {\n        return false;\n      }\n    }, {\n      kind: \"field\",\n      static: true,\n      key: \"streamCount\",\n      value() {\n        return 0;\n      }\n    }, {\n      kind: \"method\",\n      key: \"connectedCallback\",\n      value:\n      // don't cache this, as we remove it on disconnects\n\n      function connectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaHLSPlayer.prototype), \"connectedCallback\", this).call(this);\n        HaHLSPlayer.streamCount += 1;\n        if (this.hasUpdated) {\n          this._resetError();\n          this._startHls();\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"disconnectedCallback\",\n      value: function disconnectedCallback() {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaHLSPlayer.prototype), \"disconnectedCallback\", this).call(this);\n        HaHLSPlayer.streamCount -= 1;\n        this._cleanUp();\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        return lit__WEBPACK_IMPORTED_MODULE_3__.html`\n      ${this._error ? lit__WEBPACK_IMPORTED_MODULE_3__.html`<ha-alert\n            alert-type=\"error\"\n            class=${this._errorIsFatal ? \"fatal\" : \"retry\"}\n          >\n            ${this._error}\n          </ha-alert>` : \"\"}\n      ${!this._errorIsFatal ? lit__WEBPACK_IMPORTED_MODULE_3__.html`<video\n            .poster=${this.posterUrl}\n            ?autoplay=${this.autoPlay}\n            .muted=${this.muted}\n            ?playsinline=${this.playsInline}\n            ?controls=${this.controls}\n            @loadeddata=${this._loadedData}\n          ></video>` : \"\"}\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"updated\",\n      value: function updated(changedProps) {\n        (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HaHLSPlayer.prototype), \"updated\", this).call(this, changedProps);\n        const urlChanged = changedProps.has(\"url\");\n        if (!urlChanged) {\n          return;\n        }\n        this._cleanUp();\n        this._resetError();\n        this._startHls();\n      }\n    }, {\n      kind: \"method\",\n      key: \"_startHls\",\n      value: async function _startHls() {\n        var _this$hass$auth$exter;\n        const masterPlaylistPromise = fetch(this.url);\n        const Hls = (await __webpack_require__.e(/*! import() */ \"vendors-node_modules_hls_js_dist_hls_light_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! hls.js/dist/hls.light */ \"./node_modules/hls.js/dist/hls.light.js\", 23))).default;\n        if (!this.isConnected) {\n          return;\n        }\n        let hlsSupported = Hls.isSupported();\n        if (!hlsSupported) {\n          hlsSupported = this._videoEl.canPlayType(\"application/vnd.apple.mpegurl\") !== \"\";\n        }\n        if (!hlsSupported) {\n          this._setFatalError(this.hass.localize(\"ui.components.media-browser.video_not_supported\"));\n          return;\n        }\n        const useExoPlayer = this.allowExoPlayer && ((_this$hass$auth$exter = this.hass.auth.external) === null || _this$hass$auth$exter === void 0 ? void 0 : _this$hass$auth$exter.config.hasExoPlayer);\n        const masterPlaylist = await (await masterPlaylistPromise).text();\n        if (!this.isConnected) {\n          return;\n        }\n\n        // Parse playlist assuming it is a master playlist. Match group 1 is whether hevc, match group 2 is regular playlist url\n        // See https://tools.ietf.org/html/rfc8216 for HLS spec details\n        const playlistRegexp = /#EXT-X-STREAM-INF:.*?(?:CODECS=\".*?(hev1|hvc1)?\\..*?\".*?)?(?:\\n|\\r\\n)(.+)/g;\n        const match = playlistRegexp.exec(masterPlaylist);\n        const matchTwice = playlistRegexp.exec(masterPlaylist);\n\n        // Get the regular playlist url from the input (master) playlist, falling back to the input playlist if necessary\n        // This avoids the player having to load and parse the master playlist again before loading the regular playlist\n        let playlist_url;\n        if (match !== null && matchTwice === null) {\n          // Only send the regular playlist url if we match exactly once\n          playlist_url = new URL(match[2], this.url).href;\n        } else {\n          playlist_url = this.url;\n        }\n\n        // If codec is HEVC and ExoPlayer is supported, use ExoPlayer.\n        if (useExoPlayer && match !== null && match[1] !== undefined) {\n          this._renderHLSExoPlayer(playlist_url);\n        } else if (Hls.isSupported()) {\n          this._renderHLSPolyfill(this._videoEl, Hls, playlist_url);\n        } else {\n          this._renderHLSNative(this._videoEl, playlist_url);\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderHLSExoPlayer\",\n      value: async function _renderHLSExoPlayer(url) {\n        this._exoPlayer = true;\n        window.addEventListener(\"resize\", this._resizeExoPlayer);\n        this.updateComplete.then(() => (0,_common_util_render_status__WEBPACK_IMPORTED_MODULE_6__.nextRender)()).then(this._resizeExoPlayer);\n        this._videoEl.style.visibility = \"hidden\";\n        await this.hass.auth.external.fireMessage({\n          type: \"exoplayer/play_hls\",\n          payload: {\n            url: new URL(url, window.location.href).toString(),\n            muted: this.muted\n          }\n        });\n      }\n    }, {\n      kind: \"field\",\n      key: \"_resizeExoPlayer\",\n      value() {\n        return () => {\n          if (!this._videoEl) {\n            return;\n          }\n          const rect = this._videoEl.getBoundingClientRect();\n          this.hass.auth.external.fireMessage({\n            type: \"exoplayer/resize\",\n            payload: {\n              left: rect.left,\n              top: rect.top,\n              right: rect.right,\n              bottom: rect.bottom\n            }\n          });\n        };\n      }\n    }, {\n      kind: \"method\",\n      key: \"_isLLHLSSupported\",\n      value: function _isLLHLSSupported() {\n        // LL-HLS keeps multiple requests in flight, which can run into browser limitations without\n        // an http/2 proxy to pipeline requests. However, a small number of streams active at\n        // once should be OK.\n        // The stream count may be incremented multiple times before this function is called to check\n        // the count e.g. when loading a page with many streams on it. The race can work in our favor\n        // so we now have a better idea on if we'll use too many browser connections later.\n        if (HaHLSPlayer.streamCount <= 2) {\n          return true;\n        }\n        if (!(\"performance\" in window) || performance.getEntriesByType(\"resource\").length === 0) {\n          return false;\n        }\n        const perfEntry = performance.getEntriesByType(\"resource\")[0];\n        return \"nextHopProtocol\" in perfEntry && perfEntry.nextHopProtocol === \"h2\";\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderHLSPolyfill\",\n      value: async function _renderHLSPolyfill(videoEl, Hls, url) {\n        const hls = new Hls({\n          backBufferLength: 60,\n          fragLoadingTimeOut: 30000,\n          manifestLoadingTimeOut: 30000,\n          levelLoadingTimeOut: 30000,\n          maxLiveSyncPlaybackRate: 2,\n          lowLatencyMode: this._isLLHLSSupported()\n        });\n        this._hlsPolyfillInstance = hls;\n        hls.attachMedia(videoEl);\n        hls.on(Hls.Events.MEDIA_ATTACHED, () => {\n          this._resetError();\n          hls.loadSource(url);\n        });\n        hls.on(Hls.Events.FRAG_LOADED, (_event, _data) => {\n          this._resetError();\n        });\n        hls.on(Hls.Events.ERROR, (_event, data) => {\n          // Some errors are recovered automatically by the hls player itself, and the others handled\n          // in this function require special actions to recover. Errors retried in this function\n          // are done with backoff to not cause unecessary failures.\n          if (!data.fatal) {\n            return;\n          }\n          if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {\n            switch (data.details) {\n              case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:\n                {\n                  let error = \"Error starting stream, see logs for details\";\n                  if (data.response !== undefined && data.response.code !== undefined) {\n                    if (data.response.code >= 500) {\n                      error += \" (Server failure)\";\n                    } else if (data.response.code >= 400) {\n                      error += \" (Stream never started)\";\n                    } else {\n                      error += \" (\" + data.response.code + \")\";\n                    }\n                  }\n                  this._setRetryableError(error);\n                  break;\n                }\n              case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:\n                this._setRetryableError(\"Timeout while starting stream\");\n                break;\n              default:\n                this._setRetryableError(\"Stream network error\");\n                break;\n            }\n            hls.startLoad();\n          } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {\n            this._setRetryableError(\"Error with media stream contents\");\n            hls.recoverMediaError();\n          } else {\n            this._setFatalError(\"Error playing stream\");\n          }\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"_renderHLSNative\",\n      value: async function _renderHLSNative(videoEl, url) {\n        videoEl.src = url;\n        videoEl.addEventListener(\"loadedmetadata\", () => {\n          videoEl.play();\n        });\n      }\n    }, {\n      kind: \"method\",\n      key: \"_cleanUp\",\n      value: function _cleanUp() {\n        if (this._hlsPolyfillInstance) {\n          this._hlsPolyfillInstance.destroy();\n          this._hlsPolyfillInstance = undefined;\n        }\n        if (this._exoPlayer) {\n          window.removeEventListener(\"resize\", this._resizeExoPlayer);\n          this.hass.auth.external.fireMessage({\n            type: \"exoplayer/stop\"\n          });\n          this._exoPlayer = false;\n        }\n        if (this._videoEl) {\n          this._videoEl.removeAttribute(\"src\");\n          this._videoEl.load();\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"_resetError\",\n      value: function _resetError() {\n        this._error = undefined;\n        this._errorIsFatal = false;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_setFatalError\",\n      value: function _setFatalError(errorMessage) {\n        this._error = errorMessage;\n        this._errorIsFatal = true;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_setRetryableError\",\n      value: function _setRetryableError(errorMessage) {\n        this._error = errorMessage;\n        this._errorIsFatal = false;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_loadedData\",\n      value: function _loadedData() {\n        // @ts-ignore\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__.fireEvent)(this, \"load\");\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return lit__WEBPACK_IMPORTED_MODULE_3__.css`\n      :host,\n      video {\n        display: block;\n      }\n\n      video {\n        width: 100%;\n        max-height: var(--video-max-height, calc(100vh - 97px));\n      }\n\n      .fatal {\n        display: block;\n        padding: 100px 16px;\n      }\n\n      .retry {\n        display: block;\n      }\n    `;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_3__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oYS1obHMtcGxheWVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUF1VUE7QUFBQTtBQUFBO0FBdlVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBOztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9oYS1obHMtcGxheWVyLnRzPzQwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgSGxzVHlwZSBmcm9tIFwiaGxzLmpzXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdEdyb3VwLFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBxdWVyeSwgc3RhdGUgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IG5leHRSZW5kZXIgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvcmVuZGVyLXN0YXR1c1wiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuL2hhLWFsZXJ0XCI7XG5cbnR5cGUgSGxzTGl0ZSA9IE9taXQ8XG4gIEhsc1R5cGUsXG4gIFwic3VidGl0bGVUcmFja0NvbnRyb2xsZXJcIiB8IFwiYXVkaW9UcmFja0NvbnRyb2xsZXJcIiB8IFwiZW1lQ29udHJvbGxlclwiXG4+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWhscy1wbGF5ZXJcIilcbmNsYXNzIEhhSExTUGxheWVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB1cmwhOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHBvc3RlclVybCE6IHN0cmluZztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwiY29udHJvbHNcIiB9KVxuICBwdWJsaWMgY29udHJvbHMgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwibXV0ZWRcIiB9KVxuICBwdWJsaWMgbXV0ZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwiYXV0b3BsYXlcIiB9KVxuICBwdWJsaWMgYXV0b1BsYXkgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwicGxheXNpbmxpbmVcIiB9KVxuICBwdWJsaWMgcGxheXNJbmxpbmUgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwiYWxsb3ctZXhvcGxheWVyXCIgfSlcbiAgcHVibGljIGFsbG93RXhvUGxheWVyID0gZmFsc2U7XG5cbiAgLy8gZG9uJ3QgY2FjaGUgdGhpcywgYXMgd2UgcmVtb3ZlIGl0IG9uIGRpc2Nvbm5lY3RzXG4gIEBxdWVyeShcInZpZGVvXCIpIHByaXZhdGUgX3ZpZGVvRWwhOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX2Vycm9yPzogc3RyaW5nO1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX2Vycm9ySXNGYXRhbCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2hsc1BvbHlmaWxsSW5zdGFuY2U/OiBIbHNMaXRlO1xuXG4gIHByaXZhdGUgX2V4b1BsYXllciA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3RhdGljIHN0cmVhbUNvdW50ID0gMDtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBIYUhMU1BsYXllci5zdHJlYW1Db3VudCArPSAxO1xuICAgIGlmICh0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgIHRoaXMuX3Jlc2V0RXJyb3IoKTtcbiAgICAgIHRoaXMuX3N0YXJ0SGxzKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgSGFITFNQbGF5ZXIuc3RyZWFtQ291bnQgLT0gMTtcbiAgICB0aGlzLl9jbGVhblVwKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5fZXJyb3JcbiAgICAgICAgPyBodG1sYDxoYS1hbGVydFxuICAgICAgICAgICAgYWxlcnQtdHlwZT1cImVycm9yXCJcbiAgICAgICAgICAgIGNsYXNzPSR7dGhpcy5fZXJyb3JJc0ZhdGFsID8gXCJmYXRhbFwiIDogXCJyZXRyeVwifVxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5fZXJyb3J9XG4gICAgICAgICAgPC9oYS1hbGVydD5gXG4gICAgICAgIDogXCJcIn1cbiAgICAgICR7IXRoaXMuX2Vycm9ySXNGYXRhbFxuICAgICAgICA/IGh0bWxgPHZpZGVvXG4gICAgICAgICAgICAucG9zdGVyPSR7dGhpcy5wb3N0ZXJVcmx9XG4gICAgICAgICAgICA/YXV0b3BsYXk9JHt0aGlzLmF1dG9QbGF5fVxuICAgICAgICAgICAgLm11dGVkPSR7dGhpcy5tdXRlZH1cbiAgICAgICAgICAgID9wbGF5c2lubGluZT0ke3RoaXMucGxheXNJbmxpbmV9XG4gICAgICAgICAgICA/Y29udHJvbHM9JHt0aGlzLmNvbnRyb2xzfVxuICAgICAgICAgICAgQGxvYWRlZGRhdGE9JHt0aGlzLl9sb2FkZWREYXRhfVxuICAgICAgICAgID48L3ZpZGVvPmBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgY29uc3QgdXJsQ2hhbmdlZCA9IGNoYW5nZWRQcm9wcy5oYXMoXCJ1cmxcIik7XG5cbiAgICBpZiAoIXVybENoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhblVwKCk7XG4gICAgdGhpcy5fcmVzZXRFcnJvcigpO1xuICAgIHRoaXMuX3N0YXJ0SGxzKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zdGFydEhscygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtYXN0ZXJQbGF5bGlzdFByb21pc2UgPSBmZXRjaCh0aGlzLnVybCk7XG5cbiAgICBjb25zdCBIbHM6IHR5cGVvZiBIbHNUeXBlID0gKGF3YWl0IGltcG9ydChcImhscy5qcy9kaXN0L2hscy5saWdodFwiKSkuZGVmYXVsdDtcblxuICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBobHNTdXBwb3J0ZWQgPSBIbHMuaXNTdXBwb3J0ZWQoKTtcblxuICAgIGlmICghaGxzU3VwcG9ydGVkKSB7XG4gICAgICBobHNTdXBwb3J0ZWQgPVxuICAgICAgICB0aGlzLl92aWRlb0VsLmNhblBsYXlUeXBlKFwiYXBwbGljYXRpb24vdm5kLmFwcGxlLm1wZWd1cmxcIikgIT09IFwiXCI7XG4gICAgfVxuXG4gICAgaWYgKCFobHNTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuX3NldEZhdGFsRXJyb3IoXG4gICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMubWVkaWEtYnJvd3Nlci52aWRlb19ub3Rfc3VwcG9ydGVkXCIpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZUV4b1BsYXllciA9XG4gICAgICB0aGlzLmFsbG93RXhvUGxheWVyICYmIHRoaXMuaGFzcy5hdXRoLmV4dGVybmFsPy5jb25maWcuaGFzRXhvUGxheWVyO1xuICAgIGNvbnN0IG1hc3RlclBsYXlsaXN0ID0gYXdhaXQgKGF3YWl0IG1hc3RlclBsYXlsaXN0UHJvbWlzZSkudGV4dCgpO1xuXG4gICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgcGxheWxpc3QgYXNzdW1pbmcgaXQgaXMgYSBtYXN0ZXIgcGxheWxpc3QuIE1hdGNoIGdyb3VwIDEgaXMgd2hldGhlciBoZXZjLCBtYXRjaCBncm91cCAyIGlzIHJlZ3VsYXIgcGxheWxpc3QgdXJsXG4gICAgLy8gU2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM4MjE2IGZvciBITFMgc3BlYyBkZXRhaWxzXG4gICAgY29uc3QgcGxheWxpc3RSZWdleHAgPVxuICAgICAgLyNFWFQtWC1TVFJFQU0tSU5GOi4qPyg/OkNPREVDUz1cIi4qPyhoZXYxfGh2YzEpP1xcLi4qP1wiLio/KT8oPzpcXG58XFxyXFxuKSguKykvZztcbiAgICBjb25zdCBtYXRjaCA9IHBsYXlsaXN0UmVnZXhwLmV4ZWMobWFzdGVyUGxheWxpc3QpO1xuICAgIGNvbnN0IG1hdGNoVHdpY2UgPSBwbGF5bGlzdFJlZ2V4cC5leGVjKG1hc3RlclBsYXlsaXN0KTtcblxuICAgIC8vIEdldCB0aGUgcmVndWxhciBwbGF5bGlzdCB1cmwgZnJvbSB0aGUgaW5wdXQgKG1hc3RlcikgcGxheWxpc3QsIGZhbGxpbmcgYmFjayB0byB0aGUgaW5wdXQgcGxheWxpc3QgaWYgbmVjZXNzYXJ5XG4gICAgLy8gVGhpcyBhdm9pZHMgdGhlIHBsYXllciBoYXZpbmcgdG8gbG9hZCBhbmQgcGFyc2UgdGhlIG1hc3RlciBwbGF5bGlzdCBhZ2FpbiBiZWZvcmUgbG9hZGluZyB0aGUgcmVndWxhciBwbGF5bGlzdFxuICAgIGxldCBwbGF5bGlzdF91cmw6IHN0cmluZztcbiAgICBpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hUd2ljZSA9PT0gbnVsbCkge1xuICAgICAgLy8gT25seSBzZW5kIHRoZSByZWd1bGFyIHBsYXlsaXN0IHVybCBpZiB3ZSBtYXRjaCBleGFjdGx5IG9uY2VcbiAgICAgIHBsYXlsaXN0X3VybCA9IG5ldyBVUkwobWF0Y2hbMl0sIHRoaXMudXJsKS5ocmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5bGlzdF91cmwgPSB0aGlzLnVybDtcbiAgICB9XG5cbiAgICAvLyBJZiBjb2RlYyBpcyBIRVZDIGFuZCBFeG9QbGF5ZXIgaXMgc3VwcG9ydGVkLCB1c2UgRXhvUGxheWVyLlxuICAgIGlmICh1c2VFeG9QbGF5ZXIgJiYgbWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcmVuZGVySExTRXhvUGxheWVyKHBsYXlsaXN0X3VybCk7XG4gICAgfSBlbHNlIGlmIChIbHMuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgdGhpcy5fcmVuZGVySExTUG9seWZpbGwodGhpcy5fdmlkZW9FbCwgSGxzLCBwbGF5bGlzdF91cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJITFNOYXRpdmUodGhpcy5fdmlkZW9FbCwgcGxheWxpc3RfdXJsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW5kZXJITFNFeG9QbGF5ZXIodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leG9QbGF5ZXIgPSB0cnVlO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3Jlc2l6ZUV4b1BsYXllcik7XG4gICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IG5leHRSZW5kZXIoKSkudGhlbih0aGlzLl9yZXNpemVFeG9QbGF5ZXIpO1xuICAgIHRoaXMuX3ZpZGVvRWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgYXdhaXQgdGhpcy5oYXNzIS5hdXRoLmV4dGVybmFsIS5maXJlTWVzc2FnZSh7XG4gICAgICB0eXBlOiBcImV4b3BsYXllci9wbGF5X2hsc1wiLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICB1cmw6IG5ldyBVUkwodXJsLCB3aW5kb3cubG9jYXRpb24uaHJlZikudG9TdHJpbmcoKSxcbiAgICAgICAgbXV0ZWQ6IHRoaXMubXV0ZWQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzaXplRXhvUGxheWVyID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5fdmlkZW9FbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gdGhpcy5fdmlkZW9FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLmhhc3MhLmF1dGguZXh0ZXJuYWwhLmZpcmVNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwiZXhvcGxheWVyL3Jlc2l6ZVwiLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIF9pc0xMSExTU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICAgIC8vIExMLUhMUyBrZWVwcyBtdWx0aXBsZSByZXF1ZXN0cyBpbiBmbGlnaHQsIHdoaWNoIGNhbiBydW4gaW50byBicm93c2VyIGxpbWl0YXRpb25zIHdpdGhvdXRcbiAgICAvLyBhbiBodHRwLzIgcHJveHkgdG8gcGlwZWxpbmUgcmVxdWVzdHMuIEhvd2V2ZXIsIGEgc21hbGwgbnVtYmVyIG9mIHN0cmVhbXMgYWN0aXZlIGF0XG4gICAgLy8gb25jZSBzaG91bGQgYmUgT0suXG4gICAgLy8gVGhlIHN0cmVhbSBjb3VudCBtYXkgYmUgaW5jcmVtZW50ZWQgbXVsdGlwbGUgdGltZXMgYmVmb3JlIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIGNoZWNrXG4gICAgLy8gdGhlIGNvdW50IGUuZy4gd2hlbiBsb2FkaW5nIGEgcGFnZSB3aXRoIG1hbnkgc3RyZWFtcyBvbiBpdC4gVGhlIHJhY2UgY2FuIHdvcmsgaW4gb3VyIGZhdm9yXG4gICAgLy8gc28gd2Ugbm93IGhhdmUgYSBiZXR0ZXIgaWRlYSBvbiBpZiB3ZSdsbCB1c2UgdG9vIG1hbnkgYnJvd3NlciBjb25uZWN0aW9ucyBsYXRlci5cbiAgICBpZiAoSGFITFNQbGF5ZXIuc3RyZWFtQ291bnQgPD0gMikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgICEoXCJwZXJmb3JtYW5jZVwiIGluIHdpbmRvdykgfHxcbiAgICAgIHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJyZXNvdXJjZVwiKS5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcGVyZkVudHJ5ID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcbiAgICAgIFwicmVzb3VyY2VcIlxuICAgIClbMF0gYXMgUGVyZm9ybWFuY2VSZXNvdXJjZVRpbWluZztcbiAgICByZXR1cm4gXCJuZXh0SG9wUHJvdG9jb2xcIiBpbiBwZXJmRW50cnkgJiYgcGVyZkVudHJ5Lm5leHRIb3BQcm90b2NvbCA9PT0gXCJoMlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVuZGVySExTUG9seWZpbGwoXG4gICAgdmlkZW9FbDogSFRNTFZpZGVvRWxlbWVudCxcbiAgICBIbHM6IHR5cGVvZiBIbHNUeXBlLFxuICAgIHVybDogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IGhscyA9IG5ldyBIbHMoe1xuICAgICAgYmFja0J1ZmZlckxlbmd0aDogNjAsXG4gICAgICBmcmFnTG9hZGluZ1RpbWVPdXQ6IDMwMDAwLFxuICAgICAgbWFuaWZlc3RMb2FkaW5nVGltZU91dDogMzAwMDAsXG4gICAgICBsZXZlbExvYWRpbmdUaW1lT3V0OiAzMDAwMCxcbiAgICAgIG1heExpdmVTeW5jUGxheWJhY2tSYXRlOiAyLFxuICAgICAgbG93TGF0ZW5jeU1vZGU6IHRoaXMuX2lzTExITFNTdXBwb3J0ZWQoKSxcbiAgICB9KTtcbiAgICB0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlID0gaGxzO1xuICAgIGhscy5hdHRhY2hNZWRpYSh2aWRlb0VsKTtcbiAgICBobHMub24oSGxzLkV2ZW50cy5NRURJQV9BVFRBQ0hFRCwgKCkgPT4ge1xuICAgICAgdGhpcy5fcmVzZXRFcnJvcigpO1xuICAgICAgaGxzLmxvYWRTb3VyY2UodXJsKTtcbiAgICB9KTtcbiAgICBobHMub24oSGxzLkV2ZW50cy5GUkFHX0xPQURFRCwgKF9ldmVudCwgX2RhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5fcmVzZXRFcnJvcigpO1xuICAgIH0pO1xuICAgIGhscy5vbihIbHMuRXZlbnRzLkVSUk9SLCAoX2V2ZW50LCBkYXRhOiBhbnkpID0+IHtcbiAgICAgIC8vIFNvbWUgZXJyb3JzIGFyZSByZWNvdmVyZWQgYXV0b21hdGljYWxseSBieSB0aGUgaGxzIHBsYXllciBpdHNlbGYsIGFuZCB0aGUgb3RoZXJzIGhhbmRsZWRcbiAgICAgIC8vIGluIHRoaXMgZnVuY3Rpb24gcmVxdWlyZSBzcGVjaWFsIGFjdGlvbnMgdG8gcmVjb3Zlci4gRXJyb3JzIHJldHJpZWQgaW4gdGhpcyBmdW5jdGlvblxuICAgICAgLy8gYXJlIGRvbmUgd2l0aCBiYWNrb2ZmIHRvIG5vdCBjYXVzZSB1bmVjZXNzYXJ5IGZhaWx1cmVzLlxuICAgICAgaWYgKCFkYXRhLmZhdGFsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLnR5cGUgPT09IEhscy5FcnJvclR5cGVzLk5FVFdPUktfRVJST1IpIHtcbiAgICAgICAgc3dpdGNoIChkYXRhLmRldGFpbHMpIHtcbiAgICAgICAgICBjYXNlIEhscy5FcnJvckRldGFpbHMuTUFOSUZFU1RfTE9BRF9FUlJPUjoge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gXCJFcnJvciBzdGFydGluZyBzdHJlYW0sIHNlZSBsb2dzIGZvciBkZXRhaWxzXCI7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGRhdGEucmVzcG9uc2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICBkYXRhLnJlc3BvbnNlLmNvZGUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLmNvZGUgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgKz0gXCIgKFNlcnZlciBmYWlsdXJlKVwiO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzcG9uc2UuY29kZSA+PSA0MDApIHtcbiAgICAgICAgICAgICAgICBlcnJvciArPSBcIiAoU3RyZWFtIG5ldmVyIHN0YXJ0ZWQpXCI7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgKz0gXCIgKFwiICsgZGF0YS5yZXNwb25zZS5jb2RlICsgXCIpXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NldFJldHJ5YWJsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIEhscy5FcnJvckRldGFpbHMuTUFOSUZFU1RfTE9BRF9USU1FT1VUOlxuICAgICAgICAgICAgdGhpcy5fc2V0UmV0cnlhYmxlRXJyb3IoXCJUaW1lb3V0IHdoaWxlIHN0YXJ0aW5nIHN0cmVhbVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLl9zZXRSZXRyeWFibGVFcnJvcihcIlN0cmVhbSBuZXR3b3JrIGVycm9yXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaGxzLnN0YXJ0TG9hZCgpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09IEhscy5FcnJvclR5cGVzLk1FRElBX0VSUk9SKSB7XG4gICAgICAgIHRoaXMuX3NldFJldHJ5YWJsZUVycm9yKFwiRXJyb3Igd2l0aCBtZWRpYSBzdHJlYW0gY29udGVudHNcIik7XG4gICAgICAgIGhscy5yZWNvdmVyTWVkaWFFcnJvcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2V0RmF0YWxFcnJvcihcIkVycm9yIHBsYXlpbmcgc3RyZWFtXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVuZGVySExTTmF0aXZlKHZpZGVvRWw6IEhUTUxWaWRlb0VsZW1lbnQsIHVybDogc3RyaW5nKSB7XG4gICAgdmlkZW9FbC5zcmMgPSB1cmw7XG4gICAgdmlkZW9FbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkbWV0YWRhdGFcIiwgKCkgPT4ge1xuICAgICAgdmlkZW9FbC5wbGF5KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhblVwKCkge1xuICAgIGlmICh0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9leG9QbGF5ZXIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3Jlc2l6ZUV4b1BsYXllcik7XG4gICAgICB0aGlzLmhhc3MhLmF1dGguZXh0ZXJuYWwhLmZpcmVNZXNzYWdlKHsgdHlwZTogXCJleG9wbGF5ZXIvc3RvcFwiIH0pO1xuICAgICAgdGhpcy5fZXhvUGxheWVyID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl92aWRlb0VsKSB7XG4gICAgICB0aGlzLl92aWRlb0VsLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgIHRoaXMuX3ZpZGVvRWwubG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0RXJyb3IoKSB7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZXJyb3JJc0ZhdGFsID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9zZXRGYXRhbEVycm9yKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXJyb3IgPSBlcnJvck1lc3NhZ2U7XG4gICAgdGhpcy5fZXJyb3JJc0ZhdGFsID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFJldHJ5YWJsZUVycm9yKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXJyb3IgPSBlcnJvck1lc3NhZ2U7XG4gICAgdGhpcy5fZXJyb3JJc0ZhdGFsID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkZWREYXRhKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmaXJlRXZlbnQodGhpcywgXCJsb2FkXCIpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0R3JvdXAge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCxcbiAgICAgIHZpZGVvIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIHZpZGVvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLXZpZGVvLW1heC1oZWlnaHQsIGNhbGMoMTAwdmggLSA5N3B4KSk7XG4gICAgICB9XG5cbiAgICAgIC5mYXRhbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMDBweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAucmV0cnkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1obHMtcGxheWVyXCI6IEhhSExTUGxheWVyO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ha-hls-player.ts\n");

/***/ })

}]);