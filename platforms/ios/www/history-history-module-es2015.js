(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{'HISTORY' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 4px;background:#fbfbfb;\">\n    <ion-row>\n      <ion-col>\n        <ion-datetime max=\"{{today}}\" value=\"{{today}}\" [(ngModel)]=\"fromDate\"></ion-datetime>\n      </ion-col>\n      <ion-col>\n        <ion-datetime max=\"{{today}}\" min={{fromDate}} value=\"{{today}}\" [(ngModel)]=\"toDate\"></ion-datetime>\n      </ion-col>\n      <ion-col>\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"applyFilter()\">\n          <ion-icon name=\"filter-outline\"></ion-icon>\n        </ion-button>\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"reset()\">\n          <ion-icon name=\"refresh-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label>{{'EARNINGS' | translate}}</ion-label>\n      <ion-text slot=\"end\" class=\"total-earning\">\n        {{settings.currency}} {{earning | number: '1.2-2'}}\n      </ion-text>\n    </ion-item>\n    <p *ngIf=\"trips.length == 0\" style=\"margin-top: 5px; text-align: center\">No Trips Found</p>\n    <ion-item *ngFor=\"let trip of trips\" class=\"trip\">\n      <ion-label>\n        <h3>{{ trip.createdAt | date:'MMM dd, yyyy hh:mm a'}}</h3>\n        <p>{{trip.createdAt}} • {{trip.status}}</p>\n        <p text-wrap>\n          <ion-icon name=\"pin\" style=\"color:#F44336\"></ion-icon> {{ trip.origin.vicinity }}\n        </p>\n        <p text-wrap>\n          <ion-icon name=\"pin\" style=\"color:#4caf50\"></ion-icon> {{ trip.destination.vicinity }}\n        </p>\n      </ion-label>\n      <ion-text class=\"earning\" slot=\"end\">{{trip.currency}} {{trip.commission}}\n      </ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/history/history-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/history/history-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/history/history-routing.module.ts");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/history/history.page.scss":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".total-earning {\n  color: #4caf50;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.earning {\n  color: #4caf50;\n  font-weight: 600;\n  margin-left: 4px;\n}\n\np {\n  color: #777;\n}\n\nion-item {\n  margin: 8px;\n  --background: #fbfbfb;\n  border-radius: 4px;\n}\n\n.trip h3 {\n  font-weight: 600;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBR1IiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFsLWVhcm5pbmd7XG4gICAgY29sb3I6IzRjYWY1MDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5lYXJuaW5ne1xuICAgIGNvbG9yOiM0Y2FmNTA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxucHtcbiAgICBjb2xvcjogIzc3N1xufVxuaW9uLWl0ZW17XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRyaXB7XG4gICAgaDN7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/history/history.page.ts":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/trip.service */ "./src/app/services/trip.service.ts");






let HistoryPage = class HistoryPage {
    constructor(tripService, translate, ss, authService) {
        this.tripService = tripService;
        this.translate = translate;
        this.ss = ss;
        this.authService = authService;
        // list of records
        this.trips = [];
        this.earning = 0;
        this.filter = 'today';
        this.allTrips = [];
        this.settings = {};
        this.today = new Date().toISOString();
        this.fromDate = new Date().toISOString();
        this.toDate = new Date().toISOString();
        this.ss.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
    }
    ngOnInit() {
        this.authService.getUserData().then((user) => {
            this.tripService.getTrips(user.uid).valueChanges().subscribe(snapshot => {
                if (snapshot != null) {
                    this.trips = snapshot;
                    this.allTrips = this.trips;
                    this.allTrips.reverse();
                    this.calculateEarning();
                }
            });
        });
    }
    calculateEarning() {
        let total = 0;
        this.trips.forEach(trip => {
            if (trip.commission != undefined && trip.commission != null)
                total += parseFloat(trip.commission);
        });
        this.earning = total;
    }
    applyFilter() {
        this.trips = this.allTrips;
        let fromDate = new Date(this.fromDate);
        fromDate.setHours(0, 0, 0, 0);
        let from = fromDate.getTime();
        let toDate = new Date(this.toDate);
        toDate.setHours(23, 59, 59, 999);
        let to = toDate.getTime();
        let tmp = this.trips.filter(item => item.createdAt >= from && item.createdAt <= to);
        this.trips = tmp;
        this.calculateEarning();
    }
    reset() {
        this.trips = this.allTrips;
        this.calculateEarning();
    }
};
HistoryPage.ctorParameters = () => [
    { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_5__["TripService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")).default]
    })
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=history-history-module-es2015.js.map