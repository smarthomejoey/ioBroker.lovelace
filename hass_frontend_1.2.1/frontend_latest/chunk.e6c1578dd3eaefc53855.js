(self.webpackJsonp=self.webpackJsonp||[]).push([[194],{512:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));const i="5FE44367",n="http://192.168.1.234:8123"},695:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a}));var i=r(696),n=r(512);const o=(e,t)=>e.sendMessage({type:"connect",refreshToken:t.data.refresh_token,clientId:t.data.clientId,hassUrl:i.b?n.b:t.data.hassUrl}),s=(e,t,r)=>e.sendMessage({type:"show_lovelace_view",viewPath:t,urlPath:r||null}),a=(e,t)=>{if(!e.castConnectedToOurHass)return new Promise(r=>{const i=e.addEventListener("connection-changed",()=>{e.castConnectedToOurHass&&(i(),r())});o(e,t)})}},696:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return s}));var i=r(512);const n=!1,o=n?i.a:"B12CE3CA",s="urn:x-cast:com.nabucasa.hast"},919:function(e,t,r){"use strict";r.r(t);r(110);var i=r(0),n=r(50),o=r(695);r(150);function s(e){var t,r=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function h(e,t,r){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=f(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var h=t((function(e){n.initializeInstanceElements(e,p.elements)}),r),p=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(l(o.descriptor)||l(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}a(o,n)}else t.push(o)}return t}(h.d.map(s)),e);n.initializeClassElements(h.F,p.elements),n.runClassFinishers(h.F,p.finishers)}([Object(i.d)("hui-cast-row")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"field",decorators:[Object(i.h)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_config",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_castManager",value:void 0},{kind:"field",decorators:[Object(i.h)()],key:"_noHTTPS",value:()=>!1},{kind:"method",key:"setConfig",value:function(e){if(!e||void 0===e.view||null===e.view)throw new Error("Invalid Configuration: 'view' required");this._config=Object.assign({icon:"hass:television",name:"ioBroker Cast"},e)}},{kind:"method",key:"shouldUpdate",value:function(e){return!(1===e.size&&e.has("hass"))}},{kind:"method",key:"render",value:function(){if(!this._config)return i.f``;const e=this._castManager&&this._castManager.status&&this._config.view===this._castManager.status.lovelacePath&&this._config.dashboard===this._castManager.status.urlPath;return i.f`
      <ha-icon .icon="${this._config.icon}"></ha-icon>
      <div class="flex">
        <div class="name">${this._config.name}</div>
        ${this._noHTTPS?i.f` Cast requires HTTPS `:void 0===this._castManager?i.f``:null===this._castManager?i.f` Cast API unavailable `:"NO_DEVICES_AVAILABLE"===this._castManager.castState?i.f` No devices found `:i.f`
              <div class="controls">
                <google-cast-launcher></google-cast-launcher>
                <mwc-button
                  @click=${this._sendLovelace}
                  class=${Object(n.a)({inactive:!e})}
                  .unelevated=${e}
                  .disabled=${!this._castManager.status}
                >
                  SHOW
                </mwc-button>
              </div>
            `}
      </div>
    `}},{kind:"method",key:"firstUpdated",value:function(e){h(p(s.prototype),"firstUpdated",this).call(this,e),"http:"===location.protocol&&"localhost"!==location.hostname&&(this._noHTTPS=!0),r.e(205).then(r.bind(null,868)).then(({getCastManager:e})=>e(this.hass.auth).then(e=>{this._castManager=e,e.addEventListener("connection-changed",()=>{this.requestUpdate()}),e.addEventListener("state-changed",()=>{this.requestUpdate()})},()=>{this._castManager=null}))}},{kind:"method",key:"updated",value:function(e){h(p(s.prototype),"updated",this).call(this,e),this._config&&this._config.hide_if_unavailable&&(this.style.display=this._castManager&&"NO_DEVICES_AVAILABLE"!==this._castManager.castState?"":"none")}},{kind:"method",key:"_sendLovelace",value:async function(){await Object(o.c)(this._castManager,this.hass.auth),Object(o.b)(this._castManager,this._config.view,this._config.dashboard)}},{kind:"get",static:!0,key:"styles",value:function(){return i.c`
      :host {
        display: flex;
        align-items: center;
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      .flex {
        flex: 1;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .controls {
        display: flex;
        align-items: center;
      }
      google-cast-launcher {
        margin-right: 0.57em;
        cursor: pointer;
        display: inline-block;
        height: 24px;
        width: 24px;
      }
      .inactive {
        padding: 0 4px;
      }
    `}}]}}),i.a)}}]);
//# sourceMappingURL=chunk.e6c1578dd3eaefc53855.js.map