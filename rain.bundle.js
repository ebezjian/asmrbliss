/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/asmrbliss/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rain/rain.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/audio/rain.mp3":
/*!***********************************!*\
  !*** ./src/assets/audio/rain.mp3 ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/rain.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3JhaW4ubXAzP2VhM2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUF1QiIsImZpbGUiOiIuL3NyYy9hc3NldHMvYXVkaW8vcmFpbi5tcDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYXVkaW8vcmFpbi5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/rain.mp3\n");

/***/ }),

/***/ "./src/rain/rain.js":
/*!**************************!*\
  !*** ./src/rain/rain.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audio/rain.mp3 */ \"./src/assets/audio/rain.mp3\");\n/* harmony import */ var _assets_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet c = document.getElementById(\"canvas\");\r\nc.width = window.innerWidth;\r\nc.height = window.innerHeight;\r\nlet ctx = c.getContext(\"2d\");\r\nlet vRain = [];\r\nlet audio = new Audio(_assets_audio_rain_mp3__WEBPACK_IMPORTED_MODULE_0___default.a);\r\naudio.loop = true;\r\n\r\nclass Rain {\r\n  constructor(x, y, v, l,) { \r\n    this.x = x;\r\n    this.y = y;\r\n    this.v = v;\r\n    this.l = l;\r\n  }\r\n  show() { \r\n    ctx.strokeStyle = 'white';\r\n    ctx.beginPath();\r\n    ctx.moveTo(this.x, this.y); \r\n    ctx.lineTo(this.x, this.y + this.l); \r\n    ctx.stroke();\r\n  }\r\n\r\n  fall() {\r\n    this.y += this.v;\r\n    if (this.y > c.height) {\r\n      this.x = Math.floor(Math.random() * c.width) + 5;\r\n      this.y = Math.floor(Math.random() * 100) - 100;\r\n      this.l = Math.floor(Math.random() * 30) + 1;\r\n      this.v = Math.floor(Math.random() * 12) + 4;\r\n    }\r\n  }\r\n\r\n}\r\nfunction loop() {\r\n  ctx.clearRect(0, 0, c.width, c.height);\r\n  for (var i = 0; i < vRain.length; i++) {\r\n    vRain[i].show();\r\n    vRain[i].fall();\r\n  }\r\n}\r\nfunction setup() {\r\n\r\n  for (var i = 0; i < 60; i++) {\r\n    vRain[i] = new Rain(\r\n      Math.floor(Math.random() * c.width) + 5,\r\n      Math.floor(Math.random() * 100) - 100,\r\n      Math.floor(Math.random() * 30) + 1,\r\n      Math.floor(Math.random() * 12) + 4,\r\n    );\r\n  }\r\n  setInterval(loop, 7);\r\n}\r\nsetup();\r\naudio.play();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmFpbi9yYWluLmpzPzAxMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCOztBQUVBO0FBQ0EsNEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVTtBQUNBO0FBQ0E7QUFDQSwrQjtBQUNBLHdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcmFpbi9yYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJhaW4gZnJvbSBcIi4uL2Fzc2V0cy9hdWRpby9yYWluLm1wM1wiXHJcblxyXG5sZXQgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG5jLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5sZXQgY3R4ID0gYy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmxldCB2UmFpbiA9IFtdO1xyXG5sZXQgYXVkaW8gPSBuZXcgQXVkaW8ocmFpbik7XHJcbmF1ZGlvLmxvb3AgPSB0cnVlO1xyXG5cclxuY2xhc3MgUmFpbiB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgdiwgbCwpIHsgXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMudiA9IHY7XHJcbiAgICB0aGlzLmwgPSBsO1xyXG4gIH1cclxuICBzaG93KCkgeyBcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKHRoaXMueCwgdGhpcy55KTsgXHJcbiAgICBjdHgubGluZVRvKHRoaXMueCwgdGhpcy55ICsgdGhpcy5sKTsgXHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBmYWxsKCkge1xyXG4gICAgdGhpcy55ICs9IHRoaXMudjtcclxuICAgIGlmICh0aGlzLnkgPiBjLmhlaWdodCkge1xyXG4gICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjLndpZHRoKSArIDU7XHJcbiAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgLSAxMDA7XHJcbiAgICAgIHRoaXMubCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSArIDE7XHJcbiAgICAgIHRoaXMudiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyKSArIDQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5mdW5jdGlvbiBsb29wKCkge1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdlJhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgIHZSYWluW2ldLnNob3coKTtcclxuICAgIHZSYWluW2ldLmZhbGwoKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0dXAoKSB7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNjA7IGkrKykge1xyXG4gICAgdlJhaW5baV0gPSBuZXcgUmFpbihcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYy53aWR0aCkgKyA1LFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIC0gMTAwLFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCkgKyAxLFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMikgKyA0LFxyXG4gICAgKTtcclxuICB9XHJcbiAgc2V0SW50ZXJ2YWwobG9vcCwgNyk7XHJcbn1cclxuc2V0dXAoKTtcclxuYXVkaW8ucGxheSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/rain/rain.js\n");

/***/ })

/******/ });