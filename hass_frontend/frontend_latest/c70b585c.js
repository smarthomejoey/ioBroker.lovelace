"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[95795],{11950:(e,t,r)=>{r.d(t,{l:()=>i});const i=async(e,t)=>new Promise((r=>{const i=t(e,(e=>{i(),r(e)}))}))},73826:(e,t,r)=>{r.d(t,{f:()=>m});var i=r(33310);function n(e,t,r,i){var n=o();if(i)for(var d=0;d<i.length;d++)n=i[d](n);var u=t((function(e){n.initializeInstanceElements(e,f.elements)}),r),f=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(l(o.descriptor)||l(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}a(o,n)}else t.push(o)}return t}(u.d.map(s)),e);return n.initializeClassElements(u.F,f.elements),n.runClassFinishers(u.F,f.finishers)}function o(){o=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function s(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function h(e,t,r){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},h(e,t,r||e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}const m=e=>n(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){h(p(r.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(h(p(r.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if(h(p(r.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},95795:(e,t,r)=>{r.r(t),r.d(t,{HuiAreaCard:()=>$});r(91156);var i=r(37500),n=r(33310),o=r(8636),s=r(14516),a=r(49706),c=r(62877),l=r(58831),d=r(16023),u=r(83849),f=r(18457),h=r(11950),p=(r(3143),r(22098),r(10983),r(87037),r(52039),r(97282),r(57066)),m=r(57292),v=r(56007),y=r(74186),b=r(62359),g=r(73826);r(75502);function k(){k=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!E(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=P(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function _(e){var t,r=P(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function w(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function E(e){return e.decorators&&e.decorators.length}function C(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function P(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function D(e,t,r){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},D(e,t,r||e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}const x=["sensor"],j=["binary_sensor"],z=["light","switch","fan"],T=["camera"],M={sensor:["temperature","humidity"],binary_sensor:["motion","moisture"]},H={light:{on:"M17 16V18C17 18.55 16.53 19 16 19H12C11.42 19 11 18.55 11 18V16C8.77 14.34 8.32 11.21 10 9S14.77 6.34 17 8 19.63 12.79 18 15C17.69 15.38 17.35 15.72 17 16M16 20H12V21C12 21.55 12.42 22 13 22H15C15.53 22 16 21.55 16 21M7.66 15H7V16C7 16.55 7.42 17 8 17H9V16.88C8.44 16.33 8 15.7 7.66 15M13.58 5C12.46 2.47 9.5 1.33 7 2.45S3.31 6.5 4.43 9.04C4.77 9.81 5.3 10.5 6 11V13C6 13.55 6.42 14 7 14H7.28C7.07 13.35 6.97 12.68 7 12C6.97 8.29 9.87 5.21 13.58 5Z",off:"M20.84 22.73L16.74 18.63C16.55 18.85 16.29 19 16 19H12C11.42 19 11 18.55 11 18V16C9.37 14.8 8.71 12.82 9.1 11L7.5 9.39C7.17 10.2 6.97 11.08 7 12C6.97 12.68 7.07 13.35 7.28 14H7C6.42 14 6 13.55 6 13V11C5.3 10.5 4.77 9.81 4.43 9.04C4 8.05 3.91 7 4.12 6L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M13.58 5C12.46 2.47 9.5 1.33 7 2.45C6.68 2.58 6.39 2.75 6.13 2.93L9.67 6.47C10.76 5.63 12.1 5.08 13.58 5M18.06 14.86C19.6 12.66 19.14 9.62 17 8C15.2 6.67 12.84 6.72 11.12 7.92L18.06 14.86M12 21C12 21.55 12.42 22 13 22H15C15.53 22 16 21.55 16 21V20H12V21M7 15V16C7 16.55 7.42 17 8 17H9V16.88C8.43 16.33 8 15.7 7.66 15H7Z"},switch:{on:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z",off:"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z"},fan:{on:(0,d.K)("fan"),off:(0,d.K)("fan")},sensor:{temperature:"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",humidity:"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z"},binary_sensor:{motion:"M13.5,5.5C14.59,5.5 15.5,4.58 15.5,3.5C15.5,2.38 14.59,1.5 13.5,1.5C12.39,1.5 11.5,2.38 11.5,3.5C11.5,4.58 12.39,5.5 13.5,5.5M9.89,19.38L10.89,15L13,17V23H15V15.5L12.89,13.5L13.5,10.5C14.79,12 16.79,13 19,13V11C17.09,11 15.5,10 14.69,8.58L13.69,7C13.29,6.38 12.69,6 12,6C11.69,6 11.5,6.08 11.19,6.08L6,8.28V13H8V9.58L9.79,8.88L8.19,17L3.29,16L2.89,18L9.89,19.38Z",moisture:"M10 3.25C10 3.25 16 10 16 14C16 17.31 13.31 20 10 20S4 17.31 4 14C4 10 10 3.25 10 3.25M20 7V13H18V7H20M18 17H20V15H18V17Z"}};let $=function(e,t,r,i){var n=k();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(C(o.descriptor)||C(n.descriptor)){if(E(o)||E(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(E(o)){if(E(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}w(o,n)}else t.push(o)}return t}(s.d.map(_)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("hui-area-card")],(function(e,t){class d extends t{constructor(...t){super(...t),e(this)}}return{F:d,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([r.e(29563),r.e(98985),r.e(24103),r.e(88278),r.e(6294),r.e(41985),r.e(78874),r.e(45507),r.e(49848),r.e(77576),r.e(12545),r.e(26272),r.e(13701),r.e(51229)]).then(r.bind(r,36741)),document.createElement("hui-area-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:async function(e){var t;return{type:"area",area:(null===(t=(await(0,h.l)(e.connection,p.sG))[0])||void 0===t?void 0:t.area_id)||""}}},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_entities",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_devices",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_areas",value:void 0},{kind:"field",key:"_entitiesByDomain",value:()=>(0,s.Z)(((e,t,r,i)=>{const n=r.filter((r=>!r.entity_category&&!r.hidden_by&&(r.area_id?r.area_id===e:r.device_id&&t.has(r.device_id)))).map((e=>e.entity_id)),o={};for(const e of n){const t=(0,l.M)(e);if(!(z.includes(t)||x.includes(t)||j.includes(t)||T.includes(t)))continue;const r=i[e];r&&((!x.includes(t)&&!j.includes(t)||M[t].includes(r.attributes.device_class||""))&&(t in o||(o[t]=[]),o[t].push(r)))}return o}))},{kind:"method",key:"_isOn",value:function(e,t){const r=this._entitiesByDomain(this._config.area,this._devicesInArea(this._config.area,this._devices),this._entities,this.hass.states)[e];if(r)return(t?r.filter((e=>e.attributes.device_class===t)):r).some((e=>!v.V_.includes(e.state)&&!a.tj.includes(e.state)))}},{kind:"method",key:"_average",value:function(e,t){const r=this._entitiesByDomain(this._config.area,this._devicesInArea(this._config.area,this._devices),this._entities,this.hass.states)[e].filter((e=>!t||e.attributes.device_class===t));if(!r)return;let i;const n=r.filter((e=>!(!e.attributes.unit_of_measurement||isNaN(Number(e.state)))&&(i?e.attributes.unit_of_measurement===i:(i=e.attributes.unit_of_measurement,!0))));if(!n.length)return;const o=n.reduce(((e,t)=>e+Number(t.state)),0);return`${(0,f.uf)(o/n.length,this.hass.locale,{maximumFractionDigits:1})} ${i}`}},{kind:"field",key:"_area",value:()=>(0,s.Z)(((e,t)=>t.find((t=>t.area_id===e))||null))},{kind:"field",key:"_devicesInArea",value:()=>(0,s.Z)(((e,t)=>new Set(e?t.filter((t=>t.area_id===e)).map((e=>e.id)):[])))},{kind:"method",key:"hassSubscribe",value:function(){return[(0,p.sG)(this.hass.connection,(e=>{this._areas=e})),(0,m.q4)(this.hass.connection,(e=>{this._devices=e})),(0,y.LM)(this.hass.connection,(e=>{this._entities=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){if(!e.area)throw new Error("Area Required");this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("_config")||!this._config)return!0;if(e.has("_devicesInArea")||e.has("_areas")||e.has("_entities"))return!0;if(!e.has("hass"))return!1;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.locale!==this.hass.locale)return!0;if(!this._devices||!this._devicesInArea(this._config.area,this._devices)||!this._entities)return!1;const r=this._entitiesByDomain(this._config.area,this._devicesInArea(this._config.area,this._devices),this._entities,this.hass.states);for(const e of Object.values(r))for(const r of e)if(t.states[r.entity_id]!==r)return!0;return!1}},{kind:"method",key:"render",value:function(){if(!(this._config&&this.hass&&this._areas&&this._devices&&this._entities))return i.dy``;const e=this._entitiesByDomain(this._config.area,this._devicesInArea(this._config.area,this._devices),this._entities,this.hass.states),t=this._area(this._config.area,this._areas);if(null===t)return i.dy`
        <hui-warning>
          ${this.hass.localize("ui.card.area.area_not_found")}
        </hui-warning>
      `;const r=[];let n;return x.forEach((t=>{t in e&&M[t].forEach((n=>{e[t].some((e=>e.attributes.device_class===n))&&r.push(i.dy`
            ${H[t][n]?i.dy`<ha-svg-icon
                  .path=${H[t][n]}
                ></ha-svg-icon>`:""}
            ${this._average(t,n)}
          `)}))})),this._config.show_camera&&"camera"in e&&(n=e.camera[0].entity_id),i.dy`
      <ha-card class=${t.picture||n?"image":""}>
        ${t.picture||n?i.dy`<hui-image
              .config=${this._config}
              .hass=${this.hass}
              .image=${t.picture?t.picture:void 0}
              .cameraImage=${n}
              aspectRatio="16:9"
            ></hui-image>`:""}

        <div
          class="container ${(0,o.$)({navigate:void 0!==this._config.navigation_path})}"
          @click=${this._handleNavigation}
        >
          <div class="alerts">
            ${j.map((t=>t in e?M[t].map((e=>this._isOn(t,e)?i.dy`
                      ${H[t][e]?i.dy`<ha-svg-icon
                            .path=${H[t][e]}
                          ></ha-svg-icon>`:""}
                    `:"")):""))}
          </div>
          <div class="bottom">
            <div>
              <div class="name">${t.name}</div>
              ${r.length?i.dy`<div class="sensors">${r}</div>`:""}
            </div>
            <div class="buttons">
              ${z.map((t=>{if(!(t in e))return"";const r=this._isOn(t);return z.includes(t)?i.dy`
                      <ha-icon-button
                        class=${r?"on":"off"}
                        .path=${H[t][r?"on":"off"]}
                        .domain=${t}
                        @click=${this._toggle}
                      >
                      </ha-icon-button>
                    `:""}))}
            </div>
          </div>
        </div>
      </ha-card>
    `}},{kind:"method",key:"updated",value:function(e){if(D(O(d.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),r=e.get("_config");(!e.has("hass")||t&&t.themes===this.hass.themes)&&(!e.has("_config")||r&&r.theme===this._config.theme)||(0,c.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_handleNavigation",value:function(){this._config.navigation_path&&(0,u.c)(this._config.navigation_path)}},{kind:"method",key:"_toggle",value:function(e){e.stopPropagation();const t=e.currentTarget.domain;z.includes(t)&&this.hass.callService(t,this._isOn(t)?"turn_off":"turn_on",void 0,{area_id:this._config.area}),(0,b.j)("light")}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      ha-card {
        overflow: hidden;
        position: relative;
        padding-bottom: 56.25%;
        background-size: cover;
      }

      ha-card.image {
        padding-bottom: 0;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(
          0,
          rgba(33, 33, 33, 0.9) 0%,
          rgba(33, 33, 33, 0) 45%
        );
      }

      ha-card:not(.image) .container::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: var(--sidebar-selected-icon-color);
        opacity: 0.12;
      }

      .sensors {
        color: #e3e3e3;
        font-size: 16px;
        --mdc-icon-size: 24px;
        opacity: 0.6;
        margin-top: 8px;
      }

      .alerts {
        padding: 16px;
      }

      .alerts ha-svg-icon {
        background: var(--accent-color);
        color: var(--text-accent-color, var(--text-primary-color));
        padding: 8px;
        border-radius: 50%;
      }

      .name {
        color: white;
        font-size: 24px;
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
      }

      .navigate {
        cursor: pointer;
      }

      ha-icon-button {
        color: white;
        background-color: var(--area-button-color, #727272b2);
        border-radius: 50%;
        margin-left: 8px;
        --mdc-icon-button-size: 44px;
      }
      .on {
        color: var(--paper-item-icon-active-color, #fdd835);
      }
    `}}]}}),(0,g.f)(i.oi))}}]);
//# sourceMappingURL=c70b585c.js.map