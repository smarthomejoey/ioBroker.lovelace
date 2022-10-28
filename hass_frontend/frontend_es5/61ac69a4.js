/*! For license information please see 61ac69a4.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[14767],{63207:function(t,e,n){n(65660),n(15112);var r,i,o,u=n(9672),a=n(87156),c=n(50856),s=n(48175);(0,u.k)({_template:(0,c.d)(r||(i=["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"],o||(o=i.slice(0)),r=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(o)}})))),is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:s.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,a.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,a.vz)(this.root).appendChild(this._img))}})},15112:function(t,e,n){n.d(e,{P:function(){return o}});n(48175);var r=n(9672);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),t[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}var e,n,r;return e=t,(n=[{key:"value",get:function(){var e=this.type,n=this.key;if(e&&n)return t.types[e]&&t.types[e][n]},set:function(e){var n=this.type,r=this.key;n&&r&&(n=t.types[n]=t.types[n]||{},null==e?delete n[r]:n[r]=e)}},{key:"list",get:function(){if(this.type){var e=t.types[this.type];return e?Object.keys(e).map((function(t){return u[this.type][t]}),this):[]}}},{key:"byKey",value:function(t){return this.key=t,this.value}}])&&i(e.prototype,n),r&&i(e,r),t}();o[" "]=function(){},o.types={};var u=o.types;(0,r.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,n){var r=new o({type:t,key:e});return void 0!==n&&n!==r.value?r.value=n:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new o({type:this.type,key:t}).value}})},21560:function(t,e,n){n.d(e,{ZH:function(){return l},MT:function(){return u},U2:function(){return c},RV:function(){return o},t8:function(){return s}});var r,i=function(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()})).finally((function(){return clearInterval(t)})):Promise.resolve()};function o(t){return new Promise((function(e,n){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return n(t.error)}}))}function u(t,e){var n=i().then((function(){var n=indexedDB.open(t);return n.onupgradeneeded=function(){return n.result.createObjectStore(e)},o(n)}));return function(t,r){return n.then((function(n){return r(n.transaction(e,t).objectStore(e))}))}}function a(){return r||(r=u("keyval-store","keyval")),r}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a();return e("readonly",(function(e){return o(e.get(t))}))}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a();return n("readwrite",(function(n){return n.put(e,t),o(n.transaction)}))}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a();return t("readwrite",(function(t){return t.clear(),o(t.transaction)}))}},19596:function(t,e,n){n.d(e,{s:function(){return w}});var r=n(81563),i=n(38941);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function u(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}},s(t,e,n||t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(v){return!1}}();return function(){var n,r=y(t);if(e){var i=y(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function p(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v=function t(e,n){var r,i,o=e._$AN;if(void 0===o)return!1;var u,a=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=p(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){a=!0,o=t},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw o}}}}(o);try{for(a.s();!(u=a.n()).done;){var c=u.value;null===(i=(r=c)._$AO)||void 0===i||i.call(r,n,!1),t(c,n)}}catch(s){a.e(s)}finally{a.f()}return!0},_=function(t){var e,n;do{if(void 0===(e=t._$AM))break;(n=e._$AN).delete(t),t=e}while(0===(null==n?void 0:n.size))},m=function(t){for(var e;e=t._$AM;t=e){var n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),A(e)}};function b(t){void 0!==this._$AN?(_(this),this._$AM=t,m(this)):this._$AM=t}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(r))for(var o=n;o<r.length;o++)v(r[o],!1),_(r[o]);else null!=r&&(v(r,!1),_(r));else v(this,t)}var A=function(t){var e,n,r,o;t.type==i.pX.CHILD&&(null!==(e=(r=t)._$AP)&&void 0!==e||(r._$AP=g),null!==(n=(o=t)._$AQ)&&void 0!==n||(o._$AQ=b))},w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(h,t);var e,n,i,o=f(h);function h(){var t;return a(this,h),(t=o.apply(this,arguments))._$AN=void 0,t}return e=h,n=[{key:"_$AT",value:function(t,e,n){s(y(h.prototype),"_$AT",this).call(this,t,e,n),m(this),this.isConnected=t._$AU}},{key:"_$AO",value:function(t){var e,n,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),r&&(v(this,t),_(this))}},{key:"setValue",value:function(t){if((0,r.OR)(this._$Ct))this._$Ct._$AI(t,this);else{var e=u(this._$Ct._$AH);e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}},{key:"disconnected",value:function(){}},{key:"reconnected",value:function(){}}],n&&c(e.prototype,n),i&&c(e,i),h}(i.Xe)}}]);