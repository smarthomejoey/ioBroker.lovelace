export const id=43283;export const ids=[43283];export const modules={49915:(e,t,i)=>{var s=i(17463),n=i(34541),a=i(47838),l=i(68144),o=i(79932),r=i(47501),h=i(18457),d=i(68307),u=i(96151),c=i(88027);const v=(e,t,i)=>180*(0,c.Ff)((0,c.Fv)(e,t,i),t,i)/100;(0,s.Z)([(0,o.Mo)("ha-gauge")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"min",value:()=>0},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"max",value:()=>100},{kind:"field",decorators:[(0,o.Cb)({type:Number})],key:"value",value:()=>0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"formatOptions",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:String})],key:"valueText",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"locale",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"needle",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"levels",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:()=>""},{kind:"field",decorators:[(0,o.SB)()],key:"_angle",value:()=>0},{kind:"field",decorators:[(0,o.SB)()],key:"_updated",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_segment_label",value:()=>""},{kind:"method",key:"firstUpdated",value:function(e){(0,n.Z)((0,a.Z)(i.prototype),"firstUpdated",this).call(this,e),(0,u.T)((()=>{this._updated=!0,this._angle=v(this.value,this.min,this.max),this._segment_label=this.getSegmentLabel(),this._rescale_svg()}))}},{kind:"method",key:"updated",value:function(e){(0,n.Z)((0,a.Z)(i.prototype),"updated",this).call(this,e),this._updated&&(e.has("value")||e.has("label")||e.has("_segment_label"))&&(this._angle=v(this.value,this.min,this.max),this._segment_label=this.getSegmentLabel(),this._rescale_svg())}},{kind:"method",key:"render",value:function(){return l.YP` <svg viewBox="-50 -50 100 50" class="gauge"> ${this.needle&&this.levels?"":l.YP`<path class="dial" d="M -40 0 A 40 40 0 0 1 40 0"></path>`} ${this.levels?this.levels.sort(((e,t)=>e.level-t.level)).map(((e,t)=>{let i;if(0===t&&e.level!==this.min){const e=v(this.min,this.min,this.max);i=l.YP`<path stroke="var(--info-color)" class="level" d="M
                          ${0-40*Math.cos(e*Math.PI/180)}
                          ${0-40*Math.sin(e*Math.PI/180)}
                         A 40 40 0 0 1 40 0
                        "></path>`}const s=v(e.level,this.min,this.max);return l.YP`${i}<path stroke="${e.stroke}" class="level" d="M
                        ${0-40*Math.cos(s*Math.PI/180)}
                        ${0-40*Math.sin(s*Math.PI/180)}
                       A 40 40 0 0 1 40 0
                      "></path>`})):""} ${this.needle?l.YP`<path class="needle" d="M -25 -2.5 L -47.5 0 L -25 2.5 z" style="${(0,r.V)({transform:`rotate(${this._angle}deg)`})}"> </path>`:l.YP`<path class="value" d="M -40 0 A 40 40 0 1 0 40 0" style="${(0,r.V)({transform:`rotate(${this._angle}deg)`})}"></path>`}  </svg> <svg class="text"> <text class="value-text"> ${this._segment_label?this._segment_label:this.valueText||(0,h.uf)(this.value,this.locale,this.formatOptions)}${this._segment_label?"":"%"===this.label?(0,d.K)(this.locale)+"%":` ${this.label}`} </text> </svg>`}},{kind:"method",key:"_rescale_svg",value:function(){const e=this.shadowRoot.querySelector(".text"),t=e.querySelector("text").getBBox();e.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`)}},{kind:"method",key:"getSegmentLabel",value:function(){if(this.levels){this.levels.sort(((e,t)=>e.level-t.level));for(let e=this.levels.length-1;e>=0;e--)if(this.value>=this.levels[e].level)return this.levels[e].label}return""}},{kind:"get",static:!0,key:"styles",value:function(){return l.iv`:host{position:relative}.dial{fill:none;stroke:var(--primary-background-color);stroke-width:15}.value{fill:none;stroke-width:15;stroke:var(--gauge-color);transition:all 1s ease 0s}.needle{fill:var(--primary-text-color);transition:all 1s ease 0s}.level{fill:none;stroke-width:15}.gauge{display:block}.text{position:absolute;max-height:40%;max-width:55%;left:50%;bottom:-6%;transform:translate(-50%,0%)}.value-text{font-size:50px;fill:var(--primary-text-color);text-anchor:middle;direction:ltr}`}}]}}),l.oi)},43283:(e,t,i)=>{i.r(t),i.d(t,{DEFAULT_MAX:()=>p,DEFAULT_MIN:()=>k,severityMap:()=>_});var s=i(17463),n=i(34541),a=i(47838),l=i(68144),o=i(79932),r=i(47501),h=i(62877),d=i(47181),u=i(91741),c=i(84627),v=i(18457),f=(i(22098),i(49915),i(56007)),g=i(15688),m=i(53658),y=i(75502);const k=0,p=100,_={red:"var(--error-color)",green:"var(--success-color)",yellow:"var(--warning-color)",normal:"var(--info-color)"};(0,s.Z)([(0,o.Mo)("hui-gauge-card")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(68331),i.e(22115)]).then(i.bind(i,97345)),document.createElement("hui-gauge-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,i){return{type:"gauge",entity:(0,g.j)(e,1,t,i,["counter","input_number","number","sensor"],(e=>!isNaN(Number(e.state))))[0]||""}}},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");if(!(0,c.T)(e.entity))throw new Error("Invalid entity");this._config={min:k,max:p,...e}}},{kind:"method",key:"render",value:function(){var e,t;if(!this._config||!this.hass)return l.Ld;const i=this.hass.states[this._config.entity];if(!i)return l.dy` <hui-warning> ${(0,y.i)(this.hass,this._config.entity)} </hui-warning> `;const s=Number(i.state);if(i.state===f.nZ)return l.dy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_unavailable",{entity:this._config.entity})}</hui-warning> `;if(isNaN(s))return l.dy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric",{entity:this._config.entity})}</hui-warning> `;const n=null!==(e=this._config.name)&&void 0!==e?e:(0,u.C)(i);return l.dy` <ha-card @click="${this._handleClick}" tabindex="0"> <ha-gauge .min="${this._config.min}" .max="${this._config.max}" .value="${i.state}" .formatOptions="${(0,v.l4)(i,this.hass.entities[i.entity_id])}" .locale="${this.hass.locale}" .label="${this._config.unit||(null===(t=this.hass)||void 0===t?void 0:t.states[this._config.entity].attributes.unit_of_measurement)||""}" style="${(0,r.V)({"--gauge-color":this._computeSeverity(s)})}" .needle="${this._config.needle}" .levels="${this._config.needle?this._severityLevels():void 0}"></ha-gauge> <div class="name" .title="${n}">${n}</div> </ha-card> `}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,m.G2)(this,e)}},{kind:"method",key:"updated",value:function(e){if((0,n.Z)((0,a.Z)(s.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||(0,h.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_computeSeverity",value:function(e){if(this._config.needle)return;let t=this._config.segments;if(t){t=[...t].sort(((e,t)=>e.from-t.from));for(let s=0;s<t.length;s++){var i;const n=t[s];if(n&&e>=n.from&&(s+1===t.length||e<(null===(i=t[s+1])||void 0===i?void 0:i.from)))return n.color}return _.normal}const s=this._config.severity;if(!s)return _.normal;const n=Object.keys(s).map((e=>[e,s[e]]));for(const e of n)if(null==_[e[0]]||isNaN(e[1]))return _.normal;return n.sort(((e,t)=>e[1]-t[1])),e>=n[0][1]&&e<n[1][1]?_[n[0][0]]:e>=n[1][1]&&e<n[2][1]?_[n[1][0]]:e>=n[2][1]?_[n[2][0]]:_.normal}},{kind:"method",key:"_severityLevels",value:function(){const e=this._config.segments;if(e)return e.map((e=>({level:null==e?void 0:e.from,stroke:null==e?void 0:e.color,label:null==e?void 0:e.label})));const t=this._config.severity;if(!t)return[{level:0,stroke:_.normal}];return Object.keys(t).map((e=>({level:t[e],stroke:_[e]})))}},{kind:"method",key:"_handleClick",value:function(){(0,d.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return l.iv`ha-card{cursor:pointer;height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-card:focus{outline:0}ha-gauge{width:100%;max-width:250px}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}`}}]}}),l.oi)},88027:(e,t,i)=>{i.d(t,{Ff:()=>n,Fv:()=>s,IU:()=>a});const s=(e,t,i)=>isNaN(e)||isNaN(t)||isNaN(i)?0:e>i?i:e<t?t:e,n=(e,t,i)=>100*(e-t)/(i-t),a=e=>Math.round(10*e)/10}};
//# sourceMappingURL=43283.mnqNtsmXLuw.js.map