import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  regitrarUsuario: FormGroup;
  load:boolean=false;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private router: Router) {
    this.regitrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      repPassword: ['', [Validators.required,Validators.minLength(6)]],
      phone: ['', [Validators.required]]

    })
  }


  ngOnInit(): void {

  }


  registrar(): void {
    const email = this.regitrarUsuario.value.email;
    const password = this.regitrarUsuario.value.password;
    const repPassword = this.regitrarUsuario.value.repPassword;
    const phone = this.regitrarUsuario.value.phone;

    this.load=true;
    if (password != repPassword) {
      alert('las contraseñas deben ser iguales');

    }
    else {
      console.log(email, password, repPassword, phone);
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigate(['/singin']);
          console.log('firus'); 
        })
        .catch((err) => {
          console.log('Balto: ' + err);
          this.load=false;
          alert(this.fireError(err.code));
          
        });
    }


  }

  fireError(code: String): string {

    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe';
        break;
      case 'auth/weak-password':
        return 'La contraseña es muy debil';
        break;

      default:
        return 'error desconocido';
        break;
    }

  }

}
