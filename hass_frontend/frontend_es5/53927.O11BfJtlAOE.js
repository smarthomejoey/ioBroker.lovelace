"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[53927],{34821:function(e,t,i){i.d(t,{i:function(){return b}});var n,a,o,r=i(33368),d=i(71650),l=i(82390),c=i(69205),s=i(70906),p=i(91808),h=i(34541),u=i(47838),g=i(88962),v=(i(97393),i(91989),i(87762)),m=i(91632),f=i(68144),x=i(95260),y=i(74265),k=(i(10983),["button","ha-list-item"]),b=function(e,t){var i;return(0,f.dy)(n||(n=(0,g.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),t,null!==(i=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==i?i:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,p.Z)([(0,x.Mo)("ha-dialog")],(function(e,t){var i=function(t){(0,c.Z)(n,t);var i=(0,s.Z)(n);function n(){var t;(0,d.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,l.Z)(t)),t}return(0,r.Z)(n)}(t);return{F:i,d:[{kind:"field",key:y.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,f.dy)(a||(a=(0,g.Z)(['<slot name="heading"> '," </slot>"])),(0,h.Z)((0,u.Z)(i.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,h.Z)((0,u.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,k].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,u.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[m.W,(0,f.iv)(o||(o=(0,g.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),v.M)},53927:function(e,t,i){i.r(t),i.d(t,{HuiCreateDialogHeaderFooter:function(){return Z}});var n,a,o,r=i(88962),d=i(99312),l=i(81043),c=i(33368),s=i(71650),p=i(82390),h=i(69205),u=i(70906),g=i(91808),v=(i(97393),i(46349),i(70320),i(47704),i(68144)),m=i(95260),f=i(47181),x=i(34821),y=i(11654),k=[{type:"graph",icon:"M4 19V20H22V22H2V2H4V17C7 17 10 15 12.1 11.4C15.1 6.4 18.4 4 22 4V6C19.2 6 16.5 8.1 13.9 12.5C11.3 16.6 7.7 19 4 19Z"},{type:"buttons",icon:"M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z"},{type:"picture",icon:"M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z"}],b=(i(85717),i(89026)),_=function(){var e=(0,l.Z)((0,d.Z)().mark((function e(t,i,n,a){var o,r,l;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={type:i},e.next=3,(0,b.Q)(i);case 3:if(!(r=e.sent)||!r.getStubConfig){e.next=9;break}return e.next=7,r.getStubConfig(t,n,a);case 7:l=e.sent,o=Object.assign(Object.assign({},o),l);case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t,i,n,a){return e.apply(this,arguments)}}(),Z=(0,g.Z)([(0,m.Mo)("hui-dialog-create-headerfooter")],(function(e,t){var i,g,b=function(t){(0,h.Z)(n,t);var i=(0,u.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,p.Z)(t)),t}return(0,c.Z)(n)}(t);return{F:b,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_params",value:void 0},{kind:"method",key:"showDialog",value:(g=(0,l.Z)((0,d.Z)().mark((function e(t){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._params=t;case 1:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){return this._params=void 0,(0,f.B)(this,"dialog-closed",{dialog:this.localName}),!0}},{kind:"method",key:"render",value:function(){var e=this;return this._params?(0,v.dy)(n||(n=(0,r.Z)([' <ha-dialog open scrimClickAction .heading="','" @keydown="','" @closed="','"> <div class="elements"> ',' </div> <div slot="primaryAction"> <mwc-button @click="','"> '," </mwc-button> </div> </ha-dialog> "])),(0,x.i)(this.hass,this.hass.localize("ui.panel.lovelace.editor.header-footer.choose_header_footer",{type:this.hass.localize("ui.panel.lovelace.editor.header-footer.".concat(this._params.type))})),this._ignoreKeydown,this._cancel,k.map((function(t,i){return(0,v.dy)(a||(a=(0,r.Z)([' <ha-card role="button" tabindex="0" aria-labelledby="','" outlined .type="','" @click="','" @keyDown="','" dialogInitialFocus> <ha-svg-icon .path="','"></ha-svg-icon> <div .id="','" role="none presentation"> '," </div> </ha-card> "])),"card-name-"+i,t.type,e._handleHeaderFooterPicked,e._handleHeaderFooterPicked,t.icon,"card-name-"+i,e.hass.localize("ui.panel.lovelace.editor.header-footer.types.".concat(t.type,".name")))})),this._cancel,this.hass.localize("ui.common.cancel")):v.Ld}},{kind:"method",key:"_handleHeaderFooterPicked",value:(i=(0,l.Z)((0,d.Z)().mark((function e(t){var i,n,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof KeyboardEvent&&"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key)){e.next=2;break}return e.abrupt("return");case 2:if(i=t.currentTarget.type,n={type:i},!this.hass){e.next=8;break}return e.next=7,_(this.hass,i,(null===(a=this._params)||void 0===a?void 0:a.entities)||[],[]);case 7:n=e.sent;case 8:this._params.pickHeaderFooter(n),this.closeDialog();case 10:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{kind:"method",key:"_ignoreKeydown",value:function(e){e.stopPropagation()}},{kind:"method",key:"_cancel",value:function(e){e&&e.stopPropagation(),this.closeDialog()}},{kind:"get",static:!0,key:"styles",value:function(){return[y.yu,(0,v.iv)(o||(o=(0,r.Z)(["@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-max-height:100%;height:100%}}@media all and (min-width:850px){ha-dialog{--mdc-dialog-min-width:550px}}ha-dialog{--mdc-dialog-max-width:550px;--dialog-content-padding:2px 24px 20px 24px;--dialog-z-index:6}.elements{display:flex;flex-wrap:wrap}.spinner,ha-card{width:calc(50% - 8px);text-align:center;margin:4px}ha-card{box-sizing:border-box;padding:8px;color:var(--secondary-text-color);font-size:16px;cursor:pointer}ha-svg-icon{padding-bottom:4px;--mdc-icon-size:38px}"])))]}}]}}),v.oi)}}]);
//# sourceMappingURL=53927.O11BfJtlAOE.js.map