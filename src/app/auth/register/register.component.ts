import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/Modules/usuario';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister:FormGroup

  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  createUser() {

    if(this.formRegister.invalid){
      return
    }
    
    Swal.fire({
      title: 'Cargando..!!!!',
      onBeforeOpen: () => {
        Swal.showLoading()
      }   
    })

    this.authService.createUser(this.formRegister.value as User)
      .then( credenciales => {
        Swal.close()
        this.router.navigateByUrl("/")
        console.log(credenciales)
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    })

  }
}
