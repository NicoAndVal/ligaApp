import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarJugadorComponent } from "./editar-jugador/editar-jugador.component";
import { GruposComponent } from "./grupos/grupos.component";
 import { HomeComponent } from "./home/home.component";
import { NuevoJugadorComponent } from "./nuevo-jugador/nuevo-jugador.component";
import { RankingComponent } from "./ranking/ranking.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'ranking', component: RankingComponent},
      {path: 'editar', component: EditarJugadorComponent},
      {path: 'grupos', component: GruposComponent},
      {path: 'nuevo-jugador', component: NuevoJugadorComponent}
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
