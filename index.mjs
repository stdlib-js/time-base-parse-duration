// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@esm/index.mjs";var e=/(\d+)([a-z]+)/gi,n={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};function r(r){var t,i,d;if(i={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===r.length)return i;for(r=s(r),t=e.exec(r);t;)(d=n[t[2]])&&(i[d]=parseInt(t[1],10)),t=e.exec(r);return i}export{r as default};
//# sourceMappingURL=index.mjs.map
