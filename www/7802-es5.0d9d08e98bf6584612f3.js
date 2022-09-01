!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof f?e:f,o=Object.create(i.prototype),a=new T(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return S()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var l={};function f(){}function d(){}function p(){}var v={};c(v,o,function(){return this});var y=Object.getPrototypeOf,b=y&&y(y(E([])));b&&b!==r&&n.call(b,o)&&(v=b);var g=p.prototype=f.prototype=Object.create(v);function m(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){function r(i,o,a,s){var c=h(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,s)},function(t){r("throw",t,a,s)}):e.resolve(l).then(function(t){u.value=t,a(u)},function(t){return r("throw",t,a,s)})}s(c.arg)}var i;this._invoke=function(t,n){function o(){return new e(function(e,i){r(t,n,e,i)})}return i=i?i.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=p,c(g,"constructor",p),c(p,"constructor",d),d.displayName=c(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},m(w.prototype),c(w.prototype,a,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new w(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},m(g),c(g,s,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function e(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function r(t){return function(){var r=this,n=arguments;return new Promise(function(i,o){var a=t.apply(r,n);function s(t){e(a,i,o,s,c,"next",t)}function c(t){e(a,i,o,s,c,"throw",t)}s(void 0)})}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[7802],{7802:function(e,i,a){"use strict";a.r(i),a.d(i,{ion_tab:function(){return u},ion_tabs:function(){return h}});var s=a(3150),c=a(7069),u=function(){function e(t){n(this,e),(0,s.r)(this,t),this.loaded=!1,this.active=!1}var i,a;return o(e,[{key:"componentWillLoad",value:(a=r(t().mark(function e(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=this.active,!t.t0){t.next=4;break}return t.next=4,this.setActive();case 4:case"end":return t.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"setActive",value:(i=r(t().mark(function e(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.prepareLazyLoaded();case 2:this.active=!0;case 3:case"end":return t.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"changeActive",value:function(t){t&&this.prepareLazyLoaded()}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,c.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var t=this.tab,e=this.active,r=this.component;return(0,s.h)(s.H,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":"tab-button-".concat(t),class:{"ion-page":void 0===r,"tab-hidden":!e}},(0,s.h)("slot",null))}},{key:"el",get:function(){return(0,s.i)(this)}}],[{key:"watchers",get:function(){return{active:["changeActive"]}}}]),e}();u.style=":host(.tab-hidden){display:none !important}";var h=function(){function e(t){var r=this;n(this,e),(0,s.r)(this,t),this.ionNavWillLoad=(0,s.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,s.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,s.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(t){var e=t.detail,n=e.href,i=e.tab;if(r.useRouter&&void 0!==n){var o=document.querySelector("ion-router");o&&o.push(n)}else r.select(i)}}var i,a,c,u,h;return o(e,[{key:"componentWillLoad",value:(h=r(t().mark(function e(){var r;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter){t.next=6;break}if(r=this.tabs,t.t0=r.length>0,!t.t0){t.next=6;break}return t.next=6,this.select(r[0]);case 6:this.ionNavWillLoad.emit();case 7:case"end":return t.stop()}},e,this)})),function(){return h.apply(this,arguments)})},{key:"componentWillRender",value:function(){var t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}},{key:"select",value:(u=r(t().mark(function e(r){var n;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=l(this.tabs,r),t.t0=!!this.shouldSwitch(n),!t.t0){t.next=9;break}return t.next=5,this.setActive(n);case 5:return t.next=7,this.notifyRouter();case 7:this.tabSwitch(),t.t0=!0;case 9:return t.abrupt("return",t.t0);case 10:case"end":return t.stop()}},e,this)})),function(t){return u.apply(this,arguments)})},{key:"getTab",value:(c=r(t().mark(function e(r){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l(this.tabs,r));case 1:case"end":return t.stop()}},e,this)})),function(t){return c.apply(this,arguments)})},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:(a=r(t().mark(function e(r){var n,i=this;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=l(this.tabs,r),!this.shouldSwitch(n)){t.next=7;break}return t.next=4,this.setActive(n);case 4:t.t0={changed:!0,element:this.selectedTab,markVisible:function(){return i.tabSwitch()}},t.next=8;break;case 7:t.t0={changed:!1,element:this.selectedTab};case 8:return t.abrupt("return",t.t0);case 9:case"end":return t.stop()}},e,this)})),function(t){return a.apply(this,arguments)})},{key:"getRouteId",value:(i=r(t().mark(function e(){var r;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.selectedTab&&this.selectedTab.tab,t.abrupt("return",void 0!==r?{id:r,element:this.selectedTab}:void 0);case 2:case"end":return t.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"setActive",value:function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}},{key:"tabSwitch",value:function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"render",value:function(){return(0,s.h)(s.H,{onIonTabButtonClick:this.onTabClicked},(0,s.h)("slot",{name:"top"}),(0,s.h)("div",{class:"tabs-inner"},(0,s.h)("slot",null)),(0,s.h)("slot",{name:"bottom"}))}},{key:"el",get:function(){return(0,s.i)(this)}}]),e}(),l=function(t,e){var r="string"==typeof e?t.find(function(t){return t.tab===e}):e;return r||console.error('tab with id: "'.concat(r,'" does not exist')),r};h.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}])}();