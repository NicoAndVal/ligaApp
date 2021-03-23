import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { Observable, Subject } from 'rxjs';
import { Jugador } from '../partidos/interfaces/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private jugador$ = new Subject<any>();

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
     return this.firestore.collection('jugadores').snapshotChanges();
  }

  obtenerJugadoresGrupo(grupo: string): Observable<any> {
    return this.firestore.collection('jugadores', ref => ref.where('grupo', '==', grupo)).snapshotChanges();
  }

  obtenerJugadorNombre(nombre: string): Observable<any>{
    return this.firestore.collection('jugadores', ref => ref.where('nombre', '==', nombre)).snapshotChanges();
  }
  eliminarJugador(data: any): Promise<any>{
    return this.firestore.collection('jugadores').doc(data).delete();

  }

  addJugadorEdit(jugador : Jugador) {
    this.jugador$.next(jugador);
  }

  getJugadorEdit(): Observable<Jugador> {
    return this.jugador$.asObservable();
  }

  editarJugador(id: string, jugador: any): Promise<any>{
    return this.firestore.collection('jugadores').doc(id).update(jugador);
  }
}
