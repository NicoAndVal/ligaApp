import { AfterViewInit, Component, OnInit, ViewChild, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Jugador } from '../interfaces/jugador.interface';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  jugadores: Jugador[] = [];

  constructor(private firestore: FirestoreService) {

    this.jugadores = [];

    this.firestore.obtenerJugadores().subscribe((jugadoresSnapshot) => {
      jugadoresSnapshot.forEach((jugador : Jugador) => {
        this.jugadores.push({
          nombre: jugador.nombre,
          grupo: jugador.grupo,
          ranking: jugador.ranking,
          foto: jugador.foto,
          pos_grupo: jugador.pos_grupo
        })
      });
    })
  }


  ngOnInit(): void {





  }


}
