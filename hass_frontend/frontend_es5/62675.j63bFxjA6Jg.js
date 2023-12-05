/*! For license information please see 62675.j63bFxjA6Jg.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[62675],{30879:function(r,e,i){i.d(e,{D:function(){return x}});var t,c,o,s,a,n=i(33368),d=i(71650),l=i(69205),p=i(70906),u=i(43204),m=i(95260),h=i(88962),g=i(34541),f=i(47838),y=(i(76843),i(38103)),_=i(68144),v=i(83448),k=i(30153),b=i(47501),w=function(r){(0,l.Z)(i,r);var e=(0,p.Z)(i);function i(){var r;return(0,d.Z)(this,i),(r=e.apply(this,arguments)).indeterminate=!1,r.progress=0,r.density=0,r.closed=!1,r}return(0,n.Z)(i,[{key:"open",value:function(){this.closed=!1}},{key:"close",value:function(){this.closed=!0}},{key:"render",value:function(){var r={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},e=48+4*this.density,i={width:"".concat(e,"px"),height:"".concat(e,"px")};return(0,_.dy)(t||(t=(0,h.Z)([' <div class="mdc-circular-progress ','" style="','" role="progressbar" aria-label="','" aria-valuemin="0" aria-valuemax="1" aria-valuenow="','"> '," "," </div>"])),(0,v.$)(r),(0,b.V)(i),(0,k.o)(this.ariaLabel),(0,k.o)(this.indeterminate?void 0:this.progress),this.renderDeterminateContainer(),this.renderIndeterminateContainer())}},{key:"renderDeterminateContainer",value:function(){var r=48+4*this.density,e=r/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,t=6.2831852*i,o=(1-this.progress)*t,s=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return(0,_.dy)(c||(c=(0,h.Z)([' <div class="mdc-circular-progress__determinate-container"> <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 '," ",'"> <circle class="mdc-circular-progress__determinate-track" cx="','" cy="','" r="','" stroke-width="','"></circle> <circle class="mdc-circular-progress__determinate-circle" cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div>'])),r,r,e,e,i,s,e,e,i,6.2831852*i,o,s)}},{key:"renderIndeterminateContainer",value:function(){return(0,_.dy)(o||(o=(0,h.Z)([' <div class="mdc-circular-progress__indeterminate-container"> <div class="mdc-circular-progress__spinner-layer"> '," </div> </div>"])),this.renderIndeterminateSpinnerLayer())}},{key:"renderIndeterminateSpinnerLayer",value:function(){var r=48+4*this.density,e=r/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,t=6.2831852*i,c=.5*t,o=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return(0,_.dy)(s||(s=(0,h.Z)([' <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 '," ",'"> <circle cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div> <div class="mdc-circular-progress__gap-patch"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 '," ",'"> <circle cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div> <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 '," ",'"> <circle cx="','" cy="','" r="','" stroke-dasharray="','" stroke-dashoffset="','" stroke-width="','"></circle> </svg> </div>'])),r,r,e,e,i,t,c,o,r,r,e,e,i,t,c,.8*o,r,r,e,e,i,t,c,o)}},{key:"update",value:function(r){(0,g.Z)((0,f.Z)(i.prototype),"update",this).call(this,r),r.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}]),i}(_.oi);(0,u.__decorate)([(0,m.Cb)({type:Boolean,reflect:!0})],w.prototype,"indeterminate",void 0),(0,u.__decorate)([(0,m.Cb)({type:Number,reflect:!0})],w.prototype,"progress",void 0),(0,u.__decorate)([(0,m.Cb)({type:Number,reflect:!0})],w.prototype,"density",void 0),(0,u.__decorate)([(0,m.Cb)({type:Boolean,reflect:!0})],w.prototype,"closed",void 0),(0,u.__decorate)([y.L,(0,m.Cb)({type:String,attribute:"aria-label"})],w.prototype,"ariaLabel",void 0);var Z=(0,_.iv)(a||(a=(0,h.Z)([".mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary,#6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0s cubic-bezier(.4, 0, .6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0s cubic-bezier(0, 0, .2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.568s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color,transparent)}"]))),x=function(r){(0,l.Z)(i,r);var e=(0,p.Z)(i);function i(){return(0,d.Z)(this,i),e.apply(this,arguments)}return(0,n.Z)(i)}(w);x.styles=[Z],x=(0,u.__decorate)([(0,m.Mo)("mwc-circular-progress")],x)},25516:function(r,e,i){i.d(e,{i:function(){return c}});var t=(0,i(8330).P)((function(r){history.replaceState({scrollPosition:r},"")}),300),c=function(r){return function(e){return{kind:"method",placement:"prototype",key:e.key,descriptor:{set:function(r){t(r),this["__".concat(String(e.key))]=r},get:function(){var r;return this["__".concat(String(e.key))]||(null===(r=history.state)||void 0===r?void 0:r.scrollPosition)},enumerable:!0,configurable:!0},finisher:function(i){var t=i.prototype.connectedCallback;i.prototype.connectedCallback=function(){var i=this;t.call(this);var c=this[e.key];c&&this.updateComplete.then((function(){var e=i.renderRoot.querySelector(r);e&&setTimeout((function(){e.scrollTop=c}),0)}))}}}}}},8436:function(r,e,i){i.r(e),i.d(e,{DEFAULT_HOURS_TO_SHOW:function(){return x},HuiLogbookCard:function(){return C}});var t,c,o,s=i(88962),a=i(99312),n=i(81043),d=i(33368),l=i(71650),p=i(82390),u=i(69205),m=i(70906),h=i(91808),g=i(34541),f=i(47838),y=(i(97393),i(51358),i(46798),i(47084),i(5239),i(98490),i(51467),i(85717),i(46349),i(70320),i(68144)),_=i(95260),v=i(83448),k=i(7323),b=i(62877),w=(i(22098),i(97740),i(15688)),Z=i(90271),x=(i(75502),24),C=(0,h.Z)([(0,_.Mo)("hui-logbook-card")],(function(r,e){var h,C=function(e){(0,u.Z)(t,e);var i=(0,m.Z)(t);function t(){var e;(0,l.Z)(this,t);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return e=i.call.apply(i,[this].concat(o)),r((0,p.Z)(e)),e}return(0,d.Z)(t)}(e);return{F:C,d:[{kind:"method",static:!0,key:"getConfigElement",value:(h=(0,n.Z)((0,a.Z)().mark((function r(){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([i.e(42850),i.e(78133),i.e(50731),i.e(68331),i.e(40163),i.e(74535),i.e(31697)]).then(i.bind(i,74237));case 2:return r.abrupt("return",document.createElement("hui-logbook-card-editor"));case 3:case"end":return r.stop()}}),r)}))),function(){return h.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(r,e,i){return{entities:(0,w.j)(r,3,e,i,["light","switch"])}}},{kind:"field",decorators:[(0,_.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,_.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,_.SB)()],key:"_time",value:void 0},{kind:"field",decorators:[(0,_.SB)()],key:"_entityId",value:void 0},{kind:"method",key:"getCardSize",value:function(){var r;return 9+(null!==(r=this._config)&&void 0!==r&&r.title?1:0)}},{kind:"method",key:"setConfig",value:function(r){if(!r.entities.length)throw new Error("Entities must be specified");this._config=Object.assign({hours_to_show:x},r),this._time={recent:60*this._config.hours_to_show*60},this._entityId=(0,Z.A)(r.entities).map((function(r){return r.entity}))}},{kind:"method",key:"updated",value:function(r){if((0,g.Z)((0,f.Z)(C.prototype),"updated",this).call(this,r),this._config&&this.hass){var e=r.has("_config"),i=r.has("hass"),t=r.get("hass"),c=r.get("_config");(i&&(null==t?void 0:t.themes)!==this.hass.themes||e&&(null==c?void 0:c.theme)!==this._config.theme)&&(0,b.R)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,k.p)(this.hass,"logbook")?(0,y.dy)(c||(c=(0,s.Z)([' <ha-card .header="','" class="','"> <div class="content"> <ha-logbook .hass="','" .time="','" .entityIds="','" narrow relative-time virtualize></ha-logbook> </div> </ha-card> '])),this._config.title,(0,v.$)({"no-header":!this._config.title}),this.hass,this._time,this._entityId):(0,y.dy)(t||(t=(0,s.Z)([" <hui-warning> ","</hui-warning> "])),this.hass.localize("ui.components.logbook.not_loaded",{platform:"logbook"})):y.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,y.iv)(o||(o=(0,s.Z)(["ha-card{height:100%;display:flex;flex-direction:column;justify-content:space-between}.content{padding:0 16px 16px}.no-header .content{padding-top:16px}ha-logbook{height:385px;display:block}"])))]}}]}}),y.oi)},46134:function(r,e,i){i.d(e,{o:function(){return s}});var t=i(99312),c=i(81043),o=(i(51358),i(46798),i(47084),i(5239),i(98490),i(44281)),s=function(){var r=(0,c.Z)((0,t.Z)().mark((function r(){return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,o.j)();case 2:return r.next=4,i.e(98565).then(i.bind(i,98565));case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=62675.j63bFxjA6Jg.js.map