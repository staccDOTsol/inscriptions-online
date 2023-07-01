(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _brotliWasm = _interopRequireDefault(require("brotli-wasm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
module.exports = _brotliWasm.default;

},{"brotli-wasm":2}],2:[function(require,module,exports){
"use strict";

// This makes importing wasm-brotli asynchronous (because of dynamic import).
// This is needed here for Webpack v4 or v5 syncWebAssembly, which don't
// allow synchronous import of WebAssembly from an entrypoint.
module.exports = import("./pkg.bundler/brotli_wasm.js");

// In addition, we provide a default export with the same value, for compatibility
// with the pure ESM web bundle:
module.exports.default = module.exports;

// Without this, ts-loader gets annoyed by imports for the pure type. Clear ts-loader bug,
// but this is a quick & easy fix on our end:
module.exports.BrotliWasmType = undefined;

},{}]},{},[1]);
