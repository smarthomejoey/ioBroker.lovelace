"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[62575],{34821:function(i,e,t){t.d(e,{i:function(){return k}});var s,a,o,n=t(33368),c=t(71650),l=t(82390),r=t(69205),d=t(70906),u=t(91808),h=t(34541),g=t(47838),v=t(88962),_=(t(97393),t(91989),t(87762)),p=t(91632),f=t(68144),m=t(95260),b=t(74265),y=(t(10983),["button","ha-list-item"]),k=function(i,e){var t;return(0,f.dy)(s||(s=(0,v.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),e,null!==(t=null==i?void 0:i.localize("ui.dialogs.generic.close"))&&void 0!==t?t:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,m.Mo)("ha-dialog")],(function(i,e){var t=function(e){(0,r.Z)(s,e);var t=(0,d.Z)(s);function s(){var e;(0,c.Z)(this,s);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),i((0,l.Z)(e)),e}return(0,n.Z)(s)}(e);return{F:t,d:[{kind:"field",key:b.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(i,e){var t;null===(t=this.contentElement)||void 0===t||t.scrollTo(i,e)}},{kind:"method",key:"renderHeading",value:function(){return(0,f.dy)(a||(a=(0,v.Z)(['<slot name="heading"> '," </slot>"])),(0,h.Z)((0,g.Z)(t.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var i;(0,h.Z)((0,g.Z)(t.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,y].join(", "),this._updateScrolledAttribute(),null===(i=this.contentElement)||void 0===i||i.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,g.Z)(t.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var i=this;return function(){i._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[p.W,(0,f.iv)(o||(o=(0,v.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),_.M)},62575:function(i,e,t){t.r(e);var s,a,o,n,c,l,r,d,u,h,g,v,_,p,f,m,b,y=t(99312),k=t(81043),x=t(88962),z=t(33368),w=t(71650),Z=t(82390),L=t(69205),S=t(70906),D=t(91808),C=(t(97393),t(51358),t(96043),t(46798),t(5239),t(98490),t(22859),t(46349),t(70320),t(32797),t(40271),t(60163),t(36513),t(9849),t(50289),t(94167),t(65974),t(47704),t(68144)),A=t(95260),M=t(47181),E=(t(31206),t(34821)),B=(t(52039),t(22383)),j=t(11654),H="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",P="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z";(0,D.Z)([(0,A.Mo)("dialog-zha-reconfigure-device")],(function(i,e){var t,D=function(e){(0,L.Z)(s,e);var t=(0,S.Z)(s);function s(){var e;(0,w.Z)(this,s);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),i((0,Z.Z)(e)),e}return(0,z.Z)(s)}(e);return{F:D,d:[{kind:"field",decorators:[(0,A.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,A.SB)()],key:"_status",value:void 0},{kind:"field",decorators:[(0,A.SB)()],key:"_stages",value:void 0},{kind:"field",decorators:[(0,A.SB)()],key:"_clusterConfigurationStatuses",value:function(){return new Map}},{kind:"field",decorators:[(0,A.SB)()],key:"_params",value:function(){}},{kind:"field",decorators:[(0,A.SB)()],key:"_allSuccessful",value:function(){return!0}},{kind:"field",decorators:[(0,A.SB)()],key:"_showDetails",value:function(){return!1}},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"showDialog",value:function(i){this._params=i,this._stages=void 0}},{kind:"method",key:"closeDialog",value:function(){this._unsubscribe(),this._params=void 0,this._status=void 0,this._stages=void 0,this._clusterConfigurationStatuses=void 0,this._showDetails=!1,(0,M.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var i,e=this;return this._params?(0,C.dy)(s||(s=(0,x.Z)([' <ha-dialog open @closed="','" .heading="','"> '," "," "," "," "," "," </ha-dialog> "])),this.closeDialog,(0,E.i)(this.hass,this.hass.localize("ui.dialogs.zha_reconfigure_device.heading")+": "+(this._params.device.user_given_name||this._params.device.name)),this._status?"":(0,C.dy)(a||(a=(0,x.Z)([" <p> "," </p> <p> <em> ",' </em> </p> <mwc-button slot="primaryAction" @click="','"> '," </mwc-button> "])),this.hass.localize("ui.dialogs.zha_reconfigure_device.introduction"),this.hass.localize("ui.dialogs.zha_reconfigure_device.battery_device_warning"),this._startReconfiguration,this.hass.localize("ui.dialogs.zha_reconfigure_device.start_reconfiguration")),"started"===this._status?(0,C.dy)(o||(o=(0,x.Z)([' <div class="flex-container"> <ha-circular-progress active></ha-circular-progress> <div class="status"> <p> <b> '," </b> </p> <p> ",' </p> </div> </div> <mwc-button slot="primaryAction" @click="','"> ',' </mwc-button> <mwc-button slot="secondaryAction" @click="','"> '," </mwc-button> "])),this.hass.localize("ui.dialogs.zha_reconfigure_device.in_progress"),this.hass.localize("ui.dialogs.zha_reconfigure_device.run_in_background"),this.closeDialog,this.hass.localize("ui.dialogs.generic.close"),this._toggleDetails,this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")):"","failed"===this._status?(0,C.dy)(n||(n=(0,x.Z)([' <div class="flex-container"> <ha-svg-icon .path="','" class="failed"></ha-svg-icon> <div class="status"> <p> ',' </p> </div> </div> <mwc-button slot="primaryAction" @click="','"> ',' </mwc-button> <mwc-button slot="secondaryAction" @click="','"> '," </mwc-button> "])),P,this.hass.localize("ui.dialogs.zha_reconfigure_device.configuration_failed"),this.closeDialog,this.hass.localize("ui.dialogs.generic.close"),this._toggleDetails,this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")):"","finished"===this._status?(0,C.dy)(c||(c=(0,x.Z)([' <div class="flex-container"> <ha-svg-icon .path="','" class="success"></ha-svg-icon> <div class="status"> <p> ',' </p> </div> </div> <mwc-button slot="primaryAction" @click="','"> ',' </mwc-button> <mwc-button slot="secondaryAction" @click="','"> '," </mwc-button> "])),H,this.hass.localize("ui.dialogs.zha_reconfigure_device.configuration_complete"),this.closeDialog,this.hass.localize("ui.dialogs.generic.close"),this._toggleDetails,this._showDetails?this.hass.localize("ui.dialogs.zha_reconfigure_device.button_hide"):this.hass.localize("ui.dialogs.zha_reconfigure_device.button_show")):"",this._stages?(0,C.dy)(l||(l=(0,x.Z)([' <div class="stages"> '," </div> "])),this._stages.map((function(i){return(0,C.dy)(r||(r=(0,x.Z)([' <span class="stage"> <ha-svg-icon .path="','" class="success"></ha-svg-icon> '," </span> "])),H,i)}))):"",this._showDetails?(0,C.dy)(d||(d=(0,x.Z)([' <div class="wrapper"> <h2 class="grid-item"> ',' </h2> <h2 class="grid-item"> ',' </h2> <h2 class="grid-item"> '," </h2> "," </div> "])),this.hass.localize("ui.dialogs.zha_reconfigure_device.cluster_header"),this.hass.localize("ui.dialogs.zha_reconfigure_device.bind_header"),this.hass.localize("ui.dialogs.zha_reconfigure_device.reporting_header"),null!==(i=this._clusterConfigurationStatuses)&&void 0!==i&&i.size?(0,C.dy)(u||(u=(0,x.Z)([" "," "])),Array.from(this._clusterConfigurationStatuses.values()).map((function(i){return(0,C.dy)(h||(h=(0,x.Z)([' <div class="grid-item"> ',' </div> <div class="grid-item"> ',' </div> <div class="grid-item"> '," </div> "])),i.cluster.name,void 0!==i.bindSuccess?i.bindSuccess?(0,C.dy)(g||(g=(0,x.Z)([' <span class="stage"> <ha-svg-icon .path="','" class="success"></ha-svg-icon> </span> '])),H):(0,C.dy)(v||(v=(0,x.Z)([' <span class="stage"> <ha-svg-icon .path="','" class="failed"></ha-svg-icon> </span> '])),P):"",i.attributes.size>0?(0,C.dy)(_||(_=(0,x.Z)([' <div class="attributes"> <div class="grid-item"> ',' </div> <div class="grid-item"> <div> '," </div> </div> "," </div> "])),e.hass.localize("ui.dialogs.zha_reconfigure_device.attribute"),e.hass.localize("ui.dialogs.zha_reconfigure_device.min_max_change"),Array.from(i.attributes.values()).map((function(i){return(0,C.dy)(p||(p=(0,x.Z)([' <span class="grid-item"> ',": ",' </span> <div class="grid-item"> ',"/","/"," </div> "])),i.name,i.success?(0,C.dy)(f||(f=(0,x.Z)([' <span class="stage"> <ha-svg-icon .path="','" class="success"></ha-svg-icon> </span> '])),H):(0,C.dy)(m||(m=(0,x.Z)([' <span class="stage"> <ha-svg-icon .path="','" class="failed"></ha-svg-icon> </span> '])),P),i.min,i.max,i.change)}))):"")}))):""):""):C.Ld}},{kind:"method",key:"_startReconfiguration",value:(t=(0,k.Z)((0,y.Z)().mark((function i(){return(0,y.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(this.hass&&this._params){i.next=2;break}return i.abrupt("return");case 2:return i.t0=Map,i.next=5,(0,B.ez)(this.hass,this._params.device.ieee);case 5:i.t1=i.sent.map((function(i){return[i.id,{cluster:i,bindSuccess:void 0,attributes:new Map}]})),this._clusterConfigurationStatuses=new i.t0(i.t1),this._subscribe(this._params),this._status="started";case 9:case"end":return i.stop()}}),i,this)}))),function(){return t.apply(this,arguments)})},{kind:"method",key:"_handleMessage",value:function(i){var e=this;if(i.type===B.H4)this._unsubscribe(),this._status=this._allSuccessful?"finished":"failed";else{var t=this._clusterConfigurationStatuses.get(i.zha_channel_msg_data.cluster_id);if(i.type===B.mS){this._stages||(this._stages=["binding"]);var s=i.zha_channel_msg_data.success;t.bindSuccess=s,this._allSuccessful=this._allSuccessful&&s}if(i.type===B.lu){this._stages&&!this._stages.includes("reporting")&&this._stages.push("reporting");var a=i.zha_channel_msg_data.attributes;Object.keys(a).forEach((function(i){var s=a[i];t.attributes.set(s.id,s),e._allSuccessful=e._allSuccessful&&s.success}))}this.requestUpdate()}}},{kind:"method",key:"_unsubscribe",value:function(){this._subscribed&&(this._subscribed.then((function(i){return i()})),this._subscribed=void 0)}},{kind:"method",key:"_subscribe",value:function(i){this.hass&&(this._subscribed=(0,B.$l)(this.hass,i.device.ieee,this._handleMessage.bind(this)))}},{kind:"method",key:"_toggleDetails",value:function(){this._showDetails=!this._showDetails}},{kind:"get",static:!0,key:"styles",value:function(){return[j.yu,(0,C.iv)(b||(b=(0,x.Z)([".wrapper{display:grid;grid-template-columns:3fr 1fr 2fr}.attributes{display:grid;grid-template-columns:1fr 1fr}.grid-item{border:1px solid;padding:7px}.success{color:var(--success-color)}.failed{color:var(--warning-color)}.flex-container{display:flex;align-items:center}.stages{margin-top:16px}.stage ha-svg-icon{width:16px;height:16px}.stage{padding:8px}ha-svg-icon{width:68px;height:48px}.flex-container ha-circular-progress,.flex-container ha-svg-icon{margin-right:20px}"])))]}}]}}),C.oi)}}]);
//# sourceMappingURL=62575.7wOq8FdrfdA.js.map