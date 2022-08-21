(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkdriver"] = self["webpackChunkdriver"] || []).push([["src_app_wallet_wallet_module_ts"], {
    /***/
    4666:
    /*!*************************************************!*\
      !*** ./src/app/services/transaction.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionService": function TransactionService() {
          return (
            /* binding */
            _TransactionService
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      84134);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);

      var _TransactionService = /*#__PURE__*/function () {
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
              type: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_TYPE_WITHDRAW,
              status: 'PENDING'
            });
          }
        }]);

        return TransactionService;
      }();

      _TransactionService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase
        }];
      };

      _TransactionService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _TransactionService);
      /***/
    },

    /***/
    42576:
    /*!*************************************************!*\
      !*** ./src/app/wallet/wallet-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WalletPageRoutingModule": function WalletPageRoutingModule() {
          return (
            /* binding */
            _WalletPageRoutingModule
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


      var _wallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./wallet.page */
      5911);

      var routes = [{
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_0__.WalletPage
      }];

      var _WalletPageRoutingModule = /*#__PURE__*/_createClass(function WalletPageRoutingModule() {
        _classCallCheck(this, WalletPageRoutingModule);
      });

      _WalletPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _WalletPageRoutingModule);
      /***/
    },

    /***/
    49555:
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WalletPageModule": function WalletPageModule() {
          return (
            /* binding */
            _WalletPageModule
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


      var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./wallet-routing.module */
      42576);
      /* harmony import */


      var _wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./wallet.page */
      5911);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _WalletPageModule = /*#__PURE__*/_createClass(function WalletPageModule() {
        _classCallCheck(this, WalletPageModule);
      });

      _WalletPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalletPageRoutingModule],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_1__.WalletPage]
      })], _WalletPageModule);
      /***/
    },

    /***/
    5911:
    /*!***************************************!*\
      !*** ./src/app/wallet/wallet.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WalletPage": function WalletPage() {
          return (
            /* binding */
            _WalletPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./wallet.page.html */
      46368);
      /* harmony import */


      var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./wallet.page.scss */
      12228);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/driver.service */
      64050);
      /* harmony import */


      var _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/transaction.service */
      4666);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/common.service */
      5620);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/setting.service */
      84207);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/auth.service */
      37556);

      var _WalletPage = /*#__PURE__*/function () {
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

      _WalletPage.ctorParameters = function () {
        return [{
          type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__.TransactionService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
        }, {
          type: _services_driver_service__WEBPACK_IMPORTED_MODULE_2__.DriverService
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _services_setting_service__WEBPACK_IMPORTED_MODULE_5__.SettingService
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService
        }];
      };

      _WalletPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-wallet',
        template: _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _WalletPage);
      /***/
    },

    /***/
    12228:
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  min-height: 200px;\n  text-align: center;\n  padding: 2em;\n  background-color: var(--ion-color-dark);\n}\n.header h5 {\n  text-transform: uppercase;\n  color: #777777;\n  font-size: 12px;\n  margin: 0;\n}\n.header .amountText {\n  font-size: 28px;\n  font-weight: bold;\n  color: var(--ion-color-dark-contrast);\n}\nion-item {\n  --background: #f9f9f9;\n  margin: 8px;\n  border-radius: 8px;\n}\n.footer-md:before {\n  background: none;\n}\n.withdrawl-list .amount {\n  font-weight: bold;\n  color: var(--ion-color-dark);\n  font-size: 16px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FBRVI7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFBQTtFQUNJLGdCQUFBO0FBR0o7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFUiIsImZpbGUiOiJ3YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBoNXtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgfVxuICAgIC5hbW91bnRUZXh0e1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpXG4gICAgfVxufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5mb290ZXItbWQ6YmVmb3Jle1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi53aXRoZHJhd2wtbGlzdHtcbiAgICAuYW1vdW50e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    46368:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Carteira</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"header\">\n    <h5>Balanço Atual</h5>\n    <p class=\"amountText\">{{settings.currency}} {{ (driver)?.balance }}</p>\n    <ion-button slot=\"end\" color=\"light\" size=\"small\" fill=\"outline\" (click)=\"withdraw()\">Solicitar Pagamento\n    </ion-button>\n  </div>\n  <div class=\"ion-padding\" class=\"withdrawl-list\">\n    <ion-list lines=\"none\">\n      <p style=\"margin:8px\">Histórico</p>\n      <ion-item *ngFor=\"let record of records\">\n        <ion-label>\n          <h3>ID: {{record.createdAt }}</h3>\n          <p>{{ record.createdAt | date: 'dd-MMM-yyyy hh:mm a'}}</p>\n        </ion-label>\n        <ion-note slot=\"end\">\n          <div class=\"amount\"> {{ record.amount }}</div>\n          <div class=\"status\">{{ record.status}}</div>\n        </ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_wallet_wallet_module_ts-es5.js.map