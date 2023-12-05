"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[32360],{18601:function(e,t,n){n.d(t,{Wg:function(){return m},qN:function(){return p.q}});var i,r,a=n(71650),o=n(33368),s=n(34541),l=n(47838),c=n(69205),u=n(70906),d=(n(32797),n(5239),n(43204)),h=n(95260),p=n(78220),f=null!==(r=null===(i=window.ShadyDOM)||void 0===i?void 0:i.inUse)&&void 0!==r&&r,m=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).disabled=!1,e.containingForm=null,e.formDataListener=function(t){e.disabled||e.setFormData(t.formData)},e}return(0,o.Z)(n,[{key:"findFormElement",value:function(){if(!this.shadowRoot||f)return null;for(var e=this.getRootNode().querySelectorAll("form"),t=0,n=Array.from(e);t<n.length;t++){var i=n[t];if(i.contains(this))return i}return null}},{key:"connectedCallback",value:function(){var e;(0,s.Z)((0,l.Z)(n.prototype),"connectedCallback",this).call(this),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}},{key:"disconnectedCallback",value:function(){var e;(0,s.Z)((0,l.Z)(n.prototype),"disconnectedCallback",this).call(this),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}},{key:"click",value:function(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}},{key:"firstUpdated",value:function(){var e=this;(0,s.Z)((0,l.Z)(n.prototype),"firstUpdated",this).call(this),this.shadowRoot&&this.mdcRoot.addEventListener("change",(function(t){e.dispatchEvent(new Event("change",t))}))}}]),n}(p.H);m.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,d.__decorate)([(0,h.Cb)({type:Boolean})],m.prototype,"disabled",void 0)},75642:function(e,t,n){var i,r,a=n(88962),o=n(71650),s=n(33368),l=n(69205),c=n(70906),u=n(43204),d=n(68144),h=n(95260),p=(0,d.iv)(i||(i=(0,a.Z)([':host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}']))),f=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){return(0,d.dy)(r||(r=(0,a.Z)(["<span><slot></slot></span>"])))}}]),n}(d.oi);f.styles=[p],f=(0,u.__decorate)([(0,h.Mo)("mwc-icon")],f)},7323:function(e,t,n){n.d(t,{p:function(){return i}});n(40271),n(60163);var i=function(e,t){return e&&e.config.components.includes(t)}},32594:function(e,t,n){n.d(t,{U:function(){return i}});var i=function(e){return e.stopPropagation()}},96151:function(e,t,n){n.d(t,{T:function(){return i},y:function(){return r}});n(46798),n(47084);var i=function(e){requestAnimationFrame((function(){return setTimeout(e,0)}))},r=function(){return new Promise((function(e){i(e)}))}},73366:function(e,t,n){n.d(t,{M:function(){return k}});var i,r=n(88962),a=n(33368),o=n(71650),s=n(82390),l=n(69205),c=n(70906),u=n(91808),d=n(34541),h=n(47838),p=(n(97393),n(61092)),f=n(96762),m=n(68144),v=n(95260),k=(0,u.Z)([(0,v.Mo)("ha-list-item")],(function(e,t){var n=function(t){(0,l.Z)(i,t);var n=(0,c.Z)(i);function i(){var t;(0,o.Z)(this,i);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return t=n.call.apply(n,[this].concat(a)),e((0,s.Z)(t)),t}return(0,a.Z)(i)}(t);return{F:n,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,d.Z)((0,h.Z)(n.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[f.W,(0,m.iv)(i||(i=(0,r.Z)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"])))]}}]}}),p.K)},86630:function(e,t,n){var i,r,a,o,s=n(99312),l=n(81043),c=n(88962),u=n(33368),d=n(71650),h=n(82390),p=n(69205),f=n(70906),m=n(91808),v=n(34541),k=n(47838),y=(n(97393),n(49412)),g=n(3762),b=n(68144),Z=n(95260),_=n(38346),x=n(96151);n(10983),(0,m.Z)([(0,Z.Mo)("ha-select")],(function(e,t){var n=function(t){(0,p.Z)(i,t);var n=(0,f.Z)(i);function i(){var t;(0,d.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),e((0,h.Z)(t)),t}return(0,u.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,Z.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({type:Boolean,reflect:!0})],key:"clearable",value:void 0},{kind:"method",key:"render",value:function(){return(0,b.dy)(i||(i=(0,c.Z)([" "," "," "])),(0,v.Z)((0,k.Z)(n.prototype),"render",this).call(this),this.clearable&&!this.required&&!this.disabled&&this.value?(0,b.dy)(r||(r=(0,c.Z)(['<ha-icon-button label="clear" @click="','" .path="','"></ha-icon-button>'])),this._clearValue,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):b.Ld)}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,b.dy)(a||(a=(0,c.Z)(['<span class="mdc-select__icon"><slot name="icon"></slot></span>']))):b.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,v.Z)((0,k.Z)(n.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,v.Z)((0,k.Z)(n.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value:function(){var e=this;return(0,_.D)((0,l.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,x.y)();case 2:e.layoutOptions();case 3:case"end":return t.stop()}}),t)}))),500)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.W,(0,b.iv)(o||(o=(0,c.Z)([":host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}"])))]}}]}}),y.K)},38204:function(e,t,n){n.r(t),n.d(t,{HaBackupLocationSelector:function(){return L}});var i,r,a,o,s,l,c=n(88962),u=n(33368),d=n(71650),h=n(82390),p=n(69205),f=n(70906),m=n(91808),v=(n(97393),n(68144)),k=n(95260),y=n(99312),g=n(81043),b=(n(46349),n(70320),n(22859),n(87438),n(46798),n(9849),n(22890),n(40271),n(60163),n(37313),n(14516)),Z=n(7323),_=n(47181),x=n(32594),w=n(85415),C=n(29748),A=(n(9381),n(73366),n(86630),"/backup"),L=((0,m.Z)([(0,k.Mo)("ha-mount-picker")],(function(e,t){var n,s=function(t){(0,p.Z)(i,t);var n=(0,f.Z)(i);function i(){var t;(0,d.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),e((0,h.Z)(t)),t}return(0,u.Z)(i)}(t);return{F:s,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)()],key:"usage",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_mounts",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_error",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this._getMounts()}},{kind:"method",key:"render",value:function(){if(this._error)return(0,v.dy)(i||(i=(0,c.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error);if(!this._mounts)return v.Ld;var e=(0,v.dy)(r||(r=(0,c.Z)(['<ha-list-item graphic="icon" .value="','"> <span> ',' </span> <ha-svg-icon slot="graphic" .path="','"></ha-svg-icon> </ha-list-item>'])),A,this.hass.localize("ui.components.mount-picker.use_datadisk")||"Use data disk for backup","M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M12,4A6,6 0 0,0 6,10C6,13.31 8.69,16 12.1,16L11.22,13.77C10.95,13.29 11.11,12.68 11.59,12.4L12.45,11.9C12.93,11.63 13.54,11.79 13.82,12.27L15.74,14.69C17.12,13.59 18,11.9 18,10A6,6 0 0,0 12,4M12,9A1,1 0 0,1 13,10A1,1 0 0,1 12,11A1,1 0 0,1 11,10A1,1 0 0,1 12,9M7,18A1,1 0 0,0 6,19A1,1 0 0,0 7,20A1,1 0 0,0 8,19A1,1 0 0,0 7,18M12.09,13.27L14.58,19.58L17.17,18.08L12.95,12.77L12.09,13.27Z");return(0,v.dy)(a||(a=(0,c.Z)([' <ha-select .label="','" .value="','" .required="','" .disabled="','" .helper="','" @selected="','" @closed="','" fixedMenuPosition naturalMenuWidth> '," "," "," </ha-select> "])),void 0===this.label&&this.hass?this.hass.localize("ui.components.mount-picker.mount"):this.label,this._value,this.required,this.disabled,this.helper,this._mountChanged,x.U,this.usage!==C.eX.BACKUP||this._mounts.default_backup_mount&&this._mounts.default_backup_mount!==A?v.Ld:e,this._filterMounts(this._mounts,this.usage).map((function(e){return(0,v.dy)(o||(o=(0,c.Z)(['<ha-list-item twoline graphic="icon" .value="','"> <span>','</span> <span slot="secondary">',"","",'</span> <ha-svg-icon slot="graphic" .path="','"></ha-svg-icon> </ha-list-item>'])),e.name,e.name,e.server,e.port?":".concat(e.port):v.Ld,e.type===C.mw.NFS?e.path:":".concat(e.share),e.usage===C.eX.MEDIA?"M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M10 16V8L15 12":e.usage===C.eX.SHARE?"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z":"M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z")})),this.usage===C.eX.BACKUP&&this._mounts.default_backup_mount?e:v.Ld)}},{kind:"field",key:"_filterMounts",value:function(){var e=this;return(0,b.Z)((function(t,n){var i=t.mounts.filter((function(e){return[C.mw.CIFS,C.mw.NFS].includes(e.type)}));return n&&(i=t.mounts.filter((function(e){return e.usage===n}))),i.sort((function(n,i){return n.name===t.default_backup_mount?-1:i.name===t.default_backup_mount?1:(0,w.f)(n.name,i.name,e.hass.locale.language)}))}))}},{kind:"method",key:"_getMounts",value:(n=(0,g.Z)((0,y.Z)().mark((function e(){return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(0,Z.p)(this.hass,"hassio")){e.next=8;break}return e.next=4,(0,C.rE)(this.hass);case 4:this._mounts=e.sent,this.usage!==C.eX.BACKUP||this.value||(this.value=this._mounts.default_backup_mount||A),e.next=9;break;case 8:this._error=this.hass.localize("ui.components.mount-picker.error.no_supervisor");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),this._error=this.hass.localize("ui.components.mount-picker.error.fetch_mounts");case 14:case"end":return e.stop()}}),e,this,[[0,11]])}))),function(){return n.apply(this,arguments)})},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_mountChanged",value:function(e){e.stopPropagation();var t=e.target.value;t!==this._value&&this._setValue(t)}},{kind:"method",key:"_setValue",value:function(e){var t=this;this.value=e,setTimeout((function(){(0,_.B)(t,"value-changed",{value:e}),(0,_.B)(t,"change")}),0)}}]}}),v.oi),(0,m.Z)([(0,k.Mo)("ha-selector-backup_location")],(function(e,t){var n=function(t){(0,p.Z)(i,t);var n=(0,f.Z)(i);function i(){var t;(0,d.Z)(this,i);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a)),e((0,h.Z)(t)),t}return(0,u.Z)(i)}(t);return{F:n,d:[{kind:"field",decorators:[(0,k.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,k.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"method",key:"render",value:function(){return(0,v.dy)(s||(s=(0,c.Z)(['<ha-mount-picker .hass="','" .value="','" .label="','" .helper="','" .disabled="','" .required="','" usage="backup"></ha-mount-picker>'])),this.hass,this.value,this.label,this.helper,this.disabled,this.required)}},{kind:"field",static:!0,key:"styles",value:function(){return(0,v.iv)(l||(l=(0,c.Z)(["ha-mount-picker{width:100%}"])))}}]}}),v.oi))},29748:function(e,t,n){n.d(t,{TF:function(){return f},ap:function(){return m},eX:function(){return u},gp:function(){return v},mw:function(){return c},rE:function(){return h},wc:function(){return d},xM:function(){return p}});var i,r,a,o,s=n(99312),l=n(81043),c=(n(22859),function(e){return e.BIND="bind",e.CIFS="cifs",e.NFS="nfs",e}({})),u=function(e){return e.BACKUP="backup",e.MEDIA="media",e.SHARE="share",e}({}),d=function(e){return e.ACTIVE="active",e.FAILED="failed",e.UNKNOWN="unknown",e}({}),h=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/mounts",method:"get",timeout:null}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=32143==n.j?(i=(0,l.Z)((0,s.Z)().mark((function e(t,n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/mounts",method:"post",timeout:null,data:n}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return i.apply(this,arguments)}):null,f=32143==n.j?(r=(0,l.Z)((0,s.Z)().mark((function e(t,n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/mounts/".concat(n.name),method:"put",timeout:null,data:n}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)}):null,m=32143==n.j?(a=(0,l.Z)((0,s.Z)().mark((function e(t,n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/mounts/".concat(n),method:"delete",timeout:null}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)}):null,v=32143==n.j?(o=(0,l.Z)((0,s.Z)().mark((function e(t,n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/mounts/".concat(n.name,"/reload"),method:"post",timeout:null}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}):null},6057:function(e,t,n){var i=n(35449),r=n(17460),a=n(97673),o=n(10228),s=n(54053),l=Math.min,c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0,d=s("lastIndexOf"),h=u||!d;e.exports=h?function(e){if(u)return i(c,this,arguments)||0;var t=r(this),n=o(t),s=n-1;for(arguments.length>1&&(s=l(s,a(arguments[1]))),s<0&&(s=n+s);s>=0;s--)if(s in t&&t[s]===e)return s||0;return-1}:c},26349:function(e,t,n){var i=n(68077),r=n(6057);i({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})}}]);
//# sourceMappingURL=32360._f4i31aJUiE.js.map