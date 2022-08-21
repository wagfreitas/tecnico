(self["webpackChunkdriver"] = self["webpackChunkdriver"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'forget',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_forget_forget_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forget/forget.module */ 29296)).then(m => m.ForgetPageModule)
    },
    {
        path: 'history',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_history_history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./history/history.module */ 92486)).then(m => m.HistoryPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 89182)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'pickup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pickup_pickup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pickup/pickup.module */ 71914)).then(m => m.PickupPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 18723)).then(m => m.RegisterPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
    },
    {
        path: 'wallet',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_wallet_wallet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/wallet.module */ 49555)).then(m => m.WalletPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/trip.service */ 67446);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/driver.service */ 64050);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ 84134);














let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, router, menuCtrl, translate, afAuth, afDB, authService, tripService, driverService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.translate = translate;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.authService = authService;
        this.tripService = tripService;
        this.driverService = driverService;
        this.appPages = [
            {
                title: 'HOME',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Atendimentos',
                url: '/history',
                icon: 'time'
            },
            {
                title: 'Notificações',
                url: '/notifications',
                icon: 'notifications'
            },
            {
                title: 'Configurações',
                url: '/settings',
                icon: 'settings'
            },
            {
                title: 'Perfil',
                url: '/profile',
                icon: 'person-add'
            }
        ];
        this.translate.setDefaultLang('en');
        localStorage.getItem('lang') == null ? this.translate.use('en') : this.translate.use(localStorage.getItem('lang'));
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.splashScreen.hide();
            this.statusBar.styleDefault();
            this.statusBar.styleLightContent();
            this.validateAuthState();
        });
    }
    validateAuthState() {
        this.afAuth.authState.subscribe(authData => {
            console.log('autenticaçao', authData);
            if (authData != null) {
                this.menuCtrl.enable(true);
                this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
            }
            else {
                this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
                this.menuCtrl.enable(false);
            }
        });
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__.AngularFireDatabase },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _services_trip_service__WEBPACK_IMPORTED_MODULE_4__.TripService },
    { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_6__.DriverService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 98969);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ 14368);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/storage */ 68274);





















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http, './assets/lang/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot({
                mode: 'md'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__.AppRoutingModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule.initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule,
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__.AngularFireDatabaseModule,
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__.AngularFireStorageModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
                }
            }),
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation,
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_5__.BackgroundMode,
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__.FirebaseX,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);






let AuthService = class AuthService {
    constructor(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.currentUser = {};
    }
    login(email, pass) {
        return this.afAuth.signInWithEmailAndPassword(email, pass);
    }
    reset(email) {
        return this.afAuth.sendPasswordResetEmail(email);
    }
    register(userInfo) {
        console.log(userInfo);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(observer => {
            let email = (userInfo.email).toLowerCase().trim();
            this.afAuth.createUserWithEmailAndPassword(email, userInfo.password).then((authData) => {
                // update driver object
                console.log(authData);
                userInfo.uid = authData.user.uid;
                userInfo.photoURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_AVATAR;
                userInfo.canRide = true;
                userInfo.isPhoneVerified = false;
                userInfo.createdAt = Date.now();
                this.getUserData().then(user => user.updateProfile({ displayName: userInfo.name, photoURL: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_AVATAR }));
                this.db.object('drivers/' + userInfo.uid).update(userInfo);
                observer.next();
            }).catch((error) => {
                if (error) {
                    observer.error(error);
                }
            });
        });
    }
    setUserData(obj) {
        return this.currentUser = obj;
    }
    getUserData() {
        return this.afAuth.currentUser;
    }
    getUser(id) {
        return this.db.object('drivers/' + id);
    }
    logout() {
        return this.afAuth.signOut(); // logout from firebase
    }
    resetPassword(email) {
        return this.afAuth.sendPasswordResetEmail(email);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__.AngularFireDatabase },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 64050:
/*!********************************************!*\
  !*** ./src/app/services/driver.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverService": function() { return /* binding */ DriverService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 15257);





