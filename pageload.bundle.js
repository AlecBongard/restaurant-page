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
/* harmony import */ var _imgs_pizza_full_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/pizza_full.jpg */ "./src/imgs/pizza_full.jpg");
/* harmony import */ var _imgs_chef1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/chef1.jpg */ "./src/imgs/chef1.jpg");
/* harmony import */ var _imgs_chef2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/chef2.jpg */ "./src/imgs/chef2.jpg");





const loadAbout = function(){

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //img start
    const imgWrap = document.createElement('div');
    imgWrap.classList.add('img-wrap');

    const foodImg = new Image();
    foodImg.src = _imgs_pizza_full_jpg__WEBPACK_IMPORTED_MODULE_0__;
    foodImg.classList.add('food');

    const infoTitle = document.createElement('p');
    infoTitle.textContent = "BENVENUTI";
    infoTitle.classList.add('info-title');

    const imgCredit = makeCred("Chad Montano", 'https://unsplash.com/photos/MqT0asuoIcU')
    imgCredit.classList.add('credit');
    //img end

    const textTitle = document.createElement('p');
    textTitle.classList.add('text-title');
    textTitle.textContent = "About us"

    const info = document.createElement('div');
    info.classList.add('info');

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrapper');

    const infoText = document.createElement('p');
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque mi. Sed ornare id orci vulputate molestie. Fusce imperdiet neque orci, vel bibendum justo porttitor id. Pellentesque efficitur tempor varius. Proin erat ipsum, pellentesque non bibendum id, tristique sed justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum purus nec purus sagittis, non facilisis quam convallis. Suspendisse sit amet eleifend turpis. Sed quam diam, fermentum a tincidunt eget, feugiat non eros. Nulla a ligula id ligula tincidunt faucibus a at massa. Integer suscipit, lectus sit amet imperdiet pellentesque, justo tellus pellentesque nisi, sit amet bibendum ligula ipsum pellentesque purus. Quisque ut justo semper, mollis orci id, vulputate lorem. Vestibulum lobortis imperdiet condimentum."

    const staffTitle = document.createElement('p');
    staffTitle.classList.add('text-title');
    staffTitle.textContent = "Meet our Chefs"

    const staffWrap = document.createElement('div');
    staffWrap.classList.add('staff-wrapper');

    const chef1Cred = makeCred("Louis Hansel", 'https://unsplash.com/photos/v3OlBE6-fhU');
    chef1Cred.prepend("Left ")

    const chef2Cred = makeCred("Febrian Zakaria", 'https://unsplash.com/photos/SiQgni-cqFg');
    chef2Cred.prepend("Right ")

    const staff1 = new Image();
    staff1.src = _imgs_chef1_jpg__WEBPACK_IMPORTED_MODULE_1__;
    const staff2 = new Image();
    staff2.src = _imgs_chef2_jpg__WEBPACK_IMPORTED_MODULE_2__;

    staff1.classList.add('staff-img');
    staff2.classList.add('staff-img');

    staffWrap.appendChild(staff1);
    staffWrap.appendChild(staff2);

    const staffInfo = document.createElement('p');
    staffInfo.textContent = "Nam efficitur nunc ac elit porta blandit. Cras dui nibh, auctor non viverra in, imperdiet at ex. Donec aliquam vehicula magna et pretium. Fusce eget ex at erat lacinia dignissim sit amet non erat. Sed fermentum iaculis lacus at imperdiet. Duis fermentum finibus elementum. Duis finibus dictum orci, et blandit ligula. Suspendisse ut ornare leo, in bibendum orci."



    pageContent.appendChild(imgWrap);
    imgWrap.appendChild(foodImg);
    imgWrap.appendChild(infoTitle);
    imgWrap.appendChild(imgCredit);



    pageContent.appendChild(info);
    textWrap.appendChild(textTitle);
    info.appendChild(textWrap);
    textWrap.appendChild(infoText);
    textWrap.appendChild(staffTitle);
    textWrap.appendChild(staffWrap);
    textWrap.appendChild(chef1Cred);
    textWrap.appendChild(chef2Cred);
    textWrap.appendChild(staffInfo);


    return pageContent;
}

