import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Grupo1Component } from "./grupo1/grupo1.component";
import { Grupo2Component } from "./grupo2/grupo2.component";
import { Grupo3Component } from "./grupo3/grupo3.component";
import { Grupo4Component } from "./grupo4/grupo4.component";
 import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'grupo-1', component: Grupo1Component},
      {path: 'grupo-2', component: Grupo2Component},
      {path: 'grupo-3', component: Grupo3Component},
      {path: 'grupo-4', component: Grupo4Component},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class PartidosRoutingModule{

}
