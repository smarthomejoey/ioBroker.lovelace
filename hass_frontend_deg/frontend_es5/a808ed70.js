/*! For license information please see a808ed70.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4654,5970],{55907:function(t,e,n){n.d(e,{$:function(){return r}});var r=function(){function t(){this.rafIDs=new Map}return t.prototype.request=function(t,e){var n=this;this.cancel(t);var r=requestAnimationFrame((function(r){n.rafIDs.delete(t),e(r)}));this.rafIDs.set(t,r)},t.prototype.cancel=function(t){var e=this.rafIDs.get(t);e&&(cancelAnimationFrame(e),this.rafIDs.delete(t))},t.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach((function(e,n){t.cancel(n)}))},t.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach((function(e,n){t.push(n)})),t},t}()},18601:function(t,e,n){n.d(e,{qN:function(){return c.q},Wg:function(){return g}});var r,o,i=n(87480),s=n(5701),c=n(78220);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},f(t,e,n||t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var y=null!==(o=null===(r=window.ShadyDOM)||void 0===r?void 0:r.inUse)&&void 0!==o&&o,g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(i,t);var e,n,r,o=d(i);function i(){var t;return a(this,i),(t=o.apply(this,arguments)).disabled=!1,t.containingForm=null,t.formDataListener=function(e){t.disabled||t.setFormData(e.formData)},t}return e=i,n=[{key:"findFormElement",value:function(){if(!this.shadowRoot||y)return null;for(var t=this.getRootNode().querySelectorAll("form"),e=0,n=Array.from(t);e<n.length;e++){var r=n[e];if(r.contains(this))return r}return null}},{key:"connectedCallback",value:function(){var t;f(v(i.prototype),"connectedCallback",this).call(this),this.containingForm=this.findFormElement(),null===(t=this.containingForm)||void 0===t||t.addEventListener("formdata",this.formDataListener)}},{key:"disconnectedCallback",value:function(){var t;f(v(i.prototype),"disconnectedCallback",this).call(this),null===(t=this.containingForm)||void 0===t||t.removeEventListener("formdata",this.formDataListener),this.containingForm=null}},{key:"click",value:function(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}},{key:"firstUpdated",value:function(){var t=this;f(v(i.prototype),"firstUpdated",this).call(this),this.shadowRoot&&this.mdcRoot.addEventListener("change",(function(e){t.dispatchEvent(new Event("change",e))}))}}],n&&u(e.prototype,n),r&&u(e,r),i}(c.H);g.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,i.__decorate)([(0,s.C)({type:Boolean})],g.prototype,"disabled",void 0)},14114:function(t,e,n){n.d(e,{P:function(){return r}});var r=function(t){return function(e,n){if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){var r=e.constructor._observers;e.constructor._observers=new Map,r.forEach((function(t,n){return e.constructor._observers.set(n,t)}))}}else{e.constructor._observers=new Map;var o=e.updated;e.updated=function(t){var e=this;o.call(this,t),t.forEach((function(t,n){var r=e.constructor._observers.get(n);void 0!==r&&r.call(e,e[n],t)}))}}e.constructor._observers.set(n,t)}}},63207:function(t,e,n){n(65660),n(15112);var r,o,i,s=n(9672),c=n(87156),l=n(50856),a=n(94604);(0,s.k)({_template:(0,l.d)(r||(o=["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"],i||(i=o.slice(0)),r=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(i)}})))),is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:a.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,c.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,c.vz)(this.root).appendChild(this._img))}})},15112:function(t,e,n){n.d(e,{P:function(){return i}});n(94604);var r=n(9672);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),t[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}var e,n,r;return e=t,(n=[{key:"value",get:function(){var e=this.type,n=this.key;if(e&&n)return t.types[e]&&t.types[e][n]},set:function(e){var n=this.type,r=this.key;n&&r&&(n=t.types[n]=t.types[n]||{},null==e?delete n[r]:n[r]=e)}},{key:"list",get:function(){if(this.type){var e=t.types[this.type];return e?Object.keys(e).map((function(t){return s[this.type][t]}),this):[]}}},{key:"byKey",value:function(t){return this.key=t,this.value}}])&&o(e.prototype,n),r&&o(e,r),t}();i[" "]=function(){},i.types={};var s=i.types;(0,r.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,n){var r=new i({type:t,key:e});return void 0!==n&&n!==r.value?r.value=n:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new i({type:this.type,key:t}).value}})},67810:function(t,e,n){n.d(e,{o:function(){return i}});n(94604);var r=n(87156);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var i={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),e)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var n=this.domHost;this.scrollTarget=n&&n.$?n.$[t]:(0,r.vz)(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var n;"object"===o(t)?(n=t.left,e=t.top):n=t,n=n||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(n,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=n,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var n=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),n.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(n.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}}},21560:function(t,e,n){n.d(e,{ZH:function(){return u},MT:function(){return s},U2:function(){return l},RV:function(){return i},t8:function(){return a}});var r,o=function(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()})).finally((function(){return clearInterval(t)})):Promise.resolve()};function i(t){return new Promise((function(e,n){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return n(t.error)}}))}function s(t,e){var n=o().then((function(){var n=indexedDB.open(t);return n.onupgradeneeded=function(){return n.result.createObjectStore(e)},i(n)}));return function(t,r){return n.then((function(n){return r(n.transaction(e,t).objectStore(e))}))}}function c(){return r||(r=s("keyval-store","keyval")),r}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return e("readonly",(function(e){return i(e.get(t))}))}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return n("readwrite",(function(n){return n.put(e,t),i(n.transaction)}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c();return t("readwrite",(function(t){return t.clear(),i(t.transaction)}))}},32930:function(t,e,n){n.d(e,{v:function(){return o}});var r=n(39030);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return(0,r.eZ)({descriptor:function(r){return{get:function(){var r,o,i,s="slot"+(t?"[name=".concat(t,"]"):":not([name])"),c=null!==(i=null===(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(s))||void 0===o?void 0:o.assignedNodes({flatten:e}))&&void 0!==i?i:[];return n&&(c=c.filter((function(t){return t.nodeType===Node.ELEMENT_NODE&&t.matches(n)}))),c},enumerable:!0,configurable:!0}}})}},57835:function(t,e,n){n.d(e,{Xe:function(){return r.Xe},pX:function(){return r.pX},XM:function(){return r.XM}});var r=n(38941)}}]);