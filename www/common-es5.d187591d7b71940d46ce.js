!function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e,n,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function u(t){r(a,i,o,u,c,"next",t)}function c(t){r(a,i,o,u,c,"throw",t)}u(void 0)})}}(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[8592],{8225:function(t,e,n){"use strict";n.d(e,{c:function(){return a}});var r=n(3150),i=n(2954),o=n(9461),a=function(t,e){var n,a,u=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(s(),c(o,i)):s()}},c=function(t,e){n=t,a||(a=n);var i=n;(0,r.c)(function(){return i.classList.add("ion-activated")}),e()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;(0,r.c)(function(){return e.classList.remove("ion-activated")}),t&&a!==n&&n.click(),n=void 0}};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return u(t.currentX,t.currentY,i.a)},onMove:function(t){return u(t.currentX,t.currentY,i.b)},onEnd:function(){s(!0),(0,i.h)(),a=void 0}})}},7330:function(t,e,n){"use strict";n.d(e,{a:function(){return o},d:function(){return a}});var r=n(2377),o=function(){var t=i(regeneratorRuntime.mark(function t(e,n,i,o,a){var u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,i,a,o));case 2:if("string"==typeof i||i instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:return u="string"==typeof i?n.ownerDocument&&n.ownerDocument.createElement(i):i,o&&o.forEach(function(t){return u.classList.add(t)}),a&&Object.assign(u,a),n.appendChild(u),t.next=10,new Promise(function(t){return(0,r.c)(u,t)});case 10:return t.abrupt("return",u);case 11:case"end":return t.stop()}},t)}));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),a=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},2954:function(t,e,n){"use strict";n.d(e,{a:function(){return o},b:function(){return a},c:function(){return i},d:function(){return c},h:function(){return u}});var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},u=function(){r.selectionEnd()},c=function(t){r.impact(t)}},6575:function(t,r,i){"use strict";i.d(r,{s:function(){return o}});var o=function(t){try{if(t instanceof function(){return e(function t(e){n(this,t),this.value=e})}())return t.value;if(!c()||"string"!=typeof t||""===t)return t;var r=document.createDocumentFragment(),i=document.createElement("div");r.appendChild(i),i.innerHTML=t,l.forEach(function(t){for(var e=r.querySelectorAll(t),n=e.length-1;n>=0;n--){var i=e[n];i.parentNode?i.parentNode.removeChild(i):r.removeChild(i);for(var o=u(i),c=0;c<o.length;c++)a(o[c])}});for(var o=u(r),s=0;s<o.length;s++)a(o[s]);var f=document.createElement("div");f.appendChild(r);var d=f.querySelector("div");return null!==d?d.innerHTML:f.innerHTML}catch(v){return console.error(v),""}},a=function t(e){if(!e.nodeType||1===e.nodeType){for(var n=e.attributes.length-1;n>=0;n--){var r=e.attributes.item(n),i=r.name;if(s.includes(i.toLowerCase())){var o=r.value;null!=o&&o.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}else e.removeAttribute(i)}for(var a=u(e),c=0;c<a.length;c++)t(a[c])}},u=function(t){return null!=t.children?t.children:t.childNodes},c=function(){var t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},s=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]},408:function(t,e,n){"use strict";n.d(e,{S:function(){return r}});var r={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},1838:function(t,e,n){"use strict";n.d(e,{c:function(){return o},g:function(){return a},h:function(){return r},o:function(){return c}});var r=function(t,e){return null!==e.closest(t)},o=function(t,e){return"string"==typeof t&&t.length>0?Object.assign((n={"ion-color":!0},r="ion-color-".concat(t),i=!0,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n),e):e;var n,r,i},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},u=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=i(regeneratorRuntime.mark(function t(e,n,r,i){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||u.test(e)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),o.push(e,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)}));return function(e,n,r,i){return t.apply(this,arguments)}}()},5620:function(t,r,i){"use strict";i.d(r,{v:function(){return s}});var o=i(7716),a=i(2859),u=i(5469),c=i(7152),s=function(){var t=function(){function t(e,r,i,o,a,u){n(this,t),this.toast=e,this.alertCtrl=r,this.loadCtrl=i,this.platform=o,this.translate=a,this.geolocation=u,this.loader=null}return e(t,[{key:"showToast",value:function(t){this.toast.create({message:t,duration:2e3}).then(function(t){return t.present()})}},{key:"showAlert",value:function(t){this.alertCtrl.create({message:t,buttons:["ok"]}).then(function(t){return t.present()})}},{key:"showLoader",value:function(){var t=this;null==this.loader&&this.loadCtrl.create({spinner:"circles",duration:5e3}).then(function(e){t.loader=e,t.loader.present()})}},{key:"hideLoader",value:function(){null!=this.loader&&(this.loader.dismiss(),this.loader=null)}},{key:"enableBgMode",value:function(){(this.platform.is("android")||this.platform.is("ios"))&&(cordova.plugins.backgroundMode.setDefaults({id:-1,title:"Driver App",text:"Running in Background Mode",hidden:!1,silent:!1}),cordova.plugins.backgroundMode.setEnabled(!0),cordova.plugins.backgroundMode.on("enable",function(){console.log("background mode Enabled !!!"),cordova.plugins.backgroundMode.disableWebViewOptimizations(),cordova.plugins.backgroundMode.disableBatteryOptimizations()}),cordova.plugins.backgroundMode.on("active",function(){return console.log("bgm: active")}),cordova.plugins.backgroundMode.on("deactivate",function(){return console.log("bgm: deactive")}),cordova.plugins.backgroundMode.on("failure",function(){return console.log("bgm: failed")}),cordova.plugins.backgroundMode.on("disable",function(){return console.log("bgm: disable")}))}},{key:"disableBgMode",value:function(){cordova.plugins.backgroundMode.setEnabled(!1)}},{key:"changeLang",value:function(t){this.translate.use(t),localStorage.setItem("lang",t)}},{key:"getLang",value:function(){var t=localStorage.getItem("lang");return null==t||null==t?"en":t}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.LFG(a.yF),o.LFG(a.Br),o.LFG(a.HT),o.LFG(a.t4),o.LFG(u.sK),o.LFG(c.b))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},6999:function(t,r,i){"use strict";i.d(r,{q:function(){return s}});var o=i(9019),a=i(7716),u=i(7318),c=i(7446),s=function(){var t=function(){function t(e,r){n(this,t),this.db=e,this.tripService=r}return e(t,[{key:"getDeal",value:function(t){return this.db.object("deals/"+t)}},{key:"removeDeal",value:function(t){return this.db.object("deals/"+t).remove()}},{key:"acceptDeal",value:function(t,e){var n=this;return e.driverId=t,this.tripService.createFromDeal(e).then(function(e){return n.tripService.setCurrentTrip(e.key),n.db.object("deals/"+t).update({status:o.je,tripId:e.key})})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.LFG(u.KQ),a.LFG(c.a))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},7234:function(t,r,i){"use strict";i.d(r,{k:function(){return a}});var o=i(7716),a=function(){var t=function(){function t(){n(this,t)}return e(t,[{key:"calcCrow",value:function(t,e,n,r){var i=this.toRad(n-t),o=this.toRad(r-e);t=this.toRad(t),n=this.toRad(n);var a=Math.sin(i/2)*Math.sin(i/2)+Math.sin(o/2)*Math.sin(o/2)*Math.cos(t)*Math.cos(n);return 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))*6371}},{key:"toRad",value:function(t){return t*Math.PI/180}},{key:"setLocalityFromGeocoder",value:function(t){for(var e,n,r=0;r<t.length;r++){n=t[r];for(var i=0;i<n.address_components.length;i++)if("administrative_area_level_2"==(e=n.address_components[i]).types[0]){var o=e.short_name.replace(/[\%\.\#\$\/\[\]]/,"_");return this.setLocality(o),o}}return!1}},{key:"setLocality",value:function(t){return this.locality=t}},{key:"getLocality",value:function(){return this.locality}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},4207:function(t,r,i){"use strict";i.d(r,{R:function(){return c}});var o=i(7716),a=i(7318),u=i(7234),c=function(){var t=function(){function t(e,r){n(this,t),this.db=e,this.placeService=r}return e(t,[{key:"getVehicleType",value:function(){return this.db.object("master_settings/prices/"+this.placeService.getLocality()+"/vehicles").valueChanges()}},{key:"getDefaultVehicleType",value:function(){return this.db.object("master_settings/prices/default/vehicles").valueChanges()}},{key:"getSettings",value:function(){return this.db.object("settings").snapshotChanges()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.LFG(a.KQ),o.LFG(u.k))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();