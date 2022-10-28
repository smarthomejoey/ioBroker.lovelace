"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[64204],{54211:function(e,r){r.N=void 0;var t=/^([^\w]*)(javascript|data|vbscript)/im,n=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,i=/^([^:]+):/gm,o=[".","/"];r.N=function(e){if(!e)return"about:blank";var r=e.replace(n,"").trim();if(function(e){return o.indexOf(e[0])>-1}(r))return r;var a=r.match(i);if(!a)return r;var c=a[0];return t.test(c)?"about:blank":r}},15493:function(e,r,t){function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(e,r)||i(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.d(r,{Q2:function(){return a},io:function(){return c},ou:function(){return s},j4:function(){return l},pc:function(){return u}});var a=function(){var e,r={},t=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw a}}}}(new URLSearchParams(location.search).entries());try{for(t.s();!(e=t.n()).done;){var o=n(e.value,2),a=o[0],c=o[1];r[a]=c}}catch(s){t.e(s)}finally{t.f()}return r},c=function(e){return new URLSearchParams(window.location.search).get(e)},s=function(e){var r=new URLSearchParams;return Object.entries(e).forEach((function(e){var t=n(e,2),i=t[0],o=t[1];r.append(i,o)})),r.toString()},l=function(e){var r=new URLSearchParams(window.location.search);return Object.entries(e).forEach((function(e){var t=n(e,2),i=t[0],o=t[1];r.set(i,o)})),r.toString()},u=function(e){var r=new URLSearchParams(window.location.search);return r.delete(e),r.toString()}},81582:function(e,r,t){t.d(r,{LZ:function(){return n},Q4:function(){return i},DJ:function(){return o},pB:function(){return a},SO:function(){return c},iJ:function(){return s},Nn:function(){return l},Ny:function(){return u},T0:function(){return d}});var n=["migration_error","setup_error","setup_retry"],i=["not_loaded","loaded","setup_error","setup_retry"],o=function(e,r,t){var n={type:"config_entries/subscribe"};return t&&t.type&&(n.type_filter=t.type),e.connection.subscribeMessage((function(e){return r(e)}),n)},a=function(e,r){var t={};return r&&(r.type&&(t.type_filter=r.type),r.domain&&(t.domain=r.domain)),e.callWS(Object.assign({type:"config_entries/get"},t))},c=function(e,r,t){return e.callWS(Object.assign({type:"config_entries/update",entry_id:r},t))},s=function(e,r){return e.callApi("DELETE","config/config_entries/entry/".concat(r))},l=function(e,r){return e.callApi("POST","config/config_entries/entry/".concat(r,"/reload"))},u=function(e,r){return e.callWS({type:"config_entries/disable",entry_id:r,disabled_by:"user"})},d=function(e,r){return e.callWS({type:"config_entries/disable",entry_id:r,disabled_by:null})}},26765:function(e,r,t){t.d(r,{Ys:function(){return a},g7:function(){return c},D9:function(){return s}});var n=t(47181),i=function(){return Promise.all([t.e(85084),t.e(82361),t.e(34821),t.e(72432)]).then(t.bind(t,1281))},o=function(e,r,t){return new Promise((function(o){var a=r.cancel,c=r.confirm;(0,n.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:i,dialogParams:Object.assign({},r,t,{cancel:function(){o(!(null==t||!t.prompt)&&null),a&&a()},confirm:function(e){o(null==t||!t.prompt||e),c&&c(e)}})})}))},a=function(e,r){return o(e,r)},c=function(e,r){return o(e,r,{confirmation:!0})},s=function(e,r){return o(e,r,{prompt:!0})}},70332:function(e,r,t){t.d(r,{B:function(){return o}});var n=t(47181),i=function(){return Promise.all([t.e(29563),t.e(98985),t.e(79071),t.e(24103),t.e(6294),t.e(85084),t.e(45507),t.e(82361),t.e(27184),t.e(3555),t.e(34821),t.e(81545),t.e(81751)]).then(t.bind(t,81751))},o=function(e,r){(0,n.B)(e,"show-dialog",{dialogTag:"dialog-zwave_js-add-node",dialogImport:i,dialogParams:r})}},60477:function(e,r,t){t.r(r),t.d(r,{getMyRedirects:function(){return B}});var n,i,o,a,c,s=t(54211),l=t(37500),u=t(33310),d=t(7323),f=t(78866),p=t(83849),h=t(15493),m=t(5986),y=(t(48811),t(27322));function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,r){return F(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(e,r)||R(e,r)||C()}function b(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function _(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function w(e,r){return w=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},w(e,r)}function k(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=U(e);if(r){var i=U(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return E(this,t)}}function E(e,r){if(r&&("object"===v(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){P=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach((function(t){r.forEach((function(r){r.kind===t&&"own"===r.placement&&this.defineClassElement(e,r)}),this)}),this)},initializeClassElements:function(e,r){var t=e.prototype;["method","field"].forEach((function(n){r.forEach((function(r){var i=r.placement;if(r.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:t;this.defineClassElement(o,r)}}),this)}),this)},defineClassElement:function(e,r){var t=r.descriptor;if("field"===r.kind){var n=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,r.key,t)},decorateClass:function(e,r){var t=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!O(e))return t.push(e);var r=this.decorateElement(e,i);t.push(r.element),t.push.apply(t,r.extras),n.push.apply(n,r.finishers)}),this),!r)return{elements:t,finishers:n};var o=this.decorateConstructor(t,r);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,r,t){var n=r[e.placement];if(!t&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,r){for(var t=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=this.fromElementDescriptor(e),s=this.toElementFinisherExtras((0,i[o])(c)||c);e=s.element,this.addElementPlacement(e,r),s.finisher&&n.push(s.finisher);var l=s.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],r);t.push.apply(t,l)}}return{element:e,finishers:n,extras:t}},decorateConstructor:function(e,r){for(var t=[],n=r.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,r[n])(i)||i);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){var r;if(void 0!==e)return(r=e,F(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||R(r)||C()).map((function(e){var r=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),r}),this)},toElementDescriptor:function(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=D(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:r,key:t,placement:n,descriptor:Object.assign({},i)};return"field"!==r?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r},toClassDescriptor:function(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,r){for(var t=0;t<r.length;t++){var n=(0,r[t])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}};return e}function j(e){var r,t=D(e.key);"method"===e.kind?r={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function z(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function O(e){return e.decorators&&e.decorators.length}function T(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function D(e){var r=function(e,r){if("object"!==v(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===v(r)?r:String(r)}function C(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function R(e,r){if(e){if("string"==typeof e)return x(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?x(e,r):void 0}}function x(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function F(e){if(Array.isArray(e))return e}function I(e,r,t){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,r,t){var n=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=U(e)););return e}(e,r);if(n){var i=Object.getOwnPropertyDescriptor(n,r);return i.get?i.get.call(t):i.value}},I(e,r,t||e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var B=function(e){return{application_credentials:{redirect:"/config/application_credentials"},developer_states:{redirect:"/developer-tools/state"},developer_services:{redirect:"/developer-tools/service"},developer_call_service:{redirect:"/developer-tools/service",params:{service:"string"}},developer_template:{redirect:"/developer-tools/template"},developer_events:{redirect:"/developer-tools/event"},developer_statistics:{redirect:"/developer-tools/statistics"},server_controls:{redirect:"/developer-tools/yaml"},config:{redirect:"/config/dashboard"},cloud:{component:"cloud",redirect:"/config/cloud"},config_flow_start:{redirect:"/config/integrations/add",params:{domain:"string"}},brand:{redirect:"/config/integrations/add",params:{brand:"string"}},integrations:{redirect:"/config/integrations"},config_mqtt:{component:"mqtt",redirect:"/config/mqtt"},config_zha:{component:"zha",redirect:"/config/zha/dashboard"},config_zwave_js:{component:"zwave_js",redirect:"/config/zwave_js/dashboard"},add_zigbee_device:{component:"zha",redirect:"/config/zha/add"},add_zwave_device:{component:"zwave_js",redirect:"/config/zwave_js/add"},config_energy:{component:"energy",redirect:"/config/energy/dashboard"},devices:{redirect:"/config/devices/dashboard"},entities:{redirect:"/config/entities"},energy:{component:"energy",redirect:"/energy"},areas:{redirect:"/config/areas/dashboard"},blueprint_import:{component:"blueprint",redirect:"/config/blueprint/dashboard/import",params:{blueprint_url:"url"}},blueprints:{component:"blueprint",redirect:"/config/blueprint/dashboard"},automations:{component:"automation",redirect:"/config/automation/dashboard"},scenes:{component:"scene",redirect:"/config/scene/dashboard"},scripts:{component:"script",redirect:"/config/script/dashboard"},helpers:{redirect:"/config/helpers"},tags:{component:"tag",redirect:"/config/tags"},lovelace_dashboards:{component:"lovelace",redirect:"/config/lovelace/dashboards"},lovelace_resources:{component:"lovelace",redirect:"/config/lovelace/resources"},oauth:{redirect:"/auth/external/callback",navigate_outside_spa:!0,params:{error:"string?",code:"string?",state:"string"}},people:{component:"person",redirect:"/config/person"},zones:{component:"zone",redirect:"/config/zone"},users:{redirect:"/config/users"},general:{redirect:"/config/general"},logs:{redirect:"/config/logs"},repairs:{component:"repairs",redirect:"/config/repairs"},info:{redirect:"/config/info"},system_health:{redirect:"/config/repairs?dialog=system-health"},hardware:{redirect:"/config/hardware"},storage:{redirect:"/config/storage"},network:{redirect:"/config/network"},analytics:{redirect:"/config/analytics"},updates:{redirect:"/config/updates"},system_dashboard:{redirect:"/config/system"},customize:{redirect:"/config/dashboard"},profile:{redirect:"/profile"},logbook:{component:"logbook",redirect:"/logbook"},history:{component:"history",redirect:"/history"},media_browser:{component:"media_source",redirect:"/media-browser"},backup:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_snapshots:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_backups:{component:e?"hassio":"backup",redirect:e?"/hassio/backups":"/config/backup"},supervisor_system:{redirect:"/config/system"},supervisor_logs:{redirect:"/config/logs"},supervisor_info:{redirect:"/config/info"},hacs_repository:{component:"hacs",redirect:"/hacs/_my_redirect/hacs_repository",params:{owner:"string",repository:"string",category:"string?"}}}};!function(e,r,t,n){var i=P();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=r((function(e){i.initializeInstanceElements(e,c.elements)}),t),c=i.decorateClass(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=r.find(t)))if(T(o.descriptor)||T(i.descriptor)){if(O(o)||O(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(O(o)){if(O(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}z(o,i)}else r.push(o)}return r}(a.d.map(j)),e);i.initializeClassElements(a.F,c.elements),i.runClassFinishers(a.F,c.finishers)}([(0,u.Mo)("ha-panel-my")],(function(e,r){var t=function(r){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&w(e,r)}(n,r);var t=k(n);function n(){var r;_(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=t.call.apply(t,[this].concat(o)),e(S(r)),r}return n}(r);return{F:t,d:[{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,u.Cb)()],key:"route",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_error",value:void 0},{kind:"field",key:"_redirect",value:void 0},{kind:"method",key:"connectedCallback",value:function(){var e=this;I(U(t.prototype),"connectedCallback",this).call(this);var r=this.route.path.substring(1),n=(0,d.p)(this.hass,"hassio");if(this._redirect=function(e,r){var t;return null===(t=B(r))||void 0===t?void 0:t[e]}(r,n),r.startsWith("supervisor")&&void 0===this._redirect)return n?void(0,p.c)("/hassio/_my_redirect/".concat(r).concat(window.location.search),{replace:!0}):void(this._error="no_supervisor");if(this._redirect){if(!this._redirect.component||(0,d.p)(this.hass,this._redirect.component)){var i;try{i=this._createRedirectUrl()}catch(c){return void(this._error="url_error")}this._redirect.navigate_outside_spa?location.assign(i):(0,p.c)(i,{replace:!0})}else if(this.hass.loadBackendTranslation("title",this._redirect.component),this._error="no_component",["add_zwave_device","add_zigbee_device"].includes(r)){var o=(0,h.Q2)(),a=this._redirect.component;this.hass.loadFragmentTranslation("config").then().then((function(){(0,f.D)(e,e.hass,a,{domain:o.domain,brand:o.brand})}))}}else this._error="not_supported"}},{kind:"method",key:"render",value:function(){if(this._error){var e;switch(this._error){case"not_supported":e=this.hass.localize("ui.panel.my.not_supported","link",(0,l.dy)(n||(n=b(['<a\n                target="_blank"\n                rel="noreferrer noopener"\n                href="https://my.home-assistant.io/faq.html#supported-pages"\n                >',"</a\n              >"])),this.hass.localize("ui.panel.my.faq_link")))||"This redirect is not supported.";break;case"no_component":e=this.hass.localize("ui.panel.my.component_not_loaded","integration",(0,l.dy)(i||(i=b(['<a\n                target="_blank"\n                rel="noreferrer noopener"\n                href=',"\n                >","</a\n              >"])),(0,y.R)(this.hass,"/integrations/".concat(this._redirect.component)),(0,m.Lh)(this.hass.localize,this._redirect.component)))||"This redirect is not supported.";break;case"no_supervisor":e=this.hass.localize("ui.panel.my.no_supervisor","docs_link",(0,l.dy)(o||(o=b(['<a\n              target="_blank"\n              rel="noreferrer noopener"\n              href=',"\n              >","</a\n            >"])),(0,y.R)(this.hass,"/installation"),this.hass.localize("ui.panel.my.documentation")));break;default:e=this.hass.localize("ui.panel.my.error")||"Unknown error"}return(0,l.dy)(a||(a=b(["<hass-error-screen\n        .error=","\n        .hass=","\n      ></hass-error-screen>"])),e,this.hass)}return(0,l.dy)(c||(c=b([""])))}},{kind:"method",key:"_createRedirectUrl",value:function(){var e=this._createRedirectParams();return"".concat(this._redirect.redirect).concat(e)}},{kind:"method",key:"_createRedirectParams",value:function(){var e=(0,h.Q2)();if(!this._redirect.params&&!Object.keys(e).length)return"";for(var r={},t=0,n=Object.entries(this._redirect.params||{});t<n.length;t++){var i=g(n[t],2),o=i[0],a=i[1];if(e[o]||!a.endsWith("?")){if(!e[o]||!this._checkParamType(a,e[o]))throw Error();r[o]=e[o]}}return"?".concat((0,h.ou)(r))}},{kind:"method",key:"_checkParamType",value:function(e,r){return"string"===e||"string?"===e||"url"===e&&(r&&r===(0,s.N)(r))}}]}}),l.oi)}}]);