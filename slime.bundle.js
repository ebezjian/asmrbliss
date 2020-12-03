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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/slime/slime.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/audio/baseSlime.mp3":
/*!****************************************!*\
  !*** ./src/assets/audio/baseSlime.mp3 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/baseSlime.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL2Jhc2VTbGltZS5tcDM/MzRkYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9iYXNlU2xpbWUubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL2Jhc2VTbGltZS5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/baseSlime.mp3\n");

/***/ }),

/***/ "./src/assets/audio/baseSlime2.mp3":
/*!*****************************************!*\
  !*** ./src/assets/audio/baseSlime2.mp3 ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/baseSlime2.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL2Jhc2VTbGltZTIubXAzPzA4YWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUF1QiIsImZpbGUiOiIuL3NyYy9hc3NldHMvYXVkaW8vYmFzZVNsaW1lMi5tcDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYXVkaW8vYmFzZVNsaW1lMi5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/baseSlime2.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime1.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime1.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime1.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lMS5tcDM/ODk5MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTEubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lMS5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime1.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime2.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime2.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime2.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lMi5tcDM/NDk3YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTIubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lMi5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime2.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime3.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime3.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime3.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lMy5tcDM/NDA0MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTMubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lMy5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime3.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime4.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime4.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime4.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lNC5tcDM/NWY4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTQubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lNC5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime4.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime5.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime5.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime5.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lNS5tcDM/MTNiNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTUubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lNS5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime5.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime6.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime6.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime6.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lNi5tcDM/ZDkwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTYubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lNi5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime6.mp3\n");

/***/ }),

/***/ "./src/assets/audio/slime7.mp3":
/*!*************************************!*\
  !*** ./src/assets/audio/slime7.mp3 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/audio/slime7.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2F1ZGlvL3NsaW1lNy5tcDM/ZGI0MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9hdWRpby9zbGltZTcubXAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2F1ZGlvL3NsaW1lNy5tcDNcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/audio/slime7.mp3\n");

/***/ }),