let DriverService = class DriverService {
    constructor(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    // get driver by id
    getDriver(uid) {
        return this.db.object('drivers/' + uid);
    }
    remove(vehicleId, vehicleType, locality) {
        let path = 'localities/' + locality + '/' + vehicleType + '/' + vehicleId;
        this.db.object(path).remove();
    }
    // update driver's position
    updatePosition(vehicleId, vehicleType, locality, lat, lng, rating, name) {
        let path = 'localities/' + locality + '/' + vehicleType + '/' + vehicleId;
        this.db.object(path).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe((snapshot) => {
            console.log(snapshot);
            // insert if not exists
            if (snapshot === null) {
                this.db.object(path).set({
                    key: vehicleId,
                    lat: lat,
                    lng: lng,
                    oldLat: lat,
                    oldLng: lng,
                    last_active: Date.now(),
                    rating: rating,
                    name: name
                }).then(() => {
                    this.db.object('drivers/' + vehicleId).update({
                        lat: lat,
                        lng: lng,
                        locality: locality
                    });
                });
            }
            else {
                // update
                this.db.object(path).update({
                    key: vehicleId,
                    lat: lat,
                    lng: lng,
                    oldLat: snapshot.lat,
                    oldLng: snapshot.lng,
                    last_active: Date.now(),
                    rating: rating,
                    name: name
                }).then(() => {
                    this.db.object('drivers/' + vehicleId).update({
                        lat: lat,
                        lng: lng,
                        locality: locality
                    });
                });
            }
        });
    }
};
DriverService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__.AngularFireDatabase },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
DriverService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], DriverService);



/***/ }),

/***/ 67446:
/*!******************************************!*\
  !*** ./src/app/services/trip.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripService": function() { return /* binding */ TripService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ 84134);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment.prod */ 89019);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 15257);






let TripService = class TripService {
    constructor(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    // create trip from deal object
    createFromDeal(deal) {
        deal.status = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.TRIP_STATUS_WAITING;
        deal.otp = Math.floor(1000 + Math.random() * 9000);
        return this.db.list('trips').push(deal);
    }
    // pickup passenger
    pickUp(tripId) {
        this.db.object('trips/' + tripId).update({
            pickedUpAt: Date.now(),
            status: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.TRIP_STATUS_GOING
        });
    }
    // pickup passenger
    addValueToService(tripId, value) {
        this.db.object('trips/' + tripId).update({
            valueService: value
        });
    }
    // drop off
    dropOff(tripId) {
        this.db.object('trips/' + tripId).update({
            droppedOffAt: Date.now(),
            status: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.TRIP_STATUS_FINISHED
        });
    }
    cancel(tripId) {
        this.db.object('trips/' + tripId).update({
            droppedOffAt: Date.now(),
            status: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.TRIP_STATUS_CANCELED
        });
    }
    setCurrentTrip(tripId) {
        return this.db.object('trips/' + tripId).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe((snapshot) => {
            this.db.object('trips/' + tripId).update({ key: tripId });
            console.log(snapshot);
            if (snapshot != null) {
                this.currentTrip = Object.assign({ key: snapshot.key }, snapshot.payload.val());
            }
        });
    }
    getCurrentTrip() {
        return this.currentTrip;
    }
    getTripStatus(tripId) {
        return this.db.object('trips/' + tripId);
    }
    getPassenger(passengerId) {
        return this.db.object('passengers/' + passengerId);
    }
    // get driver's trip
    getTrips(uid) {
        return this.db.list('trips', ref => ref.orderByChild('driverId').equalTo(uid));
    }
    getLastTrips(uid) {
        return this.db.list('trips', ref => ref.orderByChild('driverId').equalTo(uid).limitToLast(3));
    }
};
TripService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
TripService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], TripService);



