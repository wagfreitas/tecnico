(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[8695],{1538:function(t,e,n){"use strict";n.r(e),n.d(e,{PickupPageModule:function(){return x}});var i=n(8583),o=n(3679),r=n(2859),s=n(3025),c=n(5257),a=n(7716),l=n(7446),p=n(6999),u=n(5620),g=n(5469),h=n(7318),d=n(7152);function Z(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"ion-buttons",10),a.TgZ(1,"ion-button",11),a.NdJ("click",function(){return a.CHM(t),a.oxw().cancelTrip()}),a._uU(2,"CANCELA "),a.qZA(),a.qZA()}}function f(t,e){if(1&t&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-label"),a.TgZ(2,"ion-text"),a.TgZ(3,"h2"),a._uU(4),a.qZA(),a.qZA(),a.TgZ(5,"ion-text"),a.TgZ(6,"p"),a._uU(7),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"ion-button",12),a._UZ(9,"ion-icon",13),a._uU(10,"\xa0 FONE "),a.qZA(),a.qZA()),2&t){const t=a.oxw();a.xp6(4),a.Oqu(null==t.passenger?null:t.passenger.name),a.xp6(3),a.Oqu(null==t.passenger?null:t.passenger.phoneNumber),a.xp6(1),a.MGl("href","tel:",t.passenger.phoneNumber,"")}}function m(t,e){if(1&t&&(a.TgZ(0,"p"),a._uU(1),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Oqu(t.trip.origin.vicinity)}}function b(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"ion-button",14),a.NdJ("click",function(){return a.CHM(t),a.oxw().pickup()}),a._uU(1,"INICIAR ATENDIMENTO "),a.qZA()}}function A(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"ion-button",15),a.NdJ("click",function(){return a.CHM(t),a.oxw().showPayment()}),a._uU(1," COMPLETAR ATENDIMENTO"),a.qZA()}}const T=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,r,s,c,a){this.tripService=t,this.alertCtrl=e,this.dealService=n,this.router=i,this.common=o,this.translate=r,this.db=s,this.menuCtrl=c,this.geolocation=a,this.trip={},this.passenger={},this.isTripStarted=!1,this.menuCtrl.enable(!0)}ngOnInit(){}ionViewDidEnter(){this.trip=this.tripService.getCurrentTrip(),this.tax=(this.trip.fee*(this.trip.tax/100)).toFixed(2);let t=this.tripService.getTripStatus(this.trip.key).valueChanges().subscribe(e=>{console.log(e),this.trip.status=e.status,"canceled"==e.status?(t.unsubscribe(),this.tripService.cancel(this.trip.key),this.dealService.removeDeal(this.trip.driverId),this.common.showAlert("Atendimento Cancelado"),this.router.navigateByUrl("/home",{skipLocationChange:!0,replaceUrl:!0})):"finished"==e.status&&this.router.navigateByUrl("/home",{skipLocationChange:!0,replaceUrl:!0})});this.tripService.getPassenger(this.trip.passengerId).valueChanges().pipe((0,c.q)(1)).subscribe(t=>{this.passenger=t})}cancelTrip(){this.alertCtrl.create({message:"Deseja cancelar o atendimento",buttons:[{text:"Sim",handler:()=>this.tripService.cancel(this.trip.key)},{text:"N\xe3o"}]}).then(t=>t.present())}pickup(){this.alertCtrl.create({subHeader:"Entre com o C\xf3digo de Atendimento",inputs:[{name:"otp",placeholder:"4 digitos",type:"tel"}],buttons:[{text:"Verificar",handler:t=>{console.log(t),this.db.object("trips/"+this.trip.key).valueChanges().pipe((0,c.q)(1)).subscribe(e=>{console.log(e),e.otp!=t.otp?this.common.showAlert("C\xf3digo Inv\xe1lido"):(this.isTripStarted=!0,this.tripService.pickUp(this.trip.key))})}}]}).then(t=>t.present())}getDirection(t,e){console.log(t,e),this.geolocation.getCurrentPosition().then(n=>{window.open(`https://waze.com/ul?ll=${t},${e}&z=10`)}).catch(t=>{console.log("Error ")})}showPayment(){this.alertCtrl.create({header:"Deseja completar o atendimento?",buttons:[{text:"Sim",handler:()=>{this.tripService.dropOff(this.trip.key),this.dealService.removeDeal(this.trip.driverId),this.router.navigateByUrl("/home")}},{text:"N\xe3o"}]}).then(t=>t.present())}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(l.a),a.Y36(r.Br),a.Y36(p.q),a.Y36(s.F0),a.Y36(u.v),a.Y36(g.sK),a.Y36(h.KQ),a.Y36(r._q),a.Y36(d.b))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-pickup"]],decls:24,vars:5,consts:[["color","dark"],[1,"ion-text-center"],["slot","end",4,"ngIf"],["lines","none"],[4,"ngIf"],["slot","end","fill","outline","color","dark",3,"click"],["name","navigate"],[1,"ion-padding"],["expand","block","color","dark",3,"click",4,"ngIf"],["expand","block","color","danger",3,"click",4,"ngIf"],["slot","end"],["color","danger","fill","solid",3,"click"],["slot","end",3,"href"],["name","call"],["expand","block","color","dark",3,"click"],["expand","block","color","danger",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar",0),a.TgZ(2,"ion-title",1),a._uU(3," Dados do Atendimento "),a.qZA(),a.YNc(4,Z,3,0,"ion-buttons",2),a.qZA(),a.qZA(),a.TgZ(5,"ion-content"),a.TgZ(6,"ion-card"),a.TgZ(7,"ion-card-content"),a.TgZ(8,"ion-list",3),a.YNc(9,f,11,3,"ion-item",4),a.TgZ(10,"ion-item"),a.TgZ(11,"ion-label"),a.TgZ(12,"ion-text"),a.TgZ(13,"h2"),a._uU(14,"LOCAL"),a.qZA(),a.qZA(),a.TgZ(15,"ion-text"),a.YNc(16,m,2,1,"p",4),a.qZA(),a.qZA(),a.TgZ(17,"ion-button",5),a.NdJ("click",function(){return e.getDirection(e.trip.origin.location.lat,e.trip.origin.location.lng)}),a._UZ(18,"ion-icon",6),a._uU(19,"\xa0 NAVEGAR "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(20,"ion-footer",7),a.TgZ(21,"ion-toolbar"),a.YNc(22,b,2,0,"ion-button",8),a.YNc(23,A,2,0,"ion-button",9),a.qZA(),a.qZA()),2&t&&(a.xp6(4),a.Q6J("ngIf","waiting"==e.trip.status),a.xp6(5),a.Q6J("ngIf",e.passenger.phoneNumber),a.xp6(7),a.Q6J("ngIf",null!=e.trip.origin),a.xp6(6),a.Q6J("ngIf","waiting"==e.trip.status),a.xp6(1),a.Q6J("ngIf","going"==e.trip.status))},directives:[r.Gu,r.sr,r.wd,i.O5,r.W2,r.PM,r.FN,r.q_,r.Ie,r.Q$,r.yW,r.YG,r.gu,r.fr,r.Sm],styles:["h3[_ngcontent-%COMP%]{text-align:center;padding:8px;color:#4caf50;font-size:2rem}table[_ngcontent-%COMP%]{width:100%}tr[_ngcontent-%COMP%]{border:1px solid #eee}td[_ngcontent-%COMP%]{padding:4px}.footer-md[_ngcontent-%COMP%]:before{background-image:none!important}.payment-mode[_ngcontent-%COMP%]{background:#f2f2f2;padding:2px}"]}),t})()}];let k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(T)],s.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,o.u5,r.Pc,g.aw,k]]}),t})()}}]);