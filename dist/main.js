(()=>{"use strict";var n,e,t,r,o,a,i,s,c,l,d,p,u,f,v={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;1,100&display=swap);"]),i.push([n.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #23262E;\n  color: #f5f5f0;\n}\n\ndiv#content {\n  font-family: "Poppins", sans-serif;\n  max-width: 500px;\n  position: relative;\n  margin: 0 auto;\n  /* padding: 0 10px; */\n  background: #3e41c1;\n}\n\nimg {\n  width: 25px;\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nnav, .sort {\n  padding: 0 10px;\n}\n\nnav ul {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nnav ul li h3 {\n  font-size: 0.9rem;\n  white-space: nowrap;\n}\n\nlabel[for="menu-check"] {\n  cursor: pointer;\n}\n\ninput[type="checkbox"],\nnav ul li.menu {\n  display: none;\n}\n\nnav div.menu {\n  display: none;\n}\n\ninput#menu-check:checked ~ .menu {\n  display: block;\n}\n\nnav div.menu {\n  border: none;\n  outline: none;\n  border-radius: 15px;\n  padding: 5px;\n  position: absolute;\n  top: 50px;\n  left: 0;\n  margin-left: 10px;\n  background: #222;\n  max-width: 200px;\n  z-index: 9999;\n}\n\nnav div.menu ul {\n  display: flex;\n  flex-direction: column;\n}\n\nnav div.menu ul li {\n  padding: 5px 8px;\n  background: #333;\n  margin-bottom: 5px;\n  width: 100%;\n  text-align: center;\n  border-radius: 15px;\n  cursor: pointer;\n}\nnav div.menu ul li:last-child {\n  margin-bottom: 0;\n}\nnav div.menu ul li:hover {\n  background: #3e41c1;\n  transition: all 400ms ease;\n}\n\n/* NEXT SECTION 2 */\n\n.sort {\n  margin-top: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.sort .sort-day h2 {\n  font-size: 1.3rem;\n}\n.sort .sort-day h5 {\n  font-size: 12px;\n  line-height: 0.5;\n}\n\n.sort button.add-new-task {\n  width: 6rem;\n  height: 35px;\n  background: #f5f5f0;\n  border-radius: 10px;\n  border: 1px solid #f5f5f0;\n  cursor: pointer;\n  font-weight: 400;\n  color: #3e41c1;\n  white-space: nowrap;\n}\n\n.sort button.add-new-task:hover {\n  background: transparent;\n  border: 1px solid #f5f5f0;\n  transition: all 400ms ease;\n  color: #f5f5f0;\n}\n\n/* NEXT SECTION 3 */\n\nsnap-tabs {\n  --hue: 328deg;\n  --accent: var(--hue) 100% 54%;\n  --indicator-size: 2px;\n\n  --space-1: 0.5rem;\n  --space-2: 1rem;\n  --space-3: 1.5rem;\n\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  margin-top: 30px;\n  background: #f5f5f0;\n  border-radius: 40px 0 0 0;\n}\n\nsnap-tabs:matches(header, nav, section, article, a) {\n  outline-color: hsl(var(--accent));\n  outline-offset: (-5px);\n}\n\n.scroll-snap-x {\n  overflow: auto hidden;\n  overscroll-behavior-x: contain;\n  scroll-snap-type: x mandatory;\n  color: #333;\n\n  @media (prefers-reduced-motion: no-preference) {\n    scroll-behavior: smooth;\n  }\n\n  @media (hover: none) {\n    scrollbar-width: none;\n    &::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n    }\n  }\n}\n\nsnap-tabs > header {\n  --text-color:hsl(var(--hue)5% 40%);\n  --active-color:hsl(var(--hue)20% 10%)\n\n  flex-shrink:0;\n  min-block-size: fit-content;\n  display: flex;\n  flex-direction: column;\n\n \n}\n\nsnap-tabs > header > nav {\n  display: flex;\n}\n\nsnap-tabs > header a {\n  scroll-snap-align: start;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n\n  font-size: .8rem;\n  color: var(--text-color);\n  font-weight: bold;\n  text-decoration: none;\n  padding: var(--space-2) var(--space-3);\n  margin-right: var(--space-1);\n}\n\nsnap-tabs > header a > img {\n  inline-size: 1.5em;\n  pointer-events: none;\n}\n\nsnap-tabs > header a:hover {\n  /* background: hsl(var(--accent) / 5%); */\n  background: red;\n}\n\nsnap-tabs > section {\n  block-size: 100%;\n\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 100%;\n}\n\nsnap-tabs > section > article {\n  scroll-snap-align: start;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n\n  padding: var(--space-2) var(--space-3)\n}\n\n@media (prefers-reduced-motion: reduced) {\n  \n\n  snap-tabs > header a {\n    border-block-end: var(--indicator-size) solid hsl(var(--accent) / 0%);\n    transition:\n      color 700ms ease,\n      border-color 500ms ease\n  }\n\n  snap-tabs > header a:matches(:target, :active, [active]) {\n    color: var(--text-active-color);\n    border-block-end-color: hsl(var(--accent));\n  }\n\n  snap-tabs .snap-indicator {\n    visibility: hidden;\n  }\n}',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function m(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return v[n](t,t.exports,m),t.exports}m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),o=m(569),a=m.n(o),i=m(565),s=m.n(i),c=m(216),l=m.n(c),d=m(589),p=m.n(d),u=m(426),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();