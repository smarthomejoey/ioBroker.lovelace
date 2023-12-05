/*! For license information please see 69311.W1v8ISJRH-s.js.LICENSE.txt */
export const id=69311;export const ids=[69311];export const modules={18601:(e,t,i)=>{i.d(t,{Wg:()=>r,qN:()=>o.q});var n,a,s=i(43204),d=i(79932),o=i(78220);const l=null!==(a=null===(n=window.ShadyDOM)||void 0===n?void 0:n.inUse)&&void 0!==a&&a;class r extends o.H{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||l)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}r.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,s.__decorate)([(0,d.Cb)({type:Boolean})],r.prototype,"disabled",void 0)},75642:(e,t,i)=>{var n=i(43204),a=i(68144),s=i(79932);const d=a.iv`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let o=class extends a.oi{render(){return a.dy`<span><slot></slot></span>`}};o.styles=[d],o=(0,n.__decorate)([(0,s.Mo)("mwc-icon")],o)},32594:(e,t,i)=>{i.d(t,{U:()=>n});const n=e=>e.stopPropagation()},96151:(e,t,i)=>{i.d(t,{T:()=>n,y:()=>a});const n=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},a=()=>new Promise((e=>{n(e)}))},73366:(e,t,i)=>{i.d(t,{M:()=>c});var n=i(17463),a=i(34541),s=i(47838),d=i(61092),o=i(96762),l=i(68144),r=i(79932);let c=(0,n.Z)([(0,r.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,a.Z)((0,s.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[o.W,l.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),d.K)},86630:(e,t,i)=>{var n=i(17463),a=i(34541),s=i(47838),d=i(49412),o=i(3762),l=i(68144),r=i(79932),c=i(38346),u=i(96151);i(10983);(0,n.Z)([(0,r.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean,reflect:!0})],key:"clearable",value:void 0},{kind:"method",key:"render",value:function(){return l.dy` ${(0,a.Z)((0,s.Z)(i.prototype),"render",this).call(this)} ${this.clearable&&!this.required&&!this.disabled&&this.value?l.dy`<ha-icon-button label="clear" @click="${this._clearValue}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:l.Ld} `}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?l.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:l.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,s.Z)(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,c.D)((async()=>{await(0,u.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[o.W,l.iv`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}`]}]}}),d.K)},53978:(e,t,i)=>{i.r(t),i.d(t,{HaSTTSelector:()=>v});var n=i(17463),a=i(68144),s=i(79932),d=i(34541),o=i(47838),l=i(47181),r=i(32594),c=i(91741),u=i(38346);i(73366),i(86630);const h="__NONE_OPTION__",p={cloud:"ioBroker Cloud"};(0,n.Z)([(0,s.Mo)("ha-stt-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_engines",value:void 0},{kind:"method",key:"render",value:function(){var e;if(!this._engines)return a.Ld;const t=null!==(e=this.value)&&void 0!==e?e:this.required?this._engines.find((e=>{var t;return 0!==(null===(t=e.supported_languages)||void 0===t?void 0:t.length)})):h;return a.dy` <ha-select .label="${this.label||this.hass.localize("ui.components.stt-picker.stt")}" .value="${t}" .required="${this.required}" .disabled="${this.disabled}" @selected="${this._changed}" @closed="${r.U}" fixedMenuPosition naturalMenuWidth> ${this.required?a.Ld:a.dy`<ha-list-item .value="${h}"> ${this.hass.localize("ui.components.stt-picker.none")} </ha-list-item>`} ${this._engines.map((e=>{var t;let i=e.engine_id;if(e.engine_id.includes(".")){const t=this.hass.states[e.engine_id];i=t?(0,c.C)(t):e.engine_id}else e.engine_id in p&&(i=p[e.engine_id]);return a.dy`<ha-list-item .value="${e.engine_id}" .disabled="${0===(null===(t=e.supported_languages)||void 0===t?void 0:t.length)}"> ${i} </ha-list-item>`}))} </ha-select> `}},{kind:"method",key:"willUpdate",value:function(e){(0,d.Z)((0,o.Z)(i.prototype),"willUpdate",this).call(this,e),this.hasUpdated?e.has("language")&&this._debouncedUpdateEngines():this._updateEngines()}},{kind:"field",key:"_debouncedUpdateEngines",value(){return(0,u.D)((()=>this._updateEngines()),500)}},{kind:"method",key:"_updateEngines",value:async function(){var e,t,i,n;if(this._engines=(await(t=this.hass,i=this.language,n=this.hass.config.country||void 0,t.callWS({type:"stt/engine/list",language:i,country:n}))).providers,!this.value)return;const a=this._engines.find((e=>e.engine_id===this.value));(0,l.B)(this,"supported-languages-changed",{value:null==a?void 0:a.supported_languages}),a&&0!==(null===(e=a.supported_languages)||void 0===e?void 0:e.length)||(this.value=void 0,(0,l.B)(this,"value-changed",{value:this.value}))}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`ha-select{width:100%}`}},{kind:"method",key:"_changed",value:function(e){var t;const i=e.target;!this.hass||""===i.value||i.value===this.value||void 0===this.value&&i.value===h||(this.value=i.value===h?void 0:i.value,(0,l.B)(this,"value-changed",{value:this.value}),(0,l.B)(this,"supported-languages-changed",{value:null===(t=this._engines.find((e=>e.engine_id===this.value)))||void 0===t?void 0:t.supported_languages}))}}]}}),a.oi);let v=(0,n.Z)([(0,s.Mo)("ha-selector-stt")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return a.dy`<ha-stt-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .language="${(null===(e=this.selector.stt)||void 0===e?void 0:e.language)||(null===(t=this.context)||void 0===t?void 0:t.language)}" .disabled="${this.disabled}" .required="${this.required}"></ha-stt-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`ha-stt-picker{width:100%}`}]}}),a.oi)}};
//# sourceMappingURL=69311.W1v8ISJRH-s.js.map