/***/ "./src/slime/slime.js":
/*!****************************!*\
  !*** ./src/slime/slime.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_audio_baseSlime_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audio/baseSlime.mp3 */ \"./src/assets/audio/baseSlime.mp3\");\n/* harmony import */ var _assets_audio_baseSlime_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_baseSlime_mp3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_audio_baseSlime2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/audio/baseSlime2.mp3 */ \"./src/assets/audio/baseSlime2.mp3\");\n/* harmony import */ var _assets_audio_baseSlime2_mp3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_baseSlime2_mp3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_audio_slime1_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/audio/slime1.mp3 */ \"./src/assets/audio/slime1.mp3\");\n/* harmony import */ var _assets_audio_slime1_mp3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime1_mp3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_audio_slime2_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/audio/slime2.mp3 */ \"./src/assets/audio/slime2.mp3\");\n/* harmony import */ var _assets_audio_slime2_mp3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime2_mp3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_audio_slime3_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/audio/slime3.mp3 */ \"./src/assets/audio/slime3.mp3\");\n/* harmony import */ var _assets_audio_slime3_mp3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime3_mp3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_audio_slime4_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/audio/slime4.mp3 */ \"./src/assets/audio/slime4.mp3\");\n/* harmony import */ var _assets_audio_slime4_mp3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime4_mp3__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_audio_slime5_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/audio/slime5.mp3 */ \"./src/assets/audio/slime5.mp3\");\n/* harmony import */ var _assets_audio_slime5_mp3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime5_mp3__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_audio_slime6_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/audio/slime6.mp3 */ \"./src/assets/audio/slime6.mp3\");\n/* harmony import */ var _assets_audio_slime6_mp3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime6_mp3__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_audio_slime7_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/audio/slime7.mp3 */ \"./src/assets/audio/slime7.mp3\");\n/* harmony import */ var _assets_audio_slime7_mp3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_audio_slime7_mp3__WEBPACK_IMPORTED_MODULE_8__);\n// import audio\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById('canvas1');\r\nconst ctx = canvas.getContext('2d');\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\nlet particleArray = [];\r\n\r\nlet audio = new Audio(_assets_audio_baseSlime_mp3__WEBPACK_IMPORTED_MODULE_0___default.a);\r\nlet audio0 = new Audio(_assets_audio_baseSlime2_mp3__WEBPACK_IMPORTED_MODULE_1___default.a);\r\nlet audio1 = new Audio(_assets_audio_slime1_mp3__WEBPACK_IMPORTED_MODULE_2___default.a);\r\nlet audio2 = new Audio(_assets_audio_slime2_mp3__WEBPACK_IMPORTED_MODULE_3___default.a);\r\nlet audio3 = new Audio(_assets_audio_slime3_mp3__WEBPACK_IMPORTED_MODULE_4___default.a);\r\nlet audio4 = new Audio(_assets_audio_slime4_mp3__WEBPACK_IMPORTED_MODULE_5___default.a);\r\nlet audio5 = new Audio(_assets_audio_slime5_mp3__WEBPACK_IMPORTED_MODULE_6___default.a);\r\nlet audio6 = new Audio(_assets_audio_slime6_mp3__WEBPACK_IMPORTED_MODULE_7___default.a);\r\nlet audio7 = new Audio(_assets_audio_slime7_mp3__WEBPACK_IMPORTED_MODULE_8___default.a);\r\nlet audioArray = [audio1, audio2, audio3, audio4, audio5, audio6, audio7];\r\n\r\nlet isMoving = false;\r\nlet x = 0;\r\nlet y = 0;\r\n\r\nconst mouse = {\r\n  x: null,\r\n  y: null,\r\n  radius: 100\r\n};\r\n\r\ncanvas.addEventListener('mousedown', function (event) {\r\n  x = event.offsetX;\r\n  y = event.offsetY;\r\n  isMoving = true;\r\n  audio0.play();\r\n});\r\n\r\ncanvas.addEventListener('mousemove', function (event) {\r\n  if (isMoving == true) {\r\n    requestAnimationFrame(animate);\r\n    animate();\r\n    mouse.x = event.x;\r\n    mouse.y = event.y;\r\n    let rando = Math.floor(Math.random() * Math.floor(7));\r\n    audioArray[rando].play();\r\n  }\r\n});\r\n\r\nwindow.addEventListener('mouseup', function () {\r\n  if (isMoving === true) {\r\n    animate();\r\n    audio.pause();\r\n    x = 0;\r\n    y = 0;\r\n    isMoving = false;\r\n    audio0.pause();\r\n  }\r\n});\r\n\r\nclass Particle {\r\n  constructor(x, y, color) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.size = 5;\r\n    this.baseX = this.x;\r\n    this.baseY = this.y;\r\n    this.density = (Math.random() * 40) + 5;\r\n    this.color = color;\r\n  }\r\n\r\n  draw() {\r\n    ctx.fillStyle = this.color;\r\n    ctx.beginPath();\r\n    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);\r\n    ctx.closePath();\r\n    ctx.fill();\r\n  }\r\n\r\n  update() {\r\n    let dx = mouse.x - this.x;\r\n    let dy = mouse.y - this.y;\r\n    let distance = Math.sqrt(dx * dx + dy * dy);\r\n    let forceDirectionX = dx / distance;\r\n    let forceDirectionY = dy / distance;\r\n    let maxDistance = mouse.radius;\r\n    let force = (maxDistance - distance) / maxDistance;\r\n    let directionX = forceDirectionX * force * this.density;\r\n    let directionY = forceDirectionY * force * this.density;\r\n\r\n    if (distance < mouse.radius) {\r\n      this.x -= directionX;\r\n      this.y -= directionY;\r\n\r\n    } else {\r\n      if (this.x !== this.baseX) {\r\n        let dx = this.x - this.baseX;\r\n        this.x -= dx / 10;\r\n      }\r\n      if (this.y !== this.basey) {\r\n        let dy = this.y - this.baseY;\r\n        this.y -= dy / 10;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction init() {\r\n  particleArray = [];\r\n  for (let i = 0; i < 15000; i++) {\r\n    let random = Math.floor(Math.random() * Math.floor(5));\r\n    let colorArray = ['coral', 'gold', 'blueviolet', 'aqua', 'magenta']\r\n    let color = colorArray[random];\r\n    let x = Math.random() * canvas.width;\r\n    let y = Math.random() * canvas.height;\r\n    particleArray.push(new Particle(x, y, color));\r\n  }\r\n}\r\ninit();\r\n\r\nfunction animate() {\r\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n  for (let i = 0; i < particleArray.length; i++) {\r\n    particleArray[i].draw();\r\n    particleArray[i].update();\r\n  }\r\n}\r\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpbWUvc2xpbWUuanM/ZWEzZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3NEO0FBQ0U7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isa0VBQVM7QUFDL0IsdUJBQXVCLG1FQUFVO0FBQ2pDLHVCQUF1QiwrREFBTTtBQUM3Qix1QkFBdUIsK0RBQU07QUFDN0IsdUJBQXVCLCtEQUFNO0FBQzdCLHVCQUF1QiwrREFBTTtBQUM3Qix1QkFBdUIsK0RBQU07QUFDN0IsdUJBQXVCLCtEQUFNO0FBQzdCLHVCQUF1QiwrREFBTTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsV0FBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9zbGltZS9zbGltZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhdWRpb1xyXG5pbXBvcnQgYmFzZVNsaW1lIGZyb20gJy4uL2Fzc2V0cy9hdWRpby9iYXNlU2xpbWUubXAzJztcclxuaW1wb3J0IGJhc2VTbGltZTIgZnJvbSAnLi4vYXNzZXRzL2F1ZGlvL2Jhc2VTbGltZTIubXAzJztcclxuaW1wb3J0IHNsaW1lMSBmcm9tICcuLi9hc3NldHMvYXVkaW8vc2xpbWUxLm1wMyc7XHJcbmltcG9ydCBzbGltZTIgZnJvbSAnLi4vYXNzZXRzL2F1ZGlvL3NsaW1lMi5tcDMnO1xyXG5pbXBvcnQgc2xpbWUzIGZyb20gJy4uL2Fzc2V0cy9hdWRpby9zbGltZTMubXAzJztcclxuaW1wb3J0IHNsaW1lNCBmcm9tICcuLi9hc3NldHMvYXVkaW8vc2xpbWU0Lm1wMyc7XHJcbmltcG9ydCBzbGltZTUgZnJvbSAnLi4vYXNzZXRzL2F1ZGlvL3NsaW1lNS5tcDMnO1xyXG5pbXBvcnQgc2xpbWU2IGZyb20gJy4uL2Fzc2V0cy9hdWRpby9zbGltZTYubXAzJztcclxuaW1wb3J0IHNsaW1lNyBmcm9tICcuLi9hc3NldHMvYXVkaW8vc2xpbWU3Lm1wMyc7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzMScpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbmxldCBwYXJ0aWNsZUFycmF5ID0gW107XHJcblxyXG5sZXQgYXVkaW8gPSBuZXcgQXVkaW8oYmFzZVNsaW1lKTtcclxubGV0IGF1ZGlvMCA9IG5ldyBBdWRpbyhiYXNlU2xpbWUyKTtcclxubGV0IGF1ZGlvMSA9IG5ldyBBdWRpbyhzbGltZTEpO1xyXG5sZXQgYXVkaW8yID0gbmV3IEF1ZGlvKHNsaW1lMik7XHJcbmxldCBhdWRpbzMgPSBuZXcgQXVkaW8oc2xpbWUzKTtcclxubGV0IGF1ZGlvNCA9IG5ldyBBdWRpbyhzbGltZTQpO1xyXG5sZXQgYXVkaW81ID0gbmV3IEF1ZGlvKHNsaW1lNSk7XHJcbmxldCBhdWRpbzYgPSBuZXcgQXVkaW8oc2xpbWU2KTtcclxubGV0IGF1ZGlvNyA9IG5ldyBBdWRpbyhzbGltZTcpO1xyXG5sZXQgYXVkaW9BcnJheSA9IFthdWRpbzEsIGF1ZGlvMiwgYXVkaW8zLCBhdWRpbzQsIGF1ZGlvNSwgYXVkaW82LCBhdWRpbzddO1xyXG5cclxubGV0IGlzTW92aW5nID0gZmFsc2U7XHJcbmxldCB4ID0gMDtcclxubGV0IHkgPSAwO1xyXG5cclxuY29uc3QgbW91c2UgPSB7XHJcbiAgeDogbnVsbCxcclxuICB5OiBudWxsLFxyXG4gIHJhZGl1czogMTAwXHJcbn07XHJcblxyXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgeCA9IGV2ZW50Lm9mZnNldFg7XHJcbiAgeSA9IGV2ZW50Lm9mZnNldFk7XHJcbiAgaXNNb3ZpbmcgPSB0cnVlO1xyXG4gIGF1ZGlvMC5wbGF5KCk7XHJcbn0pO1xyXG5cclxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGlmIChpc01vdmluZyA9PSB0cnVlKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICBhbmltYXRlKCk7XHJcbiAgICBtb3VzZS54ID0gZXZlbnQueDtcclxuICAgIG1vdXNlLnkgPSBldmVudC55O1xyXG4gICAgbGV0IHJhbmRvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig3KSk7XHJcbiAgICBhdWRpb0FycmF5W3JhbmRvXS5wbGF5KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmIChpc01vdmluZyA9PT0gdHJ1ZSkge1xyXG4gICAgYW5pbWF0ZSgpO1xyXG4gICAgYXVkaW8ucGF1c2UoKTtcclxuICAgIHggPSAwO1xyXG4gICAgeSA9IDA7XHJcbiAgICBpc01vdmluZyA9IGZhbHNlO1xyXG4gICAgYXVkaW8wLnBhdXNlKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNsYXNzIFBhcnRpY2xlIHtcclxuICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvcikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnNpemUgPSA1O1xyXG4gICAgdGhpcy5iYXNlWCA9IHRoaXMueDtcclxuICAgIHRoaXMuYmFzZVkgPSB0aGlzLnk7XHJcbiAgICB0aGlzLmRlbnNpdHkgPSAoTWF0aC5yYW5kb20oKSAqIDQwKSArIDU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBsZXQgZHggPSBtb3VzZS54IC0gdGhpcy54O1xyXG4gICAgbGV0IGR5ID0gbW91c2UueSAtIHRoaXMueTtcclxuICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICBsZXQgZm9yY2VEaXJlY3Rpb25YID0gZHggLyBkaXN0YW5jZTtcclxuICAgIGxldCBmb3JjZURpcmVjdGlvblkgPSBkeSAvIGRpc3RhbmNlO1xyXG4gICAgbGV0IG1heERpc3RhbmNlID0gbW91c2UucmFkaXVzO1xyXG4gICAgbGV0IGZvcmNlID0gKG1heERpc3RhbmNlIC0gZGlzdGFuY2UpIC8gbWF4RGlzdGFuY2U7XHJcbiAgICBsZXQgZGlyZWN0aW9uWCA9IGZvcmNlRGlyZWN0aW9uWCAqIGZvcmNlICogdGhpcy5kZW5zaXR5O1xyXG4gICAgbGV0IGRpcmVjdGlvblkgPSBmb3JjZURpcmVjdGlvblkgKiBmb3JjZSAqIHRoaXMuZGVuc2l0eTtcclxuXHJcbiAgICBpZiAoZGlzdGFuY2UgPCBtb3VzZS5yYWRpdXMpIHtcclxuICAgICAgdGhpcy54IC09IGRpcmVjdGlvblg7XHJcbiAgICAgIHRoaXMueSAtPSBkaXJlY3Rpb25ZO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnggIT09IHRoaXMuYmFzZVgpIHtcclxuICAgICAgICBsZXQgZHggPSB0aGlzLnggLSB0aGlzLmJhc2VYO1xyXG4gICAgICAgIHRoaXMueCAtPSBkeCAvIDEwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnkgIT09IHRoaXMuYmFzZXkpIHtcclxuICAgICAgICBsZXQgZHkgPSB0aGlzLnkgLSB0aGlzLmJhc2VZO1xyXG4gICAgICAgIHRoaXMueSAtPSBkeSAvIDEwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHBhcnRpY2xlQXJyYXkgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDAwOyBpKyspIHtcclxuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDUpKTtcclxuICAgIGxldCBjb2xvckFycmF5ID0gWydjb3JhbCcsICdnb2xkJywgJ2JsdWV2aW9sZXQnLCAnYXF1YScsICdtYWdlbnRhJ11cclxuICAgIGxldCBjb2xvciA9IGNvbG9yQXJyYXlbcmFuZG9tXTtcclxuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcclxuICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBwYXJ0aWNsZUFycmF5LnB1c2gobmV3IFBhcnRpY2xlKHgsIHksIGNvbG9yKSk7XHJcbiAgfVxyXG59XHJcbmluaXQoKTtcclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgcGFydGljbGVBcnJheVtpXS5kcmF3KCk7XHJcbiAgICBwYXJ0aWNsZUFycmF5W2ldLnVwZGF0ZSgpO1xyXG4gIH1cclxufVxyXG5hbmltYXRlKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slime/slime.js\n");

/***/ })

/******/ });