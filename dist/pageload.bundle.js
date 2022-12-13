/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/imgs/pizza.jpg":
/*!****************************!*\
  !*** ./src/imgs/pizza.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a50d5ce92c9322bb23a.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/pizza.jpg */ "./src/imgs/pizza.jpg");


const content = document.querySelector(".content");

const pageLoad = function(){
    const header = document.createElement('div');

    //header start
    header.classList.add('header');
    
    const title = document.createElement('h1');
    title.textContent = "Hypothetical Italian Restaurant";
    title.classList.add('title');

    const navbar = document.createElement('div');
    navbar.classList.add('nav');

    const aboutNav = document.createElement('p');
    aboutNav.textContent = "About";
    aboutNav.classList.add('nav-btn');

    const menuNav = document.createElement('p');
    menuNav.textContent = "Menu";
    menuNav.classList.add('nav-btn');

    const contactNav = document.createElement('p');
    contactNav.textContent = "Contact us";
    contactNav.classList.add('nav-btn');
    //header end

    //image start
    const imgWrap = document.createElement('div');
    imgWrap.classList.add('img-wrap');

    const foodImg = new Image();
    foodImg.src = _imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;
    foodImg.classList.add('food');

    const imgCredit = document.createElement('a');
    imgCredit.textContent = "Photo by Chad Montano on Unsplash";
    imgCredit.href = 'https://unsplash.com/photos/MqT0asuoIcU';
    imgCredit.classList.add('credit');
    //image end

    //info start
    const info = document.createElement('div');
    info.classList.add('info');

    const infoTitle = document.createElement('h2');
    infoTitle.textContent = "Our Story";
    infoTitle.classList.add('info-title');

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrapper');

    const infoText = document.createElement('p');
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque mi. Sed ornare id orci vulputate molestie. Fusce imperdiet neque orci, vel bibendum justo porttitor id. Pellentesque efficitur tempor varius. Proin erat ipsum, pellentesque non bibendum id, tristique sed justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum purus nec purus sagittis, non facilisis quam convallis. Suspendisse sit amet eleifend turpis. Sed quam diam, fermentum a tincidunt eget, feugiat non eros. Nulla a ligula id ligula tincidunt faucibus a at massa. Integer suscipit, lectus sit amet imperdiet pellentesque, justo tellus pellentesque nisi, sit amet bibendum ligula ipsum pellentesque purus. Quisque ut justo semper, mollis orci id, vulputate lorem. Vestibulum lobortis imperdiet condimentum."
    //info end

    content.appendChild(header);
    header.appendChild(title);

    header.appendChild(navbar);
    navbar.appendChild(aboutNav);
    navbar.appendChild(menuNav);
    navbar.appendChild(contactNav);

    content.appendChild(imgWrap);
    imgWrap.appendChild(foodImg);
    imgWrap.appendChild(imgCredit);

    content.appendChild(info);
    info.appendChild(infoTitle);
    info.appendChild(textWrap);
    textWrap.appendChild(infoText);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnFDOztBQUVyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDRDQUFLO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ1pBQWdaO0FBQ2haOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgUGl6emEgZnJvbSAnLi9pbWdzL3BpenphLmpwZyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbmNvbnN0IHBhZ2VMb2FkID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vaGVhZGVyIHN0YXJ0XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSHlwb3RoZXRpY2FsIEl0YWxpYW4gUmVzdGF1cmFudFwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBhYm91dE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dE5hdi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBhYm91dE5hdi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG5cbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVOYXYudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBtZW51TmF2LmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcblxuICAgIGNvbnN0IGNvbnRhY3ROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdE5hdi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1c1wiO1xuICAgIGNvbnRhY3ROYXYuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIC8vaGVhZGVyIGVuZFxuXG4gICAgLy9pbWFnZSBzdGFydFxuICAgIGNvbnN0IGltZ1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdXcmFwLmNsYXNzTGlzdC5hZGQoJ2ltZy13cmFwJyk7XG5cbiAgICBjb25zdCBmb29kSW1nID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZEltZy5zcmMgPSBQaXp6YTtcbiAgICBmb29kSW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QnKTtcblxuICAgIGNvbnN0IGltZ0NyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpbWdDcmVkaXQudGV4dENvbnRlbnQgPSBcIlBob3RvIGJ5IENoYWQgTW9udGFubyBvbiBVbnNwbGFzaFwiO1xuICAgIGltZ0NyZWRpdC5ocmVmID0gJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9NcVQwYXN1b0ljVSc7XG4gICAgaW1nQ3JlZGl0LmNsYXNzTGlzdC5hZGQoJ2NyZWRpdCcpO1xuICAgIC8vaW1hZ2UgZW5kXG5cbiAgICAvL2luZm8gc3RhcnRcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGluZm9UaXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIFN0b3J5XCI7XG4gICAgaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm8tdGl0bGUnKTtcblxuICAgIGNvbnN0IHRleHRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dFdyYXAuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJyk7XG5cbiAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gc2VkIG5lcXVlIG1pLiBTZWQgb3JuYXJlIGlkIG9yY2kgdnVscHV0YXRlIG1vbGVzdGllLiBGdXNjZSBpbXBlcmRpZXQgbmVxdWUgb3JjaSwgdmVsIGJpYmVuZHVtIGp1c3RvIHBvcnR0aXRvciBpZC4gUGVsbGVudGVzcXVlIGVmZmljaXR1ciB0ZW1wb3IgdmFyaXVzLiBQcm9pbiBlcmF0IGlwc3VtLCBwZWxsZW50ZXNxdWUgbm9uIGJpYmVuZHVtIGlkLCB0cmlzdGlxdWUgc2VkIGp1c3RvLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgQ3VyYWJpdHVyIGVsZW1lbnR1bSBwdXJ1cyBuZWMgcHVydXMgc2FnaXR0aXMsIG5vbiBmYWNpbGlzaXMgcXVhbSBjb252YWxsaXMuIFN1c3BlbmRpc3NlIHNpdCBhbWV0IGVsZWlmZW5kIHR1cnBpcy4gU2VkIHF1YW0gZGlhbSwgZmVybWVudHVtIGEgdGluY2lkdW50IGVnZXQsIGZldWdpYXQgbm9uIGVyb3MuIE51bGxhIGEgbGlndWxhIGlkIGxpZ3VsYSB0aW5jaWR1bnQgZmF1Y2lidXMgYSBhdCBtYXNzYS4gSW50ZWdlciBzdXNjaXBpdCwgbGVjdHVzIHNpdCBhbWV0IGltcGVyZGlldCBwZWxsZW50ZXNxdWUsIGp1c3RvIHRlbGx1cyBwZWxsZW50ZXNxdWUgbmlzaSwgc2l0IGFtZXQgYmliZW5kdW0gbGlndWxhIGlwc3VtIHBlbGxlbnRlc3F1ZSBwdXJ1cy4gUXVpc3F1ZSB1dCBqdXN0byBzZW1wZXIsIG1vbGxpcyBvcmNpIGlkLCB2dWxwdXRhdGUgbG9yZW0uIFZlc3RpYnVsdW0gbG9ib3J0aXMgaW1wZXJkaWV0IGNvbmRpbWVudHVtLlwiXG4gICAgLy9pbmZvIGVuZFxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYWJvdXROYXYpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChtZW51TmF2KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltZ1dyYXApO1xuICAgIGltZ1dyYXAuYXBwZW5kQ2hpbGQoZm9vZEltZyk7XG4gICAgaW1nV3JhcC5hcHBlbmRDaGlsZChpbWdDcmVkaXQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKGluZm9UaXRsZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZCh0ZXh0V3JhcCk7XG4gICAgdGV4dFdyYXAuYXBwZW5kQ2hpbGQoaW5mb1RleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=