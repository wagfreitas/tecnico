(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{'WALLET' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"header\">\n    <h5>{{'CURRENT_BALANCE' | translate}}</h5>\n    <p class=\"amountText\">{{settings.currency}} {{ (driver)?.balance }}</p>\n    <ion-button slot=\"end\" color=\"light\" size=\"small\" fill=\"outline\" (click)=\"withdraw()\">{{'REQUEST' | translate}}\n    </ion-button>\n  </div>\n  <div class=\"ion-padding\" class=\"withdrawl-list\">\n    <ion-list lines=\"none\">\n      <p style=\"margin:8px\">{{'HISTORY' | translate}}</p>\n      <ion-item *ngFor=\"let record of records\">\n        <ion-icon name=\"logo-usd\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h3>ID: {{record.createdAt }}</h3>\n          <p>{{ record.createdAt | date: 'dd-MMM-yyyy hh:mm a'}}</p>\n        </ion-label>\n        <ion-note slot=\"end\">\n          <div class=\"amount\">{{settings.currency}} {{ record.amount }}</div>\n          <div class=\"status\">{{ record.status}}</div>\n        </ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/services/transaction.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/transaction.service.ts ***!
      \*************************************************/

    /*! exports provided: TransactionService */

    /***/
    function srcAppServicesTransactionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionService", function () {
        return TransactionService;
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


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");

      var TransactionService = /*#__PURE__*/function () {
        function TransactionService(db) {
          _classCallCheck(this, TransactionService);

          this.db = db;
        }

        _createClass(TransactionService, [{
          key: "getTransactions",
          value: function getTransactions(uid) {
            return this.db.list('transactions', function (ref) {
              return ref.orderByChild('userId').equalTo(uid);
            });
          }
        }, {
          key: "widthDraw",
          value: function widthDraw(user, amount) {
            return this.db.list('transactions/').push({
              userId: user.uid,
              name: user.name,
              amount: amount,
              createdAt: Date.now(),
              type: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["TRANSACTION_TYPE_WITHDRAW"],
              status: 'PENDING'
            });
          }
        }]);

        return TransactionService;
      }();

      TransactionService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }];
      };

      TransactionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TransactionService);
      /***/
    },

    /***/
    "./src/app/wallet/wallet-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/wallet/wallet-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: WalletPageRoutingModule */

    /***/
    function srcAppWalletWalletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function () {
        return WalletPageRoutingModule;
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


      var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wallet.page */
      "./src/app/wallet/wallet.page.ts");

      var routes = [{
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
      }];

      var WalletPageRoutingModule = function WalletPageRoutingModule() {
        _classCallCheck(this, WalletPageRoutingModule);
      };

      WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WalletPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/wallet/wallet.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.module.ts ***!
      \*****************************************/

    /*! exports provided: WalletPageModule */

    /***/
    function srcAppWalletWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
        return WalletPageModule;
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


      var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wallet-routing.module */
      "./src/app/wallet/wallet-routing.module.ts");
      /* harmony import */


      var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wallet.page */
      "./src/app/wallet/wallet.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var WalletPageModule = function WalletPageModule() {
        _classCallCheck(this, WalletPageModule);
      };

      WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalletPageRoutingModule"]],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
      })], WalletPageModule);
      /***/
    },

    /***/
    "./src/app/wallet/wallet.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  min-height: 200px;\n  text-align: center;\n  padding: 2em;\n  background-color: var(--ion-color-dark);\n}\n.header h5 {\n  text-transform: uppercase;\n  color: #777777;\n  font-size: 12px;\n  margin: 0;\n}\n.header .amountText {\n  font-size: 28px;\n  font-weight: bold;\n  color: var(--ion-color-dark-contrast);\n}\nion-item {\n  --background: #f9f9f9;\n  margin: 8px;\n  border-radius: 8px;\n}\n.footer-md:before {\n  background: none;\n}\n.withdrawl-list .amount {\n  font-weight: bold;\n  color: var(--ion-color-dark);\n  font-size: 16px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FBRVI7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFBQTtFQUNJLGdCQUFBO0FBR0o7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL3dhbGxldC93YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBoNXtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgfVxuICAgIC5hbW91bnRUZXh0e1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpXG4gICAgfVxufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5mb290ZXItbWQ6YmVmb3Jle1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi53aXRoZHJhd2wtbGlzdHtcbiAgICAuYW1vdW50e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/wallet/wallet.page.ts":
    /*!***************************************!*\
      !*** ./src/app/wallet/wallet.page.ts ***!
      \***************************************/

    /*! exports provided: WalletPage */

    /***/
    function srcAppWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
        return WalletPage;
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


      var _services_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/driver.service */
      "./src/app/services/driver.service.ts");
      /* harmony import */


      var _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/transaction.service */
      "./src/app/services/transaction.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/setting.service */
      "./src/app/services/setting.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");

      var WalletPage = /*#__PURE__*/function () {
        function WalletPage(transactionService, translate, driverService, common, alertCtrl, ss, authService) {
          _classCallCheck(this, WalletPage);

          this.transactionService = transactionService;
          this.translate = translate;
          this.driverService = driverService;
          this.common = common;
          this.alertCtrl = alertCtrl;
          this.ss = ss;
          this.authService = authService;
          this.settings = {};
        }

        _createClass(WalletPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.authService.getUserData().then(function (user) {
              _this.ss.getSettings().subscribe(function (res) {
                return res != null ? _this.settings = res.payload.val() : _this.settings = {};
              });

              _this.driverService.getDriver(user.uid).valueChanges().subscribe(function (snapshot) {
                return _this.driver = snapshot;
              });

              _this.transactionService.getTransactions(user.uid).valueChanges().subscribe(function (snapshot) {
                return snapshot != null ? _this.records = snapshot.reverse() : [];
              });
            });
          }
        }, {
          key: "withdraw",
          value: function withdraw() {
            var _this2 = this;

            this.alertCtrl.create({
              header: "Make a Withdraw",
              inputs: [{
                name: 'amount',
                placeholder: 'Amount'
              }],
              buttons: [{
                text: 'Cancel',
                handler: function handler(data) {
                  console.log('Cancel clicked');
                }
              }, {
                text: 'Submit',
                handler: function handler(data) {
                  console.log(data);
                  console.log(_this2.driver);

                  if (parseFloat(data.amount) > parseFloat(_this2.driver.balance)) {
                    _this2.common.showAlert("Insufficient Balance");
                  } else {
                    _this2.transactionService.widthDraw(_this2.driver, data.amount).then(function () {
                      _this2.common.showToast('withdraw Requested');
                    });
                  }
                }
              }]
            }).then(function (x) {
              return x.present();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WalletPage;
      }();

      WalletPage.ctorParameters = function () {
        return [{
          type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _services_driver_service__WEBPACK_IMPORTED_MODULE_2__["DriverService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _services_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }];
      };

      WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./wallet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./wallet.page.scss */
        "./src/app/wallet/wallet.page.scss"))["default"]]
      })], WalletPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=wallet-wallet-module-es5.js.map