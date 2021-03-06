(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pickup-pickup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pickup/pickup.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pickup/pickup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPickupPickupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title> Dados do Atendimento </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"trip.status == 'waiting'\">\n      <ion-button color=\"danger\" fill=\"solid\" (click)=\"cancelTrip()\">CANCELA\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <ion-item *ngIf=\"passenger.phoneNumber\">\n          <ion-label>\n            <ion-text>\n              <h2>{{(passenger)?.name }}</h2>\n            </ion-text>\n            <ion-text>\n              <p>{{(passenger)?.phoneNumber }}</p>\n            </ion-text>\n          </ion-label>\n          <ion-button slot=\"end\" href=\"tel:{{passenger.phoneNumber}}\">\n            <ion-icon name=\"call\"></ion-icon>&nbsp; FONE\n          </ion-button>\n\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-text>\n              <h2>LOCAL</h2>\n            </ion-text>\n            <ion-text>\n              <p *ngIf=\"trip.origin != undefined\">{{ trip.origin.vicinity }}</p>\n            </ion-text>\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"outline\" color=\"dark\"\n            (click)=\"getDirection(trip.origin.location.lat,trip.origin.location.lng)\">\n            <ion-icon name=\"navigate\"></ion-icon>&nbsp; NAVEGAR\n          </ion-button>\n        </ion-item>\n        <!--ion-item>\n          <ion-label>\n            <ion-text>\n              <h2>{{'TO' | translate}}</h2>\n            </ion-text>\n            <ion-text>\n              <p *ngIf=\"trip.destination != undefined\">{{ trip.destination.vicinity }}</p>\n            </ion-text>\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"outline\" color=\"dark\"\n            (click)=\"getDirection(trip.destination.location.lat,trip.destination.location.lng)\">\n            <ion-icon name=\"navigate\"></ion-icon>&nbsp; {{'NAVIGATE' | translate}}\n          </ion-button>\n        </ion-item-->\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"ion-padding\">\n    <table>\n      <tr>\n        <td>TOTAL: </td>\n        <td>{{ trip.currency }} {{trip.fee}} <span class=\"payment-mode\">{{trip.paymentMethod}}</span></td>\n      </tr>\n    </table>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-padding\">\n  <ion-toolbar>\n    <ion-button *ngIf=\"trip.status == 'waiting'\" expand=\"block\" color=\"dark\" (click)=\"pickup()\">INICIAR ATENDIMENTO\n    </ion-button>\n    <ion-button *ngIf=\"trip.status == 'going'\" expand=\"block\" color=\"danger\" (click)=\"showPayment()\">\n     COMPLETAR ATENDIMENTO</ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pickup/pickup-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pickup/pickup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: PickupPageRoutingModule */

    /***/
    function srcAppPickupPickupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickupPageRoutingModule", function () {
        return PickupPageRoutingModule;
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


      var _pickup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pickup.page */
      "./src/app/pickup/pickup.page.ts");

      var routes = [{
        path: '',
        component: _pickup_page__WEBPACK_IMPORTED_MODULE_3__["PickupPage"]
      }];

      var PickupPageRoutingModule = function PickupPageRoutingModule() {
        _classCallCheck(this, PickupPageRoutingModule);
      };

      PickupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PickupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pickup/pickup.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/pickup/pickup.module.ts ***!
      \*****************************************/

    /*! exports provided: PickupPageModule */

    /***/
    function srcAppPickupPickupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickupPageModule", function () {
        return PickupPageModule;
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


      var _pickup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pickup-routing.module */
      "./src/app/pickup/pickup-routing.module.ts");
      /* harmony import */


      var _pickup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pickup.page */
      "./src/app/pickup/pickup.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var PickupPageModule = function PickupPageModule() {
        _classCallCheck(this, PickupPageModule);
      };

      PickupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _pickup_routing_module__WEBPACK_IMPORTED_MODULE_5__["PickupPageRoutingModule"]],
        declarations: [_pickup_page__WEBPACK_IMPORTED_MODULE_6__["PickupPage"]]
      })], PickupPageModule);
      /***/
    },

    /***/
    "./src/app/pickup/pickup.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/pickup/pickup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppPickupPickupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h3 {\n  text-align: center;\n  padding: 8px;\n  color: #4CAF50;\n  font-size: 2rem;\n}\n\ntable {\n  width: 100%;\n}\n\ntr {\n  border: 1px solid #eee;\n}\n\ntd {\n  padding: 4px;\n}\n\n.footer-md:before {\n  background-image: none !important;\n}\n\n.payment-mode {\n  background: #f2f2f2;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlja3VwL3BpY2t1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BpY2t1cC9waWNrdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbnRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50cntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuXG50ZHtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG5cbi5mb290ZXItbWQ6YmVmb3Jle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBheW1lbnQtbW9kZXtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIHBhZGRpbmc6MnB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pickup/pickup.page.ts":
    /*!***************************************!*\
      !*** ./src/app/pickup/pickup.page.ts ***!
      \***************************************/

    /*! exports provided: PickupPage */

    /***/
    function srcAppPickupPickupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PickupPage", function () {
        return PickupPage;
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


      var _services_trip_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/trip.service */
      "./src/app/services/trip.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_deal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/deal.service */
      "./src/app/services/deal.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/database */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

      var PickupPage = /*#__PURE__*/function () {
        function PickupPage(tripService, alertCtrl, dealService, router, common, translate, db, menuCtrl, geolocation) {
          _classCallCheck(this, PickupPage);

          this.tripService = tripService;
          this.alertCtrl = alertCtrl;
          this.dealService = dealService;
          this.router = router;
          this.common = common;
          this.translate = translate;
          this.db = db;
          this.menuCtrl = menuCtrl;
          this.geolocation = geolocation;
          this.trip = {};
          this.passenger = {};
          this.isTripStarted = false;
          this.menuCtrl.enable(true);
        }

        _createClass(PickupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.trip = this.tripService.getCurrentTrip();
            this.discount = (this.trip.rawfee * (this.trip.discount / 100)).toFixed(2);
            this.tax = (this.trip.fee * (this.trip.tax / 100)).toFixed(2);
            var getTrips = this.tripService.getTripStatus(this.trip.key).valueChanges().subscribe(function (trip) {
              console.log(trip);
              _this.trip.status = trip.status;

              if (trip.status == 'canceled') {
                getTrips.unsubscribe();

                _this.tripService.cancel(_this.trip.key);

                _this.dealService.removeDeal(_this.trip.driverId);

                _this.common.showAlert("Atendimento Cancelado");

                _this.router.navigateByUrl('/home', {
                  skipLocationChange: true,
                  replaceUrl: true
                });
              } else if (trip.status == 'finished') {
                _this.router.navigateByUrl('/home', {
                  skipLocationChange: true,
                  replaceUrl: true
                });
              }
            });
            this.tripService.getPassenger(this.trip.passengerId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (snapshot) {
              _this.passenger = snapshot;
            });
          }
        }, {
          key: "cancelTrip",
          value: function cancelTrip() {
            var _this2 = this;

            this.alertCtrl.create({
              message: "Deseja cancelar o atendimento",
              buttons: [{
                text: "Sim",
                handler: function handler() {
                  return _this2.tripService.cancel(_this2.trip.key);
                }
              }, {
                text: "N??o"
              }]
            }).then(function (res) {
              return res.present();
            });
          } // pickup

        }, {
          key: "pickup",
          value: function pickup() {
            var _this3 = this;

            this.alertCtrl.create({
              subHeader: "Entre com o C??digo de Atendimento",
              inputs: [{
                name: 'otp',
                placeholder: '4 digitos',
                type: 'tel'
              }],
              buttons: [{
                text: "Verificar",
                handler: function handler(data) {
                  console.log(data);

                  _this3.db.object('trips/' + _this3.trip.key).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (res) {
                    console.log(res);
                    if (res.otp != data.otp) _this3.common.showAlert("C??digo Inv??lido");else {
                      _this3.isTripStarted = true;

                      _this3.tripService.pickUp(_this3.trip.key);
                    }
                  });
                }
              }]
            }).then(function (res) {
              return res.present();
            });
          }
        }, {
          key: "getDirection",
          value: function getDirection(lat, lng) {
            console.log("call");
            this.geolocation.getCurrentPosition().then(function (geo) {
              geo.coords.latitude;
              var url = "https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=" + geo.coords.latitude + "," + geo.coords.longitude + "&destination=" + lat + "," + lng;
              window.open(url);
            })["catch"](function (err) {
              console.log("Error ");
            });
          }
        }, {
          key: "showPayment",
          value: function showPayment() {
            var _this4 = this;

            this.alertCtrl.create({
              header: "Deseja completar o atendimento?",
              buttons: [{
                text: 'Sim',
                handler: function handler() {
                  _this4.tripService.dropOff(_this4.trip.key);

                  _this4.dealService.removeDeal(_this4.trip.driverId);

                  _this4.router.navigateByUrl('/home');
                }
              }, {
                text: "N??o"
              }]
            }).then(function (res) {
              return res.present();
            });
          }
        }]);

        return PickupPage;
      }();

      PickupPage.ctorParameters = function () {
        return [{
          type: _services_trip_service__WEBPACK_IMPORTED_MODULE_3__["TripService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _services_deal_service__WEBPACK_IMPORTED_MODULE_5__["DealService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"]
        }];
      };

      PickupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pickup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./pickup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pickup/pickup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./pickup.page.scss */
        "./src/app/pickup/pickup.page.scss"))["default"]]
      })], PickupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pickup-pickup-module-es5.js.map