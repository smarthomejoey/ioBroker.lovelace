export const id=56097;export const ids=[56097];export const modules={32594:(e,t,o)=>{o.d(t,{U:()=>i});const i=e=>e.stopPropagation()},50424:(e,t,o)=>{o.d(t,{n:()=>i});const i=(e,t)=>{const o=new Promise(((t,o)=>{setTimeout((()=>{o(`Timed out in ${e} ms.`)}),e)}));return Promise.race([t,o])}},33753:(e,t,o)=>{var i=o(17463),a=o(34541),r=o(47838),d=o(68144),s=o(79932),n=o(14516),c=o(47181),l=o(32594);o(81312);const f={key:"Mod-s",run:e=>((0,c.B)(e.dom,"editor-save"),!0)},h=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};(0,i.Z)([(0,s.Mo)("ha-code-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"error",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,a.Z)((0,r.Z)(i.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",l.U),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.Z)((0,r.Z)(i.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",l.U),this.updateComplete.then((()=>{this.codemirror.destroy(),delete this.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:async function(){var e;null!==(e=this._loadedCodeMirror)&&void 0!==e||(this._loadedCodeMirror=await Promise.all([o.e(43642),o.e(74561),o.e(92914)]).then(o.bind(o,92914))),(0,a.Z)((0,r.Z)(i.prototype),"scheduleUpdate",this).call(this)}},{kind:"method",key:"update",value:function(e){if((0,a.Z)((0,r.Z)(i.prototype),"update",this).call(this,e),!this.codemirror)return void this._createCodeMirror();const t=[];e.has("mode")&&t.push({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&t.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("_value")&&this._value!==this.value&&t.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),t.length>0&&this.codemirror.dispatch(...t),e.has("error")&&this.classList.toggle("error-state",this.error)}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,f]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate)];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value:()=>(0,n.Z)((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=this._getStates(this.hass.states);return o&&o.length?{from:Number(t.from),options:o,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=(await o.e(71639).then(o.t.bind(o,71639,19))).default,this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:h})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const o=await this._getIconItems();return{from:Number(t.from),options:o,validFor:/^mdi:\S*$/}}},{kind:"field",key:"_onUpdate",value(){return e=>{e.docChanged&&(this._value=e.state.doc.toString(),(0,c.B)(this,"value-changed",{value:this._value}))}}},{kind:"get",static:!0,key:"styles",value:function(){return d.iv`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`}}]}}),d.fl)},81312:(e,t,o)=>{var i=o(17463),a=o(34541),r=o(47838),d=o(68144),s=o(79932),n=o(47181),c=o(38346),l=o(49594),f=o(82160),h=o(50424);const u=JSON.parse('{"version":"7.3.67","parts":[{"file":"58ce751bfb601c28addea4dbdfee24226e4e26b1"},{"start":"account-switch-","file":"6fe9065fea10add5c0c6e48354166d037ac50b20"},{"start":"alpha-t-c","file":"d7d106c388bfda2f151cc05b575c6407a2321358"},{"start":"arrow-down-box","file":"07d46da6788757104d63cc6dfd69a5574fa9ea0e"},{"start":"bac","file":"a69c2429be94dc38246377a9f0b8bb0d7208c49a"},{"start":"battery-mi","file":"a4bd09088298857870205aad48d71ef5ecf14162"},{"start":"bo","file":"ea1b8f25379b641ca6ab4a89b3bb012a1898f125"},{"start":"briefcase-d","file":"a488fc5c297ba0d1eab0b7550c859ba5eb332d64"},{"start":"calendar-st","file":"a0916c7eca5a3e1154f040f8e1131481f554470b"},{"start":"car-ou","file":"4530f3f42b83c2fd05d41beb9ed32394dd236b86"},{"start":"cellphone-me","file":"18001e19a5b2dc0aa3829423dbe7a8cfcb3faedf"},{"start":"city-variant-","file":"8cf347559af0ec77cb1a1fbc9cf4f26c71e199a2"},{"start":"cloud-d","file":"aa0ca15dca285dcaf2d68fc1905a5886bff8e737"},{"start":"cog-sync-","file":"12d257426150b4727a785f64ace3cda63ad0837d"},{"start":"cookie-o","file":"e9a86cfd4033dbb9152bc25846a327e0272f8867"},{"start":"currency-tr","file":"5131d4536a8d7f548abb80d0ce20e6b8ef3da456"},{"start":"det","file":"d84e77bed2fec3dded9590d3a223f90a77850404"},{"start":"e","file":"c50a17e014e7dc1dda66612c9f4262e362046942"},{"start":"emoticon-r","file":"fa93bbb9f394ae9dad00dd24d63b2b8abc51eb57"},{"start":"fan-o","file":"fcf07b2bb103855d7881ea7785be0d9356a91169"},{"start":"file-set","file":"9e3206e4b3fc6a9516d852501f2a0f2d87dc38be"},{"start":"flip-t","file":"b732f8191887ed827ee9522c5be6e2b313d41a93"},{"start":"football-h","file":"a2953da9f03edc844d932976096ab3d6bb700b03"},{"start":"gas-station-","file":"5e9382d02a8816f0580987453669f4984e890764"},{"start":"google-s","file":"7fbeae05187b80048f4e6c8b15b417b8b915f31e"},{"start":"head-l","file":"6a014f724c5e039ebab09a43fda1b86b0a6d5b60"},{"start":"home-v","file":"a9431e7dae87b1867647a2f84c24c587aace2901"},{"start":"incognito-o","file":"43bf39792d61eb1233b56e4c27063ba787a6abc3"},{"start":"l","file":"be619036639cbb2a4eeee0ec39f4d180e8b1b61b"},{"start":"lightbulb-night-","file":"341f70f7b271dfb175d02bf888b28d235a4e76c5"},{"start":"map-clock-","file":"5415140032324eb36efbb9ff4a1c1620e1e09cee"},{"start":"microsoft-p","file":"2b3ac173c56a374495f6832c5bba32ae886e6cff"},{"start":"movie-open-plu","file":"a748347ba838db9f493261933486ee2b5ab8edb6"},{"start":"numeric-10-c","file":"137c0b16170d81671cd5515981f45eb52f661fd9"},{"start":"palette-s","file":"5de2e50c3ff206321071caf8d66f586be45bb9eb"},{"start":"phone-bluetooth-","file":"f634d315e85b52f05338ef94afa5e177506646e6"},{"start":"podi","file":"40f323ce90754fd2fe1ae5943ede7eec7cd415d8"},{"start":"puzzle-heart-","file":"96951c0eed3f62d2b9e964426dc5b62c3a9a66f8"},{"start":"relation-only-one-to-zero-or-o","file":"e256296bf39da5bdf1542ade4bbf8c7787d0c771"},{"start":"run","file":"63c07fd3a05a51a8ee8793a9493003ab03a55b26"},{"start":"set-left-","file":"3f22521dc9253cfc8b6d5e27e572a54a947006db"},{"start":"size-xxs","file":"8f8ad2f98fec00bb74b733c7f3104c0bf54451c5"},{"start":"sort-v","file":"504b0477945091d0dec0a1019ea3e84381d94dd5"},{"start":"sticker-ci","file":"c07c3d33aa7ce443bd3d45dffd88627e778b3bc9"},{"start":"sync","file":"6aaa668c62e648ba83547c2a6a966860dcfabfc4"},{"start":"tex","file":"ca7c219223cc867e80ab379ac7315629a2e75538"},{"start":"timer-st","file":"4ca8681e7117bc34e70f0ad97faee59dfd121cae"},{"start":"truck-ou","file":"015c125a80491ef47bab3cd6c3cd481b20ebf9da"},{"start":"view-d","file":"63b32ed0ba333f1070f0f113cbf4581879e43ebc"},{"start":"weather-night-","file":"555b752999d9858994f4eb2e289a8e7144951ec0"},{"start":"wifi-st","file":"20dbfd4ce7231736e91b0360b85a857d47407ba7"}]}'),b=(0,f.MT)("hass-icon-db","mdi-icon-store"),v=["mdi","hass","hassio","hademo"];let m=[];o(52039);const p={},y={};(async()=>{const e=await(0,f.U2)("_version",b);e?e!==u.version&&(await(0,f.ZH)(b),(0,f.t8)("_version",u.version,b)):(0,f.t8)("_version",u.version,b)})();const k=(0,c.D)((()=>(async e=>{const t=Object.keys(e),o=await Promise.all(Object.values(e));b("readwrite",(i=>{o.forEach(((o,a)=>{Object.entries(o).forEach((([e,t])=>{i.put(t,e)})),delete e[t[a]]}))}))})(y)),2e3),_={};(0,i.Z)([(0,s.Mo)("ha-icon")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.Cb)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_path",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_secondaryPath",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_viewBox",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_legacy",value:()=>!1},{kind:"method",key:"willUpdate",value:function(e){(0,a.Z)((0,r.Z)(i.prototype),"willUpdate",this).call(this,e),e.has("icon")&&(this._path=void 0,this._secondaryPath=void 0,this._viewBox=void 0,this._loadIcon())}},{kind:"method",key:"render",value:function(){return this.icon?this._legacy?d.dy` <iron-icon .icon="${this.icon}"></iron-icon>`:d.dy`<ha-svg-icon .path="${this._path}" .secondaryPath="${this._secondaryPath}" .viewBox="${this._viewBox}"></ha-svg-icon>`:d.Ld}},{kind:"method",key:"_loadIcon",value:async function(){if(!this.icon)return;const e=this.icon,[t,i]=this.icon.split(":",2);let a,r=i;if(!t||!r)return;if(!v.includes(t)){const o=l.g[t];return o?void(o&&"function"==typeof o.getIcon&&this._setCustomPath(o.getIcon(r),e)):void(this._legacy=!0)}if(this._legacy=!1,r in p){const e=p[r];let o;e.newName?(o=`Icon ${t}:${r} was renamed to ${t}:${e.newName}, please change your config, it will be removed in version ${e.removeIn}.`,r=e.newName):o=`Icon ${t}:${r} was removed from MDI, please replace this icon with an other icon in your config, it will be removed in version ${e.removeIn}.`,console.warn(o),(0,n.B)(this,"write_log",{level:"warning",message:o})}if(r in _)return void(this._path=_[r]);if("home-assistant"===r){const t=(await o.e(30008).then(o.bind(o,30008))).mdiHomeAssistant;return this.icon===e&&(this._path=t),void(_[r]=t)}try{a=await(e=>new Promise(((t,o)=>{m.push([e,t,o]),m.length>1||(0,h.n)(1e3,b("readonly",(e=>{for(const[t,o,i]of m)(0,f.RV)(e.get(t)).then((e=>o(e))).catch((e=>i(e)));m=[]}))).catch((e=>{for(const[,,t]of m)t(e);m=[]}))})))(r)}catch(e){a=void 0}if(a)return this.icon===e&&(this._path=a),void(_[r]=a);const d=(e=>{let t;for(const o of u.parts){if(void 0!==o.start&&e<o.start)break;t=o}return t.file})(r);if(d in y)return void this._setPath(y[d],r,e);const s=fetch(`/static/mdi/${d}.json`).then((e=>e.json()));y[d]=s,this._setPath(s,r,e),k()}},{kind:"method",key:"_setCustomPath",value:async function(e,t){const o=await e;this.icon===t&&(this._path=o.path,this._secondaryPath=o.secondaryPath,this._viewBox=o.viewBox)}},{kind:"method",key:"_setPath",value:async function(e,t,o){const i=await e;this.icon===o&&(this._path=i[t]),_[t]=i[t]}},{kind:"get",static:!0,key:"styles",value:function(){return d.iv`:host{fill:currentcolor}`}}]}}),d.oi)},16235:(e,t,o)=>{var i=o(17463),a=o(68144),r=o(79932);(0,i.Z)([(0,r.Mo)("ha-input-helper-text")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"method",key:"render",value:function(){return a.dy`<slot></slot>`}},{kind:"field",static:!0,key:"styles",value:()=>a.iv`:host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px}`}]}}),a.oi)},56097:(e,t,o)=>{o.r(t),o.d(t,{HaTemplateSelector:()=>s});var i=o(17463),a=o(68144),r=o(79932),d=o(47181);o(33753),o(16235);let s=(0,i.Z)([(0,r.Mo)("ha-selector-template")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"method",key:"render",value:function(){return a.dy` ${this.label?a.dy`<p>${this.label}${this.required?"*":""}</p>`:""} <ha-code-editor mode="jinja2" .hass="${this.hass}" .value="${this.value}" .readOnly="${this.disabled}" autofocus autocomplete-entities autocomplete-icons @value-changed="${this._handleChange}" dir="ltr"></ha-code-editor> ${this.helper?a.dy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} `}},{kind:"method",key:"_handleChange",value:function(e){const t=e.target.value;this.value!==t&&(0,d.B)(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`p{margin-top:0}`}}]}}),a.oi)},49594:(e,t,o)=>{o.d(t,{g:()=>d});const i=window;"customIconsets"in i||(i.customIconsets={});const a=i.customIconsets,r=window;"customIcons"in r||(r.customIcons={});const d=new Proxy(r.customIcons,{get:(e,t)=>{var o;return null!==(o=e[t])&&void 0!==o?o:a[t]?{getIcon:a[t]}:void 0}})},82160:(e,t,o)=>{function i(e){return new Promise(((t,o)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>o(e.error)}))}function a(e,t){const o=indexedDB.open(e);o.onupgradeneeded=()=>o.result.createObjectStore(t);const a=i(o);return(e,o)=>a.then((i=>o(i.transaction(t,e).objectStore(t))))}let r;function d(){return r||(r=a("keyval-store","keyval")),r}function s(e,t=d()){return t("readonly",(t=>i(t.get(e))))}function n(e,t,o=d()){return o("readwrite",(o=>(o.put(t,e),i(o.transaction))))}function c(e=d()){return e("readwrite",(e=>(e.clear(),i(e.transaction))))}o.d(t,{MT:()=>a,RV:()=>i,U2:()=>s,ZH:()=>c,t8:()=>n})}};
//# sourceMappingURL=56097.CmCsorgSWLo.js.map