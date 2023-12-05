export const id=68857;export const ids=[68857];export const modules={59708:(e,t,i)=>{i.d(t,{K:()=>n});const n=(e,t)=>{const i=matchMedia(e),n=e=>t(e.matches);return i.addListener(n),t(i.matches),()=>i.removeListener(n)}},68857:(e,t,i)=>{i.a(e,(async(e,n)=>{try{i.r(t);var s=i(17463),o=i(79932),r=i(50467),d=i(69715),a=i(51153),u=e([a]);a=(u.then?(await u)():u)[0];(0,s.Z)([(0,o.Mo)("hui-conditional-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(42850),i.e(41985),i.e(77426),i.e(11994),i.e(17333),i.e(68331),i.e(21948),i.e(68175),i.e(72794)]).then(i.bind(i,82653)),document.createElement("hui-conditional-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"conditional",conditions:[],card:{}}}},{kind:"method",key:"setConfig",value:function(e){if(this.validateConfig(e),!e.card)throw new Error("No card configured");this._element=this._createCardElement(e.card)}},{kind:"method",key:"getCardSize",value:function(){return(0,r.N)(this._element)}},{kind:"method",key:"_createCardElement",value:function(e){const t=(0,a.Z6)(e);return this.hass&&(t.hass=this.hass),t.addEventListener("ll-rebuild",(t=>{t.stopPropagation(),this._rebuildCard(e)}),{once:!0}),t}},{kind:"method",key:"_rebuildCard",value:function(e){this._element=this._createCardElement(e),this.lastChild&&this.replaceChild(this._element,this.lastChild)}}]}}),d.g);n()}catch(e){n(e)}}))},41787:(e,t,i)=>{i.d(t,{E:()=>r,s:()=>a});var n=i(76680),s=i(56007);function o(e,t){const i=e.entity&&t.states[e.entity]?t.states[e.entity].state:s.nZ;return null!=e.state?(0,n.r)(e.state).includes(i):!(0,n.r)(e.state_not).includes(i)}function r(e,t){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return!!(i=e).media_query&&matchMedia(i.media_query).matches;case"user":return function(e,t){var i;return!(!e.users||null===(i=t.user)||void 0===i||!i.id)&&e.users.includes(t.user.id)}(e,t);case"numeric_state":return function(e,t){var i;const n=null!==(i=e.entity?t.states[e.entity]:void 0)&&void 0!==i?i:void 0;if(!n)return!1;const s=Number(n.state);return!isNaN(s)&&(null==e.above||e.above<s)&&(null==e.below||e.below>s)}(e,t);case"and":return function(e,t){return!e.conditions||r(e.conditions,t)}(e,t);case"or":return function(e,t){return!e.conditions||e.conditions.some((e=>r([e],t)))}(e,t);default:return o(e,t)}var i;return o(e,t)}))}function d(e){return null!=e.entity&&(null!=e.state||null!=e.state_not)}function a(e){return e.every((e=>{if("condition"in e)switch(e.condition){case"screen":return null!=e.media_query;case"user":return function(e){return null!=e.users}(e);case"numeric_state":return function(e){return null!=e.entity&&(null!=e.above||null!=e.below)}(e);case"and":case"or":return function(e){return null!=e.conditions}(e);default:return d(e)}return d(e)}))}},69715:(e,t,i)=>{i.d(t,{g:()=>h});var n=i(17463),s=i(34541),o=i(47838),r=i(68144),d=i(79932),a=i(59708),u=i(36639),c=i(41787);function l(e){return e.reduce(((e,t)=>("conditions"in t&&t.conditions&&e.push(...l(t.conditions)),"condition"in t&&"screen"===t.condition&&t.media_query&&e.push(t.media_query),e)),[])}let h=(0,n.Z)([(0,d.Mo)("hui-conditional-base")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"editMode",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"hidden",value:()=>!1},{kind:"field",key:"_element",value:void 0},{kind:"field",key:"_mediaQueriesListeners",value:()=>[]},{kind:"field",key:"_mediaQueries",value:()=>[]},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"validateConfig",value:function(e){if(!e.conditions)throw new Error("No conditions configured");if(!Array.isArray(e.conditions))throw new Error("Conditions need to be an array");if(!(0,c.s)(e.conditions))throw new Error("Conditions are invalid");this.lastChild&&this.removeChild(this.lastChild),this._config=e}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)((0,o.Z)(i.prototype),"disconnectedCallback",this).call(this),this._clearMediaQueries()}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)((0,o.Z)(i.prototype),"connectedCallback",this).call(this),this._listenMediaQueries(),this._updateVisibility()}},{kind:"method",key:"_clearMediaQueries",value:function(){for(this._mediaQueries=[];this._mediaQueriesListeners.length;)this._mediaQueriesListeners.pop()()}},{kind:"method",key:"_listenMediaQueries",value:function(){if(!this._config)return;const e=l(this._config.conditions);if(!(0,u.v)(e,this._mediaQueries)){for(this._mediaQueries=e;this._mediaQueriesListeners.length;)this._mediaQueriesListeners.pop()();e.forEach((e=>{const t=(0,a.K)(e,(e=>{1===this._config.conditions.length&&"condition"in this._config.conditions[0]&&"screen"===this._config.conditions[0].condition?this._setVisibility(e):this._updateVisibility()}));this._mediaQueriesListeners.push(t)}))}}},{kind:"method",key:"update",value:function(e){(0,s.Z)((0,o.Z)(i.prototype),"update",this).call(this,e),(e.has("_element")||e.has("_config")||e.has("hass"))&&(this._listenMediaQueries(),this._updateVisibility())}},{kind:"method",key:"_updateVisibility",value:function(){if(!this._element||!this.hass||!this._config)return;this._element.editMode=this.editMode;const e=(0,c.E)(this._config.conditions,this.hass);this._setVisibility(e)}},{kind:"method",key:"_setVisibility",value:function(e){if(!this._element||!this.hass)return;const t=this.editMode||e;this.hidden=!t,this.style.setProperty("display",t?"":"none"),t?(this._element.hass=this.hass,this._element.parentElement||this.appendChild(this._element)):this._element.parentElement&&this.removeChild(this._element)}}]}}),r.fl)}};
//# sourceMappingURL=68857.PMkqaP6UQ-Y.js.map