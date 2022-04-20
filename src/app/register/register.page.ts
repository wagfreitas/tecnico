import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { MenuController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { SettingService } from '../services/setting.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userInfo: any = {};
  step = 'step1';
  types: Array<any> = [];
  settings: any = {};

  constructor(
    private translate: TranslateService,
    private auth: AuthService,
    private common: CommonService,
    private afStorage: AngularFireStorage,
    private settingService: SettingService,
    private menuCtrl: MenuController,
    private router: Router
  ) {
    this.settingService.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.settingService.getVehicleType().pipe(take(1)).subscribe((snapshot: any) => {
      if (snapshot === null) {
        this.settingService.getDefaultVehicleType().pipe(take(1)).subscribe((snapshot: any) => {
        console.log(snapshot);
          this.types = Object.keys(snapshot).map(function (key) {
            return snapshot[key];
          });
        })
      } else {
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
    console.log(this.userInfo)

    this.common.showLoader();
    this.userInfo.rating = parseInt(this.settings.driverInitialRating);
    this.userInfo.balance = parseFloat(this.settings.driverSignupBonus);
    this.userInfo.type = 'suv'

    this.auth.register(this.userInfo).subscribe(
      () => {
        this.common.hideLoader();
        localStorage.setItem('isLoggedInTec', 'true');
        this.router.navigateByUrl('/home');
      },
      (err) => {
        this.common.hideLoader();
        this.common.showToast(err.message);
      }
    );
  }

  chooseDocs() { document.getElementById('docsPDF').click(); }
  uploadDocs() {
    this.common.showLoader();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('docsPDF')).files[0]]) {
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
}
