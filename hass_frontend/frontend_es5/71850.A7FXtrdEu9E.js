"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[71850],{71850:function(t,i,e){e.r(i);var s,n,a,o,c,r,h,d=e(88962),l=e(99312),u=e(81043),f=e(33368),_=e(71650),v=e(82390),p=e(69205),b=e(70906),y=e(91808),k=e(34541),g=e(47838),m=(e(97393),e(51467),e(22859),e(68144)),x=e(95260),Z=e(83448),w=e(30153),C=e(91741),E=(e(3143),e(56007)),A=e(75692),F=e(93491),H=e(17616),z=e(22193),S=e(53658),$=(e(91476),e(75502));(0,y.Z)([(0,x.Mo)("hui-weather-entity-row")],(function(t,i){var e,y=function(i){(0,p.Z)(s,i);var e=(0,b.Z)(s);function s(){var i;(0,_.Z)(this,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return i=e.call.apply(e,[this].concat(a)),t((0,v.Z)(i)),i}return(0,f.Z)(s)}(i);return{F:y,d:[{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_forecastEvent",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_subscribed",value:void 0},{kind:"method",key:"_unsubscribeForecastEvents",value:function(){this._subscribed&&(this._subscribed.then((function(t){return t()})),this._subscribed=void 0)}},{kind:"method",key:"_subscribeForecastEvents",value:(e=(0,u.Z)((0,l.Z)().mark((function t(){var i,e,s=this;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._unsubscribeForecastEvents(),this.hass&&this._config&&this.isConnected){t.next=3;break}return t.abrupt("return");case 3:i=this.hass.states[this._config.entity],(e=(0,A.k5)(i))&&(this._subscribed=(0,A.MC)(this.hass,i.entity_id,e,(function(t){s._forecastEvent=t})));case 6:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{kind:"method",key:"connectedCallback",value:function(){(0,k.Z)((0,g.Z)(y.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._subscribeForecastEvents()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,k.Z)((0,g.Z)(y.prototype),"disconnectedCallback",this).call(this),this._unsubscribeForecastEvents()}},{kind:"method",key:"setConfig",value:function(t){if(null==t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,S.G2)(this,t)||t.size>1||!t.has("hass")}},{kind:"method",key:"updated",value:function(t){(0,k.Z)((0,g.Z)(y.prototype),"updated",this).call(this,t),!t.has("_config")&&this._subscribed||this._subscribeForecastEvents()}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return m.Ld;var t=this.hass.states[this._config.entity];if(!t)return(0,m.dy)(s||(s=(0,d.Z)([" <hui-warning> "," </hui-warning> "])),(0,$.i)(this.hass,this._config.entity));var i=!(this._config.tap_action&&"none"!==this._config.tap_action.action),e=this._config.secondary_info,h=(0,A.Cq)(t.state,this,!1,this.hass.auth.accessToken),l=(0,A.Rt)(t.attributes,this._forecastEvent),u=null==l?void 0:l.forecast;return(0,m.dy)(n||(n=(0,d.Z)([' <div class="icon-image ','" @action="','" .actionHandler="','" tabindex="','"> ',' </div> <div class="info ','" @action="','" .actionHandler="','"> '," ",' </div> <div class="attributes ','" @action="','" .actionHandler="','"> <div> ',' </div> <div class="secondary"> '," </div> </div> "])),(0,Z.$)({pointer:i}),this._handleAction,(0,F.K)({hasHold:(0,z._)(this._config.hold_action),hasDoubleClick:(0,z._)(this._config.double_tap_action)}),(0,w.o)(i?"0":void 0),h||(0,m.dy)(a||(a=(0,d.Z)([' <ha-state-icon class="weather-icon" .state="','"></ha-state-icon> '])),t),(0,Z.$)({pointer:i,"text-content":!e}),this._handleAction,(0,F.K)({hasHold:(0,z._)(this._config.hold_action),hasDoubleClick:(0,z._)(this._config.double_tap_action)}),this._config.name||(0,C.C)(t),e?(0,m.dy)(o||(o=(0,d.Z)([' <div class="secondary"> '," </div> "])),"entity-id"===this._config.secondary_info?t.entity_id:"last-changed"===this._config.secondary_info?(0,m.dy)(c||(c=(0,d.Z)([' <ha-relative-time .hass="','" .datetime="','" capitalize></ha-relative-time> '])),this.hass,t.last_changed):"last-updated"===this._config.secondary_info?(0,m.dy)(r||(r=(0,d.Z)([' <ha-relative-time .hass="','" .datetime="','" capitalize></ha-relative-time> '])),this.hass,t.last_updated):""):"",(0,Z.$)({pointer:i}),this._handleAction,(0,F.K)({hasHold:(0,z._)(this._config.hold_action),hasDoubleClick:(0,z._)(this._config.double_tap_action)}),(0,E.rk)(t.state)||void 0===t.attributes.temperature||null===t.attributes.temperature?this.hass.formatEntityState(t):this.hass.formatEntityAttributeValue(t,"temperature"),(0,A.k2)(this.hass,t,u))}},{kind:"method",key:"_handleAction",value:function(t){(0,H.G)(this,this.hass,this._config,t.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return[A.A$,(0,m.iv)(h||(h=(0,d.Z)([":host{display:flex;align-items:center;flex-direction:row}.info{margin-left:16px;flex:1 0 60px}.info,.info>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.icon-image{display:flex;align-items:center;min-width:40px}.icon-image>*{flex:0 0 40px;height:40px}.icon-image:focus{outline:0;background-color:var(--divider-color);border-radius:50%}.weather-icon{--mdc-icon-size:40px}:host([rtl]) .flex{margin-left:0;margin-right:16px}.pointer{cursor:pointer}.attributes{display:flex;flex-direction:column;justify-content:center;text-align:right;margin-left:8px}.secondary{color:var(--secondary-text-color)}"])))]}}]}}),m.oi)}}]);
//# sourceMappingURL=71850.A7FXtrdEu9E.js.map