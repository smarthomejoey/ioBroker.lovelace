export const id=69331;export const ids=[69331];export const modules={44583:(e,t,o)=>{o.a(e,(async(e,i)=>{try{o.d(t,{DG:()=>m,E8:()=>f,NR:()=>v,o0:()=>c,yD:()=>p});var a=o(14516),r=o(4631),n=o(12198),l=o(49684),s=o(65810),d=e([r,n,l]);[r,n,l]=d.then?(await d)():d;const c=(e,t,o)=>u(t,o.time_zone).format(e),u=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),m=(e,t,o)=>h(t,o.time_zone).format(e),h=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),p=(e,t,o)=>g(t,o.time_zone).format(e),g=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),f=(e,t,o)=>y(t,o.time_zone).format(e),y=(0,a.Z)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,s.y)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,s.y)(e)?"h12":"h23",timeZone:"server"===e.time_zone?t:void 0}))),v=(e,t,o)=>`${(0,n.WB)(e,t,o)}, ${(0,l.mr)(e,t,o)}`;i()}catch(e){i(e)}}))},65504:(e,t,o)=>{o.d(t,{r:()=>a});const i=(e,t,o=true)=>{var a;if(!e||e===document.body)return null;if((e=null!==(a=e.assignedSlot)&&void 0!==a?a:e).parentElement)e=e.parentElement;else{const t=e.getRootNode();e=t instanceof ShadowRoot?t.host:null}return(o?Object.prototype.hasOwnProperty.call(e,t):e&&t in e)?e:i(e,t,o)},a=(e,t,o=true)=>{const a=new Set;for(;e;)a.add(e),e=i(e,t,o);return a}},20303:(e,t,o)=>{o.d(t,{j:()=>i});const i=(e=document)=>{var t;return null!==(t=e.activeElement)&&void 0!==t&&null!==(t=t.shadowRoot)&&void 0!==t&&t.activeElement?i(e.activeElement.shadowRoot):e.activeElement}},83849:(e,t,o)=>{o.d(t,{c:()=>n});var i=o(98651);if(98818!=o.j)var a=o(47181);var r=o(30418);const n=(e,t)=>{const o=(null==t?void 0:t.replace)||!1;var l;i.U?i.U.then((()=>n(e,t))):(o?r.E.history.replaceState(null!==(l=r.E.history.state)&&void 0!==l&&l.root?{root:!0}:null,"",e):r.E.history.pushState(null,"",e),(0,a.B)(r.E,"location-changed",{replace:o}))}},18457:(e,t,o)=>{o.d(t,{Hd:()=>l,SL:()=>r,l4:()=>d,sJ:()=>n,uf:()=>s});var i=o(66477),a=o(27593);const r=e=>n(e.attributes),n=e=>!!e.unit_of_measurement||!!e.state_class,l=e=>{switch(e.number_format){case i.y4.comma_decimal:return["en-US","en"];case i.y4.decimal_comma:return["de","es","it"];case i.y4.space_comma:return["fr","sv","cs"];case i.y4.system:return;default:return e.language}},s=(e,t,o)=>{const r=t?l(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==i.y4.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(r,c(e,o)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,c(e,o)).format(Number(e))}return!Number.isNaN(Number(e))&&""!==e&&(null==t?void 0:t.number_format)===i.y4.none&&Intl?new Intl.NumberFormat("en-US",c(e,{...o,useGrouping:!1})).format(Number(e)):"string"==typeof e?e:`${(0,a.N)(e,null==o?void 0:o.maximumFractionDigits).toString()}${"currency"===(null==o?void 0:o.style)?` ${o.currency}`:""}`},d=(e,t)=>{var o;const i=null==t?void 0:t.display_precision;return null!=i?{maximumFractionDigits:i,minimumFractionDigits:i}:Number.isInteger(Number(null==e||null===(o=e.attributes)||void 0===o?void 0:o.step))&&Number.isInteger(Number(null==e?void 0:e.state))?{maximumFractionDigits:0}:void 0},c=(e,t)=>{const o={maximumFractionDigits:2,...t};if("string"!=typeof e)return o;if(!t||void 0===t.minimumFractionDigits&&void 0===t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;o.minimumFractionDigits=t,o.maximumFractionDigits=t}return o}},99137:(e,t,o)=>{o.d(t,{J:()=>n});const i="^\\d{4}-(0[1-9]|1[0-2])-([12]\\d|0[1-9]|3[01])",a=new RegExp(i+"$"),r=new RegExp(i),n=(e,t=!1)=>t?r.test(e):a.test(e)},96151:(e,t,o)=>{o.d(t,{T:()=>i,y:()=>a});const i=e=>{requestAnimationFrame((()=>setTimeout(e,0)))},a=()=>new Promise((e=>{i(e)}))},68331:(e,t,o)=>{o.d(t,{u:()=>m});var i=o(17463),a=o(34541),r=o(47838),n=o(68144),l=o(79932),s=o(55642),d=o(47181);o(9381),o(25727);const c={boolean:()=>Promise.all([o.e(41985),o.e(65978)]).then(o.bind(o,65978)),constant:()=>o.e(60409).then(o.bind(o,60409)),float:()=>Promise.all([o.e(42850),o.e(46992),o.e(43890)]).then(o.bind(o,96272)),grid:()=>o.e(56641).then(o.bind(o,56641)),expandable:()=>o.e(92670).then(o.bind(o,92670)),integer:()=>Promise.all([o.e(63547),o.e(74177),o.e(39715)]).then(o.bind(o,39715)),multi_select:()=>Promise.all([o.e(42850),o.e(46992),o.e(63436),o.e(66903),o.e(65666),o.e(41985),o.e(32140)]).then(o.bind(o,86823)),positive_time_period_dict:()=>Promise.all([o.e(46992),o.e(63436),o.e(3762),o.e(66903),o.e(65666),o.e(49412),o.e(55105)]).then(o.bind(o,91267)),select:()=>Promise.all([o.e(42850),o.e(46992),o.e(63436),o.e(78133),o.e(50731),o.e(3762),o.e(66903),o.e(65666),o.e(49412),o.e(41985),o.e(70632),o.e(63547),o.e(56424),o.e(68970),o.e(78738),o.e(59221)]).then(o.bind(o,59221)),string:()=>Promise.all([o.e(42850),o.e(46992),o.e(72521)]).then(o.bind(o,6782))},u=(e,t)=>e?t.name?e[t.name]:e:null;let m=(0,i.Z)([(0,l.Mo)("ha-form")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"error",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"warning",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,l.Cb)()],key:"computeError",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"computeWarning",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"computeLabel",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"computeHelper",value:void 0},{kind:"field",decorators:[(0,l.Cb)()],key:"localizeValue",value:void 0},{kind:"method",key:"focus",value:async function(){await this.updateComplete;const e=this.renderRoot.querySelector(".root");if(e)for(const t of e.children)if("HA-ALERT"!==t.tagName){t instanceof n.fl&&await t.updateComplete,t.focus();break}}},{kind:"method",key:"willUpdate",value:function(e){e.has("schema")&&this.schema&&this.schema.forEach((e=>{var t;"selector"in e||null===(t=c[e.type])||void 0===t||t.call(c)}))}},{kind:"method",key:"render",value:function(){return n.dy` <div class="root" part="root"> ${this.error&&this.error.base?n.dy` <ha-alert alert-type="error"> ${this._computeError(this.error.base,this.schema)} </ha-alert> `:""} ${this.schema.map((e=>{const t=((e,t)=>e&&t.name?e[t.name]:null)(this.error,e),o=((e,t)=>e&&t.name?e[t.name]:null)(this.warning,e);return n.dy` ${t?n.dy` <ha-alert own-margin alert-type="error"> ${this._computeError(t,e)} </ha-alert> `:o?n.dy` <ha-alert own-margin alert-type="warning"> ${this._computeWarning(o,e)} </ha-alert> `:""} ${"selector"in e?n.dy`<ha-selector .schema="${e}" .hass="${this.hass}" .name="${e.name}" .selector="${e.selector}" .value="${u(this.data,e)}" .label="${this._computeLabel(e,this.data)}" .disabled="${e.disabled||this.disabled||!1}" .placeholder="${e.required?"":e.default}" .helper="${this._computeHelper(e)}" .localizeValue="${this.localizeValue}" .required="${e.required||!1}" .context="${this._generateContext(e)}"></ha-selector>`:(0,s.h)(this.fieldElementName(e.type),{schema:e,data:u(this.data,e),label:this._computeLabel(e,this.data),helper:this._computeHelper(e),disabled:this.disabled||e.disabled||!1,hass:this.hass,computeLabel:this.computeLabel,computeHelper:this.computeHelper,context:this._generateContext(e)})} `}))} </div> `}},{kind:"method",key:"fieldElementName",value:function(e){return`ha-form-${e}`}},{kind:"method",key:"_generateContext",value:function(e){if(!e.context)return;const t={};for(const[o,i]of Object.entries(e.context))t[o]=this.data[i];return t}},{kind:"method",key:"createRenderRoot",value:function(){const e=(0,a.Z)((0,r.Z)(o.prototype),"createRenderRoot",this).call(this);return this.addValueChangedListener(e),e}},{kind:"method",key:"addValueChangedListener",value:function(e){e.addEventListener("value-changed",(e=>{e.stopPropagation();const t=e.target.schema;if(e.target===this)return;const o=t.name?{[t.name]:e.detail.value}:e.detail.value;this.data={...this.data,...o},(0,d.B)(this,"value-changed",{value:this.data})}))}},{kind:"method",key:"_computeLabel",value:function(e,t){return this.computeLabel?this.computeLabel(e,t):e?e.name:""}},{kind:"method",key:"_computeHelper",value:function(e){return this.computeHelper?this.computeHelper(e):""}},{kind:"method",key:"_computeError",value:function(e,t){return this.computeError?this.computeError(e,t):e}},{kind:"method",key:"_computeWarning",value:function(e,t){return this.computeWarning?this.computeWarning(e,t):e}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`.root>*{display:block}.root>:not([own-margin]):not(:last-child){margin-bottom:24px}ha-alert[own-margin]{margin-bottom:4px}`}}]}}),n.oi)},22814:(e,t,o)=>{o.d(t,{Cp:()=>m,GX:()=>d,PC:()=>l,TZ:()=>h,W2:()=>u,WD:()=>n,YY:()=>p,et:()=>s,iI:()=>r,lU:()=>c,oT:()=>a,uw:()=>i});const i=62343==o.j?`${location.protocol}//${location.host}`:null,a=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return{...e,autocomplete:"username"};case"password":return{...e,autocomplete:"current-password"};case"code":return{...e,autocomplete:"one-time-code"};default:return e}})),r=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),n=()=>fetch("/auth/providers",{credentials:"same-origin"}),l=(e,t,o)=>fetch("/auth/login_flow",{method:"POST",credentials:"same-origin",body:JSON.stringify({client_id:e,handler:o,redirect_uri:t})}),s=(e,t)=>fetch(`/auth/login_flow/${e}`,{method:"POST",credentials:"same-origin",body:JSON.stringify(t)}),d=e=>fetch(`/auth/login_flow/${e}`,{method:"DELETE",credentials:"same-origin"}),c=(e,t,o,i)=>{e.includes("?")?e.endsWith("&")||(e+="&"):e+="?",e+=`code=${encodeURIComponent(t)}`,o&&(e+=`&state=${encodeURIComponent(o)}`),i&&(e+="&storeToken=true"),document.location.assign(e)},u=async(e,t,o,i)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:o,password:i}),m=(e,t,o)=>e.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:t,new_password:o}),h=(e,t,o)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:t,password:o}),p=e=>e.callWS({type:"auth/delete_all_refresh_tokens"})},96339:(e,t,o)=>{o.d(t,{$_:()=>g,A1:()=>r,A4:()=>d,Cy:()=>a,Gn:()=>s,LW:()=>u,cR:()=>l,kd:()=>c,l3:()=>p,pw:()=>m,qF:()=>n,we:()=>f,x_:()=>h});var i=o(45245);const a=(0,i.k)("states"),r=(0,i.k)("entities"),n=(0,i.k)("devices"),l=(0,i.k)("areas"),s=(0,i.k)("localize"),d=(0,i.k)("locale"),c=(0,i.k)("config"),u=(0,i.k)("themes"),m=(0,i.k)("selectedTheme"),h=(0,i.k)("user"),p=(0,i.k)("userData"),g=(0,i.k)("panels"),f=(0,i.k)("extendedEntities")},70843:(e,t,o)=>{o.d(t,{F_:()=>r,ig:()=>a,wk:()=>i});const i=98818!=o.j?["entity_id","assumed_state","attribution","custom_ui_more_info","custom_ui_state_card","device_class","editable","emulated_hue_name","emulated_hue","entity_picture","event_types","friendly_name","haaska_hidden","haaska_name","icon","initial_state","last_reset","restored","state_class","supported_features","unit_of_measurement"]:null,a=new Set(["temperature","current_temperature","target_temperature","target_temp_temp","target_temp_high","target_temp_low","target_temp_step","min_temp","max_temp"]),r={climate:{humidity:"%",current_humidity:"%",target_humidity_low:"%",target_humidity_high:"%",target_humidity_step:"%",min_humidity:"%",max_humidity:"%"},cover:{current_position:"%",current_tilt_position:"%"},fan:{percentage:"%"},humidifier:{humidity:"%",current_humidity:"%",min_humidity:"%",max_humidity:"%"},light:{color_temp:"mired",max_mireds:"mired",min_mireds:"mired",color_temp_kelvin:"K",min_color_temp_kelvin:"K",max_color_temp_kelvin:"K"},sun:{elevation:"°"},vacuum:{battery_level:"%"},sensor:{battery_level:"%"}}},74186:(e,t,o)=>{if(o.d(t,{Iq:()=>p,L3:()=>h,LM:()=>b,Mw:()=>S,Nv:()=>g,_V:()=>x,eD:()=>c,hg:()=>y,ol:()=>k,vA:()=>m,w1:()=>E,wX:()=>u,z3:()=>f}),98818!=o.j)var i=o(97330);var a=o(14516),r=o(91741),n=o(85415);if(98818!=o.j)var l=o(38346);if(98818!=o.j)var s=o(58831);const d=98818!=o.j?["sensor","binary_sensor"]:null,c=(e,t)=>{const o=t.filter((t=>e.states[t.entity_id]&&"battery"===e.states[t.entity_id].attributes.device_class&&d.includes((0,s.M)(t.entity_id)))).sort(((e,t)=>d.indexOf((0,s.M)(e.entity_id))-d.indexOf((0,s.M)(t.entity_id))));if(o.length>0)return o[0]},u=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery_charging"===e.states[t.entity_id].attributes.device_class)),m=(e,t)=>{if(t.name)return t.name;const o=e.states[t.entity_id];return o?(0,r.C)(o):t.original_name?t.original_name:t.entity_id},h=(e,t)=>e.callWS({type:"config/entity_registry/get",entity_id:t}),p=(e,t)=>e.callWS({type:"config/entity_registry/get_entries",entity_ids:t}),g=(e,t,o)=>e.callWS({type:"config/entity_registry/update",entity_id:t,...o}),f=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),y=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),v=e=>e.sendMessagePromise({type:"config/entity_registry/list_for_display"}),_=(e,t)=>e.subscribeEvents((0,l.D)((()=>y(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),b=(e,t)=>(0,i.B)("_entityRegistry",y,_,e,t),w=(e,t)=>e.subscribeEvents((0,l.D)((()=>v(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),k=(e,t)=>(0,i.B)("_entityRegistryDisplay",v,w,e,t),x=(e,t)=>e.sort(((e,o)=>(0,n.f)(e.name||"",o.name||"",t))),E=(0,a.Z)((e=>{const t={};for(const o of e)t[o.entity_id]=o;return t})),S=(0,a.Z)((e=>{const t={};for(const o of e)t[o.id]=o;return t}))},26765:(e,t,o)=>{o.r(t),o.d(t,{loadGenericDialog:()=>a,showAlertDialog:()=>n,showConfirmationDialog:()=>l,showPromptDialog:()=>s});var i=o(47181);const a=()=>Promise.all([o.e(28597),o.e(45497),o.e(52154),o.e(55760),o.e(1281)]).then(o.bind(o,1281)),r=(e,t,o)=>new Promise((r=>{const n=t.cancel,l=t.confirm;(0,i.B)(e,"show-dialog",{dialogTag:"dialog-box",dialogImport:a,dialogParams:{...t,...o,cancel:()=>{r(!(null==o||!o.prompt)&&null),n&&n()},confirm:e=>{r(null==o||!o.prompt||e),l&&l(e)}}})})),n=(e,t)=>r(e,t),l=(e,t)=>r(e,t,{confirmation:!0}),s=(e,t)=>r(e,t,{prompt:!0})},74265:(e,t,o)=>{o.d(t,{gA:()=>s,gk:()=>c,lD:()=>u,vC:()=>d});var i=o(30418);if(98818!=o.j)var a=o(65504);if(98818!=o.j)var r=o(20303);if(98818!=o.j)var n=o(96151);const l={},s=Symbol.for("HA focus target"),d=async(e,t,o,n,d,c=!0)=>{var u;if(!(o in l)){if(!d)return!1;l[o]={element:d().then((()=>{const t=document.createElement(o);return e.provideHass(t),t}))}}if(null!==(u=i.E.history.state)&&void 0!==u&&u.replaced?(l[o].closedFocusTargets=l[i.E.history.state.dialog].closedFocusTargets,delete l[i.E.history.state.dialog].closedFocusTargets):l[o].closedFocusTargets=(0,a.r)((0,r.j)(),s),c){var h,p;i.E.history.replaceState({dialog:o,open:!1,oldState:null!==(h=i.E.history.state)&&void 0!==h&&h.open&&(null===(p=i.E.history.state)||void 0===p?void 0:p.dialog)!==o?i.E.history.state:null},"");try{i.E.history.pushState({dialog:o,dialogParams:n,open:!0},"")}catch(e){i.E.history.pushState({dialog:o,dialogParams:null,open:!0},"")}}const g=await l[o].element;return g.addEventListener("dialog-closed",m),t.appendChild(g),g.showDialog(n),!0},c=async e=>{if(!(e in l))return!0;const t=await l[e].element;return!t.closeDialog||!1!==t.closeDialog()},u=(e,t)=>{e.addEventListener("show-dialog",(o=>{const{dialogTag:i,dialogImport:a,dialogParams:r,addHistory:n}=o.detail;d(e,t,i,r,a,n)}))},m=async e=>{const t=l[e.detail.dialog].closedFocusTargets;if(delete l[e.detail.dialog].closedFocusTargets,!t)return;let o=(0,r.j)();o instanceof HTMLElement&&o.blur(),await(0,n.y)();for(const e of t)if(e instanceof HTMLElement&&(e.focus(),o=(0,r.j)(),o&&o!==document.body))return}},11654:(e,t,o)=>{o.d(t,{$c:()=>l,Qx:()=>r,k1:()=>a,yu:()=>n});var i=o(68144);const a=i.iv`button.link{background:0 0;color:inherit;border:none;padding:0;font:inherit;text-align:left;text-decoration:underline;cursor:pointer;outline:0}`,r=i.iv`:host{font-family:var(--paper-font-body1_-_font-family);-webkit-font-smoothing:var(--paper-font-body1_-_-webkit-font-smoothing);font-size:var(--paper-font-body1_-_font-size);font-weight:var(--paper-font-body1_-_font-weight);line-height:var(--paper-font-body1_-_line-height)}app-header div[sticky]{height:48px}app-toolbar [main-title]{margin-left:20px}h1{font-family:var(--paper-font-headline_-_font-family);-webkit-font-smoothing:var(--paper-font-headline_-_-webkit-font-smoothing);white-space:var(--paper-font-headline_-_white-space);overflow:var(--paper-font-headline_-_overflow);text-overflow:var(--paper-font-headline_-_text-overflow);font-size:var(--paper-font-headline_-_font-size);font-weight:var(--paper-font-headline_-_font-weight);line-height:var(--paper-font-headline_-_line-height)}h2{font-family:var(--paper-font-title_-_font-family);-webkit-font-smoothing:var(--paper-font-title_-_-webkit-font-smoothing);white-space:var(--paper-font-title_-_white-space);overflow:var(--paper-font-title_-_overflow);text-overflow:var(--paper-font-title_-_text-overflow);font-size:var(--paper-font-title_-_font-size);font-weight:var(--paper-font-title_-_font-weight);line-height:var(--paper-font-title_-_line-height)}h3{font-family:var(--paper-font-subhead_-_font-family);-webkit-font-smoothing:var(--paper-font-subhead_-_-webkit-font-smoothing);white-space:var(--paper-font-subhead_-_white-space);overflow:var(--paper-font-subhead_-_overflow);text-overflow:var(--paper-font-subhead_-_text-overflow);font-size:var(--paper-font-subhead_-_font-size);font-weight:var(--paper-font-subhead_-_font-weight);line-height:var(--paper-font-subhead_-_line-height)}a{color:var(--primary-color)}.secondary{color:var(--secondary-text-color)}.error{color:var(--error-color)}.warning{color:var(--error-color)}mwc-button.warning{--mdc-theme-primary:var(--error-color)}${a} .card-actions a{text-decoration:none}.card-actions .warning{--mdc-theme-primary:var(--error-color)}.layout.horizontal,.layout.vertical{display:flex}.layout.inline{display:inline-flex}.layout.horizontal{flex-direction:row}.layout.vertical{flex-direction:column}.layout.wrap{flex-wrap:wrap}.layout.no-wrap{flex-wrap:nowrap}.layout.center,.layout.center-center{align-items:center}.layout.bottom{align-items:flex-end}.layout.center-center,.layout.center-justified{justify-content:center}.flex{flex:1;flex-basis:0.000000001px}.flex-auto{flex:1 1 auto}.flex-none{flex:none}.layout.justified{justify-content:space-between}`,n=i.iv`ha-dialog{--mdc-dialog-min-width:400px;--mdc-dialog-max-width:600px;--mdc-dialog-max-width:min(600px, 95vw);--justify-action-buttons:space-between}ha-dialog .form{color:var(--primary-text-color)}a{color:var(--primary-color)}@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-min-width:calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );--mdc-dialog-max-width:calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );--mdc-dialog-min-height:100%;--mdc-dialog-max-height:100%;--vertical-align-dialog:flex-end;--ha-dialog-border-radius:0}}ha-button.warning,mwc-button.warning{--mdc-theme-primary:var(--error-color)}.error{color:var(--error-color)}`,l=i.iv`.ha-scrollbar::-webkit-scrollbar{width:.4rem;height:.4rem}.ha-scrollbar::-webkit-scrollbar-thumb{-webkit-border-radius:4px;border-radius:4px;background:var(--scrollbar-thumb-color)}.ha-scrollbar{overflow-y:auto;scrollbar-color:var(--scrollbar-thumb-color) transparent;scrollbar-width:thin}`;i.iv`body{background-color:var(--primary-background-color);color:var(--primary-text-color);height:calc(100vh - 32px);width:100vw}`},98651:(e,t,o)=>{o.d(t,{M:()=>l,U:()=>r});var i=o(30418),a=o(74265);let r,n;const l=e=>class extends e{constructor(...e){super(...e),this._ignoreNextPopState=!1,this._dialogClosedListener=e=>{var t,o;null!==(t=i.E.history.state)&&void 0!==t&&t.open&&(null===(o=i.E.history.state)||void 0===o?void 0:o.dialog)===e.detail.dialog&&i.E.history.length&&(this._ignoreNextPopState=!0,r=new Promise((e=>{n=()=>{e(),n=void 0,r=void 0},i.E.history.back()})))},this._popstateChangeListener=e=>{var t,o;if(this._ignoreNextPopState)return history.length&&(null!==(t=e.state)&&void 0!==t&&null!==(t=t.oldState)&&void 0!==t&&t.replaced||null===(null===(o=e.state)||void 0===o||null===(o=o.oldState)||void 0===o?void 0:o.dialogParams))?void i.E.history.back():(this._ignoreNextPopState=!1,void(n&&n()));e.state&&"dialog"in e.state&&this._handleDialogStateChange(e.state),n&&n()}}connectedCallback(){super.connectedCallback(),1===i.E.history.length&&i.E.history.replaceState({...i.E.history.state,root:!0},""),i.E.addEventListener("popstate",this._popstateChangeListener),this.addEventListener("dialog-closed",this._dialogClosedListener)}disconnectedCallback(){super.disconnectedCallback(),i.E.removeEventListener("popstate",this._popstateChangeListener),this.removeEventListener("dialog-closed",this._dialogClosedListener)}firstUpdated(e){var t;super.firstUpdated(e),null!==(t=i.E.history.state)&&void 0!==t&&t.dialog&&this._handleDialogStateChange(i.E.history.state)}async _handleDialogStateChange(e){if(!e.open){return await(0,a.gk)(e.dialog)?void(e.oldState&&this._handleDialogStateChange(e.oldState)):void i.E.history.pushState({dialog:e.dialog,open:!0,dialogParams:null,oldState:null},"")}let t=!1;e.open&&null!==e.dialogParams&&(t=await(0,a.vC)(this,this.shadowRoot,e.dialog,e.dialogParams)),t||i.E.history.replaceState({...i.E.history.state,open:!1},"")}}}};
//# sourceMappingURL=69331.1wgdfNFm7tc.js.map