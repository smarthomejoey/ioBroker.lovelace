export const id=67029;export const ids=[67029];export const modules={34821:(i,e,t)=>{t.d(e,{i:()=>u});var o=t(17463),s=t(34541),a=t(47838),n=t(87762),d=t(91632),l=t(68144),c=t(79932),r=t(74265);t(10983);const h=["button","ha-list-item"],u=(i,e)=>{var t;return l.dy` <div class="header_title">${e}</div> <ha-icon-button .label="${null!==(t=null==i?void 0:i.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> `};(0,o.Z)([(0,c.Mo)("ha-dialog")],(function(i,e){class t extends e{constructor(...e){super(...e),i(this)}}return{F:t,d:[{kind:"field",key:r.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(i,e){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(i,e)}},{kind:"method",key:"renderHeading",value:function(){return l.dy`<slot name="heading"> ${(0,s.Z)((0,a.Z)(t.prototype),"renderHeading",this).call(this)} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){var i;(0,s.Z)((0,a.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,h].join(", "),this._updateScrolledAttribute(),null===(i=this.contentElement)||void 0===i||i.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)((0,a.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[d.W,l.iv`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),n.M)},67029:(i,e,t)=>{t.r(e);var o=t(17463),s=t(34541),a=t(47838),n=(t(14271),t(68144)),d=t(79932),l=t(47181),c=(t(31206),t(34821)),r=t(62770),h=t(11654);(0,o.Z)([(0,d.Mo)("dialog-zwave_js-remove-failed-node")],(function(i,e){class t extends e{constructor(...e){super(...e),i(this)}}return{F:t,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"device_id",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_status",value:()=>""},{kind:"field",decorators:[(0,d.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_node",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)((0,a.Z)(t.prototype),"disconnectedCallback",this).call(this),this._unsubscribe()}},{kind:"method",key:"showDialog",value:async function(i){this.device_id=i.device_id}},{kind:"method",key:"closeDialog",value:function(){this._unsubscribe(),this.device_id=void 0,this._status="",(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"closeDialogFinished",value:function(){history.back(),this.closeDialog()}},{kind:"method",key:"render",value:function(){return this.device_id?n.dy` <ha-dialog open @closed="${this.closeDialog}" .heading="${(0,c.i)(this.hass,this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.title"))}"> ${""===this._status?n.dy` <div class="flex-container"> <ha-svg-icon .path="${"M22 14H21C21 10.13 17.87 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2S10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14M9.86 16.68L8.68 17.86L7.5 16.68L6.32 17.86L5.14 16.68L6.32 15.5L5.14 14.32L6.32 13.14L7.5 14.32L8.68 13.14L9.86 14.32L8.68 15.5L9.86 16.68M18.86 16.68L17.68 17.86L16.5 16.68L15.32 17.86L14.14 16.68L15.32 15.5L14.14 14.32L15.32 13.14L16.5 14.32L17.68 13.14L18.86 14.32L17.68 15.5L18.86 16.68Z"}" class="introduction"></ha-svg-icon> <div class="status"> ${this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.introduction")} </div> </div> <mwc-button slot="primaryAction" @click="${this._startExclusion}"> ${this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.remove_device")} </mwc-button> `:""} ${"started"===this._status?n.dy` <div class="flex-container"> <ha-circular-progress active></ha-circular-progress> <div class="status"> <p> <b> ${this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.in_progress")} </b> </p> </div> </div> `:""} ${"failed"===this._status?n.dy` <div class="flex-container"> <ha-svg-icon .path="${"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"}" class="error"></ha-svg-icon> <div class="status"> <p> ${this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.removal_failed")} </p> ${this._error?n.dy` <p><em> ${this._error.message} </em></p> `:""} </div> </div> <mwc-button slot="primaryAction" @click="${this.closeDialog}"> ${this.hass.localize("ui.common.close")} </mwc-button> `:""} ${"finished"===this._status?n.dy` <div class="flex-container"> <ha-svg-icon .path="${"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"}" class="success"></ha-svg-icon> <div class="status"> <p> ${this.hass.localize("ui.panel.config.zwave_js.remove_failed_node.removal_finished",{id:this._node.node_id})} </p> </div> </div> <mwc-button slot="primaryAction" @click="${this.closeDialogFinished}"> ${this.hass.localize("ui.common.close")} </mwc-button> `:""} </ha-dialog> `:n.Ld}},{kind:"method",key:"_startExclusion",value:function(){this.hass&&(this._status="started",this._subscribed=(0,r.Hr)(this.hass,this.device_id,(i=>this._handleMessage(i))).catch((i=>{this._status="failed",this._error=i})))}},{kind:"method",key:"_handleMessage",value:function(i){"exclusion started"===i.event&&(this._status="started"),"node removed"===i.event&&(this._status="finished",this._node=i.node,this._unsubscribe())}},{kind:"method",key:"_unsubscribe",value:async function(){if(this._subscribed){const i=await this._subscribed;i instanceof Function&&i(),this._subscribed=void 0}"finished"!==this._status&&(this._status="")}},{kind:"get",static:!0,key:"styles",value:function(){return[h.yu,n.iv`.success{color:var(--success-color)}.failed{color:var(--warning-color)}.flex-container{display:flex;align-items:center}ha-svg-icon{width:68px;height:48px}.flex-container ha-circular-progress,.flex-container ha-svg-icon{margin-right:20px}`]}}]}}),n.oi)}};
//# sourceMappingURL=67029.iaXk9takjnA.js.map