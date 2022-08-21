(self["webpackChunkdriver"] = self["webpackChunkdriver"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 86829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": function() { return /* binding */ ProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 72919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 86829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 72919);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 52907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 70231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/setting.service */ 84207);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ 68274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 15257);












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
            this.authService.getUser(user.uid).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((snapshot) => {
                console.log(snapshot);
                this.user = snapshot;
            });
        });
        this.settingService.getVehicleType().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((snapshot) => {
            if (snapshot === null) {
                this.settingService.getDefaultVehicleType().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe((snapshot) => {
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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_setting_service__WEBPACK_IMPORTED_MODULE_3__.SettingService },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 70231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-md:before {\n  background: none;\n}\n\n.header-md:after {\n  background: none;\n}\n\nion-segment {\n  --background: #222222;\n  --color: #ffffff;\n}\n\nion-segment-button {\n  --background: #222222;\n  --background-checked: #222222;\n  --background-focused: #222222;\n  --background-hover: #222222;\n  --border-color: #ffffff;\n  --color: #dddddd;\n  --color-focused: #ffffff;\n  --color-checked:#FFEB3B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBRUoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLW1kOmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmhlYWRlci1tZDphZnRlcntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tc2VnbWVudHtcbiAgICAtLWJhY2tncm91bmQ6ICMyMjIyMjI7XG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjIyMjtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzIyMjIyMjtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzIyMjIyMjtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMyMjIyMjI7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gICAgLS1jb2xvcjogI2RkZGRkZDtcbiAgICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmZmZmY7XG4gICAgLS1jb2xvci1jaGVja2VkOiNGRkVCM0I7XG59Il19 */");

/***/ }),

/***/ 52907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">{{ user.name }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-segment [(ngModel)]=\"tabs\">\n    <ion-segment-button value=\"profile\">\n     DADOS BÁSICOS\n    </ion-segment-button>\n    <ion-segment-button value=\"carinfo\">\n     DADOS DO CARRO\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"tabs\" class=\"ion-padding\">\n    <div *ngSwitchCase=\"'profile'\">\n      <div style=\"text-align: center;\">\n        <img src=\"{{ user.photoURL }}\" onerror=\"this.src='./assets/img/default.png'\"\n          style=\"width:80px;height:80px;border-radius:100px\" (click)=\"chooseFile()\">\n        <form ngNoForm>\n          <input id=\"avatar\" name=\"file\" type=\"file\" (change)=\"upload()\">\n        </form>\n      </div>\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\"  color=\"primary\">NOME COMPLETO</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.name\" placeholder=\"Nome Completo\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\"  color=\"primary\">NÚMERO DO FONE</ion-label>\n          <ion-input type=\"tel\" [(ngModel)]=\"user.phoneNumber\" placeholder=\"Telefone\"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label position=\"stacked\"  color=\"primary\">DADOS BANCÁRIOS</ion-label>\n          <ion-textarea [(ngModel)]=\"user.bankinfo\"></ion-textarea>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase=\"'carinfo'\">\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-label position=\"stacked\">Marca do Carro</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.brand\" placeholder=\"{{'CAR_BRAND' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Modelo do Carro</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.model\" placeholder=\"{{'CAR_MODEL' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Placa do Carro</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"user.plate\" placeholder=\"{{'PLATE_NUMBER' | translate}}\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"types\">\n          <ion-label position=\"stacked\">Tipo do Carro</ion-label>\n          <ion-select [(ngModel)]=\"user.type\">\n            <ion-select-option value=\"{{ car.type }}\" *ngFor=\"let car of types\">\n              {{ car.name }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h3>{{'UPLOAD'| translate}} Docs</h3>\n          </ion-label>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"chooseDocs()\">\n              <ion-icon name=\"cloud-upload\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"user.docsURL\" (click)=\"download(user.docsURL)\">\n              <ion-icon name=\"cloud-download\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </ion-list>\n      <div>\n        <form ngNoForm>\n          <input id=\"docsPDF\" name=\"file\" type=\"file\" (change)=\"uploadDocs()\">\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-padding\">\n  <ion-button expand=\"block\" (click)=\"save()\">Salvar</ion-button>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts-es2015.js.map