(self.webpackJsonp=self.webpackJsonp||[]).push([[132],{241:function(t,e,n){"use strict";n(45);var r=n(54),o=document.createElement("template");o.setAttribute("style","display: none;"),o.innerHTML='<dom-module id="ha-style">\n  <template>\n    <style>\n    '.concat(r.b.cssText,"\n    </style>\n  </template>\n</dom-module>"),document.head.appendChild(o.content)},874:function(t,e,n){"use strict";n.r(e);n(188);var r=n(3),o=n(30);n(163),n(241);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n      <style include="ha-style">\n        iframe {\n          border: 0;\n          width: 100%;\n          position: absolute;\n          height: calc(100% - 64px);\n          background-color: var(--primary-background-color);\n        }\n      </style>\n      <app-toolbar>\n        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>\n        <div main-title>[[panel.title]]</div>\n      </app-toolbar>\n\n      <iframe\n        src="[[panel.config.url]]"\n        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"\n        allowfullscreen="true"\n        webkitallowfullscreen="true"\n        mozallowfullscreen="true"\n      ></iframe>\n    ']);return u=function(){return t},t}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(s,t);var e,n,o,c=f(s);function s(){return l(this,s),c.apply(this,arguments)}return e=s,o=[{key:"template",get:function(){return Object(r.a)(u())}},{key:"properties",get:function(){return{hass:Object,narrow:Boolean,panel:Object}}}],(n=null)&&a(e.prototype,n),o&&a(e,o),s}(o.a);customElements.define("ha-panel-iframe",y)}}]);
//# sourceMappingURL=chunk.d8b9f55ed7d812cdb5c9.js.map