import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment.prod'
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SettingService } from '../services/setting.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userInfo: any = {};

  langArr = [];
  lang = 'en';
  settings: any = {};

  constructor(public translate: TranslateService,
    private common: CommonService,
    private auth: AuthService,
    private router: Router,
    private menuCtrl: MenuController,
    private ss: SettingService
  ) {
    this.langArr = environment.langArr;
    this.lang = this.common.getLang();
    this.ss.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
  }

  changeLang() {
    this.common.changeLang(this.lang);
  }

  ngOnInit() {
  }

  login() {
    
    if (this.userInfo.email && this.userInfo.password) {
      let email = (this.userInfo.email).toLowerCase().trim();
      this.common.showLoader();
      this.auth.login(email, this.userInfo.password).then(() => {
        this.common.hideLoader();
        localStorage.setItem('isLoggedInTec', 'true');
        localStorage.setItem('User', email)
        this.router.navigateByUrl('/home');
      }, error => {
        this.common.hideLoader();
        this.common.showToast(error.message);
      });
    }
    else {
      this.common.showToast("Please Enter valid Email Address & password");
    }

  }
}
