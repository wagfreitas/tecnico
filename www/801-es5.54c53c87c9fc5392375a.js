!function(){function t(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(O){c=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var s=w(a,e);if(s){if(s===d)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=u(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var d={};function p(){}function h(){}function f(){}var g={};c(g,i,function(){return this});var m=Object.getPrototypeOf,b=m&&m(m(T([])));b&&b!==e&&n.call(b,i)&&(g=b);var v=f.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(r){c(t,r,function(t){return this._invoke(r,t)})})}function y(t,r){function e(o,i,a,s){var c=u(t[o],t,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?r.resolve(d.__await).then(function(t){e("next",t,a,s)},function(t){e("throw",t,a,s)}):r.resolve(d).then(function(t){l.value=t,a(l)},function(t){return e("throw",t,a,s)})}s(c.arg)}var o;this._invoke=function(t,n){function i(){return new r(function(r,o){e(t,n,r,o)})}return o=o?o.then(i,i):i()}}function w(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,w(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=u(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=f,c(v,"constructor",f),c(f,"constructor",h),h.displayName=c(f,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===h||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},x(y.prototype),c(y.prototype,a,function(){return this}),t.AsyncIterator=y,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new y(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(v),c(v,s,"Generator"),c(v,i,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:T(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function e(t,r,e,n,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void e(l)}s.done?r(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise(function(o,i){var a=t.apply(r,n);function s(t){e(a,o,i,s,c,"next",t)}function c(t){e(a,o,i,s,c,"throw",t)}s(void 0)})}}function o(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[801],{801:function(e,i,a){"use strict";a.r(i),a.d(i,{ion_toast:function(){return b}});var s=a(3150),c=a(7585),l=a(3291),u=a(6575),d=a(1269),p=a(7235),h=function(t,r){var e=(0,p.c)(),n=(0,p.c)(),o=t.host||t,i=t.querySelector(".toast-wrapper");switch(n.addElement(i),r){case"top":n.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var a=Math.floor(o.clientHeight/2-i.clientHeight/2);i.style.top="".concat(a,"px"),n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return e.addElement(o).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},f=function(t,r){var e=(0,p.c)(),n=(0,p.c)(),o=t.host||t,i=t.querySelector(".toast-wrapper");switch(n.addElement(i),r){case"top":n.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return e.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},g=function(t,r){var e=(0,p.c)(),n=(0,p.c)(),o=t.host||t,i=t.querySelector(".toast-wrapper");switch(n.addElement(i),r){case"top":i.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":var a=Math.floor(o.clientHeight/2-i.clientHeight/2);i.style.top="".concat(a,"px"),n.fromTo("opacity",.01,1);break;default:i.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return e.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},m=function(t){var r=(0,p.c)(),e=(0,p.c)(),n=t.host||t,o=t.querySelector(".toast-wrapper");return e.addElement(o).fromTo("opacity",.99,0),r.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(e)},b=function(){function e(t){var r=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),(0,s.r)(this,t),this.didPresent=(0,s.e)(this,"ionToastDidPresent",7),this.willPresent=(0,s.e)(this,"ionToastWillPresent",7),this.willDismiss=(0,s.e)(this,"ionToastWillDismiss",7),this.didDismiss=(0,s.e)(this,"ionToastDidDismiss",7),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=function(t){if((0,l.i)(t.detail.role)){var e=r.getButtons().find(function(t){return"cancel"===t.role});r.callButtonHandler(e)}}}var i,a,p,b,x,y;return i=e,(a=[{key:"connectedCallback",value:function(){(0,l.e)(this.el)}},{key:"present",value:(y=n(r().mark(function t(){var e=this;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.d)(this,"toastEnter",h,g,this.position);case 2:this.duration>0&&(this.durationTimeout=setTimeout(function(){return e.dismiss(void 0,"timeout")},this.duration));case 3:case"end":return t.stop()}},t,this)})),function(){return y.apply(this,arguments)})},{key:"dismiss",value:function(t,r){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,l.f)(this,t,r,"toastLeave",f,m,this.position)}},{key:"onDidDismiss",value:function(){return(0,l.g)(this.el,"ionToastDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,l.g)(this.el,"ionToastWillDismiss")}},{key:"getButtons",value:function(){return this.buttons?this.buttons.map(function(t){return"string"==typeof t?{text:t}:t}):[]}},{key:"buttonClick",value:(x=n(r().mark(function t(e){var n;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.role,t.t0=(0,l.i)(n),t.t0){t.next=6;break}return t.next=5,this.callButtonHandler(e);case 5:t.t0=t.sent;case 6:if(!t.t0){t.next=10;break}t.t1=this.dismiss(void 0,n),t.next=11;break;case 10:t.t1=Promise.resolve();case 11:return t.abrupt("return",t.t1);case 12:case"end":return t.stop()}},t,this)})),function(t){return x.apply(this,arguments)})},{key:"callButtonHandler",value:(b=n(r().mark(function t(e){return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.handler){t.next=13;break}return t.prev=1,t.t0=!1,t.next=5,(0,l.s)(e.handler);case 5:if(t.t1=t.sent,t.t0!==t.t1){t.next=8;break}return t.abrupt("return",!1);case 8:t.next=13;break;case 10:t.prev=10,t.t2=t.catch(1),console.error(t.t2);case 13:return t.abrupt("return",!0);case 14:case"end":return t.stop()}},t,null,[[1,10]])})),function(t){return b.apply(this,arguments)})},{key:"renderButtons",value:function(r,e){var n=this;if(0!==r.length){var o=(0,c.b)(this);return(0,s.h)("div",{class:t({"toast-button-group":!0},"toast-button-group-".concat(e),!0)},r.map(function(t){return(0,s.h)("button",{type:"button",class:v(t),tabIndex:0,onClick:function(){return n.buttonClick(t)},part:"button"},(0,s.h)("div",{class:"toast-button-inner"},t.icon&&(0,s.h)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===o&&(0,s.h)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))}))}}},{key:"render",value:function(){var r=this.getButtons(),e=r.filter(function(t){return"start"===t.side}),n=r.filter(function(t){return"start"!==t.side}),o=(0,c.b)(this),i=t({"toast-wrapper":!0},"toast-".concat(this.position),!0);return(0,s.h)(s.H,Object.assign({role:r.length>0?"dialog":"status",tabindex:"-1"},this.htmlAttributes,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:(0,d.c)(this.color,Object.assign(Object.assign(t({},o,!0),(0,d.g)(this.cssClass)),{"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,s.h)("div",{class:i},(0,s.h)("div",{class:"toast-container",part:"container"},this.renderButtons(e,"start"),(0,s.h)("div",{class:"toast-content"},void 0!==this.header&&(0,s.h)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&(0,s.h)("div",{class:"toast-message",part:"message",innerHTML:(0,u.s)(this.message)})),this.renderButtons(n,"end"))))}},{key:"el",get:function(){return(0,s.i)(this)}}])&&o(i.prototype,a),p&&o(i,p),Object.defineProperty(i,"prototype",{writable:!1}),e}(),v=function(r){var e;return Object.assign((t(e={"toast-button":!0,"toast-button-icon-only":void 0!==r.icon&&void 0===r.text},"toast-button-".concat(r.role),void 0!==r.role),t(e,"ion-focusable",!0),t(e,"ion-activatable",!0),e),(0,d.g)(r.cssClass))};b.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}}}])}();