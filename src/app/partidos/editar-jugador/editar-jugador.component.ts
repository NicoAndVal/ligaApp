import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Grupos, Jugador } from '../interfaces/jugador.interface';

@Component({
  selector: 'app-editar-jugador',
  templateUrl: './editar-jugador.component.html',
  styleUrls: ['./editar-jugador.component.css']
})
export class EditarJugadorComponent implements OnInit {

  grupos: Grupos[] =[Grupos.grupo_a,Grupos.grupo_b,Grupos.grupo_c,Grupos.grupo_d];
  private id: string= '';

  public formEditJugador = new FormGroup({
    nombre: new FormControl(''),
    grupo: new FormControl(''),
    partidos_ganados: new FormControl(''),
    partidos_jugados: new FormControl(''),
    set_ganados: new FormControl(''),
    partidos_perdidos: new FormControl(''),
    puntos_ganados: new FormControl(''),
    puntos_ranking: new FormControl(''),
    ranking: new FormControl('')
  })

  constructor(private firebase: FirestoreService,
    private toast: ToastrService
  ) {

  }

  ngOnInit(): void {

    this.firebase.getJugadorEdit().subscribe((data:any) => {
      console.log(data.nombre);
      this.id = data.id;
      this.formEditJugador.patchValue({
        nombre: data.nombre,
        grupo: data.grupo,
        partidos_ganados: data.partidos_ganados,
        partidos_jugados: data.partidos_jugados,
        set_ganados: data.set_ganados,
        partidos_perdidos:data.partidos_perdidos,
        puntos_ganados: data.puntos_ganados,
        puntos_ranking:data.puntos_ranking,
        ranking:data.ranking
      })
    })

    console.log(this.formEditJugador.value);
  }

  guardarJugador() {
    this.firebase.editarJugador(this.id, this.formEditJugador.value);
    this.toast.info('Jugador Actualizado','éxito')
    this.formEditJugador.reset();

  }

}
