/*!
 * Trigger.js v1.0.7
 * Copyright (c) 2021 Steven Lei
 * Released under the MIT License.
*/(()=>{var t={234:(t,e,r)=>{"use strict";r.r(e),r.d(e,{get:()=>n});function n(t){return t&&["cover","inset"].includes(t)||(t="cover"),t}},921:(t,e,r)=>{"use strict";function n(t){var e={mode:"retain",values:[]};return"string"==typeof t&&""!==t.trim()&&("!"===t.substring(t.length-1)&&(e.mode="exact",t=t.substring(0,t.length-1)),t=t.replace(/!/g,""),e.values=t.split(",").map((function(t){return Number(t.trim())}))),e}r.r(e),r.d(e,{get:()=>n})},551:(t,e,r)=>{"use strict";r.r(e),r.d(e,{get:()=>o});var n=r(381);function o(t){if(!t)return null;var e=document.querySelector("[".concat((0,n.G)(),'ref="').concat(t,'"]'));return!e||e.hasAttribute("".concat((0,n.G)(),"follow"))?null:e}},705:(t,e,r)=>{"use strict";r.r(e),r.d(e,{get:()=>n});function n(t){return t?Number(t):0}},661:(t,e,r)=>{"use strict";function n(t){var e={};return"string"==typeof t&&""!==t.trim()&&t.split(";").forEach((function(t){var r=t.split(":");2===r.length&&(r[0].indexOf(",")>-1?r[0].split(",").forEach((function(t){e[t.trim()]=r[1].trim()})):e[r[0].trim()]=r[1].trim())})),e}r.r(e),r.d(e,{get:()=>n})},424:(t,e,r)=>{"use strict";r.r(e),r.d(e,{get:()=>o});var n=r(381);function o(t){return t||console.warn("".concat((0,n.G)(),"name is not set")),"--"===t.substring(0,2)?t:"--".concat(t)}},146:(t,e,r)=>{"use strict";function n(t){return t||null}r.r(e),r.d(e,{get:()=>n})},414:(t,e,r)=>{"use strict";r.r(e),r.d(e,{get:()=>n});function n(t){return t?Number(t):0}},158:(t,e,r)=>{"use strict";r.r(e),r.d(e,{get:()=>n});function n(t){var e=t?Number(t):100;return 0===e&&(e=100),e}},604:(t,e,r)=>{"use strict";r.r(e),r.d(e,{get:()=>n});function n(t){return t?Number(t):1}},381:(t,e,r)=>{"use strict";r.d(e,{P:()=>o,G:()=>i});var n="tg";function o(){if(void 0!==document.body&&document.body.hasAttribute("data-trigger-prefix")){var t=document.body.getAttribute("data-trigger-prefix");t&&function(t){if("string"!=typeof t||""===t.trim())return;t=t.trim(),n=t}(t)}}function i(){return"".concat(n,"-")}},523:(t,e,r)=>{var n={"./tg-edge.ts":234,"./tg-filter.ts":921,"./tg-follow.ts":551,"./tg-from.ts":705,"./tg-map.ts":661,"./tg-name.ts":424,"./tg-ref.ts":146,"./tg-step.ts":414,"./tg-steps.ts":158,"./tg-to.ts":604};function o(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=523}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);var t=r(381);var e=["tg-follow","tg-ref"],o={},i=r(523);function u(r,n){var i=n;if("tg-"!==i.substring(0,3)){var u=(0,t.G)();i="tg-".concat(i.replace(u,""))}if(void 0===o[i])return null;var a=function(t,r,n){if(t.hasAttribute(r)||e.includes(n))return t;var o=t;for(;(o=o.parentElement)!==document.body;)if(o.hasAttribute(r))return o;return t}(r,n,i),c=a.hasAttribute(n)?a.getAttribute(n):null;return o[i].get(c)}function a(e){var r=u(e,"".concat((0,t.G)(),"follow")),n=e;null!==r&&(n=r);var o,i=getComputedStyle(n),a=Number(i.getPropertyValue("--tg-top")),c=Number(i.getPropertyValue("--tg-height")),s=u(e,"".concat((0,t.G)(),"name")),l=u(n,"".concat((0,t.G)(),"from")),f=u(n,"".concat((0,t.G)(),"to")),d=u(n,"".concat((0,t.G)(),"steps")),g=u(n,"".concat((0,t.G)(),"step")),m=u(e,"".concat((0,t.G)(),"map")),p=u(e,"".concat((0,t.G)(),"filter")),v=u(n,"".concat((0,t.G)(),"edge")),b=Math.abs(f-l),y=0===g?b/d:g;return{el:e,top:a,height:c,name:s,from:l,to:f,steps:d,step:g,mapping:m,filter:p,edge:v,range:b,increment:y,segments:b/y,decimals:(o=y,Math.floor(o.valueOf())===o.valueOf()?0:o.toString().split(".")[1].length||0),multiplier:l>f?-1:1,lastValue:null}}function c(t){var e=document.documentElement.scrollTop,r=document.documentElement.clientHeight;t.forEach((function(t){var n=t.el,o=t.top,i=t.height,u=t.increment,a=t.segments,c=t.decimals,s=t.multiplier,l=t.name,f=t.from,d=t.to,g=t.mapping,m=t.filter,p=t.edge,v=t.lastValue;if("--_"!==l){var b,y=(e-o+r)/(r+i);"inset"===p&&(y=(e-o)/(i-r));var h=(f+Math.floor((a+1)*y)*u*s).toFixed(c);b=1===s?Math.min(Math.max(+h,f),d):Math.min(Math.max(+h,d),f),m.values.length>0&&!m.values.includes(b)?"exact"===m.mode&&(t.lastValue=null,n.style.removeProperty(l)):(void 0!==g[b]&&(b=g[b]),v!=b&&(n.style.setProperty(l,"".concat(b)),n.dispatchEvent(new CustomEvent("tg",{target:n,detail:{value:b}})),t.lastValue=b))}}))}i.keys().map((function(t){var e,r=null===(e=t.match(/tg-[^.]+/))||void 0===e?void 0:e[0];r&&(o[r]=i(t))}));var s={root:null,rootMargin:"0px",threshold:0};function l(e,r){r&&"function"==typeof r.before&&r.before(),document.querySelectorAll("[".concat((0,t.G)(),"name]")).forEach((function(t){var r=t.getBoundingClientRect(),n=r.top,o=r.height;t.style.setProperty("--tg-top","".concat(n+window.scrollY)),t.style.setProperty("--tg-height","".concat(o)),null==e||e.observe(t)})),r&&"function"==typeof r.after&&r.after()}function f(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var g=[],m=null;function p(){var t;t=function(t){t.forEach((function(t){var e=t.target;t.isIntersecting?g.push(a(e)):g=g.filter((function(t){return t.el!==e}))}))},m="undefined"==typeof IntersectionObserver?(console.warn("IntersectionObserver is not supported in this browser"),null):new IntersectionObserver(t,s)}(0,t.P)();({start:function(){document.body?(p(),window.addEventListener("DOMContentLoaded",(function(){l(m),setTimeout((function(){c(f(document.querySelectorAll("[".concat((0,t.G)(),"name]"))).map((function(t){return a(t)})))}))})),window.addEventListener("resize",(function(){l(m,{before:function(){g.forEach((function(t){var e;null===(e=m)||void 0===e||e.unobserve(t.el)})),g=[]}})})),window.addEventListener("scroll",(function(t){c(g)}))):console.warn("Unable to initialise, document.body does not exist.")}}).start()})(),window.Trigger=n})();