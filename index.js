// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=/(\d+)([a-z]+)/gi,n={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};return function(s){var o,t,i;if(t={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===s.length)return t;for(s=function(e){return e.toLowerCase()}(s),o=e.exec(s);o;)(i=n[o[2]])&&(t[i]=parseInt(o[1],10)),o=e.exec(s);return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).parseDuration=n();
//# sourceMappingURL=index.js.map
