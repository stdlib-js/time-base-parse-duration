"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=o(function(v,n){
var t=require('@stdlib/string-base-lowercase/dist'),a=/(\d+)([a-z]+)/gi,c={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function d(r){var e,s,i;if(s={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},r.length===0)return s;for(r=t(r),e=a.exec(r);e;)i=c[e[2]],i&&(s[i]=parseInt(e[1],10)),e=a.exec(r);return s}n.exports=d
});var l=u();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
