"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[83389],{12537:function(e,t,i){i.d(t,{u:function(){return a}});var n=i(14516),a=function(e,t){try{var i,n;return null!==(i=null===(n=s(t))||void 0===n?void 0:n.of(e))&&void 0!==i?i:e}catch(a){return e}},s=(0,n.Z)((function(e){return Intl&&"DisplayNames"in Intl?new Intl.DisplayNames(e.language,{type:"language",fallback:"code"}):void 0}))},76969:function(e,t,i){var n,a,s,r,l=i(88962),d=i(33368),c=i(71650),o=i(82390),u=i(69205),p=i(70906),h=i(91808),f=i(34541),v=i(47838),g=(i(97393),i(85472),i(46798),i(9849),i(90126),i(22859),i(46349),i(70320),i(68144)),y=i(95260),m=i(47181),b=i(32594),_=i(12537),k=i(69949),j=(i(73366),i(86630),"preferred"),O="last_used";(0,h.Z)([(0,y.Mo)("ha-assist-pipeline-picker")],(function(e,t){var i=function(t){(0,u.Z)(n,t);var i=(0,p.Z)(n);function n(){var t;(0,c.Z)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return t=i.call.apply(i,[this].concat(s)),e((0,o.Z)(t)),t}return(0,d.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,y.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,y.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)()],key:"includeLastUsed",value:function(){return!1}},{kind:"field",decorators:[(0,y.SB)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_preferredPipeline",value:function(){return null}},{kind:"get",key:"_default",value:function(){return this.includeLastUsed?O:j}},{kind:"method",key:"render",value:function(){var e,t,i=this;if(!this._pipelines)return g.Ld;var r=null!==(e=this.value)&&void 0!==e?e:this._default;return(0,g.dy)(n||(n=(0,l.Z)([' <ha-select .label="','" .value="','" .required="','" .disabled="','" @selected="','" @closed="','" fixedMenuPosition naturalMenuWidth> ',' <ha-list-item .value="','"> '," </ha-list-item> "," </ha-select> "])),this.label||this.hass.localize("ui.components.pipeline-picker.pipeline"),r,this.required,this.disabled,this._changed,b.U,this.includeLastUsed?(0,g.dy)(a||(a=(0,l.Z)([' <ha-list-item .value="','"> '," </ha-list-item> "])),O,this.hass.localize("ui.components.pipeline-picker.last_used")):null,j,this.hass.localize("ui.components.pipeline-picker.preferred",{preferred:null===(t=this._pipelines.find((function(e){return e.id===i._preferredPipeline})))||void 0===t?void 0:t.name}),this._pipelines.map((function(e){return(0,g.dy)(s||(s=(0,l.Z)(['<ha-list-item .value="','"> '," (",") </ha-list-item>"])),e.id,e.name,(0,_.u)(e.language,i.hass.locale))})))}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,f.Z)((0,v.Z)(i.prototype),"firstUpdated",this).call(this,e),(0,k.SC)(this.hass).then((function(e){t._pipelines=e.pipelines,t._preferredPipeline=e.preferred_pipeline}))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,g.iv)(r||(r=(0,l.Z)(["ha-select{width:100%}"])))}},{kind:"method",key:"_changed",value:function(e){var t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===this._default||(this.value=t.value===this._default?void 0:t.value,(0,m.B)(this,"value-changed",{value:this.value}))}}]}}),g.oi)},73366:function(e,t,i){i.d(t,{M:function(){return y}});var n,a=i(88962),s=i(33368),r=i(71650),l=i(82390),d=i(69205),c=i(70906),o=i(91808),u=i(34541),p=i(47838),h=(i(97393),i(61092)),f=i(96762),v=i(68144),g=i(95260),y=(0,o.Z)([(0,g.Mo)("ha-list-item")],(function(e,t){var i=function(t){(0,d.Z)(n,t);var i=(0,c.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,s=new Array(a),d=0;d<a;d++)s[d]=arguments[d];return t=i.call.apply(i,[this].concat(s)),e((0,l.Z)(t)),t}return(0,s.Z)(n)}(t);return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,u.Z)((0,p.Z)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[f.W,(0,v.iv)(n||(n=(0,a.Z)([":host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}"])))]}}]}}),h.K)},86630:function(e,t,i){var n,a,s,r,l=i(99312),d=i(81043),c=i(88962),o=i(33368),u=i(71650),p=i(82390),h=i(69205),f=i(70906),v=i(91808),g=i(34541),y=i(47838),m=(i(97393),i(49412)),b=i(3762),_=i(68144),k=i(95260),j=i(38346),O=i(96151);i(10983),(0,v.Z)([(0,k.Mo)("ha-select")],(function(e,t){var i=function(t){(0,h.Z)(n,t);var i=(0,f.Z)(n);function n(){var t;(0,u.Z)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return t=i.call.apply(i,[this].concat(s)),e((0,p.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean,reflect:!0})],key:"clearable",value:void 0},{kind:"method",key:"render",value:function(){return(0,_.dy)(n||(n=(0,c.Z)([" "," "," "])),(0,g.Z)((0,y.Z)(i.prototype),"render",this).call(this),this.clearable&&!this.required&&!this.disabled&&this.value?(0,_.dy)(a||(a=(0,c.Z)(['<ha-icon-button label="clear" @click="','" .path="','"></ha-icon-button>'])),this._clearValue,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):_.Ld)}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,_.dy)(s||(s=(0,c.Z)(['<span class="mdc-select__icon"><slot name="icon"></slot></span>']))):_.Ld}},{kind:"method",key:"connectedCallback",value:function(){(0,g.Z)((0,y.Z)(i.prototype),"connectedCallback",this).call(this),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,g.Z)((0,y.Z)(i.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value:function(){var e=this;return(0,j.D)((0,d.Z)((0,l.Z)().mark((function t(){return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,O.y)();case 2:e.layoutOptions();case 3:case"end":return t.stop()}}),t)}))),500)}},{kind:"field",static:!0,key:"styles",value:function(){return[b.W,(0,_.iv)(r||(r=(0,c.Z)([":host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}"])))]}}]}}),m.K)},69949:function(e,t,i){i.d(t,{AI:function(){return l},Dy:function(){return v},GV:function(){return h},I2:function(){return s},PA:function(){return o},SC:function(){return c},XT:function(){return f},Xp:function(){return r},_v:function(){return d},af:function(){return p},eP:function(){return a},jZ:function(){return u}});var n=i(53709),a=(i(85717),i(97393),function(e,t,i){return"run-start"===t.type?e={init_options:i,stage:"ready",run:t.data,events:[t]}:e?((e="wake_word-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"wake_word",wake_word:Object.assign(Object.assign({},t.data),{},{done:!1})}):"wake_word-end"===t.type?Object.assign(Object.assign({},e),{},{wake_word:Object.assign(Object.assign(Object.assign({},e.wake_word),t.data),{},{done:!0})}):"stt-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"stt",stt:Object.assign(Object.assign({},t.data),{},{done:!1})}):"stt-end"===t.type?Object.assign(Object.assign({},e),{},{stt:Object.assign(Object.assign(Object.assign({},e.stt),t.data),{},{done:!0})}):"intent-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"intent",intent:Object.assign(Object.assign({},t.data),{},{done:!1})}):"intent-end"===t.type?Object.assign(Object.assign({},e),{},{intent:Object.assign(Object.assign(Object.assign({},e.intent),t.data),{},{done:!0})}):"tts-start"===t.type?Object.assign(Object.assign({},e),{},{stage:"tts",tts:Object.assign(Object.assign({},t.data),{},{done:!1})}):"tts-end"===t.type?Object.assign(Object.assign({},e),{},{tts:Object.assign(Object.assign(Object.assign({},e.tts),t.data),{},{done:!0})}):"run-end"===t.type?Object.assign(Object.assign({},e),{},{stage:"done"}):"error"===t.type?Object.assign(Object.assign({},e),{},{stage:"error",error:t.data}):Object.assign({},e)).events=[].concat((0,n.Z)(e.events),[t]),e):void console.warn("Received unexpected event before receiving session",t)}),s=function(e,t,i){var n,s=r(e,(function(e){n=a(n,e,i),"run-end"!==e.type&&"error"!==e.type||s.then((function(e){return e()})),n&&t(n)}),i);return s},r=function(e,t,i){return e.connection.subscribeMessage(t,Object.assign(Object.assign({},i),{},{type:"assist_pipeline/run"}))},l=function(e,t){return e.callWS({type:"assist_pipeline/pipeline_debug/list",pipeline_id:t})},d=function(e,t,i){return e.callWS({type:"assist_pipeline/pipeline_debug/get",pipeline_id:t,pipeline_run_id:i})},c=function(e){return e.callWS({type:"assist_pipeline/pipeline/list"})},o=function(e,t){return e.callWS({type:"assist_pipeline/pipeline/get",pipeline_id:t})},u=function(e,t){return e.callWS(Object.assign({type:"assist_pipeline/pipeline/create"},t))},p=function(e,t,i){return e.callWS(Object.assign({type:"assist_pipeline/pipeline/update",pipeline_id:t},i))},h=function(e,t){return e.callWS({type:"assist_pipeline/pipeline/set_preferred",pipeline_id:t})},f=function(e,t){return e.callWS({type:"assist_pipeline/pipeline/delete",pipeline_id:t})},v=function(e){return e.callWS({type:"assist_pipeline/language/list"})}}}]);
//# sourceMappingURL=83389.tQl2DI0HpMw.js.map