import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { PartidosRoutingModule } from './partidos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Grupo1Component } from './grupo1/grupo1.component';
import { Grupo2Component } from './grupo2/grupo2.component';
import { Grupo3Component } from './grupo3/grupo3.component';
import { Grupo4Component } from './grupo4/grupo4.component';



@NgModule({
  declarations: [HomeComponent, Grupo1Component, Grupo2Component, Grupo3Component, Grupo4Component],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PartidosModule { }
