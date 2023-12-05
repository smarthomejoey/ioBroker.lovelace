/*! For license information please see 20671.QcH48_VQ-WU.js.LICENSE.txt */
export const id=20671;export const ids=[20671];export const modules={30879:(r,e,t)=>{t.d(e,{D:()=>m});var i=t(43204),c=t(79932),s=t(38103),a=t(68144),n=t(83448),o=t(30153),d=t(47501);class l extends a.oi{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1}open(){this.closed=!1}close(){this.closed=!0}render(){const r={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},e=48+4*this.density,t={width:`${e}px`,height:`${e}px`};return a.dy` <div class="mdc-circular-progress ${(0,n.$)(r)}" style="${(0,d.V)(t)}" role="progressbar" aria-label="${(0,o.o)(this.ariaLabel)}" aria-valuemin="0" aria-valuemax="1" aria-valuenow="${(0,o.o)(this.indeterminate?void 0:this.progress)}"> ${this.renderDeterminateContainer()} ${this.renderIndeterminateContainer()} </div>`}renderDeterminateContainer(){const r=48+4*this.density,e=r/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*t,c=(1-this.progress)*i,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return a.dy` <div class="mdc-circular-progress__determinate-container"> <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 ${r} ${r}"> <circle class="mdc-circular-progress__determinate-track" cx="${e}" cy="${e}" r="${t}" stroke-width="${s}"></circle> <circle class="mdc-circular-progress__determinate-circle" cx="${e}" cy="${e}" r="${t}" stroke-dasharray="${6.2831852*t}" stroke-dashoffset="${c}" stroke-width="${s}"></circle> </svg> </div>`}renderIndeterminateContainer(){return a.dy` <div class="mdc-circular-progress__indeterminate-container"> <div class="mdc-circular-progress__spinner-layer"> ${this.renderIndeterminateSpinnerLayer()} </div> </div>`}renderIndeterminateSpinnerLayer(){const r=48+4*this.density,e=r/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*t,c=.5*i,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return a.dy` <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${r} ${r}"> <circle cx="${e}" cy="${e}" r="${t}" stroke-dasharray="${i}" stroke-dashoffset="${c}" stroke-width="${s}"></circle> </svg> </div> <div class="mdc-circular-progress__gap-patch"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${r} ${r}"> <circle cx="${e}" cy="${e}" r="${t}" stroke-dasharray="${i}" stroke-dashoffset="${c}" stroke-width="${.8*s}"></circle> </svg> </div> <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${r} ${r}"> <circle cx="${e}" cy="${e}" r="${t}" stroke-dasharray="${i}" stroke-dashoffset="${c}" stroke-width="${s}"></circle> </svg> </div>`}update(r){super.update(r),r.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}(0,i.__decorate)([(0,c.Cb)({type:Boolean,reflect:!0})],l.prototype,"indeterminate",void 0),(0,i.__decorate)([(0,c.Cb)({type:Number,reflect:!0})],l.prototype,"progress",void 0),(0,i.__decorate)([(0,c.Cb)({type:Number,reflect:!0})],l.prototype,"density",void 0),(0,i.__decorate)([(0,c.Cb)({type:Boolean,reflect:!0})],l.prototype,"closed",void 0),(0,i.__decorate)([s.L,(0,c.Cb)({type:String,attribute:"aria-label"})],l.prototype,"ariaLabel",void 0);const p=a.iv`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary,#6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0s cubic-bezier(.4, 0, .6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0s cubic-bezier(0, 0, .2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.568s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color,transparent)}`;let m=class extends l{};m.styles=[p],m=(0,i.__decorate)([(0,c.Mo)("mwc-circular-progress")],m)},3239:(r,e,t)=>{function i(r){if(!r||"object"!=typeof r)return r;if("[object Date]"==Object.prototype.toString.call(r))return new Date(r.getTime());if(Array.isArray(r))return r.map(i);var e={};return Object.keys(r).forEach((function(t){e[t]=i(r[t])})),e}t.d(e,{Z:()=>i})},93217:(r,e,t)=>{t.d(e,{Ud:()=>m});const i=Symbol("Comlink.proxy"),c=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.finalizer"),n=Symbol("Comlink.thrown"),o=r=>"object"==typeof r&&null!==r||"function"==typeof r,d=new Map([["proxy",{canHandle:r=>o(r)&&r[i],serialize(r){const{port1:e,port2:t}=new MessageChannel;return l(r,e),[t,[t]]},deserialize:r=>(r.start(),m(r))}],["throw",{canHandle:r=>o(r)&&n in r,serialize({value:r}){let e;return e=r instanceof Error?{isError:!0,value:{message:r.message,name:r.name,stack:r.stack}}:{isError:!1,value:r},[e,[]]},deserialize(r){if(r.isError)throw Object.assign(new Error(r.value.message),r.value);throw r.value}}]]);function l(r,e=globalThis,t=["*"]){e.addEventListener("message",(function c(s){if(!s||!s.data)return;if(!function(r,e){for(const t of r){if(e===t||"*"===t)return!0;if(t instanceof RegExp&&t.test(e))return!0}return!1}(t,s.origin))return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);const{id:o,type:d,path:m}=Object.assign({path:[]},s.data),u=(s.data.argumentList||[]).map(k);let g;try{const e=m.slice(0,-1).reduce(((r,e)=>r[e]),r),t=m.reduce(((r,e)=>r[e]),r);switch(d){case"GET":g=t;break;case"SET":e[m.slice(-1)[0]]=k(s.data.value),g=!0;break;case"APPLY":g=t.apply(e,u);break;case"CONSTRUCT":g=function(r){return Object.assign(r,{[i]:!0})}(new t(...u));break;case"ENDPOINT":{const{port1:e,port2:t}=new MessageChannel;l(r,t),g=function(r,e){return b.set(r,e),r}(e,[e])}break;case"RELEASE":g=void 0;break;default:return}}catch(r){g={value:r,[n]:0}}Promise.resolve(g).catch((r=>({value:r,[n]:0}))).then((t=>{const[i,s]=v(t);e.postMessage(Object.assign(Object.assign({},i),{id:o}),s),"RELEASE"===d&&(e.removeEventListener("message",c),p(e),a in r&&"function"==typeof r[a]&&r[a]())})).catch((r=>{const[t,i]=v({value:new TypeError("Unserializable return value"),[n]:0});e.postMessage(Object.assign(Object.assign({},t),{id:o}),i)}))})),e.start&&e.start()}function p(r){(function(r){return"MessagePort"===r.constructor.name})(r)&&r.close()}function m(r,e){return y(r,[],e)}function u(r){if(r)throw new Error("Proxy has been released and is not useable")}function g(r){return $(r,{type:"RELEASE"}).then((()=>{p(r)}))}const h=new WeakMap,f="FinalizationRegistry"in globalThis&&new FinalizationRegistry((r=>{const e=(h.get(r)||0)-1;h.set(r,e),0===e&&g(r)}));function y(r,e=[],t=function(){}){let i=!1;const a=new Proxy(t,{get(t,c){if(u(i),c===s)return()=>{!function(r){f&&f.unregister(r)}(a),g(r),i=!0};if("then"===c){if(0===e.length)return{then:()=>a};const t=$(r,{type:"GET",path:e.map((r=>r.toString()))}).then(k);return t.then.bind(t)}return y(r,[...e,c])},set(t,c,s){u(i);const[a,n]=v(s);return $(r,{type:"SET",path:[...e,c].map((r=>r.toString())),value:a},n).then(k)},apply(t,s,a){u(i);const n=e[e.length-1];if(n===c)return $(r,{type:"ENDPOINT"}).then(k);if("bind"===n)return y(r,e.slice(0,-1));const[o,d]=_(a);return $(r,{type:"APPLY",path:e.map((r=>r.toString())),argumentList:o},d).then(k)},construct(t,c){u(i);const[s,a]=_(c);return $(r,{type:"CONSTRUCT",path:e.map((r=>r.toString())),argumentList:s},a).then(k)}});return function(r,e){const t=(h.get(e)||0)+1;h.set(e,t),f&&f.register(r,e,r)}(a,r),a}function _(r){const e=r.map(v);return[e.map((r=>r[0])),(t=e.map((r=>r[1])),Array.prototype.concat.apply([],t))];var t}const b=new WeakMap;function v(r){for(const[e,t]of d)if(t.canHandle(r)){const[i,c]=t.serialize(r);return[{type:"HANDLER",name:e,value:i},c]}return[{type:"RAW",value:r},b.get(r)||[]]}function k(r){switch(r.type){case"HANDLER":return d.get(r.name).deserialize(r.value);case"RAW":return r.value}}function $(r,e,t){return new Promise((i=>{const c=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");r.addEventListener("message",(function e(t){t.data&&t.data.id&&t.data.id===c&&(r.removeEventListener("message",e),i(t.data))})),r.start&&r.start(),r.postMessage(Object.assign({id:c},e),t)}))}},97904:(r,e,t)=>{t.d(e,{F:()=>n});var i=t(15304),c=t(38941),s=t(81563);const a=r=>(0,s.dZ)(r)?r._$litType$.h:r.strings,n=(0,c.XM)(class extends c.Xe{constructor(r){super(r),this.tt=new WeakMap}render(r){return[r]}update(r,[e]){const t=(0,s.hN)(this.et)?a(this.et):null,c=(0,s.hN)(e)?a(e):null;if(null!==t&&(null===c||t!==c)){const e=(0,s.i9)(r).pop();let c=this.tt.get(t);if(void 0===c){const r=document.createDocumentFragment();c=(0,i.sY)(i.Ld,r),c.setConnected(!1),this.tt.set(t,c)}(0,s.hl)(c,[e]),(0,s._Y)(c,void 0,e)}if(null!==c){if(null===t||t!==c){const e=this.tt.get(c);if(void 0!==e){const t=(0,s.i9)(e).pop();(0,s.E_)(r),(0,s._Y)(r,void 0,t),(0,s.hl)(r,[t])}}this.et=e}else this.et=void 0;return this.render(e)}})}};
//# sourceMappingURL=20671.QcH48_VQ-WU.js.map