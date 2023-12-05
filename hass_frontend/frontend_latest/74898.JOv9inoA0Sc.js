export const id=74898;export const ids=[74898];export const modules={31206:(e,i,t)=>{t.r(i),t.d(i,{HaCircularProgress:()=>l});var a=t(17463),s=t(34541),o=t(47838),n=t(30879),r=t(68144),d=t(79932);let l=(0,a.Z)([(0,d.Mo)("ha-circular-progress")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean})],key:"active",value:()=>!1},{kind:"field",decorators:[(0,d.Cb)()],key:"alt",value:()=>"Loading"},{kind:"field",decorators:[(0,d.Cb)()],key:"size",value:()=>"medium"},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,s.Z)((0,o.Z)(t),"styles",this),r.iv`:host{overflow:hidden}`]}}]}}),n.D)},34821:(e,i,t)=>{t.d(i,{i:()=>u});var a=t(17463),s=t(34541),o=t(47838),n=t(87762),r=t(91632),d=t(68144),l=t(79932),c=t(74265);t(10983);const h=["button","ha-list-item"],u=(e,i)=>{var t;return d.dy` <div class="header_title">${i}</div> <ha-icon-button .label="${null!==(t=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `};(0,a.Z)([(0,l.Mo)("ha-dialog")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",key:c.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,i){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(e,i)}},{kind:"method",key:"renderHeading",value:function(){return d.dy`<slot name="heading"> ${(0,s.Z)((0,o.Z)(t.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,s.Z)((0,o.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)((0,o.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[r.W,d.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),n.M)},83927:(e,i,t)=>{var a=t(17463),s=t(8485),o=t(92038),n=t(68144),r=t(79932),d=t(47181);(0,a.Z)([(0,r.Mo)("ha-formfield")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"method",key:"_labelClick",value:function(){const e=this.input;if(e&&(e.focus(),!e.disabled))switch(e.tagName){case"HA-CHECKBOX":e.checked=!e.checked,(0,d.B)(e,"change");break;case"HA-RADIO":e.checked=!0,(0,d.B)(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value:()=>[o.W,n.iv`:host(:not([alignEnd])) ::slotted(ha-switch){margin-right:10px;margin-inline-end:10px;margin-inline-start:inline}.mdc-form-field>label{direction:var(--direction);margin-inline-start:0;margin-inline-end:auto;padding-inline-start:4px;padding-inline-end:0}`]}]}}),s.a)},43709:(e,i,t)=>{var a=t(17463),s=t(34541),o=t(47838),n=t(53464),r=t(4301),d=t(68144),l=t(79932),c=t(62359);(0,a.Z)([(0,l.Mo)("ha-switch")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"haptic",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(){(0,s.Z)((0,o.Z)(t.prototype),"firstUpdated",this).call(this),this.addEventListener("change",(()=>{this.haptic&&(0,c.j)("light")}))}},{kind:"field",static:!0,key:"styles",value:()=>[r.W,d.iv`:host{--mdc-theme-secondary:var(--switch-checked-color)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:var(--switch-checked-button-color);border-color:var(--switch-checked-button-color)}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:var(--switch-checked-track-color);border-color:var(--switch-checked-track-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:var(--switch-unchecked-button-color);border-color:var(--switch-unchecked-button-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:var(--switch-unchecked-track-color);border-color:var(--switch-unchecked-track-color)}`]}]}}),n.H)},22814:(e,i,t)=>{t.d(i,{Cp:()=>n,TZ:()=>r,W2:()=>o,YY:()=>d,iI:()=>s,oT:()=>a});const a=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return{...e,autocomplete:"username"};case"password":return{...e,autocomplete:"current-password"};case"code":return{...e,autocomplete:"one-time-code"};default:return e}})),s=(e,i)=>e.callWS({type:"auth/sign_path",path:i}),o=async(e,i,t,a)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:i,username:t,password:a}),n=(e,i,t)=>e.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:i,new_password:t}),r=(e,i,t)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:i,password:t}),d=e=>e.callWS({type:"auth/delete_all_refresh_tokens"})},74898:(e,i,t)=>{t.r(i),t.d(i,{DialogAddUser:()=>m});var a=t(17463),s=t(34541),o=t(47838),n=(t(14271),t(68144)),r=t(79932),d=t(87744),l=(t(31206),t(34821)),c=(t(83927),t(43709),t(22814)),h=t(65253),u=t(11654);t(3555);let m=(0,a.Z)([(0,r.Mo)("dialog-add-user")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_loading",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_username",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_password",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_passwordConfirm",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_isAdmin",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_localOnly",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_allowChangeName",value:()=>!0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._name=this._params.name||"",this._username="",this._password="",this._passwordConfirm="",this._isAdmin=!1,this._localOnly=!1,this._error=void 0,this._loading=!1,this._params.name?(this._allowChangeName=!1,this._maybePopulateUsername()):this._allowChangeName=!0}},{kind:"method",key:"firstUpdated",value:function(e){(0,s.Z)((0,o.Z)(t.prototype),"firstUpdated",this).call(this,e),this.addEventListener("keypress",(e=>{"Enter"===e.key&&this._createUser(e)}))}},{kind:"method",key:"render",value:function(){return this._params?n.dy` <ha-dialog open @closed="${this._close}" scrimClickAction escapeKeyAction .heading="${(0,l.i)(this.hass,this.hass.localize("ui.panel.config.users.add_user.caption"))}"> <div> ${this._error?n.dy` <div class="error">${this._error}</div> `:""} ${this._allowChangeName?n.dy`<ha-textfield class="name" name="name" .label="${this.hass.localize("ui.panel.config.users.editor.name")}" .value="${this._name}" required .validationMessage="${this.hass.localize("ui.common.error_required")}" @input="${this._handleValueChanged}" @blur="${this._maybePopulateUsername}" dialogInitialFocus></ha-textfield>`:""} <ha-textfield class="username" name="username" .label="${this.hass.localize("ui.panel.config.users.editor.username")}" .value="${this._username}" required @input="${this._handleValueChanged}" .validationMessage="${this.hass.localize("ui.common.error_required")}" dialogInitialFocus></ha-textfield> <ha-textfield .label="${this.hass.localize("ui.panel.config.users.add_user.password")}" type="password" name="password" .value="${this._password}" required @input="${this._handleValueChanged}" .validationMessage="${this.hass.localize("ui.common.error_required")}"></ha-textfield> <ha-textfield label="${this.hass.localize("ui.panel.config.users.add_user.password_confirm")}" name="passwordConfirm" .value="${this._passwordConfirm}" @input="${this._handleValueChanged}" required type="password" .invalid="${""!==this._password&&""!==this._passwordConfirm&&this._passwordConfirm!==this._password}" .validationMessage="${this.hass.localize("ui.panel.config.users.add_user.password_not_match")}"></ha-textfield> <div class="row"> <ha-formfield .label="${this.hass.localize("ui.panel.config.users.editor.local_only")}" .dir="${(0,d.Zu)(this.hass)}"> <ha-switch .checked="${this._localOnly}" @change="${this._localOnlyChanged}"> </ha-switch> </ha-formfield> </div> <div class="row"> <ha-formfield .label="${this.hass.localize("ui.panel.config.users.editor.admin")}" .dir="${(0,d.Zu)(this.hass)}"> <ha-switch .checked="${this._isAdmin}" @change="${this._adminChanged}"> </ha-switch> </ha-formfield> </div> ${this._isAdmin?"":n.dy` <br> ${this.hass.localize("ui.panel.config.users.users_privileges_note")} `} </div> ${this._loading?n.dy` <div slot="primaryAction" class="submit-spinner"> <ha-circular-progress active></ha-circular-progress> </div> `:n.dy` <mwc-button slot="primaryAction" .disabled="${!this._name||!this._username||!this._password||this._password!==this._passwordConfirm}" @click="${this._createUser}"> ${this.hass.localize("ui.panel.config.users.add_user.create")} </mwc-button> `} </ha-dialog> `:n.Ld}},{kind:"method",key:"_close",value:function(){this._params=void 0}},{kind:"method",key:"_maybePopulateUsername",value:function(){if(this._username||!this._name)return;const e=this._name.split(" ");e.length&&(this._username=e[0].toLowerCase())}},{kind:"method",key:"_handleValueChanged",value:function(e){this._error=void 0;const i=e.target;this[`_${i.name}`]=i.value}},{kind:"method",key:"_adminChanged",value:async function(e){const i=e.target;this._isAdmin=i.checked}},{kind:"method",key:"_localOnlyChanged",value:function(e){const i=e.target;this._localOnly=i.checked}},{kind:"method",key:"_createUser",value:async function(e){if(e.preventDefault(),!this._name||!this._username||!this._password)return;let i;this._loading=!0,this._error="";try{i=(await(0,h.r4)(this.hass,this._name,[this._isAdmin?h.Pb:h.CE],this._localOnly)).user}catch(e){return this._loading=!1,void(this._error=e.message)}try{await(0,c.W2)(this.hass,i.id,this._username,this._password)}catch(e){return await(0,h.h8)(this.hass,i.id),this._loading=!1,void(this._error=e.message)}i.username=this._username,this._params.userAddedCallback(i),this._close()}},{kind:"get",static:!0,key:"styles",value:function(){return[u.yu,n.iv`ha-dialog{--mdc-dialog-max-width:500px;--dialog-z-index:10}.row{display:flex;padding:8px 0}ha-textfield{display:block;margin-bottom:16px}`]}}]}}),n.oi)}};
//# sourceMappingURL=74898.JOv9inoA0Sc.js.map