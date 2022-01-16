import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { SettingService } from '../services/setting.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  // list of records
  public trips = [];
  fromDate: any;
  toDate: any;
  earning = 0;
  filter = 'today';
  today;
  allTrips = [];
  settings: any = {};

  constructor(
    private tripService: TripService,
    private translate: TranslateService,
    private ss: SettingService,
    private authService: AuthService
  ) {
    this.today = new Date().toISOString();
    this.fromDate = new Date().toISOString();
    this.toDate = new Date().toISOString();
    this.ss.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
  }

  ngOnInit() {
    this.authService.getUserData().then((user) => {
      this.tripService.getTrips(user.uid).valueChanges().subscribe(snapshot => {
        if (snapshot != null) {
          this.trips = snapshot;
          this.allTrips = this.trips;
          this.allTrips.reverse()
          this.calculateEarning();
        }
      });
    });
  }

  calculateEarning() {
    let total = 0;
    this.trips.forEach(trip => {
      if (trip.commission != undefined && trip.commission != null)
        total += parseFloat(trip.commission)
    })
    this.earning = total;
  }

  applyFilter() {
    this.trips = this.allTrips;

    let fromDate = new Date(this.fromDate)
    fromDate.setHours(0, 0, 0, 0);
    let from = fromDate.getTime();


    let toDate = new Date(this.toDate);
    toDate.setHours(23, 59, 59, 999);
    let to = toDate.getTime();


    let tmp = this.trips.filter(item => item.createdAt >= from && item.createdAt <= to);
    this.trips = tmp;
    this.calculateEarning();
  }

  reset() {
    this.trips = this.allTrips;
    this.calculateEarning();
  }

}
