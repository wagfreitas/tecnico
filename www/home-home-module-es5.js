(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      JetPort\n    </ion-title>\n  </ion-toolbar>\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img src=\"{{ (driver)?.photoURL}}\" onerror=\"this.src='./assets/img/default.png'\">\n    </ion-avatar>\n    <ion-label>\n      <h3 style=\"font-weight:500;\">{{ (driver)?.name }} - {{ (driver)?.rating }} <ion-icon name=\"star\"></ion-icon>\n      </h3>\n      <p>{{ (driver)?.brand }} • {{ (driver)?.model }} • {{ (driver)?.plate }} • {{ (driver)?.type }}</p>\n    </ion-label>\n    <ion-toggle (ionChange)=\"changeAvailability()\" [(ngModel)]=\"driver.isOnline\" [disabled]=\"!driver.isApproved\"\n      slot=\"end\">\n    </ion-toggle>\n  </ion-item>\n  <p style=\"margin:0; font-size: 12px;font-size: 12px;padding: 4px 8px;\">Localização: {{locality}}</p>\n</ion-header>\n\n<ion-content>\n  <p *ngIf=\"!driver.isApproved\" class=\"message\">Sua conta ainda não foi aprovada</p>\n  <div id=\"map\" style=\"height: 100%;width:100%;\"></div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.message {\n  text-align: center;\n  background: #FFC107;\n  margin: 0;\n  padding: 4px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAubWVzc2FnZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI0ZGQzEwNztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgXG4gIFxuICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/driver.service */
      "./src/app/services/driver.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_deal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/deal.service */
      "./src/app/services/deal.service.ts");
      /* harmony import */


      var _services_place_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/place.service */
      "./src/app/services/place.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_trip_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../services/trip.service */
      "./src/app/services/trip.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(driverService, alertCtrl, dealService, authService, placeService, geolocation, translate, router, menuCtrl, platform, common, permission, afAuth, loadCtrl, tripService) {
          _classCallCheck(this, HomePage);

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

        _createClass(HomePage, [{
          key: "loadMap",
          value: function loadMap(lat, lng) {
            var latLng = new google.maps.LatLng(lat, lng);
            var mapOptions = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].mapOptions;
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
              }
            });
          }
        }, {
          key: "changeAvailability",
          value: function changeAvailability() {
            var _this = this;

            clearInterval(this.positionTracking);
            console.log(this.driver.isOnline);

            if (this.platform.is('mobile') && this.driver.isOnline == true) {
              //console.log("entrei aqui incialmente")
              this.permission.checkPermission(this.permission.PERMISSION.ACCESS_FINE_LOCATION).then(function (res) {
                _this.common.showToast("App Location Permission: " + res.hasPermission);

                if (!res.hasPermission) {
                  _this.permission.requestPermission(_this.permission.PERMISSION.ACCESS_FINE_LOCATION).then(function (res) {
                    console.log(res);
                  })["catch"](function (err) {
                    console.log(err);
                  });
                }
              })["catch"](function (err) {
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
              }).then(function (resp) {
                //console.log('chegamos aqui no PC', resp)
                //this.loadCtrl.dismiss();
                _this.driverService.getDriver(_this.driver.uid).update({
                  isOnline: true
                }); //Enabling background mode if app is running on device


                _this.position = [resp.coords.latitude, resp.coords.longitude];
                console.log('position', _this.position);
                var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                var geocoder = new google.maps.Geocoder();

                _this.loadMap(resp.coords.latitude, resp.coords.longitude); // find address from lat lng


                geocoder.geocode({
                  'latLng': latLng
                }, function (results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    //console.log("Resultado da posiçao", results);
                    // save locality
                    _this.locality = _this.placeService.setLocalityFromGeocoder(results); // console.log('locality', this.locality);
                    // start tracking

                    _this.positionTracking = setInterval(function () {
                      //console.log("Tecnico Online", this.driver.type)
                      // check for driver object, if it did not complete profile, stop updating location
                      if (!_this.driver || !_this.driver.type) return;

                      if (_this.driver.isOnline) {
                        // Periodic update after particular time intrvel
                        _this.geolocation.getCurrentPosition({
                          enableHighAccuracy: true,
                          timeout: 10000
                        }).then(function (resp) {
                          console.log(resp);

                          _this.driverService.updatePosition(_this.driver.uid, _this.driver.type, _this.locality, resp.coords.latitude, resp.coords.longitude, _this.driver.rating, _this.driver.name);

                          var location = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

                          _this.marker.setPosition(location);

                          _this.map.setCenter(location);
                        }, function (err) {
                          _this.common.showToast(err.message);

                          console.log(err);
                        });
                      }
                    }, src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["POSITION_INTERVAL"]);

                    _this.watchDeals();
                  }
                });
              }, function (err) {
                console.log(err);

                _this.loadCtrl.dismiss();

                _this.common.showToast("Something went wrong while accessing your location. Please make sure, you have GPS access on device");

                _this.driver.isOnline = false;

                _this.driverService.getDriver(_this.driver.uid).update({
                  isOnline: false
                });
              });
            } else {
              clearInterval(this.positionTracking);
              this.driverService.getDriver(this.driver.uid).update({
                isOnline: false
              });
              this.driverService.remove(this.driver.uid, this.driver.type, this.locality);
              if (this.dealSubscription) this.dealSubscription.unsubscribe();
              this.common.showToast("Você está Offline agora");
            }
          } // count down

        }, {
          key: "countDown",
          value: function countDown() {
            var _this2 = this;

            var interval = setInterval(function () {
              _this2.remainingTime--;
              _this2.dealAlert.subHeader = 'Fechamento em ' + _this2.remainingTime + ' sec';

              if (_this2.remainingTime == 0) {
                clearInterval(interval);

                _this2.cancelDeal();

                _this2.remainingTime = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["DEAL_TIMEOUT"];
              }
            }, 1000);
            this.confirmJob();
          }
        }, {
          key: "cancelDeal",
          value: function cancelDeal() {
            console.log("close");
            this.dealStatus = false;
            this.dealAlert.dismiss();
            this.dealService.removeDeal(this.driver.uid);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this3 = this;

            this.menuCtrl.enable(true);
            this.afAuth.onAuthStateChanged(function (user) {
              console.log('user', user);

              if (user != null) {
                _this3.driverService.getDriver(user.uid).valueChanges().subscribe(function (snapshot) {
                  // console.log("dados recebidos do tecnico",snapshot);
                  if (snapshot != null) {
                    _this3.driver = snapshot;

                    if (_this3.driver.isOnline && _this3.platform.is('mobile')) {
                      //enable background location update when app minimized
                      _this3.platform.pause.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function () {
                        if (_this3.driver.isOnline) {
                          console.log("App minimized");
                          cordova.plugins.backgroundMode.setDefaults({
                            id: -1,
                            title: 'Aplicativo do Técnico',
                            text: 'Background',
                            hidden: false,
                            silent: false
                          });
                          cordova.plugins.backgroundMode.setEnabled(true);
                          cordova.plugins.backgroundMode.on('enable', function () {
                            console.log('background mode Enabled !!!');
                            cordova.plugins.backgroundMode.disableWebViewOptimizations();
                            cordova.plugins.backgroundMode.disableBatteryOptimizations();
                          });
                        }
                      });

                      cordova.plugins.backgroundMode.on('active', function () {
                        return console.log("bgm: active");
                      });
                      cordova.plugins.backgroundMode.on('deactivate', function () {
                        return console.log("bgm: deactive");
                      });
                      cordova.plugins.backgroundMode.on('failure', function () {
                        return console.log("bgm: failed");
                      });
                      cordova.plugins.backgroundMode.on('disable', function () {
                        console.log('bgm: disable');
                      }); //disabling background mode when app resume;

                      _this3.platform.resume.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function () {
                        return cordova.plugins.backgroundMode.setEnabled(false);
                      });
                    }
                  }
                });

                _this3.tripService.getLastTrips(user.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function (trips) {
                  trips.forEach(function (trip) {
                    if (trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_WAITING"] || trip.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["TRIP_STATUS_GOING"]) {
                      _this3.tripService.setCurrentTrip(trip.key);

                      _this3.router.navigateByUrl('/pickup');
                    }
                  });
                });
              }
            });
          }
        }, {
          key: "range",
          value: function range(n) {
            return new Array(Math.round(n));
          } // confirm a job

        }, {
          key: "confirmJob",
          value: function confirmJob() {
            var _this4 = this;

            //console.log("confirm");
            var message = "<b>Local:</b> (" + this.job.origin.distance + "km)<br/>" + this.job.origin.vicinity; //+ "<br/><b>To:</b>(" + this.job.destination.distance + "km)<br>" + this.job.destination.vicinity + "<br> <p>Your Commission: <h5>" + this.job.currency + this.job.commission + "</h5></p>";

            this.alertCtrl.create({
              id: this.job.key,
              header: 'Nova Solicitação',
              message: message,
              cssClass: 'customAlert',
              buttons: [{
                text: 'Rejeitar',
                role: 'cancel',
                handler: function handler() {
                  //  console.log('Disagree clicked');
                  _this4.dealStatus = false;

                  _this4.dealService.removeDeal(_this4.driver.uid);
                }
              }, {
                text: 'Aceitar',
                handler: function handler() {
                  _this4.dealStatus = false;

                  _this4.dealService.acceptDeal(_this4.driver.uid, _this4.deal).then(function () {
                    _this4.router.navigateByUrl('pickup');
                  });
                }
              }]
            }).then(function (res) {
              _this4.dealAlert = res;

              _this4.dealAlert.present();
            });
            this.playAudio();
          } // listen to deals

        }, {
          key: "watchDeals",
          value: function watchDeals() {
            var _this5 = this;

            // listen to deals
            this.dealSubscription = this.dealService.getDeal(this.driver.uid).valueChanges().subscribe(function (snapshot) {
              if (snapshot != null || snapshot != undefined) {
                _this5.deal = snapshot;

                if (snapshot.status == src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["DEAL_STATUS_PENDING"]) {
                  // if deal expired
                  if (snapshot.createdAt < Date.now() - src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["DEAL_TIMEOUT"] * 1000) {
                    return _this5.dealService.removeDeal(_this5.driver.uid);
                  }

                  _this5.dealStatus = true;
                  _this5.job = snapshot;

                  _this5.geolocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 10000
                  }).then(function (resp) {
                    //resp.coords.longitude
                    _this5.job.origin.distance = _this5.placeService.calcCrow(resp.coords.latitude, resp.coords.longitude, _this5.job.origin.location.lat, _this5.job.origin.location.lng).toFixed(0);
                    _this5.job.destination.distance = _this5.placeService.calcCrow(resp.coords.latitude, resp.coords.longitude, _this5.job.destination.location.lat, _this5.job.destination.location.lng).toFixed(0);

                    _this5.countDown();
                  }, function (err) {
                    return _this5.common.showToast(err.message);
                  });
                }
              }
            });
          }
        }, {
          key: "playAudio",
          value: function playAudio() {
            if (src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["PLAY_AUDIO_ON_REQUEST"] == true) {
              var audio = new Audio(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["AUDIO_PATH"]);
              audio.play();
            }
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _services_deal_service__WEBPACK_IMPORTED_MODULE_7__["DealService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _services_place_service__WEBPACK_IMPORTED_MODULE_8__["PlaceService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _services_trip_service__WEBPACK_IMPORTED_MODULE_15__["TripService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map