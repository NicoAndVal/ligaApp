import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  })

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  onLogin() {
    console.log(this.loginForm.value.email);
    this.firebaseService.login(this.loginForm.value.email, this.loginForm.value.pass).then(resp => {
      this.toastr.success('Has ingresado con éxito', 'Ingreso éxitoso');
      this.router.navigate(['/partidos/ranking']);
    }).catch(error => {
      console.log(error);
    })
  }

}
