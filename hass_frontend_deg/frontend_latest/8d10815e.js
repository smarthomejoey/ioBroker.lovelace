/*! For license information please see 8d10815e.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[54703],{55907:(e,t,i)=>{i.d(t,{$:()=>r});var r=function(){function e(){this.rafIDs=new Map}return e.prototype.request=function(e,t){var i=this;this.cancel(e);var r=requestAnimationFrame((function(r){i.rafIDs.delete(e),t(r)}));this.rafIDs.set(e,r)},e.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},e.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach((function(t,i){e.cancel(i)}))},e.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach((function(t,i){e.push(i)})),e},e}()},14114:(e,t,i)=>{i.d(t,{P:()=>r});const r=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,i)=>t.constructor._observers.set(i,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)}))}}t.constructor._observers.set(i,e)}},32421:(e,t,i)=>{i.d(t,{r:()=>g});var r=i(87480),s=i(26767),c=(i(66702),i(38103)),o=i(78220),a=i(14114),n=i(98734),d=i(72774),l={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},h={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"};const p=function(e){function t(i){return e.call(this,(0,r.__assign)((0,r.__assign)({},t.defaultAdapter),i))||this}return(0,r.__extends)(t,e),Object.defineProperty(t,"strings",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){},setNativeControlAttr:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setChecked=function(e){this.adapter.setNativeControlChecked(e),this.updateAriaChecked(e),this.updateCheckedStyling(e)},t.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(l.DISABLED):this.adapter.removeClass(l.DISABLED)},t.prototype.handleChange=function(e){var t=e.target;this.updateAriaChecked(t.checked),this.updateCheckedStyling(t.checked)},t.prototype.updateCheckedStyling=function(e){e?this.adapter.addClass(l.CHECKED):this.adapter.removeClass(l.CHECKED)},t.prototype.updateAriaChecked=function(e){this.adapter.setNativeControlAttr(h.ARIA_CHECKED_ATTR,""+!!e)},t}(d.K);var u=i(37500),m=i(5701),b=i(67352),_=i(35401),f=i(17717),v=i(84982),y=i(48399);class w extends o.H{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.shouldRenderRipple=!1,this.mdcFoundationClass=p,this.rippleHandlers=new n.A((()=>(this.shouldRenderRipple=!0,this.ripple)))}changeHandler(e){this.mdcFoundation.handleChange(e),this.checked=this.formElement.checked}createAdapter(){return Object.assign(Object.assign({},(0,o.q)(this.mdcRoot)),{setNativeControlChecked:e=>{this.formElement.checked=e},setNativeControlDisabled:e=>{this.formElement.disabled=e},setNativeControlAttr:(e,t)=>{this.formElement.setAttribute(e,t)}})}renderRipple(){return this.shouldRenderRipple?u.dy`
        <mwc-ripple
          .accent="${this.checked}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:""}focus(){const e=this.formElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.formElement;e&&(this.rippleHandlers.endFocus(),e.blur())}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}render(){return u.dy`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay">
          ${this.renderRipple()}
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              aria-label="${(0,y.o)(this.ariaLabel)}"
              aria-labelledby="${(0,y.o)(this.ariaLabelledBy)}"
              @change="${this.changeHandler}"
              @focus="${this.handleRippleFocus}"
              @blur="${this.handleRippleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
          </div>
        </div>
      </div>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}(0,r.__decorate)([(0,m.C)({type:Boolean}),(0,a.P)((function(e){this.mdcFoundation.setChecked(e)}))],w.prototype,"checked",void 0),(0,r.__decorate)([(0,m.C)({type:Boolean}),(0,a.P)((function(e){this.mdcFoundation.setDisabled(e)}))],w.prototype,"disabled",void 0),(0,r.__decorate)([c.L,(0,m.C)({attribute:"aria-label"})],w.prototype,"ariaLabel",void 0),(0,r.__decorate)([c.L,(0,m.C)({attribute:"aria-labelledby"})],w.prototype,"ariaLabelledBy",void 0),(0,r.__decorate)([(0,b.I)(".mdc-switch")],w.prototype,"mdcRoot",void 0),(0,r.__decorate)([(0,b.I)("input")],w.prototype,"formElement",void 0),(0,r.__decorate)([(0,_.G)("mwc-ripple")],w.prototype,"ripple",void 0),(0,r.__decorate)([(0,f.S)()],w.prototype,"shouldRenderRipple",void 0),(0,r.__decorate)([(0,v.h)({passive:!0})],w.prototype,"handleRippleMouseDown",null),(0,r.__decorate)([(0,v.h)({passive:!0})],w.prototype,"handleRippleTouchStart",null);const k=u.iv`.mdc-switch__thumb-underlay{left:-14px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-14px}.mdc-switch__native-control{width:64px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:36px;height:14px;border:1px solid transparent;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-16px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-16px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(16px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent}`;let g=class extends w{};g.styles=[k],g=(0,r.__decorate)([(0,s.M)("mwc-switch")],g)},15112:(e,t,i)=>{i.d(t,{P:()=>s});i(94604);var r=i(9672);class s{constructor(e){s[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return s.types[e]&&s.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=s.types[t]=s.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=s.types[this.type];return e?Object.keys(e).map((function(e){return c[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}s[" "]=function(){},s.types={};var c=s.types;(0,r.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var r=new s({type:e,key:t});return void 0!==i&&i!==r.value?r.value=i:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new s({type:this.type,key:e}).value}})}}]);
//# sourceMappingURL=8d10815e.js.map