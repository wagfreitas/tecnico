import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var cordova;

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loader = null;

  constructor(
    private toast: ToastController,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private platform: Platform,
    private translate: TranslateService,
    private geolocation: Geolocation
  ) { }

  showToast(message) {
    this.toast.create({ message: message, duration: 2000 }).then((res) => res.present());
  }

  showAlert(message) {
    this.alertCtrl.create({
      message: message,
      buttons: ['ok']
    }).then(res => res.present());
  }

  showLoader() {
    if (this.loader == null) {
      this.loadCtrl.create({ spinner: 'circles', duration: 5000 }).then(res => {
        this.loader = res;
        this.loader.present();
      });
    }

  }

  hideLoader() {
    if (this.loader != null) {
      this.loader.dismiss();
      this.loader = null;
    }
  }

  enableBgMode() {
    if (this.platform.is('android') || this.platform.is("ios")) {


      cordova.plugins.backgroundMode.setDefaults({ id: -1, title: 'Driver App', text: 'Running in Background Mode', hidden: false, silent: false });

      cordova.plugins.backgroundMode.setEnabled(true);
      cordova.plugins.backgroundMode.on('enable', () => {
        console.log('background mode Enabled !!!');

        cordova.plugins.backgroundMode.disableWebViewOptimizations();
        cordova.plugins.backgroundMode.disableBatteryOptimizations();


      });

      cordova.plugins.backgroundMode.on('active', () => console.log("bgm: active"))

      cordova.plugins.backgroundMode.on('deactivate', () => console.log("bgm: deactive"))

      cordova.plugins.backgroundMode.on('failure', () => console.log("bgm: failed"))

      cordova.plugins.backgroundMode.on('disable', () => console.log('bgm: disable'));

    } else {
      // this.showToast("Background mode only works on device");
    }

  }

  disableBgMode() {
    cordova.plugins.backgroundMode.setEnabled(false);
  }

  changeLang(lang) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  getLang() {
    let lang = localStorage.getItem('lang');
    if (lang == null || lang == undefined)
      return 'en';

    else
      return lang;
  }

}
