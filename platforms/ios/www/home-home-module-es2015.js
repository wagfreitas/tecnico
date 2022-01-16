(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      JetPort\n    </ion-title>\n  </ion-toolbar>\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img src=\"{{ (driver)?.photoURL}}\" onerror=\"this.src='./assets/img/default.png'\">\n    </ion-avatar>\n    <ion-label>\n      <h3 style=\"font-weight:500;\">{{ (driver)?.name }} - {{ (driver)?.rating }} <ion-icon name=\"star\"></ion-icon>\n      </h3>\n      <p>{{ (driver)?.brand }} • {{ (driver)?.model }} • {{ (driver)?.plate }} • {{ (driver)?.type }}</p>\n    </ion-label>\n    <ion-toggle (ionChange)=\"changeAvailability()\" [(ngModel)]=\"driver.isOnline\" [disabled]=\"!driver.isApproved\"\n      slot=\"end\">\n    </ion-toggle>\n  </ion-item>\n  <p style=\"margin:0; font-size: 12px;font-size: 12px;padding: 4px 8px;\">Localização: {{locality}}</p>\n</ion-header>\n\n<ion-content>\n  <p *ngIf=\"!driver.isApproved\" class=\"message\">Sua conta ainda não foi aprovada</p>\n  <div id=\"map\" style=\"height: 100%;width:100%;\"></div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.message {\n  text-align: center;\n  background: #FFC107;\n  margin: 0;\n  padding: 4px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAubWVzc2FnZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI0ZGQzEwNztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgXG4gIFxuICAiXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_deal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/deal.service */ "./src/app/services/deal.service.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/trip.service */ "./src/app/services/trip.service.ts");
















