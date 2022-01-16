(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ user.name }}</ion-title>\n    <ion-buttons slot=\"end\">\n\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-segment [(ngModel)]=\"tabs\">\n    <ion-segment-button value=\"profile\">\n      {{'BASIC_PROFILE' | translate}}\n    </ion-segment-button>\n    <ion-segment-button value=\"carinfo\">\n      {{'CAR_INFO' | translate }}\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"tabs\" class=\"ion-padding\">\n    <div *ngSwitchCase=\"'profile'\">\n      <div style=\"text-align: center;\">\n        <img src=\"{{ user.photoURL }}\" onerror=\"this.src='./assets/img/default.png'\"\n          style=\"width:80px;height:80px;border-radius:100px\" (click)=\"chooseFile()\">\n        <form ngNoForm>\n          <input id=\"avatar\" name=\"file\" type=\"file\" (change)=\"upload()\">\n        </form>\n      </div>\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\">{{'FULLNAME' | translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.name\" placeholder=\"{{'FULLNAME' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'PHONE_NUMBER' | translate}}</ion-label>\n          <ion-input type=\"tel\" [(ngModel)]=\"user.phoneNumber\" placeholder=\"{{'PHONE_NUMBER' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'EMAIL_ADDRESS' | translate}}</ion-label>\n          <ion-input type=\"email\" disabled [(ngModel)]=\"user.email\" placeholder=\"{{'EMAIL_ADDRESS' | translate}}\">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'BANK_DETAILS' | translate}}</ion-label>\n          <ion-textarea [(ngModel)]=\"user.bankinfo\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'carinfo'\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\">{{'CAR_BRAND' | translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.brand\" placeholder=\"{{'CAR_BRAND' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'CAR_MODEL' | translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.model\" placeholder=\"{{'CAR_MODEL' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">{{'PLATE_NUMBER' | translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.plate\" placeholder=\"{{'PLATE_NUMBER' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"types\">\n          <ion-label position=\"stacked\">{{'CAR_TYPE' | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"user.type\">\n            <ion-select-option value=\"{{ car.type }}\" *ngFor=\"let car of types\">\n              {{ car.name }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h3>{{'UPLOAD'| translate}} Docs</h3>\n          </ion-label>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"chooseDocs()\">\n              <ion-icon name=\"cloud-upload\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"user.docsURL\" (click)=\"download(user.docsURL)\">\n              <ion-icon name=\"cloud-download\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </ion-list>\n      <div>\n        <form ngNoForm>\n          <input id=\"docsPDF\" name=\"file\" type=\"file\" (change)=\"uploadDocs()\">\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-padding\">\n  <ion-button expand=\"block\" (click)=\"save()\">{{'SAVE' | translate}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-md:before {\n  background: none;\n}\n\n.header-md:after {\n  background: none;\n}\n\nion-segment {\n  --background: #222222;\n  --color: #ffffff;\n}\n\nion-segment-button {\n  --background: #222222;\n  --background-checked: #222222;\n  --background-focused: #222222;\n  --background-hover: #222222;\n  --border-color: #ffffff;\n  --color: #dddddd;\n  --color-focused: #ffffff;\n  --color-checked:#FFEB3B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItbWQ6YmVmb3Jle1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uaGVhZGVyLW1kOmFmdGVye1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1zZWdtZW50e1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjIyMjtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tc2VnbWVudC1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMjIyMjIyO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMjIyMjIyO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzIyMjIyMjtcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWNvbG9yOiAjZGRkZGRkO1xuICAgIC0tY29sb3ItZm9jdXNlZDogI2ZmZmZmZjtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6I0ZGRUIzQjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let ProfilePage = class ProfilePage {
    constructor(authService, settingService, common, platform, translate, router, afStorage) {
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
    ngOnInit() {
        this.authService.getUserData().then(user => {
            this.authService.getUser(user.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe((snapshot) => {
                console.log(snapshot);
                this.user = snapshot;
            });
        });
        this.settingService.getVehicleType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe((snapshot) => {
            if (snapshot === null) {
                this.settingService.getDefaultVehicleType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe((snapshot) => {
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
        console.log(this.user);
    }
    save() {
        console.log(this.user);
        this.authService.getUser(this.user.uid).update(this.user).then(data => {
            this.common.showToast("Updated successfully");
            this.router.navigateByUrl('/home');
        });
    }
    chooseFile() { document.getElementById('avatar').click(); }
    upload() {
        // Create a root reference
        this.common.showLoader();
        for (let selectedFile of [document.getElementById('avatar').files[0]]) {
            let path = '/users/' + Date.now() + `_${selectedFile.name}`;
            let ref = this.afStorage.ref(path);
            ref.put(selectedFile).then(() => {
                ref.getDownloadURL().subscribe(data => { this.user.photoURL = data; });
                this.common.hideLoader();
            }).catch(err => {
                this.common.hideLoader();
                console.log(err);
            });
        }
    }
    // code for uploading licence image
    chooseDocs() { document.getElementById('docsPDF').click(); }
    uploadDocs() {
        this.common.showLoader();
        for (let selectedFile of [document.getElementById('docsPDF').files[0]]) {
            console.log(selectedFile.name);
            let path = '/users/' + Date.now() + `${selectedFile.name}`;
            let ref = this.afStorage.ref(path);
            ref.put(selectedFile).then(() => {
                ref.getDownloadURL().subscribe(url => this.user.docsURL = url);
                this.common.hideLoader();
            }).catch(err => {
                this.common.hideLoader();
                console.log(err);
            });
        }
    }
    download(url) {
        window.open(url, "_blank");
    }
    logout() {
        this.authService.logout().then(() => {
            localStorage.clear();
            this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map