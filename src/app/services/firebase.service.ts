import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  async login(email: string, pass: string): Promise<any> {
    try {
       const respAuth = await this.angularFireAuth.signInWithEmailAndPassword(email, pass);
       console.log('resp auth', respAuth);
       localStorage.setItem(
          'email', respAuth.user!.email!
        )
       return respAuth;
     } catch (error) {
       console.log(error);
     }

  }

  async logout() {
    try {
      const logoutResp = await this.angularFireAuth.signOut();
      console.log('logout exitoso');
      localStorage.clear();
      return logoutResp;
    } catch (error) {
      console.error('logout error -->', error);
      return error;
    }
  }

  //NO ME ESTÁ DEVOLVIENDO EL VALOR DEL USUARIO
  async currentUser() : Promise<any>{
    try {
      const currentUser = await this.angularFireAuth.currentUser;
      console.log(currentUser);
      return currentUser;
    } catch (error) {
      console.log(error);
    }
  }

}
