import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/Modules/usuario';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup

  constructor(private fb:FormBuilder, private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required]]    })
  }

  doLogin(){

    if(this.formLogin.invalid){ return ;}

    Swal.fire({
      title: 'Cargando..!!!!',
      onBeforeOpen: () => {
        Swal.showLoading()
      }   
    })

    this.auth.loginUser(this.formLogin.get("email").value, this.formLogin.get("password").value).then((user) => {
      console.log(user)
      Swal.close()
      this.route.navigateByUrl('/')
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    })
  }
}
