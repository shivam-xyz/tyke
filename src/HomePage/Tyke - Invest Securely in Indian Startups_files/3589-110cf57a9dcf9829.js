"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3589],{64063:function(e){e.exports=function e(r,n){if(r===n)return!0;if(r&&n&&"object"==typeof r&&"object"==typeof n){if(r.constructor!==n.constructor)return!1;var t,u,i;if(Array.isArray(r)){if((t=r.length)!=n.length)return!1;for(u=t;0!==u--;)if(!e(r[u],n[u]))return!1;return!0}if(r.constructor===RegExp)return r.source===n.source&&r.flags===n.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===n.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===n.toString();if((t=(i=Object.keys(r)).length)!==Object.keys(n).length)return!1;for(u=t;0!==u--;)if(!Object.prototype.hasOwnProperty.call(n,i[u]))return!1;for(u=t;0!==u--;){var a=i[u];if(!e(r[a],n[a]))return!1}return!0}return r!==r&&n!==n}},86944:function(e,r,n){n.r(r),n.d(r,{getObjectType:function(){return a}});var t=["innerHTML","ownerDocument","style","attributes","nodeValue"],u=["Array","ArrayBuffer","AsyncFunction","AsyncGenerator","AsyncGeneratorFunction","Date","Error","Function","Generator","GeneratorFunction","HTMLElement","Map","Object","Promise","RegExp","Set","WeakMap","WeakSet"],i=["bigint","boolean","null","number","string","symbol","undefined"];function a(e){var r,n=Object.prototype.toString.call(e).slice(8,-1);return/HTML\w+Element/.test(n)?"HTMLElement":(r=n,u.includes(r)?n:void 0)}function o(e){return function(r){return a(r)===e}}function c(e){return function(r){return typeof r===e}}function f(e){if(null===e)return"null";switch(typeof e){case"bigint":return"bigint";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";case"undefined":return"undefined"}if(f.array(e))return"Array";if(f.plainFunction(e))return"Function";var r=a(e);return r||"Object"}f.array=Array.isArray,f.arrayOf=function(e,r){return!(!f.array(e)&&!f.function(r))&&e.every((function(e){return r(e)}))},f.asyncGeneratorFunction=function(e){return"AsyncGeneratorFunction"===a(e)},f.asyncFunction=o("AsyncFunction"),f.bigint=c("bigint"),f.boolean=function(e){return!0===e||!1===e},f.date=o("Date"),f.defined=function(e){return!f.undefined(e)},f.domElement=function(e){return f.object(e)&&!f.plainObject(e)&&1===e.nodeType&&f.string(e.nodeName)&&t.every((function(r){return r in e}))},f.empty=function(e){return f.string(e)&&0===e.length||f.array(e)&&0===e.length||f.object(e)&&!f.map(e)&&!f.set(e)&&0===Object.keys(e).length||f.set(e)&&0===e.size||f.map(e)&&0===e.size},f.error=o("Error"),f.function=c("function"),f.generator=function(e){return f.iterable(e)&&f.function(e.next)&&f.function(e.throw)},f.generatorFunction=o("GeneratorFunction"),f.instanceOf=function(e,r){return!(!e||!r)&&Object.getPrototypeOf(e)===r.prototype},f.iterable=function(e){return!f.nullOrUndefined(e)&&f.function(e[Symbol.iterator])},f.map=o("Map"),f.nan=function(e){return Number.isNaN(e)},f.null=function(e){return null===e},f.nullOrUndefined=function(e){return f.null(e)||f.undefined(e)},f.number=function(e){return c("number")(e)&&!f.nan(e)},f.numericString=function(e){return f.string(e)&&e.length>0&&!Number.isNaN(Number(e))},f.object=function(e){return!f.nullOrUndefined(e)&&(f.function(e)||"object"===typeof e)},f.oneOf=function(e,r){return!!f.array(e)&&e.indexOf(r)>-1},f.plainFunction=o("Function"),f.plainObject=function(e){if("Object"!==a(e))return!1;var r=Object.getPrototypeOf(e);return null===r||r===Object.getPrototypeOf({})},f.primitive=function(e){return f.null(e)||(r=typeof e,i.includes(r));var r},f.promise=o("Promise"),f.propertyOf=function(e,r,n){if(!f.object(e)||!r)return!1;var t=e[r];return f.function(n)?n(t):f.defined(t)},f.regexp=o("RegExp"),f.set=o("Set"),f.string=c("string"),f.symbol=c("symbol"),f.undefined=c("undefined"),f.weakMap=o("WeakMap"),f.weakSet=o("WeakSet"),r.default=f},72182:function(e){var r=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||function(e){return e.$$typeof===n}(e)}(e)};var n="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function t(e,r){return!1!==r.clone&&r.isMergeableObject(e)?c((n=e,Array.isArray(n)?[]:{}),e,r):e;var n}function u(e,r,n){return e.concat(r).map((function(e){return t(e,n)}))}function i(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(r){return e.propertyIsEnumerable(r)})):[]}(e))}function a(e,r){try{return r in e}catch(n){return!1}}function o(e,r,n){var u={};return n.isMergeableObject(e)&&i(e).forEach((function(r){u[r]=t(e[r],n)})),i(r).forEach((function(i){(function(e,r){return a(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))})(e,i)||(a(e,i)&&n.isMergeableObject(r[i])?u[i]=function(e,r){if(!r.customMerge)return c;var n=r.customMerge(e);return"function"===typeof n?n:c}(i,n)(e[i],r[i],n):u[i]=t(r[i],n))})),u}function c(e,n,i){(i=i||{}).arrayMerge=i.arrayMerge||u,i.isMergeableObject=i.isMergeableObject||r,i.cloneUnlessOtherwiseSpecified=t;var a=Array.isArray(n);return a===Array.isArray(e)?a?i.arrayMerge(e,n,i):o(e,n,i):t(n,i)}c.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return c(e,n,r)}),{})};var f=c;e.exports=f},19507:function(e,r,n){n.r(r),n.d(r,{default:function(){return g},treeChanges:function(){return p}});var t=n(67294),u=n(64063),i=n(86944);function a(e,r,n){var t=n.actual,u=n.key,a=n.previous,o=n.type,c=b(e,u),f=b(r,u),l=[c,f].every(i.default.number)&&("increased"===o?c<f:c>f);return i.default.undefined(t)||(l=l&&f===t),i.default.undefined(a)||(l=l&&c===a),l}function o(e,r,n){var t=n.key,a=n.type,o=n.value,c=b(e,t),d=b(r,t),p="added"===a?c:d,g="added"===a?d:c;return i.default.nullOrUndefined(o)?[c,d].every(i.default.array)?!g.every(y(p)):[c,d].every(i.default.plainObject)?function(e,r){return r.some((function(r){return!e.includes(r)}))}(Object.keys(p),Object.keys(g)):![c,d].every((function(e){return i.default.primitive(e)&&i.default.defined(e)}))&&("added"===a?!i.default.defined(c)&&i.default.defined(d):i.default.defined(c)&&!i.default.defined(d)):i.default.defined(p)?!(!i.default.array(p)&&!i.default.plainObject(p))&&function(e,r,n){return!!s(e,r)&&([e,r].every(i.default.array)?!e.some(l(n))&&r.some(l(n)):[e,r].every(i.default.plainObject)?!Object.entries(e).some(f(n))&&Object.entries(r).some(f(n)):r===n)}(p,g,o):u(g,o)}function c(e,r,n){var t=(void 0===n?{}:n).key,u=b(e,t),a=b(r,t);if(!s(u,a))throw new TypeError("Inputs have different types");if(!function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.every((function(e){return i.default.string(e)||i.default.array(e)||i.default.plainObject(e)}))}(u,a))throw new TypeError("Inputs don't have length");return[u,a].every(i.default.plainObject)&&(u=Object.keys(u),a=Object.keys(a)),[u,a]}function f(e){return function(r){var n=r[0],t=r[1];return i.default.array(e)?u(e,t)||e.some((function(e){return u(e,t)||i.default.array(t)&&y(t)(e)})):i.default.plainObject(e)&&e[n]?!!e[n]&&u(e[n],t):u(e,t)}}function l(e){return function(r){return i.default.array(e)?e.some((function(e){return u(e,r)||i.default.array(r)&&y(r)(e)})):u(e,r)}}function d(e,r){return i.default.array(e)?e.some((function(e){return u(e,r)})):u(e,r)}function y(e){return function(r){return e.some((function(e){return u(e,r)}))}}function s(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.every(i.default.array)||e.every(i.default.number)||e.every(i.default.plainObject)||e.every(i.default.string)}function b(e,r){return i.default.plainObject(e)||i.default.array(e)?i.default.string(r)?r.split(".").reduce((function(e,r){return e&&e[r]}),e):i.default.number(r)?e[r]:e:e}function p(e,r){if([e,r].some(i.default.nullOrUndefined))throw new Error("Missing required parameters");if(![e,r].every((function(e){return i.default.plainObject(e)||i.default.array(e)})))throw new Error("Expected plain objects or array");var n=function(n,t,a){try{var o=b(e,n),c=b(r,n),f=i.default.defined(t),l=i.default.defined(a);if(f||l){var y=l?d(a,o):!d(t,o),s=d(t,c);return y&&s}return[o,c].every(i.default.array)||[o,c].every(i.default.plainObject)?!u(o,c):o!==c}catch(p){return!1}};return{added:function(n,t){try{return o(e,r,{key:n,type:"added",value:t})}catch(u){return!1}},changed:n,changedFrom:function(n,t,u){if(!i.default.defined(n))return!1;try{var a=b(e,n),o=b(r,n),c=i.default.defined(u);return d(t,a)&&(c?d(u,o):!c)}catch(f){return!1}},changedTo:function(e,r){return!!i.default.defined(e)&&n(e,r)},decreased:function(n,t,u){if(!i.default.defined(n))return!1;try{return a(e,r,{key:n,actual:t,previous:u,type:"decreased"})}catch(o){return!1}},emptied:function(n){try{var t=c(e,r,{key:n}),u=t[0],i=t[1];return!!u.length&&!i.length}catch(a){return!1}},filled:function(n){try{var t=c(e,r,{key:n}),u=t[0],i=t[1];return!u.length&&!!i.length}catch(a){return!1}},increased:function(n,t,u){if(!i.default.defined(n))return!1;try{return a(e,r,{key:n,actual:t,previous:u,type:"increased"})}catch(o){return!1}},removed:function(n,t){try{return o(e,r,{key:n,type:"removed",value:t})}catch(u){return!1}}}}function g(e){var r=(0,t.useRef)(e),n=u(r.current,e),i=(0,t.useRef)(n),a=(0,t.useRef)(p(r.current,e));return(0,t.useEffect)((function(){r.current=e})),i.current===n&&n||(i.current=n,a.current=p(r.current,e)),a.current}}}]);