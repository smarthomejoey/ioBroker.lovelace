export const id=85716;export const ids=[85716];export const modules={55642:(e,t,i)=>{i.d(t,{h:()=>s});var a=i(68144),n=i(57835);const s=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),this._element=void 0,e.type!==n.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,i]){return this._element&&this._element.localName===t?(i&&Object.entries(i).forEach((([e,t])=>{this._element[e]=t})),a.Jb):this.render(t,i)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}})},98621:(e,t,i)=>{i.r(t),i.d(t,{HuiClimateHvacModesCardFeatureEditor:()=>r});var a=i(17463),n=i(68144),s=i(79932),o=i(14516),l=i(47181),d=(i(68331),i(74674));let r=(0,a.Z)([(0,s.Mo)("hui-climate-hvac-modes-card-feature-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"context",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"_schema",value:()=>(0,o.Z)(((e,t)=>[{name:"hvac_modes",selector:{select:{multiple:!0,mode:"list",options:d.lO.filter((e=>{var i;return null==t||null===(i=t.attributes.hvac_modes)||void 0===i?void 0:i.includes(e)})).map((i=>({value:i,label:t?e(t,i):i})))}}}]))},{kind:"method",key:"render",value:function(){var e,t;if(!this.hass||!this._config)return n.Ld;const i=null!==(e=this.context)&&void 0!==e&&e.entity_id?this.hass.states[null===(t=this.context)||void 0===t?void 0:t.entity_id]:void 0,a=this._schema(this.hass.formatEntityState,i);return n.dy` <ha-form .hass="${this.hass}" .data="${this._config}" .schema="${a}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> `}},{kind:"method",key:"_valueChanged",value:function(e){(0,l.B)(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"hvac_modes"===e.name?this.hass.localize(`ui.panel.lovelace.editor.features.types.climate-hvac-modes.${e.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),n.oi)}};
//# sourceMappingURL=85716.o2VKsNEttH0.js.map