let HomePage = class HomePage {
    constructor(driverService, alertCtrl, dealService, authService, placeService, geolocation, translate, router, menuCtrl, platform, common, permission, afAuth, loadCtrl, tripService) {
        this.driverService = driverService;
        this.alertCtrl = alertCtrl;
        this.dealService = dealService;
        this.authService = authService;
        this.placeService = placeService;
        this.geolocation = geolocation;
        this.translate = translate;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.common = common;
        this.permission = permission;
        this.afAuth = afAuth;
        this.loadCtrl = loadCtrl;
        this.tripService = tripService;
        this.driver = {};
        this.isDriverAvailable = false;
        this.dealStatus = false;
        this.position = [];
        this.remainingTime = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["DEAL_TIMEOUT"];
    }
    loadMap(lat, lng) {
        let latLng = new google.maps.LatLng(lat, lng);
        let mapOptions = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].mapOptions;
        mapOptions.center = latLng;
        mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng,
            icon: {
                url: './assets/img/marker.png',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
                scaledSize: new google.maps.Size(32, 32)
            },
        });
    }
    changeAvailability() {
        clearInterval(this.positionTracking);
        console.log(this.driver.isOnline);
        if (this.platform.is('mobile') && this.driver.isOnline == true) {
            //console.log("entrei aqui incialmente")
            this.permission.checkPermission(this.permission.PERMISSION.ACCESS_FINE_LOCATION).then((res) => {
                this.common.showToast("App Location Permission: " + res.hasPermission);
                if (!res.hasPermission) {
                    this.permission.requestPermission(this.permission.PERMISSION.ACCESS_FINE_LOCATION).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    });
                }
            }).catch(err => {
                console.log(err);
            });
        }
        if (this.driver.isOnline == true) {
            //this.common.showLoader();
            // this.loadCtrl.create({ spinner: 'circles', id: 'location-access' }).then(l => l.present());
            // get current location
            this.geolocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 10000
            }).then((resp) => {
                //console.log('chegamos aqui no PC', resp)
                //this.loadCtrl.dismiss();
                this.driverService.getDriver(this.driver.uid).update({ isOnline: true });
                //Enabling background mode if app is running on device
                this.position = [resp.coords.latitude, resp.coords.longitude];
                console.log('position', this.position);
                let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                let geocoder = new google.maps.Geocoder();
                this.loadMap(resp.coords.latitude, resp.coords.longitude);
                // find address from lat lng
                geocoder.geocode({ 'latLng': latLng }, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        //console.log("Resultado da posiçao", results);
                        // save locality
                        this.locality = this.placeService.setLocalityFromGeocoder(results);
                        // console.log('locality', this.locality);
                        // start tracking
                        this.positionTracking = setInterval(() => {
                            //console.log("Tecnico Online", this.driver.type)
                            // check for driver object, if it did not complete profile, stop updating location
                            if (!this.driver || !this.driver.type)
                                return;
                            if (this.driver.isOnline) {
                                // Periodic update after particular time intrvel
                                this.geolocation.getCurrentPosition({
                                    enableHighAccuracy: true,
                                    timeout: 10000
                                }).then((resp) => {
                                    console.log(resp);
                                    this.driverService.updatePosition(this.driver.uid, this.driver.type, this.locality, resp.coords.latitude, resp.coords.longitude, this.driver.rating, this.driver.name);
                                    let location = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                                    this.marker.setPosition(location);
                                    this.map.setCenter(location);
                                }, err => {
                                    this.common.showToast(err.message);
                                    console.log(err);
                                });
                            }
                        }, src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["POSITION_INTERVAL"]);
                        this.watchDeals();
                    }
                });
            }, (err) => {
                console.log(err);
                this.loadCtrl.dismiss();
                this.common.showToast("Something went wrong while accessing your location. Please make sure, you have GPS access on device");
                this.driver.isOnline = false;
                this.driverService.getDriver(this.driver.uid).update({ isOnline: false });
            });
        }
        else {
            clearInterval(this.positionTracking);
            this.driverService.getDriver(this.driver.uid).update({ isOnline: false });
            this.driverService.remove(this.driver.uid, this.driver.type, this.locality);
            if (this.dealSubscription)
                this.dealSubscription.unsubscribe();
            this.common.showToast("Você está Offline agora");
        }
    }
    // count down
    countDown() {
        let interval = setInterval(() => {
            this.remainingTime--;
            this.dealAlert.subHeader = 'Fechamento em ' + this.remainingTime + ' sec';
            if (this.remainingTime == 0) {
                clearInterval(interval);
                this.cancelDeal();
                this.remainingTime = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["DEAL_TIMEOUT"];
            }
        }, 1000);
        this.confirmJob();
    }
    cancelDeal() {
        console.log("close");
        this.dealStatus = false;
        this.dealAlert.dismiss();
        this.dealService.removeDeal(this.driver.uid);
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(true);
        this.afAuth.onAuthStateChanged((user) => {
            console.log('user', user);
            if (user != null) {
                this.driverService.getDriver(user.uid).valueChanges().subscribe((snapshot) => {
                    // console.log("dados recebidos do tecnico",snapshot);
                    if (snapshot != null) {
                        this.driver = snapshot;
                        if (this.driver.isOnline && this.platform.is('mobile')) {
                            //enable background location update when app minimized
                            this.platform.pause.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(() => {
                                if (this.driver.isOnline) {
                                    console.log("App minimized");
                                    cordova.plugins.backgroundMode.setDefaults({ id: -1, title: 'Aplicativo do Técnico', text: 'Background', hidden: false, silent: false });
                                    cordova.plugins.backgroundMode.setEnabled(true);
                                    cordova.plugins.backgroundMode.on('enable', () => {
                                        console.log('background mode Enabled !!!');
                                        cordova.plugins.backgroundMode.disableWebViewOptimizations();
                                        cordova.plugins.backgroundMode.disableBatteryOptimizations();
                                    });
                                }
                            });
                            cordova.plugins.backgroundMode.on('active', () => console.log("bgm: active"));
                            cordova.plugins.backgroundMode.on('deactivate', () => console.log("bgm: deactive"));
                            cordova.plugins.backgroundMode.on('failure', () => console.log("bgm: failed"));
                            cordova.plugins.backgroundMode.on('disable', () => {
                                console.log('bgm: disable');
                            });
                            //disabling background mode when app resume;
                            this.platform.resume.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(() => cordova.plugins.backgroundMode.setEnabled(false));
                        }
                    }
                });
                this.tripService.getLastTrips(user.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe((trips) => {
                    trips.forEach(trip => {
                        if (trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_WAITING"] || trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_GOING"]) {
                            this.tripService.setCurrentTrip(trip.key);
                            this.router.navigateByUrl('/pickup');
                        }
                    });
                });
            }
        });
    }
    range(n) {
        return new Array(Math.round(n));
    }
    // confirm a job
    confirmJob() {
        //console.log("confirm");
        let message = "<b>Local:</b> (" + this.job.origin.distance + "km)<br/>" + this.job.origin.vicinity;
        //+ "<br/><b>To:</b>(" + this.job.destination.distance + "km)<br>" + this.job.destination.vicinity + "<br> <p>Your Commission: <h5>" + this.job.currency + this.job.commission + "</h5></p>";
        this.alertCtrl.create({
            id: this.job.key,
            header: 'Nova Solicitação',
            message: message,
            cssClass: 'customAlert',
            buttons: [
                {
                    text: 'Rejeitar',
                    role: 'cancel',
                    handler: () => {
                        //  console.log('Disagree clicked');
                        this.dealStatus = false;
                        this.dealService.removeDeal(this.driver.uid);
                    }
                },
                {
                    text: 'Aceitar',
                    handler: () => {
                        this.dealStatus = false;
                        this.dealService.acceptDeal(this.driver.uid, this.deal).then(() => {
                            this.router.navigateByUrl('pickup');
                        });
                    }
                }
            ]
        }).then(res => {
            this.dealAlert = res;
            this.dealAlert.present();
        });
        this.playAudio();
    }
    // listen to deals
    watchDeals() {
        // listen to deals
        this.dealSubscription = this.dealService.getDeal(this.driver.uid).valueChanges().subscribe((snapshot) => {
            if (snapshot != null || snapshot != undefined) {
                this.deal = snapshot;
                if (snapshot.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["DEAL_STATUS_PENDING"]) {
                    // if deal expired
                    if (snapshot.createdAt < (Date.now() - src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["DEAL_TIMEOUT"] * 1000)) {
                        return this.dealService.removeDeal(this.driver.uid);
                    }
                    this.dealStatus = true;
                    this.job = snapshot;
                    this.geolocation.getCurrentPosition({
                        enableHighAccuracy: true,
                        timeout: 10000
                    }).then((resp) => {
                        //resp.coords.longitude
                        this.job.origin.distance = this.placeService.calcCrow(resp.coords.latitude, resp.coords.longitude, this.job.origin.location.lat, this.job.origin.location.lng).toFixed(0);
                        this.job.destination.distance = this.placeService.calcCrow(resp.coords.latitude, resp.coords.longitude, this.job.destination.location.lat, this.job.destination.location.lng).toFixed(0);
                        this.countDown();
                    }, err => this.common.showToast(err.message));
                }
            }
        });
    }
    playAudio() {
        if (src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["PLAY_AUDIO_ON_REQUEST"] == true) {
            let audio = new Audio(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["AUDIO_PATH"]);
            audio.play();
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _services_deal_service__WEBPACK_IMPORTED_MODULE_7__["DealService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_place_service__WEBPACK_IMPORTED_MODULE_8__["PlaceService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_15__["TripService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map