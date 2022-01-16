(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Cadastrar </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"login-header\">\n    <img src=\"./assets/img/logo.png\" />\n    <!-- <h3>{{ 'APP_NAME' | translate }}</h3>\n    <p>{{ 'APP_SUBTEXT' | translate }} </p> -->\n  </div>\n  <div>\n    <div class=\"ion-padding\" *ngIf=\"step == 'step1'\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\">Nome Completo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"userInfo.name\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input type=\"email\" [(ngModel)]=\"userInfo.email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Senha (MIN 6 digitos)</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"userInfo.password\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Fone</ion-label>\n          <ion-input type=\"tel\" [(ngModel)]=\"userInfo.phoneNumber\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <div style=\"padding: 0px 16px\">\n        <ion-button color=\"dark\" expand=\"block\" (click)=\"goto('step2')\">Cadastrar</ion-button>\n      </div>\n    </div>\n    <div *ngIf=\"step == 'step2'\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\">Marca do Veículo</ion-label>\n          <ion-input\n            type=\"text\"\n            [(ngModel)]=\"userInfo.brand\"\n            placeholder=\"Marca do Veiculo\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Modelo</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"userInfo.model\" placeholder=\"Modelo\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Placa</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"userInfo.plate\" placeholder=\"Placa\"></ion-input>\n        </ion-item>\n\n        <p style=\"text-align: center; color: #4caf50\" *ngIf=\"userInfo.docsURL\">\n          Upload realizado com sucesso\n        </p>\n        <div (click)=\"chooseDocs()\" class=\"uploadDiv\">\n          <ion-icon name=\"cloud-upload\"></ion-icon>\n          <p>Clique para Upload</p>\n        </div>\n      </ion-list>\n      <div>\n        <form ngNoForm>\n          <input id=\"docsPDF\" name=\"file\" type=\"file\" (change)=\"uploadDocs()\" />\n        </form>\n      </div>\n      <div style=\"padding: 0px 16px\">\n        <ion-button color=\"dark\" expand=\"block\" (click)=\"signup()\">Registrar</ion-button>\n      </div>\n    </div>\n  </div>\n  <div class=\"ion-padding\">\n    <p class=\"termsText\">\n      Para se cadastrar você precisa aceitar nossos\n      <span class=\"link\" (click)=\"openTerms()\">termos & condições</span> &\n      <span class=\"link\" (click)=\"openPrivacy()\">política de privacidade</span>\n    </p>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-md:after {\n  background-image: none !important;\n}\n\n.uploadDiv {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 120px;\n  background: #f9f9f9;\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW1CLGlDQUFBO0FBRW5COztBQUFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBR0QiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kOmFmdGVyIHsgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50IH1cblxuLnVwbG9hZERpdntcbiBkaXNwbGF5OiBmbGV4O1xuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gaGVpZ2h0OiAxMjBweDtcbiBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuIG1hcmdpbjoxNnB4O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










let RegisterPage = class RegisterPage {
    constructor(translate, auth, common, afStorage, settingService, menuCtrl, router) {
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
        this.settingService.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.settingService.getVehicleType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe((snapshot) => {
            if (snapshot === null) {
                this.settingService.getDefaultVehicleType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe((snapshot) => {
                    console.log(snapshot);
                    this.types = Object.keys(snapshot).map(function (key) {
                        return snapshot[key];
                    });
                });
            }
            else {
                this.types = Object.keys(snapshot).map(function (key) {
                    return snapshot[key];
                });
            }
        });
    }
    goto(step) {
        this.step = step;
    }
    openTerms() {
        window.open(this.settings.driverTermsURL, "_blank");
    }
    openPrivacy() {
        window.open(this.settings.driverPrivacyURL, "_blank");
    }
    signup() {
        console.log(this.userInfo);
        this.common.showLoader();
        this.userInfo.rating = parseInt(this.settings.driverInitialRating);
        this.userInfo.balance = parseFloat(this.settings.driverSignupBonus);
        this.userInfo.type = 'suv';
        this.auth.register(this.userInfo).subscribe(() => {
            this.common.hideLoader();
            localStorage.setItem('isLoggedInTec', 'true');
            this.router.navigateByUrl('/home');
        }, (err) => {
            this.common.hideLoader();
            this.common.showToast(err.message);
        });
    }
    chooseDocs() { document.getElementById('docsPDF').click(); }
    uploadDocs() {
        this.common.showLoader();
        for (let selectedFile of [document.getElementById('docsPDF').files[0]]) {
            console.log(selectedFile.name);
            let path = '/users/' + Date.now() + `${selectedFile.name}`;
            let ref = this.afStorage.ref(path);
            ref.put(selectedFile).then(() => {
                ref.getDownloadURL().subscribe(url => this.userInfo.docsURL = url);
                this.common.hideLoader();
            }).catch(err => {
                this.common.hideLoader();
                console.log(err);
            });
        }
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _services_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map