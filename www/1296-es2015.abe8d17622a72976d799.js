(self.webpackChunkdriver=self.webpackChunkdriver||[]).push([[1296],{1296:function(e,t,n){"use strict";n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return r},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return D},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return d},setKeyboardClose:function(){return f},setKeyboardOpen:function(){return c},startKeyboardAssist:function(){return u},trackViewportChanges:function(){return y}});const i="ionKeyboardDidShow",r="ionKeyboardDidHide";let o={},s={},a=!1;const d=()=>{o={},s={},a=!1},u=e=>{h(e),e.visualViewport&&(s=D(e.visualViewport),e.visualViewport.onresize=()=>{y(e),p()||b(e)?c(e):g(e)&&f(e)})},h=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>f(e))},c=(e,t)=>{w(e,t),a=!0},f=e=>{l(e),a=!1},p=()=>!a&&o.width===s.width&&(o.height-s.height)*s.scale>150,b=e=>a&&!g(e),g=e=>a&&s.height===e.innerHeight,w=(e,t)=>{const n=new CustomEvent(i,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-s.height}});e.dispatchEvent(n)},l=e=>{const t=new CustomEvent(r);e.dispatchEvent(t)},y=e=>{o=Object.assign({},s),s=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);