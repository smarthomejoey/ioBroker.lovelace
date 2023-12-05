export const id=4424;export const ids=[4424];export const modules={55642:(e,t,a)=>{a.d(t,{h:()=>o});var i=a(68144),n=a(57835);const o=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==n.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,a]){return this._element&&this._element.localName===t?(a&&Object.entries(a).forEach((([e,t])=>{this._element[e]=t})),i.Jb):this.render(t,a)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},45890:(e,t,a)=>{a.d(t,{A:()=>i});const i=a(68144).iv`.card-config{overflow:auto}ha-switch{padding:16px 6px}.side-by-side{display:flex;align-items:flex-end}.side-by-side>*{flex:1;padding-right:8px}.side-by-side>:last-child{flex:1;padding-right:0}.suffix{margin:0 8px}ha-icon-picker,ha-select,ha-textfield,hui-action-editor{margin-top:8px;display:block}`},13930:(e,t,a)=>{a.r(t),a.d(t,{HuiPictureEntityCardEditor:()=>_});var i=a(17463),n=a(68144),o=a(79932),c=a(38768),s=a(47181),r=(a(68331),a(85677)),l=a(98346),d=a(45890);const m=(0,c.f0)(l.I,(0,c.Ry)({entity:(0,c.jt)((0,c.Z_)()),image:(0,c.jt)((0,c.Z_)()),name:(0,c.jt)((0,c.Z_)()),camera_image:(0,c.jt)((0,c.Z_)()),camera_view:(0,c.jt)((0,c.Z_)()),aspect_ratio:(0,c.jt)((0,c.Z_)()),tap_action:(0,c.jt)(r.C),hold_action:(0,c.jt)(r.C),show_name:(0,c.jt)((0,c.O7)()),show_state:(0,c.jt)((0,c.O7)()),theme:(0,c.jt)((0,c.Z_)()),fit_mode:(0,c.jt)((0,c.Z_)())})),h=[{name:"entity",required:!0,selector:{entity:{}}},{name:"name",selector:{text:{}}},{name:"image",selector:{text:{}}},{name:"camera_image",selector:{entity:{domain:"camera"}}},{name:"",type:"grid",schema:[{name:"camera_view",selector:{select:{options:["auto","live"]}}},{name:"aspect_ratio",selector:{text:{}}}]},{name:"",type:"grid",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}}]},{name:"theme",selector:{theme:{}}},{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}];let _=(0,i.Z)([(0,o.Mo)("hui-picture-entity-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,c.hu)(e,m),this._config=e}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return n.Ld;const e={show_state:!0,show_name:!0,camera_view:"auto",...this._config};return n.dy` <ha-form .hass="${this.hass}" .data="${e}" .schema="${h}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){(0,s.B)(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"theme":case"tap_action":case"hold_action":return`${this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}}},{kind:"field",static:!0,key:"styles",value:()=>d.A}]}}),n.oi)},85677:(e,t,a)=>{a.d(t,{C:()=>h});var i=a(38768);const n=(0,i.Ry)({user:(0,i.Z_)()}),o=(0,i.G0)([(0,i.O7)(),(0,i.Ry)({text:(0,i.jt)((0,i.Z_)()),excemptions:(0,i.jt)((0,i.IX)(n))})]),c=(0,i.Ry)({action:(0,i.i0)("url"),url_path:(0,i.Z_)(),confirmation:(0,i.jt)(o)}),s=(0,i.Ry)({action:(0,i.i0)("call-service"),service:(0,i.Z_)(),service_data:(0,i.jt)((0,i.Ry)()),data:(0,i.jt)((0,i.Ry)()),target:(0,i.jt)((0,i.Ry)({entity_id:(0,i.jt)((0,i.G0)([(0,i.Z_)(),(0,i.IX)((0,i.Z_)())])),device_id:(0,i.jt)((0,i.G0)([(0,i.Z_)(),(0,i.IX)((0,i.Z_)())])),area_id:(0,i.jt)((0,i.G0)([(0,i.Z_)(),(0,i.IX)((0,i.Z_)())]))})),confirmation:(0,i.jt)(o)}),r=(0,i.Ry)({action:(0,i.i0)("navigate"),navigation_path:(0,i.Z_)(),navigation_replace:(0,i.jt)((0,i.O7)()),confirmation:(0,i.jt)(o)}),l=(0,i.dt)({action:(0,i.i0)("assist"),pipeline_id:(0,i.jt)((0,i.Z_)()),start_listening:(0,i.jt)((0,i.O7)())}),d=(0,i.dt)({action:(0,i.i0)("fire-dom-event")}),m=(0,i.Ry)({action:(0,i.kE)(["none","toggle","more-info","call-service","url","navigate","assist"]),confirmation:(0,i.jt)(o)}),h=(0,i.D8)((e=>{if(e&&"object"==typeof e&&"action"in e)switch(e.action){case"call-service":return s;case"fire-dom-event":return d;case"navigate":return r;case"url":return c;case"assist":return l}return m}))},98346:(e,t,a)=>{a.d(t,{I:()=>n});var i=a(38768);const n=(0,i.Ry)({type:(0,i.Z_)(),view_layout:(0,i.Yj)()})}};
//# sourceMappingURL=4424.seFE8xXXWVc.js.map