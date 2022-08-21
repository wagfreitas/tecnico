import { Component } from '@angular/core';
import { AUDIO_PATH, PLAY_AUDIO_ON_REQUEST, DEAL_TIMEOUT, POSITION_INTERVAL, DEAL_STATUS_PENDING, environment, TRIP_STATUS_WAITING, TRIP_STATUS_GOING } from 'src/environments/environment.prod';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service';
import { AlertController, LoadingController, MenuController, Platform } from '@ionic/angular';
import { DealService } from '../services/deal.service';
import { PlaceService } from '../services/place.service';
import { TranslateService } from '@ngx-translate/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CommonService } from '../services/common.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { TripService } from '../services/trip.service';


declare var google: any;
declare var cordova;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: any;
  driver: any = {};
  deal: any;
  dealSubscription: any;
  isDriverAvailable = false;
  positionTracking: any;
  dealStatus = false;
  dealAlert: any;
  position: any = [];
  marker: any;
  locality: any;

  public job: any;
  public remainingTime = DEAL_TIMEOUT;

  constructor(
    private driverService: DriverService,
    private alertCtrl: AlertController,
    private dealService: DealService,
    private authService: AuthService,
    private placeService: PlaceService,
    private geolocation: Geolocation,
    private translate: TranslateService,
    private router: Router,
    private menuCtrl: MenuController,
    private platform: Platform,
    private common: CommonService,
    private permission: AndroidPermissions,
    private afAuth: AngularFireAuth,
    private loadCtrl: LoadingController,
    private tripService: TripService,
  ) {
    

  }

  // carrga o mapa com a posiçao dos tecnisos 
  loadMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng);

    let mapOptions: any = environment.mapOptions;
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

  //Acionado quando o tecnico muda a disponibilidade
  changeAvailability() {
    clearInterval(this.positionTracking);

    // se o device for um moile seta a posiçao atual do tecnico
    if (this.platform.is('mobile') && this.driver.isOnline == true) {
    
      this.permission.checkPermission(this.permission.PERMISSION.ACCESS_FINE_LOCATION).then((res) => {
        this.common.showToast("Aplicaçao deseja permissao: " + res.hasPermission);
        if (!res.hasPermission) {
          this.permission.requestPermission(this.permission.PERMISSION.ACCESS_FINE_LOCATION).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err);
          })
        }
      }).catch(err => {
        console.log(err);
      })

    }

    if (this.driver.isOnline == true) {

      // Pega a localizaçao atual do tecnico e habilita a precisao 
      this.geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000
      }).then((resp) => {
        this.driverService.getDriver(this.driver.uid).update({ isOnline: true });
        //Enabling background mode if app is running on device

        this.position = [resp.coords.latitude, resp.coords.longitude];
        let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        let geocoder = new google.maps.Geocoder();

        this.loadMap(resp.coords.latitude, resp.coords.longitude);
        // find address from lat lng
        geocoder.geocode({ 'latLng': latLng }, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            // save locality
            this.locality = this.placeService.setLocalityFromGeocoder(results);
           // console.log('locality', this.locality);

            // start tracking
            this.positionTracking = setInterval(() => {
              //console.log("Tecnico Online", this.driver.type)
              // check for driver object, if it did not complete profile, stop updating location
              if (!this.driver || !this.driver.type) return;


              if (this.driver.isOnline ) {
                // Periodic update after particular time intrvel
                this.geolocation.getCurrentPosition({
                  enableHighAccuracy: true,
                  timeout: 10000
                }).then((resp) => {
               
                  this.driverService.updatePosition(this.driver.uid, this.driver.type, this.locality, resp.coords.latitude, resp.coords.longitude, this.driver.rating, this.driver.name);


                  let location = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude)

                  this.marker.setPosition(location);
                  this.map.setCenter(location);

                }, err => {
                  this.common.showToast(err.message);
                  console.log(err);
                });

              }

            }, POSITION_INTERVAL);

            this.watchDeals();
          }
        });
      }, (err) => {
        console.log(err);
        this.loadCtrl.dismiss();
        this.common.showToast("Houve um problema para determinar a sua localizaçao");
        this.driver.isOnline = false;
        this.driverService.getDriver(this.driver.uid).update({ isOnline: false });
      });

    }
    else {
      clearInterval(this.positionTracking);
      this.driverService.getDriver(this.driver.uid).update({ isOnline: false });
      this.driverService.remove(this.driver.uid, this.driver.type, this.locality);
      if (this.dealSubscription) this.dealSubscription.unsubscribe();
      this.common.showToast("Você está Offline agora");
    }

  }

  // Contagem Regressiva para cancelamento de uma chamada
  countDown() {
    let interval = setInterval(() => {
      this.remainingTime--;
      this.dealAlert.subHeader = 'Fechamento em ' + this.remainingTime + ' sec';
      if (this.remainingTime == 0) {
        clearInterval(interval);
        this.cancelDeal();
        this.remainingTime = DEAL_TIMEOUT;
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
        this.driverService.getDriver(user.uid).valueChanges().subscribe((snapshot: any) => {
          if (snapshot != null) {
            this.driver = snapshot;
            if (this.driver.isOnline && this.platform.is('mobile')) {

              //enable background location update when app minimized

              this.platform.pause.pipe(take(1)).subscribe(() => {
                if (this.driver.isOnline) {
                  cordova.plugins.backgroundMode.setDefaults({ id: -1, title: 'Aplicativo do Técnico', text: 'Background', hidden: false, silent: false });

                  cordova.plugins.backgroundMode.setEnabled(true);
                  cordova.plugins.backgroundMode.on('enable', () => {
                    console.log('background mode Enabled !!!');
                    cordova.plugins.backgroundMode.disableWebViewOptimizations();
                    cordova.plugins.backgroundMode.disableBatteryOptimizations();
                  });
                }
              })

              cordova.plugins.backgroundMode.on('active', () => console.log("bgm: active"))
              cordova.plugins.backgroundMode.on('deactivate', () => console.log("bgm: deactive"))
              cordova.plugins.backgroundMode.on('failure', () => console.log("bgm: failed"))
              cordova.plugins.backgroundMode.on('disable', () => {
                console.log('bgm: desabilitado')
              });


              //disabling background mode when app resume;
              this.platform.resume.pipe(take(1)).subscribe(() => cordova.plugins.backgroundMode.setEnabled(false));
            }
          }
        });

        this.tripService.getLastTrips(user.uid).valueChanges().pipe(take(1)).subscribe((trips: any) => {
          trips.forEach(trip => {
            if (trip.status == TRIP_STATUS_WAITING || trip.status == TRIP_STATUS_GOING) {
              this.tripService.setCurrentTrip(trip.key);
              this.router.navigateByUrl('/pickup');
            }
          });
        })

      }
    });



  }

  range(n) {
    return new Array(Math.round(n));
  }

  // confirm a job
  confirmJob() {
    //console.log("confirm");
    let message = "<b>Local:</b> (" + this.job.origin.distance + "km)<br/>" + this.job.origin.vicinity 
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
    this.dealSubscription = this.dealService.getDeal(this.driver.uid).valueChanges().subscribe((snapshot: any) => {
      console.log("teste", snapshot)
      if (snapshot != null || snapshot != undefined) {
        this.deal = snapshot;
        if (snapshot.status == DEAL_STATUS_PENDING) {
          // if deal expired
          if (snapshot.createdAt < (Date.now() - DEAL_TIMEOUT * 1000)) {
            return this.dealService.removeDeal(this.driver.uid);
          }
          this.dealStatus = true;
          this.job = snapshot;

          console.log(this.job.origin.location)

          this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000
          }).then((resp) => {console.log(resp)
            //resp.coords.longitude
            this.job.origin.distance = this.placeService.calcCrow(resp.coords.latitude, resp.coords.longitude, this.job.origin.location.lat, this.job.origin.location.lng).toFixed(0);
          //  this.job.destination.distance = this.placeService.calcCrow(resp.coords.latitude, resp.coords.longitude, this.job.destination.location.lat, this.job.destination.location.lng).toFixed(0);
            this.countDown();
          },
            err => this.common.showToast(err.message)
          );
        }
      }
    });
  }

  playAudio() {
    if (PLAY_AUDIO_ON_REQUEST == true) {
      let audio = new Audio(AUDIO_PATH);
      audio.play();
    }
  }
}
