/*! For license information please see 75430.yXNGdlXgLv0.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[75430],{18601:function(e,t,r){r.d(t,{Wg:function(){return v},qN:function(){return h.q}});var a,i,n=r(71650),o=r(33368),l=r(34541),c=r(47838),s=r(69205),d=r(70906),p=(r(32797),r(5239),r(43204)),u=r(95260),h=r(78220),f=null!==(i=null===(a=window.ShadyDOM)||void 0===a?void 0:a.inUse)&&void 0!==i&&i,v=function(e){(0,s.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).disabled=!1,e.containingForm=null,e.formDataListener=function(t){e.disabled||e.setFormData(t.formData)},e}return(0,o.Z)(r,[{key:"findFormElement",value:function(){if(!this.shadowRoot||f)return null;for(var e=this.getRootNode().querySelectorAll("form"),t=0,r=Array.from(e);t<r.length;t++){var a=r[t];if(a.contains(this))return a}return null}},{key:"connectedCallback",value:function(){var e;(0,l.Z)((0,c.Z)(r.prototype),"connectedCallback",this).call(this),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}},{key:"disconnectedCallback",value:function(){var e;(0,l.Z)((0,c.Z)(r.prototype),"disconnectedCallback",this).call(this),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}},{key:"click",value:function(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}},{key:"firstUpdated",value:function(){var e=this;(0,l.Z)((0,c.Z)(r.prototype),"firstUpdated",this).call(this),this.shadowRoot&&this.mdcRoot.addEventListener("change",(function(t){e.dispatchEvent(new Event("change",t))}))}}]),r}(h.H);v.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,p.__decorate)([(0,u.Cb)({type:Boolean})],v.prototype,"disabled",void 0)},8485:function(e,t,r){r.d(t,{a:function(){return x}});var a,i=r(88962),n=r(99312),o=r(81043),l=r(71650),c=r(33368),s=r(69205),d=r(70906),p=r(43204),u=r(72774),h={ROOT:"mdc-form-field"},f={LABEL_SELECTOR:".mdc-form-field > label"},v=function(e){function t(r){var a=e.call(this,(0,p.__assign)((0,p.__assign)({},t.defaultAdapter),r))||this;return a.click=function(){a.handleClick()},a}return(0,p.__extends)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(u.K),m=r(78220),y=r(18601),g=r(14114),b=r(68144),_=r(95260),k=r(83448),x=function(e){(0,s.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,l.Z)(this,r),(e=t.apply(this,arguments)).alignEnd=!1,e.spaceBetween=!1,e.nowrap=!1,e.label="",e.mdcFoundationClass=v,e}return(0,c.Z)(r,[{key:"createAdapter",value:function(){var e,t,r=this;return{registerInteractionHandler:function(e,t){r.labelEl.addEventListener(e,t)},deregisterInteractionHandler:function(e,t){r.labelEl.removeEventListener(e,t)},activateInputRipple:(t=(0,o.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=r.input)instanceof y.Wg)){e.next=6;break}return e.next=4,t.ripple;case 4:(a=e.sent)&&a.startPress();case 6:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)}),deactivateInputRipple:(e=(0,o.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=r.input)instanceof y.Wg)){e.next=6;break}return e.next=4,t.ripple;case 4:(a=e.sent)&&a.endPress();case 6:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})}}},{key:"input",get:function(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}},{key:"render",value:function(){var e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return(0,b.dy)(a||(a=(0,i.Z)([' <div class="mdc-form-field ','"> <slot></slot> <label class="mdc-label" @click="','">',"</label> </div>"])),(0,k.$)(e),this._labelClick,this.label)}},{key:"click",value:function(){this._labelClick()}},{key:"_labelClick",value:function(){var e=this.input;e&&(e.focus(),e.click())}}]),r}(m.H);(0,p.__decorate)([(0,_.Cb)({type:Boolean})],x.prototype,"alignEnd",void 0),(0,p.__decorate)([(0,_.Cb)({type:Boolean})],x.prototype,"spaceBetween",void 0),(0,p.__decorate)([(0,_.Cb)({type:Boolean})],x.prototype,"nowrap",void 0),(0,p.__decorate)([(0,_.Cb)({type:String}),(0,g.P)(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(r=this.input)||void 0===r||r.setAttribute("aria-label",t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}())],x.prototype,"label",void 0),(0,p.__decorate)([(0,_.IO)(".mdc-form-field")],x.prototype,"mdcRoot",void 0),(0,p.__decorate)([(0,_.vZ)("",!0,"*")],x.prototype,"slottedInputs",void 0),(0,p.__decorate)([(0,_.IO)("label")],x.prototype,"labelEl",void 0)},92038:function(e,t,r){r.d(t,{W:function(){return n}});var a,i=r(88962),n=(0,r(68144).iv)(a||(a=(0,i.Z)([".mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{margin-left:auto;margin-right:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{margin-left:0;margin-right:auto}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}.mdc-form-field--space-between>label[dir=rtl],[dir=rtl] .mdc-form-field--space-between>label{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}::slotted(mwc-switch){margin-right:10px}::slotted(mwc-switch[dir=rtl]),[dir=rtl] ::slotted(mwc-switch){margin-left:10px}"])))},75642:function(e,t,r){var a,i,n=r(88962),o=r(71650),l=r(33368),c=r(69205),s=r(70906),d=r(43204),p=r(68144),u=r(95260),h=(0,p.iv)(a||(a=(0,n.Z)([':host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}']))),f=function(e){(0,c.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"render",value:function(){return(0,p.dy)(i||(i=(0,n.Z)(["<span><slot></slot></span>"])))}}]),r}(p.oi);f.styles=[h],f=(0,d.__decorate)([(0,u.Mo)("mwc-icon")],f)},66695:function(e,t,r){r.d(t,{V:function(){return c}});var a=r(40039),i=r(33368),n=r(71650),o=(r(94738),r(98214),r(46798),r(51358),r(78399),r(5239),r(56086),r(47884),r(81912),r(64584),r(41483),r(12367),r(9454),r(98490),r(22859),r(56308),r(32797),r(37313),Symbol("selection controller")),l=(0,i.Z)((function e(){(0,n.Z)(this,e),this.selected=null,this.ordered=null,this.set=new Set})),c=function(){function e(t){var r=this;(0,n.Z)(this,e),this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,t.addEventListener("keydown",(function(e){r.keyDownHandler(e)})),t.addEventListener("mousedown",(function(){r.mousedownHandler()})),t.addEventListener("mouseup",(function(){r.mouseupHandler()}))}return(0,i.Z)(e,[{key:"keyDownHandler",value:function(e){var t=e.target;"checked"in t&&this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.selectNext(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.selectPrevious(t))}},{key:"mousedownHandler",value:function(){this.mouseIsDown=!0}},{key:"mouseupHandler",value:function(){this.mouseIsDown=!1}},{key:"has",value:function(e){return this.getSet(e.name).set.has(e)}},{key:"selectPrevious",value:function(e){var t=this.getOrdered(e),r=t.indexOf(e),a=t[r-1]||t[t.length-1];return this.select(a),a}},{key:"selectNext",value:function(e){var t=this.getOrdered(e),r=t.indexOf(e),a=t[r+1]||t[0];return this.select(a),a}},{key:"select",value:function(e){e.click()}},{key:"focus",value:function(e){if(!this.mouseIsDown){var t=this.getSet(e.name),r=this.focusedSet;this.focusedSet=t,r!=t&&t.selected&&t.selected!=e&&t.selected.focus()}}},{key:"isAnySelected",value:function(e){var t,r=this.getSet(e.name),i=(0,a.Z)(r.set);try{for(i.s();!(t=i.n()).done;){if(t.value.checked)return!0}}catch(n){i.e(n)}finally{i.f()}return!1}},{key:"getOrdered",value:function(e){var t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort((function(e,t){return e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0}))),t.ordered}},{key:"getSet",value:function(e){return this.sets[e]||(this.sets[e]=new l),this.sets[e]}},{key:"register",value:function(e){var t=e.name||e.getAttribute("name")||"",r=this.getSet(t);r.set.add(e),r.ordered=null}},{key:"unregister",value:function(e){var t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}},{key:"update",value:function(e){if(!this.updating){this.updating=!0;var t=this.getSet(e.name);if(e.checked){var r,i=(0,a.Z)(t.set);try{for(i.s();!(r=i.n()).done;){var n=r.value;n!=e&&(n.checked=!1)}}catch(s){i.e(s)}finally{i.f()}t.selected=e}if(this.isAnySelected(e)){var o,l=(0,a.Z)(t.set);try{for(l.s();!(o=l.n()).done;){var c=o.value;if(void 0===c.formElementTabIndex)break;c.formElementTabIndex=c.checked?0:-1}}catch(s){l.e(s)}finally{l.f()}}this.updating=!1}}}],[{key:"getController",value:function(t){var r=!("global"in t)||"global"in t&&t.global?document:t.getRootNode(),a=r[o];return void 0===a&&(a=new e(r),r[o]=a),a}}]),e}()},6057:function(e,t,r){var a=r(35449),i=r(17460),n=r(97673),o=r(10228),l=r(54053),c=Math.min,s=[].lastIndexOf,d=!!s&&1/[1].lastIndexOf(1,-0)<0,p=l("lastIndexOf"),u=d||!p;e.exports=u?function(e){if(d)return a(s,this,arguments)||0;var t=i(this),r=o(t),l=r-1;for(arguments.length>1&&(l=c(l,n(arguments[1]))),l<0&&(l=r+l);l>=0;l--)if(l in t&&t[l]===e)return l||0;return-1}:s},26349:function(e,t,r){var a=r(68077),i=r(6057);a({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},18098:function(e,t,r){var a=r(43173),i=r(37374),n=r(22933),o=r(59317),l=r(97142),c=r(11336),s=r(43313),d=r(54339),p=r(18513),u=r(94448);i("match",(function(e,t,r){return[function(t){var r=s(this),i=o(t)?void 0:d(t,e);return i?a(i,t,r):new RegExp(t)[e](c(r))},function(e){var a=n(this),i=c(e),o=r(t,a,i);if(o.done)return o.value;if(!a.global)return u(a,i);var s=a.unicode;a.lastIndex=0;for(var d,h=[],f=0;null!==(d=u(a,i));){var v=c(d[0]);h[f]=v,""===v&&(a.lastIndex=p(i,l(a.lastIndex),s)),f++}return 0===f?null:h}]}))},70818:function(e,t,r){r.d(t,{W:function(){return Z}});var a,i,n,o,l=r(33368),c=r(71650),s=r(69205),d=r(70906),p=r(43204),u=r(95260),h=r(88962),f=r(34541),v=r(47838),m=(r(85717),r(68144)),y=r(50325),g=r(189),b=function(e){(0,s.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,c.Z)(this,r),(e=t.apply(this,arguments)).avatar=!1,e.href="",e.target="",e.removeOnly=!1,e.selected=!1,e}return(0,l.Z)(r,[{key:"primaryId",get:function(){return this.href?"link":this.removeOnly?"":"button"}},{key:"rippleDisabled",get:function(){return!this.href&&this.disabled}},{key:"primaryAction",get:function(){return this.removeOnly?null:this.renderRoot.querySelector(".primary.action")}},{key:"getContainerClasses",value:function(){return Object.assign(Object.assign({},(0,f.Z)((0,v.Z)(r.prototype),"getContainerClasses",this).call(this)),{},{avatar:this.avatar,disabled:!this.href&&this.disabled,link:!!this.href,selected:this.selected,"has-trailing":!0})}},{key:"renderPrimaryAction",value:function(e){var t=this.ariaLabel;return this.href?(0,m.dy)(a||(a=(0,h.Z)([' <a class="primary action" id="link" aria-label="','" href="','" target="','">',"</a> "])),t||m.Ld,this.href,this.target||m.Ld,e):this.removeOnly?(0,m.dy)(i||(i=(0,h.Z)([' <span class="primary action" aria-label="','"> '," </span> "])),t||m.Ld,e):(0,m.dy)(n||(n=(0,h.Z)([' <button class="primary action" id="button" aria-label="','" ?disabled="','" type="button">',"</button> "])),t||m.Ld,this.disabled&&!this.alwaysFocusable,e)}},{key:"renderTrailingAction",value:function(e){return(0,g.N)({focusListener:e,ariaLabel:this.ariaLabelRemove,disabled:!this.href&&this.disabled,tabbable:this.removeOnly})}}]),r}(y.w);(0,p.__decorate)([(0,u.Cb)({type:Boolean})],b.prototype,"avatar",void 0),(0,p.__decorate)([(0,u.Cb)()],b.prototype,"href",void 0),(0,p.__decorate)([(0,u.Cb)()],b.prototype,"target",void 0),(0,p.__decorate)([(0,u.Cb)({type:Boolean,attribute:"remove-only"})],b.prototype,"removeOnly",void 0),(0,p.__decorate)([(0,u.Cb)({type:Boolean,reflect:!0})],b.prototype,"selected",void 0),(0,p.__decorate)([(0,u.IO)(".trailing.action")],b.prototype,"trailingAction",void 0);var _=(0,m.iv)(o||(o=(0,h.Z)([":host{--_container-height:var(--md-input-chip-container-height, 32px);--_container-shape:var(--md-input-chip-container-shape, 8px);--_disabled-label-text-color:var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity:var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color:var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity:var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font:var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height:var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size:var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight:var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color:var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color:var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color:var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color:var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity:var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color:var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width:var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color:var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color:var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity:var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color:var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity:var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color:var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color:var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color:var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color:var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity:var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color:var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color:var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width:var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color:var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color:var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity:var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape:var(--md-input-chip-avatar-shape, 9999px);--_avatar-size:var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity:var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color:var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity:var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size:var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color:var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color:var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color:var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color:var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color:var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color:var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color:var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color:var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color:var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity:var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color:var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color:var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color:var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color:var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color:var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color:var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color:var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color:var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start:var( --md-input-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end:var( --md-input-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end:var( --md-input-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start:var( --md-input-chip-container-shape-end-start, var(--_container-shape) )}:host([avatar]){--_container-shape-start-start:var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end:var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end:var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start:var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors:active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}"]))),k=r(42680),x=r(90704),w=r(43877),Z=function(e){(0,s.Z)(r,e);var t=(0,d.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r)}(b);Z.styles=[x.W,w.W,k.W,_],Z=(0,p.__decorate)([(0,u.Mo)("md-input-chip")],Z)},18848:function(e,t,r){r.d(t,{r:function(){return f}});var a=r(68990),i=r(40039),n=r(71650),o=r(33368),l=r(95281),c=r(69205),s=r(70906),d=(r(51358),r(96043),r(46798),r(5239),r(98490),r(51467),r(15304)),p=r(38941),u=r(81563),h=function(e,t,r){for(var a=new Map,i=t;i<=r;i++)a.set(e[i],i);return a},f=(0,p.XM)(function(e){(0,c.Z)(r,e);var t=(0,s.Z)(r);function r(e){var a;if((0,n.Z)(this,r),a=t.call(this,e),e.type!==p.pX.CHILD)throw Error("repeat() can only be used in text expressions");return(0,l.Z)(a)}return(0,o.Z)(r,[{key:"ct",value:function(e,t,r){var a;void 0===r?r=t:void 0!==t&&(a=t);var n,o=[],l=[],c=0,s=(0,i.Z)(e);try{for(s.s();!(n=s.n()).done;){var d=n.value;o[c]=a?a(d,c):c,l[c]=r(d,c),c++}}catch(p){s.e(p)}finally{s.f()}return{values:l,keys:o}}},{key:"render",value:function(e,t,r){return this.ct(e,t,r).values}},{key:"update",value:function(e,t){var r,i=(0,a.Z)(t,3),n=i[0],o=i[1],l=i[2],c=(0,u.i9)(e),s=this.ct(n,o,l),p=s.values,f=s.keys;if(!Array.isArray(c))return this.ut=f,p;for(var v,m,y=null!==(r=this.ut)&&void 0!==r?r:this.ut=[],g=[],b=0,_=c.length-1,k=0,x=p.length-1;b<=_&&k<=x;)if(null===c[b])b++;else if(null===c[_])_--;else if(y[b]===f[k])g[k]=(0,u.fk)(c[b],p[k]),b++,k++;else if(y[_]===f[x])g[x]=(0,u.fk)(c[_],p[x]),_--,x--;else if(y[b]===f[x])g[x]=(0,u.fk)(c[b],p[x]),(0,u._Y)(e,g[x+1],c[b]),b++,x--;else if(y[_]===f[k])g[k]=(0,u.fk)(c[_],p[k]),(0,u._Y)(e,c[b],c[_]),_--,k++;else if(void 0===v&&(v=h(f,k,x),m=h(y,b,_)),v.has(y[b]))if(v.has(y[_])){var w=m.get(f[k]),Z=void 0!==w?c[w]:null;if(null===Z){var I=(0,u._Y)(e,c[b]);(0,u.fk)(I,p[k]),g[k]=I}else g[k]=(0,u.fk)(Z,p[k]),(0,u._Y)(e,c[b],Z),c[w]=null;k++}else(0,u.ws)(c[_]),_--;else(0,u.ws)(c[b]),b++;for(;k<=x;){var C=(0,u._Y)(e,g[x+1]);(0,u.fk)(C,p[k]),g[k++]=C}for(;b<=_;){var O=c[b++];null!==O&&(0,u.ws)(O)}return this.ut=f,(0,u.hl)(e,g),d.Jb}}]),r}(p.Xe))}}]);
//# sourceMappingURL=75430.yXNGdlXgLv0.js.map