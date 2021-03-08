import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : AngularFirestore) { }

   async crearJugador(data : any) {
    try {
      const nuevoJugador = await this.firestore.collection('jugadores').add(data);
      return nuevoJugador.id
    } catch (error) {
      console.log('error al crear el usuario->', error);
      return;
    }
   }

  obtenerJugador(uid: string) {
    try {
      this.firestore.collection('jugador')
    } catch (error) {

    }
  }

}
