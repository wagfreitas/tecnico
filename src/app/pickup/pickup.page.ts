import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TripService } from '../services/trip.service';
import { Router } from '@angular/router';
import { DealService } from '../services/deal.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators'
import { AlertController, MenuController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Geolocation } from '@ionic-native/geolocation/ngx';



@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.page.html',
  styleUrls: ['./pickup.page.scss'],
})
export class PickupPage implements OnInit {


  trip: any = {};
  passenger: any = {};
  isTripStarted = false;
  discount;
  tax = 0 ;

  constructor(
    private tripService: TripService,
    private alertCtrl: AlertController,
    private dealService: DealService,
    private router: Router,
    private common: CommonService,
    private translate: TranslateService,
    private db: AngularFireDatabase,
    private menuCtrl: MenuController,
    private geolocation: Geolocation
  ) {
    this.menuCtrl.enable(true);
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.trip = this.tripService.getCurrentTrip();
   //this.discount = (this.trip.rawfee * (this.trip.discount / 100)).toFixed(2)
    let getTrips = this.tripService.getTripStatus(this.trip.key).valueChanges().subscribe((trip: any) => {
      console.log(trip);
      this.trip.status = trip.status;
      if (trip.status == 'canceled') {
        getTrips.unsubscribe();
        this.tripService.cancel(this.trip.key);
        this.dealService.removeDeal(this.trip.driverId);
        this.common.showAlert("Atendimento Cancelado");
        this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
      }
      else if (trip.status == 'finished') {
        this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
      }
    })
    this.tripService.getPassenger(this.trip.passengerId).valueChanges().pipe(take(1)).subscribe(snapshot => {
      this.passenger = snapshot;
    })
  }


  cancelTrip() {
    this.alertCtrl.create({
      message: "Deseja cancelar o atendimento",
      buttons: [{
        text: "Sim",
        handler: () => this.tripService.cancel(this.trip.key)
      }, {
        text: "Não"
      }]
    }).then(res => res.present());
  }

  // pickup
  pickup() {
    this.alertCtrl.create({
      subHeader: "Entre com o Código de Atendimento",
      inputs: [{
        name: 'otp',
        placeholder: '4 digitos',
        type: 'tel',
      }],
      buttons: [{
        text: "Verificar",
        handler: (data) => {
          console.log(data);
          this.db.object('trips/' + this.trip.key).valueChanges().pipe(take(1)).subscribe((res: any) => {
            console.log(res);
            if (res.otp != data.otp) this.common.showAlert("Código Inválido");
            else {
              this.isTripStarted = true;
              this.tripService.pickUp(this.trip.key);
            }
          })
        }
      }]
    }).then(res => res.present());
  }

  getDirection(lat, lng) {
    console.log(lat,lng)
    this.geolocation.getCurrentPosition().then(geo => {
      geo.coords.latitude
     
      let url = `https://waze.com/ul?ll=${lat},${lng}&z=10`

      // `https://waze.com/ul?ll=${geo.coords.latitude},${geo.coords.longitude}&z=10`
      //"https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=" + geo.coords.latitude + "," + geo.coords.longitude + "&destination=" + lat + "," + lng;
      window.open(url);
    }).catch(err => {
      console.log("Error ");
    })
  }

  valuePayment(){
    console.log(this.tax)
  }


  showPayment() {
    this.alertCtrl.create({
      header: "Deseja completar o atendimento?",
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.tripService.dropOff(this.trip.key);
            this.dealService.removeDeal(this.trip.driverId);
            this.router.navigateByUrl('/home');
          }
        },
        {
          text: "Não"
        }
      ]
    }).then(res => res.present());
  }
}
