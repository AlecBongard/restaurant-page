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



    /*const imgCredit = document.createElement('a');
    imgCredit.textContent = "Photo by Chad Montano on Unsplash";
    imgCredit.href = 'https://unsplash.com/photos/MqT0asuoIcU';
    */

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
    credit.append(" On ");
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

    const author = document.createElement('p');
    author.textContent = "Made by Alec Bongard";


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
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0w7QUFDQTs7O0FBR3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlEQUFLO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ1pBQWdaOztBQUVoWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNENBQUs7QUFDdEI7QUFDQSxpQkFBaUIsNENBQUs7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsSHhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmbUM7OztBQUduQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLHdCQUF3QixxREFBUzs7O0FBR2pDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBpenphIGZyb20gJy4vaW1ncy9waXp6YV9mdWxsLmpwZyc7XG5pbXBvcnQgQ2hlZjEgZnJvbSAnLi9pbWdzL2NoZWYxLmpwZyc7XG5pbXBvcnQgQ2hlZjIgZnJvbSAnLi9pbWdzL2NoZWYyLmpwZyc7XG5cblxuY29uc3QgbG9hZEFib3V0ID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250ZW50Jyk7XG5cbiAgICAvL2ltZyBzdGFydFxuICAgIGNvbnN0IGltZ1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdXcmFwLmNsYXNzTGlzdC5hZGQoJ2ltZy13cmFwJyk7XG5cbiAgICBjb25zdCBmb29kSW1nID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZEltZy5zcmMgPSBQaXp6YTtcbiAgICBmb29kSW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QnKTtcblxuICAgIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmZvVGl0bGUudGV4dENvbnRlbnQgPSBcIkJFTlZFTlVUSVwiO1xuICAgIGluZm9UaXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvLXRpdGxlJyk7XG5cblxuXG4gICAgLypjb25zdCBpbWdDcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaW1nQ3JlZGl0LnRleHRDb250ZW50ID0gXCJQaG90byBieSBDaGFkIE1vbnRhbm8gb24gVW5zcGxhc2hcIjtcbiAgICBpbWdDcmVkaXQuaHJlZiA9ICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvTXFUMGFzdW9JY1UnO1xuICAgICovXG5cbiAgICBjb25zdCBpbWdDcmVkaXQgPSBtYWtlQ3JlZChcIkNoYWQgTW9udGFub1wiLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL01xVDBhc3VvSWNVJylcbiAgICBpbWdDcmVkaXQuY2xhc3NMaXN0LmFkZCgnY3JlZGl0Jyk7XG4gICAgLy9pbWcgZW5kXG5cbiAgICBjb25zdCB0ZXh0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtdGl0bGUnKTtcbiAgICB0ZXh0VGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IHVzXCJcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcblxuICAgIGNvbnN0IHRleHRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dFdyYXAuY2xhc3NMaXN0LmFkZCgndGV4dC13cmFwcGVyJyk7XG5cbiAgICBjb25zdCBpbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmZvVGV4dC50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gc2VkIG5lcXVlIG1pLiBTZWQgb3JuYXJlIGlkIG9yY2kgdnVscHV0YXRlIG1vbGVzdGllLiBGdXNjZSBpbXBlcmRpZXQgbmVxdWUgb3JjaSwgdmVsIGJpYmVuZHVtIGp1c3RvIHBvcnR0aXRvciBpZC4gUGVsbGVudGVzcXVlIGVmZmljaXR1ciB0ZW1wb3IgdmFyaXVzLiBQcm9pbiBlcmF0IGlwc3VtLCBwZWxsZW50ZXNxdWUgbm9uIGJpYmVuZHVtIGlkLCB0cmlzdGlxdWUgc2VkIGp1c3RvLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgQ3VyYWJpdHVyIGVsZW1lbnR1bSBwdXJ1cyBuZWMgcHVydXMgc2FnaXR0aXMsIG5vbiBmYWNpbGlzaXMgcXVhbSBjb252YWxsaXMuIFN1c3BlbmRpc3NlIHNpdCBhbWV0IGVsZWlmZW5kIHR1cnBpcy4gU2VkIHF1YW0gZGlhbSwgZmVybWVudHVtIGEgdGluY2lkdW50IGVnZXQsIGZldWdpYXQgbm9uIGVyb3MuIE51bGxhIGEgbGlndWxhIGlkIGxpZ3VsYSB0aW5jaWR1bnQgZmF1Y2lidXMgYSBhdCBtYXNzYS4gSW50ZWdlciBzdXNjaXBpdCwgbGVjdHVzIHNpdCBhbWV0IGltcGVyZGlldCBwZWxsZW50ZXNxdWUsIGp1c3RvIHRlbGx1cyBwZWxsZW50ZXNxdWUgbmlzaSwgc2l0IGFtZXQgYmliZW5kdW0gbGlndWxhIGlwc3VtIHBlbGxlbnRlc3F1ZSBwdXJ1cy4gUXVpc3F1ZSB1dCBqdXN0byBzZW1wZXIsIG1vbGxpcyBvcmNpIGlkLCB2dWxwdXRhdGUgbG9yZW0uIFZlc3RpYnVsdW0gbG9ib3J0aXMgaW1wZXJkaWV0IGNvbmRpbWVudHVtLlwiXG5cbiAgICBjb25zdCBzdGFmZlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0YWZmVGl0bGUuY2xhc3NMaXN0LmFkZCgndGV4dC10aXRsZScpO1xuICAgIHN0YWZmVGl0bGUudGV4dENvbnRlbnQgPSBcIk1lZXQgb3VyIENoZWZzXCJcblxuICAgIGNvbnN0IHN0YWZmV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YWZmV3JhcC5jbGFzc0xpc3QuYWRkKCdzdGFmZi13cmFwcGVyJyk7XG5cbiAgICBjb25zdCBjaGVmMUNyZWQgPSBtYWtlQ3JlZChcIkxvdWlzIEhhbnNlbFwiLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3YzT2xCRTYtZmhVJyk7XG4gICAgY2hlZjFDcmVkLnByZXBlbmQoXCJMZWZ0IFwiKVxuXG4gICAgY29uc3QgY2hlZjJDcmVkID0gbWFrZUNyZWQoXCJGZWJyaWFuIFpha2FyaWFcIiwgJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9TaVFnbmktY3FGZycpO1xuICAgIGNoZWYyQ3JlZC5wcmVwZW5kKFwiUmlnaHQgXCIpXG5cbiAgICBjb25zdCBzdGFmZjEgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdGFmZjEuc3JjID0gQ2hlZjE7XG4gICAgY29uc3Qgc3RhZmYyID0gbmV3IEltYWdlKCk7XG4gICAgc3RhZmYyLnNyYyA9IENoZWYyO1xuXG4gICAgc3RhZmYxLmNsYXNzTGlzdC5hZGQoJ3N0YWZmLWltZycpO1xuICAgIHN0YWZmMi5jbGFzc0xpc3QuYWRkKCdzdGFmZi1pbWcnKTtcblxuICAgIHN0YWZmV3JhcC5hcHBlbmRDaGlsZChzdGFmZjEpO1xuICAgIHN0YWZmV3JhcC5hcHBlbmRDaGlsZChzdGFmZjIpO1xuXG4gICAgY29uc3Qgc3RhZmZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0YWZmSW5mby50ZXh0Q29udGVudCA9IFwiTmFtIGVmZmljaXR1ciBudW5jIGFjIGVsaXQgcG9ydGEgYmxhbmRpdC4gQ3JhcyBkdWkgbmliaCwgYXVjdG9yIG5vbiB2aXZlcnJhIGluLCBpbXBlcmRpZXQgYXQgZXguIERvbmVjIGFsaXF1YW0gdmVoaWN1bGEgbWFnbmEgZXQgcHJldGl1bS4gRnVzY2UgZWdldCBleCBhdCBlcmF0IGxhY2luaWEgZGlnbmlzc2ltIHNpdCBhbWV0IG5vbiBlcmF0LiBTZWQgZmVybWVudHVtIGlhY3VsaXMgbGFjdXMgYXQgaW1wZXJkaWV0LiBEdWlzIGZlcm1lbnR1bSBmaW5pYnVzIGVsZW1lbnR1bS4gRHVpcyBmaW5pYnVzIGRpY3R1bSBvcmNpLCBldCBibGFuZGl0IGxpZ3VsYS4gU3VzcGVuZGlzc2UgdXQgb3JuYXJlIGxlbywgaW4gYmliZW5kdW0gb3JjaS5cIlxuXG5cblxuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGltZ1dyYXApO1xuICAgIGltZ1dyYXAuYXBwZW5kQ2hpbGQoZm9vZEltZyk7XG4gICAgaW1nV3JhcC5hcHBlbmRDaGlsZChpbmZvVGl0bGUpO1xuICAgIGltZ1dyYXAuYXBwZW5kQ2hpbGQoaW1nQ3JlZGl0KTtcblxuXG5cbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICB0ZXh0V3JhcC5hcHBlbmRDaGlsZCh0ZXh0VGl0bGUpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQodGV4dFdyYXApO1xuICAgIHRleHRXcmFwLmFwcGVuZENoaWxkKGluZm9UZXh0KTtcbiAgICB0ZXh0V3JhcC5hcHBlbmRDaGlsZChzdGFmZlRpdGxlKTtcbiAgICB0ZXh0V3JhcC5hcHBlbmRDaGlsZChzdGFmZldyYXApO1xuICAgIHRleHRXcmFwLmFwcGVuZENoaWxkKGNoZWYxQ3JlZCk7XG4gICAgdGV4dFdyYXAuYXBwZW5kQ2hpbGQoY2hlZjJDcmVkKTtcbiAgICB0ZXh0V3JhcC5hcHBlbmRDaGlsZChzdGFmZkluZm8pO1xuXG5cbiAgICByZXR1cm4gcGFnZUNvbnRlbnQ7XG59XG5cbmNvbnN0IG1ha2VDcmVkID0gZnVuY3Rpb24oYXV0aG9yLCB1cmwpe1xuICAgIGNvbnN0IHVuc3BsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHVuc3BsYXNoLmhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9cIjtcbiAgICB1bnNwbGFzaC50ZXh0Q29udGVudCA9IFwiVW5zcGxhc2hcIjtcblxuICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBhdXRob3I7XG4gICAgbGluay5ocmVmID0gdXJsO1xuXG4gICAgY3JlZGl0LnRleHRDb250ZW50ID0gXCJQaG90byBieSBcIjtcbiAgICBjcmVkaXQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgY3JlZGl0LmFwcGVuZChcIiBPbiBcIik7XG4gICAgY3JlZGl0LmFwcGVuZCh1bnNwbGFzaCk7XG5cbiAgICByZXR1cm4gY3JlZGl0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGxvYWRBYm91dCBmcm9tICcuL2Fib3V0LmpzJztcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5jb25zdCBwYWdlTG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL2hlYWRlciBzdGFydFxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSXRhbGlhbiBSZXN0YXVyYW50XCI7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgIGNvbnN0IGFib3V0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0V3JhcC5jbGFzc0xpc3QuYWRkKCduYXYtd3JhcCcpO1xuXG4gICAgY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXROYXYudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gICAgYWJvdXROYXYuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGFib3V0TmF2LmlkID0gJ2Fib3V0LW5hdic7XG5cbiAgICBjb25zdCBtZW51V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVXcmFwLmNsYXNzTGlzdC5hZGQoJ25hdi13cmFwJyk7XG5cbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lbnVOYXYudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBtZW51TmF2LmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBtZW51TmF2LmlkID0gJ21lbnUtbmF2JztcblxuICAgIGNvbnN0IGNvbnRhY3RXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0V3JhcC5jbGFzc0xpc3QuYWRkKCduYXYtd3JhcCcpO1xuXG4gICAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0TmF2LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCI7XG4gICAgY29udGFjdE5hdi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdE5hdi5pZCA9ICdjb250YWN0LW5hdic7XG4gICAgLy9oZWFkZXIgZW5kXG5cbiAgICAvL2Zvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhdXRob3IudGV4dENvbnRlbnQgPSBcIk1hZGUgYnkgQWxlYyBCb25nYXJkXCI7XG5cblxuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gbG9hZEFib3V0KCk7XG5cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgICBuYXZiYXIuYXBwZW5kKGFib3V0V3JhcClcbiAgICBhYm91dFdyYXAuYXBwZW5kQ2hpbGQoYWJvdXROYXYpO1xuXG4gICAgbmF2YmFyLmFwcGVuZChtZW51V3JhcClcbiAgICBtZW51V3JhcC5hcHBlbmRDaGlsZChtZW51TmF2KTtcblxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0V3JhcClcbiAgICBjb250YWN0V3JhcC5hcHBlbmRDaGlsZChjb250YWN0TmF2KTtcblxuXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9