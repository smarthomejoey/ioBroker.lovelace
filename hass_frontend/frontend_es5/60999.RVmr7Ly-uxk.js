"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[60999],{60999:function(e,i,t){t.r(i),t.d(i,{SideBarView:function(){return C}});var a,n,d,o=t(88962),l=t(33368),r=t(71650),s=t(82390),c=t(69205),h=t(70906),v=t(91808),u=t(34541),f=t(47838),p=(t(97393),t(76843),t(51358),t(46798),t(47084),t(5239),t(98490),t(9849),t(50289),t(94167),t(85717),t(68144)),m=t(95260),k=t(83448),b=t(47181),y=t(87744),g=t(54324),C=(0,v.Z)(null,(function(e,i){var v=function(i){(0,c.Z)(a,i);var t=(0,h.Z)(a);function a(){var i;(0,r.Z)(this,a);for(var n=arguments.length,d=new Array(n),o=0;o<n;o++)d[o]=arguments[o];return i=t.call.apply(t,[this].concat(d)),e((0,s.Z)(i)),i}return(0,l.Z)(a)}(i);return{F:v,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Number})],key:"index",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"isStrategy",value:function(){return!1}},{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"cards",value:function(){return[]}},{kind:"field",decorators:[(0,m.SB)()],key:"_config",value:void 0},{kind:"field",key:"_mqlListenerRef",value:void 0},{kind:"field",key:"_mql",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,u.Z)((0,f.Z)(v.prototype),"connectedCallback",this).call(this),this._mql=window.matchMedia("(min-width: 760px)"),this._mqlListenerRef=this._createCards.bind(this),this._mql.addListener(this._mqlListenerRef)}},{kind:"method",key:"disconnectedCallback",value:function(){var e;(0,u.Z)((0,f.Z)(v.prototype),"disconnectedCallback",this).call(this),null===(e=this._mql)||void 0===e||e.removeListener(this._mqlListenerRef),this._mqlListenerRef=void 0,this._mql=void 0}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"willUpdate",value:function(e){var i,a,n;if((0,u.Z)((0,f.Z)(v.prototype),"willUpdate",this).call(this,e),null!==(i=this.lovelace)&&void 0!==i&&i.editMode&&t.e(49826).then(t.bind(t,49826)),e.has("cards")&&this._createCards(),e.has("lovelace")||e.has("_config")){var d=e.get("lovelace");(!e.has("cards")&&(null==d?void 0:d.config)!==(null===(a=this.lovelace)||void 0===a?void 0:a.config)||d&&(null==d?void 0:d.editMode)!==(null===(n=this.lovelace)||void 0===n?void 0:n.editMode))&&this._createCards()}}},{kind:"method",key:"render",value:function(){var e,i;return(0,p.dy)(a||(a=(0,o.Z)([' <div class="container ','"></div> '," "])),null!==(e=this.lovelace)&&void 0!==e&&e.editMode?"edit-mode":"",null!==(i=this.lovelace)&&void 0!==i&&i.editMode?(0,p.dy)(n||(n=(0,o.Z)([' <ha-fab .label="','" extended @click="','" class="','"> <ha-svg-icon slot="icon" .path="','"></ha-svg-icon> </ha-fab> '])),this.hass.localize("ui.panel.lovelace.editor.edit_card.add"),this._addCard,(0,k.$)({rtl:(0,y.HE)(this.hass)}),"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"):"")}},{kind:"method",key:"_addCard",value:function(){(0,b.B)(this,"ll-create-card")}},{kind:"method",key:"_createCards",value:function(){var e,i,t=this,a=document.createElement("div");if(a.id="main",null!==(e=this._mql)&&void 0!==e&&e.matches?(i=document.createElement("div")).id="sidebar":i=a,this.hasUpdated){var n=this.renderRoot.querySelector("#main"),d=this.renderRoot.querySelector("#sidebar"),o=this.renderRoot.querySelector(".container");n&&o.removeChild(n),d&&o.removeChild(d),o.appendChild(a),o.appendChild(i)}else this.updateComplete.then((function(){var e=t.renderRoot.querySelector(".container");e.appendChild(a),e.appendChild(i)}));this.cards.forEach((function(e,n){var d,o,l,r,s=null===(d=t._config)||void 0===d||null===(d=d.cards)||void 0===d?void 0:d[n];if(t.isStrategy||null===(o=t.lovelace)||void 0===o||!o.editMode)e.editMode=!1,r=e;else{var c;(r=document.createElement("hui-card-options")).hass=t.hass,r.lovelace=t.lovelace,r.path=[t.index,n],e.editMode=!0;var h=document.createElement("ha-icon-button");h.slot="buttons";var v=document.createElement("ha-svg-icon");v.path="sidebar"!==(null==s||null===(c=s.view_layout)||void 0===c?void 0:c.position)?"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z":"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",h.appendChild(v),h.addEventListener("click",(function(){var e;t.lovelace.saveConfig((0,g.LG)(t.lovelace.config,[t.index,n],Object.assign(Object.assign({},s),{},{view_layout:{position:"sidebar"!==(null==s||null===(e=s.view_layout)||void 0===e?void 0:e.position)?"sidebar":"main"}})))})),r.appendChild(h),r.appendChild(e)}"sidebar"!==(null==s||null===(l=s.view_layout)||void 0===l?void 0:l.position)?a.appendChild(r):i.appendChild(r)}))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(d||(d=(0,o.Z)([":host{display:block;padding-top:4px}.container{display:flex;justify-content:center;margin-left:4px;margin-right:4px}.container.edit-mode{margin-bottom:72px}#main{max-width:1620px;flex-grow:2}#sidebar{flex-grow:1;flex-shrink:0;max-width:380px}.container>div{min-width:0;box-sizing:border-box}.container>div>:not([hidden]){display:block;margin:var(--masonry-view-card-margin,4px 4px 8px)}@media (max-width:500px){.container>div>*{margin-left:0;margin-right:0}}ha-fab{position:fixed;right:calc(16px + env(safe-area-inset-right));bottom:calc(16px + env(safe-area-inset-bottom));z-index:1}ha-fab.rtl{right:auto;left:calc(16px + env(safe-area-inset-left))}"])))}}]}}),p.oi);customElements.define("hui-sidebar-view",C)}}]);
//# sourceMappingURL=60999.RVmr7Ly-uxk.js.map