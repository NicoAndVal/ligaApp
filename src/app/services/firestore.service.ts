import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Jugador } from '../partidos/interfaces/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public jugadoresDb: any;

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

  obtenerJugadores() : Observable<any> {
   try {
     return this.firestore.collection('jugadores').valueChanges();
    } catch (error) {
      console.log('Error getUser -> ' + error);
      return error;
    }
  }

  obtenerJugadoresGrupo(grupo:string): Observable<any>{
    try {
     return this.firestore.collection('jugadores', ref => ref.where('grupo', '==', grupo)).valueChanges();
    } catch (error) {
      console.log('Error getUser -> ' + error);
      return error;
    }
  }

  obtenerJugador() : Observable<Jugador> {
    return new Observable(observer => {
      this.firestore.firestore.collection('jugadores').get().then(queryShanpshot => {
        queryShanpshot.forEach(resp => {
          this.jugadoresDb.data();
        })
        observer.next(this.jugadoresDb);
        observer.complete();
      }).catch(error => {
        observer.error(error);
        observer.complete();
      })
    })
  }

}
