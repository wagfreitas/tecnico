import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { DEFAULT_AVATAR } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any = {};

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {

  }

  login(email, pass) {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }

  reset(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  register(userInfo) {
    //console.log(userInfo);
    return Observable.create(observer => {
      let email = (userInfo.email).toLowerCase().trim();

      this.afAuth.createUserWithEmailAndPassword(email, userInfo.password).then((authData: any) => {
        // update driver object
        console.log(authData);
        userInfo.uid = authData.user.uid;
        userInfo.photoURL = DEFAULT_AVATAR;
        userInfo.canRide = true;
        userInfo.isPhoneVerified = false;
        userInfo.createdAt = Date.now();

        this.getUserData().then(user =>
          user.updateProfile({ displayName: userInfo.name, photoURL: DEFAULT_AVATAR })
        );
        this.db.object('drivers/' + userInfo.uid).update(userInfo);

        observer.next();
      }).catch((error: any) => {
        if (error) {
          observer.error(error);
        }
      });
    });
  }

  setUserData(obj) {
    return this.currentUser = obj;
  }

  getUserData() {
    return this.afAuth.currentUser;
  }

  getUser(id) {
    return this.db.object('drivers/' + id);
  }

  logout() {
    return this.afAuth.signOut();   // logout from firebase
  }

  resetPassword(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
