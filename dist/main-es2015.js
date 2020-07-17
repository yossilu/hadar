(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-elements.service */ "./src/app/global-elements.service.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/manager.component */ "./src/manager/manager.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../secondary/secondary.component */ "./src/secondary/secondary.component.ts");






function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(ge) {
        this.ge = ge;
        this.title = 'hadar';
        this.firstVisited = false;
        this.secondVisited = false;
        this.thirdVisited = false;
        this.endCredit = false;
        this.checkMainTime = () => {
            this.ge.mainVidInterval = setInterval(() => {
                console.log(Math.round(this.ge.mainVideoElem.currentTime));
                if (Math.round(this.ge.mainVideoElem.currentTime) == 26) {
                    this.ge.mainVideoElem.pause();
                    this.ge.backgroundGifObj.isActive = true;
                    this.ge.fomGifObj.isActive = true;
                    this.ge.mainVideoObj.isActive = false;
                    this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/second-loop.mp4';
                }
                if (Math.round(this.ge.mainVideoElem.currentTime) > 36 && Math.round(this.ge.mainVideoElem.currentTime) <= 38 && !this.firstVisited) {
                    this.firstVisited = true;
                    setTimeout(() => {
                        this.ge.mainVideoElem.pause();
                        this.ge.mainVideoObj.isActive = false;
                        this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/third-loop.mp4';
                        setTimeout(() => {
                            this.ge.backgroundGifObj.isActive = true;
                            this.ge.homGifObj.isActive = true;
                        }, 1500);
                    }, 450);
                }
                if (Math.round(this.ge.mainVideoElem.currentTime) == 67 && (!this.ge.homGifObj.music.includes('unchecked') && !this.ge.homGifObj.homework.includes('unchecked'))) {
                    console.log("both checked");
                    this.ge.mainVideoElem.pause();
                    this.ge.backgroundGifObj.isActive = true;
                    this.ge.fomGifObj.isActive = true;
                    this.ge.mainVideoObj.isActive = false;
                    this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/fourth-loop.mp4';
                }
                if (Math.round(this.ge.mainVideoElem.currentTime) == 67 && (!this.ge.homGifObj.homework.includes('unchecked') || !this.ge.homGifObj.music.includes('unchecked')) && !this.secondVisited) {
                    this.ge.mainVideoElem.pause();
                    this.secondVisited = true;
                    console.log("one unchecked");
                    setTimeout(() => {
                        this.ge.backgroundGifObj.isActive = true;
                        this.ge.fomGifObj.isActive = true;
                        this.ge.mainVideoObj.isActive = false;
                        this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/fourth-loop.mp4';
                    }, 400);
                }
                if (Math.round(this.ge.mainVideoElem.currentTime) >= 85 && Math.round(this.ge.mainVideoElem.currentTime) <= 86 && !this.thirdVisited) {
                    this.thirdVisited = true;
                    this.ge.mainVideoElem.pauseVideo();
                    this.ge.backgroundGifObj.isActive = true;
                    this.ge.homGifObj.isActive = true;
                    this.ge.mainVideoObj.isActive = false;
                    this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/third-loop.mp4';
                }
                if (Math.round(this.ge.mainVideoElem.currentTime) >= 85 && Math.round(this.ge.mainVideoElem.currentTime) <= 86 && (!this.ge.homGifObj.music.includes('unchecked') && !this.ge.homGifObj.homework.includes('unchecked'))) {
                    this.ge.mainVideoElem.currentTime = 107;
                    this.ge.mainVideoElem.playVideo();
                }
                if ((Math.round(this.ge.mainVideoElem.currentTime) >= 104 && Math.round(this.ge.mainVideoElem.currentTime) < 106)
                    && (this.ge.homGifObj.music.includes('unchecked') || this.ge.homGifObj.homework.includes('unchecked'))) {
                    this.ge.mainVideoElem.pauseVideo();
                    this.ge.backgroundGifObj.isActive = true;
                    this.ge.homGifObj.isActive = true;
                    this.ge.mainVideoObj.isActive = false;
                    this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/third-loop.mp4';
                }
                if ((Math.round(this.ge.mainVideoElem.currentTime) >= 104 && Math.round(this.ge.mainVideoElem.currentTime) < 106)
                    && (!this.ge.homGifObj.music.includes('unchecked') && !this.ge.homGifObj.homework.includes('unchecked'))) {
                    this.ge.mainVideoElem.currentTime = 107;
                    this.ge.mainVideoElem.playVideo();
                }
                if (Math.round(this.ge.mainVideoElem.currentTime) >= 106 && Math.round(this.ge.mainVideoElem.currentTime) < 108) {
                    this.ge.homGifObj.isActive = false;
                    this.ge.mainVideoObj.isActive = true;
                    this.ge.fomGifObj.isActive = false;
                    this.ge.backgroundGifObj.isActive = false;
                }
                if (Math.round(this.ge.mainVideoElem.currentTime) == 115) {
                    this.ge.mainVideoElem.pauseVideo();
                    this.ge.backgroundGifObj.isActive = true;
                    this.ge.lofGifObj.isActive = true;
                    this.ge.mainVideoObj.isActive = false;
                    this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/fifth-loop.mp4';
                }
                if (Math.round(this.ge.mainVideoElem.currentTime) == 183) {
                    this.ge.fomGifObj.mother = './assets/mother_checked.gif';
                    this.ge.fomGifObj.father = './assets/father_checked.gif';
                    this.ge.myselfGifObj.isActive = true;
                    this.ge.mainVideoElem.pauseVideo();
                    this.ge.backgroundGifObj.isActive = true;
                    this.ge.fomGifObj.isActive = true;
                    this.ge.mainVideoObj.isActive = false;
                    this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/sixth-loop.mp4';
                }
                if (Math.round(this.ge.mainVideoElem.currentTime) == 196) {
                    this.ge.mainVideoElem.currentTime = 197;
                    this.ge.mainVideoElem.pauseVideo();
                    this.ge.endSceneGif.isActive = true;
                }
            }, 1000);
        };
    }
    ngOnInit() {
        this.ge.mainVideoElem = document.getElementById('main-video');
        this.ge.mainVideoElem.pause();
        this.checkMainTime();
    }
    ngDoCheck() {
        if (this.ge.endSceneGif.isActive && !this.endCredit) {
            this.endCredit = true;
            setTimeout(() => {
                this.ge.endSceneGif.isActive = false;
                setTimeout(() => {
                    this.ge.replayGifObj.isActive = true;
                }, 800);
            }, 4800);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 2, consts: [[1, "main-frame"], [1, "main-video-frame"], ["id", "main-video", "autoplay", "true", "muted", "", "preload", "auto"], ["type", "video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\"", 3, "src"], [1, "gif-manager"], ["class", "temp-video", 4, "ngIf"], [1, "temp-video"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ge.mainVideoObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ge.mainVideoObj.isActive);
    } }, directives: [_manager_manager_component__WEBPACK_IMPORTED_MODULE_2__["ManagerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_4__["SecondaryComponent"]], styles: [".start-button[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 200px;\r\n    height: 90px;\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.main-frame[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.main-video-frame[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: 3;\r\n}\r\n\r\n.gif-manager[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 15;\r\n}\r\n\r\n.temp-video[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0LWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbn1cclxuXHJcbi5tYWluLWZyYW1le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWFpbi12aWRlby1mcmFtZXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5naWYtbWFuYWdlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTU7XHJcbn1cclxuXHJcbi50ZW1wLXZpZGVve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager/manager.component */ "./src/manager/manager.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../secondary/secondary.component */ "./src/secondary/secondary.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryComponent"],
        _manager_manager_component__WEBPACK_IMPORTED_MODULE_0__["ManagerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryComponent"],
                    _manager_manager_component__WEBPACK_IMPORTED_MODULE_0__["ManagerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/global-elements.service.ts":
/*!********************************************!*\
  !*** ./src/app/global-elements.service.ts ***!
  \********************************************/
/*! exports provided: GlobalElementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalElementsService", function() { return GlobalElementsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class GlobalElementsService {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.mainVideoObj = { src: "https://mymp4videos.s3.eu-central-1.amazonaws.com/no_slides.mp4", isActive: false, currentTime: 7 };
        this.secondaryVideoObj = { src: "https://mymp4videos.s3.eu-central-1.amazonaws.com/first-loop.mp4", isActive: true, currentTime: 0 };
        this.enterGif = './assets/enter_unchecked.gif';
        this.fomGifObj = { father: './assets/father_unchecked.gif', mother: './assets/mother_unchecked.gif', question: './assets/parent_side.gif', isActive: false, fomCounter: 0 };
        this.homGifObj = { homework: './assets/homework_unchecked.gif', music: './assets/music_unchecked.gif', question: './assets/pick_diversion.gif', isActive: false };
        this.lofGifObj = { lie: './assets/lie_unchecked.gif', filter: './assets/filter_unchecked.gif', question: './assets/pick_reaction.gif', isActive: false };
        this.backgroundGifObj = { src: './assets/background-gif.gif', isActive: false };
        this.myselfGifObj = { src: './assets/myself_unchecked.gif', isActive: false };
        this.endSceneGif = { src: './assets/credit.gif', isActive: false };
        this.replayGifObj = { src: './assets/replay.gif', isActive: false };
    }
}
GlobalElementsService.ɵfac = function GlobalElementsService_Factory(t) { return new (t || GlobalElementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
GlobalElementsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalElementsService, factory: GlobalElementsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalElementsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/manager/manager.component.ts":
/*!******************************************!*\
  !*** ./src/manager/manager.component.ts ***!
  \******************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app/global-elements.service */ "./src/app/global-elements.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ManagerComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.playVid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.ge.enterGif, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.ge.backgroundGifObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_3_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.fomClicked("father"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.ge.fomGifObj.father, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.fomClicked("mother"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.ge.fomGifObj.mother, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.ge.fomGifObj.question, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_6_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.myselfClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.ge.myselfGifObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function ManagerComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_8_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.homClicked("homework"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.ge.homGifObj.homework, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_9_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.homClicked("music"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.ge.homGifObj.music, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.ge.homGifObj.question, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_11_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.lofClicked("lie"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.ge.lofGifObj.lie, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_12_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.lofClicked("filter"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.ge.lofGifObj.filter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.ge.lofGifObj.question, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.ge.endSceneGif.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ManagerComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_15_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.replayClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.ge.replayGifObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ManagerComponent {
    constructor(ge) {
        this.ge = ge;
        this.playVid = () => {
            console.log("playing vid");
            this.ge.enterGif = './assets/enter_checked.gif';
            setTimeout(() => {
                this.ge.secondaryVideoObj.isActive = false;
                clearInterval(this.ge.initialInterval);
                this.ge.secondaryVideoElem = document.getElementById('secondary-loop');
                this.ge.secondaryVideoElem.currentTime = 20;
                this.ge.mainVideoElem.currentTime = this.ge.mainVideoObj.currentTime;
                setTimeout(() => {
                    console.log(this.ge.mainVideoElem);
                    this.ge.mainVideoElem.play();
                    // this.ge.mainVideoElem.style.zIndex = 6;
                    this.ge.mainVideoObj.isActive = true;
                }, 1600);
            }, 400);
        };
        this.fomClicked = (gifName) => {
            this.ge.fomGifObj.fomCounter++;
            if (gifName == 'father') {
                this.ge.fomGifObj.father = './assets/father_checked.gif';
            }
            else {
                this.ge.fomGifObj.mother = './assets/mother_checked.gif';
            }
            setTimeout(() => {
                this.ge.backgroundGifObj.isActive = false;
                this.ge.fomGifObj.isActive = false;
                this.ge.mainVideoObj.isActive = true;
                this.ge.fomGifObj.mother = './assets/mother_unchecked.gif';
                this.ge.fomGifObj.father = './assets/father_unchecked.gif';
                if (Math.round(this.ge.mainVideoElem.currentTime) > 180) {
                }
                else {
                    if (this.ge.fomGifObj.fomCounter == 3) {
                        this.ge.mainVideoElem.currentTime = 107;
                        this.ge.fomGifObj.mother = './assets/mother_unchecked.gif';
                        this.ge.fomGifObj.father = './assets/father_unchecked.gif';
                    }
                    if (this.ge.fomGifObj.fomCounter == 2 && !this.ge.homGifObj.homework.includes('unchecked')) {
                        this.ge.mainVideoElem.currentTime = 84;
                    }
                    // if(this.ge.fomGifObj.fomCounter == 2 && this.ge.homGifObj.homework.includes('unchecked')) {
                    //   this.ge.mainVideoElem.currentTime = 115;
                    // }
                    if (this.ge.fomGifObj.fomCounter == 1) {
                        this.ge.mainVideoElem.currentTime = 28.3;
                    }
                    this.ge.mainVideoElem.play();
                }
            }, 400);
        };
        this.lofClicked = (gifName) => {
            if (gifName == 'lie') {
                this.ge.lofGifObj.lie = './assets/lie_checked.gif';
            }
            else {
                this.ge.lofGifObj.filter = './assets/filter_checked.gif';
            }
            setTimeout(() => {
                this.ge.backgroundGifObj.isActive = false;
                this.ge.lofGifObj.isActive = false;
                this.ge.mainVideoObj.isActive = true;
                if (gifName == 'lie') {
                    this.ge.mainVideoElem.currentTime = 118;
                }
                else {
                    this.ge.mainVideoElem.currentTime = 123.78;
                }
                this.ge.mainVideoElem.play();
            }, 400);
        };
        this.homClicked = (gifName) => {
            if (gifName == 'homework') {
                this.ge.homGifObj.homework = './assets/homework_checked.gif';
                this.ge.mainVideoElem.currentTime = 50;
            }
            else {
                this.ge.homGifObj.music = './assets/music_checked.gif';
                this.ge.mainVideoElem.currentTime = 87;
            }
            setTimeout(() => {
                if (gifName == 'homework') {
                    this.ge.homGifObj.homework = './assets/homework_checked.gif';
                    this.ge.mainVideoElem.currentTime = 50;
                }
                else {
                    this.ge.homGifObj.music = './assets/music_checked.gif';
                    this.ge.mainVideoElem.currentTime = 87;
                }
                this.ge.backgroundGifObj.isActive = false;
                this.ge.homGifObj.isActive = false;
                this.ge.mainVideoObj.isActive = true;
                this.ge.mainVideoElem.play();
            }, 400);
        };
        this.myselfClicked = () => {
            this.ge.myselfGifObj.src = './assets/myself_checked.gif';
            this.ge.mainVideoElem.currentTime = 195;
            setTimeout(() => {
                this.ge.myselfGifObj.isActive = false;
                this.ge.backgroundGifObj.isActive = false;
                this.ge.fomGifObj.isActive = false;
                this.ge.mainVideoObj.isActive = true;
                this.ge.mainVideoElem.play();
            }, 600);
        };
        this.replayClick = () => {
            clearInterval(this.ge.mainVidInterval);
            location.reload();
        };
    }
    ngOnInit() {
    }
    ngDoCheck() {
    }
}
ManagerComponent.ɵfac = function ManagerComponent_Factory(t) { return new (t || ManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"])); };
ManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerComponent, selectors: [["app-manager"]], decls: 16, vars: 15, consts: [[1, "video-buttons"], ["class", "initial-play", 3, "src", "click", 4, "ngIf"], ["class", "background-gif", 3, "src", 4, "ngIf"], ["id", "father", "class", "fom-gif right-gif", 3, "src", "click", 4, "ngIf"], ["id", "mother", "class", "fom-gif left-gif", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif question-gif", 3, "src", 4, "ngIf"], ["class", "fom-gif myself-gif myself", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif myself-gif myself-question-gif", "src", "../assets/pick_side_last.gif", 4, "ngIf"], ["class", "fom-gif left-gif homework", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif right-gif music", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif question-gif hom-question", 3, "src", 4, "ngIf"], ["class", "fom-gif right-gif lie", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif left-gif filter", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif question-gif lof-question", 3, "src", 4, "ngIf"], ["class", "credit", 3, "src", 4, "ngIf"], ["class", "replay", 3, "src", "click", 4, "ngIf"], [1, "initial-play", 3, "src", "click"], [1, "background-gif", 3, "src"], ["id", "father", 1, "fom-gif", "right-gif", 3, "src", "click"], ["id", "mother", 1, "fom-gif", "left-gif", 3, "src", "click"], [1, "fom-gif", "question-gif", 3, "src"], [1, "fom-gif", "myself-gif", "myself", 3, "src", "click"], ["src", "../assets/pick_side_last.gif", 1, "fom-gif", "myself-gif", "myself-question-gif"], [1, "fom-gif", "left-gif", "homework", 3, "src", "click"], [1, "fom-gif", "right-gif", "music", 3, "src", "click"], [1, "fom-gif", "question-gif", "hom-question", 3, "src"], [1, "fom-gif", "right-gif", "lie", 3, "src", "click"], [1, "fom-gif", "left-gif", "filter", 3, "src", "click"], [1, "fom-gif", "question-gif", "lof-question", 3, "src"], [1, "credit", 3, "src"], [1, "replay", 3, "src", "click"]], template: function ManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerComponent_img_1_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManagerComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerComponent_img_3_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManagerComponent_img_4_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ManagerComponent_img_5_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManagerComponent_img_6_Template, 1, 1, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManagerComponent_img_7_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ManagerComponent_img_8_Template, 1, 1, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ManagerComponent_img_9_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ManagerComponent_img_10_Template, 1, 1, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManagerComponent_img_11_Template, 1, 1, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ManagerComponent_img_12_Template, 1, 1, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManagerComponent_img_13_Template, 1, 1, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ManagerComponent_img_14_Template, 1, 1, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManagerComponent_img_15_Template, 1, 1, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.secondaryVideoObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.backgroundGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.fomGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.fomGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.fomGifObj.isActive && !ctx.ge.myselfGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.myselfGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.myselfGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.homGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.homGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.homGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.lofGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.lofGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.lofGifObj.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.endSceneGif.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ge.replayGifObj.isActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".video-buttons[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 5;\r\n}\r\n\r\n.initial-play[_ngcontent-%COMP%]{\r\n    left: 42%;\r\n    top: 39%;\r\n    position: absolute;\r\n    width: 17%;\r\n    cursor: pointer;\r\n}\r\n\r\n.background-gif[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0.8;\r\n}\r\n\r\n.fom-gif[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    \r\n}\r\n\r\n.credit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 20;\r\n}\r\n\r\n.replay[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    position: absolute;\r\n    left: 25%;\r\n    top: 20%;\r\n    z-index: 25;\r\n    cursor: pointer;\r\n}\r\n\r\n.right-gif[_ngcontent-%COMP%]{\r\n    right: 30%;\r\n    top: 48%;\r\n    width: 15%;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-gif[_ngcontent-%COMP%]{\r\n    left: 30%;\r\n    top: 48%;\r\n    width: 15%;\r\n    cursor: pointer;\r\n}\r\n\r\n.question-gif[_ngcontent-%COMP%]{\r\n    left: 33%;\r\n    top: 30%;\r\n    width: 33%;\r\n}\r\n\r\n.myself-gif[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 14%;\r\n    top: 65%;\r\n    left: 43%;\r\n    cursor: pointer;\r\n}\r\n\r\n.homework[_ngcontent-%COMP%]{\r\n    left: 34%;\r\n    top: 50%;\r\n    width: 15%;\r\n\r\n}\r\n\r\n.music[_ngcontent-%COMP%]{\r\n    right: 31%;\r\n    top: 50%;\r\n    width: 13%;\r\n}\r\n\r\n.hom-question[_ngcontent-%COMP%]{\r\n    left: 40%;\r\n    top: 34%;\r\n    width: 22%;\r\n}\r\n\r\n.lie[_ngcontent-%COMP%]{\r\n    right: 31%;\r\n    top: 50%;\r\n    width: 14%;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]{\r\n    left: 35%;\r\n    top: 50%;\r\n    width: 14%;\r\n}\r\n\r\n.lof-question[_ngcontent-%COMP%]{\r\n    left: 38%;\r\n    top: 32%;\r\n    width: 25%;\r\n}\r\n\r\n#father[_ngcontent-%COMP%]{\r\n    top: 46%;\r\n    width: 15%;\r\n    right: 31%;\r\n}\r\n\r\n#mother[_ngcontent-%COMP%]{\r\n    left: 31%;\r\n    top: 46%;\r\n    width: 15%;\r\n}\r\n\r\n.myself-question-gif[_ngcontent-%COMP%]{\r\n    top: 31%;\r\n    width: 25%;\r\n    left: 37%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYW5hZ2VyL21hbmFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL21hbmFnZXIvbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWJ1dHRvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5pbml0aWFsLXBsYXl7XHJcbiAgICBsZWZ0OiA0MiU7XHJcbiAgICB0b3A6IDM5JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYmFja2dyb3VuZC1naWZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmZvbS1naWZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBcclxufVxyXG5cclxuLmNyZWRpdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcblxyXG4ucmVwbGF5e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgei1pbmRleDogMjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodC1naWZ7XHJcbiAgICByaWdodDogMzAlO1xyXG4gICAgdG9wOiA0OCU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGVmdC1naWZ7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICB0b3A6IDQ4JTtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1naWZ7XHJcbiAgICBsZWZ0OiAzMyU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHdpZHRoOiAzMyU7XHJcbn1cclxuXHJcbi5teXNlbGYtZ2lme1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE0JTtcclxuICAgIHRvcDogNjUlO1xyXG4gICAgbGVmdDogNDMlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaG9tZXdvcmt7XHJcbiAgICBsZWZ0OiAzNCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAxNSU7XHJcblxyXG59XHJcblxyXG4ubXVzaWN7XHJcbiAgICByaWdodDogMzElO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMTMlO1xyXG59XHJcblxyXG4uaG9tLXF1ZXN0aW9ue1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgdG9wOiAzNCU7XHJcbiAgICB3aWR0aDogMjIlO1xyXG59XHJcblxyXG4ubGlle1xyXG4gICAgcmlnaHQ6IDMxJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDE0JTtcclxufVxyXG5cclxuLmZpbHRlcntcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDE0JTtcclxufVxyXG5cclxuLmxvZi1xdWVzdGlvbntcclxuICAgIGxlZnQ6IDM4JTtcclxuICAgIHRvcDogMzIlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuI2ZhdGhlcntcclxuICAgIHRvcDogNDYlO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHJpZ2h0OiAzMSU7XHJcbn1cclxuXHJcbiNtb3RoZXJ7XHJcbiAgICBsZWZ0OiAzMSU7XHJcbiAgICB0b3A6IDQ2JTtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5teXNlbGYtcXVlc3Rpb24tZ2lme1xyXG4gICAgdG9wOiAzMSU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGVmdDogMzclO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manager',
                templateUrl: './manager.component.html',
                styleUrls: ['./manager.component.css']
            }]
    }], function () { return [{ type: _app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"] }]; }, null); })();


/***/ }),

/***/ "./src/secondary/secondary.component.ts":
/*!**********************************************!*\
  !*** ./src/secondary/secondary.component.ts ***!
  \**********************************************/
/*! exports provided: SecondaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryComponent", function() { return SecondaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app/global-elements.service */ "./src/app/global-elements.service.ts");



class SecondaryComponent {
    constructor(ge) {
        this.ge = ge;
        this.currentTime = 0;
        this.endOfFirstLoopSec = 20;
        this.createFirstLoop = () => {
            this.secondaryVideoElem = document.getElementById('secondary-loop');
            // this.ge.secondaryVideoObj.src = this.ge.secondaryVideoObj.src + "&output=embed";
            // window.location.replace(this.ge.secondaryVideoObj.src)
            if (this.secondaryVideoElem) {
                setTimeout(() => {
                    this.secondaryVideoElem.play();
                }, 1000);
                this.ge.initialInterval = setInterval(() => {
                    this.currentTime = Math.round(this.secondaryVideoElem.currentTime);
                    if (this.currentTime == this.endOfFirstLoopSec) {
                        this.secondaryVideoElem.currentTime = 3;
                    }
                }, 1000);
            }
        };
    }
    ngOnInit() {
        this.createFirstLoop();
    }
}
SecondaryComponent.ɵfac = function SecondaryComponent_Factory(t) { return new (t || SecondaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"])); };
SecondaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondaryComponent, selectors: [["app-secondary"]], decls: 2, vars: 1, consts: [["id", "secondary-loop", "autoplay", "true", "muted", "", "preload", "auto", 1, "video-frame"], ["type", "video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\"", 3, "src"]], template: function SecondaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ge.secondaryVideoObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".video-frame[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: 22;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZWNvbmRhcnkvc2Vjb25kYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvc2Vjb25kYXJ5L3NlY29uZGFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWZyYW1le1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMjI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-secondary',
                templateUrl: './secondary.component.html',
                styleUrls: ['./secondary.component.css']
            }]
    }], function () { return [{ type: _app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yossil\Desktop\Hadar's Project\hadar\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map