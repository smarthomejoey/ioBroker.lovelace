export const id=98226;export const ids=[98226];export const modules={98226:(r,e,s)=>{s.r(e),s.d(e,{REDIRECTS:()=>h});var t=s(17463),o=s(34541),i=s(47838),a=s(54211),d=s(68144),n=s(79932),c=s(83849),u=s(15493);s(48811);const h={supervisor:{redirect:"/hassio/dashboard"},supervisor_logs:{redirect:"/hassio/system"},supervisor_info:{redirect:"/hassio/system"},supervisor_snapshots:{redirect:"/hassio/backups"},supervisor_backups:{redirect:"/hassio/backups"},supervisor_store:{redirect:"/hassio/store"},supervisor_addons:{redirect:"/hassio/dashboard"},supervisor_addon:{redirect:"/hassio/addon",params:{addon:"string"},optional_params:{repository_url:"url"}},supervisor_ingress:{redirect:"/hassio/ingress",params:{addon:"string"}},supervisor_add_addon_repository:{redirect:"/hassio/store",params:{repository_url:"url"}}};(0,t.Z)([(0,n.Mo)("hassio-my-redirect")],(function(r,e){class s extends e{constructor(...e){super(...e),r(this)}}return{F:s,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,o.Z)((0,i.Z)(s.prototype),"connectedCallback",this).call(this);const r=this.route.path.substr(1),e=h[r];if(!e)return void(this._error=this.supervisor.localize("my.not_supported",{link:d.dy`<a target="_blank" rel="noreferrer noopener" href="https://my.home-assistant.io/faq.html#supported-pages"> ${this.supervisor.localize("my.faq_link")} </a>`}));let t;try{t=this._createRedirectUrl(e)}catch(r){return void(this._error=this.supervisor.localize("my.error"))}(0,c.c)(t,{replace:!0})}},{kind:"method",key:"render",value:function(){return this._error?d.dy`<hass-error-screen .error="${this._error}"></hass-error-screen>`:d.Ld}},{kind:"method",key:"_createRedirectUrl",value:function(r){const e=this._createRedirectParams(r);return`${r.redirect}${e}`}},{kind:"method",key:"_createRedirectParams",value:function(r){const e=(0,u.Q2)();if(!r.params&&!Object.keys(e).length)return"";const s={};return Object.entries(r.params||{}).forEach((([r,t])=>{if(!e[r]||!this._checkParamType(t,e[r]))throw Error();s[r]=e[r]})),Object.entries(r.optional_params||{}).forEach((([r,t])=>{if(e[r]){if(!this._checkParamType(t,e[r]))throw Error();s[r]=e[r]}})),`?${(0,u.ou)(s)}`}},{kind:"method",key:"_checkParamType",value:function(r,e){return"string"===r||"url"===r&&(e&&e===(0,a.Nm)(e))}}]}}),d.oi)}};
//# sourceMappingURL=98226.V8yIRanAr0M.js.map