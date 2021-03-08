import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  { path: '', component: AuthenticationComponent},
  { path: 'login', component: AuthenticationComponent},
  { path: 'partidos', loadChildren:() =>import('./partidos/partidos.module').then(m => m.PartidosModule) , canActivate:[LoggedGuard]},
  { path:'404', component:AppComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
