import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { TRANSACTION_TYPE_WITHDRAW } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private db: AngularFireDatabase) { }

  getTransactions(uid) {
    return this.db.list('transactions', ref => ref.orderByChild('userId').equalTo(uid));
  }

  widthDraw(user, amount: number) {
    return this.db.list('transactions/').push({
      userId: user.uid,
      name: user.name,
      amount: amount,
      createdAt: Date.now(),
      type: TRANSACTION_TYPE_WITHDRAW,
      status: 'PENDING'
    });
  }
}
