!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[290],{290:function(n,o,i){"use strict";i.r(o),i.d(o,{ForgetPageModule:function(){return Z}});var r,c,a=i(8583),s=i(3679),u=i(2859),l=i(3025),d=i(7716),g=i(7556),f=i(5620),m=[{path:"",component:(r=function(){function n(t,o){e(this,n),this.authService=t,this.commonService=o}return t(n,[{key:"ngOnInit",value:function(){}},{key:"reset",value:function(){var e=this,n=this.email.toLowerCase().trim();this.email&&(this.commonService.showLoader(),this.authService.resetPassword(n).then(function(n){e.commonService.hideLoader(),e.commonService.showToast("Please Check inbox")}).catch(function(n){e.commonService.hideLoader(),e.commonService.showToast(n.message)}))}}]),n}(),r.\u0275fac=function(e){return new(e||r)(d.Y36(g.e),d.Y36(f.v))},r.\u0275cmp=d.Xpm({type:r,selectors:[["app-forget"]],decls:18,vars:1,consts:[["color","light"],["slot","start"],[1,"login-header"],["src","./assets/img/logo.png"],[1,"ion-padding"],["lines","none"],["position","stacked"],["type","text",3,"ngModel","ngModelChange"],[2,"padding","0px 16px"],["color","dark","expand","block",3,"click"]],template:function(e,n){1&e&&(d.TgZ(0,"ion-header"),d.TgZ(1,"ion-toolbar",0),d.TgZ(2,"ion-buttons",1),d._UZ(3,"ion-back-button"),d.qZA(),d.TgZ(4,"ion-title"),d._uU(5,"Recuperar Senha"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(6,"ion-content"),d.TgZ(7,"div",2),d._UZ(8,"img",3),d.qZA(),d.TgZ(9,"div",4),d.TgZ(10,"ion-list",5),d.TgZ(11,"ion-item"),d.TgZ(12,"ion-label",6),d._uU(13,"Endere\xe7o de Email"),d.qZA(),d.TgZ(14,"ion-input",7),d.NdJ("ngModelChange",function(e){return n.email=e}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(15,"div",8),d.TgZ(16,"ion-button",9),d.NdJ("click",function(){return n.reset()}),d._uU(17,"RECUPERAR SENHA"),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(14),d.Q6J("ngModel",n.email))},directives:[u.Gu,u.sr,u.Sm,u.oU,u.cs,u.wd,u.W2,u.q_,u.Ie,u.Q$,u.pK,u.j9,s.JJ,s.On,u.YG],styles:[".header-md[_ngcontent-%COMP%]:after{background-image:none!important}"]}),r)}],p=function(){var n=t(function n(){e(this,n)});return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[[l.Bz.forChild(m)],l.Bz]}),n}(),h=i(5469),Z=((c=t(function n(){e(this,n)})).\u0275fac=function(e){return new(e||c)},c.\u0275mod=d.oAB({type:c}),c.\u0275inj=d.cJS({imports:[[a.ez,s.u5,u.Pc,h.aw,p]]}),c)}}])}();