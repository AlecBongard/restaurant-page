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
/* harmony export */   "loadAbout": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _imgs_pizza_full_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/pizza_full.jpg */ "./src/imgs/pizza_full.jpg");
/* harmony import */ var _imgs_chef1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/chef1.jpg */ "./src/imgs/chef1.jpg");
/* harmony import */ var _imgs_chef2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/chef2.jpg */ "./src/imgs/chef2.jpg");






const loadAbout = function(){

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //img start
    const imgWrap = document.createElement('div');
    imgWrap.classList.add('img-wrap');

    const foodImg = new Image();
    foodImg.src = _imgs_pizza_full_jpg__WEBPACK_IMPORTED_MODULE_1__;
    foodImg.classList.add('food');

    const infoTitle = document.createElement('p');
    infoTitle.textContent = "BENVENUTI";
    infoTitle.classList.add('info-title');

    const imgCredit = (0,_pageload__WEBPACK_IMPORTED_MODULE_0__.makeCred)("Chad Montano", 'https://unsplash.com/photos/MqT0asuoIcU');
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

    const chef1Cred = (0,_pageload__WEBPACK_IMPORTED_MODULE_0__.makeCred)("Louis Hansel", 'https://unsplash.com/photos/v3OlBE6-fhU');
    chef1Cred.prepend("Left ")

    const chef2Cred = (0,_pageload__WEBPACK_IMPORTED_MODULE_0__.makeCred)("Febrian Zakaria", 'https://unsplash.com/photos/SiQgni-cqFg');
    chef2Cred.prepend("Right ")

    const staff1 = new Image();
    staff1.src = _imgs_chef1_jpg__WEBPACK_IMPORTED_MODULE_2__;
    const staff2 = new Image();
    staff2.src = _imgs_chef2_jpg__WEBPACK_IMPORTED_MODULE_3__;

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





/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCred": () => (/* binding */ makeCred),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
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
    authorText.textContent = "Created by ";

    const author = document.createElement('a');
    author.textContent = "Alec Bongard";
    author.href="https://github.com/AlecBongard/restaurant-page";

    authorText.append(author);

    footer.appendChild(authorText);


    const pageContent = (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.loadAbout)();


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pageload.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNJO0FBQ0w7QUFDQTs7O0FBR3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlEQUFLO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsbURBQVE7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ1pBQWdaOztBQUVoWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IsbURBQVE7QUFDOUI7O0FBRUEsc0JBQXNCLG1EQUFRO0FBQzlCOztBQUVBO0FBQ0EsaUJBQWlCLDRDQUFLO0FBQ3RCO0FBQ0EsaUJBQWlCLDRDQUFLOztBQUV0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGdUM7OztBQUd2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSx3QkFBd0Isb0RBQVM7OztBQUdqQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZUNyZWQgfSBmcm9tICcuL3BhZ2Vsb2FkJztcbmltcG9ydCBQaXp6YSBmcm9tICcuL2ltZ3MvcGl6emFfZnVsbC5qcGcnO1xuaW1wb3J0IENoZWYxIGZyb20gJy4vaW1ncy9jaGVmMS5qcGcnO1xuaW1wb3J0IENoZWYyIGZyb20gJy4vaW1ncy9jaGVmMi5qcGcnO1xuXG5cbmNvbnN0IGxvYWRBYm91dCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcpO1xuXG4gICAgLy9pbWcgc3RhcnRcbiAgICBjb25zdCBpbWdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nV3JhcC5jbGFzc0xpc3QuYWRkKCdpbWctd3JhcCcpO1xuXG4gICAgY29uc3QgZm9vZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2RJbWcuc3JjID0gUGl6emE7XG4gICAgZm9vZEltZy5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG5cbiAgICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJCRU5WRU5VVElcIjtcbiAgICBpbmZvVGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5mby10aXRsZScpO1xuXG4gICAgY29uc3QgaW1nQ3JlZGl0ID0gbWFrZUNyZWQoXCJDaGFkIE1vbnRhbm9cIiwgJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9NcVQwYXN1b0ljVScpO1xuICAgIGltZ0NyZWRpdC5jbGFzc0xpc3QuYWRkKCdjcmVkaXQnKTtcbiAgICAvL2ltZyBlbmRcblxuICAgIGNvbnN0IHRleHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0VGl0bGUuY2xhc3NMaXN0LmFkZCgndGV4dC10aXRsZScpO1xuICAgIHRleHRUaXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgdXNcIlxuXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuXG4gICAgY29uc3QgdGV4dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0V3JhcC5jbGFzc0xpc3QuYWRkKCd0ZXh0LXdyYXBwZXInKTtcblxuICAgIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZm9UZXh0LnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiBzZWQgbmVxdWUgbWkuIFNlZCBvcm5hcmUgaWQgb3JjaSB2dWxwdXRhdGUgbW9sZXN0aWUuIEZ1c2NlIGltcGVyZGlldCBuZXF1ZSBvcmNpLCB2ZWwgYmliZW5kdW0ganVzdG8gcG9ydHRpdG9yIGlkLiBQZWxsZW50ZXNxdWUgZWZmaWNpdHVyIHRlbXBvciB2YXJpdXMuIFByb2luIGVyYXQgaXBzdW0sIHBlbGxlbnRlc3F1ZSBub24gYmliZW5kdW0gaWQsIHRyaXN0aXF1ZSBzZWQganVzdG8uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBDdXJhYml0dXIgZWxlbWVudHVtIHB1cnVzIG5lYyBwdXJ1cyBzYWdpdHRpcywgbm9uIGZhY2lsaXNpcyBxdWFtIGNvbnZhbGxpcy4gU3VzcGVuZGlzc2Ugc2l0IGFtZXQgZWxlaWZlbmQgdHVycGlzLiBTZWQgcXVhbSBkaWFtLCBmZXJtZW50dW0gYSB0aW5jaWR1bnQgZWdldCwgZmV1Z2lhdCBub24gZXJvcy4gTnVsbGEgYSBsaWd1bGEgaWQgbGlndWxhIHRpbmNpZHVudCBmYXVjaWJ1cyBhIGF0IG1hc3NhLiBJbnRlZ2VyIHN1c2NpcGl0LCBsZWN0dXMgc2l0IGFtZXQgaW1wZXJkaWV0IHBlbGxlbnRlc3F1ZSwganVzdG8gdGVsbHVzIHBlbGxlbnRlc3F1ZSBuaXNpLCBzaXQgYW1ldCBiaWJlbmR1bSBsaWd1bGEgaXBzdW0gcGVsbGVudGVzcXVlIHB1cnVzLiBRdWlzcXVlIHV0IGp1c3RvIHNlbXBlciwgbW9sbGlzIG9yY2kgaWQsIHZ1bHB1dGF0ZSBsb3JlbS4gVmVzdGlidWx1bSBsb2JvcnRpcyBpbXBlcmRpZXQgY29uZGltZW50dW0uXCJcblxuICAgIGNvbnN0IHN0YWZmVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RhZmZUaXRsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXRpdGxlJyk7XG4gICAgc3RhZmZUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVldCBvdXIgQ2hlZnNcIlxuXG4gICAgY29uc3Qgc3RhZmZXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhZmZXcmFwLmNsYXNzTGlzdC5hZGQoJ3N0YWZmLXdyYXBwZXInKTtcblxuICAgIGNvbnN0IGNoZWYxQ3JlZCA9IG1ha2VDcmVkKFwiTG91aXMgSGFuc2VsXCIsICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvdjNPbEJFNi1maFUnKTtcbiAgICBjaGVmMUNyZWQucHJlcGVuZChcIkxlZnQgXCIpXG5cbiAgICBjb25zdCBjaGVmMkNyZWQgPSBtYWtlQ3JlZChcIkZlYnJpYW4gWmFrYXJpYVwiLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1NpUWduaS1jcUZnJyk7XG4gICAgY2hlZjJDcmVkLnByZXBlbmQoXCJSaWdodCBcIilcblxuICAgIGNvbnN0IHN0YWZmMSA9IG5ldyBJbWFnZSgpO1xuICAgIHN0YWZmMS5zcmMgPSBDaGVmMTtcbiAgICBjb25zdCBzdGFmZjIgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdGFmZjIuc3JjID0gQ2hlZjI7XG5cbiAgICBzdGFmZjEuY2xhc3NMaXN0LmFkZCgnc3RhZmYtaW1nJyk7XG4gICAgc3RhZmYyLmNsYXNzTGlzdC5hZGQoJ3N0YWZmLWltZycpO1xuXG4gICAgc3RhZmZXcmFwLmFwcGVuZENoaWxkKHN0YWZmMSk7XG4gICAgc3RhZmZXcmFwLmFwcGVuZENoaWxkKHN0YWZmMik7XG5cbiAgICBjb25zdCBzdGFmZkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RhZmZJbmZvLnRleHRDb250ZW50ID0gXCJOYW0gZWZmaWNpdHVyIG51bmMgYWMgZWxpdCBwb3J0YSBibGFuZGl0LiBDcmFzIGR1aSBuaWJoLCBhdWN0b3Igbm9uIHZpdmVycmEgaW4sIGltcGVyZGlldCBhdCBleC4gRG9uZWMgYWxpcXVhbSB2ZWhpY3VsYSBtYWduYSBldCBwcmV0aXVtLiBGdXNjZSBlZ2V0IGV4IGF0IGVyYXQgbGFjaW5pYSBkaWduaXNzaW0gc2l0IGFtZXQgbm9uIGVyYXQuIFNlZCBmZXJtZW50dW0gaWFjdWxpcyBsYWN1cyBhdCBpbXBlcmRpZXQuIER1aXMgZmVybWVudHVtIGZpbmlidXMgZWxlbWVudHVtLiBEdWlzIGZpbmlidXMgZGljdHVtIG9yY2ksIGV0IGJsYW5kaXQgbGlndWxhLiBTdXNwZW5kaXNzZSB1dCBvcm5hcmUgbGVvLCBpbiBiaWJlbmR1bSBvcmNpLlwiXG5cblxuXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nV3JhcCk7XG4gICAgaW1nV3JhcC5hcHBlbmRDaGlsZChmb29kSW1nKTtcbiAgICBpbWdXcmFwLmFwcGVuZENoaWxkKGluZm9UaXRsZSk7XG4gICAgaW1nV3JhcC5hcHBlbmRDaGlsZChpbWdDcmVkaXQpO1xuXG5cblxuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHRleHRXcmFwLmFwcGVuZENoaWxkKHRleHRUaXRsZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZCh0ZXh0V3JhcCk7XG4gICAgdGV4dFdyYXAuYXBwZW5kQ2hpbGQoaW5mb1RleHQpO1xuICAgIHRleHRXcmFwLmFwcGVuZENoaWxkKHN0YWZmVGl0bGUpO1xuICAgIHRleHRXcmFwLmFwcGVuZENoaWxkKHN0YWZmV3JhcCk7XG4gICAgdGV4dFdyYXAuYXBwZW5kQ2hpbGQoY2hlZjFDcmVkKTtcbiAgICB0ZXh0V3JhcC5hcHBlbmRDaGlsZChjaGVmMkNyZWQpO1xuICAgIHRleHRXcmFwLmFwcGVuZENoaWxkKHN0YWZmSW5mbyk7XG5cblxuICAgIHJldHVybiBwYWdlQ29udGVudDtcbn1cblxuXG5cbmV4cG9ydCB7bG9hZEFib3V0fTsiLCJpbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tICcuL2Fib3V0LmpzJztcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5jb25zdCBwYWdlTG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL2hlYWRlciBzdGFydFxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSXRhbGlhbiBSZXN0YXVyYW50XCI7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgIGNvbnN0IGFib3V0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0V3JhcC5jbGFzc0xpc3QuYWRkKCduYXYtd3JhcCcpO1xuXG4gICAgY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXROYXYudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gICAgYWJvdXROYXYuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGFib3V0TmF2LmlkID0gJ2Fib3V0LW5hdic7XG5cbiAgICBjb25zdCBtZW51V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVXcmFwLmNsYXNzTGlzdC5hZGQoJ25hdi13cmFwJyk7XG5cbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVOYXYudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBtZW51TmF2LmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBtZW51TmF2LmlkID0gJ21lbnUtbmF2JztcblxuICAgIGNvbnN0IGNvbnRhY3RXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0V3JhcC5jbGFzc0xpc3QuYWRkKCduYXYtd3JhcCcpO1xuXG4gICAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0TmF2LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCI7XG4gICAgY29udGFjdE5hdi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdE5hdi5pZCA9ICdjb250YWN0LW5hdic7XG4gICAgLy9oZWFkZXIgZW5kXG5cbiAgICAvL2Zvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IGF1dGhvclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYXV0aG9yVGV4dC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlZCBieSBcIjtcblxuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhdXRob3IudGV4dENvbnRlbnQgPSBcIkFsZWMgQm9uZ2FyZFwiO1xuICAgIGF1dGhvci5ocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FsZWNCb25nYXJkL3Jlc3RhdXJhbnQtcGFnZVwiO1xuXG4gICAgYXV0aG9yVGV4dC5hcHBlbmQoYXV0aG9yKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhdXRob3JUZXh0KTtcblxuXG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBsb2FkQWJvdXQoKTtcblxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcblxuICAgIG5hdmJhci5hcHBlbmQoYWJvdXRXcmFwKVxuICAgIGFib3V0V3JhcC5hcHBlbmRDaGlsZChhYm91dE5hdik7XG5cbiAgICBuYXZiYXIuYXBwZW5kKG1lbnVXcmFwKVxuICAgIG1lbnVXcmFwLmFwcGVuZENoaWxkKG1lbnVOYXYpO1xuXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3RXcmFwKVxuICAgIGNvbnRhY3RXcmFwLmFwcGVuZENoaWxkKGNvbnRhY3ROYXYpO1xuXG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICBcbn1cblxuY29uc3QgbWFrZUNyZWQgPSBmdW5jdGlvbihhdXRob3IsIHVybCl7XG4gICAgY29uc3QgdW5zcGxhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdW5zcGxhc2guaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL1wiO1xuICAgIHVuc3BsYXNoLnRleHRDb250ZW50ID0gXCJVbnNwbGFzaFwiO1xuXG4gICAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay50ZXh0Q29udGVudCA9IGF1dGhvcjtcbiAgICBsaW5rLmhyZWYgPSB1cmw7XG5cbiAgICBjcmVkaXQudGV4dENvbnRlbnQgPSBcIlBob3RvIGJ5IFwiO1xuICAgIGNyZWRpdC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBjcmVkaXQuYXBwZW5kKFwiIG9uIFwiKTtcbiAgICBjcmVkaXQuYXBwZW5kKHVuc3BsYXNoKTtcblxuICAgIHJldHVybiBjcmVkaXQ7XG59XG5cbmV4cG9ydCB7cGFnZUxvYWQsXG4gICAgICAgIG1ha2VDcmVkfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlbG9hZC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==