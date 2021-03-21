import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Jugador } from '../interfaces/jugador.interface';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  jugadores: Jugador[] = [];
  public editar: boolean = false;


  constructor(private firestore: FirestoreService,
    private toast: ToastrService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.firestore.obtenerJugadores().subscribe(doc => {
      this.jugadores = [];
      doc.forEach((jugador: any) => {
        this.jugadores.push({
          id: jugador.payload.doc.id,
          ...jugador.payload.doc.data()
        })
      });
    })

  }

  eliminarJugador(id: any) {
    this.jugadores = [];
    this.firestore.eliminarJugador(id).then(() => {
      this.toast.error('Jugador eliminado con éxito', "Registro eliminado");
    }).catch(error => {
      this.toast.error('Algo salio mal', 'Error');
      console.error(error);
    })

  }

  editarJugador(jugador: Jugador) {

    this.firestore.addJugadorEdit(jugador);
    this.editar = true;
  }


}