const makeCred = function(author, url){
    const unsplash = document.createElement('a');
    unsplash.href="https://unsplash.com/";
    unsplash.textContent = "Unsplash";

    const credit = document.createElement('p');
    const link = document.createElement('a');
    link.textContent = author;
    link.href = url;

    credit.textContent = "Photo by ";
    credit.appendChild(link);
    credit.append(" on ");
    credit.append(unsplash);

    return credit;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/imgs/chef1.jpg":
/*!****************************!*\
  !*** ./src/imgs/chef1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c692106c673cf74b4d0b.jpg";

/***/ }),

/***/ "./src/imgs/chef2.jpg":
/*!****************************!*\
  !*** ./src/imgs/chef2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdade554cb0ef0285de5.jpg";

/***/ }),

/***/ "./src/imgs/pizza_full.jpg":
/*!*********************************!*\
  !*** ./src/imgs/pizza_full.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67f474f0beae80cbdbbf.jpg";

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
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ "./src/about.js");



const content = document.querySelector(".content");

const pageLoad = function(){
    const header = document.createElement('div');

    //header start
    header.classList.add('header');
    
    const title = document.createElement('p');
    title.textContent = "Italian Restaurant";
    title.classList.add('title');

    const navbar = document.createElement('div');
    navbar.classList.add('nav');

    const aboutWrap = document.createElement('div');
    aboutWrap.classList.add('nav-wrap');

    const aboutNav = document.createElement('p');
    aboutNav.textContent = "About";
    aboutNav.classList.add('nav-btn');
    aboutNav.id = 'about-nav';

    const menuWrap = document.createElement('div');
    menuWrap.classList.add('nav-wrap');

    const menuNav = document.createElement('p');
    menuNav.textContent = "Menu";
    menuNav.classList.add('nav-btn');
    menuNav.id = 'menu-nav';

    const contactWrap = document.createElement('div')
    contactWrap.classList.add('nav-wrap');

    const contactNav = document.createElement('p');
    contactNav.textContent = "Contact us";
    contactNav.classList.add('nav-btn');
    contactNav.id = 'contact-nav';
    //header end

    //footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const authorText = document.createElement('p');
    authorText.textContent = "Made by ";

    const author = document.createElement('a');
    author.textContent = "Alec Bongard";
    author.href="https://github.com/AlecBongard/restaurant-page";

    authorText.append(author);

    footer.appendChild(authorText);


    const pageContent = (0,_about_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


    content.appendChild(header);
    header.appendChild(title);

    header.appendChild(navbar);

    navbar.append(aboutWrap)
    aboutWrap.appendChild(aboutNav);

    navbar.append(menuWrap)
    menuWrap.appendChild(menuNav);

    navbar.appendChild(contactWrap)
    contactWrap.appendChild(contactNav);



    content.appendChild(pageContent);
    content.appendChild(footer);
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0w7QUFDQTs7O0FBR3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlEQUFLO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdaQUFnWjs7QUFFaFo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDRDQUFLO0FBQ3RCO0FBQ0EsaUJBQWlCLDRDQUFLOztBQUV0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0d4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZm1DOzs7QUFHbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0Esd0JBQXdCLHFEQUFTOzs7QUFHakM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaXp6YSBmcm9tICcuL2ltZ3MvcGl6emFfZnVsbC5qcGcnO1xuaW1wb3J0IENoZWYxIGZyb20gJy4vaW1ncy9jaGVmMS5qcGcnO1xuaW1wb3J0IENoZWYyIGZyb20gJy4vaW1ncy9jaGVmMi5qcGcnO1xuXG5cbmNvbnN0IGxvYWRBYm91dCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcpO1xuXG4gICAgLy9pbWcgc3RhcnRcbiAgICBjb25zdCBpbWdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nV3JhcC5jbGFzc0xpc3QuYWRkKCdpbWctd3JhcCcpO1xuXG4gICAgY29uc3QgZm9vZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2RJbWcuc3JjID0gUGl6emE7XG4gICAgZm9vZEltZy5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG5cbiAgICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJCRU5WRU5VVElcIjtcbiAgICBpbmZvVGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5mby10aXRsZScpO1xuXG4gICAgY29uc3QgaW1nQ3JlZGl0ID0gbWFrZUNyZWQoXCJDaGFkIE1vbnRhbm9cIiwgJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9NcVQwYXN1b0ljVScpXG4gICAgaW1nQ3JlZGl0LmNsYXNzTGlzdC5hZGQoJ2NyZWRpdCcpO1xuICAgIC8vaW1nIGVuZFxuXG4gICAgY29uc3QgdGV4dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXRpdGxlJyk7XG4gICAgdGV4dFRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCB1c1wiXG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG5cbiAgICBjb25zdCB0ZXh0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRXcmFwLmNsYXNzTGlzdC5hZGQoJ3RleHQtd3JhcHBlcicpO1xuXG4gICAgY29uc3QgaW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5mb1RleHQudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHNlZCBuZXF1ZSBtaS4gU2VkIG9ybmFyZSBpZCBvcmNpIHZ1bHB1dGF0ZSBtb2xlc3RpZS4gRnVzY2UgaW1wZXJkaWV0IG5lcXVlIG9yY2ksIHZlbCBiaWJlbmR1bSBqdXN0byBwb3J0dGl0b3IgaWQuIFBlbGxlbnRlc3F1ZSBlZmZpY2l0dXIgdGVtcG9yIHZhcml1cy4gUHJvaW4gZXJhdCBpcHN1bSwgcGVsbGVudGVzcXVlIG5vbiBiaWJlbmR1bSBpZCwgdHJpc3RpcXVlIHNlZCBqdXN0by4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IEN1cmFiaXR1ciBlbGVtZW50dW0gcHVydXMgbmVjIHB1cnVzIHNhZ2l0dGlzLCBub24gZmFjaWxpc2lzIHF1YW0gY29udmFsbGlzLiBTdXNwZW5kaXNzZSBzaXQgYW1ldCBlbGVpZmVuZCB0dXJwaXMuIFNlZCBxdWFtIGRpYW0sIGZlcm1lbnR1bSBhIHRpbmNpZHVudCBlZ2V0LCBmZXVnaWF0IG5vbiBlcm9zLiBOdWxsYSBhIGxpZ3VsYSBpZCBsaWd1bGEgdGluY2lkdW50IGZhdWNpYnVzIGEgYXQgbWFzc2EuIEludGVnZXIgc3VzY2lwaXQsIGxlY3R1cyBzaXQgYW1ldCBpbXBlcmRpZXQgcGVsbGVudGVzcXVlLCBqdXN0byB0ZWxsdXMgcGVsbGVudGVzcXVlIG5pc2ksIHNpdCBhbWV0IGJpYmVuZHVtIGxpZ3VsYSBpcHN1bSBwZWxsZW50ZXNxdWUgcHVydXMuIFF1aXNxdWUgdXQganVzdG8gc2VtcGVyLCBtb2xsaXMgb3JjaSBpZCwgdnVscHV0YXRlIGxvcmVtLiBWZXN0aWJ1bHVtIGxvYm9ydGlzIGltcGVyZGlldCBjb25kaW1lbnR1bS5cIlxuXG4gICAgY29uc3Qgc3RhZmZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdGFmZlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtdGl0bGUnKTtcbiAgICBzdGFmZlRpdGxlLnRleHRDb250ZW50ID0gXCJNZWV0IG91ciBDaGVmc1wiXG5cbiAgICBjb25zdCBzdGFmZldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGFmZldyYXAuY2xhc3NMaXN0LmFkZCgnc3RhZmYtd3JhcHBlcicpO1xuXG4gICAgY29uc3QgY2hlZjFDcmVkID0gbWFrZUNyZWQoXCJMb3VpcyBIYW5zZWxcIiwgJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy92M09sQkU2LWZoVScpO1xuICAgIGNoZWYxQ3JlZC5wcmVwZW5kKFwiTGVmdCBcIilcblxuICAgIGNvbnN0IGNoZWYyQ3JlZCA9IG1ha2VDcmVkKFwiRmVicmlhbiBaYWthcmlhXCIsICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvU2lRZ25pLWNxRmcnKTtcbiAgICBjaGVmMkNyZWQucHJlcGVuZChcIlJpZ2h0IFwiKVxuXG4gICAgY29uc3Qgc3RhZmYxID0gbmV3IEltYWdlKCk7XG4gICAgc3RhZmYxLnNyYyA9IENoZWYxO1xuICAgIGNvbnN0IHN0YWZmMiA9IG5ldyBJbWFnZSgpO1xuICAgIHN0YWZmMi5zcmMgPSBDaGVmMjtcblxuICAgIHN0YWZmMS5jbGFzc0xpc3QuYWRkKCdzdGFmZi1pbWcnKTtcbiAgICBzdGFmZjIuY2xhc3NMaXN0LmFkZCgnc3RhZmYtaW1nJyk7XG5cbiAgICBzdGFmZldyYXAuYXBwZW5kQ2hpbGQoc3RhZmYxKTtcbiAgICBzdGFmZldyYXAuYXBwZW5kQ2hpbGQoc3RhZmYyKTtcblxuICAgIGNvbnN0IHN0YWZmSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdGFmZkluZm8udGV4dENvbnRlbnQgPSBcIk5hbSBlZmZpY2l0dXIgbnVuYyBhYyBlbGl0IHBvcnRhIGJsYW5kaXQuIENyYXMgZHVpIG5pYmgsIGF1Y3RvciBub24gdml2ZXJyYSBpbiwgaW1wZXJkaWV0IGF0IGV4LiBEb25lYyBhbGlxdWFtIHZlaGljdWxhIG1hZ25hIGV0IHByZXRpdW0uIEZ1c2NlIGVnZXQgZXggYXQgZXJhdCBsYWNpbmlhIGRpZ25pc3NpbSBzaXQgYW1ldCBub24gZXJhdC4gU2VkIGZlcm1lbnR1bSBpYWN1bGlzIGxhY3VzIGF0IGltcGVyZGlldC4gRHVpcyBmZXJtZW50dW0gZmluaWJ1cyBlbGVtZW50dW0uIER1aXMgZmluaWJ1cyBkaWN0dW0gb3JjaSwgZXQgYmxhbmRpdCBsaWd1bGEuIFN1c3BlbmRpc3NlIHV0IG9ybmFyZSBsZW8sIGluIGJpYmVuZHVtIG9yY2kuXCJcblxuXG5cbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChpbWdXcmFwKTtcbiAgICBpbWdXcmFwLmFwcGVuZENoaWxkKGZvb2RJbWcpO1xuICAgIGltZ1dyYXAuYXBwZW5kQ2hpbGQoaW5mb1RpdGxlKTtcbiAgICBpbWdXcmFwLmFwcGVuZENoaWxkKGltZ0NyZWRpdCk7XG5cblxuXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgdGV4dFdyYXAuYXBwZW5kQ2hpbGQodGV4dFRpdGxlKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHRleHRXcmFwKTtcbiAgICB0ZXh0V3JhcC5hcHBlbmRDaGlsZChpbmZvVGV4dCk7XG4gICAgdGV4dFdyYXAuYXBwZW5kQ2hpbGQoc3RhZmZUaXRsZSk7XG4gICAgdGV4dFdyYXAuYXBwZW5kQ2hpbGQoc3RhZmZXcmFwKTtcbiAgICB0ZXh0V3JhcC5hcHBlbmRDaGlsZChjaGVmMUNyZWQpO1xuICAgIHRleHRXcmFwLmFwcGVuZENoaWxkKGNoZWYyQ3JlZCk7XG4gICAgdGV4dFdyYXAuYXBwZW5kQ2hpbGQoc3RhZmZJbmZvKTtcblxuXG4gICAgcmV0dXJuIHBhZ2VDb250ZW50O1xufVxuXG5jb25zdCBtYWtlQ3JlZCA9IGZ1bmN0aW9uKGF1dGhvciwgdXJsKXtcbiAgICBjb25zdCB1bnNwbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB1bnNwbGFzaC5ocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vXCI7XG4gICAgdW5zcGxhc2gudGV4dENvbnRlbnQgPSBcIlVuc3BsYXNoXCI7XG5cbiAgICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gYXV0aG9yO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcblxuICAgIGNyZWRpdC50ZXh0Q29udGVudCA9IFwiUGhvdG8gYnkgXCI7XG4gICAgY3JlZGl0LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGNyZWRpdC5hcHBlbmQoXCIgb24gXCIpO1xuICAgIGNyZWRpdC5hcHBlbmQodW5zcGxhc2gpO1xuXG4gICAgcmV0dXJuIGNyZWRpdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBsb2FkQWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuY29uc3QgcGFnZUxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy9oZWFkZXIgc3RhcnRcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkl0YWxpYW4gUmVzdGF1cmFudFwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBhYm91dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFdyYXAuY2xhc3NMaXN0LmFkZCgnbmF2LXdyYXAnKTtcblxuICAgIGNvbnN0IGFib3V0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0TmF2LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICAgIGFib3V0TmF2LmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBhYm91dE5hdi5pZCA9ICdhYm91dC1uYXYnO1xuXG4gICAgY29uc3QgbWVudVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51V3JhcC5jbGFzc0xpc3QuYWRkKCduYXYtd3JhcCcpO1xuXG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51TmF2LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudU5hdi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgbWVudU5hdi5pZCA9ICdtZW51LW5hdic7XG5cbiAgICBjb25zdCBjb250YWN0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdFdyYXAuY2xhc3NMaXN0LmFkZCgnbmF2LXdyYXAnKTtcblxuICAgIGNvbnN0IGNvbnRhY3ROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdE5hdi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1c1wiO1xuICAgIGNvbnRhY3ROYXYuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGNvbnRhY3ROYXYuaWQgPSAnY29udGFjdC1uYXYnO1xuICAgIC8vaGVhZGVyIGVuZFxuXG4gICAgLy9mb290ZXJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBhdXRob3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGF1dGhvclRleHQudGV4dENvbnRlbnQgPSBcIk1hZGUgYnkgXCI7XG5cbiAgICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYXV0aG9yLnRleHRDb250ZW50ID0gXCJBbGVjIEJvbmdhcmRcIjtcbiAgICBhdXRob3IuaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BbGVjQm9uZ2FyZC9yZXN0YXVyYW50LXBhZ2VcIjtcblxuICAgIGF1dGhvclRleHQuYXBwZW5kKGF1dGhvcik7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYXV0aG9yVGV4dCk7XG5cblxuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gbG9hZEFib3V0KCk7XG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgICBuYXZiYXIuYXBwZW5kKGFib3V0V3JhcClcbiAgICBhYm91dFdyYXAuYXBwZW5kQ2hpbGQoYWJvdXROYXYpO1xuXG4gICAgbmF2YmFyLmFwcGVuZChtZW51V3JhcClcbiAgICBtZW51V3JhcC5hcHBlbmRDaGlsZChtZW51TmF2KTtcblxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0V3JhcClcbiAgICBjb250YWN0V3JhcC5hcHBlbmRDaGlsZChjb250YWN0TmF2KTtcblxuXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==