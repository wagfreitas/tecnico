(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdriver"] = self["webpackChunkdriver"] || []).push([["src_app_pickup_pickup_module_ts"], {
    /***/
    64046:
    /*!*************************************************!*\
      !*** ./src/app/pickup/pickup-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PickupPageRoutingModule": function PickupPageRoutingModule() {
          return (
            /* binding */
            _PickupPageRoutingModule
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


      var _pickup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pickup.page */
      35597);

      var routes = [{
        path: '',
        component: _pickup_page__WEBPACK_IMPORTED_MODULE_0__.PickupPage
      }];

      var _PickupPageRoutingModule = /*#__PURE__*/_createClass(function PickupPageRoutingModule() {
        _classCallCheck(this, PickupPageRoutingModule);
      });

      _PickupPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PickupPageRoutingModule);
      /***/
    },

    /***/
    71914:
    /*!*****************************************!*\
      !*** ./src/app/pickup/pickup.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PickupPageModule": function PickupPageModule() {
          return (
            /* binding */
            _PickupPageModule
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


      var _pickup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pickup-routing.module */
      64046);
      /* harmony import */


      var _pickup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pickup.page */
      35597);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _PickupPageModule = /*#__PURE__*/_createClass(function PickupPageModule() {
        _classCallCheck(this, PickupPageModule);
      });

      _PickupPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _pickup_routing_module__WEBPACK_IMPORTED_MODULE_0__.PickupPageRoutingModule],
        declarations: [_pickup_page__WEBPACK_IMPORTED_MODULE_1__.PickupPage]
      })], _PickupPageModule);
      /***/
    },

    /***/
    35597:
    /*!***************************************!*\
      !*** ./src/app/pickup/pickup.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PickupPage": function PickupPage() {
          return (
            /* binding */
            _PickupPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pickup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pickup.page.html */
      98024);
      /* harmony import */


      var _pickup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pickup.page.scss */
      16559);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _services_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/trip.service */
      67446);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_deal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/deal.service */
      86999);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/common.service */
      5620);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/database */
      84134);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);

      var _PickupPage = /*#__PURE__*/function () {
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
          this.tax = 0;
          this.total = false;
          this.finaliza = false;
          this.menuCtrl.enable(true);
        }

        _createClass(PickupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.trip = this.tripService.getCurrentTrip(); //this.discount = (this.trip.rawfee * (this.trip.discount / 100)).toFixed(2)

            var getTrips = this.tripService.getTripStatus(this.trip.key).valueChanges().subscribe(function (trip) {
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
            this.tripService.getPassenger(this.trip.passengerId).valueChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(function (snapshot) {
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
                text: "Não"
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
              subHeader: "Entre com o Código de Atendimento",
              inputs: [{
                name: 'otp',
                placeholder: '4 digitos',
                type: 'tel'
              }],
              buttons: [{
                text: "Verificar",
                handler: function handler(data) {
                  _this3.db.object('trips/' + _this3.trip.key).valueChanges().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(function (res) {
                    if (res.otp != data.otp) _this3.common.showAlert("Código Inválido");else {
                      _this3.total = true;
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
            console.log(lat, lng);
            this.geolocation.getCurrentPosition().then(function (geo) {
              geo.coords.latitude;
              var url = "https://waze.com/ul?ll=".concat(lat, ",").concat(lng, "&z=10"); // `https://waze.com/ul?ll=${geo.coords.latitude},${geo.coords.longitude}&z=10`
              //"https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=" + geo.coords.latitude + "," + geo.coords.longitude + "&destination=" + lat + "," + lng;

              window.open(url);
            })["catch"](function (err) {
              console.log("Error ");
            });
          }
        }, {
          key: "valuePayment",
          value: function valuePayment() {
            this.tripService.addValueToService(this.trip.key, this.tax);
            this.common.showAlert("Valor Atualizado com Sucesso");
            this.finaliza = true;
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
                text: "Não"
              }]
            }).then(function (res) {
              return res.present();
            });
          }
        }]);

        return PickupPage;
      }();

      _PickupPage.ctorParameters = function () {
        return [{
          type: _services_trip_service__WEBPACK_IMPORTED_MODULE_2__.TripService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _services_deal_service__WEBPACK_IMPORTED_MODULE_3__.DealService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__.AngularFireDatabase
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
        }];
      };

      _PickupPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-pickup',
        template: _raw_loader_pickup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pickup_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PickupPage);
      /***/
    },

    /***/
    16559:
    /*!*****************************************!*\
      !*** ./src/app/pickup/pickup.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h3 {\n  text-align: center;\n  padding: 8px;\n  color: #4CAF50;\n  font-size: 2rem;\n}\n\ntable {\n  width: 100%;\n}\n\ntr {\n  border: 1px solid #eee;\n}\n\ntd {\n  padding: 4px;\n}\n\n.footer-md:before {\n  background-image: none !important;\n}\n\n.payment-mode {\n  background: #f2f2f2;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2t1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJwaWNrdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbnRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50cntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuXG50ZHtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG5cbi5mb290ZXItbWQ6YmVmb3Jle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnBheW1lbnQtbW9kZXtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIHBhZGRpbmc6MnB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    98024:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pickup/pickup.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title class=\"ion-text-center\"> Dados do Atendimento </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"trip.status == 'waiting'\">\n      <ion-button color=\"danger\" fill=\"solid\" (click)=\"cancelTrip()\">CANCELA\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <ion-item *ngIf=\"passenger.phoneNumber\">\n          <ion-label>\n            <ion-text>\n              <h2>{{(passenger)?.name }}</h2>\n            </ion-text>\n            <ion-text>\n              <p>{{(passenger)?.ddd }}{{(passenger)?.phoneNumber }}</p>\n            </ion-text>\n          </ion-label>\n          <ion-button color=\"dark\"  slot=\"end\" href=\"tel:{{passenger.phoneNumber}}\">\n            <ion-icon  name=\"call\"></ion-icon>&nbsp; CHAMAR\n          </ion-button>\n        </ion-item>\n       \n        <ion-item>\n          <ion-label>\n            <ion-text>\n              <h2>LOCAL</h2>\n            </ion-text>\n            <ion-text>\n              <p *ngIf=\"trip.origin != undefined\">{{ trip.origin.vicinity }}</p>\n            </ion-text>\n          </ion-label>\n          <ion-button slot=\"end\" fill=\"outline\" color=\"dark\"\n            (click)=\"getDirection(trip.origin.location.lat,trip.origin.location.lng)\">\n            <ion-icon name=\"navigate\"></ion-icon>&nbsp; NAVEGAR\n          </ion-button>\n        </ion-item>\n\n        <ion-item *ngIf=\"total\" >\n          <ion-label> \n            <ion-text>\n            <h2>Valor R$:</h2>\n          </ion-text>   \n        </ion-label>\n          <ion-input color=\"dark\" [(ngModel)]=\"tax\" slot=\"end\"></ion-input>\n          <ion-button slot=\"end\" fill=\"outline\" color=\"dark\"\n            (click)=\"valuePayment()\">\n          OK\n          </ion-button>\n        </ion-item>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<ion-footer class=\"ion-padding\">\n  <ion-toolbar>\n    <ion-button *ngIf=\"trip.status == 'waiting'\" expand=\"block\" color=\"dark\" (click)=\"pickup()\">INICIAR ATENDIMENTO\n    </ion-button>\n    <ion-button *ngIf=\"trip.status == 'going'\" expand=\"block\" color=\"dark\" (click)=\"showPayment()\">\n     FINALIZAR O ATENDIMENTO</ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pickup_pickup_module_ts-es5.js.map