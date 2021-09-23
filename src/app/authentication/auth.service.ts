import {Injectable, OnInit} from '@angular/core';
import {firebaseApp} from "src/firebase";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import {BehaviorSubject, Observable} from "rxjs";
import {filter, take} from "rxjs/operators";
import {AuthenticationException} from "../../exceptions";
import {LogEvent} from "../../log-event";
import * as LogRocket from 'logrocket';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = getAuth(firebaseApp)

  private userSubject = new BehaviorSubject<User | null | undefined>(undefined);

  constructor() {
    onAuthStateChanged(this.auth, user => {
      this.userSubject.next(user)
    });
  }

  async getToken(): Promise<string> {
    const user = await ((this.userSubject.asObservable().pipe(filter(v => v !== undefined)) as Observable<User | null>).pipe(take(1)).toPromise());
    if (user !== null) {
      return user.getIdToken();
    } else {
      throw new AuthenticationException();
    }
  }

  async createAccount(email: string, password: string): Promise<boolean> {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      LogRocket.track(LogEvent.CreateAccount)
      return true;
    } catch (e: unknown) {
      return false;
    }
  }

  async signIn(email: string, password: string): Promise<boolean> {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      LogRocket.track(LogEvent.SignIn)
      return true;
    } catch (e: unknown) {
      return false;
    }
  }

  async signOut(): Promise<boolean> {
    try {
      await signOut(this.auth);
      LogRocket.track(LogEvent.SignOut)
      LogRocket.startNewSession();
      return true;
    } catch (e: unknown) {
      return false;
    }
  }
}
