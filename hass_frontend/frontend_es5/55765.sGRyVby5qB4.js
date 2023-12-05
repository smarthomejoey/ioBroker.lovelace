"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[55765],{74834:function(e,t,a){var n,i=a(88962),r=a(33368),o=a(71650),s=a(82390),l=a(69205),u=a(70906),c=a(91808),d=(a(97393),a(47704)),h=a(68144),p=a(95260),f=a(3712);(0,c.Z)([(0,p.Mo)("ha-button")],(function(e,t){var a=function(t){(0,l.Z)(n,t);var a=(0,u.Z)(n);function n(){var t;(0,o.Z)(this,n);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=a.call.apply(a,[this].concat(r)),e((0,s.Z)(t)),t}return(0,r.Z)(n)}(t);return{F:a,d:[{kind:"field",static:!0,key:"styles",value:function(){return[f.W,(0,h.iv)(n||(n=(0,i.Z)(["::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}"])))]}}]}}),d.Button)},55765:function(e,t,a){var n,i,r,o,s,l,u,c,d,h,p=a(99312),f=a(81043),v=a(88962),m=a(33368),y=a(71650),b=a(82390),g=a(69205),k=a(70906),H=a(91808),V=a(34541),x=a(47838),_=(a(51358),a(46798),a(78399),a(5239),a(56086),a(47884),a(81912),a(64584),a(41483),a(12367),a(9454),a(98490),a(9849),a(50289),a(94167),a(97393),a(39685),a(22859),a(94570),a(87438),a(40271),a(60163),a(46349),a(70320),a(22890),a(47084),a(41353),a(68144)),Z=a(95260),w=a(18848),M=a(47181),C=a(32594),T=(a(74535),a(74834),a(10983),a(73366),a(52039),a(9893)),F=a(70651),L=a(12098),z=a(29061),S=a(43059),I=a(24113),j=a(56867),A=a(74240),K=a(51807),O=a(62892),B=a(27760),E=a(49405),U=a(36625),W=a(50786),q=a(17169),N=a(63405),P=a(15706),Q=a(71582),R=a(76967),Y=a(72108),D=["alarm-modes","climate-hvac-modes","climate-preset-modes","cover-open-close","cover-position","cover-tilt-position","cover-tilt","fan-speed","humidifier-modes","lawn-mower-commands","light-brightness","light-color-temp","select-options","target-temperature","vacuum-commands","water-heater-operation-modes","numeric-input"],G=new Set(["vacuum-commands","alarm-modes","climate-hvac-modes","water-heater-operation-modes","lawn-mower-commands","climate-preset-modes","numeric-input"]),J={"alarm-modes":L.p,"climate-hvac-modes":z.C,"climate-preset-modes":S.v,"cover-open-close":I.C,"cover-position":j.K,"cover-tilt-position":K.z,"cover-tilt":A.g,"fan-speed":O.U,"humidifier-modes":B.v,"lawn-mower-commands":E.or,"light-brightness":U.T,"light-color-temp":W.A,"numeric-input":q.L,"target-temperature":P.z,"vacuum-commands":Q.NA,"water-heater-operation-modes":R.F,"select-options":N.g},X=(0,T.tS)(),$={};X.forEach((function(e){$[e.type]=e}));(0,H.Z)([(0,Z.Mo)("hui-card-features-editor")],(function(e,t){var H,L,z=function(t){(0,g.Z)(n,t);var a=(0,k.Z)(n);function n(){var t;(0,y.Z)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return t=a.call.apply(a,[this].concat(r)),e((0,b.Z)(t)),t}return(0,m.Z)(n)}(t);return{F:z,d:[{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"features",value:void 0},{kind:"field",decorators:[(0,Z.Cb)({attribute:!1})],key:"featuresTypes",value:void 0},{kind:"field",decorators:[(0,Z.Cb)()],key:"label",value:void 0},{kind:"field",key:"_featuresKeys",value:function(){return new WeakMap}},{kind:"field",key:"_sortable",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,V.Z)((0,x.Z)(z.prototype),"disconnectedCallback",this).call(this),this._destroySortable()}},{kind:"method",key:"_supportsFeatureType",value:function(e){if(!this.stateObj)return!1;if((0,T.IT)(e)){var t=(0,T.V0)(e),a=$[t];if(null==a||!a.supported)return!0;try{return a.supported(this.stateObj)}catch(i){return!1}}var n=J[e];return!n||n(this.stateObj)}},{kind:"method",key:"_isFeatureTypeEditable",value:function(e){if((0,T.IT)(e)){var t=(0,T.V0)(e),a=$[t];return null==a?void 0:a.configurable}return G.has(e)}},{kind:"method",key:"_getFeatureTypeLabel",value:function(e){if((0,T.IT)(e)){var t=(0,T.V0)(e),a=$[t];return(null==a?void 0:a.name)||e}return this.hass.localize("ui.panel.lovelace.editor.features.types.".concat(e,".label"))||e}},{kind:"method",key:"_getKey",value:function(e){return this._featuresKeys.has(e)||this._featuresKeys.set(e,Math.random().toString()),this._featuresKeys.get(e)}},{kind:"method",key:"firstUpdated",value:function(){this._createSortable()}},{kind:"method",key:"_getSupportedFeaturesType",value:function(){var e=this,t=D.filter((function(t){return!e.featuresTypes||e.featuresTypes.includes(t)})),a=X.map((function(e){return"".concat(T.Qo).concat(e.type)}));return t.concat(a).filter((function(t){return e._supportsFeatureType(t)}))}},{kind:"method",key:"render",value:function(){var e=this;if(!this.features||!this.hass)return _.Ld;var t=this._getSupportedFeaturesType(),a=t.filter((function(e){return!(0,T.IT)(e)})),h=t.filter((function(e){return(0,T.IT)(e)}));return(0,_.dy)(n||(n=(0,v.Z)([' <ha-expansion-panel outlined> <h3 slot="header"> <ha-svg-icon .path="','"></ha-svg-icon> ',' </h3> <div class="content"> ',' <div class="features"> '," </div> "," </div> </ha-expansion-panel> "])),"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 7H9V9H7V7M7 11H9V13H7V11M7 15H9V17H7V15M17 17H11V15H17V17M17 13H11V11H17V13M17 9H11V7H17V9Z",this.hass.localize("ui.panel.lovelace.editor.features.name"),0===t.length&&0===this.features.length?(0,_.dy)(i||(i=(0,v.Z)([' <ha-alert type="info"> '," </ha-alert> "])),this.hass.localize("ui.panel.lovelace.editor.features.no_compatible_available")):_.Ld,(0,w.r)(this.features,(function(t){return e._getKey(t)}),(function(t,a){var n=t.type,i=e._supportsFeatureType(n),l=e._isFeatureTypeEditable(n);return(0,_.dy)(r||(r=(0,v.Z)([' <div class="feature"> <div class="handle"> <ha-svg-icon .path="','"></ha-svg-icon> </div> <div class="feature-content"> <div> <span> '," </span> "," </div> </div> ",' <ha-icon-button .label="','" .path="','" class="remove-icon" .index="','" @click="','"></ha-icon-button> </div> '])),"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",e._getFeatureTypeLabel(n),e.stateObj&&!i?(0,_.dy)(o||(o=(0,v.Z)([' <span class="secondary"> '," </span> "])),e.hass.localize("ui.panel.lovelace.editor.features.not_compatible")):_.Ld,l?(0,_.dy)(s||(s=(0,v.Z)([' <ha-icon-button .label="','" .path="','" class="edit-icon" .index="','" @click="','" .disabled="','"></ha-icon-button> '])),e.hass.localize("ui.panel.lovelace.editor.features.edit"),"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",a,e._editFeature,!i):_.Ld,e.hass.localize("ui.panel.lovelace.editor.features.remove"),"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",a,e._removeFeature)})),t.length>0?(0,_.dy)(l||(l=(0,v.Z)([' <ha-button-menu fixed @action="','" @closed="','"> <ha-button slot="trigger" outlined .label="','"> <ha-svg-icon .path="','" slot="icon"></ha-svg-icon> </ha-button> '," "," "," </ha-button-menu> "])),this._addFeature,C.U,this.hass.localize("ui.panel.lovelace.editor.features.add"),"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",a.map((function(t){return(0,_.dy)(u||(u=(0,v.Z)([' <ha-list-item .value="','"> '," </ha-list-item> "])),t,e._getFeatureTypeLabel(t))})),a.length>0&&h.length>0?(0,_.dy)(c||(c=(0,v.Z)(['<li divider role="separator"></li>']))):_.Ld,h.map((function(t){return(0,_.dy)(d||(d=(0,v.Z)([' <ha-list-item .value="','"> '," </ha-list-item> "])),t,e._getFeatureTypeLabel(t))}))):_.Ld)}},{kind:"method",key:"_createSortable",value:(L=(0,f.Z)((0,p.Z)().mark((function e(){var t,n=this;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([a.e(56087),a.e(32811)]).then(a.bind(a,32811));case 2:t=e.sent.default,this._sortable=new t(this.shadowRoot.querySelector(".features"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:function(e){e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder)},onEnd:function(e){e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder),n._rowMoved(e)}});case 4:case"end":return e.stop()}}),e,this)}))),function(){return L.apply(this,arguments)})},{kind:"method",key:"_destroySortable",value:function(){var e;null===(e=this._sortable)||void 0===e||e.destroy(),this._sortable=void 0}},{kind:"method",key:"_addFeature",value:(H=(0,f.Z)((0,p.Z)().mark((function e(t){var a,n,i,r,o;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(a=t.detail.index)){e.next=3;break}return e.abrupt("return");case 3:if(n=this._getSupportedFeaturesType()[a]){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,(0,Y.A)(n);case 8:if(!(i=e.sent)||!i.getStubConfig){e.next=15;break}return e.next=12,i.getStubConfig(this.hass,this.stateObj);case 12:r=e.sent,e.next=16;break;case 15:r={type:n};case 16:o=this.features.concat(r),(0,M.B)(this,"features-changed",{features:o});case 18:case"end":return e.stop()}}),e,this)}))),function(e){return H.apply(this,arguments)})},{kind:"method",key:"_rowMoved",value:function(e){if(e.oldIndex!==e.newIndex){var t=this.features.concat();t.splice(e.newIndex,0,t.splice(e.oldIndex,1)[0]),(0,M.B)(this,"features-changed",{features:t})}}},{kind:"method",key:"_removeFeature",value:function(e){var t=e.currentTarget.index,a=this.features.concat();a.splice(t,1),(0,M.B)(this,"features-changed",{features:a})}},{kind:"method",key:"_editFeature",value:function(e){var t=e.currentTarget.index;(0,M.B)(this,"edit-detail-element",{subElementConfig:{index:t,type:"feature",elementConfig:this.features[t]}})}},{kind:"get",static:!0,key:"styles",value:function(){return[F.Y,(0,_.iv)(h||(h=(0,v.Z)([":host{display:flex!important;flex-direction:column}.content{padding:12px}ha-expansion-panel{display:block;--expansion-panel-content-padding:0;border-radius:6px}h3{margin:0;font-size:inherit;font-weight:inherit}ha-icon,ha-svg-icon{color:var(--secondary-text-color)}ha-button-menu{margin-top:8px}.feature{display:flex;align-items:center}.feature .handle{padding-right:8px;cursor:move;padding-inline-end:8px;padding-inline-start:initial;direction:var(--direction)}.feature .handle>*{pointer-events:none}.feature-content{height:60px;font-size:16px;display:flex;align-items:center;justify-content:space-between;flex-grow:1}.feature-content div{display:flex;flex-direction:column}.edit-icon,.remove-icon{--mdc-icon-button-size:36px;color:var(--secondary-text-color)}.secondary{font-size:12px;color:var(--secondary-text-color)}li[divider]{border-bottom-color:var(--divider-color)}"])))]}}]}}),_.oi)}}]);
//# sourceMappingURL=55765.sGRyVby5qB4.js.map