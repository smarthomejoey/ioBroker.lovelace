export const id=75551;export const ids=[75551];export const modules={55642:(e,t,i)=>{i.d(t,{h:()=>o});var n=i(68144),a=i(57835);const o=(0,a.XM)(class extends a.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==a.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,i]){return this._element&&this._element.localName===t?(i&&Object.entries(i).forEach((([e,t])=>{this._element[e]=t})),n.Jb):this.render(t,i)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},45890:(e,t,i)=>{i.d(t,{A:()=>n});const n=i(68144).iv`.card-config{overflow:auto}ha-switch{padding:16px 6px}.side-by-side{display:flex;align-items:flex-end}.side-by-side>*{flex:1;padding-right:8px}.side-by-side>:last-child{flex:1;padding-right:0}.suffix{margin:0 8px}ha-icon-picker,ha-select,ha-textfield,hui-action-editor{margin-top:8px;display:block}`},67477:(e,t,i)=>{i.r(t),i.d(t,{HuiSensorCardEditor:()=>m});var n=i(17463),a=i(68144),o=i(79932),s=i(38768),r=i(47181),l=(i(68331),i(98346)),c=i(45890),d=i(57464);const h=(0,s.f0)(l.I,(0,s.Ry)({entity:(0,s.jt)((0,s.Z_)()),name:(0,s.jt)((0,s.Z_)()),icon:(0,s.jt)((0,s.Z_)()),graph:(0,s.jt)((0,s.G0)([(0,s.i0)("line"),(0,s.i0)("none")])),unit:(0,s.jt)((0,s.Z_)()),detail:(0,s.jt)((0,s.Rx)()),theme:(0,s.jt)((0,s.Z_)()),hours_to_show:(0,s.jt)((0,s.Rx)())})),u=[{name:"entity",selector:{entity:{domain:["counter","input_number","number","sensor"]}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}},{name:"graph",selector:{select:{options:[{value:"none",label:"None"},{value:"line",label:"Line"}]}}},{name:"unit",selector:{text:{}}},{name:"detail",selector:{boolean:{}}},{name:"theme",selector:{theme:{}}},{name:"hours_to_show",default:d.K,selector:{number:{min:1,mode:"box"}}}]}];let m=(0,n.Z)([(0,o.Mo)("hui-sensor-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,s.hu)(e,h),this._config=e}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return a.Ld;const e={graph:"none",...this._config,detail:2===this._config.detail};return a.dy` <ha-form .hass="${this.hass}" .data="${e}" .schema="${u}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.detail.value;t.detail=t.detail?2:1,(0,r.B)(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"theme":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.theme")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`;case"detail":return this.hass.localize("ui.panel.lovelace.editor.card.sensor.show_more_detail");case"graph":return this.hass.localize("ui.panel.lovelace.editor.card.sensor.graph_type");default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}}},{kind:"get",static:!0,key:"styles",value:function(){return c.A}}]}}),a.oi)},98346:(e,t,i)=>{i.d(t,{I:()=>a});var n=i(38768);const a=(0,n.Ry)({type:(0,n.Z_)(),view_layout:(0,n.Yj)()})}};
//# sourceMappingURL=75551.GBYB6dO3stU.js.map