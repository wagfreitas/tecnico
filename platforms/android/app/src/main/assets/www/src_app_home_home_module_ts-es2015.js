(self["webpackChunkdriver"] = self["webpackChunkdriver"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/driver.service */ 64050);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_deal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/deal.service */ 86999);
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/place.service */ 87234);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common.service */ 5620);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/trip.service */ 67446);


















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
        this.remainingTime = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.DEAL_TIMEOUT;
    }
    // carrga o mapa com a posiçao dos tecnisos
    loadMap(lat, lng) {
        let latLng = new google.maps.LatLng(lat, lng);
        let mapOptions = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.mapOptions;
        mapOptions.center = latLng;
        mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng,
            icon: {
                url: "./assets/img/marker.png",
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 16),
                scaledSize: new google.maps.Size(32, 32),
            },
        });
    }
    //Acionado quando o tecnico muda a disponibilidade
    changeAvailability() {
        clearInterval(this.positionTracking);
        // se o device for um moile seta a posiçao atual do tecnico
        if (this.platform.is("mobile") && this.driver.isOnline == true) {
            this.permission
                .checkPermission(this.permission.PERMISSION.ACCESS_FINE_LOCATION)
                .then((res) => {
                this.common.showToast("Aplicaçao deseja permissao: " + res.hasPermission);
                if (!res.hasPermission) {
                    this.permission
                        .requestPermission(this.permission.PERMISSION.ACCESS_FINE_LOCATION)
                        .then((res) => {
                        console.log(res);
                    })
                        .catch((err) => {
                        console.log(err);
                    });
                }
            })
                .catch((err) => {
                console.log(err);
            });
        }
        if (this.driver.isOnline === true) {
            this.loadCtrl
                .create({ spinner: "circles", id: "location-access", duration: 10000 })
                .then((l) => {
                this.loader = l;
                this.loader.present();
            });
            // Pega a localizaçao atual do tecnico e habilita a precisao
            this.geolocation
                .getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 10000,
            })
                .then((resp) => {
                if (this.loader !== null)
                    this.loader.dismiss();
                this.driverService
                    .getDriver(this.driver.uid)
                    .update({ isOnline: true });
                //Enabling background mode if app is running on device
                this.position = [resp.coords.latitude, resp.coords.longitude];
                let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                let geocoder = new google.maps.Geocoder();
                this.loadMap(resp.coords.latitude, resp.coords.longitude);
                // find address from lat lng
                geocoder.geocode({ latLng: latLng }, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        // save locality
                        this.locality =
                            this.placeService.setLocalityFromGeocoder(results);
                        // console.log('locality', this.locality);
                        // start tracking
                        this.positionTracking = setInterval(() => {
                            //console.log("Tecnico Online", this.driver.type)
                            // check for driver object, if it did not complete profile, stop updating location
                            if (!this.driver || !this.driver.type)
                                return;
                            if (this.driver.isOnline) {
                                // Periodic update after particular time intrvel
                                this.geolocation
                                    .getCurrentPosition({
                                    enableHighAccuracy: true,
                                    timeout: 10000,
                                })
                                    .then((resp) => {
                                    this.driverService.updatePosition(this.driver.uid, this.driver.type, this.locality, resp.coords.latitude, resp.coords.longitude, this.driver.rating, this.driver.name);
                                    let location = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                                    this.marker.setPosition(location);
                                    this.map.setCenter(location);
                                }, (err) => {
                                    this.common.showToast(err.message);
                                    console.log(err);
                                });
                            }
                        }, src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.POSITION_INTERVAL);
                        this.watchDeals();
                    }
                });
            }, (err) => {
                console.log(err);
                this.loadCtrl.dismiss();
                this.common.showToast("Houve um problema para determinar a sua localizaçao");
                this.driver.isOnline = false;
                this.driverService
                    .getDriver(this.driver.uid)
                    .update({ isOnline: false });
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
    // Contagem Regressiva para cancelamento de uma chamada
    countDown() {
        let interval = setInterval(() => {
            this.remainingTime--;
            this.dealAlert.subHeader = "Você tem " + this.remainingTime + " sec, para confirmar o atendimento";
            if (this.remainingTime === 0) {
                clearInterval(interval);
                this.cancelDeal();
                this.remainingTime = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.DEAL_TIMEOUT;
            }
        }, 1000);
        this.confirmJob();
    }
    cancelDeal() {
        this.dealStatus = false;
        this.dealAlert.dismiss();
        this.dealService.removeDeal(this.driver.uid);
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(true);
        // pega os dados do técnico logado
        this.afAuth.onAuthStateChanged((user) => {
            if (user != null) {
                this.driverService
                    .getDriver(user.uid)
                    .valueChanges()
                    .subscribe((snapshot) => {
                    if (snapshot != null) {
                        this.driver = snapshot;
                        if (this.driver.isOnline && this.platform.is("mobile")) {
                            //enable background location update when app minimized
                            this.platform.pause.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
                                if (this.driver.isOnline) {
                                    cordova.plugins.backgroundMode.setDefaults({
                                        id: -1,
                                        title: "Aplicativo do Técnico",
                                        text: "Background",
                                        hidden: false,
                                        silent: false,
                                    });
                                    cordova.plugins.backgroundMode.setEnabled(true);
                                    cordova.plugins.backgroundMode.on("enable", () => {
                                        console.log("background mode Enabled !!!");
                                        cordova.plugins.backgroundMode.disableWebViewOptimizations();
                                        cordova.plugins.backgroundMode.disableBatteryOptimizations();
                                    });
                                }
                            });
                            cordova.plugins.backgroundMode.on("active", () => console.log("bgm: active"));
                            cordova.plugins.backgroundMode.on("deactivate", () => console.log("bgm: deactive"));
                            cordova.plugins.backgroundMode.on("failure", () => console.log("bgm: failed"));
                            cordova.plugins.backgroundMode.on("disable", () => {
                                console.log("bgm: desabilitado");
                            });
                            //disabling background mode when app resume;
                            this.platform.resume
                                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1))
                                .subscribe(() => cordova.plugins.backgroundMode.setEnabled(false));
                        }
                    }
                });
                this.tripService
                    .getLastTrips(user.uid)
                    .valueChanges()
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1))
                    .subscribe((trips) => {
                    trips.forEach((trip) => {
                        if (trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.TRIP_STATUS_WAITING ||
                            trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.TRIP_STATUS_GOING) {
                            this.tripService.setCurrentTrip(trip.key);
                            this.router.navigateByUrl("/pickup");
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
        let message = "<b>Local:</b> (" +
            this.job.origin.distance +
            "km)<br/>" +
            this.job.origin.vicinity;
        //+ "<br/><b>To:</b>(" + this.job.destination.distance + "km)<br>" + this.job.destination.vicinity + "<br> <p>Your Commission: <h5>" + this.job.currency + this.job.commission + "</h5></p>";
        this.alertCtrl
            .create({
            id: this.job.key,
            header: "Nova Solicitação",
            message: message,
            cssClass: "alert-button",
            buttons: [
                {
                    text: "Rejeitar",
                    role: "cancel",
                    cssClass: "alert-button",
                    handler: () => {
                        //  console.log('Disagree clicked');
                        this.dealStatus = false;
                        this.dealService.removeDeal(this.driver.uid);
                    },
                },
                {
                    text: "Aceitar",
                    handler: () => {
                        this.dealStatus = false;
                        this.dealService
                            .acceptDeal(this.driver.uid, this.deal)
                            .then(() => {
                            this.router.navigateByUrl("pickup");
                        });
                    },
                },
            ],
        })
            .then((res) => {
            this.dealAlert = res;
            this.dealAlert.present();
        });
        this.playAudio();
    }
    // listen to deals
    watchDeals() {
        // listen to deals
        this.dealSubscription = this.dealService
            .getDeal(this.driver.uid)
            .valueChanges()
            .subscribe((snapshot) => {
            if (snapshot) {
                this.deal = snapshot;
                if (snapshot.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.DEAL_STATUS_PENDING) {
                    // if deal expired
                    if (snapshot.createdAt < Date.now() - src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.DEAL_TIMEOUT * 1000) {
                        return this.dealService.removeDeal(this.driver.uid);
                    }
                    this.dealStatus = true;
                    this.job = snapshot;
                    this.geolocation
                        .getCurrentPosition({
                        enableHighAccuracy: true,
                        timeout: 10000,
                    })
                        .then((resp) => {
                        //resp.coords.longitude
                        this.job.origin.distance = this.placeService
                            .calcCrow(resp.coords.latitude, resp.coords.longitude, this.job.origin.location.lat, this.job.origin.location.lng)
                            .toFixed(0);
                        /* this.job.destination.distance = this.placeService
                         .calcCrow(resp.coords.latitude,resp.coords.longitude,this.job.origin.location.lat,this.job.origin.location.lng)
                         .toFixed(0);*/
                        this.countDown();
                    }, (err) => this.common.showToast(err.message));
                }
            }
        });
    }
    playAudio() {
        if (src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.PLAY_AUDIO_ON_REQUEST == true) {
            let audio = new Audio(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.AUDIO_PATH);
            audio.play();
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_4__.DriverService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _services_deal_service__WEBPACK_IMPORTED_MODULE_5__.DealService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_place_service__WEBPACK_IMPORTED_MODULE_6__.PlaceService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__.Geolocation },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__.AndroidPermissions },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_10__.TripService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: "app-home",
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.message {\n  text-align: center;\n  background: #FFC107;\n  margin: 0;\n  padding: 4px;\n  font-size: 14px;\n}\n\n.buttoncss {\n  color: #e74c3c;\n  background-color: black;\n}\n\n.alertcss {\n  background-color: aqua;\n  color: #FFC107;\n}\n\n.basic-alert {\n  --backdrop-opacity: 0.6;\n  --background: linear-gradient(90deg, rgb(30, 0, 201) 1%, rgb(248, 255, 248) 100%);\n}\n\n.alert-button-inner.sc-ion-alert-md {\n  justify-content: flex-end;\n}\n\n.alert-button-inner.sc-ion-alert-md {\n  display: flex;\n  flex-flow: row nowrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\na, a div, a span, a ion-icon, a ion-label, button, button div, button span, button ion-icon, button ion-label, .ion-tappable, [tappable], [tappable] div, [tappable] span, [tappable] ion-icon, [tappable] ion-label, input, textarea {\n  touch-action: manipulation;\n}\n\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\n.alert-button {\n  border-radius: 2px;\n  margin-left: 0;\n  margin-right: 8px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  position: relative;\n  background-color: #d4333300;\n  color: #8a1616;\n  font-weight: 500;\n  text-align: end;\n  text-transform: uppercase;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsaUZBQUE7QUFDSjs7QUFNQTtFQUVJLHlCQUFBO0FBSEo7O0FBTUE7RUFFSSxhQUFBO0VBRUEscUJBQUE7RUFFQSxjQUFBO0VBRUEsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0E7RUFDSSwwQkFBQTtBQUZKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5tZXNzYWdle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmJ1dHRvbmNzc3tcbiAgICBjb2xvcjojZTc0YzNjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmFsZXJ0Y3Nze1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgY29sb3I6I0ZGQzEwN1xuICB9XG5cbiAgLmJhc2ljLWFsZXJ0IHtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuNjtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDMwLCAwLCAyMDEpIDElLCByZ2IoMjQ4LCAyNTUsIDI0OCkgMTAwJSk7XG5cbiAgICB9ICAgXG5cbiAgICBcblxuXG4uYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1tZCB7XG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuYSwgYSBkaXYsIGEgc3BhbiwgYSBpb24taWNvbiwgYSBpb24tbGFiZWwsIGJ1dHRvbiwgYnV0dG9uIGRpdiwgYnV0dG9uIHNwYW4sIGJ1dHRvbiBpb24taWNvbiwgYnV0dG9uIGlvbi1sYWJlbCwgLmlvbi10YXBwYWJsZSwgW3RhcHBhYmxlXSwgW3RhcHBhYmxlXSBkaXYsIFt0YXBwYWJsZV0gc3BhbiwgW3RhcHBhYmxlXSBpb24taWNvbiwgW3RhcHBhYmxlXSBpb24tbGFiZWwsIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbn1cblxuLmFsZXJ0LWJ1dHRvbntcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQzMzMzMDA7XG4gICAgY29sb3I6ICM4YTE2MTY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgXG5cbn1cbiAgXG4gICJdfQ== */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n     JetPort\n    </ion-title>\n  </ion-toolbar>\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img src=\"{{ (driver)?.photoURL}}\" onerror=\"this.src='./assets/img/default.png'\">\n    </ion-avatar>\n    <ion-label>\n      <h3 style=\"font-weight:500;\">{{ (driver)?.name }} - {{ (driver)?.rating }} <ion-icon name=\"star\"></ion-icon>\n      </h3>\n      <p>{{ (driver)?.brand }} • {{ (driver)?.model }} • {{ (driver)?.plate }} • {{ (driver)?.type }}</p>\n    </ion-label>\n    <ion-toggle (ionChange)=\"changeAvailability()\" [(ngModel)]=\"driver.isOnline\" [disabled]=\"!driver.isApproved\"\n      slot=\"end\">\n    </ion-toggle>\n  </ion-item>\n  <p style=\"margin:0; font-size: 12px;font-size: 12px;padding: 4px 8px;\">Localização: {{locality}}</p>\n</ion-header>\n\n<ion-content>\n  <p *ngIf=\"!driver.isApproved\" class=\"message\">Sua conta ainda não foi aprovada</p>\n  <div id=\"map\" style=\"height: 100%;width:100%;\"></div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts-es2015.js.map