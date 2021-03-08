import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  logged: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('email') !== null) {
      console.log('Pass guard');
      this.logged = true;
    } else {
      this.logged = false;
      window.alert('La ruta está protegida, debes iniciar sesión');
      this.router.navigate(['/login']);
    }

    return this.logged;
  }

}
