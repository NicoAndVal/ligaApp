import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Grupos, Jugador } from '../interfaces/jugador.interface';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agregar-partido',
  templateUrl: './agregar-partido.component.html',
  styleUrls: ['./agregar-partido.component.css']
})
export class AgregarPartidoComponent implements OnInit {

  @Input() jugadores: Jugador[] = [];

  jugador1: any;
  jugador2: any;
  jugador1Actualizado: Jugador = {
    nombre: '',
    grupo: Grupos.grupo_a,
    ranking: 0
  }
  jugador2Actualizado: Jugador = {
    nombre: '',
    grupo: Grupos.grupo_a,
    ranking: 0
  }
  private serviceSuscription: Subject<boolean> = new Subject();

  public formPartido = new FormGroup({
    jugador1: new FormControl(''),
    jugador2: new FormControl(''),
    setGanados1: new FormControl(''),
    setGanados2: new FormControl(''),
    puntosGanados1: new FormControl(''),
    puntosGanados2: new FormControl('')
  })

  constructor(private firestore: FirestoreService,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {

  }

  guardarPartido() {

    this.jugador1 = this.jugadores.filter(jugador => { return jugador.nombre === this.formPartido.value.jugador1 });
    this.jugador2 = this.jugadores.filter(jugador => { return jugador.nombre === this.formPartido.value.jugador2 });

    this.jugador1Actualizado = this.jugador1[0];
    this.jugador2Actualizado = this.jugador2[0];

    this.jugador1Actualizado = this.actualizarJugador(this.jugador1Actualizado, parseInt(this.formPartido.value.setGanados1), parseInt(this.formPartido.value.puntosGanados1));
    this.jugador2Actualizado = this.actualizarJugador(this.jugador2Actualizado, parseInt(this.formPartido.value.setGanados2), parseInt(this.formPartido.value.puntosGanados2));

    this.firestore.editarJugador(this.jugador1Actualizado.id!, this.jugador1Actualizado);
    this.firestore.editarJugador(this.jugador2Actualizado.id!, this.jugador2Actualizado);

    this.formPartido.reset();
    this.toastr.success('Partido agregado con éxito', 'Agregaste un partido');

  }


  actualizarJugador(jugador : any, setGanados:number, puntosGanados:number) {
    jugador = {
      ...jugador,
      puntos_ganados: (jugador.puntos_ganados + puntosGanados),
      set_ganador: (jugador.set_ganados + setGanados),
      partidos_jugados: (jugador.partidos_jugados + 1)
    }
    if (puntosGanados === 3) {
      //el jugador gano
      jugador = {
        ...jugador,
        partidos_ganados : (parseInt(jugador.partidos_ganados) +1)
      }
    } else {
      //el jugador perdio
      jugador = {
        ...jugador,
        partidos_perdidos : (jugador.partidos_perdidos +1)
      }

    }

    return jugador;
  }

}
