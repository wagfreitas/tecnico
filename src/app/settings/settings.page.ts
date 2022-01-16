import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../services/common.service';
import { environment } from "../../environments/environment.prod";
import { AuthService } from '../services/auth.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { SettingService } from '../services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settings: any = {};
  langArr = [];
  lang = 'en';
  user: any = {};

  constructor(
    private translate: TranslateService,
    private common: CommonService,
    private authService: AuthService,
    private fcm: FirebaseX,
    private ss: SettingService
  ) {

    this.langArr = environment.langArr;
    this.lang = this.common.getLang();
    this.ss.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
  }

  ngOnInit() {
    this.authService.getUserData().then((user) => {
      this.authService.getUser(user.uid).valueChanges().subscribe(user => this.user = user)
    });
  }

  changeLang() {
    this.common.changeLang(this.lang);
  }

  openSupport() {
    window.open(this.settings.driverSupportURL, "_blank");
  }

  change() {
    console.log(this.user.isPushEnabled);
    if (this.user.isPushEnabled == false || this.user.isPushEnabled == undefined) {
      this.fcm.getToken().then(token => {
        this.authService.getUser(this.user.uid).update({ isPushEnabled: true, pushToken: token });
      }).catch(err => {
        console.log(err);
        this.authService.getUser(this.user.uid).update({ isPushEnabled: false, pushToken: null });
      });
    }
    else {
      this.authService.getUser(this.user.uid).update({ isPushEnabled: false, pushToken: null });
    }
  }

}