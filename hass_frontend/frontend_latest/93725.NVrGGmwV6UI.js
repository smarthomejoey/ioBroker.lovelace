/*! For license information please see 93725.NVrGGmwV6UI.js.LICENSE.txt */
export const id=93725;export const ids=[93725];export const modules={55642:(e,t,i)=>{i.d(t,{h:()=>o});var n=i(68144),a=i(57835);const o=(0,a.XM)(class extends a.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==a.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,i]){return this._element&&this._element.localName===t?(i&&Object.entries(i).forEach((([e,t])=>{this._element[e]=t})),n.Jb):this.render(t,i)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},25727:(e,t,i)=>{var n=i(17463),a=i(68144),o=i(79932),s=i(14516),r=i(55642),l=i(33855);const d={action:()=>Promise.all([i.e(42850),i.e(46992),i.e(63436),i.e(78133),i.e(50731),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(41985),i.e(81866),i.e(77426),i.e(38768),i.e(1624),i.e(14783),i.e(40163),i.e(3143),i.e(74535),i.e(7083),i.e(69371),i.e(13616),i.e(49706),i.e(48763),i.e(81994),i.e(88858),i.e(15491),i.e(15e3),i.e(3233),i.e(69331),i.e(94204)]).then(i.bind(i,73975)),addon:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(39298),i.e(17165)]).then(i.bind(i,17165)),area:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(29247),i.e(40163),i.e(68610)]).then(i.bind(i,68610)),area_filter:()=>Promise.all([i.e(42850),i.e(46992),i.e(17649)]).then(i.bind(i,38792)),attribute:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(81866),i.e(76680),i.e(13616),i.e(29461)]).then(i.bind(i,29461)),assist_pipeline:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(64721)]).then(i.bind(i,17238)),boolean:()=>i.e(71927).then(i.bind(i,71927)),color_rgb:()=>Promise.all([i.e(42850),i.e(46992),i.e(62361)]).then(i.bind(i,23512)),condition:()=>Promise.all([i.e(42850),i.e(46992),i.e(63436),i.e(78133),i.e(50731),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(81866),i.e(77426),i.e(38768),i.e(14783),i.e(13509),i.e(40163),i.e(3143),i.e(74535),i.e(7083),i.e(13616),i.e(49706),i.e(81994),i.e(88858),i.e(15e3),i.e(69331),i.e(42375)]).then(i.bind(i,55921)),config_entry:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(60855),i.e(99244)]).then(i.bind(i,99244)),conversation_agent:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(10272)]).then(i.bind(i,67954)),constant:()=>i.e(4276).then(i.bind(i,4276)),country:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(81866),i.e(94231)]).then(i.bind(i,5770)),date:()=>Promise.all([i.e(42850),i.e(46992),i.e(81866),i.e(94988)]).then(i.bind(i,78191)),datetime:()=>Promise.all([i.e(42850),i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(81866),i.e(9039),i.e(40341)]).then(i.bind(i,9039)),device:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(17449),i.e(40163),i.e(68183)]).then(i.bind(i,68183)),duration:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(81516)]).then(i.bind(i,75054)),entity:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(14012),i.e(40163),i.e(3143),i.e(74535),i.e(7083),i.e(13616),i.e(49706),i.e(76115)]).then(i.bind(i,1987)),statistic:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(10349),i.e(40163),i.e(3143),i.e(7083),i.e(13616),i.e(49706),i.e(13927),i.e(12821)]).then(i.bind(i,48570)),file:()=>i.e(20549).then(i.bind(i,20549)),language:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(81866),i.e(16754)]).then(i.bind(i,20184)),navigation:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(63804),i.e(21625),i.e(94667)]).then(i.bind(i,64754)),number:()=>Promise.all([i.e(42850),i.e(46992),i.e(63547),i.e(74177),i.e(52226)]).then(i.bind(i,65353)),object:()=>Promise.all([i.e(77426),i.e(59204)]).then(i.bind(i,59204)),select:()=>Promise.all([i.e(42850),i.e(46992),i.e(63436),i.e(78133),i.e(50731),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(41985),i.e(70632),i.e(63547),i.e(56424),i.e(68970),i.e(78738)]).then(i.bind(i,78738)),selector:()=>i.e(23553).then(i.bind(i,23553)),state:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(39911),i.e(85234)]).then(i.bind(i,85234)),backup_location:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(70955)]).then(i.bind(i,38204)),stt:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(69311)]).then(i.bind(i,53978)),target:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(66903),i.e(17138),i.e(45835),i.e(40163),i.e(3143),i.e(74535),i.e(7083),i.e(13616),i.e(49706),i.e(48844),i.e(6991)]).then(i.bind(i,66711)),template:()=>i.e(56097).then(i.bind(i,56097)),text:()=>Promise.all([i.e(42850),i.e(46992),i.e(59687),i.e(44117)]).then(i.bind(i,44117)),time:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(41319)]).then(i.bind(i,77646)),icon:()=>Promise.all([i.e(42850),i.e(46992),i.e(78133),i.e(50731),i.e(65024),i.e(7083),i.e(13616),i.e(49706),i.e(53862)]).then(i.bind(i,53862)),media:()=>Promise.all([i.e(69371),i.e(44258)]).then(i.bind(i,44258)),theme:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(94781)]).then(i.bind(i,93476)),trigger:()=>Promise.all([i.e(42850),i.e(46992),i.e(63436),i.e(78133),i.e(50731),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(41985),i.e(81866),i.e(77426),i.e(38768),i.e(1624),i.e(14783),i.e(40163),i.e(3143),i.e(74535),i.e(7083),i.e(13616),i.e(49706),i.e(81994),i.e(88858),i.e(15491),i.e(69331),i.e(96936)]).then(i.bind(i,67269)),tts:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(39633)]).then(i.bind(i,34651)),tts_voice:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(7286)]).then(i.bind(i,57757)),location:()=>Promise.all([i.e(13786),i.e(4439)]).then(i.bind(i,22821)),color_temp:()=>Promise.all([i.e(63547),i.e(74177),i.e(96549),i.e(63958)]).then(i.bind(i,63958)),ui_action:()=>Promise.all([i.e(42850),i.e(46992),i.e(63436),i.e(78133),i.e(50731),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(41985),i.e(77426),i.e(42641),i.e(48763),i.e(21625),i.e(91059),i.e(35084)]).then(i.bind(i,13239)),ui_color:()=>Promise.all([i.e(46992),i.e(63436),i.e(3762),i.e(66903),i.e(65666),i.e(49412),i.e(27746)]).then(i.bind(i,67165))},c=new Set(["ui-action","ui-color"]);(0,n.Z)([(0,o.Mo)("ha-selector")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"name",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"localizeValue",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,o.Cb)()],key:"context",value:void 0},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,null===(e=this.renderRoot.querySelector("#selector"))||void 0===e||e.focus()}},{kind:"get",key:"_type",value:function(){const e=Object.keys(this.selector)[0];return c.has(e)?e.replace("-","_"):e}},{kind:"method",key:"willUpdate",value:function(e){var t;e.has("selector")&&this.selector&&(null===(t=d[this._type])||void 0===t||t.call(d))}},{kind:"field",key:"_handleLegacySelector",value(){return(0,s.Z)((e=>{if("entity"in e)return(0,l.CM)(e);if("device"in e)return(0,l.c9)(e);const t=Object.keys(this.selector)[0];return c.has(t)?{[t.replace("-","_")]:e[t]}:e}))}},{kind:"method",key:"render",value:function(){return a.dy` ${(0,r.h)(`ha-selector-${this._type}`,{hass:this.hass,name:this.name,selector:this._handleLegacySelector(this.selector),value:this.value,label:this.label,placeholder:this.placeholder,disabled:this.disabled,required:this.required,helper:this.helper,context:this.context,localizeValue:this.localizeValue,id:"selector"})} `}}]}}),a.oi)},3555:(e,t,i)=>{var n=i(17463),a=i(34541),o=i(47838),s=i(42977),r=i(31338),l=i(68144),d=i(79932),c=i(30418);(0,n.Z)([(0,d.Mo)("ha-textfield")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"iconTrailing",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"autocomplete",value:void 0},{kind:"field",decorators:[(0,d.Cb)()],key:"autocorrect",value:void 0},{kind:"field",decorators:[(0,d.Cb)({attribute:"input-spellcheck"})],key:"inputSpellcheck",value:void 0},{kind:"field",decorators:[(0,d.IO)("input")],key:"formElement",value:void 0},{kind:"method",key:"updated",value:function(e){(0,a.Z)((0,o.Z)(i.prototype),"updated",this).call(this,e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity()),e.has("autocomplete")&&(this.autocomplete?this.formElement.setAttribute("autocomplete",this.autocomplete):this.formElement.removeAttribute("autocomplete")),e.has("autocorrect")&&(this.autocorrect?this.formElement.setAttribute("autocorrect",this.autocorrect):this.formElement.removeAttribute("autocorrect")),e.has("inputSpellcheck")&&(this.inputSpellcheck?this.formElement.setAttribute("spellcheck",this.inputSpellcheck):this.formElement.removeAttribute("spellcheck"))}},{kind:"method",key:"renderIcon",value:function(e,t=!1){const i=t?"trailing":"leading";return l.dy` <span class="mdc-text-field__icon mdc-text-field__icon--${i}" tabindex="${t?1:-1}"> <slot name="${i}Icon"></slot> </span> `}},{kind:"field",static:!0,key:"styles",value:()=>[r.W,l.iv`.mdc-text-field__input{width:var(--ha-textfield-input-width,100%)}.mdc-text-field:not(.mdc-text-field--with-leading-icon){padding:var(--text-field-padding,0px 16px)}.mdc-text-field__affix--suffix{padding-left:var(--text-field-suffix-padding-left,12px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,12px);padding-inline-end:var(--text-field-suffix-padding-right,0px);direction:var(--direction)}.mdc-text-field--with-leading-icon{padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,16px);direction:var(--direction)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:var(--text-field-suffix-padding-left,0px);padding-right:var(--text-field-suffix-padding-right,0px);padding-inline-start:var(--text-field-suffix-padding-left,0px);padding-inline-end:var(--text-field-suffix-padding-right,0px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:var(--secondary-text-color)}.mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field__icon--leading{margin-inline-start:16px;margin-inline-end:8px;direction:var(--direction)}.mdc-text-field__icon--trailing{padding:var(--textfield-icon-trailing-padding,12px)}.mdc-floating-label:not(.mdc-floating-label--float-above){text-overflow:ellipsis;width:inherit;padding-right:30px;padding-inline-end:30px;padding-inline-start:initial;box-sizing:border-box;direction:var(--direction)}input{text-align:var(--text-field-text-align,start)}::-ms-reveal{display:none}:host([no-spinner]) input::-webkit-inner-spin-button,:host([no-spinner]) input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host([no-spinner]) input[type=number]{-moz-appearance:textfield}.mdc-text-field__ripple{overflow:hidden}.mdc-text-field{overflow:var(--text-field-overflow)}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start);direction:var(--direction);text-align:var(--float-start)}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px - var(--text-field-suffix-padding-left,0px));inset-inline-start:calc(48px + var(--text-field-suffix-padding-left,0px))!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__input[type=number]{direction:var(--direction)}.mdc-text-field__affix--prefix{padding-right:var(--text-field-prefix-padding-right,2px)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:var(--mdc-text-field-label-ink-color)}`,"rtl"===c.E.document.dir?l.iv`.mdc-floating-label,.mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field__affix--suffix,.mdc-text-field__icon--leading,.mdc-text-field__input[type=number]{direction:rtl}`:l.iv``]}]}}),s.P)},39109:(e,t,i)=>{var n=i(17463),a=(i(44577),i(68144)),o=i(79932),s=i(47181),r=i(32594);i(86630);(0,n.Z)([(0,o.Mo)("ha-theme-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"includeDefault",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"method",key:"render",value:function(){return a.dy` <ha-select .label="${this.label||this.hass.localize("ui.components.theme-picker.theme")}" .value="${this.value}" .required="${this.required}" .disabled="${this.disabled}" @selected="${this._changed}" @closed="${r.U}" fixedMenuPosition naturalMenuWidth> ${this.required?a.Ld:a.dy` <mwc-list-item value="remove"> ${this.hass.localize("ui.components.theme-picker.no_theme")} </mwc-list-item> `} ${this.includeDefault?a.dy` <mwc-list-item .value="${"default"}"> ioBroker </mwc-list-item> `:a.Ld} ${Object.keys(this.hass.themes.themes).sort().map((e=>a.dy`<mwc-list-item .value="${e}">${e}</mwc-list-item>`))} </ha-select> `}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`ha-select{width:100%}`}},{kind:"method",key:"_changed",value:function(e){this.hass&&""!==e.target.value&&(this.value="remove"===e.target.value?void 0:e.target.value,(0,s.B)(this,"value-changed",{value:this.value}))}}]}}),a.oi)},33855:(e,t,i)=>{i.d(t,{CM:()=>p,QQ:()=>m,aV:()=>l,c9:()=>f,lE:()=>h,lV:()=>u,qJ:()=>c,vI:()=>d,xO:()=>r});var n=i(76680),a=i(22311),o=i(40095),s=i(57292);const r=(e,t,i,n,a,o)=>{const s=[],r=[];return Object.values(i).forEach((i=>{i.area_id===t&&c(e,Object.values(n),i,a,o)&&r.push(i.id)})),Object.values(n).forEach((i=>{i.area_id===t&&m(e.states[i.entity_id],a,o)&&s.push(i.entity_id)})),{devices:r,entities:s}},l=(e,t,i,n,a)=>{const o=[];return Object.values(i).forEach((i=>{i.device_id===t&&m(e.states[i.entity_id],n,a)&&o.push(i.entity_id)})),{entities:o}},d=(e,t,i,n,a,o)=>!!Object.values(i).some((i=>!(i.area_id!==n||!c(e,Object.values(t),i,a,o))))||Object.values(t).some((t=>!(t.area_id!==n||!m(e.states[t.entity_id],a,o)))),c=(e,t,i,a,o)=>{var r,l;const d=o?(0,s.HP)(o,t):void 0;if(null!==(r=a.target)&&void 0!==r&&r.device&&!(0,n.r)(a.target.device).some((e=>h(e,i,d))))return!1;if(null!==(l=a.target)&&void 0!==l&&l.entity){return t.filter((e=>e.device_id===i.id)).some((t=>{const i=e.states[t.entity_id];return m(i,a,o)}))}return!0},m=(e,t,i)=>{var a;return null===(a=t.target)||void 0===a||!a.entity||(0,n.r)(t.target.entity).some((t=>u(t,e,i)))},h=(e,t,i)=>{const{manufacturer:n,model:a,integration:o}=e;if(n&&t.manufacturer!==n)return!1;if(a&&t.model!==a)return!1;var s;if(o&&i&&(null==i||null===(s=i[t.id])||void 0===s||!s.includes(o)))return!1;return!0},u=(e,t,i)=>{var s;const{domain:r,device_class:l,supported_features:d,integration:c}=e;if(r){const e=(0,a.N)(t);if(Array.isArray(r)?!r.includes(e):e!==r)return!1}if(l){const e=t.attributes.device_class;if(e&&Array.isArray(l)?!l.includes(e):e!==l)return!1}return!(d&&!(0,n.r)(d).some((e=>(0,o.e)(t,e))))&&(!c||(null==i||null===(s=i[t.entity_id])||void 0===s?void 0:s.domain)===c)},p=e=>{if(!e.entity)return{entity:null};if("filter"in e.entity)return e;const{domain:t,integration:i,device_class:n,...a}=e.entity;return t||i||n?{entity:{...a,filter:{domain:t,integration:i,device_class:n}}}:{entity:a}},f=e=>{if(!e.device)return{device:null};if("filter"in e.device)return e;const{integration:t,manufacturer:i,model:n,...a}=e.device;return t||i||n?{device:{...a,filter:{integration:t,manufacturer:i,model:n}}}:{device:a}}},24026:(e,t,i)=>{i.r(t),i.d(t,{HuiPictureCardEditor:()=>h});var n=i(17463),a=i(68144),o=i(79932),s=i(38768),r=i(47181),l=(i(39109),i(26431),i(85677)),d=i(98346);const c=(0,s.f0)(d.I,(0,s.Ry)({image:(0,s.jt)((0,s.Z_)()),image_entity:(0,s.jt)((0,s.Z_)()),tap_action:(0,s.jt)(l.C),hold_action:(0,s.jt)(l.C),theme:(0,s.jt)((0,s.Z_)()),alt_text:(0,s.jt)((0,s.Z_)())})),m=[{name:"image",selector:{text:{}}},{name:"image_entity",selector:{entity:{domain:"image"}}},{name:"alt_text",selector:{text:{}}},{name:"theme",selector:{theme:{}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}];let h=(0,n.Z)([(0,o.Mo)("hui-picture-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,s.hu)(e,c),this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?a.dy` <ha-form .hass="${this.hass}" .data="${this._config}" .schema="${m}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `:a.Ld}},{kind:"method",key:"_valueChanged",value:function(e){(0,r.B)(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"theme"===e.name?`${this.hass.localize("ui.panel.lovelace.editor.card.generic.theme")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`:this.hass.localize(`ui.panel.lovelace.editor.card.picture-card.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),a.oi)},85677:(e,t,i)=>{i.d(t,{C:()=>h});var n=i(38768);const a=(0,n.Ry)({user:(0,n.Z_)()}),o=(0,n.G0)([(0,n.O7)(),(0,n.Ry)({text:(0,n.jt)((0,n.Z_)()),excemptions:(0,n.jt)((0,n.IX)(a))})]),s=(0,n.Ry)({action:(0,n.i0)("url"),url_path:(0,n.Z_)(),confirmation:(0,n.jt)(o)}),r=(0,n.Ry)({action:(0,n.i0)("call-service"),service:(0,n.Z_)(),service_data:(0,n.jt)((0,n.Ry)()),data:(0,n.jt)((0,n.Ry)()),target:(0,n.jt)((0,n.Ry)({entity_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),device_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),area_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())]))})),confirmation:(0,n.jt)(o)}),l=(0,n.Ry)({action:(0,n.i0)("navigate"),navigation_path:(0,n.Z_)(),navigation_replace:(0,n.jt)((0,n.O7)()),confirmation:(0,n.jt)(o)}),d=(0,n.dt)({action:(0,n.i0)("assist"),pipeline_id:(0,n.jt)((0,n.Z_)()),start_listening:(0,n.jt)((0,n.O7)())}),c=(0,n.dt)({action:(0,n.i0)("fire-dom-event")}),m=(0,n.Ry)({action:(0,n.kE)(["none","toggle","more-info","call-service","url","navigate","assist"]),confirmation:(0,n.jt)(o)}),h=(0,n.D8)((e=>{if(e&&"object"==typeof e&&"action"in e)switch(e.action){case"call-service":return r;case"fire-dom-event":return c;case"navigate":return l;case"url":return s;case"assist":return d}return m}))},98346:(e,t,i)=>{i.d(t,{I:()=>a});var n=i(38768);const a=(0,n.Ry)({type:(0,n.Z_)(),view_layout:(0,n.Yj)()})},33829:(e,t,i)=>{var n=i(68144);class a extends n.oi{static get styles(){return[n.iv`:host{display:block;position:absolute;outline:0;z-index:1002;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:default;pointer-events:none}#tooltip{display:block;outline:0;font-size:var(--simple-tooltip-font-size, 10px);line-height:1;background-color:var(--simple-tooltip-background,#616161);color:var(--simple-tooltip-text-color,#fff);padding:8px;border-radius:var(--simple-tooltip-border-radius,2px);width:var(--simple-tooltip-width)}@keyframes keyFrameScaleUp{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes keyFrameScaleDown{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--simple-tooltip-opacity, .9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--simple-tooltip-opacity, .9)}100%{opacity:0}}@keyframes keyFrameSlideDownIn{0%{transform:translateY(-2000px);opacity:0}10%{opacity:.2}100%{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9)}}@keyframes keyFrameSlideDownOut{0%{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9)}10%{opacity:.2}100%{transform:translateY(-2000px);opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--simple-tooltip-delay-in, 500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in, 500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.scale-up-animation{transform:scale(0);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-in, 500ms);animation-name:keyFrameScaleUp;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in, 500ms);animation-fill-mode:forwards}.scale-down-animation{transform:scale(1);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameScaleDown;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.slide-down-animation{transform:translateY(-2000px);opacity:0;animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameSlideDownIn;animation-iteration-count:1;animation-timing-function:cubic-bezier(0,0,0.2,1);animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.slide-down-animation-out{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameSlideDownOut;animation-iteration-count:1;animation-timing-function:cubic-bezier(0.4,0,1,1);animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.cancel-animation{animation-delay:-30s!important}.hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}`]}render(){return n.dy` <div id="tooltip" class="hidden" @animationend="${this._onAnimationEnd}"> <slot></slot> </div>`}static get properties(){return{...super.properties,for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}}}static get tag(){return"simple-tooltip"}constructor(){super(),this.manualMode=!1,this.position="bottom",this.fitToVisibleBounds=!1,this.offset=14,this.marginTop=14,this.animationEntry="",this.animationExit="",this.animationConfig={entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]},setTimeout((()=>{this.addEventListener("webkitAnimationEnd",this._onAnimationEnd.bind(this)),this.addEventListener("mouseenter",this.hide.bind(this))}),0)}get target(){var e=this.parentNode,t=this.getRootNode();return this.for?t.querySelector("#"+this.for):e.nodeType==Node.DOCUMENT_FRAGMENT_NODE?t.host:e}disconnectedCallback(){this.manualMode||this._removeListeners(),super.disconnectedCallback()}playAnimation(e){"entry"===e?this.show():"exit"===e&&this.hide()}cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}show(){if(!this._showing){if(""===this.textContent.trim()){for(var e=!0,t=this.children,i=0;i<t.length;i++)if(""!==t[i].textContent.trim()){e=!1;break}if(e)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}hide(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout((()=>{this._cancelAnimation()}),5e3)}}updatePosition(){if(this._target&&this.offsetParent){var e=this.offset;14!=this.marginTop&&14==this.offset&&(e=this.marginTop);var t,i,n=this.offsetParent.getBoundingClientRect(),a=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),s=(a.width-o.width)/2,r=(a.height-o.height)/2,l=a.left-n.left,d=a.top-n.top;switch(this.position){case"top":t=l+s,i=d-o.height-e;break;case"bottom":t=l+s,i=d+a.height+e;break;case"left":t=l-o.width-e,i=d+r;break;case"right":t=l+a.width+e,i=d+r}this.fitToVisibleBounds?(n.left+t+o.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,t)+"px",this.style.right="auto"),n.top+i+o.height>window.innerHeight?(this.style.bottom=n.height-d+e+"px",this.style.top="auto"):(this.style.top=Math.max(-n.top,i)+"px",this.style.bottom="auto")):(this.style.left=t+"px",this.style.top=i+"px")}}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}_findTarget(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}_manualModeChanged(){this.manualMode?this._removeListeners():this._addListeners()}_cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}_onAnimationFinish(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}_onAnimationEnd(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}_getAnimationType(e){if("entry"===e&&""!==this.animationEntry)return this.animationEntry;if("exit"===e&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[e]&&"string"==typeof this.animationConfig[e][0].name){if(this.animationConfig[e][0].timing&&this.animationConfig[e][0].timing.delay&&0!==this.animationConfig[e][0].timing.delay){var t=this.animationConfig[e][0].timing.delay;"entry"===e?document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms"):"exit"===e&&document.documentElement.style.setProperty("--simple-tooltip-delay-out",t+"ms")}return this.animationConfig[e][0].name}}_removeListeners(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}firstUpdated(e){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}updated(e){e.forEach(((e,t)=>{"for"==t&&this._findTarget(this[t],e),"manualMode"==t&&this._manualModeChanged(this[t],e),"animationDelay"==t&&this._delayChange(this[t],e)}))}_delayChange(e){500!==e&&document.documentElement.style.setProperty("--simple-tooltip-delay-in",e+"ms")}}customElements.define(a.tag,a)}};
//# sourceMappingURL=93725.NVrGGmwV6UI.js.map