/*! For license information please see 10272.BiL_p7uB6dQ.js.LICENSE.txt */
export const id=10272;export const ids=[10272];export const modules={18601:(e,t,i)=>{i.d(t,{Wg:()=>d,qN:()=>l.q});var n,o,a=i(43204),s=i(79932),l=i(78220);const r=null!==(o=null===(n=window.ShadyDOM)||void 0===n?void 0:n.inUse)&&void 0!==o&&o;class d extends l.H{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||r)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}d.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,a.__decorate)([(0,s.Cb)({type:Boolean})],d.prototype,"disabled",void 0)},75642:(e,t,i)=>{var n=i(43204),o=i(68144),a=i(79932);const s=o.iv`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let l=class extends o.oi{render(){return o.dy`<span><slot></slot></span>`}};l.styles=[s],l=(0,n.__decorate)([(0,a.Mo)("mwc-icon")],l)},32594:(e,t,i)=>{i.d(t,{U:()=>n});const n=e=>e.stopPropagation()},96151:(e,t,i)=>{i.d(t,{T:()=>n,y:()=>o});const n=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},o=()=>new Promise((e=>{n(e)}))},73366:(e,t,i)=>{i.d(t,{M:()=>c});var n=i(17463),o=i(34541),a=i(47838),s=i(61092),l=i(96762),r=i(68144),d=i(79932);let c=(0,n.Z)([(0,d.Mo)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,o.Z)((0,a.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[l.W,r.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),s.K)},86630:(e,t,i)=>{var n=i(17463),o=i(34541),a=i(47838),s=i(49412),l=i(3762),r=i(68144),d=i(79932),c=i(38346),p=i(96151);i(10983);(0,n.Z)([(0,d.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"clearable",value:void 0},{kind:"method",key:"render",value:function(){return r.dy` ${(0,o.Z)((0,a.Z)(i.prototype),"render",this).call(this)} ${this.clearable&&!this.required&&!this.disabled&&this.value?r.dy`<ha-icon-button label="clear" @click="${this._clearValue}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:r.Ld} `}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?r.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:r.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)((0,a.Z)(i.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,o.Z)((0,a.Z)(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,c.D)((async()=>{await(0,p.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[l.W,r.iv`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}`]}]}}),s.K)},67954:(e,t,i)=>{i.r(t),i.d(t,{HaConversationAgentSelector:()=>v});var n=i(17463),o=i(68144),a=i(79932),s=i(34541),l=i(47838),r=i(47181),d=i(32594),c=i(38346),p=i(81582),h=i(57927),u=i(5986),m=i(18532);i(73366),i(86630);const g="__NONE_OPTION__";(0,n.Z)([(0,a.Mo)("ha-conversation-agent-picker")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,a.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,a.SB)()],key:"_agents",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_configEntry",value:void 0},{kind:"method",key:"render",value:function(){var e,t,i;if(!this._agents)return o.Ld;const n=null!==(e=this.value)&&void 0!==e?e:this.required&&(!this.language||null!==(t=this._agents.find((e=>"homeassistant"===e.id)))&&void 0!==t&&t.supported_languages.includes(this.language))?"homeassistant":g;return o.dy` <ha-select .label="${this.label||this.hass.localize("ui.components.coversation-agent-picker.conversation_agent")}" .value="${n}" .required="${this.required}" .disabled="${this.disabled}" @selected="${this._changed}" @closed="${d.U}" fixedMenuPosition naturalMenuWidth> ${this.required?o.Ld:o.dy`<ha-list-item .value="${g}"> ${this.hass.localize("ui.components.coversation-agent-picker.none")} </ha-list-item>`} ${this._agents.map((e=>o.dy`<ha-list-item .value="${e.id}" .disabled="${"*"!==e.supported_languages&&0===e.supported_languages.length}"> ${e.name} </ha-list-item>`))}</ha-select>${null!==(i=this._configEntry)&&void 0!==i&&i.supports_options?o.dy`<ha-icon-button .path="${"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"}" @click="${this._openOptionsFlow}"></ha-icon-button>`:""} `}},{kind:"method",key:"willUpdate",value:function(e){(0,s.Z)((0,l.Z)(i.prototype),"willUpdate",this).call(this,e),this.hasUpdated?e.has("language")&&this._debouncedUpdateAgents():this._updateAgents(),e.has("value")&&this._maybeFetchConfigEntry()}},{kind:"method",key:"_maybeFetchConfigEntry",value:async function(){if(this.value&&"homeassistant"!==this.value)try{this._configEntry=(await(0,p.RQ)(this.hass,this.value)).config_entry}catch(e){this._configEntry=void 0}else this._configEntry=void 0}},{kind:"field",key:"_debouncedUpdateAgents",value(){return(0,c.D)((()=>this._updateAgents()),500)}},{kind:"method",key:"_updateAgents",value:async function(){const{agents:e}=await(0,h.rM)(this.hass,this.language,this.hass.config.country||void 0);if(this._agents=e,!this.value)return;const t=e.find((e=>e.id===this.value));(0,r.B)(this,"supported-languages-changed",{value:null==t?void 0:t.supported_languages}),(!t||"*"!==t.supported_languages&&0===t.supported_languages.length)&&(this.value=void 0,(0,r.B)(this,"value-changed",{value:this.value}))}},{kind:"method",key:"_openOptionsFlow",value:async function(){this._configEntry&&(0,m.c)(this,this._configEntry,{manifest:await(0,u.t4)(this.hass,this._configEntry.domain)})}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:flex;align-items:center}ha-select{width:100%}ha-icon-button{color:var(--secondary-text-color)}`}},{kind:"method",key:"_changed",value:function(e){var t;const i=e.target;!this.hass||""===i.value||i.value===this.value||void 0===this.value&&i.value===g||(this.value=i.value===g?void 0:i.value,(0,r.B)(this,"value-changed",{value:this.value}),(0,r.B)(this,"supported-languages-changed",{value:null===(t=this._agents.find((e=>e.id===this.value)))||void 0===t?void 0:t.supported_languages}))}}]}}),o.oi);let v=(0,n.Z)([(0,a.Mo)("ha-selector-conversation_agent")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"method",key:"render",value:function(){var e,t;return o.dy`<ha-conversation-agent-picker .hass="${this.hass}" .value="${this.value}" .language="${(null===(e=this.selector.conversation_agent)||void 0===e?void 0:e.language)||(null===(t=this.context)||void 0===t?void 0:t.language)}" .label="${this.label}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required}"></ha-conversation-agent-picker>`}},{kind:"field",static:!0,key:"styles",value:()=>o.iv`ha-conversation-agent-picker{width:100%}`}]}}),o.oi)},81582:(e,t,i)=>{i.d(t,{DJ:()=>a,LZ:()=>n,Nn:()=>c,Ny:()=>p,Pk:()=>u,Q4:()=>o,RQ:()=>l,SO:()=>r,T0:()=>h,iJ:()=>d,pB:()=>s});const n=32143==i.j?["migration_error","setup_error","setup_retry"]:null,o=32143==i.j?["not_loaded","loaded","setup_error","setup_retry"]:null,a=(e,t,i)=>{const n={type:"config_entries/subscribe"};return i&&i.type&&(n.type_filter=i.type),e.connection.subscribeMessage((e=>t(e)),n)},s=(e,t)=>{const i={};return t&&(t.type&&(i.type_filter=t.type),t.domain&&(i.domain=t.domain)),e.callWS({type:"config_entries/get",...i})},l=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),r=(e,t,i)=>e.callWS({type:"config_entries/update",entry_id:t,...i}),d=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),c=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),p=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),h=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null}),u=(e,t)=>{const i=[...e],n=e=>{const i=t[e.domain];return"helper"===(null==i?void 0:i.integration_type)?-1:1};return i.sort(((e,t)=>n(t)-n(e)))}},57927:(e,t,i)=>{if(i.d(t,{T1:()=>a,rM:()=>o}),32143==i.j)var n=i(76680);const o=(e,t,i)=>e.callWS({type:"conversation/agent/list",language:t,country:i}),a=(e,t,i,o)=>e.callWS({type:"conversation/agent/homeassistant/debug",sentences:(0,n.r)(t),language:i,device_id:o})},5986:(e,t,i)=>{if(i.d(t,{F3:()=>d,H0:()=>l,Lh:()=>r,Mt:()=>p,O:()=>g,RO:()=>u,WH:()=>s,ez:()=>a,t4:()=>c}),32143==i.j)var n=i(97330);if(32143==i.j)var o=i(38346);const a={matter:"config/matter",mqtt:"config/mqtt",thread:"config/thread",zha:"config/zha/dashboard",zwave_js:"config/zwave_js/dashboard"};let s=function(e){return e[e.CRITICAL=50]="CRITICAL",e[e.ERROR=40]="ERROR",e[e.WARNING=30]="WARNING",e[e.INFO=20]="INFO",e[e.DEBUG=10]="DEBUG",e[e.NOTSET=0]="NOTSET",e}({});const l=(e,t)=>t.issue_tracker||`https://github.com/home-assistant/core/issues?q=is%3Aissue+is%3Aopen+label%3A%22integration%3A+${e}%22`,r=(e,t,i)=>e(`component.${t}.title`)||(null==i?void 0:i.name)||t,d=(e,t)=>{const i={type:"manifest/list"};return t&&(i.integrations=t),e.callWS(i)},c=(e,t)=>e.callWS({type:"manifest/get",integration:t}),p=e=>e.callWS({type:"integration/setup_info"}),h=e=>e.sendMessagePromise({type:"logger/log_info"}),u=(e,t,i,n)=>e.callWS({type:"logger/integration_log_level",integration:t,level:i,persistence:n}),m=(e,t)=>e.subscribeEvents((0,o.D)((()=>h(e).then((e=>t.setState(e,!0)))),200,!0),"logging_changed"),g=(e,t)=>(0,n.B)("_integration_log_info",h,m,e,t)},52871:(e,t,i)=>{i.d(t,{w:()=>a});var n=i(47181);const o=()=>Promise.all([i.e(42850),i.e(46992),i.e(28597),i.e(78133),i.e(50731),i.e(52154),i.e(33895),i.e(40163),i.e(59159)]).then(i.bind(i,59159)),a=(e,t,i)=>{(0,n.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:o,dialogParams:{...t,flowConfig:i,dialogParentElement:e}})}},18532:(e,t,i)=>{i.d(t,{c:()=>c});var n=i(68144),o=i(5986);const a=(e,t)=>{var i;return e.callApi("POST","config/config_entries/options/flow",{handler:t,show_advanced_options:Boolean(null===(i=e.userData)||void 0===i?void 0:i.showAdvanced)})},s=(e,t)=>e.callApi("GET",`config/config_entries/options/flow/${t}`),l=(e,t,i)=>e.callApi("POST",`config/config_entries/options/flow/${t}`,i),r=(e,t)=>e.callApi("DELETE",`config/config_entries/options/flow/${t}`);var d=i(52871);const c=(e,t,i)=>(0,d.w)(e,{startFlowHandler:t.entry_id,domain:t.domain,...i},{flowType:"options_flow",loadDevicesAndAreas:!1,createFlow:async(e,i)=>{const[n]=await Promise.all([a(e,i),e.loadFragmentTranslation("config"),e.loadBackendTranslation("options",t.domain),e.loadBackendTranslation("selector",t.domain)]);return n},fetchFlow:async(e,i)=>{const[n]=await Promise.all([s(e,i),e.loadFragmentTranslation("config"),e.loadBackendTranslation("options",t.domain),e.loadBackendTranslation("selector",t.domain)]);return n},handleFlowStep:l,deleteFlow:r,renderAbortDescription(e,i){const o=e.localize(`component.${t.domain}.options.abort.${i.reason}`,i.description_placeholders);return o?n.dy` <ha-markdown breaks allowsvg .content="${o}"></ha-markdown> `:""},renderShowFormStepHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`,i.description_placeholders)||e.localize("ui.dialogs.options_flow.form.header"),renderShowFormStepDescription(e,i){const o=e.localize(`component.${t.domain}.options.step.${i.step_id}.description`,i.description_placeholders);return o?n.dy` <ha-markdown allowsvg breaks .content="${o}"></ha-markdown> `:""},renderShowFormStepFieldLabel:(e,i,n)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.data.${n.name}`),renderShowFormStepFieldHelper(e,i,o){const a=e.localize(`component.${t.domain}.options.step.${i.step_id}.data_description.${o.name}`,i.description_placeholders);return a?n.dy`<ha-markdown breaks .content="${a}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,i,n)=>e.localize(`component.${t.domain}.options.error.${n}`,i.description_placeholders),renderShowFormStepFieldLocalizeValue:(e,i,n)=>e.localize(`component.${t.domain}.selector.${n}`),renderShowFormStepSubmitButton:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===i.last_step?"next":"submit")),renderExternalStepHeader:(e,t)=>"",renderExternalStepDescription:(e,t)=>"",renderCreateEntryDescription:(e,t)=>n.dy` <p>${e.localize("ui.dialogs.options_flow.success.description")}</p> `,renderShowFormProgressHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderShowFormProgressDescription(e,i){const o=e.localize(`component.${t.domain}.options.progress.${i.progress_action}`,i.description_placeholders);return o?n.dy` <ha-markdown allowsvg breaks .content="${o}"></ha-markdown> `:""},renderMenuHeader:(e,i)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.title`)||e.localize(`component.${t.domain}.title`),renderMenuDescription(e,i){const o=e.localize(`component.${t.domain}.options.step.${i.step_id}.description`,i.description_placeholders);return o?n.dy` <ha-markdown allowsvg breaks .content="${o}"></ha-markdown> `:""},renderMenuOption:(e,i,n)=>e.localize(`component.${t.domain}.options.step.${i.step_id}.menu_options.${n}`,i.description_placeholders),renderLoadingDescription:(e,i)=>e.localize(`component.${t.domain}.options.loading`)||("loading_flow"===i||"loading_step"===i?e.localize(`ui.dialogs.options_flow.loading.${i}`,{integration:(0,o.Lh)(e.localize,t.domain)}):"")})}};
//# sourceMappingURL=10272.BiL_p7uB6dQ.js.map