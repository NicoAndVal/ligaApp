import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Grupos, Jugador } from '../interfaces/jugador.interface';


@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit {

  public formNuevoJugador = new FormGroup({
    nombre: new FormControl('', Validators.required),
    grupo: new FormControl('', Validators.required),
  })

  nuevoJugador: Jugador = {
    nombre: '',
    grupo: Grupos.grupo_a,
    ranking:0
  }

  grupos: Grupos[] =[Grupos.grupo_a,Grupos.grupo_b,Grupos.grupo_c,Grupos.grupo_d];

  constructor(
    private firestore: FirestoreService,
    private routes: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  agregarJugador() {
    const valoresFormulario = this.formNuevoJugador.value;

    this.nuevoJugador = {
      nombre: valoresFormulario.nombre,
      foto: '',
      ranking: 0,
      partidos_ganados: 0,
      partidos_jugados: 0,
      partidos_perdidos: 0,
      puntos_ranking:0,
      grupo: valoresFormulario.grupo,
      puntos_ganados: 0,
      set_ganados: 0,
      pos_grupo: 0
    }

    this.firestore.crearJugador(this.nuevoJugador).then(() => {
      this.toastr.success("Jugador agregado correctamente", 'Éxito')
    }).catch(error => {
      this.toastr.error('Upps algo salio mal', 'Error');
      console.log(error);
    })

    this.nuevoJugador = {
      nombre: '',
      foto: '',
      ranking: 0,
      partidos_ganados: 0,
      partidos_jugados: 0,
      partidos_perdidos: 0,
      puntos_ranking:0,
      grupo: valoresFormulario.grupo,
      puntos_ganados: 0,
      set_ganados: 0,
      pos_grupo: 0
    }

    this.routes.navigate(['./partidos/ranking']);

  }

}
