function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global_elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global-elements.service */
    "./src/app/global-elements.service.ts");
    /* harmony import */


    var _manager_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../manager/manager.component */
    "./src/manager/manager.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../secondary/secondary.component */
    "./src/secondary/secondary.component.ts");

    function AppComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-secondary");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(ge) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.ge = ge;
        this.title = 'hadar';
        this.firstVisited = false;
        this.secondVisited = false;
        this.thirdVisited = false;
        this.endCredit = false;

        this.checkMainTime = function () {
          _this.ge.mainVidInterval = setInterval(function () {
            console.log(Math.round(_this.ge.mainVideoElem.currentTime));

            if (Math.round(_this.ge.mainVideoElem.currentTime) == 26) {
              _this.ge.mainVideoElem.pause();

              _this.ge.backgroundGifObj.isActive = true;
              _this.ge.fomGifObj.isActive = true;
              _this.ge.mainVideoObj.isActive = false;
              _this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/second-loop.mp4';
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) > 36 && Math.round(_this.ge.mainVideoElem.currentTime) <= 38 && !_this.firstVisited) {
              _this.firstVisited = true;
              setTimeout(function () {
                _this.ge.mainVideoElem.pause();

                _this.ge.mainVideoObj.isActive = false;
                _this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/third-loop.mp4';
                setTimeout(function () {
                  _this.ge.backgroundGifObj.isActive = true;
                  _this.ge.homGifObj.isActive = true;
                }, 1500);
              }, 450);
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) == 67 && !_this.ge.homGifObj.music.includes('unchecked') && !_this.ge.homGifObj.homework.includes('unchecked')) {
              console.log("both checked");

              _this.ge.mainVideoElem.pause();

              _this.ge.backgroundGifObj.isActive = true;
              _this.ge.fomGifObj.isActive = true;
              _this.ge.mainVideoObj.isActive = false;
              _this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/fourth-loop.mp4';
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) == 67 && (!_this.ge.homGifObj.homework.includes('unchecked') || !_this.ge.homGifObj.music.includes('unchecked')) && !_this.secondVisited) {
              _this.ge.mainVideoElem.pause();

              _this.secondVisited = true;
              console.log("one unchecked");
              setTimeout(function () {
                _this.ge.backgroundGifObj.isActive = true;
                _this.ge.fomGifObj.isActive = true;
                _this.ge.mainVideoObj.isActive = false;
                _this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/fourth-loop.mp4';
              }, 400);
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) >= 85 && Math.round(_this.ge.mainVideoElem.currentTime) <= 86 && !_this.thirdVisited) {
              _this.thirdVisited = true;

              _this.ge.mainVideoElem.pause();

              _this.ge.backgroundGifObj.isActive = true;
              _this.ge.homGifObj.isActive = true;
              _this.ge.mainVideoObj.isActive = false;
              _this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/third-loop.mp4';
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) >= 85 && Math.round(_this.ge.mainVideoElem.currentTime) <= 86 && !_this.ge.homGifObj.music.includes('unchecked') && !_this.ge.homGifObj.homework.includes('unchecked')) {
              _this.ge.mainVideoElem.currentTime = 107;

              _this.ge.mainVideoElem.play();
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) >= 104 && Math.round(_this.ge.mainVideoElem.currentTime) < 106 && (_this.ge.homGifObj.music.includes('unchecked') || _this.ge.homGifObj.homework.includes('unchecked'))) {
              _this.ge.mainVideoElem.pause();

              _this.ge.backgroundGifObj.isActive = true;
              _this.ge.homGifObj.isActive = true;
              _this.ge.mainVideoObj.isActive = false;
              _this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/third-loop.mp4';
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) >= 104 && Math.round(_this.ge.mainVideoElem.currentTime) < 106 && !_this.ge.homGifObj.music.includes('unchecked') && !_this.ge.homGifObj.homework.includes('unchecked')) {
              _this.ge.mainVideoElem.currentTime = 107;

              _this.ge.mainVideoElem.play();
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) >= 106 && Math.round(_this.ge.mainVideoElem.currentTime) < 108) {
              _this.ge.homGifObj.isActive = false;
              _this.ge.mainVideoObj.isActive = true;
              _this.ge.fomGifObj.isActive = false;
              _this.ge.backgroundGifObj.isActive = false;
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) == 115) {
              _this.ge.mainVideoElem.pause();

              _this.ge.backgroundGifObj.isActive = true;
              _this.ge.lofGifObj.isActive = true;
              _this.ge.mainVideoObj.isActive = false;
              _this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/fifth-loop.mp4';
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) == 183) {
              _this.ge.fomGifObj.mother = './assets/mother_checked.gif';
              _this.ge.fomGifObj.father = './assets/father_checked.gif';
              _this.ge.myselfGifObj.isActive = true;

              _this.ge.mainVideoElem.pause();

              _this.ge.backgroundGifObj.isActive = true;
              _this.ge.fomGifObj.isActive = true;
              _this.ge.mainVideoObj.isActive = false;
              _this.ge.secondaryVideoObj.src = 'https://mymp4videos.s3.eu-central-1.amazonaws.com/sixth-loop.mp4';
            }

            if (Math.round(_this.ge.mainVideoElem.currentTime) == 196) {
              _this.ge.mainVideoElem.currentTime = 197;

              _this.ge.mainVideoElem.pause();

              _this.ge.endSceneGif.isActive = true;
            }
          }, 1000);
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ge.mainVideoElem = document.getElementById('main-video');
          this.ge.mainVideoElem.pause();
          this.checkMainTime();
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this2 = this;

          if (this.ge.endSceneGif.isActive && !this.endCredit) {
            this.endCredit = true;
            setTimeout(function () {
              _this2.ge.endSceneGif.isActive = false;
              setTimeout(function () {
                _this2.ge.replayGifObj.isActive = true;
              }, 800);
            }, 4800);
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 2,
      consts: [[1, "main-frame"], [1, "main-video-frame"], ["id", "main-video", "autoplay", "true", "muted", ""], ["type", "video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\"", 3, "src"], [1, "gif-manager"], ["class", "temp-video", 4, "ngIf"], [1, "temp-video"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ge.mainVideoObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ge.mainVideoObj.isActive);
        }
      },
      directives: [_manager_manager_component__WEBPACK_IMPORTED_MODULE_2__["ManagerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_4__["SecondaryComponent"]],
      styles: [".start-button[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 200px;\r\n    height: 90px;\r\n    position: absolute;\r\n    top: 35%;\r\n    left: 45%;\r\n}\r\n\r\n.main-frame[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    \r\n    background: black;\r\n    \r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.main-video-frame[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: 3;\r\n}\r\n\r\n.gif-manager[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 15;\r\n}\r\n\r\n.temp-video[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1idXR0b257XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzUlO1xyXG4gICAgbGVmdDogNDUlO1xyXG59XHJcblxyXG4ubWFpbi1mcmFtZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgLyogbWFyZ2luOiA4cHg7ICovXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWFpbi12aWRlby1mcmFtZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uZ2lmLW1hbmFnZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE1O1xyXG59XHJcblxyXG4udGVtcC12aWRlb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _manager_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../manager/manager.component */
    "./src/manager/manager.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../secondary/secondary.component */
    "./src/secondary/secondary.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryComponent"], _manager_manager_component__WEBPACK_IMPORTED_MODULE_0__["ManagerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryComponent"], _manager_manager_component__WEBPACK_IMPORTED_MODULE_0__["ManagerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/global-elements.service.ts":
  /*!********************************************!*\
    !*** ./src/app/global-elements.service.ts ***!
    \********************************************/

  /*! exports provided: GlobalElementsService */

  /***/
  function srcAppGlobalElementsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalElementsService", function () {
      return GlobalElementsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var GlobalElementsService = function GlobalElementsService(sanitizer) {
      _classCallCheck(this, GlobalElementsService);

      this.sanitizer = sanitizer;
      this.mainVideoObj = {
        src: "https://mymp4videos.s3.eu-central-1.amazonaws.com/no_slides.mp4",
        isActive: false,
        currentTime: 7
      };
      this.secondaryVideoObj = {
        src: "https://mymp4videos.s3.eu-central-1.amazonaws.com/first-loop.mp4",
        isActive: true,
        currentTime: 0
      };
      this.enterGif = './assets/enter_unchecked.gif';
      this.fomGifObj = {
        father: './assets/father_unchecked.gif',
        mother: './assets/mother_unchecked.gif',
        question: './assets/parent_side.gif',
        isActive: false,
        fomCounter: 0
      };
      this.homGifObj = {
        homework: './assets/homework_unchecked.gif',
        music: './assets/music_unchecked.gif',
        question: './assets/pick_diversion.gif',
        isActive: false
      };
      this.lofGifObj = {
        lie: './assets/lie_unchecked.gif',
        filter: './assets/filter_unchecked.gif',
        question: './assets/pick_reaction.gif',
        isActive: false
      };
      this.backgroundGifObj = {
        src: './assets/background-gif.gif',
        isActive: false
      };
      this.myselfGifObj = {
        src: './assets/myself_unchecked.gif',
        isActive: false
      };
      this.endSceneGif = {
        src: './assets/credit.gif',
        isActive: false
      };
      this.replayGifObj = {
        src: './assets/replay.gif',
        isActive: false
      };
    };

    GlobalElementsService.ɵfac = function GlobalElementsService_Factory(t) {
      return new (t || GlobalElementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    GlobalElementsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlobalElementsService,
      factory: GlobalElementsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalElementsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/manager/manager.component.ts":
  /*!******************************************!*\
    !*** ./src/manager/manager.component.ts ***!
    \******************************************/

  /*! exports provided: ManagerComponent */

  /***/
  function srcManagerManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagerComponent", function () {
      return ManagerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../app/global-elements.service */
    "./src/app/global-elements.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManagerComponent_img_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_1_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.playVid();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.ge.enterGif, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.ge.backgroundGifObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_3_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.fomClicked("father");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.ge.fomGifObj.father, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_4_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.fomClicked("mother");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.ge.fomGifObj.mother, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.ge.fomGifObj.question, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_6_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.myselfClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.ge.myselfGifObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
      }
    }

    function ManagerComponent_img_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_8_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.homClicked("homework");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.ge.homGifObj.homework, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_9_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.homClicked("music");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.ge.homGifObj.music, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.ge.homGifObj.question, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_11_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.lofClicked("lie");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.ge.lofGifObj.lie, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_12_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.lofClicked("filter");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.ge.lofGifObj.filter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.ge.lofGifObj.question, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.ge.endSceneGif.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ManagerComponent_img_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_img_15_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.replayClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.ge.replayGifObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ManagerComponent = /*#__PURE__*/function () {
      function ManagerComponent(ge) {
        var _this3 = this;

        _classCallCheck(this, ManagerComponent);

        this.ge = ge;

        this.playVid = function () {
          console.log("playing vid");
          _this3.ge.enterGif = './assets/enter_checked.gif';
          setTimeout(function () {
            _this3.ge.secondaryVideoObj.isActive = false;
            clearInterval(_this3.ge.initialInterval);
            _this3.ge.secondaryVideoElem = document.getElementById('secondary-loop');
            _this3.ge.secondaryVideoElem.currentTime = 20;
            _this3.ge.mainVideoElem.currentTime = _this3.ge.mainVideoObj.currentTime;
            setTimeout(function () {
              console.log(_this3.ge.mainVideoElem);

              _this3.ge.mainVideoElem.play(); // this.ge.mainVideoElem.style.zIndex = 6;


              _this3.ge.mainVideoObj.isActive = true;
            }, 1600);
          }, 400);
        };

        this.fomClicked = function (gifName) {
          _this3.ge.fomGifObj.fomCounter++;

          if (gifName == 'father') {
            _this3.ge.fomGifObj.father = './assets/father_checked.gif';
          } else {
            _this3.ge.fomGifObj.mother = './assets/mother_checked.gif';
          }

          setTimeout(function () {
            _this3.ge.backgroundGifObj.isActive = false;
            _this3.ge.fomGifObj.isActive = false;
            _this3.ge.mainVideoObj.isActive = true;
            _this3.ge.fomGifObj.mother = './assets/mother_unchecked.gif';
            _this3.ge.fomGifObj.father = './assets/father_unchecked.gif';

            if (Math.round(_this3.ge.mainVideoElem.currentTime) > 180) {} else {
              if (_this3.ge.fomGifObj.fomCounter == 3) {
                _this3.ge.mainVideoElem.currentTime = 107;
                _this3.ge.fomGifObj.mother = './assets/mother_unchecked.gif';
                _this3.ge.fomGifObj.father = './assets/father_unchecked.gif';
              }

              if (_this3.ge.fomGifObj.fomCounter == 2 && !_this3.ge.homGifObj.homework.includes('unchecked')) {
                _this3.ge.mainVideoElem.currentTime = 84;
              } // if(this.ge.fomGifObj.fomCounter == 2 && this.ge.homGifObj.homework.includes('unchecked')) {
              //   this.ge.mainVideoElem.currentTime = 115;
              // }


              if (_this3.ge.fomGifObj.fomCounter == 1) {
                _this3.ge.mainVideoElem.currentTime = 28.3;
              }

              _this3.ge.mainVideoElem.play();
            }
          }, 400);
        };

        this.lofClicked = function (gifName) {
          if (gifName == 'lie') {
            _this3.ge.lofGifObj.lie = './assets/lie_checked.gif';
          } else {
            _this3.ge.lofGifObj.filter = './assets/filter_checked.gif';
          }

          setTimeout(function () {
            _this3.ge.backgroundGifObj.isActive = false;
            _this3.ge.lofGifObj.isActive = false;
            _this3.ge.mainVideoObj.isActive = true;

            if (gifName == 'lie') {
              _this3.ge.mainVideoElem.currentTime = 118;
            } else {
              _this3.ge.mainVideoElem.currentTime = 123.78;
            }

            _this3.ge.mainVideoElem.play();
          }, 400);
        };

        this.homClicked = function (gifName) {
          if (gifName == 'homework') {
            _this3.ge.homGifObj.homework = './assets/homework_checked.gif';
            _this3.ge.mainVideoElem.currentTime = 50;
          } else {
            _this3.ge.homGifObj.music = './assets/music_checked.gif';
            _this3.ge.mainVideoElem.currentTime = 87;
          }

          setTimeout(function () {
            if (gifName == 'homework') {
              _this3.ge.homGifObj.homework = './assets/homework_checked.gif';
              _this3.ge.mainVideoElem.currentTime = 50;
            } else {
              _this3.ge.homGifObj.music = './assets/music_checked.gif';
              _this3.ge.mainVideoElem.currentTime = 87;
            }

            _this3.ge.backgroundGifObj.isActive = false;
            _this3.ge.homGifObj.isActive = false;
            _this3.ge.mainVideoObj.isActive = true;

            _this3.ge.mainVideoElem.play();
          }, 400);
        };

        this.myselfClicked = function () {
          _this3.ge.myselfGifObj.src = './assets/myself_checked.gif';
          _this3.ge.mainVideoElem.currentTime = 195;
          setTimeout(function () {
            _this3.ge.myselfGifObj.isActive = false;
            _this3.ge.backgroundGifObj.isActive = false;
            _this3.ge.fomGifObj.isActive = false;
            _this3.ge.mainVideoObj.isActive = true;

            _this3.ge.mainVideoElem.play();
          }, 600);
        };

        this.replayClick = function () {
          clearInterval(_this3.ge.mainVidInterval);
          location.reload();
        };
      }

      _createClass(ManagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {}
      }]);

      return ManagerComponent;
    }();

    ManagerComponent.ɵfac = function ManagerComponent_Factory(t) {
      return new (t || ManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"]));
    };

    ManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagerComponent,
      selectors: [["app-manager"]],
      decls: 16,
      vars: 15,
      consts: [[1, "video-buttons"], ["class", "initial-play", 3, "src", "click", 4, "ngIf"], ["class", "background-gif", 3, "src", 4, "ngIf"], ["id", "father", "class", "fom-gif right-gif", 3, "src", "click", 4, "ngIf"], ["id", "mother", "class", "fom-gif left-gif", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif question-gif", 3, "src", 4, "ngIf"], ["class", "fom-gif myself-gif myself", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif myself-gif myself-question-gif", "src", "../assets/pick_side_last.gif", 4, "ngIf"], ["class", "fom-gif left-gif homework", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif right-gif music", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif question-gif hom-question", 3, "src", 4, "ngIf"], ["class", "fom-gif right-gif lie", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif left-gif filter", 3, "src", "click", 4, "ngIf"], ["class", "fom-gif question-gif lof-question", 3, "src", 4, "ngIf"], ["class", "credit", 3, "src", 4, "ngIf"], ["class", "replay", 3, "src", "click", 4, "ngIf"], [1, "initial-play", 3, "src", "click"], [1, "background-gif", 3, "src"], ["id", "father", 1, "fom-gif", "right-gif", 3, "src", "click"], ["id", "mother", 1, "fom-gif", "left-gif", 3, "src", "click"], [1, "fom-gif", "question-gif", 3, "src"], [1, "fom-gif", "myself-gif", "myself", 3, "src", "click"], ["src", "../assets/pick_side_last.gif", 1, "fom-gif", "myself-gif", "myself-question-gif"], [1, "fom-gif", "left-gif", "homework", 3, "src", "click"], [1, "fom-gif", "right-gif", "music", 3, "src", "click"], [1, "fom-gif", "question-gif", "hom-question", 3, "src"], [1, "fom-gif", "right-gif", "lie", 3, "src", "click"], [1, "fom-gif", "left-gif", "filter", 3, "src", "click"], [1, "fom-gif", "question-gif", "lof-question", 3, "src"], [1, "credit", 3, "src"], [1, "replay", 3, "src", "click"]],
      template: function ManagerComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".video-buttons[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 5;\r\n}\r\n\r\n.initial-play[_ngcontent-%COMP%]{\r\n    left: 42%;\r\n    top: 39%;\r\n    position: absolute;\r\n    width: 17%;\r\n    cursor: pointer;\r\n}\r\n\r\n.background-gif[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0.8;\r\n}\r\n\r\n.fom-gif[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    \r\n}\r\n\r\n.credit[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 20;\r\n}\r\n\r\n.replay[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    position: absolute;\r\n    left: 25%;\r\n    top: 20%;\r\n    z-index: 25;\r\n    cursor: pointer;\r\n}\r\n\r\n.right-gif[_ngcontent-%COMP%]{\r\n    right: 30%;\r\n    top: 48%;\r\n    width: 15%;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-gif[_ngcontent-%COMP%]{\r\n    left: 30%;\r\n    top: 48%;\r\n    width: 15%;\r\n    cursor: pointer;\r\n}\r\n\r\n.question-gif[_ngcontent-%COMP%]{\r\n    left: 33%;\r\n    top: 30%;\r\n    width: 33%;\r\n}\r\n\r\n.myself-gif[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 14%;\r\n    top: 65%;\r\n    left: 43%;\r\n    cursor: pointer;\r\n}\r\n\r\n.homework[_ngcontent-%COMP%]{\r\n    left: 34%;\r\n    top: 50%;\r\n    width: 15%;\r\n\r\n}\r\n\r\n.music[_ngcontent-%COMP%]{\r\n    right: 31%;\r\n    top: 50%;\r\n    width: 13%;\r\n}\r\n\r\n.hom-question[_ngcontent-%COMP%]{\r\n    left: 40%;\r\n    top: 34%;\r\n    width: 22%;\r\n}\r\n\r\n.lie[_ngcontent-%COMP%]{\r\n    right: 31%;\r\n    top: 50%;\r\n    width: 14%;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]{\r\n    left: 35%;\r\n    top: 50%;\r\n    width: 14%;\r\n}\r\n\r\n.lof-question[_ngcontent-%COMP%]{\r\n    left: 38%;\r\n    top: 32%;\r\n    width: 25%;\r\n}\r\n\r\n#father[_ngcontent-%COMP%]{\r\n    top: 46%;\r\n    width: 15%;\r\n    right: 31%;\r\n}\r\n\r\n#mother[_ngcontent-%COMP%]{\r\n    left: 31%;\r\n    top: 46%;\r\n    width: 15%;\r\n}\r\n\r\n.myself-question-gif[_ngcontent-%COMP%]{\r\n    top: 31%;\r\n    width: 25%;\r\n    left: 37%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYW5hZ2VyL21hbmFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL21hbmFnZXIvbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWJ1dHRvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5pbml0aWFsLXBsYXl7XHJcbiAgICBsZWZ0OiA0MiU7XHJcbiAgICB0b3A6IDM5JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYmFja2dyb3VuZC1naWZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmZvbS1naWZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBcclxufVxyXG5cclxuLmNyZWRpdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcblxyXG4ucmVwbGF5e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgei1pbmRleDogMjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodC1naWZ7XHJcbiAgICByaWdodDogMzAlO1xyXG4gICAgdG9wOiA0OCU7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGVmdC1naWZ7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICB0b3A6IDQ4JTtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5xdWVzdGlvbi1naWZ7XHJcbiAgICBsZWZ0OiAzMyU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHdpZHRoOiAzMyU7XHJcbn1cclxuXHJcbi5teXNlbGYtZ2lme1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE0JTtcclxuICAgIHRvcDogNjUlO1xyXG4gICAgbGVmdDogNDMlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaG9tZXdvcmt7XHJcbiAgICBsZWZ0OiAzNCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAxNSU7XHJcblxyXG59XHJcblxyXG4ubXVzaWN7XHJcbiAgICByaWdodDogMzElO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMTMlO1xyXG59XHJcblxyXG4uaG9tLXF1ZXN0aW9ue1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgdG9wOiAzNCU7XHJcbiAgICB3aWR0aDogMjIlO1xyXG59XHJcblxyXG4ubGlle1xyXG4gICAgcmlnaHQ6IDMxJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDE0JTtcclxufVxyXG5cclxuLmZpbHRlcntcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDE0JTtcclxufVxyXG5cclxuLmxvZi1xdWVzdGlvbntcclxuICAgIGxlZnQ6IDM4JTtcclxuICAgIHRvcDogMzIlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuI2ZhdGhlcntcclxuICAgIHRvcDogNDYlO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHJpZ2h0OiAzMSU7XHJcbn1cclxuXHJcbiNtb3RoZXJ7XHJcbiAgICBsZWZ0OiAzMSU7XHJcbiAgICB0b3A6IDQ2JTtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5teXNlbGYtcXVlc3Rpb24tZ2lme1xyXG4gICAgdG9wOiAzMSU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbGVmdDogMzclO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manager',
          templateUrl: './manager.component.html',
          styleUrls: ['./manager.component.css']
        }]
      }], function () {
        return [{
          type: _app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/secondary/secondary.component.ts":
  /*!**********************************************!*\
    !*** ./src/secondary/secondary.component.ts ***!
    \**********************************************/

  /*! exports provided: SecondaryComponent */

  /***/
  function srcSecondarySecondaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondaryComponent", function () {
      return SecondaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../app/global-elements.service */
    "./src/app/global-elements.service.ts");

    var SecondaryComponent = /*#__PURE__*/function () {
      function SecondaryComponent(ge) {
        var _this4 = this;

        _classCallCheck(this, SecondaryComponent);

        this.ge = ge;
        this.currentTime = 0;
        this.endOfFirstLoopSec = 20;
        this.myEvent = new Event('click', {
          bubbles: true
        });

        this.createFirstLoop = function () {
          var btn = document.getElementById('test');
          var box = btn.getBoundingClientRect(),
              coordX = box.left + (box.right - box.left) / 2,
              coordY = box.top + (box.bottom - box.top) / 2;
          _this4.secondaryVideoElem = document.getElementById('secondary-loop'); // btn.addEventListener('click', e =>{
          //   console.log(e)
          // })

          if (_this4.secondaryVideoElem) {
            setTimeout(function () {
              _this4.simulateMouseEvent(btn, "mousedown", coordX, coordY);

              _this4.simulateMouseEvent(btn, "mouseup", coordX, coordY);

              _this4.simulateMouseEvent(btn, "click", coordX, coordY); // btn.dispatchEvent(this.myEvent)
              // document.getElementById('test').click()

            }, 1200);
            _this4.ge.initialInterval = setInterval(function () {
              _this4.currentTime = Math.round(_this4.secondaryVideoElem.currentTime);

              if (_this4.currentTime == _this4.endOfFirstLoopSec) {
                _this4.secondaryVideoElem.currentTime = 3;
              }
            }, 1000);
          }
        };

        this.videoClicked = function (event) {
          console.log(event);

          _this4.secondaryVideoElem.play();
        };

        this.simulateMouseEvent = function (element, eventName, coordX, coordY) {
          element.dispatchEvent(new MouseEvent(eventName, {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: coordX,
            clientY: coordY,
            button: 0
          }));
        };
      }

      _createClass(SecondaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createFirstLoop();
        }
      }]);

      return SecondaryComponent;
    }();

    SecondaryComponent.ɵfac = function SecondaryComponent_Factory(t) {
      return new (t || SecondaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"]));
    };

    SecondaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecondaryComponent,
      selectors: [["app-secondary"]],
      decls: 3,
      vars: 1,
      consts: [["id", "secondary-loop", "muted", "", "autoplay", "", 1, "video-frame"], ["type", "video/mp4;codecs=\"avc1.42E01E, mp4a.40.2\"", 3, "src"], ["id", "test", 3, "click"]],
      template: function SecondaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecondaryComponent_Template_button_click_2_listener($event) {
            return ctx.videoClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ge.secondaryVideoObj.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".video-frame[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    background: black;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: 22;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZWNvbmRhcnkvc2Vjb25kYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL3NlY29uZGFyeS9zZWNvbmRhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1mcmFtZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMjI7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-secondary',
          templateUrl: './secondary.component.html',
          styleUrls: ['./secondary.component.css']
        }]
      }], function () {
        return [{
          type: _app_global_elements_service__WEBPACK_IMPORTED_MODULE_1__["GlobalElementsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\yossil\Desktop\Hadar's Project\hadar\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map