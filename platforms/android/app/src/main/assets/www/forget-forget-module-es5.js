(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-forget-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppForgetForgetPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'RESET_PASSWORD' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"login-header\">\n    <img src=\"./assets/img/logo.png\" />\n    <!-- <h3>{{ 'APP_NAME' | translate }}</h3>\n    <p>{{ 'APP_SUBTEXT' | translate }} </p> -->\n  </div>\n  <div class=\"ion-padding\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\">{{'EMAIL_ADDRESS' | translate }}</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div style=\"padding:0px 16px\">\n      <ion-button color=\"dark\" expand=\"block\" (click)=\"reset()\">{{'RESET_PASSWORD' | translate }}</ion-button>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/forget/forget-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/forget/forget-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ForgetPageRoutingModule */

    /***/
    function srcAppForgetForgetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPageRoutingModule", function () {
        return ForgetPageRoutingModule;
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


      var _forget_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forget.page */
      "./src/app/forget/forget.page.ts");

      var routes = [{
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPage"]
      }];

      var ForgetPageRoutingModule = function ForgetPageRoutingModule() {
        _classCallCheck(this, ForgetPageRoutingModule);
      };

      ForgetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgetPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/forget/forget.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/forget/forget.module.ts ***!
      \*****************************************/

    /*! exports provided: ForgetPageModule */

    /***/
    function srcAppForgetForgetModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function () {
        return ForgetPageModule;
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


      var _forget_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forget-routing.module */
      "./src/app/forget/forget-routing.module.ts");
      /* harmony import */


      var _forget_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forget.page */
      "./src/app/forget/forget.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ForgetPageModule = function ForgetPageModule() {
        _classCallCheck(this, ForgetPageModule);
      };

      ForgetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _forget_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPageRoutingModule"]],
        declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPage"]]
      })], ForgetPageModule);
      /***/
    },

    /***/
    "./src/app/forget/forget.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/forget/forget.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppForgetForgetPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0L2ZvcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUIsaUNBQUE7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXQvZm9yZ2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQ6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/forget/forget.page.ts":
    /*!***************************************!*\
      !*** ./src/app/forget/forget.page.ts ***!
      \***************************************/

    /*! exports provided: ForgetPage */

    /***/
    function srcAppForgetForgetPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPage", function () {
        return ForgetPage;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");

      var ForgetPage = /*#__PURE__*/function () {
        function ForgetPage(authService, commonService) {
          _classCallCheck(this, ForgetPage);

          this.authService = authService;
          this.commonService = commonService;
        }

        _createClass(ForgetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "reset",
          value: function reset() {
            var _this = this;

            var email = this.email.toLowerCase().trim();

            if (this.email) {
              this.commonService.showLoader();
              this.authService.resetPassword(email).then(function (data) {
                _this.commonService.hideLoader();

                _this.commonService.showToast('Please Check inbox');
              })["catch"](function (err) {
                _this.commonService.hideLoader();

                _this.commonService.showToast(err.message);
              });
            }
          }
        }]);

        return ForgetPage;
      }();

      ForgetPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
        }];
      };

      ForgetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forget.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forget.page.scss */
        "./src/app/forget/forget.page.scss"))["default"]]
      })], ForgetPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forget-forget-module-es5.js.map