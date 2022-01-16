(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ user.name }}</ion-title>\n    <ion-buttons slot=\"end\">\n\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-segment [(ngModel)]=\"tabs\">\n    <ion-segment-button value=\"profile\">\n      {{'BASIC_PROFILE' | translate}}\n    </ion-segment-button>\n    <ion-segment-button value=\"carinfo\">\n      {{'CAR_INFO' | translate }}\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"tabs\" class=\"ion-padding\">\n    <div *ngSwitchCase=\"'profile'\">\n      <div style=\"text-align: center;\">\n        <img src=\"{{ user.photoURL }}\" onerror=\"this.src='./assets/img/default.png'\"\n          style=\"width:80px;height:80px;border-radius:100px\" (click)=\"chooseFile()\">\n        <form ngNoForm>\n          <input id=\"avatar\" name=\"file\" type=\"file\" (change)=\"upload()\">\n        </form>\n      </div>\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\">{{'FULLNAME' | translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.name\" placeholder=\"{{'FULLNAME' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'PHONE_NUMBER' | translate}}</ion-label>\n          <ion-input type=\"tel\" [(ngModel)]=\"user.phoneNumber\" placeholder=\"{{'PHONE_NUMBER' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'EMAIL_ADDRESS' | translate}}</ion-label>\n          <ion-input type=\"email\" disabled [(ngModel)]=\"user.email\" placeholder=\"{{'EMAIL_ADDRESS' | translate}}\">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'BANK_DETAILS' | translate}}</ion-label>\n          <ion-textarea [(ngModel)]=\"user.bankinfo\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'carinfo'\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\">{{'CAR_BRAND' | translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.brand\" placeholder=\"{{'CAR_BRAND' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'CAR_MODEL' | translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.model\" placeholder=\"{{'CAR_MODEL' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'PLATE_NUMBER' | translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.plate\" placeholder=\"{{'PLATE_NUMBER' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"types\">\n          <ion-label position=\"stacked\">{{'CAR_TYPE' | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"user.type\">\n            <ion-select-option value=\"{{ car.type }}\" *ngFor=\"let car of types\">\n              {{ car.name }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h3>{{'UPLOAD'| translate}} Docs</h3>\n          </ion-label>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"chooseDocs()\">\n              <ion-icon name=\"cloud-upload\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"user.docsURL\" (click)=\"download(user.docsURL)\">\n              <ion-icon name=\"cloud-download\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </ion-list>\n      <div>\n        <form ngNoForm>\n          <input id=\"docsPDF\" name=\"file\" type=\"file\" (change)=\"uploadDocs()\">\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-padding\">\n  <ion-button expand=\"block\" (click)=\"save()\">{{'SAVE' | translate}}</ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/profile/profile-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".footer-md:before {\n  background: none;\n}\n\n.header-md:after {\n  background: none;\n}\n\nion-segment {\n  --background: #222222;\n  --color: #ffffff;\n}\n\nion-segment-button {\n  --background: #222222;\n  --background-checked: #222222;\n  --background-focused: #222222;\n  --background-hover: #222222;\n  --border-color: #ffffff;\n  --color: #dddddd;\n  --color-focused: #ffffff;\n  --color-checked:#FFEB3B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItbWQ6YmVmb3Jle1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uaGVhZGVyLW1kOmFmdGVye1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1zZWdtZW50e1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjIyMjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tc2VnbWVudC1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMjIyMjIyO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMjIyMjIyO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzIyMjIyMjtcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjZGRkZGRkO1xuICAgIC0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6I0ZGRUIzQjtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/setting.service */
      "./src/app/services/setting.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(authService, settingService, common, platform, translate, router, afStorage) {
          _classCallCheck(this, ProfilePage);

          this.authService = authService;
          this.settingService = settingService;
          this.common = common;
          this.platform = platform;
          this.translate = translate;
          this.router = router;
          this.afStorage = afStorage;
          this.user = {};
          this.rating = 5;
          this.types = [];
          this.tabs = 'profile';
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.getUserData().then(function (user) {
              _this.authService.getUser(user.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(function (snapshot) {
                console.log(snapshot);
                _this.user = snapshot;
              });
            });
            this.settingService.getVehicleType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(function (snapshot) {
              if (snapshot === null) {
                _this.settingService.getDefaultVehicleType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(function (snapshot) {
                  console.log(snapshot);
                  _this.types = Object.keys(snapshot).map(function (key) {
                    return snapshot[key];
                  });
                });
              } else {
                _this.types = Object.keys(snapshot).map(function (key) {
                  return snapshot[key];
                });
              }
            });
            console.log(this.user);
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            console.log(this.user);
            this.authService.getUser(this.user.uid).update(this.user).then(function (data) {
              _this2.common.showToast("Updated successfully");

              _this2.router.navigateByUrl('/home');
            });
          }
        }, {
          key: "chooseFile",
          value: function chooseFile() {
            document.getElementById('avatar').click();
          }
        }, {
          key: "upload",
          value: function upload() {
            var _this3 = this;

            // Create a root reference
            this.common.showLoader();

            var _loop = function _loop() {
              var selectedFile = _arr[_i];
              var path = '/users/' + Date.now() + "_".concat(selectedFile.name);

              var ref = _this3.afStorage.ref(path);

              ref.put(selectedFile).then(function () {
                ref.getDownloadURL().subscribe(function (data) {
                  _this3.user.photoURL = data;
                });

                _this3.common.hideLoader();
              })["catch"](function (err) {
                _this3.common.hideLoader();

                console.log(err);
              });
            };

            for (var _i = 0, _arr = [document.getElementById('avatar').files[0]]; _i < _arr.length; _i++) {
              _loop();
            }
          } // code for uploading licence image

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

            var _loop2 = function _loop2() {
              var selectedFile = _arr2[_i2];
              console.log(selectedFile.name);
              var path = '/users/' + Date.now() + "".concat(selectedFile.name);

              var ref = _this4.afStorage.ref(path);

              ref.put(selectedFile).then(function () {
                ref.getDownloadURL().subscribe(function (url) {
                  return _this4.user.docsURL = url;
                });

                _this4.common.hideLoader();
              })["catch"](function (err) {
                _this4.common.hideLoader();

                console.log(err);
              });
            };

            for (var _i2 = 0, _arr2 = [document.getElementById('docsPDF').files[0]]; _i2 < _arr2.length; _i2++) {
              _loop2();
            }
          }
        }, {
          key: "download",
          value: function download(url) {
            window.open(url, "_blank");
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            this.authService.logout().then(function () {
              localStorage.clear();

              _this5.router.navigateByUrl('/login', {
                skipLocationChange: true,
                replaceUrl: true
              });
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map