/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; },
/* harmony export */   "POSITION_INTERVAL": function() { return /* binding */ POSITION_INTERVAL; },
/* harmony export */   "DEAL_STATUS_PENDING": function() { return /* binding */ DEAL_STATUS_PENDING; },
/* harmony export */   "DEAL_STATUS_ACCEPTED": function() { return /* binding */ DEAL_STATUS_ACCEPTED; },
/* harmony export */   "DEAL_TIMEOUT": function() { return /* binding */ DEAL_TIMEOUT; },
/* harmony export */   "TRIP_STATUS_WAITING": function() { return /* binding */ TRIP_STATUS_WAITING; },
/* harmony export */   "TRIP_STATUS_GOING": function() { return /* binding */ TRIP_STATUS_GOING; },
/* harmony export */   "TRIP_STATUS_FINISHED": function() { return /* binding */ TRIP_STATUS_FINISHED; },
/* harmony export */   "TRIP_STATUS_CANCELED": function() { return /* binding */ TRIP_STATUS_CANCELED; },
/* harmony export */   "TRANSACTION_TYPE_WITHDRAW": function() { return /* binding */ TRANSACTION_TYPE_WITHDRAW; },
/* harmony export */   "PLAY_AUDIO_ON_REQUEST": function() { return /* binding */ PLAY_AUDIO_ON_REQUEST; },
/* harmony export */   "AUDIO_PATH": function() { return /* binding */ AUDIO_PATH; },
/* harmony export */   "DEFAULT_AVATAR": function() { return /* binding */ DEFAULT_AVATAR; }
/* harmony export */ });
const environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
        authDomain: "appjetport.firebaseapp.com",
        databaseURL: "https://appjetport-default-rtdb.firebaseio.com",
        projectId: "appjetport",
        storageBucket: "appjetport.appspot.com",
        messagingSenderId: "1012648687100",
        appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
        measurementId: "G-KKPVFVGG77"
    },
    langArr: [
        { name: 'English', code: 'en' },
        { name: 'española', code: 'es' },
        { name: 'عربى', code: 'ar' },
        { name: '中文', code: 'cn' }
    ],
    apiUrl: "https://appjetport.uc.r.appspot.com",
    mapOptions: {
        zoom: 17,
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: false,
        streetViewControl: false
    }
};
let POSITION_INTERVAL = 10 * 1000; // 10s for refreshing geolocation
let DEAL_STATUS_PENDING = 'pending';
let DEAL_STATUS_ACCEPTED = 'accepted';
let DEAL_TIMEOUT = 20; // 20 seconds
let TRIP_STATUS_WAITING = 'waiting';
let TRIP_STATUS_GOING = 'going';
let TRIP_STATUS_FINISHED = 'finished';
let TRIP_STATUS_CANCELED = 'canceled';
let TRANSACTION_TYPE_WITHDRAW = 'withdraw';
let PLAY_AUDIO_ON_REQUEST = true;
let AUDIO_PATH = "./assets/audio/sound.mp3"; //must have mp3 file
let DEFAULT_AVATAR = './assets/img/default.png';


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
        authDomain: "appjetport.firebaseapp.com",
        databaseURL: "https://appjetport-default-rtdb.firebaseio.com",
        projectId: "appjetport",
        storageBucket: "appjetport.appspot.com",
        messagingSenderId: "1012648687100",
        appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
        measurementId: "G-KKPVFVGG77"
    },
    //apiUrl: 'http://localhost:3333', 
    apiUrl: "https://appjetport.uc.r.appspot.com",
    langArr: [
        { name: 'English', code: 'en' },
        { name: 'española', code: 'es' },
        { name: 'عربى', code: 'ar' },
        { name: '中文', code: 'cn' }
    ],
    mapOptions: {
        zoom: 17,
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: false,
        streetViewControl: false
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3R7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\">\n              <ion-icon slot=\"start\" [md]=\"p.icon + '-outline'\"></ion-icon>\n              <ion-label>{{ p.title | translate }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map