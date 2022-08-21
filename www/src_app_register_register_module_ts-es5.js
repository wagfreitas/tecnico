(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdriver"] = self["webpackChunkdriver"] || []).push([["src_app_register_register_module_ts"], {
    /***/
    23963:
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageRoutingModule": function RegisterPageRoutingModule() {
          return (
            /* binding */
            _RegisterPageRoutingModule
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


      var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register.page */
      98135);

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
      }];

      var _RegisterPageRoutingModule = /*#__PURE__*/_createClass(function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      });

      _RegisterPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegisterPageRoutingModule);
      /***/
    },

    /***/
    18723:
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageModule": function RegisterPageModule() {
          return (
            /* binding */
            _RegisterPageModule
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-routing.module */
      23963);
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page */
      98135);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _RegisterPageModule = /*#__PURE__*/_createClass(function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      });

      _RegisterPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
      })], _RegisterPageModule);
      /***/
    },

    /***/
    98135:
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPage": function RegisterPage() {
          return (
            /* binding */
            _RegisterPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./register.page.html */
      29200);
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page.scss */
      69728);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      37556);
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/common.service */
      5620);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/storage */
      68274);
      /* harmony import */


      var _services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/setting.service */
      84207);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(translate, auth, common, afStorage, settingService, menuCtrl, router) {
          var _this = this;

          _classCallCheck(this, RegisterPage);

          this.translate = translate;
          this.auth = auth;
          this.common = common;
          this.afStorage = afStorage;
          this.settingService = settingService;
          this.menuCtrl = menuCtrl;
          this.router = router;
          this.userInfo = {};
          this.step = 'step1';
          this.types = [];
          this.settings = {};
          this.settingService.getSettings().subscribe(function (res) {
            return res != null ? _this.settings = res.payload.val() : _this.settings = {};
          });
        }

        _createClass(RegisterPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.settingService.getVehicleType().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(function (snapshot) {
              if (snapshot === null) {
                _this2.settingService.getDefaultVehicleType().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(function (snapshot) {
                  console.log(snapshot);
                  _this2.types = Object.keys(snapshot).map(function (key) {
                    return snapshot[key];
                  });
                });
              } else {
                _this2.types = Object.keys(snapshot).map(function (key) {
                  return snapshot[key];
                });
              }
            });
          }
        }, {
          key: "goto",
          value: function goto(step) {
            this.step = step;
          }
        }, {
          key: "openTerms",
          value: function openTerms() {
            window.open(this.settings.driverTermsURL, "_blank");
          }
        }, {
          key: "openPrivacy",
          value: function openPrivacy() {
            window.open(this.settings.driverPrivacyURL, "_blank");
          }
        }, {
          key: "signup",
          value: function signup() {
            var _this3 = this;

            console.log(this.userInfo);
            this.common.showLoader();
            this.userInfo.rating = parseInt(this.settings.driverInitialRating);
            this.userInfo.balance = parseFloat(this.settings.driverSignupBonus);
            this.userInfo.type = 'suv';
            this.auth.register(this.userInfo).subscribe(function () {
              _this3.common.hideLoader();

              localStorage.setItem('isLoggedInTec', 'true');

              _this3.router.navigateByUrl('/home');
            }, function (err) {
              _this3.common.hideLoader();

              _this3.common.showToast(err.message);
            });
          }
        }, {
          key: "chooseDocs",
          value: function chooseDocs() {
            document.getElementById('docsPDF').click();
          }
        }, {
          key: "uploadDocs",
          value: function uploadDocs() {
            var _this4 = this;

            this.common.showLoader();

            var _loop = function _loop() {
              var selectedFile = _arr[_i];
              console.log(selectedFile.name);
              var path = '/users/' + Date.now() + "".concat(selectedFile.name);

              var ref = _this4.afStorage.ref(path);

              ref.put(selectedFile).then(function () {
                ref.getDownloadURL().subscribe(function (url) {
                  return _this4.userInfo.docsURL = url;
                });

                _this4.common.hideLoader();
              })["catch"](function (err) {
                _this4.common.hideLoader();

                console.log(err);
              });
            };

            for (var _i = 0, _arr = [document.getElementById('docsPDF').files[0]]; _i < _arr.length; _i++) {
              _loop();
            }
          }
        }]);

        return RegisterPage;
      }();

      _RegisterPage.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__.AngularFireStorage
        }, {
          type: _services_setting_service__WEBPACK_IMPORTED_MODULE_4__.SettingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }];
      };

      _RegisterPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegisterPage);
      /***/
    },

    /***/
    69728:
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-md:after {\n  background-image: none !important;\n}\n\n.uploadDiv {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 120px;\n  background: #f9f9f9;\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQixpQ0FBQTtBQUVuQjs7QUFBQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUdEIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQ6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQgfVxuXG4udXBsb2FkRGl2e1xuIGRpc3BsYXk6IGZsZXg7XG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiBoZWlnaHQ6IDEyMHB4O1xuIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gbWFyZ2luOjE2cHg7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    29200:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"> Cadastrar </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"login-header\">\n    <img src=\"../../assets/img/logo.png\" />\n    <!-- <h3>{{ 'APP_NAME' | translate }}</h3>\n    <p>{{ 'APP_SUBTEXT' | translate }} </p> -->\n  </div>\n  <div>\n    <div class=\"ion-padding\" *ngIf=\"step == 'step1'\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\">Nome Completo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"userInfo.name\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"userInfo.email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Senha (MIN 6 digitos)</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"userInfo.password\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Fone</ion-label>\n          <ion-input type=\"tel\" [(ngModel)]=\"userInfo.phoneNumber\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <div style=\"padding: 0px 16px\">\n        <ion-button color=\"dark\" expand=\"block\" (click)=\"goto('step2')\">Cadastrar</ion-button>\n      </div>\n    </div>\n    <div *ngIf=\"step == 'step2'\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\">Marca do Veículo</ion-label>\n          <ion-input\n            type=\"text\"\n            [(ngModel)]=\"userInfo.brand\"\n            placeholder=\"Marca do Veiculo\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Modelo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"userInfo.model\" placeholder=\"Modelo\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Placa</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"userInfo.plate\" placeholder=\"Placa\"></ion-input>\n        </ion-item>\n\n        <p style=\"text-align: center; color: #4caf50\" *ngIf=\"userInfo.docsURL\">\n          Upload realizado com sucesso\n        </p>\n        <div (click)=\"chooseDocs()\" class=\"uploadDiv\">\n          <ion-icon name=\"cloud-upload\"></ion-icon>\n          <p>Clique para Upload</p>\n        </div>\n      </ion-list>\n      <div>\n        <form ngNoForm>\n          <input id=\"docsPDF\" name=\"file\" type=\"file\" (change)=\"uploadDocs()\" />\n        </form>\n      </div>\n      <div style=\"padding: 0px 16px\">\n        <ion-button color=\"dark\" expand=\"block\" (click)=\"signup()\">Registrar</ion-button>\n      </div>\n    </div>\n  </div>\n  <div class=\"ion-padding\">\n    <p class=\"termsText\">\n      Para se cadastrar você precisa aceitar nossos\n      <span class=\"link\" (click)=\"openTerms()\">termos & condições</span> &\n      <span class=\"link\" (click)=\"openPrivacy()\">política de privacidade</span>\n    </p>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_register_register_module_ts-es5.js.map