"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1053],{1053:function(e,a,r){r.r(a),r.d(a,{CloudForgotPassword:function(){return y}});var t,s,o,i=r(99312),n=r(81043),l=r(88962),d=r(33368),c=r(71650),u=r(82390),h=r(69205),f=r(70906),p=r(91808),g=(r(97393),r(68144)),v=r(95260),k=r(47181),_=(r(98762),r(9381),r(22098),r(3555),r(83270)),m=(r(60010),r(11654)),y=(0,p.Z)([(0,v.Mo)("cloud-forgot-password")],(function(e,a){var r,p=function(a){(0,h.Z)(t,a);var r=(0,f.Z)(t);function t(){var a;(0,c.Z)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return a=r.call.apply(r,[this].concat(o)),e((0,u.Z)(a)),a}return(0,d.Z)(t)}(a);return{F:p,d:[{kind:"field",decorators:[(0,v.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.Cb)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,v.Cb)()],key:"email",value:void 0},{kind:"field",decorators:[(0,v.SB)()],key:"_requestInProgress",value:function(){return!1}},{kind:"field",decorators:[(0,v.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,v.IO)("#email",!0)],key:"_emailField",value:void 0},{kind:"method",key:"render",value:function(){return(0,g.dy)(t||(t=(0,l.Z)([' <hass-subpage .hass="','" .narrow="','" .header="','"> <div class="content"> <ha-card outlined .header="','"> <div class="card-content"> <p> '," </p> ",' <ha-textfield autofocus id="email" label="','" .value="','" type="email" required @keydown="','" .validationMessage="','"></ha-textfield> </div> <div class="card-actions"> <ha-progress-button @click="','" .progress="','"> '," </ha-progress-button> </div> </ha-card> </div> </hass-subpage> "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.cloud.forgot_password.title"),this.hass.localize("ui.panel.config.cloud.forgot_password.subtitle"),this.hass.localize("ui.panel.config.cloud.forgot_password.instructions"),this._error?(0,g.dy)(s||(s=(0,l.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this.hass.localize("ui.panel.config.cloud.forgot_password.email"),this.email,this._keyDown,this.hass.localize("ui.panel.config.cloud.forgot_password.email_error_msg"),this._handleEmailPasswordReset,this._requestInProgress,this.hass.localize("ui.panel.config.cloud.forgot_password.send_reset_email"))}},{kind:"method",key:"_keyDown",value:function(e){"Enter"===e.key&&this._handleEmailPasswordReset()}},{kind:"method",key:"_handleEmailPasswordReset",value:(r=(0,n.Z)((0,i.Z)().mark((function e(){var a,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this._emailField,r=a.value,a.reportValidity()){e.next=5;break}return a.focus(),e.abrupt("return");case 5:return this._requestInProgress=!0,e.prev=6,e.next=9,(0,_.u_)(this.hass,r);case 9:(0,k.B)(this,"email-changed",{value:r}),this._requestInProgress=!1,(0,k.B)(this,"cloud-done",{flashMessage:this.hass.localize("ui.panel.config.cloud.forgot_password.check_your_email")}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),this._requestInProgress=!1,this._error=e.t0&&e.t0.body&&e.t0.body.message?e.t0.body.message:"Unknown error";case 18:case"end":return e.stop()}}),e,this,[[6,14]])}))),function(){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[m.Qx,(0,g.iv)(o||(o=(0,l.Z)([".content{padding-bottom:24px}ha-card{max-width:600px;margin:0 auto;margin-top:24px}h1{margin:0}ha-textfield{width:100%}.card-actions{display:flex;justify-content:space-between;align-items:center}.card-actions a{color:var(--primary-text-color)}"])))]}}]}}),g.oi)}}]);
//# sourceMappingURL=1053.gRDavlsbGbk.js.map