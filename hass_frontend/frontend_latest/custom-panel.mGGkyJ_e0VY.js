/*! For license information please see custom-panel.mGGkyJ_e0VY.js.LICENSE.txt */
var t,e,o={47181:(t,e,o)=>{o.d(e,{B:()=>i});const i=(t,e,o,i)=>{i=i||{},o=null==o?{}:o;const r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=o,t.dispatchEvent(r),r}},30418:(t,e,o)=>{o.d(e,{E:()=>r});const i="ha-main-window",r=window.name===i?window:parent.name===i?parent:top},11654:(t,e,o)=>{o.d(e,{$c:()=>s,Qx:()=>n,e$:()=>l});var i=o(68144);const r=i.iv`button.link{background:0 0;color:inherit;border:none;padding:0;font:inherit;text-align:left;text-decoration:underline;cursor:pointer;outline:0}`,n=i.iv`:host{font-family:var(--paper-font-body1_-_font-family);-webkit-font-smoothing:var(--paper-font-body1_-_-webkit-font-smoothing);font-size:var(--paper-font-body1_-_font-size);font-weight:var(--paper-font-body1_-_font-weight);line-height:var(--paper-font-body1_-_line-height)}app-header div[sticky]{height:48px}app-toolbar [main-title]{margin-left:20px}h1{font-family:var(--paper-font-headline_-_font-family);-webkit-font-smoothing:var(--paper-font-headline_-_-webkit-font-smoothing);white-space:var(--paper-font-headline_-_white-space);overflow:var(--paper-font-headline_-_overflow);text-overflow:var(--paper-font-headline_-_text-overflow);font-size:var(--paper-font-headline_-_font-size);font-weight:var(--paper-font-headline_-_font-weight);line-height:var(--paper-font-headline_-_line-height)}h2{font-family:var(--paper-font-title_-_font-family);-webkit-font-smoothing:var(--paper-font-title_-_-webkit-font-smoothing);white-space:var(--paper-font-title_-_white-space);overflow:var(--paper-font-title_-_overflow);text-overflow:var(--paper-font-title_-_text-overflow);font-size:var(--paper-font-title_-_font-size);font-weight:var(--paper-font-title_-_font-weight);line-height:var(--paper-font-title_-_line-height)}h3{font-family:var(--paper-font-subhead_-_font-family);-webkit-font-smoothing:var(--paper-font-subhead_-_-webkit-font-smoothing);white-space:var(--paper-font-subhead_-_white-space);overflow:var(--paper-font-subhead_-_overflow);text-overflow:var(--paper-font-subhead_-_text-overflow);font-size:var(--paper-font-subhead_-_font-size);font-weight:var(--paper-font-subhead_-_font-weight);line-height:var(--paper-font-subhead_-_line-height)}a{color:var(--primary-color)}.secondary{color:var(--secondary-text-color)}.error{color:var(--error-color)}.warning{color:var(--error-color)}mwc-button.warning{--mdc-theme-primary:var(--error-color)}${r} .card-actions a{text-decoration:none}.card-actions .warning{--mdc-theme-primary:var(--error-color)}.layout.horizontal,.layout.vertical{display:flex}.layout.inline{display:inline-flex}.layout.horizontal{flex-direction:row}.layout.vertical{flex-direction:column}.layout.wrap{flex-wrap:wrap}.layout.no-wrap{flex-wrap:nowrap}.layout.center,.layout.center-center{align-items:center}.layout.bottom{align-items:flex-end}.layout.center-center,.layout.center-justified{justify-content:center}.flex{flex:1;flex-basis:0.000000001px}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.layout.justified{justify-content:space-between}`,s=(i.iv`ha-dialog{--mdc-dialog-min-width:400px;--mdc-dialog-max-width:600px;--mdc-dialog-max-width:min(600px, 95vw);--justify-action-buttons:space-between}ha-dialog .form{color:var(--primary-text-color)}a{color:var(--primary-color)}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-min-width:calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );--mdc-dialog-max-width:calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );--mdc-dialog-min-height:100%;--mdc-dialog-max-height:100%;--vertical-align-dialog:flex-end;--ha-dialog-border-radius:0}}ha-button.warning,mwc-button.warning{--mdc-theme-primary:var(--error-color)}.error{color:var(--error-color)}`,i.iv`.ha-scrollbar::-webkit-scrollbar{width:.4rem;height:.4rem}.ha-scrollbar::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:var(--scrollbar-thumb-color)}.ha-scrollbar{overflow-y:auto;scrollbar-color:var(--scrollbar-thumb-color) transparent;scrollbar-width:thin}`),l=i.iv`body{background-color:var(--primary-background-color);color:var(--primary-text-color);height:calc(100vh - 32px);width:100vw}`},15304:(t,e,o)=>{var i;o.d(e,{Jb:()=>C,Ld:()=>P,YP:()=>S,dy:()=>x,sY:()=>K});const r=window,n=r.trustedTypes,s=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,h="?"+a,d=`<${h}>`,c=document,p=()=>c.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,f=t=>v(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),m="[ \t\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,$=/>/g,g=RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,w=/"/g,A=/^(?:script|style|textarea|title)$/i,E=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),x=E(1),S=E(2),C=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),k=new WeakMap,U=c.createTreeWalker(c,129,null,!1);function H(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const O=(t,e)=>{const o=t.length-1,i=[];let r,n=2===e?"<svg>":"",s=_;for(let e=0;e<o;e++){const o=t[e];let h,c,p=-1,u=0;for(;u<o.length&&(s.lastIndex=u,c=s.exec(o),null!==c);)u=s.lastIndex,s===_?"!--"===c[1]?s=y:void 0!==c[1]?s=$:void 0!==c[2]?(A.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=g):void 0!==c[3]&&(s=g):s===g?">"===c[0]?(s=null!=r?r:_,p=-1):void 0===c[1]?p=-2:(p=s.lastIndex-c[2].length,h=c[1],s=void 0===c[3]?g:'"'===c[3]?w:b):s===w||s===b?s=g:s===y||s===$?s=_:(s=g,r=void 0);const v=s===g&&t[e+1].startsWith("/>")?" ":"";n+=s===_?o+d:p>=0?(i.push(h),o.slice(0,p)+l+o.slice(p)+a+v):o+a+(-2===p?(i.push(void 0),e):v)}return[H(t,n+(t[o]||"<?>")+(2===e?"</svg>":"")),i]};class j{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,s=0;const d=t.length-1,c=this.parts,[u,v]=O(t,e);if(this.el=j.createElement(u,o),U.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=U.nextNode())&&c.length<d;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(l)||e.startsWith(a)){const o=v[s++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+l).split(a),e=/([.?@])?(.*)/.exec(o);c.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?L:"?"===e[1]?B:"@"===e[1]?D:R})}else c.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(A.test(i.tagName)){const t=i.textContent.split(a),e=t.length-1;if(e>0){i.textContent=n?n.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],p()),U.nextNode(),c.push({type:2,index:++r});i.append(t[e],p())}}}else if(8===i.nodeType)if(i.data===h)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(a,t+1));)c.push({type:7,index:r}),t+=a.length-1}r++}}static createElement(t,e){const o=c.createElement("template");return o.innerHTML=t,o}}function N(t,e,o=t,i){var r,n,s,l;if(e===C)return e;let a=void 0!==i?null===(r=o._$Co)||void 0===r?void 0:r[i]:o._$Cl;const h=u(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,o,i)),void 0!==i?(null!==(s=(l=o)._$Co)&&void 0!==s?s:l._$Co=[])[i]=a:o._$Cl=a),void 0!==a&&(e=N(t,a._$AS(t,e.values),a,i)),e}class T{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(o,!0);U.currentNode=r;let n=U.nextNode(),s=0,l=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new M(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new I(n,this,t)),this._$AV.push(e),a=i[++l]}s!==(null==a?void 0:a.index)&&(n=U.nextNode(),s++)}return U.currentNode=c,r}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class M{constructor(t,e,o,i){var r;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),u(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==C&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):f(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(c.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=j.createElement(H(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(o);else{const t=new T(r,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=k.get(t.strings);return void 0===e&&k.set(t.strings,e=new j(t)),e}T(t){v(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new M(this.k(p()),this.k(p()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class R{constructor(t,e,o,i,r){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const r=this.strings;let n=!1;if(void 0===r)t=N(this,t,e,0),n=!u(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{const i=t;let s,l;for(t=r[0],s=0;s<r.length-1;s++)l=N(this,i[o+s],e,s),l===C&&(l=this._$AH[s]),n||(n=!u(l)||l!==this._$AH[s]),l===P?t=P:t!==P&&(t+=(null!=l?l:"")+r[s+1]),this._$AH[s]=l}n&&!i&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}const z=n?n.emptyScript:"";class B extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,z):this.element.removeAttribute(this.name)}}class D extends R{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=N(this,t,e,0))&&void 0!==o?o:P)===C)return;const i=this._$AH,r=t===P&&i!==P||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==P&&(i===P||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class I{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const V=r.litHtmlPolyfillSupport;null==V||V(j,M),(null!==(i=r.litHtmlVersions)&&void 0!==i?i:r.litHtmlVersions=[]).push("2.8.0");const K=(t,e,o)=>{var i,r;const n=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let s=n._$litPart$;if(void 0===s){const t=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;n._$litPart$=s=new M(e.insertBefore(p(),t),t,void 0,null!=o?o:{})}return s._$AI(t),s}},68144:(t,e,o)=>{o.d(e,{oi:()=>A,iv:()=>a,dy:()=>w.dy,Ld:()=>w.Ld,YP:()=>w.YP});const i=window,r=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;class l{constructor(t,e,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&s.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new l(o,t,n)},h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var d;const c=window,p=c.trustedTypes,u=p?p.emptyScript:"",v=c.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},m=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m},y="finalized";class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),r=i.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=_){var i;const r=this.constructor._$Ep(t,o);if(void 0!==r&&!0===o.reflect){const n=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:f).toAttribute(e,o.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:f;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}$[y]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:$}),(null!==(d=c.reactiveElementVersions)&&void 0!==d?d:c.reactiveElementVersions=[]).push("1.6.3");var g,b,w=o(15304);class A extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,w.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return w.Jb}}A.finalized=!0,A._$litElement$=!0,null===(g=globalThis.litElementHydrateSupport)||void 0===g||g.call(globalThis,{LitElement:A});const E=globalThis.litElementPolyfillSupport;null==E||E({LitElement:A});(null!==(b=globalThis.litElementVersions)&&void 0!==b?b:globalThis.litElementVersions=[]).push("3.3.3")}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={exports:{}};return o[t](n,n.exports,r),n.exports}r.m=o,r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,o)=>(r.f[o](t,e),e)),[])),r.u=t=>t+"."+{45497:"r8oZq68xFuQ",48811:"DOze2SSjf34",61588:"YfTOeVGu984",86434:"Bjq0oxKJVV0",93163:"kzSbSdgj9uw"}[t]+".js",r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t={28017:0},e=e=>{var o,i,{ids:n,modules:s,runtime:l}=e,a=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);for(l&&l(r);a<n.length;a++)i=n[a],r.o(t,i)&&t[i]&&t[i][0](),t[n[a]]=0},r.f.j=(o,i)=>{var n=r.o(t,o)?t[o]:void 0;if(0!==n)if(n)i.push(n[1]);else{var s=import("./"+r.u(o)).then(e,(e=>{throw 0!==t[o]&&(t[o]=void 0),e}));s=Promise.race([s,new Promise((e=>n=t[o]=[e]))]),i.push(n[1]=s)}},(()=>{if(/^((?!chrome|android).)*version\/14\.0\s.*safari/i.test(navigator.userAgent)){const t=window.Element.prototype.attachShadow;window.Element.prototype.attachShadow=function(e){return e&&e.delegatesFocus&&delete e.delegatesFocus,t.apply(this,[e])}}var t=r(47181);const e=(t,e,o)=>new Promise(((i,r)=>{const n=document.createElement(t);let s="src",l="body";switch(n.onload=()=>i(e),n.onerror=()=>r(e),t){case"script":n.async=!0,o&&(n.type=o);break;case"link":n.type="text/css",n.rel="stylesheet",s="href",l="head"}n[s]=e,document[l].appendChild(n)})),o=t=>e("script",t),i="customElements"in window&&"content"in document.createElement("template");var n=r(30418);Symbol.for("HA focus target");let s;const l=(e,o)=>{const i=(null==o?void 0:o.replace)||!1;var r;s?s.then((()=>l(e,o))):(i?n.E.history.replaceState(null!==(r=n.E.history.state)&&void 0!==r&&r.root?{root:!0}:null,"",e):n.E.history.pushState(null,"",e),(0,t.B)(n.E,"location-changed",{replace:i}))};var a=r(11654);const h={},d=t=>{const i=(t=>t.html_url?{type:"html",url:t.html_url}:t.module_url&&t.js_url||t.module_url?{type:"module",url:t.module_url}:{type:"js",url:t.js_url})(t);return"js"===i.type?(i.url in h||(h[i.url]=o(i.url)),h[i.url]):"module"===i.type?(r=i.url,e("script",r,"module")):Promise.reject("No valid url found in panel config.");var r},c=(t,e)=>{"setProperties"in t?t.setProperties(e):Object.keys(e).forEach((o=>{t[o]=e[o]}))};let p,u;function v(t){u&&c(u,t)}function f(e,n){const s=document.createElement("style");s.innerHTML="\n  body {\n    margin:0;\n    background-color: var(--primary-background-color, #fafafa);\n    color: var(--primary-text-color, #212121);\n  }\n  @media (prefers-color-scheme: dark) {\n    body {\n      background-color: var(--primary-background-color, #111111);\n      color: var(--primary-text-color, #e1e1e1);\n    }\n  }",document.head.appendChild(s);const h=e.config._panel_custom;let c=Promise.resolve();i||(c=c.then((()=>o("/static/polyfills/webcomponents-bundle.js")))),c.then((()=>d(h))).then((()=>p||Promise.resolve())).then((()=>{u=(t=>{const e="html_url"in t?`ha-panel-${t.name}`:t.name;return document.createElement(e)})(h);u.addEventListener("hass-toggle-menu",(e=>{window.parent.customPanel&&(0,t.B)(window.parent.customPanel,e.type,e.detail)})),window.addEventListener("location-changed",(t=>{window.parent.customPanel&&window.parent.customPanel.navigate(window.location.pathname,t.detail)})),v({panel:e,...n}),document.body.appendChild(u)}),(t=>{let o;console.error(t,e),"hassio"===e.url_path?(Promise.all([r.e(45497),r.e(93163),r.e(61588)]).then(r.bind(r,61588)),o=document.createElement("supervisor-error-screen")):(Promise.all([r.e(45497),r.e(93163),r.e(48811)]).then(r.bind(r,48811)),o=document.createElement("hass-error-screen"),o.error=`Unable to load the panel source: ${t}.`);const i=document.createElement("style");i.innerHTML=a.e$.cssText,document.body.appendChild(i),o.hass=n.hass,document.body.appendChild(o)})),document.body.addEventListener("click",(t=>{const e=((t,e=!0)=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const o=t.composedPath().find((t=>"A"===t.tagName));if(!o||o.target||o.hasAttribute("download")||"external"===o.getAttribute("rel"))return;let i=o.href;if(!i||-1!==i.indexOf("mailto:"))return;const r=window.location,n=r.origin||r.protocol+"//"+r.host;return 0===i.indexOf(n)&&(i=i.substr(n.length),"#"!==i)?(e&&t.preventDefault(),i):void 0})(t);e&&l(e)}))}r.e(86434).then(r.bind(r,74460)).then((({setCancelSyntheticClickEvents:t})=>t(!1))),window.loadES5Adapter=()=>(p||(p=o("/static/polyfills/custom-elements-es5-adapter.js").catch()),p),document.addEventListener("DOMContentLoaded",(()=>window.parent.customPanel.registerIframe(f,v)),{once:!0}),window.addEventListener("unload",(()=>{for(;document.body.lastChild;)document.body.removeChild(document.body.lastChild)}))})();
//# sourceMappingURL=custom-panel.mGGkyJ_e0VY.js.map