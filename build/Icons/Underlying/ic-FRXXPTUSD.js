!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=41)}({0:function(t,r){t.exports=e},1:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,c(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.PureComponent),r=t,(n=[{key:"render",value:function(){return this.props.icon(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){u(e,t,r[t])})}return e}({},this.props))}}])&&i(r.prototype,n),a&&i(r,a),t}();t.default=s},41:function(e,t,r){"use strict";r.r(t),r.d(t,"IconFRXXPTUSD",function(){return i}),r.d(t,"SVGFRXXPTUSD",function(){return u});var n=r(0),o=r.n(n),a=r(1),u=function(){return o.a.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("defs",null,o.a.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"a"},o.a.createElement("stop",{"stop-color":"#F4F3F3",offset:"0%"}),o.a.createElement("stop",{"stop-color":"#E5E4E2",offset:"100%"}))),o.a.createElement("g",{fill:"none","fill-rule":"evenodd"},o.a.createElement("g",{transform:"translate(2 8)"},o.a.createElement("use",{fill:"#E5E4E2"}),o.a.createElement("path",{"stroke-opacity":".08",stroke:"#000",d:"M11.118.5a.5.5 0 0 0-.447.276l-2.5 5a.5.5 0 0 0 .447.724h10.764a.5.5 0 0 0 .447-.724l-2.5-5A.5.5 0 0 0 16.882.5h-5.764z","stroke-linejoin":"square",fill:"url(#a)"})),o.a.createElement("g",{transform:"translate(2 8)"},o.a.createElement("use",{fill:"#E5E4E2"}),o.a.createElement("path",{"stroke-opacity":".08",stroke:"#000",d:"M4.118 8.5a.5.5 0 0 0-.447.276l-2.5 5a.5.5 0 0 0 .447.724h10.764a.5.5 0 0 0 .447-.724l-2.5-5a.5.5 0 0 0-.447-.276H4.118z","stroke-linejoin":"square",fill:"url(#a)"})),o.a.createElement("g",{transform:"translate(2 8)"},o.a.createElement("use",{fill:"#E5E4E2"}),o.a.createElement("path",{"stroke-opacity":".08",stroke:"#000",d:"M18.118 8.5a.5.5 0 0 0-.447.276l-2.5 5a.5.5 0 0 0 .447.724h10.764a.5.5 0 0 0 .447-.724l-2.5-5a.5.5 0 0 0-.447-.276h-5.764z","stroke-linejoin":"square",fill:"url(#a)"}))))},i=function(){return o.a.createElement(a.default,{icon:u})};i.displayName="IconFRXXPTUSD",u.displayName="SVGFRXXPTUSD"}})});