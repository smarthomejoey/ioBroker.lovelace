"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[28063],{57966:function(t,n,e){e.d(n,{z:function(){return r}});e(40271),e(60163);var r=function(t){return function(n,e){return t.includes(n,e)}}},39197:function(t,n,e){e.d(n,{v:function(){return o}});e(40271);var r=e(56007),i=e(58831);function o(t,n){var e=(0,i.M)(t.entity_id),o=void 0!==n?n:null==t?void 0:t.state;if(["button","event","input_button","scene"].includes(e))return o!==r.nZ;if((0,r.rk)(o))return!1;if(o===r.PX&&"alert"!==e)return!1;switch(e){case"alarm_control_panel":return"disarmed"!==o;case"alert":return"idle"!==o;case"cover":return"closed"!==o;case"device_tracker":case"person":return"not_home"!==o;case"lawn_mower":return["mowing","error"].includes(o);case"lock":return"locked"!==o;case"media_player":return"standby"!==o;case"vacuum":return!["idle","docked","paused"].includes(o);case"plant":return"problem"===o;case"group":return["on","home","open","locked","problem"].includes(o);case"timer":return"active"===o;case"camera":return"streaming"===o}return!0}},50768:function(t,n,e){e.d(n,{G:function(){return u}});var r=e(49706),i=e(58831),o=e(47772),u=function(t){return t?(0,o.K)((0,i.M)(t.entity_id),t):r.Rb}},48570:function(t,n,e){e.r(n),e.d(n,{HaStatisticSelector:function(){return v}});var r,i,o,u=e(88962),a=e(33368),c=e(71650),s=e(82390),l=e(69205),d=e(70906),f=e(91808),h=(e(97393),e(68144)),p=e(95260),v=(e(13927),(0,f.Z)([(0,p.Mo)("ha-selector-statistic")],(function(t,n){var e=function(n){(0,l.Z)(r,n);var e=(0,d.Z)(r);function r(){var n;(0,c.Z)(this,r);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=e.call.apply(e,[this].concat(o)),t((0,s.Z)(n)),n}return(0,a.Z)(r)}(n);return{F:e,d:[{kind:"field",decorators:[(0,p.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"method",key:"render",value:function(){return this.selector.statistic.multiple?(0,h.dy)(i||(i=(0,u.Z)([" ",' <ha-statistics-picker .hass="','" .value="','" .helper="','" .disabled="','" .required="','"></ha-statistics-picker> '])),this.label?(0,h.dy)(o||(o=(0,u.Z)(["<label>","</label>"])),this.label):"",this.hass,this.value,this.helper,this.disabled,this.required):(0,h.dy)(r||(r=(0,u.Z)(['<ha-statistic-picker .hass="','" .value="','" .label="','" .helper="','" .disabled="','" .required="','" allow-custom-entity></ha-statistic-picker>'])),this.hass,this.value,this.label,this.helper,this.disabled,this.required)}}]}}),h.oi))},87037:function(t,n,e){var r,i,o=e(88962),u=e(33368),a=e(71650),c=e(82390),s=e(69205),l=e(70906),d=e(91808),f=(e(97393),e(68144)),h=e(95260),p=e(50768);e(81312),e(52039),(0,d.Z)([(0,h.Mo)("ha-state-icon")],(function(t,n){var e=function(n){(0,s.Z)(r,n);var e=(0,l.Z)(r);function r(){var n;(0,a.Z)(this,r);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=e.call.apply(e,[this].concat(o)),t((0,c.Z)(n)),n}return(0,u.Z)(r)}(n);return{F:e,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[(0,h.Cb)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var t,n;return this.icon||null!==(t=this.state)&&void 0!==t&&t.attributes.icon?(0,f.dy)(r||(r=(0,o.Z)(['<ha-icon .icon="','"></ha-icon>'])),this.icon||(null===(n=this.state)||void 0===n?void 0:n.attributes.icon)):(0,f.dy)(i||(i=(0,o.Z)(['<ha-svg-icon .path="','"></ha-svg-icon>'])),(0,p.G)(this.state))}}]}}),f.oi)},22814:function(t,n,e){e.d(n,{Cp:function(){return v},GX:function(){return f},PC:function(){return l},TZ:function(){return _},W2:function(){return p},WD:function(){return s},YY:function(){return m},et:function(){return d},iI:function(){return c},lU:function(){return h},oT:function(){return a},uw:function(){return u}});var r,i=e(99312),o=e(81043),u=(e(83609),e(97393),e(46349),e(70320),e(22859),e(85717),e(46798),e(47084),e(88770),e(40271),e(60163),e(2094),"".concat(location.protocol,"//").concat(location.host)),a=function(t){return t.map((function(t){if("string"!==t.type)return t;switch(t.name){case"username":return Object.assign(Object.assign({},t),{},{autocomplete:"username"});case"password":return Object.assign(Object.assign({},t),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},t),{},{autocomplete:"one-time-code"});default:return t}}))},c=function(t,n){return t.callWS({type:"auth/sign_path",path:n})},s=function(){return fetch("/auth/providers",{credentials:"same-origin"})},l=function(t,n,e){return fetch("/auth/login_flow",{method:"POST",credentials:"same-origin",body:JSON.stringify({client_id:t,handler:e,redirect_uri:n})})},d=function(t,n){return fetch("/auth/login_flow/".concat(t),{method:"POST",credentials:"same-origin",body:JSON.stringify(n)})},f=function(t){return fetch("/auth/login_flow/".concat(t),{method:"DELETE",credentials:"same-origin"})},h=function(t,n,e,r){t.includes("?")?t.endsWith("&")||(t+="&"):t+="?",t+="code=".concat(encodeURIComponent(n)),e&&(t+="&state=".concat(encodeURIComponent(e))),r&&(t+="&storeToken=true"),document.location.assign(t)},p=32143==e.j?(r=(0,o.Z)((0,i.Z)().mark((function t(n,e,r,o){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.callWS({type:"config/auth_provider/homeassistant/create",user_id:e,username:r,password:o}));case 1:case"end":return t.stop()}}),t)}))),function(t,n,e,i){return r.apply(this,arguments)}):null,v=function(t,n,e){return t.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:n,new_password:e})},_=function(t,n,e){return t.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:n,password:e})},m=function(t){return t.callWS({type:"auth/delete_all_refresh_tokens"})}},56007:function(t,n,e){e.d(n,{PX:function(){return u},V_:function(){return a},lz:function(){return o},nZ:function(){return i},rk:function(){return s}});var r=e(57966),i="unavailable",o="unknown",u="off",a=[i,o],c=[i,o,u],s=(0,r.z)(a);(0,r.z)(c)},38014:function(t,n,e){e.d(n,{Cj:function(){return d},Hs:function(){return w},Kd:function(){return b},Kj:function(){return h},Nw:function(){return v},Py:function(){return a},Z0:function(){return g},_Y:function(){return s},_m:function(){return o},dL:function(){return c},dO:function(){return k},hN:function(){return f},h_:function(){return l},j2:function(){return y},q6:function(){return p},uR:function(){return u}});var r=e(40039),i=(e(46798),e(9849),e(13526),e(40271),e(22859),e(60163),e(91741)),o=function(t){return t.sendMessagePromise({type:"recorder/info"})},u=function(t,n){return t.callWS({type:"recorder/list_statistic_ids",statistic_type:n})},a=function(t,n){return t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:n})},c=function(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"hour",o=arguments.length>5?arguments[5]:void 0,u=arguments.length>6?arguments[6]:void 0;return t.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),end_time:null==e?void 0:e.toISOString(),statistic_ids:r,period:i,units:o,types:u})},s=function(t,n,e,r){return t.callWS({type:"recorder/statistic_during_period",statistic_id:n,units:r,fixed_period:e.fixed_period?{start_time:e.fixed_period.start instanceof Date?e.fixed_period.start.toISOString():e.fixed_period.start,end_time:e.fixed_period.end instanceof Date?e.fixed_period.end.toISOString():e.fixed_period.end}:void 0,calendar:e.calendar,rolling_window:e.rolling_window})},l=function(t){return t.callWS({type:"recorder/validate_statistics"})},d=function(t,n,e){return t.callWS({type:"recorder/update_statistics_metadata",statistic_id:n,unit_of_measurement:e})},f=function(t,n){return t.callWS({type:"recorder/clear_statistics",statistic_ids:n})},h=function(t){var n=null;if(!t)return null;var e,i=(0,r.Z)(t);try{for(i.s();!(e=i.n()).done;){var o=e.value;null!==o.change&&void 0!==o.change&&(null===n?n=o.change:n+=o.change)}}catch(u){i.e(u)}finally{i.f()}return n},p=function(t,n){var e,i=null,o=(0,r.Z)(n);try{for(o.s();!(e=o.n()).done;){var u=e.value;if(u in t){var a=h(t[u]);null!==a&&(null===i?i=a:i+=a)}}}catch(c){o.e(c)}finally{o.f()}return i},v=function(t,n){return t.some((function(t){return void 0!==t[n]&&null!==t[n]}))},_=98818!=e.j?["mean","min","max"]:null,m=98818!=e.j?["sum","state","change"]:null,g=function(t,n){return!(!_.includes(n)||!t.has_mean)||!(!m.includes(n)||!t.has_sum)},y=function(t,n,e,r,i){var o=new Date(e).toISOString();return t.callWS({type:"recorder/adjust_sum_statistics",statistic_id:n,start_time:o,adjustment:r,adjustment_unit_of_measurement:i})},b=function(t,n,e){var r=t.states[n];return r?(0,i.C)(r):(null==e?void 0:e.name)||n},k=function(t,n,e){var r,i;n&&(r=null===(i=t.states[n])||void 0===i?void 0:i.attributes.unit_of_measurement);return void 0===r?null==e?void 0:e.statistics_unit_of_measurement:r},w=function(t){return t.includes(":")}},26765:function(t,n,e){e.r(n),e.d(n,{loadGenericDialog:function(){return i},showAlertDialog:function(){return u},showConfirmationDialog:function(){return a},showPromptDialog:function(){return c}});e(51358),e(46798),e(47084),e(5239),e(98490),e(85717);var r=e(47181),i=function(){return Promise.all([e.e(3298),e.e(28597),e.e(45497),e.e(52154),e.e(72116),e.e(1281)]).then(e.bind(e,1281))},o=function(t,n,e){return new Promise((function(o){var u=n.cancel,a=n.confirm;(0,r.B)(t,"show-dialog",{dialogTag:"dialog-box",dialogImport:i,dialogParams:Object.assign(Object.assign(Object.assign({},n),e),{},{cancel:function(){o(!(null==e||!e.prompt)&&null),u&&u()},confirm:function(t){o(null==e||!e.prompt||t),a&&a(t)}})})}))},u=function(t,n){return o(t,n)},a=function(t,n){return o(t,n,{confirmation:!0})},c=function(t,n){return o(t,n,{prompt:!0})}}}]);
//# sourceMappingURL=28063.ouIkxNaKuGk.js.map