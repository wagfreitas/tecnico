(self["webpackChunkdriver"] = self["webpackChunkdriver"] || []).push([["src_app_forget_forget_module_ts"],{

/***/ 70386:
/*!*************************************************!*\
  !*** ./src/app/forget/forget-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPageRoutingModule": function() { return /* binding */ ForgetPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget.page */ 18946);




const routes = [
    {
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_0__.ForgetPage
    }
];
let ForgetPageRoutingModule = class ForgetPageRoutingModule {
};
ForgetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetPageRoutingModule);



/***/ }),

/***/ 29296:
/*!*****************************************!*\
  !*** ./src/app/forget/forget.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPageModule": function() { return /* binding */ ForgetPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _forget_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-routing.module */ 70386);
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget.page */ 18946);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let ForgetPageModule = class ForgetPageModule {
};
ForgetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _forget_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPageRoutingModule
        ],
        declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_1__.ForgetPage]
    })
], ForgetPageModule);



/***/ }),

/***/ 18946:
/*!***************************************!*\
  !*** ./src/app/forget/forget.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPage": function() { return /* binding */ ForgetPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forget_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forget.page.html */ 66307);
/* harmony import */ var _forget_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget.page.scss */ 52390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ 5620);






let ForgetPage = class ForgetPage {
    constructor(authService, commonService) {
        this.authService = authService;
        this.commonService = commonService;
    }
    ngOnInit() {
    }
    reset() {
        let email = (this.email).toLowerCase().trim();
        if (this.email) {
            this.commonService.showLoader();
            this.authService.resetPassword(email)
                .then(data => {
                this.commonService.hideLoader();
                this.commonService.showToast('Please Check inbox');
            })
                .catch(err => {
                this.commonService.hideLoader();
                this.commonService.showToast(err.message);
            });
        }
    }
};
ForgetPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService }
];
ForgetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forget',
        template: _raw_loader_forget_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forget_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgetPage);



/***/ }),

/***/ 52390:
/*!*****************************************!*\
  !*** ./src/app/forget/forget.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md:after {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUIsaUNBQUE7QUFFbkIiLCJmaWxlIjoiZm9yZ2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQ6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQgfSJdfQ== */");

/***/ }),

/***/ 66307:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget/forget.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Recuperar Senha</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"login-header\">\n    <img src=\"./assets/img/logo.png\" />\n    <!-- <h3>{{ 'APP_NAME' | translate }}</h3>\n    <p>{{ 'APP_SUBTEXT' | translate }} </p> -->\n  </div>\n  <div class=\"ion-padding\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\">Endereço de Email</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div style=\"padding:0px 16px\">\n      <ion-button color=\"dark\" expand=\"block\" (click)=\"reset()\">RECUPERAR SENHA</ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_forget_forget_module_ts-es2015.js.map