/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/pizza.jpg */ "./src/imgs/pizza.jpg");



const loadAbout = function(){

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //img start
    const imgWrap = document.createElement('div');
    imgWrap.classList.add('img-wrap');

    const foodImg = new Image();
    foodImg.src = _imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;
    foodImg.classList.add('food');

    const infoTitle = document.createElement('p');
    infoTitle.textContent = "WELCOME";
    infoTitle.classList.add('info-title');


    const imgCredit = document.createElement('a');
    imgCredit.textContent = "Photo by Chad Montano on Unsplash";
    imgCredit.href = 'https://unsplash.com/photos/MqT0asuoIcU';
    imgCredit.classList.add('credit');
    //img end


    const info = document.createElement('div');
    info.classList.add('info');

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrapper');

    const infoText = document.createElement('p');
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque mi. Sed ornare id orci vulputate molestie. Fusce imperdiet neque orci, vel bibendum justo porttitor id. Pellentesque efficitur tempor varius. Proin erat ipsum, pellentesque non bibendum id, tristique sed justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum purus nec purus sagittis, non facilisis quam convallis. Suspendisse sit amet eleifend turpis. Sed quam diam, fermentum a tincidunt eget, feugiat non eros. Nulla a ligula id ligula tincidunt faucibus a at massa. Integer suscipit, lectus sit amet imperdiet pellentesque, justo tellus pellentesque nisi, sit amet bibendum ligula ipsum pellentesque purus. Quisque ut justo semper, mollis orci id, vulputate lorem. Vestibulum lobortis imperdiet condimentum."

    pageContent.appendChild(imgWrap);
    imgWrap.appendChild(foodImg);
    imgWrap.appendChild(infoTitle);
    imgWrap.appendChild(imgCredit);


    pageContent.appendChild(info);
    info.appendChild(textWrap);
    textWrap.appendChild(infoText);

    return pageContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const loadMenu = function(){
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const info = document.createElement('div');
    info.classList.add('info');

    const infoTitle = document.createElement('h2');
    infoTitle.textContent = "Menu";
    infoTitle.classList.add('info-title');

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrapper');

    const infoText = document.createElement('p');
    infoText.textContent = "placeholder"

    pageContent.appendChild(info);
    info.appendChild(infoTitle);
    info.appendChild(textWrap);
    textWrap.appendChild(infoText);

    return pageContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

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
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




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
    aboutNav.id = 'about-nav';

    const menuNav = document.createElement('p');
    menuNav.textContent = "Menu";
    menuNav.classList.add('nav-btn');
    menuNav.id = 'menu-nav';

    const contactNav = document.createElement('p');
    contactNav.textContent = "Contact us";
    contactNav.classList.add('nav-btn');
    contactNav.id = 'contact-nav';
    //header end


    //info start
    const pageContent = (0,_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

     //info end

    content.appendChild(header);
    header.appendChild(title);

    header.appendChild(navbar);
    navbar.appendChild(aboutNav);
    navbar.appendChild(menuNav);
    navbar.appendChild(contactNav);



    content.appendChild(pageContent);
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxQzs7O0FBR3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDRDQUFLO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ1pBQWdaOztBQUVoWjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQztBQUNGO0FBQ0g7O0FBRWhDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSx3QkFBd0IscURBQVM7O0FBRWpDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBpenphIGZyb20gJy4vaW1ncy9waXp6YS5qcGcnO1xuXG5cbmNvbnN0IGxvYWRBYm91dCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcpO1xuXG4gICAgLy9pbWcgc3RhcnRcbiAgICBjb25zdCBpbWdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nV3JhcC5jbGFzc0xpc3QuYWRkKCdpbWctd3JhcCcpO1xuXG4gICAgY29uc3QgZm9vZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2RJbWcuc3JjID0gUGl6emE7XG4gICAgZm9vZEltZy5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG5cbiAgICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJXRUxDT01FXCI7XG4gICAgaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm8tdGl0bGUnKTtcblxuXG4gICAgY29uc3QgaW1nQ3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGltZ0NyZWRpdC50ZXh0Q29udGVudCA9IFwiUGhvdG8gYnkgQ2hhZCBNb250YW5vIG9uIFVuc3BsYXNoXCI7XG4gICAgaW1nQ3JlZGl0LmhyZWYgPSAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL01xVDBhc3VvSWNVJztcbiAgICBpbWdDcmVkaXQuY2xhc3NMaXN0LmFkZCgnY3JlZGl0Jyk7XG4gICAgLy9pbWcgZW5kXG5cblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IHRleHRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dFdyYXAuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJyk7XG5cbiAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gc2VkIG5lcXVlIG1pLiBTZWQgb3JuYXJlIGlkIG9yY2kgdnVscHV0YXRlIG1vbGVzdGllLiBGdXNjZSBpbXBlcmRpZXQgbmVxdWUgb3JjaSwgdmVsIGJpYmVuZHVtIGp1c3RvIHBvcnR0aXRvciBpZC4gUGVsbGVudGVzcXVlIGVmZmljaXR1ciB0ZW1wb3IgdmFyaXVzLiBQcm9pbiBlcmF0IGlwc3VtLCBwZWxsZW50ZXNxdWUgbm9uIGJpYmVuZHVtIGlkLCB0cmlzdGlxdWUgc2VkIGp1c3RvLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgQ3VyYWJpdHVyIGVsZW1lbnR1bSBwdXJ1cyBuZWMgcHVydXMgc2FnaXR0aXMsIG5vbiBmYWNpbGlzaXMgcXVhbSBjb252YWxsaXMuIFN1c3BlbmRpc3NlIHNpdCBhbWV0IGVsZWlmZW5kIHR1cnBpcy4gU2VkIHF1YW0gZGlhbSwgZmVybWVudHVtIGEgdGluY2lkdW50IGVnZXQsIGZldWdpYXQgbm9uIGVyb3MuIE51bGxhIGEgbGlndWxhIGlkIGxpZ3VsYSB0aW5jaWR1bnQgZmF1Y2lidXMgYSBhdCBtYXNzYS4gSW50ZWdlciBzdXNjaXBpdCwgbGVjdHVzIHNpdCBhbWV0IGltcGVyZGlldCBwZWxsZW50ZXNxdWUsIGp1c3RvIHRlbGx1cyBwZWxsZW50ZXNxdWUgbmlzaSwgc2l0IGFtZXQgYmliZW5kdW0gbGlndWxhIGlwc3VtIHBlbGxlbnRlc3F1ZSBwdXJ1cy4gUXVpc3F1ZSB1dCBqdXN0byBzZW1wZXIsIG1vbGxpcyBvcmNpIGlkLCB2dWxwdXRhdGUgbG9yZW0uIFZlc3RpYnVsdW0gbG9ib3J0aXMgaW1wZXJkaWV0IGNvbmRpbWVudHVtLlwiXG5cbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChpbWdXcmFwKTtcbiAgICBpbWdXcmFwLmFwcGVuZENoaWxkKGZvb2RJbWcpO1xuICAgIGltZ1dyYXAuYXBwZW5kQ2hpbGQoaW5mb1RpdGxlKTtcbiAgICBpbWdXcmFwLmFwcGVuZENoaWxkKGltZ0NyZWRpdCk7XG5cblxuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQodGV4dFdyYXApO1xuICAgIHRleHRXcmFwLmFwcGVuZENoaWxkKGluZm9UZXh0KTtcblxuICAgIHJldHVybiBwYWdlQ29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0OyIsIlxuXG5jb25zdCBsb2FkTWVudSA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm8tdGl0bGUnKTtcblxuICAgIGNvbnN0IHRleHRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dFdyYXAuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJyk7XG5cbiAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IFwicGxhY2Vob2xkZXJcIlxuXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChpbmZvVGl0bGUpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQodGV4dFdyYXApO1xuICAgIHRleHRXcmFwLmFwcGVuZENoaWxkKGluZm9UZXh0KTtcblxuICAgIHJldHVybiBwYWdlQ29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFBpenphIGZyb20gJy4vaW1ncy9waXp6YS5qcGcnO1xuaW1wb3J0IGxvYWRBYm91dCBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbmNvbnN0IHBhZ2VMb2FkID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vaGVhZGVyIHN0YXJ0XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSHlwb3RoZXRpY2FsIEl0YWxpYW4gUmVzdGF1cmFudFwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBhYm91dE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dE5hdi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBhYm91dE5hdi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgYWJvdXROYXYuaWQgPSAnYWJvdXQtbmF2JztcblxuICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudU5hdi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnVOYXYuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIG1lbnVOYXYuaWQgPSAnbWVudS1uYXYnO1xuXG4gICAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0TmF2LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCI7XG4gICAgY29udGFjdE5hdi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdE5hdi5pZCA9ICdjb250YWN0LW5hdic7XG4gICAgLy9oZWFkZXIgZW5kXG5cblxuICAgIC8vaW5mbyBzdGFydFxuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gbG9hZEFib3V0KCk7XG5cbiAgICAgLy9pbmZvIGVuZFxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYWJvdXROYXYpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChtZW51TmF2KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XG5cblxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==