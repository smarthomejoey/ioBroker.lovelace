"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[74535],{74535:function(e,t,i){var n,a,o,r=i(99312),d=i(81043),l=i(33368),s=i(71650),u=i(82390),c=i(69205),v=i(70906),h=i(91808),f=i(88962),b=(i(97393),i(65974),i(87438),i(46798),i(9849),i(22890),i(40271),i(60163),i(37313),i(46349),i(70320),i(85717),i(73366),i(68144)),y=i(95260),p=i(14516),m=i(47181),k=i(58831),_=i(91741),g=i(40163),C=(i(77576),i(10983),i(52039),i(3143),i(85415)),x=function(e){return(0,b.dy)(n||(n=(0,f.Z)(['<ha-list-item graphic="avatar" .twoline="','"> '," <span>",'</span> <span slot="secondary">',"</span> </ha-list-item>"])),!!e.entity_id,e.state?(0,b.dy)(a||(a=(0,f.Z)(['<state-badge slot="graphic" .stateObj="','"></state-badge>'])),e):"",e.friendly_name,e.entity_id)};(0,h.Z)([(0,y.Mo)("ha-entity-picker")],(function(e,t){var i,n,a=function(t){(0,c.Z)(n,t);var i=(0,v.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,u.Z)(t)),t}return(0,l.Z)(n)}(t);return{F:a,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"autofocus",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"hideClearIcon",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:function(){return"friendly_name"}},{kind:"field",decorators:[(0,y.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,y.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"open",value:(n=(0,d.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this.comboBox)||void 0===t?void 0:t.open();case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"focus",value:(i=(0,d.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this.comboBox)||void 0===t?void 0:t.focus();case 4:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"field",key:"_initedStates",value:function(){return!1}},{kind:"field",key:"_states",value:function(){return[]}},{kind:"field",key:"_getStates",value:function(){var e=this;return(0,p.Z)((function(t,i,n,a,o,r,d,l,s){var u=[];if(!i)return[];var c=Object.keys(i.states);return c.length?l?(c=c.filter((function(t){return e.includeEntities.includes(t)}))).map((function(e){var t=(0,_.C)(i.states[e])||e;return Object.assign(Object.assign({},i.states[e]),{},{friendly_name:t,strings:[e,t]})})).sort((function(t,i){return(0,C.f)(t.friendly_name,i.friendly_name,e.hass.locale.language)})):(s&&(c=c.filter((function(e){return!s.includes(e)}))),n&&(c=c.filter((function(e){return n.includes((0,k.M)(e))}))),a&&(c=c.filter((function(e){return!a.includes((0,k.M)(e))}))),u=c.map((function(e){var t=(0,_.C)(i.states[e])||e;return Object.assign(Object.assign({},i.states[e]),{},{friendly_name:t,strings:[e,t]})})).sort((function(t,i){return(0,C.f)(t.friendly_name,i.friendly_name,e.hass.locale.language)})),r&&(u=u.filter((function(t){return t.entity_id===e.value||t.attributes.device_class&&r.includes(t.attributes.device_class)}))),d&&(u=u.filter((function(t){return t.entity_id===e.value||t.attributes.unit_of_measurement&&d.includes(t.attributes.unit_of_measurement)}))),o&&(u=u.filter((function(t){return t.entity_id===e.value||o(t)}))),u.length?u:[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:e.hass.localize("ui.components.entity.entity-picker.no_match"),attributes:{friendly_name:e.hass.localize("ui.components.entity.entity-picker.no_match"),icon:"mdi:magnify"},strings:[]}]):[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:e.hass.localize("ui.components.entity.entity-picker.no_entities"),attributes:{friendly_name:e.hass.localize("ui.components.entity.entity-picker.no_entities"),icon:"mdi:magnify"},strings:[]}]}))}},{kind:"method",key:"shouldUpdate",value:function(e){return!!(e.has("value")||e.has("label")||e.has("disabled"))||!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"willUpdate",value:function(e){(!this._initedStates||e.has("_opened")&&this._opened)&&(this._states=this._getStates(this._opened,this.hass,this.includeDomains,this.excludeDomains,this.entityFilter,this.includeDeviceClasses,this.includeUnitOfMeasurement,this.includeEntities,this.excludeEntities),this._initedStates&&(this.comboBox.filteredItems=this._states),this._initedStates=!0)}},{kind:"method",key:"render",value:function(){return(0,b.dy)(o||(o=(0,f.Z)([' <ha-combo-box item-value-path="entity_id" .itemLabelPath="','" .hass="','" .value="','" .label="','" .helper="','" .allowCustomValue="','" .filteredItems="','" .renderer="','" .required="','" .disabled="','" @opened-changed="','" @value-changed="','" @filter-changed="','"> </ha-combo-box> '])),this.itemLabelPath,this.hass,this._value,void 0===this.label?this.hass.localize("ui.components.entity.entity-picker.entity"):this.label,this.helper,this.allowCustomEntity,this._states,x,this.required,this.disabled,this._openedChanged,this._valueChanged,this._filterChanged)}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation();var t=e.detail.value;t!==this._value&&this._setValue(t)}},{kind:"method",key:"_filterChanged",value:function(e){var t=e.target,i=e.detail.value.toLowerCase();t.filteredItems=i.length?(0,g.q)(i,this._states):this._states}},{kind:"method",key:"_setValue",value:function(e){var t=this;this.value=e,setTimeout((function(){(0,m.B)(t,"value-changed",{value:e}),(0,m.B)(t,"change")}),0)}}]}}),b.oi)},77576:function(e,t,i){var n,a,o,r,d,l,s=i(99312),u=i(81043),c=i(33368),v=i(71650),h=i(82390),f=i(69205),b=i(70906),y=i(91808),p=i(34541),m=i(47838),k=i(88962),_=(i(97393),i(46798),i(9849),i(50289),i(94167),i(29530)),g=(i(93584),i(53947)),C=i(68144),x=i(95260),O=i(30153),M=i(47181);i(10983),i(73366),i(3555);(0,g.hC)("vaadin-combo-box-item",(0,C.iv)(n||(n=(0,k.Z)([':host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}']))));(0,y.Z)([(0,x.Mo)("ha-combo-box")],(function(e,t){var i,n,y=function(t){(0,f.Z)(n,t);var i=(0,b.Z)(n);function n(){var t;(0,v.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,h.Z)(t)),t}return(0,c.Z)(n)}(t);return{F:y,d:[{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,x.Cb)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,x.Cb)({type:Boolean})],key:"invalid",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean})],key:"icon",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,x.Cb)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({attribute:"item-value-path"})],key:"itemValuePath",value:function(){return"value"}},{kind:"field",decorators:[(0,x.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value:function(){return"label"}},{kind:"field",decorators:[(0,x.Cb)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"renderer",value:void 0},{kind:"field",decorators:[(0,x.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,reflect:!0,attribute:"opened"})],key:"opened",value:void 0},{kind:"field",decorators:[(0,x.IO)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,x.IO)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:(n=(0,u.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:null===(t=this._comboBox)||void 0===t||t.open();case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"focus",value:(i=(0,u.Z)((0,s.Z)().mark((function e(){var t,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateComplete;case 2:return e.next=4,null===(t=this._inputElement)||void 0===t?void 0:t.updateComplete;case 4:null===(i=this._inputElement)||void 0===i||i.focus();case 5:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"disconnectedCallback",value:function(){(0,p.Z)((0,m.Z)(y.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return(0,C.dy)(a||(a=(0,k.Z)([' <vaadin-combo-box-light .itemValuePath="','" .itemIdPath="','" .itemLabelPath="','" .items="','" .value="','" .filteredItems="','" .dataProvider="','" .allowCustomValue="','" .disabled="','" .required="','" ',' @opened-changed="','" @filter-changed="','" @value-changed="','" attr-for-value="value"> <ha-textfield label="','" placeholder="','" ?disabled="','" ?required="','" validationMessage="','" .errorMessage="','" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" input-spellcheck="false" .suffix="','" .icon="','" .invalid="','" helper="','" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ',' <ha-svg-icon role="button" tabindex="-1" aria-label="','" aria-expanded="','" class="toggle-button" .path="','" @click="','"></ha-svg-icon> </vaadin-combo-box-light> '])),this.itemValuePath,this.itemIdPath,this.itemLabelPath,this.items,this.value||"",this.filteredItems,this.dataProvider,this.allowCustomValue,this.disabled,this.required,(0,_.t)(this.renderer||this._defaultRowRenderer),this._openedChanged,this._filterChanged,this._valueChanged,(0,O.o)(this.label),(0,O.o)(this.placeholder),this.disabled,this.required,(0,O.o)(this.validationMessage),this.errorMessage,(0,C.dy)(o||(o=(0,k.Z)(['<div style="width:28px" role="none presentation"></div>']))),this.icon,this.invalid,(0,O.o)(this.helper),this.value?(0,C.dy)(r||(r=(0,k.Z)(['<ha-svg-icon role="button" tabindex="-1" aria-label="','" class="clear-button" .path="','" @click="','"></ha-svg-icon>'])),(0,O.o)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear")),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._clearValue):"",(0,O.o)(this.label),this.opened?"true":"false",this.opened?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z",this._toggleOpen)}},{kind:"field",key:"_defaultRowRenderer",value:function(){var e=this;return function(t){return(0,C.dy)(d||(d=(0,k.Z)(["<ha-list-item> "," </ha-list-item>"])),e.itemLabelPath?t[e.itemLabelPath]:t)}}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,M.B)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this.opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){var t=this;e.stopPropagation();var i=e.detail.value;if(setTimeout((function(){t.opened=i}),0),(0,M.B)(this,"opened-changed",{value:e.detail.value}),i){var n=document.querySelector("vaadin-combo-box-overlay");n&&this._removeInert(n),this._observeBody()}else{var a;null===(a=this._bodyMutationObserver)||void 0===a||a.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){var e=this;"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&e._removeInert(t)})),t.removedNodes.forEach((function(t){var i;"VAADIN-COMBO-BOX-OVERLAY"===t.nodeName&&(null===(i=e._overlayMutationObserver)||void 0===i||i.disconnect(),e._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var t,i=this;if(e.inert)return e.inert=!1,null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((function(e){e.forEach((function(e){if("inert"===e.attributeName){var t,n=e.target;if(n.inert)null===(t=i._overlayMutationObserver)||void 0===t||t.disconnect(),i._overlayMutationObserver=void 0,n.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,M.B)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this.allowCustomValue||(this._comboBox._closeOnBlurIsPrevented=!0);var t=e.detail.value;t!==this.value&&(0,M.B)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,C.iv)(l||(l=(0,k.Z)([":host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh - 56px)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}"])))}}]}}),C.oi)}}]);
//# sourceMappingURL=74535.tcnvBZI_ssw.js.map