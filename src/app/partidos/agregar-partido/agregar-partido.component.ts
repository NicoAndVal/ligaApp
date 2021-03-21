import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Jugador } from '../interfaces/jugador.interface';

@Component({
  selector: 'app-agregar-partido',
  templateUrl: './agregar-partido.component.html',
  styleUrls: ['./agregar-partido.component.css']
})
export class AgregarPartidoComponent implements OnInit {

  @Input() jugadores: Jugador[] = [];

  public formPartido = new FormGroup({
    jugador1: new FormControl(''),
    jugador2: new FormControl(''),
    setGanados1: new FormControl(''),
    setGanados2: new FormControl(''),
    puntosGanados1: new FormControl(''),
    puntosGanados2: new FormControl('')
  })

  constructor(private firestore : FirestoreService) { }

  ngOnInit(): void {

  }

  guardarPartido() {

    const valoresFormulario = this.formPartido.value;

    this.firestore.addJugadorEdit(valoresFormulario);
  }

}
