"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[70310],{70310:(e,t,r)=>{r.a(e,(async e=>{r.r(t),r.d(t,{HuiEnergySolarGraphCard:()=>T});var i=r(27088),n=r(70390),o=r(53970),s=r(4535),a=r(14650),l=r(59699),c=r(37500),d=r(33310),p=r(8636),h=r(14516),u=r(15838),f=r(89525),m=r(12198),y=r(49684),v=r(18457),g=(r(62336),r(22098),r(55424)),k=r(38014),b=r(73826),_=e([y,m]);function w(){w=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!S(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=P(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:D(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=D(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function E(e){var t,r=P(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function x(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function S(e){return e.decorators&&e.decorators.length}function C(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function D(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function P(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}[y,m]=_.then?await _:_;let T=function(e,t,r,i){var n=w();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(C(o.descriptor)||C(n.descriptor)){if(S(o)||S(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(S(o)){if(S(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}x(o,n)}else t.push(o)}return t}(s.d.map(E)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,d.Mo)("hui-energy-solar-graph-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,d.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,d.SB)()],key:"_start",value:()=>(0,i.Z)()},{kind:"field",decorators:[(0,d.SB)()],key:"_end",value:()=>(0,n.Z)()},{kind:"field",decorators:[(0,d.SB)()],key:"_compareStart",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_compareEnd",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,g.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>this._getStatistics(e)))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?c.dy`
      <ha-card>
        ${this._config.title?c.dy`<h1 class="card-header">${this._config.title}</h1>`:""}
        <div
          class="content ${(0,p.$)({"has-header":!!this._config.title})}"
        >
          <ha-chart-base
            .data=${this._chartData}
            .options=${this._createOptions(this._start,this._end,this.hass.locale,this._compareStart,this._compareEnd)}
            chart-type="bar"
          ></ha-chart-base>
          ${this._chartData.datasets.length?"":c.dy`<div class="no-data">
                ${(0,o.Z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period")}
              </div>`}
        </div>
      </ha-card>
    `:c.dy``}},{kind:"field",key:"_createOptions",value:()=>(0,h.Z)(((e,t,r,i,n)=>{const o=(0,s.Z)(t,e),c=void 0!==i&&void 0!==n;if(c){const r=(0,a.Z)(t,e),o=(0,a.Z)(n,i);o>r?t=(0,l.Z)(t,o-r):r>o&&(n=(0,l.Z)(n,r-o))}const d={parsing:!1,animation:!1,scales:{x:{type:"time",suggestedMin:e.getTime(),suggestedMax:t.getTime(),adapters:{date:{locale:r}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:e=>e.tick&&e.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:o>35?"monthyear":o>7?"date":o>2?"weekday":o>0?"datetime":"hour",minUnit:o>35?"month":o>2?"day":"hour"}},y:{stacked:!0,type:"linear",title:{display:!0,text:"kWh"},ticks:{beginAtZero:!0}}},plugins:{tooltip:{mode:"nearest",callbacks:{title:e=>{if(o>0)return e[0].label;const t=new Date(e[0].parsed.x);return`${c?`${(0,m.mn)(t,r)}: `:""}${(0,y.mr)(t,r)} – ${(0,y.mr)((0,l.Z)(t,1),r)}`},label:e=>`${e.dataset.label}: ${(0,v.uf)(e.parsed.y,r)} kWh`}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{line:{tension:.3,borderWidth:1.5},bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:(0,v.Hd)(r)};return c&&(d.scales.xAxisCompare={...d.scales.x,suggestedMin:i.getTime(),suggestedMax:n.getTime(),display:!1}),d}))},{kind:"method",key:"_getStatistics",value:async function(e){const t=e.prefs.energy_sources.filter((e=>"solar"===e.type));let r;if(t.some((e=>{var t;return null===(t=e.config_entry_solar_forecast)||void 0===t?void 0:t.length})))try{r=await(0,g.jB)(this.hass)}catch(e){}const i=[],o=getComputedStyle(this),s=o.getPropertyValue("--energy-solar-color").trim();i.push(...this._processDataSet(e.stats,e.statsMetadata,t,s)),e.statsCompare&&(i.push({order:0,data:[]}),i.push({order:999,data:[],xAxisID:"xAxisCompare"}),i.push(...this._processDataSet(e.statsCompare,e.statsMetadata,t,s,!0))),r&&i.push(...this._processForecast(e.statsMetadata,r,t,o.getPropertyValue("--primary-text-color"),e.start,e.end)),this._start=e.start,this._end=e.end||(0,n.Z)(),this._compareStart=e.startCompare,this._compareEnd=e.endCompare,this._chartData={datasets:i}}},{kind:"method",key:"_processDataSet",value:function(e,t,r,i,n=!1){const o=[];return r.forEach(((r,s)=>{const a=s>0?this.hass.themes.darkMode?(0,f.C)((0,u.Rw)((0,u.wK)(i)),s):(0,f.W)((0,u.Rw)((0,u.wK)(i)),s):void 0,l=a?(0,u.CO)((0,u.p3)(a)):i;let c=null,d=null;const p=[];if(r.stat_energy_from in e){const t=e[r.stat_energy_from];for(const e of t){if(null===e.sum)continue;if(null===c){c=e.sum;continue}if(d===e.start)continue;const t=e.sum-c,r=new Date(e.start);p.push({x:r.getTime(),y:t}),d=e.start,c=e.sum}}o.push({label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_solar_graph.production",{name:(0,k.Kd)(this.hass,r.stat_energy_from,t[r.stat_energy_from])}),borderColor:n?l+"7F":l,backgroundColor:n?l+"32":l+"7F",data:p,order:1,stack:"solar",xAxisID:n?"xAxisCompare":void 0})})),o}},{kind:"method",key:"_processForecast",value:function(e,t,r,i,n,o){const a=[],l=(0,s.Z)(o||new Date,n);return r.forEach((r=>{if(r.config_entry_solar_forecast){const s={};if(r.config_entry_solar_forecast.forEach((e=>{t[e]&&Object.entries(t[e].wh_hours).forEach((([e,t])=>{const r=new Date(e);if(r<n||o&&r>o)return;l>35&&r.setDate(1),l>2?r.setHours(0,0,0,0):r.setMinutes(0,0,0);const i=r.getTime();i in s?s[i]+=t:s[i]=t}))})),s){const t=[];for(const[e,r]of Object.entries(s))t.push({x:Number(e),y:r/1e3});t.length&&a.push({type:"line",label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_solar_graph.forecast",{name:(0,k.Kd)(this.hass,r.stat_energy_from,e[r.stat_energy_from])}),fill:!1,stepped:!1,borderColor:i,borderDash:[7,5],pointRadius:0,data:t})}}})),a}},{kind:"get",static:!0,key:"styles",value:function(){return c.iv`
      ha-card {
        height: 100%;
      }
      .card-header {
        padding-bottom: 0;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
      .no-data {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20%;
        margin-left: 32px;
        box-sizing: border-box;
      }
    `}}]}}),(0,b.f)(c.oi))}))}}]);
//# sourceMappingURL=0f80d46f.js.map