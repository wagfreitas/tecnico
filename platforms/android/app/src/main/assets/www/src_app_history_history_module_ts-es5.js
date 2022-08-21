(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkdriver"] = self["webpackChunkdriver"] || []).push([["src_app_history_history_module_ts"], {
    /***/
    35010:
    /*!***************************************************!*\
      !*** ./src/app/history/history-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HistoryPageRoutingModule": function HistoryPageRoutingModule() {
          return (
            /* binding */
            _HistoryPageRoutingModule
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


      var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./history.page */
      4253);

      var routes = [{
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
      }];

      var _HistoryPageRoutingModule = /*#__PURE__*/_createClass(function HistoryPageRoutingModule() {
        _classCallCheck(this, HistoryPageRoutingModule);
      });

      _HistoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HistoryPageRoutingModule);
      /***/
    },

    /***/
    92486:
    /*!*******************************************!*\
      !*** ./src/app/history/history.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HistoryPageModule": function HistoryPageModule() {
          return (
            /* binding */
            _HistoryPageModule
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


      var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./history-routing.module */
      35010);
      /* harmony import */


      var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./history.page */
      4253);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _HistoryPageModule = /*#__PURE__*/_createClass(function HistoryPageModule() {
        _classCallCheck(this, HistoryPageModule);
      });

      _HistoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage]
      })], _HistoryPageModule);
      /***/
    },

    /***/
    4253:
    /*!*****************************************!*\
      !*** ./src/app/history/history.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HistoryPage": function HistoryPage() {
          return (
            /* binding */
            _HistoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./history.page.html */
      94986);
      /* harmony import */


      var _history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./history.page.scss */
      34873);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      37556);
      /* harmony import */


      var _services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/setting.service */
      84207);
      /* harmony import */


      var _services_trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/trip.service */
      67446);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _HistoryPage = /*#__PURE__*/function () {
        function HistoryPage(tripService, translate, ss, authService, router) {
          var _this = this;

          _classCallCheck(this, HistoryPage);

          this.tripService = tripService;
          this.translate = translate;
          this.ss = ss;
          this.authService = authService;
          this.router = router; // list of records

          this.trips = [];
          this.earning = 0;
          this.filter = 'today';
          this.allTrips = [];
          this.settings = {};
          this.today = new Date().toISOString();
          this.fromDate = new Date().toISOString();
          this.toDate = new Date().toISOString();
          this.ss.getSettings().subscribe(function (res) {
            return res != null ? _this.settings = res.payload.val() : _this.settings = {};
          });
        }

        _createClass(HistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.authService.getUserData().then(function (user) {
              _this2.tripService.getTrips(user.uid).valueChanges().subscribe(function (snapshot) {
                if (snapshot != null) {
                  _this2.trips = snapshot;
                  _this2.allTrips = _this2.trips;

                  _this2.allTrips.reverse();

                  _this2.calculateEarning();
                }
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            this.authService.logout().then(function () {
              localStorage.clear();

              _this3.router.navigateByUrl('/login', {
                skipLocationChange: true,
                replaceUrl: true
              });
            });
          }
        }, {
          key: "calculateEarning",
          value: function calculateEarning() {
            var total = 0;
            this.trips.forEach(function (trip) {
              if (trip.commission != undefined && trip.commission != null) total += parseFloat(trip.commission);
            });
            this.earning = total;
          }
        }, {
          key: "applyFilter",
          value: function applyFilter() {
            this.trips = this.allTrips;
            var fromDate = new Date(this.fromDate);
            fromDate.setHours(0, 0, 0, 0);
            var from = fromDate.getTime();
            var toDate = new Date(this.toDate);
            toDate.setHours(23, 59, 59, 999);
            var to = toDate.getTime();
            var tmp = this.trips.filter(function (item) {
              return item.createdAt >= from && item.createdAt <= to;
            });
            this.trips = tmp;
            this.calculateEarning();
          }
        }, {
          key: "reset",
          value: function reset() {
            this.trips = this.allTrips;
            this.calculateEarning();
          }
        }]);

        return HistoryPage;
      }();

      _HistoryPage.ctorParameters = function () {
        return [{
          type: _services_trip_service__WEBPACK_IMPORTED_MODULE_4__.TripService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
        }, {
          type: _services_setting_service__WEBPACK_IMPORTED_MODULE_3__.SettingService
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _HistoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HistoryPage);
      /***/
    },

    /***/
    34873:
    /*!*******************************************!*\
      !*** ./src/app/history/history.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".total-earning {\n  color: #4caf50;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.earning {\n  color: #4caf50;\n  font-weight: 600;\n  margin-left: 4px;\n}\n\np {\n  color: #181717;\n}\n\nion-item {\n  margin: 8px;\n  --background: #fbfbfb;\n  border-radius: 4px;\n}\n\n.trip h3 {\n  font-weight: 600;\n  font-size: 14px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBR1IiLCJmaWxlIjoiaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG90YWwtZWFybmluZ3tcbiAgICBjb2xvcjojNGNhZjUwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmVhcm5pbmd7XG4gICAgY29sb3I6IzRjYWY1MDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5we1xuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMylcbn1cbmlvbi1pdGVte1xuICAgIG1hcmdpbjogOHB4O1xuICAgIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi50cmlwe1xuICAgIGgze1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    94986:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Atendimentos</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 4px;background:#141414;\">\n    <ion-row>\n      <ion-col>\n        <ion-datetime max=\"{{today}}\" value=\"{{today}}\" [(ngModel)]=\"fromDate\"></ion-datetime>\n      </ion-col>\n      <ion-col>\n        <ion-datetime max=\"{{today}}\" min={{fromDate}} value=\"{{today}}\" [(ngModel)]=\"toDate\"></ion-datetime>\n      </ion-col>\n      <ion-col>\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"applyFilter()\">\n          <ion-icon name=\"filter-outline\"></ion-icon>\n        </ion-button>\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"reset()\">\n          <ion-icon name=\"refresh-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label>Faturamento</ion-label>\n      <ion-text slot=\"end\" class=\"total-earning\">\n        {{settings.currency}} {{earning | number: '1.2-2'}}\n      </ion-text>\n    </ion-item>\n    <p *ngIf=\"trips.length == 0\" style=\"margin-top: 5px; text-align: center\">Nenhum Atendimento até o momento</p>\n    <ion-item *ngFor=\"let trip of trips\" class=\"trip\">\n      <ion-label>\n        <h3>{{ trip.createdAt | date:'dd MMM , yyyy hh:mm a'}}</h3>\n        <p text-wrap>\n          <ion-icon name=\"pin\" style=\"color:#F44336\"></ion-icon> {{ trip.origin.vicinity }}\n        </p>\n      </ion-label>\n      <ion-text class=\"earning\" slot=\"end\">{{trip.currency}} {{trip.commission}}\n      </ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_history_history_module_ts-es5.js.map