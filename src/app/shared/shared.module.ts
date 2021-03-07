import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { PartidosRoutingModule } from '../partidos/partidos-routing.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PartidosRoutingModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
