import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  iniciarSesion: FormGroup
  tipodeIngreso: boolean = true;
  

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private router: Router) {
    this.iniciarSesion = this.fb.group({
      email: [''],
      password: [''],
      phone: ['']

    });

  }
  ngOnInit(): void {

  }
  cambiar(): void {
    this.tipodeIngreso = !this.tipodeIngreso;
    
  }

  iniciar(): void {
    if (this.tipodeIngreso) {
      this.inicioEmail()
      console.log('holis')
    }
    else {
      this.inicioPhone();
      console.log('adios');
    }


  }

  inicioEmail(): void {
    const email = this.iniciarSesion.value.email;
    const password = this.iniciarSesion.value.password;

    this.afAuth.signInWithEmailAndPassword(email,password)
    .then(()=>{
      this.router.navigate(['/home']);
    })
    .catch(()=>{

    });
  }
  inicioPhone(): void {
  
    const phone = this.iniciarSesion.value.phone;
    console.log(phone);
    const appVerifier = new firebase.default.auth.RecaptchaVerifier('recaptcha-container');
    
    this.afAuth.signInWithPhoneNumber(phone, appVerifier)
      .then((confirmationResult) => {
        let verificationCode:any = window.prompt('Ingresa el código de verificación');
        return confirmationResult.confirm(verificationCode);
      })
      .then((result) => {
        
        const user = result.user;
        this.router.navigate(['/home']);
        console.log('Autenticación exitosa:', user);
      })
      .catch((error) => {
        
        console.log('Error en la autenticación:', error);
        switch (error.code) {
          case 'auth/user-not-found':
              alert('El usuario no existe');
            break;

          case 'auth/wrong-password':
            alert('Contraseña incorrecta');
            break;
        
          default:
            break;
        }
      });




  }

}

