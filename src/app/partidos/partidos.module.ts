import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { PartidosRoutingModule } from './partidos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NuevoJugadorComponent } from './nuevo-jugador/nuevo-jugador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RankingComponent } from './ranking/ranking.component';
import { GruposComponent } from './grupos/grupos.component';
import { EditarJugadorComponent } from './editar-jugador/editar-jugador.component';
import { AgregarPartidoComponent } from './agregar-partido/agregar-partido.component';



@NgModule({
  declarations: [HomeComponent,
    NuevoJugadorComponent,
    RankingComponent,
    GruposComponent,
    EditarJugadorComponent,
    AgregarPartidoComponent],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PartidosModule { }
