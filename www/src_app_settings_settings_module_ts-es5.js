(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdriver"] = self["webpackChunkdriver"] || []).push([["src_app_settings_settings_module_ts"], {
    /***/
    91836:
    /*!*****************************************************!*\
      !*** ./src/app/settings/settings-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPageRoutingModule": function SettingsPageRoutingModule() {
          return (
            /* binding */
            _SettingsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings.page */
      7162);

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
      }];

      var _SettingsPageRoutingModule = /*#__PURE__*/_createClass(function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      });

      _SettingsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SettingsPageRoutingModule);
      /***/
    },

    /***/
    27075:
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPageModule": function SettingsPageModule() {
          return (
            /* binding */
            _SettingsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings-routing.module */
      91836);
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.page */
      7162);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _SettingsPageModule = /*#__PURE__*/_createClass(function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      });

      _SettingsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
      })], _SettingsPageModule);
      /***/
    },

    /***/
    7162:
    /*!*******************************************!*\
      !*** ./src/app/settings/settings.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPage": function SettingsPage() {
          return (
            /* binding */
            _SettingsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./settings.page.html */
      14718);
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.page.scss */
      69519);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/common.service */
      5620);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      37556);
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      98969);
      /* harmony import */


      var _services_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/setting.service */
      84207);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(translate, common, authService, fcm, ss, router) {
          var _this = this;

          _classCallCheck(this, SettingsPage);

          this.translate = translate;
          this.common = common;
          this.authService = authService;
          this.fcm = fcm;
          this.ss = ss;
          this.router = router;
          this.settings = {};
          this.langArr = [];
          this.lang = 'en';
          this.user = {};
          this.langArr = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.langArr;
          this.lang = this.common.getLang();
          this.ss.getSettings().subscribe(function (res) {
            return res != null ? _this.settings = res.payload.val() : _this.settings = {};
          });
        }

        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.authService.getUserData().then(function (user) {
              _this2.authService.getUser(user.uid).valueChanges().subscribe(function (user) {
                return _this2.user = user;
              });
            });
          }
        }, {
          key: "changeLang",
          value: function changeLang() {
            this.common.changeLang(this.lang);
          }
        }, {
          key: "openSupport",
          value: function openSupport() {
            window.open(this.settings.driverSupportURL, "_blank");
          }
        }, {
          key: "change",
          value: function change() {
            var _this3 = this;

            console.log(this.user.isPushEnabled);

            if (this.user.isPushEnabled == false || this.user.isPushEnabled == undefined) {
              this.fcm.getToken().then(function (token) {
                _this3.authService.getUser(_this3.user.uid).update({
                  isPushEnabled: true,
                  pushToken: token
                });
              })["catch"](function (err) {
                console.log(err);

                _this3.authService.getUser(_this3.user.uid).update({
                  isPushEnabled: false,
                  pushToken: null
                });
              });
            } else {
              this.authService.getUser(this.user.uid).update({
                isPushEnabled: false,
                pushToken: null
              });
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this4 = this;

            this.authService.logout().then(function () {
              localStorage.clear();

              _this4.router.navigateByUrl('/login', {
                skipLocationChange: true,
                replaceUrl: true
              });
            });
          }
        }]);

        return SettingsPage;
      }();

      _SettingsPage.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
        }, {
          type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_5__.FirebaseX
        }, {
          type: _services_setting_service__WEBPACK_IMPORTED_MODULE_6__.SettingService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _SettingsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SettingsPage);
      /***/
    },

    /***/
    69519:
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    14718:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Configurações</ion-title>\n    <ion-buttons slot=\"end\">\n\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"{{user.photoURL}}\" onerror=\"this.src='./assets/img/default-dp.png'\" />\n      </ion-avatar>\n      <ion-label>\n        <h3 style=\"font-weight: 500;\">{{user.name}}</h3>\n        <p>{{user.phoneNumber}}</p>\n      </ion-label>\n      <ion-button slot=\"end\" color=\"dark\" fill=\"outline\" routerLink=\"/profile\">Editar</ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"notifications\"></ion-icon>\n      <ion-label>\n        <h3>Notificações </h3>\n        <p>Notificações em Texto</p>\n      </ion-label>\n      <ion-toggle slot=\"end\" (click)=\"change()\" [(ngModel)]=\"user.isPushEnabled\"></ion-toggle>\n    </ion-item>\n    <ion-item (click)=\"openSupport()\">\n      <ion-icon slot=\"start\" name=\"help-buoy\"></ion-icon>\n      <ion-label>\n       Ajuda\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_settings_settings_module_ts-es5.js.map