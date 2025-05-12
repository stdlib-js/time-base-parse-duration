// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=/(\d+)([a-z]+)/gi,s={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function n(n){var r,o,t;if(o={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===n.length)return o;for(n=function(e){return e.toLowerCase()}(n),r=e.exec(n);r;)(t=s[r[2]])&&(o[t]=parseInt(r[1],10)),r=e.exec(n);return o}export{n as default};
//# sourceMappingURL=mod.js.map
