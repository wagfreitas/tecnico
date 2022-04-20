import { Component, OnInit } from '@angular/core';
import { DriverService } from '../services/driver.service';
import { TransactionService } from '../services/transaction.service';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../services/common.service';
import { AlertController } from '@ionic/angular';
import { SettingService } from '../services/setting.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  records: any;
  driver: any;
  settings: any = {};

  constructor(private transactionService: TransactionService,
    private translate: TranslateService,
    private driverService: DriverService,
    private common: CommonService,
    private alertCtrl: AlertController,
    private ss: SettingService,
    private authService: AuthService
  ) {

  }
  ionViewDidEnter() {
    this.authService.getUserData().then(user => {
      this.ss.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
      this.driverService.getDriver(user.uid).valueChanges().subscribe(snapshot => this.driver = snapshot);
      this.transactionService.getTransactions(user.uid).valueChanges().subscribe(snapshot => snapshot != null ? this.records = snapshot.reverse() : []);
    })
  }

  withdraw() {

    this.alertCtrl.create({
      header: "Make a Withdraw",
      inputs: [
        { name: 'amount', placeholder: 'Amount' },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            console.log(data);
            console.log(this.driver);
            if (parseFloat(data.amount) > parseFloat(this.driver.balance)) {
              this.common.showAlert("Insufficient Balance");
            }
            else {
              this.transactionService.widthDraw(this.driver, data.amount).then(() => {
                this.common.showToast('withdraw Requested');
              });
            }
          }
        }
      ]
    }).then(x => x.present());
  }

  ngOnInit() {
  }

}
