import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TripService } from './services/trip.service';
import { AuthService } from './services/auth.service';
import { DriverService } from './services/driver.service';

import { TRIP_STATUS_WAITING, TRIP_STATUS_GOING } from 'src/environments/environment.prod';

import { take } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Meus Atendimentos',
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
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController,
    private translate: TranslateService,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private authService: AuthService,
    private tripService: TripService,
    private driverService: DriverService,
  ) {
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
}
