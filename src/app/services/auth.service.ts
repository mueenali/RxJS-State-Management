import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user) {
          return afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUser(credentials.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUser(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      email: user.email,
      uid: user.uid
    };
    return userRef.set(data, {merge: true});
  }
}
