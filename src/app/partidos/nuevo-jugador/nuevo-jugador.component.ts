import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Grupos, Jugador } from '../interfaces/jugador.interface';


@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit {

  public formNuevoJugador = new FormGroup({
    nombre: new FormControl(''),
    grupo: new FormControl(''),
    foto: new FormControl('')
  })

  nuevoJugador: Jugador = {
    nombre: '',
    grupo: Grupos.grupo_a,
    ranking:0
  }

  grupos: Grupos[] =[Grupos.grupo_a,Grupos.grupo_b,Grupos.grupo_c,Grupos.grupo_d];

  constructor(
    private firestore: FirestoreService,
    private routes: Router
  ) { }

  ngOnInit(): void {
  }

  agregarJugador() {
    const valoresFormulario = this.formNuevoJugador.value;

    this.nuevoJugador = {
      nombre: valoresFormulario.nombre,
      foto: valoresFormulario.foto,
      ranking: 0,
      grupo: valoresFormulario.grupo,
      puntos_ganados: 0,
      set_ganados: 0,
      pos_grupo: 0
    }

    console.log(this.nuevoJugador)

    this.firestore.crearJugador(this.nuevoJugador)

    this.nuevoJugador = {
      nombre: '',
      foto: '',
      ranking: 0,
      grupo: valoresFormulario.grupo,
      puntos_ganados: 0,
      set_ganados: 0,
      pos_grupo: 0
    }

    this.routes.navigate(['./partidos']);


  }

}
