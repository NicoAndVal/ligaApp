import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Jugador } from '../interfaces/jugador.interface';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {


  links = ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D'];
  activeLink = this.links[0];

  jugadoresGrupo: Jugador[] = [];

  constructor(private firestores: FirestoreService) {

    this.jugadoresGrupo = [];
    this.firestores.obtenerJugadoresGrupo("Grupo A").subscribe((jugadores) => {
      jugadores.forEach((jugador: Jugador) => {
        this.jugadoresGrupo.push({
          nombre: jugador.nombre,
          grupo: jugador.grupo,
          ranking: jugador.ranking,
          foto: jugador.foto,
          pos_grupo: jugador.pos_grupo
        })
      });
    })

    console.log(this.jugadoresGrupo);
  }

  ngOnInit(): void {

  }

  obtenerJugadores(grupo: string) {

    this.jugadoresGrupo = [];
    console.log(grupo)

    this.firestores.obtenerJugadoresGrupo(grupo).subscribe((jugadores) => {
      console.log('Entro aquí')

      jugadores.forEach((jugador: Jugador) => {
        this.jugadoresGrupo.push({
          nombre: jugador.nombre,
          grupo: jugador.grupo,
          ranking: jugador.ranking,
          foto: jugador.foto,
          pos_grupo: jugador.pos_grupo
        })
      });
    })

    console.log(this.jugadoresGrupo);
  }

}
