"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[23754],{70390:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(93752);function n(){return(0,i.Z)(Date.now())}},47538:(e,t,r)=>{function i(){var e=new Date,t=e.getFullYear(),r=e.getMonth(),i=e.getDate(),n=new Date(0);return n.setFullYear(t,r,i-1),n.setHours(23,59,59,999),n}r.d(t,{Z:()=>i})},82045:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(34327),n=r(23682);function o(e,t){(0,n.Z)(2,arguments);var r=(0,i.Z)(e).getTime(),o=(0,i.Z)(t.start).getTime(),s=(0,i.Z)(t.end).getTime();if(!(o<=s))throw new RangeError("Invalid interval");return r>=o&&r<=s}},27088:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(59429);function n(){return(0,i.Z)(Date.now())}},83008:(e,t,r)=>{function i(){var e=new Date,t=e.getFullYear(),r=e.getMonth(),i=e.getDate(),n=new Date(0);return n.setFullYear(t,r,i-1),n.setHours(0,0,0,0),n}r.d(t,{Z:()=>i})},92306:(e,t,r)=>{r.d(t,{v:()=>i});const i=(e,t)=>{const r={};for(const i of e){const e=t(i);e in r?r[e].push(i):r[e]=[i]}return r}},11950:(e,t,r)=>{r.d(t,{l:()=>i});const i=async(e,t)=>new Promise((r=>{const i=t(e,(e=>{i(),r(e)}))}))},81582:(e,t,r)=>{r.d(t,{LZ:()=>i,pB:()=>n,SO:()=>o,iJ:()=>s,Nn:()=>a,Ny:()=>l,T0:()=>c});const i=32143==r.j?["migration_error","setup_error","setup_retry"]:null,n=e=>e.callApi("GET","config/config_entries/entry"),o=(e,t,r)=>e.callWS({type:"config_entries/update",entry_id:t,...r}),s=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),a=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),l=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),c=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,r)=>{r.a(e,(async e=>{r.d(t,{Bm:()=>_,o1:()=>v,iK:()=>g,rl:()=>b,P:()=>k,KU:()=>w,xZ:()=>E,gy:()=>D,ZC:()=>S,_Z:()=>P,Jj:()=>T,UB:()=>O,jB:()=>Z,gM:()=>x,yT:()=>A,_n:()=>j,vR:()=>z,vE:()=>$});var i=r(4535),n=r(59699),o=r(27088),s=r(83008),a=r(70390),l=r(47538),c=r(97330),d=r(92306),u=r(11950),f=r(81582),p=r(74186),h=r(58763),y=e([h]);h=(y.then?await y:y)[0];const m=[],_=()=>({stat_energy_from:"",stat_cost:null,entity_energy_from:null,entity_energy_price:null,number_energy_price:null}),v=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_to:null,entity_energy_price:null,number_energy_price:null}),g=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),b=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),k=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),w=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_from:null,entity_energy_price:null,number_energy_price:null}),E=e=>e.callWS({type:"energy/info"}),D=e=>e.callWS({type:"energy/validate"}),S=e=>e.callWS({type:"energy/get_prefs"}),P=async(e,t)=>{const r=e.callWS({type:"energy/save_prefs",...t});return C(e),r},T=e=>(0,d.v)(e.energy_sources,(e=>e.type)),C=e=>{m.forEach((t=>{const r=O(e,{key:t});r.clearPrefs(),r._active&&r.refresh()}))},O=(e,t={})=>{let r="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");r=`_${t.key}`}if(e.connection[r])return e.connection[r];m.push(t.key);const d=(0,c._)(e.connection,r,(async()=>{if(d.prefs||(d.prefs=await S(e)),d._refreshTimeout&&clearTimeout(d._refreshTimeout),d._active&&(!d.end||d.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),d._refreshTimeout=window.setTimeout((()=>d.refresh()),e.getTime()-Date.now())}return(async(e,t,r,o)=>{const[s,a,l]=await Promise.all([(0,f.pB)(e),(0,u.l)(e.connection,p.LM),E(e)]),c=s.find((e=>"co2signal"===e.domain));let d;if(c)for(const t of a){if(t.config_entry_id!==c.entry_id)continue;const r=e.states[t.entity_id];if(r&&"%"===r.attributes.unit_of_measurement){d=r.entity_id;break}}const y=[],m=[];for(const e of t.energy_sources)if("solar"!==e.type)if("gas"!==e.type)if("battery"!==e.type){for(const t of e.flow_from){y.push(t.stat_energy_from),m.push(t.stat_energy_from),t.stat_cost&&m.push(t.stat_cost);const e=l.cost_sensors[t.stat_energy_from];e&&m.push(e)}for(const t of e.flow_to){m.push(t.stat_energy_to),t.stat_compensation&&m.push(t.stat_compensation);const e=l.cost_sensors[t.stat_energy_to];e&&m.push(e)}}else m.push(e.stat_energy_from),m.push(e.stat_energy_to);else{m.push(e.stat_energy_from),e.stat_cost&&m.push(e.stat_cost);const t=l.cost_sensors[e.stat_energy_from];t&&m.push(t)}else m.push(e.stat_energy_from);const _=(0,i.Z)(o||new Date,r),v=(0,n.Z)(r,-1),g=await(0,h.dL)(e,v,o,m,_>35?"month":_>2?"day":"hour");let b;return void 0!==d&&(b=await(async(e,t,r,i,n,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:r,co2_statistic_id:i,period:o}))(e,r,y,d,o,_>35?"month":_>2?"day":"hour")),Object.values(g).forEach((e=>{e.length&&new Date(e[0].start)>v&&e.unshift({...e[0],start:v.toISOString(),end:v.toISOString(),sum:0,state:0})})),{start:r,end:o,info:l,prefs:t,stats:g,co2SignalConfigEntry:c,co2SignalEntity:d,fossilEnergyConsumption:b}})(e,d.prefs,d.start,d.end)})),y=d.subscribe;d.subscribe=e=>{const t=y(e);return d._active++,()=>{d._active--,d._active<1&&(clearTimeout(d._refreshTimeout),d._refreshTimeout=void 0),t()}},d._active=0,d.prefs=t.prefs;const _=new Date;d.start=_.getHours()>0?(0,o.Z)():(0,s.Z)(),d.end=_.getHours()>0?(0,a.Z)():(0,l.Z)();const v=()=>{d._updatePeriodTimeout=window.setTimeout((()=>{d.start=(0,o.Z)(),d.end=(0,a.Z)(),v()}),(0,n.Z)((0,a.Z)(),1).getTime()-Date.now())};return v(),d.clearPrefs=()=>{d.prefs=void 0},d.setPeriod=(e,t)=>{var r;d.start=e,d.end=t,d.start.getTime()!==(0,o.Z)().getTime()||(null===(r=d.end)||void 0===r?void 0:r.getTime())!==(0,a.Z)().getTime()||d._updatePeriodTimeout?d._updatePeriodTimeout&&(clearTimeout(d._updatePeriodTimeout),d._updatePeriodTimeout=void 0):v()},d},Z=e=>e.callWS({type:"energy/solar_forecast"}),x=["m³","ft³"],A=["kWh"],j=[...x,...A],z=(e,t)=>{for(const r of t.energy_sources){if("gas"!==r.type)continue;const t=e.states[r.stat_energy_from];if(t)return x.includes(t.attributes.unit_of_measurement)?"volume":"energy"}},$=(e,t)=>{for(const r of t.energy_sources){if("gas"!==r.type)continue;const t=e.states[r.stat_energy_from];if(null!=t&&t.attributes.unit_of_measurement)return"Wh"===t.attributes.unit_of_measurement?"kWh":t.attributes.unit_of_measurement}}}))},74186:(e,t,r)=>{r.d(t,{eD:()=>s,Mw:()=>a,vA:()=>l,L3:()=>c,Nv:()=>d,z3:()=>u,LM:()=>h});var i=r(97330);if(32143==r.j)var n=r(91741);var o=r(38346);const s=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery"===e.states[t.entity_id].attributes.device_class)),a=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery_charging"===e.states[t.entity_id].attributes.device_class)),l=(e,t)=>{if(t.name)return t.name;const r=e.states[t.entity_id];return r?(0,n.C)(r):t.entity_id},c=(e,t)=>e.callWS({type:"config/entity_registry/get",entity_id:t}),d=(e,t,r)=>e.callWS({type:"config/entity_registry/update",entity_id:t,...r}),u=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),f=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),p=(e,t)=>e.subscribeEvents((0,o.D)((()=>f(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),h=(e,t)=>(0,i.B)("_entityRegistry",f,p,e,t)},58763:(e,t,r)=>{r.a(e,(async e=>{r.d(t,{vq:()=>c,_J:()=>d,Nu:()=>f,uR:()=>p,dL:()=>h,h_:()=>y,Cj:()=>m,hN:()=>_,Kj:()=>v,q6:()=>g,Nw:()=>b});var i=r(29171),n=r(22311),o=r(91741),s=e([i]);i=(s.then?await s:s)[0];const a=["climate","humidifier","water_heater"],l=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"],c=(e,t,r,i,n=!1,o,s=!0)=>{let a="history/period";return r&&(a+="/"+r.toISOString()),a+="?filter_entity_id="+t,i&&(a+="&end_time="+i.toISOString()),n&&(a+="&skip_initial_state"),void 0!==o&&(a+=`&significant_changes_only=${Number(o)}`),s&&(a+="&minimal_response"),e.callApi("GET",a)},d=(e,t,r,i)=>e.callApi("GET",`history/period/${t.toISOString()}?end_time=${r.toISOString()}&minimal_response${i?`&filter_entity_id=${i}`:""}`),u=(e,t)=>e.state===t.state&&(!e.attributes||!t.attributes||l.every((r=>e.attributes[r]===t.attributes[r]))),f=(e,t,r)=>{const s={},c=[];if(!t)return{line:[],timeline:[]};t.forEach((t=>{if(0===t.length)return;const a=t.find((e=>e.attributes&&("unit_of_measurement"in e.attributes||"state_class"in e.attributes)));let l;l=a?a.attributes.unit_of_measurement||" ":{climate:e.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:e.config.unit_system.temperature}[(0,n.N)(t[0])],l?l in s?s[l].push(t):s[l]=[t]:c.push(((e,t,r)=>{const n=[],s=r.length-1;for(const o of r)n.length>0&&o.state===n[n.length-1].state||(o.entity_id||(o.attributes=r[s].attributes,o.entity_id=r[s].entity_id),n.push({state_localize:(0,i.D)(e,o,t),state:o.state,last_changed:o.last_changed}));return{name:(0,o.C)(r[0]),entity_id:r[0].entity_id,data:n}})(r,e.locale,t))}));return{line:Object.keys(s).map((e=>((e,t)=>{const r=[];for(const e of t){const t=e[e.length-1],i=(0,n.N)(t),s=[];for(const t of e){let e;if(a.includes(i)){e={state:t.state,last_changed:t.last_updated,attributes:{}};for(const r of l)r in t.attributes&&(e.attributes[r]=t.attributes[r])}else e=t;s.length>1&&u(e,s[s.length-1])&&u(e,s[s.length-2])||s.push(e)}r.push({domain:i,name:(0,o.C)(t),entity_id:t.entity_id,states:s})}return{unit:e,identifier:t.map((e=>e[0].entity_id)).join(""),data:r}})(e,s[e]))),timeline:c}},p=(e,t)=>e.callWS({type:"history/list_statistic_ids",statistic_type:t}),h=(e,t,r,i,n="hour")=>e.callWS({type:"history/statistics_during_period",start_time:t.toISOString(),end_time:null==r?void 0:r.toISOString(),statistic_ids:i,period:n}),y=e=>e.callWS({type:"recorder/validate_statistics"}),m=(e,t,r)=>e.callWS({type:"recorder/update_statistics_metadata",statistic_id:t,unit_of_measurement:r}),_=(e,t)=>e.callWS({type:"recorder/clear_statistics",statistic_ids:t}),v=e=>{if(!e||e.length<2)return null;const t=e[e.length-1].sum;if(null===t)return null;const r=e[0].sum;return null===r?t:t-r},g=(e,t)=>{let r=null;for(const i of t){if(!(i in e))continue;const t=v(e[i]);null!==t&&(null===r?r=t:r+=t)}return r},b=(e,t)=>e.some((e=>null!==e[t]))}))},73826:(e,t,r)=>{r.d(t,{f:()=>y});var i=r(5701);function n(e,t,r,i){var n=o();if(i)for(var d=0;d<i.length;d++)n=i[d](n);var u=t((function(e){n.initializeInstanceElements(e,f.elements)}),r),f=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(c(o.descriptor)||c(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}a(o,n)}else t.push(o)}return t}(u.d.map(s)),e);return n.initializeClassElements(u.F,f.elements),n.runClassFinishers(u.F,f.finishers)}function o(){o=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!l(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function s(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function p(e,t,r){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},p(e,t,r||e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}const y=e=>n(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,i.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){p(h(r.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(p(h(r.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){p(h(r.prototype),"updated",this).call(this,e),e.has("hass")&&this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}]}}),e)},23754:(e,t,r)=>{r.a(e,(async e=>{r(53918);var t=r(27088),i=r(82045),n=r(70390),o=r(59429),s=r(59401),a=r(13250),l=r(69388),c=r(79021),d=r(33651),u=r(32182),f=r(27605),p=r(93752),h=r(59281),y=r(1905),m=r(70451),_=r(4535),v=r(37500),g=r(26767),b=r(5701),k=r(17717),w=r(12198),E=r(70518),D=(r(42657),r(10983),r(55424)),S=r(73826),P=e([D,w]);function T(){T=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!Z(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(a)||a);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=j(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function C(e){var t,r=j(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function O(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function Z(e){return e.decorators&&e.decorators.length}function x(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function j(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function $(e,t,r){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},$(e,t,r||e)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}[D,w]=P.then?await P:P;!function(e,t,r,i){var n=T();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(x(o.descriptor)||x(n.descriptor)){if(Z(o)||Z(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(Z(o)){if(Z(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}O(o,n)}else t.push(o)}return t}(s.d.map(C)),e);n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,g.M)("hui-energy-period-selector")],(function(e,r){class g extends r{constructor(...t){super(...t),e(this)}}return{F:g,d:[{kind:"field",decorators:[(0,b.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.C)()],key:"collectionKey",value:void 0},{kind:"field",decorators:[(0,k.S)()],key:"_startDate",value:void 0},{kind:"field",decorators:[(0,k.S)()],key:"_endDate",value:void 0},{kind:"field",decorators:[(0,k.S)()],key:"_period",value:void 0},{kind:"method",key:"connectedCallback",value:function(){$(W(g.prototype),"connectedCallback",this).call(this),(0,E.X)(this,"narrow",this.offsetWidth<600)}},{kind:"method",key:"hassSubscribe",value:function(){return[(0,D.UB)(this.hass,{key:this.collectionKey}).subscribe((e=>this._updateDates(e)))]}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._startDate)return v.dy``;const e=[{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.day"),value:"day"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.week"),value:"week"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.month"),value:"month"},{label:this.hass.localize("ui.panel.lovelace.components.energy_period_selector.year"),value:"year"}];return v.dy`
      <div class="row">
        <div class="label">
          ${"day"===this._period?(0,w.p6)(this._startDate,this.hass.locale):"month"===this._period?(0,w.NC)(this._startDate,this.hass.locale):"year"===this._period?(0,w.yQ)(this._startDate,this.hass.locale):`${(0,w.mn)(this._startDate,this.hass.locale)} - ${(0,w.mn)(this._endDate||new Date,this.hass.locale)}`}
          <ha-icon-button
            .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.previous")}
            @click=${this._pickPrevious}
            .path=${"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}
          ></ha-icon-button>
          <ha-icon-button
            .label=${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.next")}
            @click=${this._pickNext}
            .path=${"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}
          ></ha-icon-button>
          <mwc-button dense outlined @click=${this._pickToday}>
            ${this.hass.localize("ui.panel.lovelace.components.energy_period_selector.today")}
          </mwc-button>
        </div>
        <div class="period">
          <ha-button-toggle-group
            .buttons=${e}
            .active=${this._period}
            dense
            @value-changed=${this._handleView}
          ></ha-button-toggle-group>
        </div>
      </div>
    `}},{kind:"method",key:"_handleView",value:function(e){this._period=e.detail.value;const r=(0,t.Z)(),c=!this._startDate||(0,i.Z)(r,{start:this._startDate,end:this._endDate||(0,n.Z)()})?r:this._startDate;this._setDate("day"===this._period?(0,o.Z)(c):"week"===this._period?(0,s.Z)(c,{weekStartsOn:1}):"month"===this._period?(0,a.Z)(c):(0,l.Z)(c))}},{kind:"method",key:"_pickToday",value:function(){this._setDate("day"===this._period?(0,t.Z)():"week"===this._period?(0,s.Z)(new Date,{weekStartsOn:1}):"month"===this._period?(0,a.Z)(new Date):(0,l.Z)(new Date))}},{kind:"method",key:"_pickPrevious",value:function(){const e="day"===this._period?(0,c.Z)(this._startDate,-1):"week"===this._period?(0,d.Z)(this._startDate,-1):"month"===this._period?(0,u.Z)(this._startDate,-1):(0,f.Z)(this._startDate,-1);this._setDate(e)}},{kind:"method",key:"_pickNext",value:function(){const e="day"===this._period?(0,c.Z)(this._startDate,1):"week"===this._period?(0,d.Z)(this._startDate,1):"month"===this._period?(0,u.Z)(this._startDate,1):(0,f.Z)(this._startDate,1);this._setDate(e)}},{kind:"method",key:"_setDate",value:function(e){const t="day"===this._period?(0,p.Z)(e):"week"===this._period?(0,h.Z)(e,{weekStartsOn:1}):"month"===this._period?(0,y.Z)(e):(0,m.Z)(e),r=(0,D.UB)(this.hass,{key:this.collectionKey});r.setPeriod(e,t),r.refresh()}},{kind:"method",key:"_updateDates",value:function(e){this._startDate=e.start,this._endDate=e.end||(0,n.Z)();const t=(0,_.Z)(this._endDate,this._startDate);this._period=t<1?"day":6===t?"week":t>26&&t<31?"month":364===t||365===t?"year":void 0}},{kind:"get",static:!0,key:"styles",value:function(){return v.iv`
      .row {
        display: flex;
        justify-content: flex-end;
      }
      :host([narrow]) .row {
        flex-direction: column-reverse;
      }
      :host([narrow]) .period {
        margin-bottom: 8px;
      }
      .label {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 20px;
      }
      .period {
        display: flex;
        justify-content: flex-end;
      }
      :host {
        --mdc-button-outline-color: currentColor;
        --primary-color: currentColor;
        --mdc-theme-primary: currentColor;
        --mdc-button-disabled-outline-color: var(--disabled-text-color);
        --mdc-button-disabled-ink-color: var(--disabled-text-color);
        --mdc-icon-button-ripple-opacity: 0.2;
      }
      ha-icon-button {
        --mdc-icon-button-size: 28px;
      }
      ha-button-toggle-group {
        padding-left: 8px;
      }
      mwc-button {
        flex-shrink: 0;
      }
    `}}]}}),(0,S.f)(v.oi))}))}}]);
//# sourceMappingURL=b54a2aa8.js.map