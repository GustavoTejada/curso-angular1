import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth
  ) { }

  async login(email: string, contrasena: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, contrasena);
    } catch (error: any) {
      console.log('Error en login', error);
      return null;
    }
  }

  async loginWithGoogle() {
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log('Error en login con Google', error);
      return null;
    }
  }

  async register(email: string, contrasena: string) {
    
  }
}
