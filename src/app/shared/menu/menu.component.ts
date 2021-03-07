import { Component, OnInit } from '@angular/core';

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
    `
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
