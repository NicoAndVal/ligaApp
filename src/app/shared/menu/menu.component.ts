import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      .titulo-menu{
        width:200px;
        text-align: center;
        padding: 1rem;
      }
      .container{
        padding:2rem;
      }
      .navBar{
        display: flex;
        justify-content: space-between;
      }
    `
  ]
})
export class MenuComponent implements OnInit {


  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.firebaseService.currentUser().then(resp => {
      console.log('Usuario actual->', resp);
    })
  }

  salir() {
    this.firebaseService.logout().then(resp => {
      console.log('Saliendo...', resp);
      this.router.navigate(['/login']);
    })
  }

}
