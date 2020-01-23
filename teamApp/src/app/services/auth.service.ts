import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth,
    private router: Router
  ) { }

 // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.router.navigate(["loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)"]);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  //SignOut method for logging out from the Angular/Firebase app 
  
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['sign-in']);
    })
  }


  // doRegister(value){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  //     .then(
  //       res => resolve(res),
  //       err => reject(err))
  //   })
  //  }
 
  //  doLogin(value){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
  //     .then(
  //       res => resolve(res),
  //       err => reject(err))
  //   })
  //  }
 
  //  doLogout(){
  //    return new Promise((resolve, reject) => {
  //      this.afAuth.auth.signOut()
  //      .then(() => {
  //        this.firebaseService.unsubscribeOnLogOut();
  //        resolve();
  //      }).catch((error) => {
  //        reject();
  //      });
  //    })
  //  }

}
