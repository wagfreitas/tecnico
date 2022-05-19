(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[6277],{6277:function(t,e,n){"use strict";n.r(e),n.d(e,{WalletPageModule:function(){return w}});var r=n(8583),i=n(3679),o=n(2859),a=n(3025),s=n(7716),c=n(9019),l=n(7318);let u=(()=>{class t{constructor(t){this.db=t}getTransactions(t){return this.db.list("transactions",e=>e.orderByChild("userId").equalTo(t))}widthDraw(t,e){return this.db.list("transactions/").push({userId:t.uid,name:t.name,amount:e,createdAt:Date.now(),type:c.K5,status:"PENDING"})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(l.KQ))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n(5469),h=n(4050),g=n(5620),p=n(4207),m=n(7556);function Z(t,e){if(1&t&&(s.TgZ(0,"ion-item"),s.TgZ(1,"ion-label"),s.TgZ(2,"h3"),s._uU(3),s.qZA(),s.TgZ(4,"p"),s._uU(5),s.ALo(6,"date"),s.qZA(),s.qZA(),s.TgZ(7,"ion-note",10),s.TgZ(8,"div",11),s._uU(9),s.qZA(),s.TgZ(10,"div",12),s._uU(11),s.qZA(),s.qZA(),s.qZA()),2&t){const t=e.$implicit;s.xp6(3),s.hij("ID: ",t.createdAt,""),s.xp6(2),s.Oqu(s.xi3(6,4,t.createdAt,"dd-MMM-yyyy hh:mm a")),s.xp6(4),s.hij(" ",t.amount,""),s.xp6(2),s.Oqu(t.status)}}const f=[{path:"",component:(()=>{class t{constructor(t,e,n,r,i,o,a){this.transactionService=t,this.translate=e,this.driverService=n,this.common=r,this.alertCtrl=i,this.ss=o,this.authService=a,this.settings={}}ionViewDidEnter(){this.authService.getUserData().then(t=>{this.ss.getSettings().subscribe(t=>this.settings=null!=t?t.payload.val():{}),this.driverService.getDriver(t.uid).valueChanges().subscribe(t=>this.driver=t),this.transactionService.getTransactions(t.uid).valueChanges().subscribe(t=>null!=t?this.records=t.reverse():[])})}withdraw(){this.alertCtrl.create({header:"Make a Withdraw",inputs:[{name:"amount",placeholder:"Amount"}],buttons:[{text:"Cancel",handler:t=>{console.log("Cancel clicked")}},{text:"Submit",handler:t=>{console.log(t),console.log(this.driver),parseFloat(t.amount)>parseFloat(this.driver.balance)?this.common.showAlert("Insufficient Balance"):this.transactionService.widthDraw(this.driver,t.amount).then(()=>{this.common.showToast("withdraw Requested")})}}]}).then(t=>t.present())}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(u),s.Y36(d.sK),s.Y36(h.F),s.Y36(g.v),s.Y36(o.Br),s.Y36(p.R),s.Y36(m.e))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-wallet"]],decls:19,vars:3,consts:[["color","dark"],["slot","start"],[1,"ion-text-center"],[1,"header"],[1,"amountText"],["slot","end","color","light","size","small","fill","outline",3,"click"],[1,"withdrawl-list"],["lines","none"],[2,"margin","8px"],[4,"ngFor","ngForOf"],["slot","end"],[1,"amount"],[1,"status"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar",0),s.TgZ(2,"ion-buttons",1),s._UZ(3,"ion-menu-button"),s.qZA(),s.TgZ(4,"ion-title",2),s._uU(5,"Carteira"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"ion-content"),s.TgZ(7,"div",3),s.TgZ(8,"h5"),s._uU(9,"Balan\xe7o Atual"),s.qZA(),s.TgZ(10,"p",4),s._uU(11),s.qZA(),s.TgZ(12,"ion-button",5),s.NdJ("click",function(){return e.withdraw()}),s._uU(13,"Solicitar Pagamento "),s.qZA(),s.qZA(),s.TgZ(14,"div",6),s.TgZ(15,"ion-list",7),s.TgZ(16,"p",8),s._uU(17,"Hist\xf3rico"),s.qZA(),s.YNc(18,Z,12,7,"ion-item",9),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(11),s.AsE("",e.settings.currency," ",null==e.driver?null:e.driver.balance,""),s.xp6(7),s.Q6J("ngForOf",e.records))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.wd,o.W2,o.YG,o.q_,r.sg,o.Ie,o.Q$,o.uN],pipes:[r.uU],styles:[".header[_ngcontent-%COMP%]{min-height:200px;text-align:center;padding:2em;background-color:var(--ion-color-dark)}.header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-transform:uppercase;color:#777;font-size:12px;margin:0}.header[_ngcontent-%COMP%]   .amountText[_ngcontent-%COMP%]{font-size:28px;font-weight:700;color:var(--ion-color-dark-contrast)}ion-item[_ngcontent-%COMP%]{--background:#f9f9f9;margin:8px;border-radius:8px}.footer-md[_ngcontent-%COMP%]:before{background:none}.withdrawl-list[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{font-weight:700;color:var(--ion-color-dark);font-size:16px;text-align:right}"]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.Bz.forChild(f)],a.Bz]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.ez,i.u5,o.Pc,d.aw,v]]}),t})()}}]);