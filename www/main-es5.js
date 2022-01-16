(function () {
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
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\">\n              <ion-icon slot=\"start\" [md]=\"p.icon + '-outline'\"></ion-icon>\n              <ion-label>{{ p.title | translate }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'forget',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | forget-forget-module */
          [__webpack_require__.e("common"), __webpack_require__.e("forget-forget-module")]).then(__webpack_require__.bind(null,
          /*! ./forget/forget.module */
          "./src/app/forget/forget.module.ts")).then(function (m) {
            return m.ForgetPageModule;
          });
        }
      }, {
        path: 'history',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | history-history-module */
          [__webpack_require__.e("common"), __webpack_require__.e("history-history-module")]).then(__webpack_require__.bind(null,
          /*! ./history/history.module */
          "./src/app/history/history.module.ts")).then(function (m) {
            return m.HistoryPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | notifications-notifications-module */
          [__webpack_require__.e("common"), __webpack_require__.e("notifications-notifications-module")]).then(__webpack_require__.bind(null,
          /*! ./notifications/notifications.module */
          "./src/app/notifications/notifications.module.ts")).then(function (m) {
            return m.NotificationsPageModule;
          });
        }
      }, {
        path: 'pickup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pickup-pickup-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pickup-pickup-module")]).then(__webpack_require__.bind(null,
          /*! ./pickup/pickup.module */
          "./src/app/pickup/pickup.module.ts")).then(function (m) {
            return m.PickupPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | register-register-module */
          [__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "./src/app/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | settings-settings-module */
          [__webpack_require__.e("common"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null,
          /*! ./settings/settings.module */
          "./src/app/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'wallet',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | wallet-wallet-module */
          [__webpack_require__.e("common"), __webpack_require__.e("wallet-wallet-module")]).then(__webpack_require__.bind(null,
          /*! ./wallet/wallet.module */
          "./src/app/wallet/wallet.module.ts")).then(function (m) {
            return m.WalletPageModule;
          });
        }
      }, {
        path: 'pagamentos',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pagamentos-pagamentos-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pagamentos-pagamentos-module")]).then(__webpack_require__.bind(null,
          /*! ./pagamentos/pagamentos.module */
          "./src/app/pagamentos/pagamentos.module.ts")).then(function (m) {
            return m.PagamentosPageModule;
          });
        }
      }, {
        path: 'produtos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | produtos-produtos-module */
          "produtos-produtos-module").then(__webpack_require__.bind(null,
          /*! ./produtos/produtos.module */
          "./src/app/produtos/produtos.module.ts")).then(function (m) {
            return m.ProdutosPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-list {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0e1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufSJdfQ== */";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_trip_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/trip.service */
      "./src/app/services/trip.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_driver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/driver.service */
      "./src/app/services/driver.service.ts");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, menuCtrl, translate, afAuth, afDB, authService, tripService, driverService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.translate = translate;
          this.afAuth = afAuth;
          this.afDB = afDB;
          this.authService = authService;
          this.tripService = tripService;
          this.driverService = driverService;
          this.appPages = [{
            title: 'HOME',
            url: '/home',
            icon: 'home'
          }, {
            title: 'Meus Atendimentos',
            url: '/history',
            icon: 'time'
          }, {
            title: 'Carteira',
            url: '/wallet',
            icon: 'wallet'
          }, {
            title: 'Pagamentos',
            url: '/pagamentos',
            icon: 'card'
          }, {
            title: 'Notificações',
            url: '/notifications',
            icon: 'notifications'
          }, {
            title: 'Produtos',
            url: '/produtos',
            icon: 'barcode'
          }, {
            title: 'Configurações',
            url: '/settings',
            icon: 'settings'
          }];
          this.translate.setDefaultLang('en');
          localStorage.getItem('lang') == null ? this.translate.use('en') : this.translate.use(localStorage.getItem('lang'));
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.splashScreen.hide();

              _this.statusBar.styleDefault();

              _this.statusBar.styleLightContent();

              _this.validateAuthState();
            });
          }
        }, {
          key: "validateAuthState",
          value: function validateAuthState() {
            var _this2 = this;

            this.afAuth.authState.subscribe(function (authData) {
              console.log('autenticaçao', authData);

              if (authData != null) {
                _this2.menuCtrl.enable(true);

                _this2.router.navigateByUrl('/home', {
                  skipLocationChange: true,
                  replaceUrl: true
                });
              } else {
                _this2.router.navigateByUrl('/login', {
                  skipLocationChange: true,
                  replaceUrl: true
                });

                _this2.menuCtrl.enable(false);
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabase"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: _services_trip_service__WEBPACK_IMPORTED_MODULE_8__["TripService"]
        }, {
          type: _services_driver_service__WEBPACK_IMPORTED_MODULE_10__["DriverService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "./node_modules/@ionic-native/firebase-x/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/background-mode/ngx */
      "./node_modules/@ionic-native/background-mode/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, './assets/lang/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          mode: 'md'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
          }
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundMode"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_8__["FirebaseX"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(db, afAuth) {
          _classCallCheck(this, AuthService);

          this.db = db;
          this.afAuth = afAuth;
          this.currentUser = {};
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(email, pass) {
            return this.afAuth.signInWithEmailAndPassword(email, pass);
          }
        }, {
          key: "reset",
          value: function reset(email) {
            return this.afAuth.sendPasswordResetEmail(email);
          }
        }, {
          key: "register",
          value: function register(userInfo) {
            var _this3 = this;

            //console.log(userInfo);
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
              var email = userInfo.email.toLowerCase().trim();

              _this3.afAuth.createUserWithEmailAndPassword(email, userInfo.password).then(function (authData) {
                // update driver object
                console.log(authData);
                userInfo.uid = authData.user.uid;
                userInfo.photoURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_AVATAR"];
                userInfo.canRide = true;
                userInfo.isPhoneVerified = false;
                userInfo.createdAt = Date.now();

                _this3.getUserData().then(function (user) {
                  return user.updateProfile({
                    displayName: userInfo.name,
                    photoURL: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_AVATAR"]
                  });
                });

                _this3.db.object('drivers/' + userInfo.uid).update(userInfo);

                observer.next();
              })["catch"](function (error) {
                if (error) {
                  observer.error(error);
                }
              });
            });
          }
        }, {
          key: "setUserData",
          value: function setUserData(obj) {
            return this.currentUser = obj;
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            return this.afAuth.currentUser;
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            return this.db.object('drivers/' + id);
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.afAuth.signOut(); // logout from firebase
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return this.afAuth.sendPasswordResetEmail(email);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/driver.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/driver.service.ts ***!
      \********************************************/

    /*! exports provided: DriverService */

    /***/
    function srcAppServicesDriverServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverService", function () {
        return DriverService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var DriverService = /*#__PURE__*/function () {
        function DriverService(db, authService) {
          _classCallCheck(this, DriverService);

          this.db = db;
          this.authService = authService;
        } // get driver by id


        _createClass(DriverService, [{
          key: "getDriver",
          value: function getDriver(uid) {
            return this.db.object('drivers/' + uid);
          }
        }, {
          key: "remove",
          value: function remove(vehicleId, vehicleType, locality) {
            var path = 'localities/' + locality + '/' + vehicleType + '/' + vehicleId;
            this.db.object(path).remove();
          } // update driver's position

        }, {
          key: "updatePosition",
          value: function updatePosition(vehicleId, vehicleType, locality, lat, lng, rating, name) {
            var _this4 = this;

            var path = 'localities/' + locality + '/' + vehicleType + '/' + vehicleId;
            this.db.object(path).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (snapshot) {
              console.log(snapshot); // insert if not exists

              if (snapshot === null) {
                _this4.db.object(path).set({
                  key: vehicleId,
                  lat: lat,
                  lng: lng,
                  oldLat: lat,
                  oldLng: lng,
                  last_active: Date.now(),
                  rating: rating,
                  name: name
                }).then(function () {
                  _this4.db.object('drivers/' + vehicleId).update({
                    lat: lat,
                    lng: lng,
                    locality: locality
                  });
                });
              } else {
                // update
                _this4.db.object(path).update({
                  key: vehicleId,
                  lat: lat,
                  lng: lng,
                  oldLat: snapshot.lat,
                  oldLng: snapshot.lng,
                  last_active: Date.now(),
                  rating: rating,
                  name: name
                }).then(function () {
                  _this4.db.object('drivers/' + vehicleId).update({
                    lat: lat,
                    lng: lng,
                    locality: locality
                  });
                });
              }
            });
          }
        }]);

        return DriverService;
      }();

      DriverService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      DriverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DriverService);
      /***/
    },

    /***/
    "./src/app/services/trip.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/trip.service.ts ***!
      \******************************************/

    /*! exports provided: TripService */

    /***/
    function srcAppServicesTripServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TripService", function () {
        return TripService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var TripService = /*#__PURE__*/function () {
        function TripService(db, authService) {
          _classCallCheck(this, TripService);

          this.db = db;
          this.authService = authService;
        } // create trip from deal object


        _createClass(TripService, [{
          key: "createFromDeal",
          value: function createFromDeal(deal) {
            deal.status = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["TRIP_STATUS_WAITING"];
            deal.otp = Math.floor(1000 + Math.random() * 9000);
            return this.db.list('trips').push(deal);
          } // pickup passenger

        }, {
          key: "pickUp",
          value: function pickUp(tripId) {
            this.db.object('trips/' + tripId).update({
              pickedUpAt: Date.now(),
              status: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["TRIP_STATUS_GOING"]
            });
          } // drop off

        }, {
          key: "dropOff",
          value: function dropOff(tripId) {
            this.db.object('trips/' + tripId).update({
              droppedOffAt: Date.now(),
              status: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["TRIP_STATUS_FINISHED"]
            });
          }
        }, {
          key: "cancel",
          value: function cancel(tripId) {
            this.db.object('trips/' + tripId).update({
              droppedOffAt: Date.now(),
              status: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["TRIP_STATUS_CANCELED"]
            });
          }
        }, {
          key: "setCurrentTrip",
          value: function setCurrentTrip(tripId) {
            var _this5 = this;

            return this.db.object('trips/' + tripId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (snapshot) {
              _this5.db.object('trips/' + tripId).update({
                key: tripId
              });

              console.log(snapshot);

              if (snapshot != null) {
                _this5.currentTrip = Object.assign({
                  key: snapshot.key
                }, snapshot.payload.val());
              }
            });
          }
        }, {
          key: "getCurrentTrip",
          value: function getCurrentTrip() {
            return this.currentTrip;
          }
        }, {
          key: "getTripStatus",
          value: function getTripStatus(tripId) {
            return this.db.object('trips/' + tripId);
          }
        }, {
          key: "getPassenger",
          value: function getPassenger(passengerId) {
            return this.db.object('passengers/' + passengerId);
          } // get driver's trip

        }, {
          key: "getTrips",
          value: function getTrips(uid) {
            return this.db.list('trips', function (ref) {
              return ref.orderByChild('driverId').equalTo(uid);
            });
          }
        }, {
          key: "getLastTrips",
          value: function getLastTrips(uid) {
            return this.db.list('trips', function (ref) {
              return ref.orderByChild('driverId').equalTo(uid).limitToLast(3);
            });
          }
        }]);

        return TripService;
      }();

      TripService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      TripService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TripService);
      /***/
    },

    /***/
    "./src/environments/environment.prod.ts":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment, POSITION_INTERVAL, DEAL_STATUS_PENDING, DEAL_STATUS_ACCEPTED, DEAL_TIMEOUT, TRIP_STATUS_WAITING, TRIP_STATUS_GOING, TRIP_STATUS_FINISHED, TRIP_STATUS_CANCELED, TRANSACTION_TYPE_WITHDRAW, PLAY_AUDIO_ON_REQUEST, AUDIO_PATH, DEFAULT_AVATAR */

    /***/
    function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "POSITION_INTERVAL", function () {
        return POSITION_INTERVAL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEAL_STATUS_PENDING", function () {
        return DEAL_STATUS_PENDING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEAL_STATUS_ACCEPTED", function () {
        return DEAL_STATUS_ACCEPTED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEAL_TIMEOUT", function () {
        return DEAL_TIMEOUT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TRIP_STATUS_WAITING", function () {
        return TRIP_STATUS_WAITING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TRIP_STATUS_GOING", function () {
        return TRIP_STATUS_GOING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TRIP_STATUS_FINISHED", function () {
        return TRIP_STATUS_FINISHED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TRIP_STATUS_CANCELED", function () {
        return TRIP_STATUS_CANCELED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TRANSACTION_TYPE_WITHDRAW", function () {
        return TRANSACTION_TYPE_WITHDRAW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PLAY_AUDIO_ON_REQUEST", function () {
        return PLAY_AUDIO_ON_REQUEST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUDIO_PATH", function () {
        return AUDIO_PATH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_AVATAR", function () {
        return DEFAULT_AVATAR;
      });

      var environment = {
        production: true,
        firebase: {
          apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
          authDomain: "appjetport.firebaseapp.com",
          databaseURL: "https://appjetport-default-rtdb.firebaseio.com",
          projectId: "appjetport",
          storageBucket: "appjetport.appspot.com",
          messagingSenderId: "1012648687100",
          appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
          measurementId: "G-KKPVFVGG77"
        },
        langArr: [{
          name: 'English',
          code: 'en'
        }, {
          name: 'española',
          code: 'es'
        }, {
          name: 'عربى',
          code: 'ar'
        }, {
          name: '中文',
          code: 'cn'
        }],
        apiUrl: "https://appjetport.uc.r.appspot.com",
        mapOptions: {
          zoom: 17,
          mapTypeControl: false,
          zoomControl: false,
          fullscreenControl: false,
          streetViewControl: false
        }
      };
      var POSITION_INTERVAL = 10 * 1000; // 10s for refreshing geolocation

      var DEAL_STATUS_PENDING = 'pending';
      var DEAL_STATUS_ACCEPTED = 'accepted';
      var DEAL_TIMEOUT = 20; // 20 seconds

      var TRIP_STATUS_WAITING = 'waiting';
      var TRIP_STATUS_GOING = 'going';
      var TRIP_STATUS_FINISHED = 'finished';
      var TRIP_STATUS_CANCELED = 'canceled';
      var TRANSACTION_TYPE_WITHDRAW = 'withdraw';
      var PLAY_AUDIO_ON_REQUEST = true;
      var AUDIO_PATH = "./assets/audio/sound.mp3"; //must have mp3 file

      var DEFAULT_AVATAR = './assets/img/default.png';
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
        production: true,
        firebase: {
          apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
          authDomain: "appjetport.firebaseapp.com",
          databaseURL: "https://appjetport-default-rtdb.firebaseio.com",
          projectId: "appjetport",
          storageBucket: "appjetport.appspot.com",
          messagingSenderId: "1012648687100",
          appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
          measurementId: "G-KKPVFVGG77"
        },
        //apiUrl: 'http://localhost:3333', 
        apiUrl: "https://appjetport.uc.r.appspot.com",
        langArr: [{
          name: 'English',
          code: 'en'
        }, {
          name: 'española',
          code: 'es'
        }, {
          name: 'عربى',
          code: 'ar'
        }, {
          name: '中文',
          code: 'cn'
        }],
        mapOptions: {
          zoom: 17,
          mapTypeControl: false,
          zoomControl: false,
          fullscreenControl: false,
          streetViewControl: false
        }
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


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
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
      /*! /Users/wagner/Projetos /JetPort/JetAtualPublicado/tecnico/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map