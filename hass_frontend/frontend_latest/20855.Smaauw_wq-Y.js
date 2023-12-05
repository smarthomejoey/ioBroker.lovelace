/*! For license information please see 20855.Smaauw_wq-Y.js.LICENSE.txt */
export const id=20855;export const ids=[20855];export const modules={21270:(e,t,i)=>{i.d(t,{W:()=>o});const o=i(68144).iv`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`},66695:(e,t,i)=>{i.d(t,{V:()=>a});const o=Symbol("selection controller");class s{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class a{constructor(e){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",(e=>{this.keyDownHandler(e)})),e.addEventListener("mousedown",(()=>{this.mousedownHandler()})),e.addEventListener("mouseup",(()=>{this.mouseupHandler()}))}static getController(e){const t=!("global"in e)||"global"in e&&e.global?document:e.getRootNode();let i=t[o];return void 0===i&&(i=new a(t),t[o]=i),i}keyDownHandler(e){const t=e.target;"checked"in t&&this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.selectNext(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.selectPrevious(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}selectPrevious(e){const t=this.getOrdered(e),i=t.indexOf(e),o=t[i-1]||t[t.length-1];return this.select(o),o}selectNext(e){const t=this.getOrdered(e),i=t.indexOf(e),o=t[i+1]||t[0];return this.select(o),o}select(e){e.click()}focus(e){if(this.mouseIsDown)return;const t=this.getSet(e.name),i=this.focusedSet;this.focusedSet=t,i!=t&&t.selected&&t.selected!=e&&t.selected.focus()}isAnySelected(e){const t=this.getSet(e.name);for(const e of t.set)if(e.checked)return!0;return!1}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort(((e,t)=>e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0))),t.ordered}getSet(e){return this.sets[e]||(this.sets[e]=new s),this.sets[e]}register(e){const t=e.name||e.getAttribute("name")||"",i=this.getSet(t);i.set.add(e),i.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}update(e){if(this.updating)return;this.updating=!0;const t=this.getSet(e.name);if(e.checked){for(const i of t.set)i!=e&&(i.checked=!1);t.selected=e}if(this.isAnySelected(e))for(const e of t.set){if(void 0===e.formElementTabIndex)break;e.formElementTabIndex=e.checked?0:-1}this.updating=!1}}},32594:(e,t,i)=>{i.d(t,{U:()=>o});const o=e=>e.stopPropagation()},34821:(e,t,i)=>{i.d(t,{i:()=>u});var o=i(17463),s=i(34541),a=i(47838),n=i(87762),d=i(91632),l=i(68144),c=i(79932),r=i(74265);i(10983);const h=["button","ha-list-item"],u=(e,t)=>{var i;return l.dy` <div class="header_title">${t}</div> <ha-icon-button .label="${null!==(i=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==i?i:"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `};(0,o.Z)([(0,c.Mo)("ha-dialog")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:r.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return l.dy`<slot name="heading"> ${(0,s.Z)((0,a.Z)(i.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,s.Z)((0,a.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)((0,a.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,l.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),n.M)},86630:(e,t,i)=>{var o=i(17463),s=i(34541),a=i(47838),n=i(49412),d=i(3762),l=i(68144),c=i(79932),r=i(38346),h=i(96151);i(10983);(0,o.Z)([(0,c.Mo)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean,reflect:!0})],key:"clearable",value:void 0},{kind:"method",key:"render",value:function(){return l.dy` ${(0,s.Z)((0,a.Z)(i.prototype),"render",this).call(this)} ${this.clearable&&!this.required&&!this.disabled&&this.value?l.dy`<ha-icon-button label="clear" @click="${this._clearValue}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:l.Ld} `}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?l.dy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:l.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)((0,a.Z)(i.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)((0,a.Z)(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,r.D)((async()=>{await(0,h.y)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,l.iv`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}`]}]}}),n.K)},95042:(e,t,i)=>{i.d(t,{JR:()=>s,Y:()=>a,iM:()=>n,j2:()=>o});const o=e=>e.callWS({type:"lovelace/dashboards/list"}),s=(e,t)=>e.callWS({type:"lovelace/dashboards/create",...t}),a=(e,t,i)=>e.callWS({type:"lovelace/dashboards/update",dashboard_id:t,...i}),n=(e,t)=>e.callWS({type:"lovelace/dashboards/delete",dashboard_id:t})},20855:(e,t,i)=>{i.r(t),i.d(t,{HuiDialogSelectView:()=>w});var o=i(17463),s=(i(63436),i(44577),i(43204)),a=i(79932),n=i(21270),d=i(96762),l=i(35433),c=i(44973);i(66695);let r=class extends l.J{};r.styles=[c.W],r=(0,s.__decorate)([(0,a.Mo)("mwc-radio")],r);var h=i(68144),u=i(83448),m=i(30153),p=i(61092);class g extends p.K{constructor(){super(...arguments),this.left=!1,this.graphic="control",this._changeFromClick=!1}render(){const e={"mdc-deprecated-list-item__graphic":this.left,"mdc-deprecated-list-item__meta":!this.left},t=this.renderText(),i=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():h.dy``,o=this.hasMeta&&this.left?this.renderMeta():h.dy``,s=this.renderRipple();return h.dy` ${s} ${i} ${this.left?"":t} <mwc-radio global class="${(0,u.$)(e)}" tabindex="${this.tabindex}" name="${(0,m.o)(null===this.group?void 0:this.group)}" .checked="${this.selected}" ?disabled="${this.disabled}" @checked="${this.onChange}"> </mwc-radio> ${this.left?t:""} ${o}`}onClick(){this._changeFromClick=!0,super.onClick()}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1,this._changeFromClick||this.fireRequestSelected(this.selected,"interaction")),this._changeFromClick=!1}}(0,s.__decorate)([(0,a.IO)("slot")],g.prototype,"slotElement",void 0),(0,s.__decorate)([(0,a.IO)("mwc-radio")],g.prototype,"radioElement",void 0),(0,s.__decorate)([(0,a.Cb)({type:Boolean})],g.prototype,"left",void 0),(0,s.__decorate)([(0,a.Cb)({type:String,reflect:!0})],g.prototype,"graphic",void 0);let v=class extends g{};v.styles=[d.W,n.W],v=(0,s.__decorate)([(0,a.Mo)("mwc-radio-list-item")],v);var _=i(47181),f=i(32594),k=i(34821),y=(i(81312),i(86630),i(36877)),b=i(95042),x=i(11654);let w=(0,o.Z)([(0,a.Mo)("hui-dialog-select-view")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_dashboards",value:()=>[]},{kind:"field",decorators:[(0,a.SB)()],key:"_urlPath",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_selectedViewIdx",value:()=>0},{kind:"method",key:"showDialog",value:function(e){this._config=e.lovelaceConfig,this._urlPath=e.urlPath,this._params=e,this._params.allowDashboardChange&&this._getDashboards()}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,_.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e;return this._params?h.dy` <ha-dialog open @closed="${this.closeDialog}" .heading="${(0,k.i)(this.hass,this._params.header||this.hass.localize("ui.panel.lovelace.editor.select_view.header"))}"> ${this._params.allowDashboardChange?h.dy`<ha-select .label="${this.hass.localize("ui.panel.lovelace.editor.select_view.dashboard_label")}" .disabled="${!this._dashboards.length}" .value="${this._urlPath||this.hass.defaultPanel}" @selected="${this._dashboardChanged}" @closed="${f.U}" fixedMenuPosition naturalMenuWidth dialogInitialFocus> <mwc-list-item value="lovelace" .disabled="${"yaml"===(null===(e=this.hass.panels.lovelace)||void 0===e||null===(e=e.config)||void 0===e?void 0:e.mode)}"> Default </mwc-list-item> ${this._dashboards.map((e=>!this.hass.user.is_admin&&e.require_admin?"":h.dy` <mwc-list-item .disabled="${"storage"!==e.mode}" .value="${e.url_path}">${e.title}</mwc-list-item> `))} </ha-select>`:""} ${this._config?this._config.views.length>1?h.dy` <mwc-list dialogInitialFocus> ${this._config.views.map(((e,t)=>{var i;return h.dy` <mwc-radio-list-item .graphic="${null!==(i=this._config)&&void 0!==i&&i.views.some((({icon:e})=>e))?"icon":h.Ld}" @click="${this._viewChanged}" .value="${t.toString()}" .selected="${this._selectedViewIdx===t}"> <span>${e.title}</span> <ha-icon .icon="${e.icon}" slot="graphic"></ha-icon> </mwc-radio-list-item> `}))} </mwc-list> `:"":h.dy`<div>No config found.</div>`} <mwc-button slot="secondaryAction" @click="${this.closeDialog}" dialogInitialFocus> ${this.hass.localize("ui.common.cancel")} </mwc-button> <mwc-button slot="primaryAction" @click="${this._selectView}"> ${this._params.actionLabel||this.hass.localize("ui.common.move")} </mwc-button> </ha-dialog> `:h.Ld}},{kind:"method",key:"_getDashboards",value:async function(){this._dashboards=this._params.dashboards||await(0,b.j2)(this.hass)}},{kind:"method",key:"_dashboardChanged",value:async function(e){let t=e.target.value;if(t!==this._urlPath){"lovelace"===t&&(t=null),this._urlPath=t,this._selectedViewIdx=0;try{this._config=await(0,y.Q2)(this.hass.connection,t,!1)}catch(e){this._config=void 0}}}},{kind:"method",key:"_viewChanged",value:function(e){const t=Number(e.target.value);isNaN(t)||(this._selectedViewIdx=t)}},{kind:"method",key:"_selectView",value:function(){(0,_.B)(this,"view-selected",{view:this._selectedViewIdx}),this._params.viewSelectedCallback(this._urlPath,this._config,this._selectedViewIdx),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[x.yu,h.iv`ha-select{width:100%}mwc-radio-list-item{direction:ltr}`]}}]}}),h.oi)}};
//# sourceMappingURL=20855.Smaauw_wq-Y.js.map