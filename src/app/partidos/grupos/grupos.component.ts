import { Component,  OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Jugador } from '../interfaces/jugador.interface';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent implements OnInit {
  links = ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D'];
  activeLink = this.links[0];

  displayedColumns: string[] = [
    'position',
    'nombre',
    'partidos_jugados',
    'partidos_ganados',
    'puntos_ganados',
  ];

  jugadoresGrupo: Jugador[] = [];
  dataSource: Jugador[] = [];

  constructor(private firestores: FirestoreService) {}

  ngOnInit(): void {
    this.firestores.obtenerJugadoresGrupo('Grupo A').subscribe((jugadores) => {
      this.jugadoresGrupo = [];
      jugadores.forEach((jugador: any) => {
        this.jugadoresGrupo.push({
          id: jugador.payload.doc.id,
          ...jugador.payload.doc.data(),
        });
      });
    });
    console.log(this.jugadoresGrupo);
    this.dataSource = this.jugadoresGrupo;
  }

  obtenerJugadores(grupo: string) {
    this.firestores.obtenerJugadoresGrupo(grupo).subscribe((jugadores) => {
      this.jugadoresGrupo = [];
      jugadores.forEach((jugador: any) => {
        this.jugadoresGrupo.push({
          id: jugador.payload.doc.id,
          ...jugador.payload.doc.data(),
        });
      });
    });

    this.dataSource = this.jugadoresGrupo;

  }
}
